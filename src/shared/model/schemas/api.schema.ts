import z from "zod";

export const paginationSchema = z.object({
  skip: z.number().optional(),
  limit: z.number().optional(),
});
