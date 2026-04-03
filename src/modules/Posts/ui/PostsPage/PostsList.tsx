import { FC } from "react";
import { IPost } from "../../model/posts.interfaces";
import { PostsItem } from "./PostItem/PostsItem";
import { useAppSelector } from "@app/store/hooks";
import styles from "./Posts.module.css";
import { Actions } from "./PostItem/Actions";

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
  const currentUser = useAppSelector((state) => state.users.currentUser);
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
