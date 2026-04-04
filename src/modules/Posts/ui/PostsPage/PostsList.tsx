import { FC } from "react";
import { IPost } from "../../model/posts.interfaces";
import { PostsItem } from "./PostsItem";
import styles from "./Posts.module.css";
import { Actions } from "../Actions/Actions";
import { useGetMeQuery } from "@modules/Users";

interface IPostsListProps {
  data: IPost[];
  isLoading: boolean;
  isError: boolean;
}

export const PostsList: FC<IPostsListProps> = ({
  data,
  isLoading,
  isError,
}) => {
  const { data: currentUser } = useGetMeQuery();
  const userId = currentUser?.id;

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка загрузки.</div>;
  if (data.length === 0) return <div>Ничего не найдено.</div>;

  return (
    <ul className={styles.postsList}>
      {data.map((post) => (
        <PostsItem
          {...(userId === post.userId
            ? { actions: <Actions postId={post.id} /> }
            : {})}
          isAuthor={userId === post.userId}
          key={post.id}
          {...post}
        />
      ))}
    </ul>
  );
};
