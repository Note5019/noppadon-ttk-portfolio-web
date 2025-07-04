import Github from "../assets/icons/Github.svg";
import Linkedin from "../assets/icons/Linkedin.svg";
import Mail from "../assets/icons/Mail.svg";
import { Popover } from "flowbite-react";

export default function HeroSection() {
  return (
    <section className="container hero-section grid grid-cols-2 gap-6 overflow-hidden py-6 md:gap-10">
      <div className="col-span-2 flex flex-col justify-end gap-5 md:gap-10 lg:col-span-1">
        <span className="text-4xl font-extrabold italic md:text-6xl lg:text-8xl">
          Full stack / Backend Developer
        </span>
        <div className="text-xl font-bold md:text-2xl lg:text-3xl">
          Hello, World!
        </div>
        <div className="text-xs md:text-base">
          Software Engineer with 1 year of experience in full-stack development{" "}
          <br />
          using Vue3, Nuxt, Tailwind, and PHP Laravel framework, <br />
          4 years of experience in backend development, <br />
          IoT-data management using PHP Laravel on AWS Cloud services <br />
          and Kubernetes and deploying project to Cloud service <br />
          like Laravel Forge, AWS, Azure services. - Learn more
        </div>
      </div>
      <div className="order-last col-span-2 flex max-w-9/10 flex-col items-stretch justify-self-center rounded-xl bg-yellow-200 transition delay-150 duration-300 ease-in-out hover:rotate-2 lg:order-none lg:col-span-1">
        <div className="flex justify-center p-6">
          <img src="/images/profile.jpeg" className="rounded-lg opacity-10" />
          <div className="aspect-square h-[400px] w-[400px] self-center rounded-lg bg-green-700"></div>
        </div>

        <div className="flex flex-col self-end pr-6">
          <div className="text-right text-4xl font-extrabold tracking-wide italic md:text-5xl lg:text-6xl">
            Noppadon
          </div>
          <div className="text-right text-4xl font-extrabold tracking-wide italic md:text-5xl lg:text-6xl">
            Tongtrakoon
          </div>
        </div>
      </div>
      <div className="col-span-2 flex items-center gap-4 lg:col-span-1">
        <div className="font-normal">Contact :</div>
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
          <a href="https://github.com/Note5019" className="flex cursor-pointer">
            <img src={Github} alt="Github" className="h-8 w-8" />
          </a>
        </Popover>
      </div>
    </section>
  );
}
