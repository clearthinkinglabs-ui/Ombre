export interface MentorPreview {
  name: string;
  specialization: string;
  description: string;
  category: string;
}

/**
 * Illustrative example roster for the public preview only.
 * The canonical Ombre specs leave the actual V1 Mentor lineup undecided —
 * this list should not be treated as final or committed content.
 */
export const MENTOR_PREVIEWS: MentorPreview[] = [
  {
    name: "Startup Validator",
    specialization: "Idea & Market Validation",
    description:
      "Pressure-tests a new idea before you spend months building the wrong thing.",
    category: "Business",
  },
  {
    name: "Pricing Strategist",
    specialization: "Pricing & Monetization",
    description:
      "Helps you choose a pricing model and defend it with a straight face.",
    category: "Business",
  },
  {
    name: "Market Mapper",
    specialization: "Competitive Landscape",
    description:
      "Maps who else is solving this problem, and where the real gap is.",
    category: "Business",
  },
  {
    name: "Growth Architect",
    specialization: "Growth Strategy",
    description:
      "Turns a handful of early users into a repeatable growth motion.",
    category: "Business",
  },
  {
    name: "Positioning Architect",
    specialization: "Brand & Positioning",
    description:
      "Finds the sentence that makes people immediately understand why you exist.",
    category: "Business",
  },
  {
    name: "Decision Architect",
    specialization: "Decision-Making",
    description:
      "Slows down a hard decision just long enough to make it a good one.",
    category: "Strategy",
  },
];
