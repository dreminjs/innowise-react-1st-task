import { FC, ReactNode, useState } from "react";
import { IComment } from "../model/comments.interface";
import styles from "./Comments.module.css";
import { Link } from "react-router";
import { UpdateCommentForm } from "./UpdateComment/UpdateCommentForm";
import { useDeleteCommentMutation } from "../api/queries";

type TCommentsItemProps = IComment & {
  currentUserId?: number;
};

export const CommentsItem: FC<TCommentsItemProps> = ({
  id,
  user,
  body,
  likes,
  currentUserId,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [deleteComment, { isLoading: isDeleting }] = useDeleteCommentMutation();

  const handleToggleEdit = () => setIsEditing(!isEditing);
  const handleDelete = () => deleteComment(id);

  const isAuthor = currentUserId === user.id;

  return (
    <div className={styles.comment}>
      <Link to={`/users/${user.id}`} className={styles.header}>
        <div>
          <p className={styles.commentFullName}>{user.fullName}</p>
          <p className={styles.commentUsername}>@{user.username}</p>
        </div>
      </Link>
      {isEditing ? (
        <UpdateCommentForm
          commentId={id}
          defaultBody={body}
          onClose={handleToggleEdit}
        />
      ) : (
        <p className={styles.commentBody}>{body}</p>
      )}
      <div className={styles.commentFooter}>
        <span className={styles.commentLikes}>♥ {likes}</span>
        {isAuthor && (
          <>
            <button onClick={handleToggleEdit}>
              {isEditing ? "Cancel" : "Edit"}
            </button>
            <button onClick={handleDelete} disabled={isDeleting}>
              {isDeleting ? "..." : "Delete"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};
