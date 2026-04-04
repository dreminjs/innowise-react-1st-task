import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@shared/index";
import {
  CreateCommentDto,
  ICommentsResponse,
  UpdateCommentDto,
} from "../model/comments.interface";
import { addNotification } from "@modules/Notifications";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getCommentsByPostId: builder.query<ICommentsResponse, number>({
      query: (postId: number) => `/comments/post/${postId}`,
    }),
    createComment: builder.mutation({
      query: (comment: CreateCommentDto) => ({
        url: "/comments/add",
        method: "POST",
        body: comment,
      }),
      async onQueryStarted(comment, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            addNotification({
              type: "success",
              message: "Комменатрий отправлен",
            }),
          );
        } catch (_) {
          dispatch(
            addNotification({
              type: "error",
              message: "Комменатрий не отправлен",
            }),
          );
        }
      },
    }),
    updateComment: builder.mutation({
      query: (comment: UpdateCommentDto) => ({
        url: `/comments/${comment.id}`,
        method: "PUT",
        body: comment,
      }),
      async onQueryStarted(comment, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            addNotification({
              type: "success",
              message: "Комменатрий обновлен",
            }),
          );
        } catch (_) {
          dispatch(
            addNotification({
              type: "error",
              message: "Комменатрий не обновлен",
            }),
          );
        }
      },
    }),
    deleteComment: builder.mutation({
      query: (id: number) => ({
        url: `/comments/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            addNotification({
              type: "success",
              message: "Комменатрий удален",
            }),
          );
        } catch (_) {
          dispatch(
            addNotification({
              type: "error",
              message: "Комменатрий не удален",
            }),
          );
        }
      },
    }),
  }),
});

export const {
  useGetCommentsByPostIdQuery,
  useCreateCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = commentsApi;
