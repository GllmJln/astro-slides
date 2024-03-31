// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const slideCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    backgroundColor: z.string().optional(),
    align: z.string().optional(),
    output: z.string().optional(),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  slides: slideCollection,
};
