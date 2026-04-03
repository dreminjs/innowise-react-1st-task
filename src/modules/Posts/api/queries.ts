import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@shared/index";
import {
  IPostResponse,
  TFindPostsQueryParams,
} from "../model/posts.interfaces";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getPosts: builder.query<IPostResponse, TFindPostsQueryParams>({
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
    getPostTags: builder.query({
      query: () => "/tags",
    }),
  }),
});

export const { useGetPostsQuery, useGetPostTagsQuery } = postsApi;
