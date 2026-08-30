import type { BlogCategory } from "@/lib/blog-data";
import pharmacyPhoto from "@/assets/blog/pharmacy.jpg";
import fitnessPhoto from "@/assets/blog/fitness.jpg";
import nutritionPhoto from "@/assets/blog/nutrition.jpg";
import wellnessPhoto from "@/assets/blog/wellness.jpg";
import creativePhoto from "@/assets/blog/creative.jpg";

/**
 * Authentic editorial photography, one per discipline.
 * Any post can override these by setting its own `image` in blog-data.
 */
export const categoryPhotos: Record<BlogCategory, string> = {
  pharmacy: pharmacyPhoto,
  fitness: fitnessPhoto,
  nutrition: nutritionPhoto,
  wellness: wellnessPhoto,
  creative: creativePhoto,
};

type Props = {
  /** Real cover image URL. Falls back to the category's editorial photograph. */
  src?: string | undefined;
  alt?: string;
  category: BlogCategory;
  /** Tailwind aspect ratio class, e.g. "aspect-[4/3]". */
  ratio?: string;
  className?: string;
};

export function ArticleImage({
  src,
  alt = "",
  category,
  ratio = "aspect-[3/2]",
  className = "",
}: Props) {
  const photo = src ?? categoryPhotos[category];

  return (
    <div className={`relative overflow-hidden rounded-lg bg-secondary ${ratio} ${className}`}>
      <img
        src={photo}
        alt={alt}
        loading="lazy"
        width={1280}
        height={960}
        className="h-full w-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.02]"
      />
    </div>
  );
}
