import { FC } from "react";
import { useGetTagsQuery } from "../api/queries";
import { ITag } from "../model/tags.interface";
import styles from "./Tags.module.css";
import { TagsItem } from "./TagsItem";

interface IProps {
  onTagClick: (tag: string) => void;
  choosedTag: string;
}

export const TagsList: FC<IProps> = ({ onTagClick, choosedTag }) => {
  const { data, isLoading } = useGetTagsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div>Ничего не найдено.</div>;
  }

  return (
    <ul className={styles.tagsList}>
      {data.map((tag: ITag) => (
        <TagsItem
          choosed={tag.slug === choosedTag}
          onClick={onTagClick}
          key={tag.slug}
          {...tag}
        />
      ))}
    </ul>
  );
};
