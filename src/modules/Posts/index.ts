export {
  postsSlice,
  setSearchQuery,
  setTag,
  setPostIdToDelete,
} from "./model/postsSlice";
export {
  useGetPostsQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useEditPostByIdMutation,
  postsApi,
  useGetPostsByUserIdQuery,
} from "./api/queries";
export { UserPosts } from "./ui/UsersPost";
export { ConfirmDeletionModal } from "./ui/ConfirmDeletion/ConfirmDeletionModal";
