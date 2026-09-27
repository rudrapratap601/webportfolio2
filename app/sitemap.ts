import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!process.env.SITE_URL) return [];
  return [
    "",
    "/about",
    "/projects",
    "/experience",
    "/certificates",
    "/contact",
    "/assistant",
  ].map((path) => ({ url: new URL(path || "/", process.env.SITE_URL).href }));
}
