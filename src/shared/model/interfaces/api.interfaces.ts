import z from "zod";
import { paginationSchema } from "../schemas/api.schema";

export type TPaginationQueryParams = z.infer<typeof paginationSchema>;
