import { FC } from "react";
import { useGetTagsQuery } from "../api/queries";
import { ITag } from "../model/tags.interface";
import styles from "./Tags.module.css";
import { TagsItem } from "./TagsItem";

interface IProps {
  onTagClick: (tag: string) => void;
  choosedTags: string | string[];
}

export const TagsList: FC<IProps> = ({ onTagClick, choosedTags }) => {
  const { data, isLoading } = useGetTagsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div>Ничего не найдено.</div>;
  }

  const isChoosed = (slug: string) =>
    Array.isArray(choosedTags)
      ? choosedTags.includes(slug)
      : choosedTags === slug;

  return (
    <ul className={styles.tagsList}>
      {data.map((tag: ITag) => (
        <TagsItem
          choosed={isChoosed(tag.slug)}
          onClick={onTagClick}
          key={tag.slug}
          {...tag}
        />
      ))}
    </ul>
  );
};
