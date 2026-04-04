import { Overlay } from "@shared/index";
import styles from "./ConfirmDeletionModal.module.css";
import { useDeletePost } from "@modules/Posts/model/hooks/useDeletePost";

export const ConfirmDeletionModal = () => {
  const { postIdToDelete, handleDelete, isLoading, handleClose } =
    useDeletePost();
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
