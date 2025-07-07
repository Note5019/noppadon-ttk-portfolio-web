import { Popover } from "flowbite-react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router";

export default function HeroSectionV2() {
  return (
    <section className="container flex flex-col items-start justify-between gap-5 overflow-hidden py-6 sm:h-[60svh] sm:flex-row sm:items-center md:gap-10">
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-6">
          <p className="text-5xl font-extrabold md:text-7xl">Noppadon</p>
          <p className="text-5xl font-extrabold md:text-7xl">Tongtrakoon</p>
          <p className="text-2xl font-bold md:text-4xl">
            as{" "}
            <span className="text-green-400 italic">Full Stack Developer</span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-lg font-normal">Contact me:</div>
          <Popover
            trigger="hover"
            aria-labelledby="mail-popover"
            content={
              <a
                href="mailto:noppadon.ttk@gmail.com"
                className="flex cursor-pointer items-center gap-1 px-3 py-2 text-nowrap hover:underline"
              >
                noppadon.ttk@gmail.com
              </a>
            }
          >
            <a
              href="mailto:noppadon.ttk@gmail.com"
              className="flex cursor-pointer"
            >
              <ReactSVG className="h-10 w-10" src={"./icons/Mail.svg"} />
            </a>
          </Popover>

          <Popover
            trigger="hover"
            aria-labelledby="github-popover"
            content={
              <a
                href="https://github.com/Note5019"
                className="flex cursor-pointer items-center gap-1 px-3 py-2 text-nowrap hover:underline"
              >
                Note5019
                <ReactSVG
                  className="h-4 w-4"
                  src={"./icons/ExternalLink.svg"}
                />
              </a>
            }
          >
            <a
              href="https://github.com/Note5019"
              className="flex cursor-pointer"
            >
              <ReactSVG className="h-10 w-10" src={"./icons/Github.svg"} />
            </a>
          </Popover>

          <Popover
            trigger="hover"
            aria-labelledby="linkedin-popover"
            content={
              <a
                href="https://www.linkedin.com/in/noppadon-ttk"
                className="flex cursor-pointer items-center gap-1 px-3 py-2 text-nowrap hover:underline"
              >
                noppadon-ttk
                <ReactSVG
                  className="h-4 w-4"
                  src={"./icons/ExternalLink.svg"}
                />
              </a>
            }
          >
            <a
              href="https://www.linkedin.com/in/noppadon-ttk"
              className="flex cursor-pointer"
            >
              <ReactSVG className="h-10 w-10" src={"./icons/Linkedin.svg"} />
            </a>
          </Popover>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/resume/Resume-noppadon.pdf"
            target="_blank"
            className="flex gap-4 items-center hover:underline"
          >
            <ReactSVG className="h-10 w-10" src={"./icons/Download.svg"} />
            My resume
          </Link>
        </div>
      </div>

      <div className="coin h-[16rem] w-full md:h-auto">
        <div className="front">
          <img
            className="side-a w-64 max-w-[400px] rounded-full shadow-2xl shadow-green-200 md:w-[30svw] dark:shadow-green-700/60"
            src="../images/profile.jpeg"
          />
        </div>
        <div className="back">
          <img
            className="side-b w-64 max-w-[400px] rounded-full shadow-2xl shadow-green-200 md:w-[30svw] dark:shadow-green-700/60"
            src="../logo.png"
          />
        </div>
      </div>
    </section>
  );
}
