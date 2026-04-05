import { useGetPostByIdQuery } from "@modules/Posts/api/queries";
import { Link, useParams } from "react-router";
import styles from "./Post.module.css";
import { FC, useMemo } from "react";
import { useGetMeQuery } from "@modules/Users";
import { Actions } from "../Actions/Actions";
import { PostTags } from "@modules/Tags";
import { ConfirmDeletionModal } from "../ConfirmDeletion/ConfirmDeletionModal";

interface IPostProps {
  postId: number;
}

export const Post: FC<IPostProps> = ({ postId }) => {
  const { data: post, isLoading } = useGetPostByIdQuery(Number(postId));
  const { data: user } = useGetMeQuery();
  const isAuthor = useMemo(() => {
    return true;
  }, [post?.userId]);

  if (isLoading) return <div>Загрузка...</div>;

  if (!post) return <div>Не найден пост</div>;

  return (
    <>
      <article className={styles.postInfo}>
        <h1 className={styles.postInfoTitle}>{post.title}</h1>
        <p className={styles.postInfoBody}>{post.body}</p>
        <PostTags tags={post.tags} />
        <div className={styles.footer}>
          <div className={styles.left}>
            <div className={styles.statItem}>
              <span>👍</span> {post.reactions.likes}
            </div>
            <div className={styles.statItem}>
              <span>👁️</span> {post.views}
            </div>
            {isAuthor && <Actions postId={Number(postId)} />}
            <Link
              to={isAuthor ? `/profile` : `/users/${post.userId}`}
              className={styles.author}
            >
              {isAuthor ? "Вы" : `Пользователь ${post.userId}`}
            </Link>
          </div>
        </div>
      </article>
      <ConfirmDeletionModal />
    </>
  );
};
