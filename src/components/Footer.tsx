// import Phone from "../assets/icons/Phone.svg";
import { ReactSVG } from "react-svg";

export default function Footer() {
  return (
    <footer className="container">
      <div className="-mx-4 my-6 h-[3px] rounded-lg bg-green-300 dark:bg-green-500"></div>
      <div className="mt-6 flex flex-wrap justify-between gap-10 pb-6 md:flex-nowrap">
        <div className="flex flex-wrap justify-start gap-10 md:flex-nowrap md:justify-around md:gap-15">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Contact</h2>
            {/* <div className="flex items-center gap-4">
              <img src={Phone} alt="Phone" className="h-8 w-8" />
              <a href="tel:+66942519347">094-251-9437</a>
            </div> */}
            <a
              className="flex items-center gap-4 hover:underline"
              href="mailto:noppadon.ttk@gmail.com"
            >
              <ReactSVG className="h-8 w-8" src={"./icons/Mail.svg"} />
              noppadon.ttk@gmail.com
            </a>
            <div className="flex items-center gap-4">
              <ReactSVG className="h-8 w-8" src={"./icons/MapPin.svg"} />
              <p>Bangkok, Thailand</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Social</h2>
            <a
              className="flex items-center gap-4"
              href="https://www.linkedin.com/in/noppadon-ttk"
              target="_blank"
            >
              <ReactSVG className="h-8 w-8" src={"./icons/Linkedin.svg"} />
              <div className="flex items-center gap-1 hover:underline">
                noppadon-ttk
                <ReactSVG
                  className="h-4 w-4"
                  src={"./icons/ExternalLink.svg"}
                />
              </div>
            </a>
            <a
              className="flex items-center gap-4"
              href="https://github.com/Note5019"
              target="_blank"
            >
              <ReactSVG className="h-8 w-8" src={"./icons/Github.svg"} />
              <div className="flex items-center gap-1 hover:underline">
                Note5019
                <ReactSVG
                  className="h-4 w-4"
                  src={"./icons/ExternalLink.svg"}
                />
              </div>
            </a>
          </div>
        </div>

        <div className="flex grow flex-col items-center justify-center text-sm text-gray-500 md:grow-0">
          <span>&copy; 2025 Noppadon Tongtrakoon</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
