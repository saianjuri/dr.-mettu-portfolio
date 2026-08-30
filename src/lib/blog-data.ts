export type BlogCategory = "pharmacy" | "fitness" | "nutrition" | "wellness" | "creative";

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  categoryLabel: string;
  excerpt: string;
  readingTime: string;
  date: string;
  featured?: boolean;
  /** Minimal, text-only card treatment in the grid. */
  textOnly?: boolean;
};

export const categoryLabels: Record<BlogCategory, string> = {
  pharmacy: "Pharmacy",
  fitness: "Fitness",
  nutrition: "Nutrition",
  wellness: "Wellness",
  creative: "Creative",
};

export const posts: BlogPost[] = [
  {
    slug: "pharmd-background-taught-me-about-health",
    title: "What My PharmD Background Taught Me About Health",
    category: "pharmacy",
    categoryLabel: "Pharmacy",
    excerpt:
      "A reflection on how a pharmacy education shapes the way health, habits and everyday decisions are understood. Full article coming soon.",
    readingTime: "6 min read",
    date: "Coming soon",
    featured: true,
  },
  {
    slug: "understanding-medicines-beyond-the-prescription",
    title: "Understanding Medicines Beyond the Prescription",
    category: "pharmacy",
    categoryLabel: "Pharmacy",
    excerpt:
      "Notes on what patients often want to know beyond the label — and why clear explanation matters. Full article coming soon.",
    readingTime: "5 min read",
    date: "Coming soon",
  },
  {
    slug: "consistency-over-intensity",
    title: "Consistency Over Intensity: Lessons From Fitness",
    category: "fitness",
    categoryLabel: "Fitness",
    excerpt:
      "Why steady, repeatable effort tends to outlast short bursts of motivation. Full article coming soon.",
    readingTime: "4 min read",
    date: "Coming soon",
  },
  {
    slug: "building-sustainable-nutrition-habits",
    title: "Building Sustainable Nutrition Habits",
    category: "nutrition",
    categoryLabel: "Nutrition",
    excerpt:
      "A practical perspective on nutrition that fits real routines rather than fighting them. Full article coming soon.",
    readingTime: "5 min read",
    date: "Coming soon",
  },
  {
    slug: "what-fitness-taught-me-about-discipline",
    title: "What Fitness Taught Me About Discipline",
    category: "fitness",
    categoryLabel: "Fitness",
    excerpt:
      "On patience, repetition and the quiet part of training nobody photographs. Full article coming soon.",
    readingTime: "4 min read",
    date: "Coming soon",
    textOnly: true,
  },
  {
    slug: "healthcare-communication-patient-understanding",
    title: "Healthcare, Communication & Patient Understanding",
    category: "wellness",
    categoryLabel: "Wellness",
    excerpt:
      "Communication is part of care. A short piece on listening, language and clarity. Full article coming soon.",
    readingTime: "6 min read",
    date: "Coming soon",
  },
  {
    slug: "finding-stories-through-photography",
    title: "Finding Stories Through Photography",
    category: "creative",
    categoryLabel: "Creative",
    excerpt:
      "How a camera changes the way you notice people, light and ordinary moments. Full article coming soon.",
    readingTime: "5 min read",
    date: "Coming soon",
    textOnly: true,
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
