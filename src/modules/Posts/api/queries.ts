import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@shared/index";
import {
  IPostsResponse,
  TFindPostsByUserIdQueryParams,
  TFindPostsQueryParams,
} from "../model/posts.interfaces";
import { setPostIdToDelete } from "../model/postsSlice";
import { addNotification } from "@modules/Notifications";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (dto) => ({
        url: "/posts/add",
        method: "POST",
        body: dto,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            addNotification({
              type: "success",
              message: "Успешно создан пост",
            }),
          );
        } catch (error) {
          dispatch(
            addNotification({
              type: "error",
              message: "Не удалось создать пост",
            }),
          );
        }
      },
    }),

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
    deletePost: builder.mutation({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: "DELETE",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            addNotification({
              type: "success",
              message: "Успешно",
            }),
          );
        } catch (error) {
          dispatch(
            addNotification({
              type: "error",
              message: "Ошибка",
            }),
          );
        } finally {
          dispatch(setPostIdToDelete(null));
        }
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostTagsQuery,
  useGetPostsByUserIdQuery,
  useDeletePostMutation,
  useCreatePostMutation,
} = postsApi;
