---
title: Why Restaurants Are Hard
date: 2026-04-26
category: Essay
slug: why-restaurants-are-hard
lede: Nothing we do in a restaurant is hard on its own. Making a sandwich, greeting a guest, dropping chicken in a fryer, are all easy. Doing twenty of those things at the same time is what makes it hard. That compounding is what most software misses, and what most AI is promising to solve without actually knowing what it is.
---

Someone asked me once what makes running a restaurant hard. They expected an answer about food costs, or labor, finding staff, or the customer who shows up five minutes before close. I told them none of those things are actually hard. Buying chicken is not hard. Scheduling a server is not hard. Handling a complaint is not hard. Every individual task in a restaurant, taken alone, is manageable by anyone with a pulse and thirty minutes of training. McDonald's solved for this a long time ago by breaking down training to the lowest common denominator so it was effective for everyone.

The hard part is that you are doing twenty of them at the same time, and the twenty-first just walked in the door or failed to show up adding 5 more problems (Yes, that would be 26 if you are keeping count).

The kitchen line is littered with a list of to-do's. Anyone who has worked a shift knows this. There is no moment in service where the list is empty. There is no moment where you finish what you are doing before the next thing arrives. The list is the job. The job is not getting to the end of the list. The job is keeping the list moving while the list keeps getting longer. One of the greatest callings is not getting things done in a restaurant, it is making sure those things got done.

That is what software keeps missing. I am not talking about the cash register. Software treats the list as a queue or a line to be processed and served. GMs and KMs treat the list as a river that has to be managed while you are standing in it.

## The compounding is the complexity

