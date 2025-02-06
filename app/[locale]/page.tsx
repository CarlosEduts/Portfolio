import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import ButtonTheme from "../components/ButtonTheme";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div>
      <header className="header-actions">
        <div>
          <div className="page-actions-box">
            <ButtonTheme />

            <div className="language-toggle">
              <Link href="pt" rel="prefetch">
                pt
              </Link>
              |
              <Link href="en" rel="prefetch">
                en
              </Link>
            </div>
          </div>

          <div className="contact-box">
            <a
              href="https://github.com/CarlosEduts"
              title="GitHub"
              target="_blank"
            >
              <IconBrandGithub stroke={2} className="header-icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/carlos-eduardo-464206336"
              target="_blank"
              title="LinkedIn"
            >
              <IconBrandLinkedin stroke={2} className="header-icon" />
            </a>

            <a
              href="https://www.instagram.com/carloseduti"
              title="Instagram"
              target="_blank"
            >
              <IconBrandInstagram stroke={2} className="header-icon" />
            </a>
          </div>
        </div>
      </header>

      <div className="container">
        <header>
          <Image
            src="/profile_img.jpg"
            width={400}
            height={400}
            alt="Profile dev image"
            className="profile-img"
          />
          <div>
            <h1>{t("container.header.h1")}</h1>
            <p>{t("container.header.p")}</p>
          </div>
        </header>

        <section className="about-me">
          <div className="about-me-box">
            <h2>{t("container.about-me.h2")}</h2>
            <p>{t("container.about-me.p")}</p>
          </div>
        </section>

        <section className="skills">
          <div>
            <h2>{t("container.skills.h2")}</h2>
            <p>{t("container.skills.p")}</p>
          </div>
        </section>

        <section className="more-about-me">
          <div>
            <h2>{t("container.more-about-me.h2")}</h2>
            <p>
              {t("container.more-about-me.p-start")}
              <a href="/doc/cv.html" target="_blank">
                {t("container.more-about-me.a-cv")}
              </a>
              {t("container.more-about-me.p-end")}
              <a
                href="https://www.linkedin.com/in/carlos-eduardo-464206336"
                target="_blank"
              >
                <IconBrandLinkedin stroke={2} className="more-about-me-icon" />
                LinkedIn
              </a>
              .
            </p>
          </div>
        </section>

        <section className="projects">
          <h2>{t("container.projects.h2")}</h2>

          <ProjectCard
            imageSrc="/projects/linkioo.png"
            title={t("container.projects.linkioo.title")}
            subtitle={t("container.projects.linkioo.subtitle")}
            descriptio={t("container.projects.linkioo.description")}
            deployUrl="https://www.lkoo.xyz/"
            codeUrl="https://github.com/CarlosEduts/linkioo"
          />

          <ProjectCard
            imageSrc="/projects/devkiit.png"
            title={t("container.projects.devkiit.title")}
            subtitle={t("container.projects.devkiit.subtitle")}
            descriptio={t("container.projects.devkiit.description")}
            deployUrl="https://devkiit.vercel.app/"
            codeUrl="https://github.com/CarlosEduts/dev-kiit"
          />

          <ProjectCard
            imageSrc="/projects/zen-homepage.png"
            title={t("container.projects.zen-homepage.title")}
            subtitle={t("container.projects.zen-homepage.subtitle")}
            descriptio={t("container.projects.zen-homepage.description")}
            deployUrl="https://zen-homepage.vercel.app/"
            codeUrl="https://github.com/CarlosEduts/zen-homepage"
          />
        </section>

        <footer>
          <p>&copy; 2025 - {t("container.footer")}</p>
        </footer>
      </div>
    </div>
  );
}
