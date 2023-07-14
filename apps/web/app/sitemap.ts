import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.outscore.live/",
      lastModified: new Date(),
    },
    {
      url: "https://www.outscore.live/favorites",
      lastModified: new Date(),
    },
  ];
}
