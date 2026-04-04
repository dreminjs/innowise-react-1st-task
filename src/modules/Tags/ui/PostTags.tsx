import styles from "./Tags.module.css";

export const PostTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className={styles.postTagList}>
      {tags.map((tag) => (
        <span key={tag} className={styles.postTag}>
          #{tag}
        </span>
      ))}
    </div>
  );
};
