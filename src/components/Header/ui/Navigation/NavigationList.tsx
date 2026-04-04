import { useGetMeQuery } from "@modules/Users";
import { NavigationItem } from "./NavigationItem";
import { LogoutButton } from "./LogoutButton";
import styles from "./Navigation.module.css";

export const NavigationList = () => {
  const { data, isLoading } = useGetMeQuery();

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <nav>
      <ul className={styles.navigationList}>
        {data ? (
          <>
            <NavigationItem to={"/profile"} content={"Profile"} />
            <LogoutButton />
          </>
        ) : (
          <NavigationItem to="/login" content="Login" />
        )}
      </ul>
    </nav>
  );
};
