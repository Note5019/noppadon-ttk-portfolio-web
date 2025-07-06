export default function getTitle(title: string): string {
  const suffix = import.meta.env.VITE_SUFFIX_TITLE || "";
  return title ? `${title} | ${suffix}` : suffix;
}
