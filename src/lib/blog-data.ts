import featuredPhoto from "@/assets/blog/featured.jpg";

export type BlogCategory = "pharmacy" | "fitness" | "nutrition" | "wellness" | "creative";

export type Section = {
  heading: string;
  /** Paragraphs of body copy. */
  paragraphs: string[];
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  categoryLabel: string;
  excerpt: string;
  readingTime: string;
  date: string;
  featured?: boolean;
  /** Real cover image URL; when set it replaces the category photograph. */
  image?: string;
  /** Short lead paragraph shown above the article body. */
  intro: string;
  sections: Section[];
  takeaways: string[];
  conclusion: string[];
  /** Educational disclaimer appended to healthcare pieces. */
  disclaimer?: string;
};

export const categoryLabels: Record<BlogCategory, string> = {
  pharmacy: "Pharmacy",
  fitness: "Fitness",
  nutrition: "Nutrition",
  wellness: "Wellness",
  creative: "Creative",
};

const HEALTH_DISCLAIMER =
  "This article is intended for general educational purposes and does not replace advice from a qualified healthcare professional.";

export const posts: BlogPost[] = [
  {
    slug: "understanding-medicines-beyond-the-prescription",
    title: "Understanding Medicines Beyond the Prescription",
    category: "pharmacy",
    categoryLabel: "Pharmacy",
    excerpt:
      "A prescription tells you what to take and when. It rarely explains why the schedule matters, what the medicine is meant to do, or which questions are worth asking before you leave the counter.",
    readingTime: "7 min read",
    date: "12 March 2025",
    featured: true,
    image: featuredPhoto,
    intro:
      "Most people leave a pharmacy holding a strip of tablets and a label with a few short instructions. That label is accurate, but it is not the whole picture. Understanding a medicine means knowing roughly what it is for, how it fits into a daily routine, and what to do when something about that routine changes.",
    sections: [
      {
        heading: "A label is a summary, not an explanation",
        paragraphs: [
          "A dispensing label carries the essentials: the name of the medicine, the strength, how often to take it, and sometimes a short instruction such as taking it with food. That is a compressed version of a much longer conversation between a prescriber, a pharmacist and a patient.",
          "What the label usually leaves out is the reasoning. Why this medicine rather than another. Why twice a day rather than once. Whether the effect is something you will feel quickly, or something that works quietly in the background over weeks.",
          "This gap matters because people naturally fill it with their own assumptions. A medicine that produces no noticeable sensation can feel unnecessary. One that causes a mild, expected effect in the first week can feel alarming. Both interpretations are reasonable if nobody has explained what to expect.",
        ],
      },
      {
        heading: "Purpose is the first thing worth knowing",
        paragraphs: [
          "Before anything else, it helps to be able to answer a simple question in your own words: what is this medicine meant to do for me? Not the pharmacological mechanism — just the practical intention. Is it managing a long-term condition, treating a short course of illness, preventing something, or relieving a symptom?",
          "That single piece of understanding changes behaviour more than almost anything else. A medicine understood as preventive is treated differently from one understood as optional relief. Medicines for conditions with few visible symptoms are especially easy to deprioritise, precisely because nothing obvious happens when a dose is missed.",
          "Knowing the purpose also makes it easier to notice when something does not fit. If you know a medicine is intended for a particular problem, and that problem has changed, you have a clear reason to go back and ask.",
        ],
      },
      {
        heading: "Why schedules and consistency matter",
        paragraphs: [
          "Dosing intervals are not arbitrary. They are built around how long a medicine stays active in the body and how steadily it needs to be present to do its job. Some medicines are designed to maintain a fairly even level; others are intended to act in short, defined bursts.",
          "Consistency is therefore part of the treatment, not an optional extra. Taking doses at broadly the same times each day supports the pattern the prescriber intended and also makes the medicine easier to remember. Most people do better anchoring a dose to something already fixed in their day than to a specific clock time.",
          "Courses that are meant to be completed deserve particular attention. Feeling better partway through does not always mean the underlying reason for the medicine has resolved. If a course feels difficult to finish — because of cost, side effects, or simple inconvenience — that is worth raising rather than quietly abandoning.",
        ],
      },
      {
        heading: "The communication gaps that show up most often",
        paragraphs: [
          "Consultations are short, and patients are often absorbing other news at the same time. It is completely normal to walk out of a room and realise you have retained very little of what was said. That is not a failure of attention; it is how people process information under stress.",
          "A few gaps recur often enough to be worth anticipating. Instructions like 'as needed' can be interpreted very differently by different people. Timing phrases such as 'with food' are sometimes heard as strict rules and sometimes as loose suggestions. And a medicine started by one prescriber is not always visible to the next one unless the patient mentions it.",
          "Keeping a single up-to-date list of everything you take — prescribed items, over-the-counter products and supplements included — closes most of these gaps on its own. It is one of the most useful things a person can carry into any healthcare appointment.",
        ],
        bullets: [
          "Ask what the medicine is for, in plain language",
          "Confirm how and when to take it, including what to do about a missed dose",
          "Ask what to expect in the first days and weeks",
          "Mention everything else you take, including supplements",
          "Ask who to contact if something does not feel right",
        ],
      },
      {
        heading: "Changing or stopping a medicine is a clinical decision",
        paragraphs: [
          "Adjusting a dose, splitting tablets, doubling up after a missed dose or stopping altogether can all seem like small, sensible corrections. In practice they change the treatment, and some medicines are specifically not designed to be stopped abruptly.",
          "This is not a reason to feel locked in. If a medicine is difficult to live with, that is legitimate information and prescribers generally want to hear it. There are often alternatives, different formulations or different timings. What matters is that the change is made with professional input rather than in isolation.",
          "Pharmacists are an accessible point of contact for exactly this kind of question. A conversation at the counter does not need an appointment and is often enough to resolve confusion before it becomes a problem.",
        ],
      },
    ],
    takeaways: [
      "Be able to state, in your own words, what each of your medicines is for.",
      "Treat the dosing schedule as part of the treatment, not a suggestion.",
      "Keep one current list of everything you take and bring it to appointments.",
      "Ask about missed doses before you need to know the answer.",
      "Raise problems with a professional instead of adjusting the plan yourself.",
    ],
    conclusion: [
      "Understanding a medicine is less about memorising pharmacology and more about holding a clear, honest picture of what you are taking and why. That picture makes routines easier to keep, questions easier to ask, and problems easier to catch early.",
      "The people who dispense and prescribe medicines expect questions. Asking them is a normal part of good care, not an imposition on it.",
    ],
    disclaimer: HEALTH_DISCLAIMER,
  },
  {
    slug: "consistency-over-intensity",
    title: "Consistency Over Intensity: Lessons From Fitness",
    category: "fitness",
    categoryLabel: "Fitness",
    excerpt:
      "Hard training weeks are easy to admire and difficult to repeat. The routines that actually change how someone moves and feels tend to be the ones modest enough to survive an ordinary month.",
    readingTime: "6 min read",
    date: "26 March 2025",
    intro:
      "Intensity is visible. It is the session that leaves you flattened, the week where everything is dialled in, the burst of effort that feels like progress. Consistency is much quieter, and it is usually the thing doing the work.",
    sections: [
      {
        heading: "Why intensity gets overvalued",
        paragraphs: [
          "A hard session gives immediate feedback. You feel it during, you feel it after, and it is easy to treat that sensation as proof that something useful happened. Training that is merely adequate offers no such signal, so it registers as less valuable even when it is not.",
          "The problem is arithmetic rather than philosophy. A programme that demands maximum effort every session tends to be sustainable for a few weeks. Adaptations in strength, conditioning and movement quality accumulate over months. A plan that cannot reach the timeframe where results appear is not a demanding plan; it is an incomplete one.",
          "None of this argues against hard work. Effort is necessary. The question is how much of it a person can repeat without the routine collapsing.",
        ],
      },
      {
        heading: "Build a routine around your actual week",
        paragraphs: [
          "The most common design error is planning for an idealised week — one with no late finishes, no travel, no poor nights of sleep. Real weeks are rarely like that, and a plan calibrated to the best version of them fails on the first ordinary one.",
          "A more durable approach is to set a floor rather than a ceiling. Decide the minimum you will do in a difficult week, and treat anything above that as a bonus. Two or three sessions that reliably happen will outperform five that are frequently skipped.",
          "Fixed anchors help. Same days, similar times, a bag already packed. The fewer decisions a session requires, the less it depends on how motivated you happen to feel that morning.",
        ],
      },
      {
        heading: "Progress is gradual and deliberately unglamorous",
        paragraphs: [
          "Progressive overload — asking the body to do slightly more over time — is the underlying principle behind most structured training. Slightly more can mean a little extra weight, an additional repetition, better control, or the same work with cleaner technique.",
          "Small increments feel underwhelming in a single week and substantial across a year. Adding a modest amount to a lift every few weeks is unremarkable in isolation and considerable over twelve months. The mathematics only works if the sessions keep happening.",
          "Keeping a simple record makes this visible. Without one, memory tends to compress everything into 'about the same', which is discouraging and usually inaccurate.",
        ],
      },
      {
        heading: "Recovery, sleep and the point of a deliberate easy week",
        paragraphs: [
          "Training provides the stimulus; the adaptation happens between sessions. Sleep, food and time all shape how much of that adaptation you actually get to keep, which is why chronically shortchanging them tends to blunt otherwise sensible programming.",
          "Sleep is the most commonly compromised of the three and the most difficult to compensate for. Persistent short sleep affects perceived effort, coordination and appetite regulation, all of which feed back into training quality.",
          "Planned lighter weeks are worth normalising too. Reducing volume periodically is a standard feature of structured programmes, not a lapse in discipline. Fatigue that accumulates unchecked eventually forces an unplanned break, which is almost always longer than the planned one would have been.",
        ],
      },
      {
        heading: "Avoiding burnout by keeping the bar realistic",
        paragraphs: [
          "Burnout in training rarely arrives suddenly. It builds through a stretch of sessions that feel obligatory, a plan that no longer fits the rest of life, and a widening gap between expectation and result.",
          "The usual correction is to make the routine smaller rather than to push harder. A shorter session that fits the day preserves the habit; an abandoned week breaks it. Habits are far easier to maintain than to restart.",
          "Long-term thinking also changes what counts as a good week. A good week is not necessarily the hardest one. Often it is simply the one that happened as planned and left you able to repeat it.",
        ],
      },
    ],
    takeaways: [
      "Design your week around your realistic schedule, not your ideal one.",
      "Set a minimum you can keep in a bad week and treat extra as a bonus.",
      "Add small increments over time instead of chasing hard sessions.",
      "Protect sleep and recovery as part of the training plan.",
      "Scale the routine down before you abandon it.",
    ],
    conclusion: [
      "Fitness rewards patience more than enthusiasm. The routine that keeps going through busy weeks, poor sleep and low motivation tends to produce more than the one that burns brightly and stops.",
      "Consistency is not the absence of effort. It is effort arranged so that it can be repeated.",
    ],
  },
  {
    slug: "building-sustainable-nutrition-habits",
    title: "Building Sustainable Nutrition Habits",
    category: "nutrition",
    categoryLabel: "Nutrition",
    excerpt:
      "Most eating plans fail not because they are wrong but because they are unlivable. A more useful question than what to cut is what you can realistically keep doing for the next year.",
    readingTime: "7 min read",
    date: "9 April 2025",
    intro:
      "Nutrition advice tends to arrive as a set of rules to follow for a fixed period. The more useful framing is quieter: what does a normal week of eating look like for you, and what small parts of it could be steadier?",
    sections: [
      {
        heading: "Diets end; habits continue",
        paragraphs: [
          "A diet is by definition temporary. It has a start, a set of restrictions and, implicitly, an end. Habits have no end date, which is exactly what makes them harder to start and more valuable once established.",
          "This distinction explains a familiar pattern. Restrictive approaches often work while they are being followed and unwind once normal life resumes, because nothing about normal life changed. The eating pattern was suspended rather than adjusted.",
          "Building habits instead means accepting slower change. The advantage is that whatever you build is already compatible with how you actually live, so there is nothing to return from.",
        ],
      },
      {
        heading: "A general shape for a balanced meal",
        paragraphs: [
          "At a general educational level, most balanced meals contain a source of protein, a source of carbohydrate, some fat, and a reasonable quantity of vegetables or fruit. Each of these contributes something different, which is why patterns that eliminate an entire category tend to be harder to sustain.",
          "Protein-containing foods support the maintenance and repair of body tissue. Carbohydrate-containing foods are a primary fuel source for most everyday activity. Dietary fats contribute energy and are involved in the absorption of certain vitamins. Fruit, vegetables and whole grains supply fibre and a range of micronutrients.",
          "Thinking in terms of the shape of a plate is usually more workable than tracking numbers. It travels well between home cooking, eating out and food you did not choose yourself.",
        ],
      },
      {
        heading: "Portions, variety and hydration",
        paragraphs: [
          "Portion awareness is not the same as restriction. It is simply noticing how much is actually on the plate, which is easy to lose track of when eating quickly, eating while distracted, or serving from a large dish.",
          "Variety matters because different foods contribute different nutrients, and because a narrow diet becomes boring quickly. Boredom is an underrated cause of abandoned eating patterns. Rotating a handful of reliable meals is a reasonable way to keep variety without planning something new every day.",
          "Hydration is easy to overlook and easy to improve. Keeping water accessible during the day removes most of the friction without needing a target to hit.",
        ],
      },
      {
        heading: "Planning enough to remove decisions",
        paragraphs: [
          "Most poor eating decisions are made when hungry, rushed and without a plan. Planning is valuable mainly because it moves the decision to a calmer moment rather than because of any specific meal it produces.",
          "Light planning is usually enough. Knowing roughly what dinner will be, keeping a few quick assemblies available, and having ingredients in the house covers a large share of the difficulty. Elaborate weekly meal prep works well for some people and feels like a second job to others; neither is required.",
          "The aim is a kitchen where the reasonable choice is also the easy one, so that a tired evening does not automatically become a difficult one.",
        ],
        bullets: [
          "Keep two or three quick meals you can make without thinking",
          "Decide dinner earlier in the day rather than at the point of hunger",
          "Shop with a short list built around meals you actually cook",
          "Keep easy fruit, vegetables and protein sources visible and accessible",
        ],
      },
      {
        heading: "Why extreme approaches are hard to keep",
        paragraphs: [
          "Approaches that cut out whole food groups, demand precise tracking or require constant vigilance ask for a level of attention that competes with everything else in a person's life. They often produce quick change, which is part of their appeal, and they are difficult to maintain once attention is needed elsewhere.",
          "Repeated cycles of strict and abandoned eating patterns also tend to make food feel more fraught than it needs to be. A steadier baseline is generally more comfortable to live with.",
          "Changing one thing at a time is unglamorous and effective. A single adjustment that holds for three months is worth more than five changes that hold for two weeks.",
        ],
      },
    ],
    takeaways: [
      "Aim for a pattern you could keep for a year, not a plan with an end date.",
      "Build most meals around protein, carbohydrate, fat and plenty of vegetables.",
      "Notice portions rather than restricting categories.",
      "Plan just enough to remove decisions from hungry moments.",
      "Change one habit at a time and let it settle before adding another.",
    ],
    conclusion: [
      "Sustainable nutrition tends to look unremarkable from the outside: a handful of dependable meals, reasonable portions, enough variety to stay interesting and enough flexibility to survive a disrupted week.",
      "Individual needs differ, and anyone with specific health conditions or requirements should work with a qualified professional rather than a general framework.",
    ],
    disclaimer: HEALTH_DISCLAIMER,
  },
  {
    slug: "what-fitness-taught-me-about-discipline",
    title: "What Fitness Taught Me About Discipline",
    category: "fitness",
    categoryLabel: "Fitness",
    excerpt:
      "Training is one of the few areas where the gap between intention and action shows up immediately. The habits it demands turn out to transfer well beyond the gym.",
    readingTime: "6 min read",
    date: "23 April 2025",
    intro:
      "Long-term training teaches a particular kind of discipline — less about willpower than about structure, patience and a tolerance for slow feedback. These are lessons commonly reported by people who train consistently over years, and they generalise surprisingly well.",
    sections: [
      {
        heading: "Showing up is the skill",
        paragraphs: [
          "The single behaviour that separates people who progress from people who stall is attendance. Not intensity, not programme design, not equipment. Turning up on the days that were planned, including the unremarkable ones.",
          "This is a skill rather than a trait. It is built by lowering the cost of starting: fixed days, a prepared bag, a session you already know the shape of. Every decision removed from the process makes it slightly more likely to happen.",
          "It is also why identity-based framing tends to hold better than goal-based framing. Someone who trains on Tuesdays trains on Tuesdays. Someone working towards a target has to renegotiate with themselves each week.",
        ],
      },
      {
        heading: "Training when motivation is absent",
        paragraphs: [
          "Motivation is genuinely useful and genuinely unreliable. It responds to sleep, stress, weather and events that have nothing to do with training. A routine that requires motivation to function will run intermittently.",
          "The practical alternative is to lower the bar rather than skip the day. A shortened, lighter session on a flat day keeps the habit intact and is nearly always better than nothing. It also removes the psychological cost of restarting.",
          "Over time this changes the internal question from 'do I feel like training?' to 'what version of training fits today?' — a much easier question to answer honestly.",
        ],
      },
      {
        heading: "Patience and the discomfort of slow feedback",
        paragraphs: [
          "Physical adaptation happens on a timescale that human attention is poorly suited to. Meaningful change in strength or conditioning is measured in months, while the desire for evidence operates daily.",
          "This mismatch is where most people give up, and it is why tracking matters. A written log converts invisible progress into something readable. Numbers from eight weeks ago are frequently more encouraging than memory suggests.",
          "Learning to work without immediate feedback is arguably the most transferable lesson training offers. Most worthwhile things — professional skill, study, long projects — have the same structure.",
        ],
      },
      {
        heading: "Discipline includes stopping",
        paragraphs: [
          "There is a version of discipline that only knows how to push. It works for a while and eventually produces injury, exhaustion or a long unplanned break.",
          "Mature training discipline includes rest days, planned lighter weeks and the judgement to modify a session when something feels wrong. Choosing to do less on a particular day is a decision in service of the long plan, not a failure of resolve.",
          "The same applies outside training. Sustained output in any demanding field depends on recovery being treated as part of the work rather than a reward for finishing it.",
        ],
      },
      {
        heading: "What carries over",
        paragraphs: [
          "The habits that make training work are not specific to training. Scheduling work before it is urgent, breaking large objectives into repeatable units, keeping records, accepting slow returns and protecting recovery all apply to study, professional practice and creative work.",
          "Training simply provides an unusually honest environment to practise them in. Progress is measurable, shortcuts are limited, and the consequences of inconsistency are visible within weeks.",
          "That honesty is the real value. It is a low-stakes place to learn how you behave when something is difficult and nobody is checking.",
        ],
      },
    ],
    takeaways: [
      "Make starting cheap: fixed days, prepared kit, a familiar session.",
      "Shorten the session on hard days instead of skipping it.",
      "Track your training so slow progress becomes visible.",
      "Treat rest and lighter weeks as part of the plan.",
      "Expect the same habits to help outside the gym.",
    ],
    conclusion: [
      "Discipline in training is mostly unremarkable behaviour repeated for a long time. It is built from small structural decisions rather than bursts of resolve.",
      "That is encouraging, because structure can be designed. Willpower cannot.",
    ],
  },
  {
    slug: "healthcare-communication-patient-understanding",
    title: "Healthcare, Communication & Patient Understanding",
    category: "pharmacy",
    categoryLabel: "Pharmacy",
    excerpt:
      "A treatment plan only works to the extent it is understood. Communication is not a soft addition to clinical care — it is part of whether the care functions at all.",
    readingTime: "7 min read",
    date: "7 May 2025",
    intro:
      "Healthcare produces a large amount of information in a short time, usually for someone who is unwell, anxious or distracted. How that information is delivered shapes what happens after the appointment ends.",
    sections: [
      {
        heading: "Understanding is part of the treatment",
        paragraphs: [
          "A plan that is clinically appropriate but poorly understood becomes a different plan by the time it reaches daily life. Instructions get simplified, timings drift, and reasonable-sounding assumptions fill the gaps.",
          "This is not usually carelessness on anyone's part. It reflects how information behaves when it moves from a clinical setting into an ordinary week. What is precise in a consultation room becomes approximate at home.",
          "Treating comprehension as an explicit part of care — rather than something assumed once the words have been said — closes much of that gap.",
        ],
      },
      {
        heading: "Health literacy is a general challenge",
        paragraphs: [
          "Health literacy describes how readily a person can find, understand and use health information. It varies widely, and it is not a proxy for education or intelligence. Highly educated people are routinely lost inside unfamiliar clinical vocabulary.",
          "It also fluctuates. The same person may follow a discussion easily at a routine review and retain very little during a stressful one. Illness, pain and worry all reduce processing capacity.",
          "For that reason, plain language is not a concession made for some patients. It is the sensible default for everyone, with detail added when a person wants it.",
        ],
      },
      {
        heading: "What clearer communication looks like",
        paragraphs: [
          "Several approaches are widely used because they are simple and effective. Leading with the most important point rather than building up to it. Limiting a conversation to a small number of key messages. Pairing spoken instructions with something written.",
          "Teach-back is one of the better-established techniques: asking a person to explain the plan back in their own words. It checks the explanation rather than the patient, and it surfaces misunderstandings while they are still easy to fix.",
          "Framing also matters. Open invitations such as 'what questions do you have?' produce more than closed ones such as 'any questions?', which most people politely decline.",
        ],
        bullets: [
          "Lead with the most important information",
          "Keep to a few key messages per conversation",
          "Give written or printed instructions alongside spoken ones",
          "Invite the person to repeat the plan back in their own words",
          "Ask open questions rather than yes-or-no ones",
        ],
      },
      {
        heading: "Questions are part of good care",
        paragraphs: [
          "Many people hesitate to ask questions in clinical settings — out of politeness, awareness of time pressure, or a worry about appearing uninformed. That hesitation quietly removes the main mechanism for correcting misunderstandings.",
          "A short set of general questions covers most situations: what is this for, how and when do I take or do it, what should I expect, and who do I contact if something changes. Writing them down beforehand helps, because appointments rarely go the way people rehearse.",
          "Bringing someone along is also legitimate. A second person hears different things and remembers what the first person missed.",
        ],
      },
      {
        heading: "Trust and accessible information",
        paragraphs: [
          "Trust develops when people feel heard and when explanations match what they later experience. Being told in advance about a common, expected effect turns a worrying event into a recognised one — and makes the next explanation more credible.",
          "Accessible information also extends beyond the consultation. Clear labels, readable leaflets, reliable public health resources and pharmacists available without an appointment all reduce the number of decisions people have to make on guesswork.",
          "Uncertainty is worth naming honestly too. Clinical practice contains genuine unknowns, and saying so tends to build more confidence than false precision.",
        ],
      },
    ],
    takeaways: [
      "Assume comprehension needs checking, not assuming.",
      "Use plain language by default and add detail on request.",
      "Ask people to repeat the plan back in their own words.",
      "Prepare questions before an appointment and write down the answers.",
      "Pair every spoken instruction with something written.",
    ],
    conclusion: [
      "Good communication does not require more time so much as different structure: fewer messages, clearer language and an explicit check that the plan landed.",
      "It is one of the least technical parts of healthcare and one of the most consequential.",
    ],
    disclaimer: HEALTH_DISCLAIMER,
  },
  {
    slug: "finding-stories-through-photography",
    title: "Finding Stories Through Photography",
    category: "creative",
    categoryLabel: "Creative",
    excerpt:
      "A photograph is a decision about what to include. Learning to make that decision deliberately changes how you see ordinary places long before it changes your pictures.",
    readingTime: "6 min read",
    date: "21 May 2025",
    intro:
      "Photography is often taught as a technical discipline, and the technical part is real. But the part that keeps people interested is narrower and stranger: choosing where the frame ends, and what that choice implies about everything outside it.",
    sections: [
      {
        heading: "Composition is editing before the fact",
        paragraphs: [
          "Every frame excludes far more than it contains. That exclusion is the first act of storytelling. A tight frame on a pair of hands says something different from a wide frame of the same room, even though both are honest records of the same moment.",
          "The familiar guidelines — thirds, leading lines, negative space — are useful mainly as a vocabulary for noticing. They describe how attention moves across an image. Once you can see that movement, you can decide whether to follow the convention or work against it deliberately.",
          "Simplification is usually the strongest lever available. Most weak photographs contain too much. Moving slightly, changing height, or waiting for something to leave the frame often does more than any adjustment made afterwards.",
        ],
      },
      {
        heading: "Light does most of the work",
        paragraphs: [
          "Subject matter gets the credit; light determines whether the image holds together. The same scene photographed at three different hours produces three different moods with no other change.",
          "Learning to read light is largely about noticing direction, quality and colour. Where is it coming from, is it hard or diffused, and what colour is it carrying. Overcast daylight is soft and even. Late sun is directional and warm and disappears quickly. Interior light is mixed and rarely flattering by accident.",
          "A practical habit is to find the light first and the subject second. Photographers often work backwards from a good pocket of light and wait for something to happen inside it.",
        ],
      },
      {
        heading: "Perspective is a choice you make with your feet",
        paragraphs: [
          "Camera position changes meaning more than most settings do. Shooting from standing height produces the view people already have. Lowering the camera, shooting through a foreground object or stepping to one side produces something they do not.",
          "Distance carries its own implication. Close framing suggests intimacy and access; distance suggests observation. Neither is more truthful, but they are not interchangeable.",
          "Lens choice contributes for related reasons — a wider lens requires proximity and includes context, a longer one compresses and isolates. In practice the more important variable is still where you decide to stand.",
        ],
      },
      {
        heading: "Authentic moments and the cost of over-staging",
        paragraphs: [
          "In portrait and lifestyle work there is a constant temptation to arrange everything. Some direction is necessary; people relax when they know roughly what to do. Too much of it produces images that are technically clean and emotionally empty.",
          "The more reliable approach is to set up conditions and then wait. Give someone a task, a place to stand and something to do with their hands, then keep photographing past the point where they think the picture has been taken. The useful frames are often the ones just after.",
          "Small imperfections tend to help rather than hurt. Slight blur, an awkward hand, an unswept floor — these read as evidence that something actually happened.",
        ],
        bullets: [
          "Find the light before you find the subject",
          "Move your feet before you change your settings",
          "Simplify the frame until only what matters remains",
          "Keep shooting after the obvious moment has passed",
        ],
      },
      {
        heading: "Photography as documentation",
        paragraphs: [
          "Beyond any artistic ambition, photographs function as records. Places change, routines end, and the ordinary details nobody thought to record are the ones that later feel most specific — a kitchen counter, a workspace, a street in the middle of an unremarkable afternoon.",
          "This is a good argument for photographing the everyday rather than saving the camera for occasions. Occasions are already documented. Ordinary days are not.",
          "It also lowers the pressure. Not every frame needs to be good. Some only need to exist.",
        ],
      },
    ],
    takeaways: [
      "Decide what to exclude — the frame edge is the first storytelling choice.",
      "Read light by direction, quality and colour before anything else.",
      "Change position rather than settings when an image is not working.",
      "Direct lightly, then wait for the unguarded moment.",
      "Photograph ordinary days, not only occasions.",
    ],
    conclusion: [
      "The habit photography builds is attention. You start noticing how a room fills with light in the afternoon, how people hold themselves when they forget to pose, how much a small shift in position changes a scene.",
      "The pictures improve gradually. The noticing improves immediately, and it is the more useful of the two.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const getRelated = (slug: string, limit = 3) => {
  const current = getPost(slug);
  if (!current) return posts.slice(0, limit);
  const sameCategory = posts.filter((p) => p.slug !== slug && p.category === current.category);
  const others = posts.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...sameCategory, ...others].slice(0, limit);
};
