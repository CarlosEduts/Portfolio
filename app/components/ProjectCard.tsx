import Image from "next/image";
import { IconPlayerPlay, IconBrandGithub } from "@tabler/icons-react";

type Props = {
  imageSrc: string;
  title: string;
  subtitle: string;
  deployUrl: string;
};

export default function ProjectCard({
  imageSrc,
  title,
  subtitle,
  deployUrl,
}: Props) {
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
        <a href={deployUrl} target="_blank">
          <IconBrandGithub stroke={2} />
        </a>
        <a href={deployUrl} target="_blank">
          <IconPlayerPlay stroke={2} />
        </a>
      </div>
    </div>
  );
}
