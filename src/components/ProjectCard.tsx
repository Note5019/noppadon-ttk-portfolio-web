import { Project } from "../types";
import { Card } from "flowbite-react";
import { Popover } from "flowbite-react";
import ExternalLink from "../assets/icons/ExternalLink.svg";
import { Link } from "react-router";

export default function ProjectCard({
  name,
  link,
  linkText,
  path,
  alt,
  description,
}: Project) {
  const content = link && (
    <Link
      to={link}
      target="_blank"
      className="flex items-center justify-center gap-2 px-3 py-2"
    >
      <div>{linkText}</div>
      <img src={ExternalLink} alt="ExternalLink" className="h-4 w-4" />
    </Link>
  );
  return (
    <>
      <Popover content={link && content} trigger="hover">
        <div className="flex w-full flex-col md:w-1/4">
          <Card
            className="max-w-lg"
            renderImage={() => <img className="" src={path} alt={alt} />}
          >
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <p className="line-clamp-3 text-sm font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
          </Card>
        </div>
      </Popover>
    </>
  );
}
