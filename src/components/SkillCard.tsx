import { Skill } from "../types";
export default function SkillCard({ link, path, alt }: Skill) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex h-20 w-20 items-center rounded-xl border border-gray-100 bg-white p-3"
    >
      <img src={path} alt={alt} className="w-full rounded-md" />
    </a>
  );
}
