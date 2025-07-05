import ProjectCard from "../components/ProjectCard";
import { Project } from "../types";

export default function ProjectPage() {
  const projects: Project[] = [
    {
      name: "TCRSS Website",
      link: "https://www.tcrss.com",
      linkText: "Visit TCRSS site",
      path: "../images/projects/tcrss-landing-1.png",
      alt: "Langing page for TCRSS",
      description: "Informative website for TCRSS.",
    },
    {
      name: "TCRSS Admin Information Management",
      link: "https://admin.tcrss.com",
      linkText: "Visit TCRSS Admin site",
      path: "../images/projects/tcrss-admin-news.png",
      alt: "TCRSS Admin Information Management",
      description:
        "Web application for TCRSS admin to manage information in the TCRSS website.",
    },
    {
      name: "Thaikk Ecommerce Website",
      link: "https://www.thaikk-shop.com",
      linkText: "Visit Thaikk Ecommerce Website",
      path: "../images/projects/thaikk-1.png",
      alt: "Thaikk Ecommerce Website",
      description:
        "Ecommerce website for Thaikk to sell products online, invioce, and manage orders.",
    },
    {
      name: "Thaikk Ecommerce Admin Management Website",
      link: "https://admin.thaikk-shop.com",
      linkText: "Visit Thaikk Ecommerce Admin Management Website",
      path: "../images/projects/thaikk-admin-1.png",
      alt: "TCRSS",
      description:
        "Ecommerce admin management website for Thaikk to manage products, orders, customers and more.",
    },
    {
      name: "Wawa Province Landing Page",
      link: "https://www.mywawa.me/wawaprovince",
      linkText: "Visit Wawa Province Landing Page",
      path: "../images/projects/wawaprovince-1.png",
      alt: "Wawa Province Landing Page",
      description: "A Page for promoting Wawa Province campaign for Wawa.",
    },
    {
      name: "Wawa-X Website",
      link: "https://www.wawa-x.com",
      linkText: "Visit Wawa-X Website",
      path: "../images/projects/wawax-1.png",
      alt: "Wawa-X Website",
      description:
        "Website for Wawa-X, a company that provides services and business solution to customers.",
    },
    {
      name: "HR Management Web Application",
      link: null,
      path: "../images/projects/hr-project.png",
      alt: "Hr Management web Application",
      description:
        "Online request, E-document storage, and mange employee leaves and information.",
    },
    {
      name: "Developed & Maintained APIs",
      link: null,
      path: "../images/projects/enres-1.png",
      alt: "Developed & Maintained APIs",
      description:
        "Developed and maintained APIs and handled data from IoT hardwares via MQTT protocols and Aws IoT core and more",
    },
  ];
  return (
    <section className="container flex flex-col items-center justify-center py-6">
      <div className="pb-6 text-5xl font-extrabold italic md:text-6xl">
        Projects
      </div>

      <div className="flex w-full flex-wrap items-start justify-center gap-6">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              path={project.path}
              alt={project.alt}
              link={project.link}
              linkText={project.linkText}
              name={project.name}
              description={project.description}
            />
          );
        })}
      </div>
    </section>
  );
}
