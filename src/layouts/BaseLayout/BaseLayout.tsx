import { Outlet } from "react-router";
import { Header } from "@components/Header";
import styles from "./BaseLayout.module.css";
import { Suspense } from "react";
export const BaseLayout = () => {
  return (
    <div className={styles.baseLayout}>
      <Header />
      <Suspense fallback={<div>Загрузка страницы...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
