import { useSearch } from "../../../model/hooks/useSearch";
import styles from "./Search.module.css";
import { lazy, Suspense } from "react";
const TagsList = lazy(() =>
  import("@modules/Tags/ui/TagsList").then((module) => ({
    default: module.TagsList,
  })),
);
export const Search = () => {
  const { searchQuery, tagQuery, handleSearch, handleSetTag } = useSearch();

  return (
    <div>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <Suspense fallback={<div>Загрузка...</div>}>
        <TagsList choosedTags={tagQuery} onTagClick={handleSetTag} />
      </Suspense>
    </div>
  );
};
