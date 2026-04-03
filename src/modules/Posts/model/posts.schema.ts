import { paginationSchema } from "@shared/model/schemas/api.schema";
import z from "zod";

export const findPostsByQueryParamsSchema = paginationSchema.extend({
  q: z.string().optional(),
  tag: z.string().optional(),
});
