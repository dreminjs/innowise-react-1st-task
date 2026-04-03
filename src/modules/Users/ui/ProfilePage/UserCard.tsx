import { IUser } from "@modules/Users/model/users.interface";
import { FC } from "react";
import styles from "./UserProfilePage.module.css";

type TUserCardProps = IUser;

export const UserCard: FC<TUserCardProps> = ({
  firstName,
  lastName,
  username,
  email,
  image,
  gender,
  address,
}) => {
  const genderClass = gender === "male" ? styles.male : styles.female;

  return (
    <div className={styles.userCard}>
      <img
        src={image}
        alt={`${firstName} ${lastName}`}
        className={styles.avatar}
        loading="lazy"
      />

      <div className={styles.userInfo}>
        <h3 className={styles.fullName}>
          {firstName} {lastName}
        </h3>

        <span className={styles.username}>@{username}</span>

        <a href={`mailto:${email}`} className={styles.email}>
          {email}
        </a>
        <span>{address.country}</span>
        <span className={`${styles.badge} ${genderClass}`}>{gender}</span>
      </div>
    </div>
  );
};
