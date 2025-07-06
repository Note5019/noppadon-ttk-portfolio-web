import { Link } from "react-router";
import GA from "../utils/google-analytics";
import { useEffect } from "react";
import getTitle from "../utils/get-title";

export default function NotFound() {
    const pageTitle = getTitle("Not found");
    const a = {
      hitType: "pageview",
      page: window.location.pathname,
      title: pageTitle,
    };
  
    useEffect(() => {
      document.title = pageTitle;
  
      GA.send(a);
    }, []);
  return (
    <div className="flex max-w-fit items-center justify-center rounded-md border border-gray-200 bg-white px-10 py-10 dark:border-gray-700">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-4xl">Page Not Found</div>
        <span>🥲</span>
        <Link
          to="/"
          className="rounded-md border border-gray-200 p-4 hover:bg-gray-100 dark:border-gray-700"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
