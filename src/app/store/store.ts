import { authApi } from "@modules/Login";
import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "@modules/Users/model/userSlice";
import { usersApi } from "@modules/Users/api/queries";
import { tagsApi } from "@modules/Tags";
import { notificationSlice } from "@modules/Notifications/model/notificationSlice";
import { postsSlice } from "@modules/Posts/model/postsSlice";
import { postsApi } from "@modules/Posts/api/queries";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    notification: notificationSlice.reducer,
    users: usersSlice.reducer,
    posts: postsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(tagsApi.middleware)
      .concat(usersApi.middleware)
      .concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
