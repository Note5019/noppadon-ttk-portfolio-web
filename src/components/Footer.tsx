import ExternalLink from "../assets/icons/ExternalLink.svg";
import Github from "../assets/icons/Github.svg";
import Linkedin from "../assets/icons/Linkedin.svg";
import Mail from "../assets/icons/Mail.svg";
import MapPin from "../assets/icons/MapPin.svg";
// import Phone from "../assets/icons/Phone.svg";

export default function Footer() {
  return (
    <footer className="container">
      <div className="-mx-4 h-[2px] bg-green-200 rounded-lg"></div>
      <div className="mt-4 flex flex-wrap justify-between gap-10 md:flex-nowrap">
        <div className="flex flex-wrap justify-start gap-10 md:flex-nowrap md:justify-around md:gap-15">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Contact</h2>
            {/* <div className="flex items-center gap-4">
              <img src={Phone} alt="Phone" className="h-8 w-8" />
              <a href="tel:+66942519347">094-251-9437</a>
            </div> */}
            <a
              className="flex items-center gap-4"
              href="mailto:noppadon.ttk@gmail.com"
            >
              <img src={Mail} alt="Mail Icon" className="h-8 w-8" />
              noppadon.ttk@gmail.com
            </a>
            <div className="flex items-center gap-4">
              <img src={MapPin} alt="Map" className="h-8 w-8" />
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
              <img src={Linkedin} alt="Linkedin" className="h-8 w-8" />
              <div className="flex items-center gap-1 hover:underline">
                noppadon-ttk
                <img
                  src={ExternalLink}
                  alt="ExternalLink"
                  className="h-4 w-4"
                />
              </div>
            </a>
            <a
              className="flex items-center gap-4"
              href="https://github.com/Note5019"
              target="_blank"
            >
              <img src={Github} alt="Github" className="h-8 w-8" />
              <div className="flex items-center gap-1 hover:underline">
                Note5019
                <img
                  src={ExternalLink}
                  alt="ExternalLink"
                  className="h-4 w-4"
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
