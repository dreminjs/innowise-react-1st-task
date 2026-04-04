import { LoginPage } from "@modules/Login";
import { PostsPage } from "@modules/Posts";
import { createBrowserRouter } from "react-router";
import { BaseLayout } from "../layouts/BaseLayout";
import { GuestProvider } from "../providers/GuestProvider";
import { MyProfilePage } from "@modules/Users";
import { ProtectedRoutesProvider } from "../providers/ProtectedRoutesProvider";
import { lazy } from "react";

const CreatePostPage = lazy(() =>
  import("@modules/Posts").then((module) => ({
    default: module.CreatePostPage,
  })),
);
const EditPostPage = lazy(() =>
  import("@modules/Posts").then((module) => ({ default: module.EditPostPage })),
);
const UsersProfilePage = lazy(() =>
  import("@modules/Users").then((module) => ({
    default: module.UsersProfilePage,
  })),
);

export const router = createBrowserRouter([
  {
    Component: BaseLayout,
    children: [
      {
        path: "/",
        Component: PostsPage,
      },
      {
        path: "/users/:id",
        Component: UsersProfilePage,
      },
      {
        Component: GuestProvider,
        children: [
          {
            path: "/login",
            Component: LoginPage,
          },
        ],
      },
      {
        Component: ProtectedRoutesProvider,
        children: [
          {
            path: "/profile",
            Component: MyProfilePage,
          },
          {
            path: "/posts/create",
            Component: CreatePostPage,
          },
          {
            path: "/posts/:postId/edit",
            Component: EditPostPage,
          },
        ],
      },
    ],
  },
]);
