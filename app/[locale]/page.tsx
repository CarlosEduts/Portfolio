import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import styles from "./page.module.css";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
