import { Skill } from "../types";
import SkillCard from "./SkillCard";

export default function SkillSection() {
  const skills: Skill[] = [
    {
      path: "../images/skills/laravel.png",
      alt: "Laravel",
      link: "https://laravel.com/",
    },
    {
      path: "../images/skills/php-icon.png",
      alt: "PHP",
      link: "https://www.php.net/",
    },
    {
      path: "../images/skills/mysql.png",
      alt: "Mysql",
      link: "https://www.mysql.com/",
    },
    {
      path: "../images/skills/html.png",
      alt: "HTML",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      path: "../images/skills/css.png",
      alt: "Css",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      path: "../images/skills/tailwind.png",
      alt: "Tailwind",
      link: "https://tailwindcss.com/",
    },
    {
      path: "../images/skills/typescript.png",
      alt: "Typescript",
      link: "https://www.typescriptlang.org/",
    },
    {
      path: "../images/skills/vue.png",
      alt: "Vue",
      link: "https://vuejs.org/",
    },
    {
      path: "../images/skills/nuxt.svg",
      alt: "Nuxt",
      link: "https://nuxt.com/",
    },
    {
      path: "../images/skills/aws-icon.webp",
      alt: "Amazon Web Services",
      link: "https://aws.amazon.com/about-aws",
    },
    {
      path: "../images/skills/azure.png",
      alt: "Azure",
      link: "https://azure.microsoft.com/en-us/",
    },
    {
      path: "../images/skills/forge-laravel.png",
      alt: "Forge, server management.",
      link: "https://forge.laravel.com/",
    },
    {
      path: "../images/skills/docker.png",
      alt: "Docker, container application development.",
      link: "https://www.docker.com/",
    },
    {
      path: "../images/skills/postman.webp",
      alt: "Postman, api client.",
      link: "https://www.postman.com/",
    },
    {
      path: "../images/skills/bruno.png",
      alt: "Bruno, api client.",
      link: "https://www.usebruno.com/",
    },
    {
      path: "../images/skills/git.png",
      alt: "Git, version control.",
      link: "https://git-scm.com/",
    },
  ];
  return (
    <section className="hero-section flex flex-col items-center justify-center py-6">
      <div className="mb-6 text-5xl font-extrabold italic md:text-6xl">
        Skills
      </div>

      <div className="flex max-w-2xl flex-wrap items-center justify-center gap-6">
        {skills.map((skill) => {
          return (
            <SkillCard path={skill.path} alt={skill.alt} link={skill.link} />
          );
        })}
      </div>
    </section>
  );
}
