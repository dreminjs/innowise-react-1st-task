import { PostsList } from "./PostsList";
import { Search } from "./Search/Search";
import { useGetPosts } from "../../model/hooks/useGetPosts";
import { Pagination } from "@components/Pagination/";
import styles from "./Posts.module.css";

export const Posts = () => {
  const { data, total, skip, limit, onChangePage, isError, isLoading } =
    useGetPosts();

  return (
    <div>
      <Search onChangePage={onChangePage} />
      <main className={styles.mainContent}>
        <PostsList
          isError={isError}
          isLoading={isLoading}
          data={data?.posts || []}
        />
      </main>
      <Pagination
        totalPages={total ? Math.ceil(total / limit) - 1 : 0}
        currentPage={skip === 0 ? 1 : skip / limit}
        onPageChange={onChangePage}
      />
    </div>
  );
};
