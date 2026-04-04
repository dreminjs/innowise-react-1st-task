import { FC } from "react";
import { ITag, TSlug } from "../model/tags.interface";
import styles from "./Tags.module.css";
import clsx from "clsx";
type TTagsItemProps = ITag & {
  onClick: (tag: TSlug) => void;
  choosed: boolean;
};

export const TagsItem: FC<TTagsItemProps> = ({
  name,
  slug,
  onClick,
  choosed,
}) => {
  const handleClick = () => {
    onClick(slug);
  };

  return (
    <li
      className={clsx(styles.tagListItem, choosed && styles.tagListItemActive)}
    >
      <button type="button" onClick={handleClick}>
        <span>{name}</span>
      </button>
    </li>
  );
};
