import Github from "../assets/icons/Github.svg";
import Linkedin from "../assets/icons/Linkedin.svg";
import Mail from "../assets/icons/Mail.svg";
import { Popover } from "flowbite-react";

export default function HeroSectionV2() {
  return (
    <section className="container flex flex-col items-start justify-between gap-5 overflow-hidden py-6 sm:h-[60svh] sm:flex-row sm:items-center md:gap-10">
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-6">
          <p className="text-5xl font-extrabold md:text-7xl">Noppadon</p>
          <p className="text-5xl font-extrabold md:text-7xl">Tongtrakoon</p>
          <p className="text-2xl font-bold md:text-4xl">
            as{" "}
            <span className="text-[#87af9f] italic">
              Full Stack Developer
            </span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="md:text-md text-sm font-normal">Contact me:</div>
          <Popover
            trigger="hover"
            aria-labelledby="mail-popover"
            content={
              <div className="text-gray-500 dark:text-gray-400">
                <a
                  href="mailto:noppadon.ttk@gmail.com"
                  className="flex cursor-pointer items-center gap-1 px-3 py-2 text-nowrap hover:underline"
                >
                  noppadon.ttk@gmail.com
                </a>
              </div>
            }
          >
            <a
              href="mailto:noppadon.ttk@gmail.com"
              className="flex cursor-pointer"
            >
              <img src={Mail} alt="Mail" className="h-8 w-8" />
            </a>
          </Popover>

          <Popover
            trigger="hover"
            aria-labelledby="github-popover"
            content={
              <div className="text-gray-500 dark:text-gray-400">
                <a
                  href="https://github.com/Note5019"
                  className="flex cursor-pointer items-center gap-1 px-3 py-2 text-nowrap hover:underline"
                >
                  Note5019
                </a>
              </div>
            }
          >
            <a
              href="https://github.com/Note5019"
              className="flex cursor-pointer"
            >
              <img src={Github} alt="Github" className="h-8 w-8" />
            </a>
          </Popover>

          <Popover
            trigger="hover"
            aria-labelledby="linkedin-popover"
            content={
              <div className="text-gray-500 dark:text-gray-400">
                <a
                  href="https://www.linkedin.com/in/noppadon-ttk"
                  className="flex cursor-pointer items-center gap-1 px-3 py-2 text-nowrap hover:underline"
                >
                  noppadon-ttk
                </a>
              </div>
            }
          >
            <a
              href="https://www.linkedin.com/in/noppadon-ttk"
              className="flex cursor-pointer"
            >
              <img src={Linkedin} alt="Linkedin" className="h-8 w-8" />
            </a>
          </Popover>
        </div>
      </div>
      <div className="flex w-full justify-center lg:mr-20 lg:justify-end">
        <img
          className="w-64 max-w-[400px] rounded-full shadow-2xl shadow-green-200 md:w-[30svw]"
          src="../images/profile.jpeg"
        />
      </div>
    </section>
  );
}
