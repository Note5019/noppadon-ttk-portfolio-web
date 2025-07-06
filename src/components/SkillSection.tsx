import { Skill } from "../types";
import SkillCard from "./SkillCard";

export default function SkillSection() {
  const programmimgSkills: Skill[] = [
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
      path: "../images/skills/python.png",
      alt: "Python",
      link: "https://www.python.org/",
    },
  ];
  const databaseSkills: Skill[] = [
    {
      path: "../images/skills/mysql.png",
      alt: "Mysql",
      link: "https://www.mysql.com/",
    },
    {
      path: "../images/skills/postgresql.png",
      alt: "Postgresql",
      link: "https://www.postgresql.org/",
    },
    {
      path: "../images/skills/mssql.png",
      alt: "Microsoft sql server",
      link: "https://learn.microsoft.com/en-us/sql/?view=sql-server-ver16",
    },
    {
      path: "../images/skills/redis.png",
      alt: "Redis",
      link: "https://redis.io/",
    },
  ];
  const devOpsSkills: Skill[] = [
    {
      path: "../images/skills/aws-icon.webp",
      alt: "Amazon Web Services",
      link: "https://aws.amazon.com/about-aws",
    },
    {
      path: "../images/skills/azure.png",
      alt: "Azure Services",
      link: "https://azure.microsoft.com/en-us/",
    },
    {
      path: "../images/skills/forge-laravel.png",
      alt: "Forge, server management",
      link: "https://forge.laravel.com/",
    },
    {
      path: "../images/skills/docker.png",
      alt: "Docker, container application development",
      link: "https://www.docker.com/",
    },
    {
      path: "../images/skills/kubernetes.png",
      alt: "Kubernetes",
      link: "https://kubernetes.io/",
    },
    {
      path: "../images/skills/kafka.png",
      alt: "Kafka",
      link: "https://kafka.apache.org/",
    },
  ];
  const otherSkills: Skill[] = [
    {
      path: "../images/skills/postman.webp",
      alt: "Postman, api client",
      link: "https://www.postman.com/",
    },
    {
      path: "../images/skills/bruno.png",
      alt: "Bruno, api client",
      link: "https://www.usebruno.com/",
    },
    {
      path: "../images/skills/git.png",
      alt: "Git, version control",
      link: "https://git-scm.com/",
    },
    {
      path: "../images/skills/shell-script.png",
      alt: "Shell scripting",
      link: "https://www.shellscript.sh/",
    },
  ];
  return (
    <section className="hero-section flex flex-col items-center justify-center gap-y-6 py-6">
      <div className="mb-6 text-5xl font-extrabold italic md:text-6xl">
        Skills
      </div>

      <div className="text-lg font-extrabold italic md:text-4xl">
        Programming
      </div>
      <div className="flex max-w-2xl flex-wrap items-center justify-center gap-6">
        {programmimgSkills.map((skill, index) => {
          return (
            <SkillCard
              key={index}
              path={skill.path}
              alt={skill.alt}
              link={skill.link}
            />
          );
        })}
      </div>

      <div className="text-lg font-extrabold italic md:text-4xl">Databases</div>
      <div className="flex max-w-2xl flex-wrap items-center justify-center gap-6">
        {databaseSkills.map((skill, index) => {
          return (
            <SkillCard
              key={index}
              path={skill.path}
              alt={skill.alt}
              link={skill.link}
            />
          );
        })}
      </div>

      <div className="text-lg font-extrabold italic md:text-4xl">
        Cloud & DevOps
      </div>
      <div className="flex max-w-2xl flex-wrap items-center justify-center gap-6">
        {devOpsSkills.map((skill, index) => {
          return (
            <SkillCard
              key={index}
              path={skill.path}
              alt={skill.alt}
              link={skill.link}
            />
          );
        })}
      </div>

      <div className="text-lg font-extrabold italic md:text-4xl">Others</div>
      <div className="flex max-w-2xl flex-wrap items-center justify-center gap-6">
        {otherSkills.map((skill, index) => {
          return (
            <SkillCard
              key={index}
              path={skill.path}
              alt={skill.alt}
              link={skill.link}
            />
          );
        })}
      </div>
    </section>
  );
}
