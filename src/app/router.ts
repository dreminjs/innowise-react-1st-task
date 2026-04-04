import { LoginLayout, LoginPage } from "@modules/Login";
import { PostsPage } from "@modules/Posts";
import { createBrowserRouter } from "react-router";
import { BaseLayout } from "../layouts/BaseLayout";
import { GuestProvider } from "../providers/GuestProvider";
import { MyProfilePage, UsersProfilePage } from "@modules/Users";
import { ProtectedRoutesProvider } from "../providers/ProtectedRoutesProvider";
import { CreatePostPage } from "@modules/Posts/";

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
        ],
      },
    ],
  },
]);
