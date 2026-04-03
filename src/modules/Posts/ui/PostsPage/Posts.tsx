import { PostsList } from "./PostsList";
import { Search } from "./Search/Search";
import { useGetPosts } from "../../model/useGetPosts";
import { Pagination } from "@components/Pagination/";

export const Posts = () => {
  const { data, total, skip, limit, onChangePage, isError, isLoading } =
    useGetPosts();

  return (
    <div>
      <Search />
      <PostsList
        isError={isError}
        isLoading={isLoading}
        data={data?.posts || []}
      />
      <Pagination
        totalPages={total || 0}
        currentPage={skip / limit}
        onPageChange={onChangePage}
      />
    </div>
  );
};
