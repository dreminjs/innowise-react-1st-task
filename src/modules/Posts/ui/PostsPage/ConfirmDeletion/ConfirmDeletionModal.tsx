import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { useDeletePostMutation } from "@modules/Posts/api/queries";
import { setPostIdToDelete } from "@modules/Posts/model/postsSlice";
import { Overlay } from "@shared/index";
import styles from "./ConfirmDeletionModal.module.css";
import { createPortal } from "react-dom";

export const ConfirmDeletionModal = () => {
  const postIdToDelete = useAppSelector((state) => state.posts.postIdToDelete);
  const dispatch = useAppDispatch();
  const [deletePost, { isLoading }] = useDeletePostMutation();

  const handleClose = () => {
    dispatch(setPostIdToDelete(null));
  };

  const handleDelete = async () => {
    if (postIdToDelete) {
      await deletePost(postIdToDelete);
      handleClose();
    }
  };

  if (!postIdToDelete) return null;

  return (
    <>
      <Overlay onClick={handleClose} />
      <div className={styles.modal}>
        <h3 className={styles.title}>Удалить этот пост?</h3>
        <ul className={styles.actions}>
          <li>
            <button
              className={`${styles.btn} ${styles.btnDelete}`}
              onClick={handleDelete}
              disabled={isLoading}
            >
              {isLoading ? "Удаление..." : "Да"}
            </button>
          </li>
          <li>
            <button
              className={`${styles.btn} ${styles.btnCancel}`}
              onClick={handleClose}
            >
              Нет
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
