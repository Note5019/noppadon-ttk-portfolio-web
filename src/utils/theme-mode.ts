export function setThemeMode() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
}

export function getThemeMode() {
  return localStorage.theme || "light";
}

export default {
  setThemeMode,
  getThemeMode,
};
