import { allCases, featuredCases, moreCases, type CaseStudy } from "@/lib/case-studies";

/**
 * Two Google Ads screenshots show an account email in the top bar.
 * The Upwork page uses the cropped copies in /portfolio/upwork instead.
 */
const safeShots: Record<string, { src: string; width: number; height: number }> = {
  "keto-food-google-search": {
    src: "/portfolio/upwork/keto-google-search.png",
    width: 1024,
    height: 498,
  },
  "training-school-google-search": {
    src: "/portfolio/upwork/google-training-conversions.png",
    width: 1024,
    height: 496,
  },
};

function withSafeShot(study: CaseStudy): CaseStudy {
  const shot = safeShots[study.slug];
  return shot ? { ...study, image: { ...study.image, ...shot } } : study;
}

export const safeFeatured = featuredCases.map(withSafeShot);
export const safeMore = moreCases.map(withSafeShot);
export const safeAll = allCases.map(withSafeShot);
