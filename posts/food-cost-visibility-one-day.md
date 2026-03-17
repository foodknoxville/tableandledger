---
title: From Nothing to Food Cost Visibility in One Day
date: 2026-03-09
category: Case Study
slug: food-cost-visibility-one-day
lede: No inventory counts. No developer. No ongoing cost. A single-purpose AI system built in under two days delivered food cost tracking within 1-2% accuracy for an independent diner that had no systems at all. Food cost dropped 5% in under two months.
---

<div class="stat-row">
    <div class="stat">
        <span class="stat-number">1.4</span>
        <span class="stat-label">Days to build and deploy</span>
    </div>
    <div class="stat">
        <span class="stat-number">5%</span>
        <span class="stat-label">Food cost reduction in under 60 days</span>
    </div>
    <div class="stat">
        <span class="stat-number">$0</span>
        <span class="stat-label">Ongoing monthly cost</span>
    </div>
</div>

## The Problem

The operation had no food cost tracking at all. Not bad tracking. None. Invoices came in, product got used, and at the end of the month the owner had a rough sense of whether food costs felt high or low based on how the bank account looked. That is how most independent diners actually operate.

The classic food cost formula requires a full inventory count at the beginning and end of every period: beginning inventory plus purchases minus ending inventory, divided by sales. Most operators know the formula. Most operators also know that a full inventory count in a working kitchen is a two-hour exercise that nobody wants to do consistently. So it doesn't get done, or it gets done badly, and the number is wrong anyway.

The goal was not a perfect system. The goal was something better than nothing, that a manager could actually maintain without hating it, at a cost that made sense for a single-unit independent.

<div class="pullquote">A 1% precision number versus no number at all is a 1000% improvement. Perfect is the enemy of visible.</div>

## The Formula

The solution sidesteps inventory entirely by using a weighted rolling average of purchases against sales. Every week, invoice totals get logged. The calculation looks back six to eight weeks, weights the most recent week more heavily than older weeks, and produces a food cost percentage that accounts for recent purchasing trends without requiring a physical count.

Monthly, this number reconciles within 1-2% of what the classic beginning-plus-purchases-minus-ending formula would produce. That gap is operationally irrelevant. What matters is that the number exists, it updates automatically, and it is directionally accurate enough to act on.

The AI does not just produce a percentage. It surfaces which categories are driving cost. Protein spend trending up over the last three weeks. Dairy costs spiking on a specific delivery. The weighted average tells you where you are. The trend data tells you why and where to look.

## The Stack

<div class="stack-block">
    <h3>Tools Used</h3>
    <div class="stack-item">
        <span class="stack-tool">Twilio</span>
        <span class="stack-role">Inbound text number. Manager texts a photo of the invoice at delivery. That is the entire data entry requirement.</span>
    </div>
    <div class="stack-item">
        <span class="stack-tool">Zapier</span>
        <span class="stack-role">Automation layer connecting every piece. Free tier. One trigger fires daily. No constant polling, no per-transaction cost.</span>
    </div>
    <div class="stack-item">
        <span class="stack-tool">Curated, Purpose-Built Domain LLM</span>
        <span class="stack-role">Invoice image analysis. Extracts vendor, line items, quantities, and totals from a photo. Runs the weighted average calculation. Identifies cost trends. Constrained to this operational domain by design.</span>
    </div>
    <div class="stack-item">
        <span class="stack-tool">Google Sheets</span>
        <span class="stack-role">Data layer. Invoice totals, weekly averages, and running food cost percentages all live here. Readable by anyone, editable if needed, free.</span>
    </div>
    <div class="stack-item">
        <span class="stack-tool">Square POS API</span>
        <span class="stack-role">Daily sales pull. Zapier hits the API once each morning to grab the prior day's revenue. No manual entry required.</span>
    </div>
    <div class="stack-item">
        <span class="stack-tool">Gmail</span>
        <span class="stack-role">Daily summary email to the manager. The number finds them. They do not have to go looking for it.</span>
    </div>
</div>

## How It Works

<div class="flow-block">
    <div class="flow-step">
        <span class="flow-number">01</span>
        <span class="flow-text"><strong>Delivery arrives.</strong> Manager takes a photo of the invoice with their phone and texts it to the dedicated Twilio number, typing the final invoice total as a caption. That is the complete data entry step. Fifteen seconds.</span>
    </div>
    <div class="flow-step">
        <span class="flow-number">02</span>
        <span class="flow-text"><strong>Zapier catches the inbound text</strong> and passes the image to the curated, purpose-built domain LLM via API.</span>
    </div>
    <div class="flow-step">
        <span class="flow-number">03</span>
        <span class="flow-text"><strong>The LLM reads and verifies.</strong> It extracts vendor name, line items, quantities, and unit costs. The system then runs a checksum, comparing extracted line item totals against the document total. As a final fail-safe, it cross-references that against the total the manager texted. Structured, verified data gets written to Google Sheets automatically.</span>
    </div>
    <div class="flow-step">
        <span class="flow-number">04</span>
        <span class="flow-text"><strong>Each morning, Zapier fires once.</strong> It pulls the prior day's sales from the Square POS API, updates the rolling weighted average calculation in Sheets, and flags any category trending above threshold.</span>
    </div>
    <div class="flow-step">
        <span class="flow-number">05</span>
        <span class="flow-text"><strong>Manager receives a daily email.</strong> Current food cost percentage, week-over-week trend, and the top cost driver from the most recent invoices. One number, one trend, one action item.</span>
    </div>
</div>

## The Result

Food cost dropped 5% in under two months. Not because the system recommended a specific action. Because the manager could see the number for the first time and respond to it.

The first thing visibility does is kill the assumption that everything is fine. When you can see that protein spend is running three points higher than it was six weeks ago, you go look at the walk-in. You find the waste. You find the over-portioning. You find the delivery that got shorted. None of those problems were new. They just had not been visible.

The AI also surfaced a pattern the owner had not noticed: a specific vendor's prices had crept up on four consecutive deliveries, each increase small enough to pass without comment but significant in aggregate. That finding alone justified the build time several times over.

The system also pointed naturally toward key item inventory. Once you can see which categories are driving cost, you do not need to count everything. You count the things that matter. Full weekly inventory counts became targeted spot checks on the two or three items the AI flagged as high-variance. That is a twenty-minute task, not a two-hour one.

## What This Actually Is

This is not a sophisticated AI deployment. It is a single-purpose automation that does one thing well: it removes the friction between an invoice arriving at the back door and that invoice becoming a number a manager can act on.

The AI component is doing real work -- reading handwritten and printed invoices accurately, categorizing line items, identifying trends across weeks of data. But the system works because the workflow was designed around how managers actually behave, not how they theoretically should behave. They text. They check email. They do not log into dashboards.

It was built in a day and a half. It costs nothing to run beyond the existing POS subscription. It is still running.

That is the standard every AI implementation in a restaurant should be held to: does it fit the actual workflow, does it produce a number someone can act on, and is the maintenance burden low enough that it survives contact with real operations?

If it does not pass all three, it is not a solution. It is a demo.
