import { z } from "zod";
import { createCommentFormSchema } from "./comments.schema";
import { IUser } from "@modules/Users";
import { IAPIResponse } from "@shared/index";

export type TCreateCommentForm = z.infer<typeof createCommentFormSchema>;

export type CreateCommentDto = TCreateCommentForm & {
  postId: number;
  userId: number;
};

export type UpdateCommentDto = {
  id: number;
  body: string;
};

export interface IComment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: Pick<IUser, "id" | "username"> & {
    fullName: string;
  };
}

export interface ICommentsResponse extends IAPIResponse {
  comments: IComment[];
}
