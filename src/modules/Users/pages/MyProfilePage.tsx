import { UserCard } from "../ui/UserCard/UserCard";
import { UserPosts, ConfirmDeletionModal } from "@modules/Posts";
import { CreatePostLink } from "../ui/MyProfilePage/CreatePostLink";
import { useGetMeQuery } from "../api/queries";

export default () => {
  const { data: currentUser } = useGetMeQuery();

  if (!currentUser) return <div>Вас не существует :(</div>;

  return (
    <div>
      <UserCard {...currentUser} id={currentUser?.id} />
      <CreatePostLink />
      <UserPosts userId={currentUser?.id} />
      <ConfirmDeletionModal />
    </div>
  );
};
