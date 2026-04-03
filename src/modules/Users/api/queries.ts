import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@shared/index";
import { IUser } from "../model/users.interface";
import { GET_ME_TAG, USERS_TAG } from "../model/constants";
import { setCurrentUser } from "../model/userSlice";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: [USERS_TAG, GET_ME_TAG],
  endpoints: (builder) => ({
    getMe: builder.query<IUser, void>({
      query: () => "/user/me",
      providesTags: [USERS_TAG, GET_ME_TAG],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setCurrentUser(data));
      },
    }),
    getUser: builder.query<IUser, number>({
      query: (id) => `/user/${id}`,
      providesTags: [USERS_TAG],
    }),
  }),
});

export const { useGetMeQuery, useGetUserQuery } = usersApi;
