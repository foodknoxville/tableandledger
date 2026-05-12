---
title: What Changed in Ten Weeks
date: 2026-05-12
category: Essay
slug: what-changed-in-ten-weeks
lede: Jack Dorsey announced four thousand cuts at Block in late February and framed them as AI-driven restructuring. The skeptical reads were expected. Ten weeks later, Square is shipping a quarter of operator-requested F&B features and has another quarter scheduled. Cuts of this scale historically slow shipping. This one accelerated it. Here is what the structural read looks like from the operator side of the cycle.
---

People are tired of "blame AI" as the explanation for everything. People are tired of AI being a panacea. Both fair. "Due to AI", has been used as cover for so many decisions in the last two years that it has stopped meaning anything specific. When Jack Dorsey announced four thousand cuts at Block in late February and framed them as AI-driven restructuring, the skeptical reads were expected. Was it a convenient narrative, a real phase change, or something else?

It has been ten weeks. Here is what we can see now.

On May 14, Square is shipping a release that includes bar tab preauthorization in Standard mode, structured pickup, delivery, and dine-in fulfillment flows on POS, Real Time Check View as an open beta in F&B modes with multi-select cart actions, group ordering that consolidates into a single kitchen ticket, time-based menu group availability on Square Online, advanced rules for manual discounts including BOGO and category targeting, compact ticket mode and font customization for printed kitchen tickets, and DoorDash and Uber Eats integration expansions across Australia, the UK, and Canada. That is one drop. Two weeks ago there was another. Two weeks before that, another.

The Q1 2026 roadmap that Square has published openly includes inventory OCR invoice automation, live sales reporting, restaurant inventory tracking through a MarketMan partnership, future and scheduled item availability, revenue centers for tracking sales by service area, multiple tip pools per location, automated upsells on Square Kiosk, and several others. Operator-requested features that have been on wishlists for years. Now scheduled.

Some of these features are catch-up to other POS leaders. That is true. Bar tab preauth, structured fulfillment, advanced discount logic, kitchen ticket density controls, none of these are new ideas in restaurant technology. These are the quality of life upgrades asked for by sellers because they like the differentiators Square offers. Square should have shipped most of them three or four years ago. The fact that they are shipping now and not in 2022 is itself part of the story.

So here is the question worth asking honestly. **What changed?**

Dorsey said it plainly in the February shareholder letter. A significantly smaller team, using the tools we are building, can do more and do it better. The Q1 letter three months later put a number on it. As of mid-April, production code changes per engineer are up over 2.5x compared to January. Non-engineers' production code changes are up nearly sixty percent over the same period. Incident rates after a code change are down more than seventy percent year over year. That is the stated thesis with receipts. The question is whether the rest of the evidence holds.

Cuts of this scale historically slow shipping, not accelerate it. When companies cut forty percent of their workforce, the next two quarters are usually defined by reorg paralysis, knowledge loss, scope reduction, and conservative roadmap pruning. There is the existing employee churn, the survivors choose to survive somewhere else. That is the textbook outcome. The Block organization is doing the opposite. A quarter of operator-requested F&B features cleared in ten weeks. Another quarter dropping this week. That is not what cost-cut paralysis looks like. That is the shape of an organization that just got faster.

Run the alternatives. The remaining engineers did not get better in ten weeks. The same humans who were there in February are there now and their skills did not improve on that timeline. The budget did not get bigger. It got smaller. R&D investment did not balloon to compensate for headcount. The partnerships and international expansion of Uber Eats and DoorDash is a coordination win on integrations that already existed, not net new builds. The build wins: Real Time Check View, structured fulfillment flows, advanced discount logic, the OCR invoice automation that is now on the roadmap... those came from Square's own engineering. Those did not come from anywhere else.

So what is the variable that changed?

Two things. AI compressed the per-engineer build cycle, which means a smaller team can produce what a larger team used to produce. And the cuts removed a layer of organizational drag: meetings, coordination tax, priority debates, consensus-building, meeting introductions, side-project advocacy, all that was limiting operator-requested features from clearing the queue. The inevitable triage of what to assign to teams was changed. It was now a pipeline of features that are going to ship, just which ones are going to ship first. Agents made the build faster. The cuts made the queue shorter. Both compressions multiplied each other. Either alone would have moved the needle a little. Together they produced what we are now watching ship.

<div class="pullquote">

That is the structural read. I do not see another explanation that holds up to the evidence. If a skeptic has one, I would like to hear it. Until I do, the AI thesis stops being narrative and starts being the only answer that fits the timeline. Occam's Razor is alive and well.

</div>

The deeper claim underneath is harder, and I want to be precise about it. The cuts were not because the work did not need to be done. The work always needed to be done. The cuts happened because AI changed the math on what kind of organizational structure can ship the work efficiently. The pre-AI organization needed every layer because every layer absorbed real output that humans had to produce. AI did not eliminate that output. It changed who produces it and at what cost. A senior engineer with the right AI in the loop can now produce documentation, draft release notes, run quality checks, and prototype design flows themselves. The cognitive load of juggling projects could be offloaded with a prompt. Maybe not as good as a dedicated team, but close enough. There is a thing called perfection paralysis, not with AI.

The dedicated functional teams became a liability. That is what I think Dorsey saw. Not "AI can replace people." Something more specific. AI changed the slope of what one human can produce, which means the optimal team size dropped, and when optimal team size drops and you keep the old team size, you do not get more productivity. You get more drag, more bloat. Layers that were necessary become layers that slow you down.

