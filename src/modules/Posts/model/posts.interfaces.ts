import z from "zod";
import { findPostsByQueryParamsSchema } from "./posts.schema";
import { TSlug } from "@modules/Tags/model/tags.interface";

export type TFindPostsQueryParams = z.infer<
  typeof findPostsByQueryParamsSchema
>;

export interface IPostsStore {
  tag: TSlug;
  searchQuery: string;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
  tags: TSlug[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

export interface IPostResponse {
  posts: IPost[];
  total: number;
  skip: number;
  limit: number;
}
