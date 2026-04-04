import { createBrowserRouter } from "react-router";
import { BaseLayout } from "../layouts/BaseLayout";
import { GuestProvider } from "../providers/GuestProvider";
import { ProtectedRoutesProvider } from "../providers/ProtectedRoutesProvider";
import { lazy } from "react";

const PostsPage = lazy(() => import("@modules/Posts/pages/PostsPage"));

const PostPage = lazy(() => import("@modules/Posts/pages/PostPage"));

const CreatePostPage = lazy(
  () => import("@modules/Posts/pages/CreatePostPage"),
);
const EditPostPage = lazy(() => import("@modules/Posts/pages/EditPostPage"));

const UsersProfilePage = lazy(
  () => import("@modules/Users/pages/UserProfilePage"),
);

const LoginPage = lazy(() => import("@modules/Login/pages/LoginPage"));

const MyProfilePage = lazy(() => import("@modules/Users/pages/MyProfilePage"));

export const router = createBrowserRouter([
  {
    Component: BaseLayout,
    children: [
      {
        path: "/",
        Component: PostsPage,
      },
      {
        path: "/posts/:id",
        Component: PostPage,
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