The hard human cost of that observation is that real people lost their jobs. People I had relationships with through the Champions. The argument I am making is structural, not personal. The drag was the *layer*, not the people. The same talent doing the same work in a smaller, faster organization would now be among the people shipping these features. The cuts were about the size and shape of the org under new constraints, not about the value of any individual who was in it. Many other businesses will benefit from those talented individuals joining their ranks. The severance package was meaningful: twenty weeks of base pay, equity, six months of healthcare. It is not all roses, but this is the truth.

I want to clarify where I stand in this story before I go further, because the standing matters.

I am a Square Champion, and I am active on the forums helping other sellers and answering questions. I was a foundational contributor to the Square AI program in its early development and testing. I am one of the active external testers for Manager Bot. I have been quoted in Square press releases and cited by name on the Square Bottom Line blog. I did one of the earliest Square AI unlock livestreams. I have gotten some square swag (nice sweatshirt), but I do use Square in my operations.

I chose Square years ago because the barrier to entry was low. No annual contracts. Cheap hardware or it would run on any hardware. Open APIs that an operator without an engineering team could actually use. The product was not perfect. It is still not perfect. The retail-versus-restaurant inventory paradigm still has not fully resolved in Manager Bot's tooling. Real Time Check View shipping in POS modes is a meaningful step toward read/write parity at the surface (although there was a workaround I had found, shhh), but the same architectural pattern needs to land in the bot itself for the operator workflow to fully close. There is more work to do.

I became a Champion because giving back to other sellers is what Champions do. I beta test because it is the most direct lever an independent operator has to shape the product they depend on every day. I document architectural gaps in the Manager Bot channel because the people on the other side of that channel listen, and because what gets surfaced gets fixed faster when the surfacing is precise. That is not a complaint. That is a system working the way it is supposed to work when the parties on both sides are doing their jobs.

Two months ago I published a case study on this site about a workflow I built in a day and a half. Invoice photo OCR through Twilio, Zapier orchestration, an LLM doing the line item extraction, structured data into Google Sheets, daily Square API pull for sales, a weighted rolling average for food cost, a one-line email to the manager every morning. Built for an independent diner with no inventory system at all. Food cost dropped five percent in under sixty days. The piece traveled. Jack reposted it. That post sits at fifty-three thousand impressions on an account with eighty followers.

I am not the inventor of OCR. I did not build a new model. I demonstrated, in public, what an operator could compose from existing tools without engineering support, without recurring software cost, without permission. That is not a claim about my own genius. It is a claim about the current state of what is possible for an operator who is willing to build with AI. To think that kind of ability is not going to "change the playing field", "move the goal posts", "make waves", or "move the cheese" would be naïve.

The lag between operator demonstration and platform commitment to the same workflow space used to be measured in years. Two months from publication to roadmap is a different cycle than the one I have been operating in for eleven years. Workarounds and complaints are now vacuumed up and worked on while I watch.

That is the field note. The cycle compressed. The compression is real on both sides. Sellers can build faster than they ever could before. Platforms can ship faster than they ever could before. The lag between operator demonstration and platform adoption, the same lag that frustrated people and killed contribution as a meaningful input to product roadmaps for most of restaurant tech history has collapsed to something close to functional.

The contract between operators and platforms has changed. For ten years, feedback was given in a post, an email, or on a survey and then you waited. By the time the platform gets to your problem you have already worked around it and moved on. The new contract is different. Feedback that gets surfaced precisely, in the right forum, with the right architectural framing, can show up in product within a quarter or two. That is unprecedented in this industry. It is also fragile. It depends on the platform staying small enough and fast enough to keep the cycle short, and on operators showing up with contributions that are precise enough to ship against.

OpenAI and Anthropic pursuing consulting firms full of Forward Deployment Engineers is not by accident. Deep domain knowledge is something that AI can't train on yet. But also, one size does not fit all in business. Yes, restaurants have more in common than they do apart. But that 10% difference, that nuance, is where the success of the business lives and dies.

I am where I am right now because of that compression. The work I am doing as the founder of Table & Ledger sits at exactly that intersection. Forward deployment of AI into restaurant operations. Helping other operators build the workflows they need before the platforms get there. Bespoke solutions that do something now, not in 6 months. Documenting what works and what breaks so the next owner or manager does not have to repeat the failure. That is the mantra. Build forward. Help others. Document the cycle.

I think Jack saw a version of this when he made the cuts. Not the operator side specifically, but the structural shape of it. AI changed the math on what an organization could be. The companies that adjust their structure to the new math will ship faster than the ones that do not. The companies that ship faster will eat the ones that do not. He said as much in the announcement. Most companies are late to this realization. He was not making a financial argument. He was making a structural one. The Q1 report showed Block hitting its numbers, which makes the cost-cut-as-cover read harder to sustain.

Ten weeks of evidence later, the structural argument is holding. Whether it keeps holding depends on what ships in Q2 2026 and Q3, on whether Manager Bot crosses the read/write parity gap, on whether the operator feedback loop stays short enough to matter, and on whether the announced rounds of layoffs at other companies produces the same compression or just produces the cost cut without the velocity. We will know which one is which by the end of the year.

For now, this is what an operator on the edge of the cycle sees. The lag is gone. The contract is changing. The work is forward and it is fast.

The next thing I am shipping is a free skill pack for restaurant operators who want to build the way I built. Six tools, one drag-drop installer, a PDF guide, on the same Field Notes track this essay sits in. It will arrive on this site in the next three weeks. If you want to know when it lands, the contact form is on the home page.

There is more coming after that. The cycle is short now. There is no reason to wait.

— Donnie
