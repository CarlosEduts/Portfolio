import './globals.css'
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="page404">
      <div className="content">
        <h1>404</h1>
        <h2><strong>{t("h2")}</strong></h2>
        <p>
        {t("p")} <Link href="/">{t("link")}</Link>
        </p>
      </div>
    </div>
  );
}