Pick any single task in a restaurant. It is easy. A server takes an order. A line cook fires a ticket. A manager counts a drawer. A prep cook pulls chicken. A dishwasher runs a rack. None of these are hard jobs. A reasonably smart sixteen-year-old could do any of them after a morning of shadowing. (If shadowing isn't available, you can always use the magic apron of training and they will figure it out.)

Now let's layer those like a traditional club sandwich. The server is taking an order while the line cook is firing the last ticket, the manager is counting the drawer because shift change is in six minutes, the prep cook is pulling chicken because the breading station just went down to three portions, the dishwasher is running a rack because the dining room just sat an eight-top and there are no water glasses clean. A credit card declined at table four. A delivery driver is standing at the host stand with the wrong order. The cooler alarm just chirped it had been at 48 degrees for an hour.

There is no mystery why restaurant managers have a high burn out and substance abuse rate.

<div class="moment-block">
<h3>A six-minute window on a Saturday night</h3>
<ul class="moment-list">
<li><span class="moment-time">7:12pm</span><span class="moment-text">Chicken is down to 14 portions. On a normal Saturday, that is a ninety-minute supply. Tonight is not normal.</span></li>
<li><span class="moment-time">7:13pm</span><span class="moment-text">Marcus clocked in at 7:00 to run the fryer line, and he is slicing tomatoes and making ranch for the line because Sharon is running late again.</span></li>
<li><span class="moment-time">7:14pm</span><span class="moment-text">A delivery surge just hit. Someone ordered a 12 order ticket from on-demand delivery. Funny, every item used chicken.</span></li>
<li><span class="moment-time">7:15pm</span><span class="moment-text">The dining room is three tables from a full flip. Tickets are averaging twelve minutes. Ten is the goal. Fifteen is the number where guests start looking at their phones.</span></li>
<li><span class="moment-time">7:16pm</span><span class="moment-text">Hood cleaning is due this week. Last Tuesday was the soft deadline. Your fire suppression company will be in at 5am to inspect the Ansul system. It has just become more than important, but urgent.</span></li>
<li><span class="moment-time">7:17pm</span><span class="moment-text">Jill says tickets aren't printing.</span></li>
</ul>
</div>

What is the right move in the next six minutes?

A restaurant manager, owner, or operator who has done this job knows the answer is not in any single one of those data points. It is in the interaction between them. Maybe Marcus can slice a quick Cambro for the next hour, or maybe they have enough already, but an overzealous line supervisor wants the prep done so he doesn't have to stay late. Maybe he goes on the breading station and starts pulling and breading another twenty portions, because if the chicken runs out during the delivery surge, ticket times blow past fifteen minutes and the dining room flip goes sideways. Maybe the hood cleaning waits and you have AM come in 1 hour early and get the vents pulled. Maybe you pre-empt the DoorDash surge by pausing the delivery channel for fifteen minutes while the line catches up, because protecting dine-in tickets at capacity is worth more than the delivery revenue during that window.

None of those are hard decisions in isolation. Oh wait, did Sharon ever make it in? Making them in real time, with incomplete information, while the next six things are coming in behind them, is the whole job.

## Why software keeps missing this

Most restaurant software is built as if each of those data points belongs to a different product. Inventory software watches chicken. Labor software watches Marcus. Third-party ordering software watches DoorDash. KDS software watches ticket times. Facility software watches hood cleaning. Each product does its one job. Each product has a dashboard. Each dashboard is honest about its own domain. Great POS systems have one dashboard where you can tab through them.

Or, none of them know about each other. Maybe that integration will go live next week.

A seasoned GM walking the floor at 7:15pm is doing the integration work in their head. They are pulling signals from five different systems, weighting them against each other based on context and experience, and making a judgment call that no single system could make. They are not executing a dashboard. They are holding the whole operation in working memory and routing attention to whichever input just crossed a threshold that mattered.

The reason most restaurant software feels useless to operators is not because the software is bad. The software is fine at its single job. The problem is that operators do not have a single-domain problem. They have a twenty-domain problem. Handing them twenty dashboards does not help. Twenty dashboards is not a solution to compounding complexity. Twenty dashboards is the complexity. Something else has to take the seat.

<div class="pullquote">Nobody opens a dashboard at 7:15pm on a Friday. Nobody ever will.</div>

## Why reports and insights are worse than useless at 7:15pm

There is a belief in restaurant tech that if you give an operator better reports, custom insights, adjacently linked data, they will make better decisions. This is true at 10am Tuesday. It is not true at 7:15pm Friday.

At 7:15pm, the GM cannot read a report while handling a complaint. The operator cannot open an app. The operator cannot click a filter. The operator is in the middle of the shift. The only interaction they can have with a system in that moment is the one that happens at the speed of a glance, a tap, or a voice command, and even those only work if the system is telling them something they actually need to know right now.

Reports are the wrong shape for the problem. <span class="emphasis">Reports are a record of what happened (a rear view mirror).</span> The operator in the middle of service does not need a record of what happened. They need to know what is about to go wrong in the next six minutes, and what to do about it. A daily sales report is not going to tell you to move Marcus to the breading station. A weekly labor variance report is not going to tell you to pause DoorDash for fifteen minutes. No report ever written has saved a shift in progress.

According to Qu's 2026 Restaurant Technology Benchmark Report, 73% of operators are investing in AI but only 5% are seeing measurable value. (Another 33% say value is "emerging," which is the polite industry word for "we are not sure yet.") Most of those operators are making the same category mistake. They are buying AI that makes better reports. Better reports at 10am Tuesday do not change the compounding problem at 7:15pm Friday. The problem was never the reports. Your regulars are 70% of your revenue. Who didn't already know that. Targeting marketing to boost sales? You don't do that on Saturday night.

## What an operator actually does

The best multi-unit operators I know are not making smarter individual decisions than anyone else. They are making roughly the same decisions that a decent single-unit manager would make, but they are doing it across five locations simultaneously, which means they are holding five operations in their working memory at once and routing their attention to whichever one is about to fall apart. They all have a great GM at one location, 2 good GMs, 1 brand new GM, and 1 GM that needs to be brand new somewhere else.

Their edge is not better judgment. Their edge is better triage. They have learned which compounding patterns actually matter and which ones self-correct. They have learned that you do not have to fix twenty things. You have to fix the two that are about to break everything else, and you have to fix them before they break.

That is not a skill you can teach in a training manual. It is not a skill that shows up in a KPI dashboard. It is a skill that operators develop over thousands of shifts by being wrong enough times that the pattern recognition eventually calcifies into instinct. You cannot hire for it because the people who have it are already running their own operations.

This is why good multi-unit operators are rare. Systems are born from repeated pain. Every checklist, prep sheet, par level, and closing procedure exists because something broke enough times that somebody wrote it down. It is also why the existing software stack is inadequate for the problem. You cannot buy judgment. You can only buy the inputs that judgment runs on. All the AI in the world accessible by the owner on vacation is worth a bet that Sharon will be on time.

## Where AI actually fits

If you stayed this long, or skimmed to get here to read what you really wanted to know, here is the part.

AI that does something is not the interesting category. AI that writes an email, summarizes a document, or generates a report is useful, but it is not addressing the compounding problem. That is productivity software with a language model glued on top. The restaurant stack has had productivity software for twenty years.

<span class="emphasis">The interesting category is AI that helps someone do something they could not do before.</span>

In a restaurant, that means an intelligence layer that does the triage an operator does, at the speed an operator does it, with awareness of all twenty domains at once. Not a dashboard. Not a report. An ambient layer that watches the operation the way an experienced multi-unit operator watches an operation, and surfaces only the signals that actually require a decision, in the window where a decision can still matter.

That is a different shape of software than anything currently being sold in the restaurant category. It is not a POS. It is not a KDS. It is not an inventory product or a labor product or a forecasting product. It sits on top of all of those, pulls signals from each of them, weighs them against each other, and tells the operator what to look at right now. It has to understand that chicken at 14 portions is a different problem when Marcus is idle than when Marcus is slammed. It has to understand that pausing DoorDash for fifteen minutes is sometimes the right move and sometimes career-ending, and the difference is which night it is and which market and what the dining room is doing.

None of that is impossible. It is just not what anyone has built yet, because building it requires understanding the operator's working memory as a design target, not treating it as someone else's problem. Software engineers are amazing at what they do, but they didn't work last Saturday night on the line. The thing to think about is, what about the manager who doesn't have a thousand shifts under her belt, but always shows up to work.

## The standard

The bar for AI in a restaurant is not whether it produces a correct answer. It is whether it produces a useful signal inside the window where the signal can still change the outcome. We need the current AI out there. ToastIQ, Qu, Manager Bot, &lt;insert AI marketing name here&gt; are all useful, and do things we didn't think they could before.

At 10am Tuesday, any system can tell you that chicken ran out at 7:47pm Saturday. That is a report. It is also useless. By Tuesday the shift is over, the guests are already gone, and the only thing that information can do is make the Saturday manager feel worse about a shift they already know went wrong. It does help you make better decisions, and better plans. Honestly, it has helped me watch labor more closely than I was. But the bigger move is when AI starts surfacing labor signals to a manager who doesn't know how to read labor yet. That is a different kind of help. That is a coworker who is also a coach.

At 7:15pm Saturday, a system that tells you chicken is likely to run out in twenty-two minutes, and that Marcus is the only person who can pivot to breading without leaving a station uncovered, has changed the shift. That is not a report. That is a coworker who can see what you can see, faster than you can see it, and is telling you what they see.

That is the bar. Not a better dashboard. Not a smarter report. Not an automated workflow. Not a cross-data insight. A system that collapses the twenty-domain problem into a single useful signal, at the moment the signal can still matter.

If the system does not do that, it is not solving the problem. Let me walk that back. It is solving a problem. It is just not solving the right problem. And the operator will keep doing the integration work in their head, because nobody has built the thing that actually helps.

The number one question for AI in a restaurant is this: is it going to give me more labor to use? One of the oldest sales adages in the book is that features tell, but benefits sell. The industry needs more people building for 7:15pm Friday, not 10am Tuesday. Restaurants are hard because easy things compound. Who is going to be the first to build AI for the manager?
