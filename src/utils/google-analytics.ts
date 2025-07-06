import ReactGA from "react-ga4";

interface GASendPayload {
  hitType: string; // e.g., "pageview"
  page?: string; // The page path for pageview hits
  title?: string; // The title of the page for pageview hits
  // [key: string]: any; // Allow additional properties
}

export function send(payload: GASendPayload) {
  const GA_ID = import.meta.env.VITE_GA_ID;
  if (GA_ID) {
    ReactGA.initialize(GA_ID);
    ReactGA.send(payload);
  } else {
    console.warn("Google Analytics ID is not set.");
  }
}

export default {
  send,
};