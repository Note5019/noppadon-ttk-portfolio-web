import Marquee from "react-fast-marquee";

export default function MarqueeBar() {
  return (
    <div className="relatve mb-6 py-6">
      <div className="md:rotate-0.5 -mt-5 h-[50px] w-full bg-green-200 dark:bg-green-400"></div>
      <div className="-mt-12 flex h-[50px] w-full -rotate-2 items-center justify-center bg-green-400 dark:bg-green-200 text-2xl font-bold">
        <Marquee
          className="text-gray-200 dark:text-gray-200"
          speed={20}
          autoFill={true}
          gradient={false}
          play={true}
          pauseOnHover={true}
        >
          <span className="mx-4 text-gray-200 dark:text-gray-600">Full Stack Developer</span>
          <span className="mx-4 text-gray-600 dark:text-green-400">Let's learn more about me!</span>
        </Marquee>
      </div>
    </div>
  );
}
