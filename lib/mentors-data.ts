export type MentorCategoryId = "business" | "coding" | "productivity" | "health";

export interface MentorSubcategory {
  id: string;
  name: string;
  categoryId: MentorCategoryId;
}

export interface MentorCategory {
  id: MentorCategoryId;
  name: string;
  tagline: string;
  subcategories: MentorSubcategory[];
}

export interface Mentor {
  id: string;
  name: string;
  categoryId: MentorCategoryId;
  subcategoryId: string;
  description: string;
  focusAreas: string[];
  /**
   * Reference to this mentor's master prompt / intellectual identity
   * document, once supplied. Intentionally undefined for every mentor in
   * this skeleton — do not invent prompt content here. When real master
   * prompts are provided, this becomes the integration point; the
   * description field above is first-draft editorial copy in the
   * meantime, not a substitute for it.
   */
  masterPromptRef?: string;
}

export const CATEGORIES: MentorCategory[] = [
  {
    id: "business",
    name: "Business",
    tagline:
      "From an unproven idea to a business that holds together under its own weight.",
    subcategories: [
      { id: "startup", name: "Startup", categoryId: "business" },
      { id: "marketing", name: "Marketing", categoryId: "business" },
      { id: "hiring", name: "Hiring", categoryId: "business" },
    ],
  },
  {
    id: "coding",
    name: "Coding",
    tagline:
      "Structural thinking for systems that need to keep working as they grow.",
    subcategories: [
      { id: "engineering", name: "Engineering", categoryId: "coding" },
      { id: "debugger", name: "Debugger", categoryId: "coding" },
      { id: "systems-automation", name: "Systems & Automation", categoryId: "coding" },
    ],
  },
  {
    id: "productivity",
    name: "Productivity",
    tagline:
      "Turning ambiguous intentions into work that actually gets finished.",
    subcategories: [
      { id: "focus", name: "Focus", categoryId: "productivity" },
      { id: "planning", name: "Planning", categoryId: "productivity" },
      { id: "execution", name: "Execution", categoryId: "productivity" },
    ],
  },
  {
    id: "health",
    name: "Health",
    tagline:
      "Building routines around the person you actually are, not an idealized one.",
    subcategories: [
      { id: "fitness", name: "Fitness", categoryId: "health" },
      { id: "habits", name: "Habits", categoryId: "health" },
      { id: "recovery", name: "Recovery", categoryId: "health" },
    ],
  },
];

