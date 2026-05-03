---
title: "Beyond Systems of Intelligence: The Ambient Manager and the Third Layer of Restaurant AI"
date: 2026-05-03
category: Essay
slug: ambient-manager-third-layer-restaurant-ai
lede: AI in restaurants needs three layers, not two — a system that watches, a system that remembers, and a system that acts. The platforms that bet on open are betting on the operators who matter most over the next decade.
---

![A retro-futurist domed kitchen with copper cooking surfaces, a chef plating a dish, and curved booths in teal and rust](/ambient-kitchen.png)

Tomorrow I'm joining Eli Feldman and Matt Newberg on a live HNGRY panel about systems of intelligence in restaurants. The question everyone is circling right now is what AI is actually for in this industry. Eli's been writing some of the sharpest pieces on what AI can do. Matt has built one of the rare venues where these conversations happen with tech forward operators in the room rather than around it.

The conversation arrives at a strange moment for restaurant technology. AI is everywhere. Every platform has a feature with AI in the name. Every press release uses the word "Agentic." And underneath all of that, operators are quietly making one of the biggest architectural decisions of their careers, often without realizing it.

The question is not which AI feature your platform shipped this quarter. The question is what the next ten years of restaurant operations look like, and which platforms are actually building for it. Most operators only ask, "Is it going to give me more labor to use on Friday night?" AI isn't replacing anyone in restaurants.

## Two layers, then a third

Eli has written about the difference between systems of record and systems of intelligence. The system of record is the thing that captures what happened. The point-of-sale, the reservation system, the inventory log, the time clock. The system of intelligence is the thing that turns those records into something an operator can act on. It synthesizes. It surfaces patterns. It explains why Thursday felt slow when the numbers say it shouldn't have.

Eli is right. That framework captures something every operator recognizes: the knowledge of how an operation actually runs lives in many places, and most of it isn't in any single system of record. He's also right that AI is what changes our ability to do something with it. But it has a third layer that needs naming, because surfacing insight is only half the work. The other half is doing the thing. (As he points out, "Getting $h*t Done.")

The full architecture is a system that watches, a system that remembers, and a system that acts. Watch the operation in real time at the edge. Remember what's happened across weeks and months and shifts in aggregation. Take action through orchestration on the routine work without waiting for someone to ask. Reserve the operator's attention for the decisions that actually require human judgment.

Most of the AI being shipped today does one of those three things well. The framework I build for my consulting customers is based on a framework I designed and have been documenting for months. It has evolved into [the ambient manager](https://www.ambientmanager.com): a distributed architecture across nine operational domains, three layers, and a control loop that closes around verification. The premise is in the name. It runs in the background, continuously, doing the routine work without being asked. Execution is where the ambient manager earns its keep. Different teams are working on pieces of this all around the industry, but the curse of restaurants for a decade has been another SaaS, another subscription, another tool, another dashboard. The ambient manager isn't another tool to use. It's a framework that means the operator uses fewer tools, not more.

## The perfect setup

The architecture that lets this work has properties operators should start asking about by name.

**Open systems of record.** The platform that handles your sales, your menu, your team data, your customers, that platform should expose itself through documented APIs. Better, through open protocols like MCP (Model Context Protocol) that let any AI agent talk to it. The data the operator's business generates belongs to the operator, and the platform's job is to be the rails the operator's intelligence layer runs on.

Quick aside, because this matters to me as an operator. There are companies that use restaurants and technology as a way to scrape revenue away from restaurants who already run on thin margins, razor thin for some. These should be partnerships where as a restaurant does better, both benefit. My customers in my restaurants are mine and should stay that way.

**Permeable boundaries.** The system of intelligence, the historical memory of the operation, the systems in place, the grey matter the operator uses doesn't need to come from the same place as the system of record. These layers should be loosely coupled, swappable, and replaceable. If a better synthesis tool ships next year, the operator should be able to plug it in without ripping out their POS and buying all new hardware. In the healthcare field this was codified into law as interoperability. Not for the benefit of the hospitals, but for the benefit of the patients.

**Edge awareness.** Some of the work needs to happen locally, on the floor, with sub-second response times during service. Some of it can happen in the cloud. The architecture should know the difference and handle both and utilize both.

**Composability over consolidation.** The operator should be able to assemble a stack from best-in-class tools rather than accepting whatever the platform vendor decides to ship. The age of "one platform for everything" was a function of integration being expensive. AI changes the cost of integration. The argument for consolidation gets weaker every quarter.

## What closed costs

The opposite posture has been the dominant model in restaurant technology for fifteen years. Proprietary hardware that doesn't talk to anything else. Multi-year contracts with switching costs designed to be painful. AI features that only work on the data inside the walls and never on the data the operator already has elsewhere. Pricing that compounds against the operator the longer the relationship goes on, because the alternative is migration and migration is brutal.

That model worked for the platform vendors. It produced enormous companies. It also produced an industry where operators feel locked into decisions they made years ago, where the AI inside their platform is always at least one generation behind the AI they use in the rest of their lives, and where the platform's roadmap is what they get rather than what they need. One of my first General Manager jobs decades ago involved the legacy system. It had the green monochrome screens, and custom built terminals, and we had a warehouse full of used ones to keep that system running. Moving to a modern POS in a large franchise group was nothing short of monumental and expensive.

<div class="pullquote">AI breaks the bargain. The operator who can compose their stack from open tools doesn't have to wait for the vendor's roadmap.</div>

AI breaks the bargain. The operator who can compose their stack from open tools doesn't have to wait for the vendor's roadmap. They can move at the speed of the technology itself, which has been moving roughly twice as fast every six months for the last three years, and will be faster next week. After Covid, all restaurants understand that speed isn't needed. It's required.

## Who this matters most for

The operators with the most resources can survive bad architectural bets. They have margin. They have legal teams. They can renegotiate contracts. The operators who cannot survive a bad architectural bet are the ones with the least.

The mom-and-pop. The single-unit independent. The owner who hasn't taken a real week off in eight years. The manager who didn't graduate high school but is faster at production than anyone on staff. The first-generation American working her way through nursing school after learning tools and discipline in the kitchen. <span class="emphasis">These are the people most of this technology will eventually have to serve, and they're the people who can least afford to be on the wrong side of the architecture question.</span>

The ambient manager is built for the multi-unit operator running on margin. The single-unit seller gets a simpler version of a system that already works.

The platforms that bet on open are betting that those operators are the ones who matter most over the next decade. The platforms that bet on closed are betting that the rules of the last fifteen years still hold.

That's the conversation tomorrow. Free to attend, link below.

[*HNGRY panel signup →*](https://form.typeform.com/to/cgAKMtLS)
