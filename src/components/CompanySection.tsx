import { Company } from "../types";
import CompanyCard from "./CompanyCard";

export default function CompaynySection() {
  const companies: Company[] = [
    {
      path: "../images/companies/wawa-x.jpg",
      alt: "Wawa-x - Digital transformation consultancy",
      link: "https://www.wawa-x.com/",
    },
    {
      path: "../images/companies/mywawa.png",
      alt: "Mywawa - Ecommerce platform",
      link: "https://www.mywawa.me/",
    },
    {
      path: "../images/companies/boda.svg",
      alt: "BODA - Technology & Consultancy",
      link: "https://bo-da.co/",
    },
    {
      path: "../images/companies/netcube.png",
      alt: "Netcube - Business Application Development",
      link: "https://www.netcube.co.th/th",
    },
  ];
  return (
    <section className="hero-section flex flex-col items-center justify-center py-6">
      <div className="mb-6 text-5xl font-extrabold italic md:text-6xl">
        Worked with
      </div>

      <div className="flex max-w-2xl flex-wrap items-center justify-center gap-6">
        {companies.map((company) => {
          return (
            <CompanyCard
              path={company.path}
              alt={company.alt}
              link={company.link}
            />
          );
        })}
      </div>
    </section>
  );
}