export const MENTORS: Mentor[] = [
  {
    id: "startup-validator",
    name: "Startup Validator",
    categoryId: "business",
    subcategoryId: "startup",
    description:
      "Pressure-test an idea before you spend months building the wrong thing. This mentor challenges assumptions, exposes weak points, and separates genuine signal from founder optimism. Bring an early concept, a shaky hypothesis, or a business that isn't behaving the way you expected. Expect pointed questions rather than encouragement — the kind that would otherwise come from a market you haven't met yet. Leave with sharper problems, clearer risks, and a direction worth defending.",
    focusAreas: ["Idea validation", "Risk assessment", "Market signal"],
  },
  {
    id: "business-model-mentor",
    name: "Business Model Mentor",
    categoryId: "business",
    subcategoryId: "startup",
    description:
      "Once an idea survives contact with reality, it still needs a way to run. This mentor works through how a business actually creates, delivers, and captures value — pricing, unit economics, channels, and the mechanics that separate a product from a company. Bring a business model that feels vague, a pricing decision you can't quite justify, or a plan that works on a slide but not in a spreadsheet. Leave with a model that holds together under its own weight.",
    focusAreas: ["Unit economics", "Pricing", "Business structure"],
  },
  {
    id: "marketing-strategist",
    name: "Marketing Strategist",
    categoryId: "business",
    subcategoryId: "marketing",
    description:
      "Positioning is the sentence that makes people understand why you exist before you finish explaining. This mentor works through who you're really for, what you're competing against in someone's attention, and the message that cuts through instead of blending in. Bring a product nobody's noticing, a pitch that keeps changing, or a launch you can't quite name. Leave with language and a strategy you can actually say out loud with confidence.",
    focusAreas: ["Positioning", "Messaging", "Go-to-market"],
  },
  {
    id: "team-hiring-advisor",
    name: "Team & Hiring Advisor",
    categoryId: "business",
    subcategoryId: "hiring",
    description:
      "Who you hire — and when — shapes a company more than almost any other decision, and it's the one founders make with the least practice. This mentor works through role design, hiring sequencing, interview signal, and the tradeoffs between speed and fit. Bring a role you're not sure how to define, a team that's grown lopsided, or a hire you're hesitant to make. Leave with a clearer sense of who you actually need next, and why.",
    focusAreas: ["Role design", "Interview signal", "Team structure"],
  },
  {
    id: "engineering-architect",
    name: "Engineering Architect",
    categoryId: "coding",
    subcategoryId: "engineering",
    description:
      "Some decisions are cheap to change later. Others quietly become permanent the moment you ship them. This mentor works through system design, architectural tradeoffs, and the structural choices that determine whether your codebase gets easier or harder to work in over time. Bring a design you're not confident in, a system that's starting to resist change, or a decision with consequences you can't fully see yet. Leave with a structure built for the size you're actually growing into.",
    focusAreas: ["System design", "Architecture tradeoffs", "Scalability"],
  },
  {
    id: "bug-hunter",
    name: "Bug Hunter",
    categoryId: "coding",
    subcategoryId: "debugger",
    description:
      "Something is broken, and the obvious explanation is wrong. This mentor works through reproduction, isolation, and the discipline of ruling out what it isn't before chasing what it is. Bring a stack trace that doesn't make sense, a bug that only happens sometimes, or a fix that didn't actually fix anything. Leave with the real cause identified — and usually a clearer sense of what let it hide.",
    focusAreas: ["Root-cause diagnosis", "Reproduction", "Isolation"],
  },
  {
    id: "flow-weaver",
    name: "Flow Weaver",
    categoryId: "coding",
    subcategoryId: "systems-automation",
    description:
      "Most inefficiency doesn't live inside any single tool — it lives in the handoffs between them. This mentor works through automation, integration, and the invisible plumbing that turns a pile of separate tools into one coherent workflow. Bring a process that's still stitched together by hand, a repetitive task nobody's automated, or systems that technically work but don't talk to each other. Leave with a workflow that runs without you standing over it.",
    focusAreas: ["Workflow automation", "Integration", "Process design"],
  },
  {
    id: "systems-engineer",
    name: "Systems Engineer",
    categoryId: "coding",
    subcategoryId: "systems-automation",
    description:
      "Underneath every reliable product is infrastructure nobody thinks about until it fails. This mentor works through deployment, scaling, observability, and the operational architecture that keeps a system standing under real conditions. Bring an outage you're trying to prevent, an infrastructure decision you're second-guessing, or a system that works in development and struggles in production. Leave with an operational foundation built to hold weight, not just pass a demo.",
    focusAreas: ["Infrastructure", "Reliability", "Observability"],
  },
  {
    id: "attention-optimizer",
    name: "Attention Optimizer",
    categoryId: "productivity",
    subcategoryId: "focus",
    description:
      "Most focus problems aren't discipline problems — they're environment and structure problems wearing a discipline costume. This mentor works through what's actually fragmenting your attention, from tool sprawl to poorly shaped work, and how to design conditions where concentration is the default instead of the exception. Bring a day that keeps getting hijacked, a task you can't seem to start, or a focus practice that keeps quietly failing. Leave with a system built around how attention actually works, not how it's supposed to.",
    focusAreas: ["Deep work", "Environment design", "Distraction audit"],
  },
  {
    id: "planning-architect",
    name: "Planning Architect",
    categoryId: "productivity",
    subcategoryId: "planning",
    description:
      "A plan that only exists in your head isn't a plan — it's a hope with deadlines. This mentor works through breaking down ambiguous goals into sequenced, realistic work: what depends on what, what's actually urgent, and what you're quietly avoiding. Bring a goal that's too big to start, a project with no clear shape yet, or a roadmap that keeps sliding. Leave with a plan specific enough to actually begin.",
    focusAreas: ["Goal breakdown", "Sequencing", "Roadmapping"],
  },
  {
    id: "execution-auditor",
    name: "Execution Auditor",
    categoryId: "productivity",
    subcategoryId: "execution",
    description:
      "Plans rarely fail loudly — they fail quietly, a little at a time, until the gap between intention and output is too large to ignore. This mentor works backward from what actually got done, examining where execution broke down and why, without the comfortable story you've been telling yourself. Bring a project that's behind, a goal you keep not finishing, or a pattern of good plans and disappointing outcomes. Leave with an honest diagnosis and a corrected course.",
    focusAreas: ["Progress review", "Accountability", "Diagnosis"],
  },
  {
    id: "momentum-specialist",
    name: "Momentum Specialist",
    categoryId: "productivity",
    subcategoryId: "execution",
    description:
      "Starting is rarely the hard part — staying in motion once the initial enthusiasm fades usually is. This mentor works through pacing, sustainable intensity, and the small structural choices that keep effort compounding instead of collapsing after a strong first week. Bring a project that's lost its pulse, a streak you can't seem to protect, or energy that spikes and crashes. Leave with a rhythm built to survive contact with an ordinary Tuesday.",
    focusAreas: ["Pacing", "Sustainable intensity", "Consistency"],
  },
  {
    id: "movement-builder",
    name: "Movement Builder",
    categoryId: "health",
    subcategoryId: "fitness",
    description:
      "Fitness advice is everywhere and still doesn't stick, usually because it was designed for someone else's body, schedule, and history. This mentor works through building a movement practice around your actual constraints — time, injuries, equipment, and what you'll genuinely keep doing in six months. Bring a program that isn't working, a body that's telling you something, or a goal you don't know how to structure. Leave with a plan built for the person you actually are, not an idealized one.",
    focusAreas: ["Program design", "Constraints-based training", "Adherence"],
  },
  {
    id: "cadence-architect",
    name: "Cadence Architect",
    categoryId: "health",
    subcategoryId: "habits",
    description:
      "A habit that isn't scheduled is just an intention. This mentor works through the mechanics of when and how often — frequency, sequencing, and the structural cadence that turns a good intention into something that actually recurs. Bring a habit you keep meaning to start, a routine that falls apart by Thursday, or too many good intentions competing for the same hour. Leave with a schedule built to actually hold.",
    focusAreas: ["Habit scheduling", "Frequency", "Sequencing"],
  },
  {
    id: "rhythm-architect",
    name: "Rhythm Architect",
    categoryId: "health",
    subcategoryId: "habits",
    description:
      "Some habit systems are technically well-scheduled and still feel exhausting to live inside. This mentor works through the felt experience of your days — how habits interact with energy, mood, and each other — so your routine works with your nature instead of constantly fighting it. Bring a schedule that looks right on paper but feels wrong in practice, habits that keep clashing, or days that feel like a checklist instead of a life. Leave with a rhythm that feels sustainable, not just correct.",
    focusAreas: ["Energy alignment", "Daily flow", "Sustainability"],
  },
  {
    id: "regen-optimizer",
    name: "Regen Optimizer",
    categoryId: "health",
    subcategoryId: "recovery",
    description:
      "Progress that isn't paired with recovery eventually reverses itself, quietly, until burnout makes it obvious. This mentor works through sleep, rest structure, and the recovery inputs that determine whether effort compounds or erodes you. Bring a recovery routine that isn't recovering you, a pattern of overtraining or overworking, or fatigue you can't explain. Leave with a recovery structure that makes your effort sustainable instead of costly.",
    focusAreas: ["Sleep", "Rest structure", "Overtraining prevention"],
  },
];

export function getCategoryById(id: string): MentorCategory | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function getSubcategoryById(id: string): MentorSubcategory | undefined {
  for (const category of CATEGORIES) {
    const match = category.subcategories.find((s) => s.id === id);
    if (match) return match;
  }
  return undefined;
}

export function getMentorById(id: string): Mentor | undefined {
  return MENTORS.find((m) => m.id === id);
}

export function getMentorsByCategory(categoryId: MentorCategoryId): Mentor[] {
  return MENTORS.filter((m) => m.categoryId === categoryId);
}

export function getMentorsBySubcategory(subcategoryId: string): Mentor[] {
  return MENTORS.filter((m) => m.subcategoryId === subcategoryId);
}

/**
 * A small, curated cross-category sample for lighter-weight surfaces (the
 * public marketing preview, the authenticated Home page) that shouldn't
 * show all 16 mentors at once.
 */
export const FEATURED_MENTOR_IDS = [
  "startup-validator",
  "engineering-architect",
  "attention-optimizer",
] as const;

export function getFeaturedMentors(): Mentor[] {
  return FEATURED_MENTOR_IDS.map((id) => getMentorById(id)).filter(
    (m): m is Mentor => m !== undefined
  );
}
