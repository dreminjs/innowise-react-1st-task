import { FC } from "react";
import styles from "./Overlay.module.css";

interface IOverlayProps {
  onClick?: () => void;
}

export const Overlay: FC<IOverlayProps> = ({ onClick }) => {
  console.log(styles);
  return <div className={styles.overlay} onClick={onClick} />;
};
