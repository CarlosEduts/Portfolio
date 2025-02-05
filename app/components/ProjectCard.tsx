"use client";
import Image from "next/image";
import { IconPlayerPlay, IconBrandGithub } from "@tabler/icons-react";
import { useState } from "react";

type Props = {
  imageSrc: string;
  title: string;
  subtitle: string;
  descriptio: string;
  deployUrl: string;
  codeUrl: string;
};

export default function ProjectCard({
  imageSrc,
  title,
  subtitle,
  descriptio,
  deployUrl,
  codeUrl,
}: Props) {
  const [cssClassName, setCssClassName] = useState("project-drawer-closed");

  const openDrawer = () => {
    setCssClassName("project-drawer");
  };
  const closeDrawer = () => {
    setCssClassName("project-drawer-closed");
  };

  return (
    <div className="project-box">
      <div className="project-text">
        <Image
          src={imageSrc}
          width={150}
          height={150}
          alt={`${title} project image`}
          className="project-img"
        />
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className="project-actions">
        <button onClick={openDrawer}>
          <IconPlayerPlay stroke={2} />
        </button>
      </div>

      {/* Project Drawer */}
      <div className={cssClassName}>
        {/* Ação de fechar a drawer */}
        <div onClick={closeDrawer}></div>
        <div className="project-drawer-content">
          <div className="drawer-mini-bar"></div>
          <div className="drawer-project-text">
            <div>
              <Image
                src={imageSrc}
                width={150}
                height={150}
                alt={`${title} project image`}
                className="drawer-project-img"
              />

              <div>
                <h3>{title}</h3>
                <p>{descriptio}</p>
              </div>
            </div>
          </div>
          <div className="project-actions drawer-project-actions">
            <a href={codeUrl} target="_blank">
              <IconBrandGithub stroke={2} /> GitHub
            </a>
            <a href={deployUrl} target="_blank">
              <IconPlayerPlay stroke={2} /> Deploy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
