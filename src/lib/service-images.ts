import type { ProjectGalleryImage } from "./project-gallery";
import { projectGallery } from "./project-gallery";

function imageFromOriginal(original: string) {
  const sourceMap: Record<string, string> = {
    "ramos-cabinetry-construction-mesa-az-project-005.webp": "ramos-kitchen-remodeling-scottsdale-east-valley-az-005",
    "ramos-cabinetry-construction-mesa-az-project-118.webp": "ramos-laundry-room-cabinets-chandler-east-valley-az-118",
    "ramos-cabinetry-construction-mesa-az-project-140.webp": "ramos-custom-cabinets-gilbert-east-valley-az-140",
    "ramos-cabinetry-construction-mesa-az-project-096.webp": "ramos-materials-process-phoenix-east-valley-az-096",
    "ramos-cabinetry-construction-mesa-az-project-143.webp": "ramos-custom-cabinets-scottsdale-east-valley-az-143",
    "ramos-cabinetry-construction-mesa-az-project-057.webp": "ramos-cabinet-installation-mesa-east-valley-az-057",
  };
  const image = projectGallery.find((project) => project.slug === sourceMap[original]);
  if (!image) {
    throw new Error(`Missing requested service image: ${original}`);
  }
  return image;
}

export const serviceImages: Record<string, ProjectGalleryImage> = {
  "custom-cabinets": imageFromOriginal("ramos-cabinetry-construction-mesa-az-project-005.webp"),
  "kitchen-remodeling": imageFromOriginal("ramos-cabinetry-construction-mesa-az-project-118.webp"),
  "bathroom-remodeling": imageFromOriginal("ramos-cabinetry-construction-mesa-az-project-140.webp"),
  "cabinet-installation": imageFromOriginal("ramos-cabinetry-construction-mesa-az-project-096.webp"),
  "finish-carpentry": imageFromOriginal("ramos-cabinetry-construction-mesa-az-project-143.webp"),
  "home-remodeling": imageFromOriginal("ramos-cabinetry-construction-mesa-az-project-057.webp"),
};
