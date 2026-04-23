/**
 * Table & Ledger -- Contact form handler
 *
 * Cloudflare Pages Function that receives POSTs from /ask/ and sends
 * an email via Resend. Deployed at /api/contact.
 *
 * Env vars (set in Cloudflare Pages -> Settings -> Environment variables):
 *   RESEND_API_KEY   -- Bearer token from resend.com
 */

export async function onRequestPost(context) {
    const { request, env } = context;

    // --- Parse body ---
    let data;
    try {
        const contentType = request.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
            data = await request.json();
        } else {
            const form = await request.formData();
            data = Object.fromEntries(form);
        }
    } catch (err) {
        return json({ error: 'Could not read the form submission.' }, 400);
    }

    // --- Honeypot (silent drop) ---
    // The form renders a hidden text input named company_website.
    // Humans ignore it. Bots dutifully fill it in. If it's non-empty,
    // we return 200 OK so the bot thinks it worked, but we send nothing.
    if (data.company_website && String(data.company_website).trim() !== '') {
        return json({ ok: true });
    }

    // --- Validate ---
    const name = (data.name || '').toString().trim();
    const email = (data.email || '').toString().trim();
    const message = (data.message || '').toString().trim();
    const restaurant = (data.restaurant || '').toString().trim();
    const locations = (data.locations || '').toString().trim();

    if (!name || !email || !message) {
        return json({ error: 'Name, email, and your message are all required.' }, 400);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return json({ error: 'That email address does not look right.' }, 400);
    }
    if (name.length > 200 || email.length > 200 || restaurant.length > 200) {
        return json({ error: 'One of those fields is unreasonably long.' }, 400);
    }
    if (message.length > 10000) {
        return json({ error: 'Message is too long. Trim it down a bit.' }, 400);
    }

    if (!env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY not configured in Pages environment.');
        return json({ error: 'Mail is not configured on the server.' }, 500);
    }

    // --- Build email ---
    const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));

    const subjectParts = [name];
    if (restaurant) subjectParts.push(restaurant);
    const subject = `Ask an Operator: ${subjectParts.join(' / ')}`;

    const textBody = [
        `From: ${name} <${email}>`,
        restaurant ? `Restaurant / Company: ${restaurant}` : null,
        locations ? `Locations: ${locations}` : null,
        '',
        'Message:',
        message,
        '',
        '--',
        'Sent from the Ask an Operator form on tableandledger.com'
    ].filter((line) => line !== null).join('\n');

    const htmlBody = `
        <div style="font-family: Georgia, serif; max-width: 640px; color: #1a1a18; line-height: 1.6;">
            <p style="margin: 0 0 1.25rem; font-family: 'Courier New', monospace; font-size: 0.75rem; color: #8a8780; text-transform: uppercase; letter-spacing: 0.12em;">Ask an Operator / tableandledger.com</p>
            <p style="margin: 0 0 0.5rem;"><strong>From:</strong> ${esc(name)} &lt;${esc(email)}&gt;</p>
            ${restaurant ? `<p style="margin: 0 0 0.5rem;"><strong>Restaurant / Company:</strong> ${esc(restaurant)}</p>` : ''}
            ${locations ? `<p style="margin: 0 0 0.5rem;"><strong>Locations:</strong> ${esc(locations)}</p>` : ''}
            <hr style="border: none; border-top: 1px solid #d4d0c8; margin: 1.5rem 0;">
            <div style="white-space: pre-wrap;">${esc(message)}</div>
        </div>
    `;

    // --- Send via Resend ---
    let resendRes;
    try {
        resendRes = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Table & Ledger <contact@tableandledger.com>',
                to: ['info@tableandledger.com'],
                reply_to: email,
                subject,
                text: textBody,
                html: htmlBody,
            }),
        });
    } catch (err) {
        console.error('Resend fetch failed:', err);
        return json({ error: 'Could not reach the mail service. Try again in a minute.' }, 502);
    }

    if (!resendRes.ok) {
        const errText = await resendRes.text().catch(() => '');
        console.error('Resend non-200:', resendRes.status, errText);
        return json({ error: 'The mail service rejected the message. Try again or email info@tableandledger.com directly.' }, 502);
    }

    return json({ ok: true });
}

function json(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store',
        },
    });
}
