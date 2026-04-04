import { paginationSchema } from "@shared/model/schemas/api.schema";
import z from "zod";

export const findPostsByQueryParamsSchema = paginationSchema.extend({
  q: z.string().optional(),
  tag: z.string().optional(),
});

export const createPostSchema = z.object({
  title: z.string(),
  body: z.string(),
});
