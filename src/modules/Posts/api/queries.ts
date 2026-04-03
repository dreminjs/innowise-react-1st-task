import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@shared/index";
import {
  IPostsResponse,
  TFindPostsByUserIdQueryParams,
  TFindPostsQueryParams,
} from "../model/posts.interfaces";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getPosts: builder.query<IPostsResponse, TFindPostsQueryParams>({
      query: (dto) => {
        const limit = dto.limit ?? 10;
        if (dto.tag) {
          return `/posts/tag/${dto.tag}?limit=${limit}&skip=${dto.skip ?? 0}`;
        } else if (dto.q) {
          return `/posts/search?q=${dto.q}&limit=${limit}&skip=${dto.skip ?? 0}`;
        } else {
          return `/posts?limit=${limit}&skip=${dto.skip ?? 0}`;
        }
      },
    }),
    getPostsByUserId: builder.query<
      IPostsResponse,
      TFindPostsByUserIdQueryParams
    >({
      query: (dto) =>
        `/posts/user/${dto.userId}?limit=${dto.limit ?? 10}&skip=${dto.skip ?? 0}`,
    }),
    getPostTags: builder.query({
      query: () => "/tags",
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostTagsQuery,
  useGetPostsByUserIdQuery,
} = postsApi;
