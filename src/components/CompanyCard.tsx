import { Company } from "../types";

export default function CompanyCard({ link, path, alt }: Company) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex h-30 w-30 items-center rounded-xl border border-gray-100 bg-white p-3"
    >
      <img src={path} alt={alt} className="w-full rounded-lg" />
    </a>
  );
}
