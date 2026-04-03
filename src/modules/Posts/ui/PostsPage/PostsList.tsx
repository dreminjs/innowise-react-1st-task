import { FC } from "react";
import { IPost } from "../../model/posts.interfaces";
import { PostsItem } from "./PostsItem";
import styles from "./Posts.module.css";

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
  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка загрузки.</div>;
  if (data.length === 0) return <div>Ничего не найдено.</div>;

  return (
    <ul className={styles.postsList}>
      {data.map((post) => (
        <PostsItem key={post.id} {...post} />
      ))}
    </ul>
  );
};
