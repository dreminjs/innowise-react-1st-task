import { TagsList } from "@modules/Tags";
import { useSearch } from "../../../model/hooks/useSearch";
import styles from "./Search.module.css";

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
      <TagsList choosedTags={tagQuery} onTagClick={handleSetTag} />
    </div>
  );
};
