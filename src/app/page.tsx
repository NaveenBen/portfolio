import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaX,
  FaXTwitter,
} from "react-icons/fa6";

export default function Home() {
  return (
    <main className="w-full h-full">
      <SparklesCore
        background="bg-gradient-to-b from-neutral-200 to-neutral-500"
        maxSize={1}
        minSize={0.1}
        particleColor="#22d3ee"
        particleDensity={100}
        particleSize={1}
        speed={1}
        className="w-full h-full absolute top-0 left-0 z-0"
      />
      <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md ">
        <h1 className="md:text-4xl text-2xl lg:text-7xl font-bold text-center text-slate-400 relative z-20">
          Hi there, I&apos;m <span className="text-slate-200">Naveen Ben</span>! 👋
        </h1>
        <div className="w-[40rem] h-40 relative ">
          <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-4/5 blur-sm" />
          <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-4/5" />
          <div className="absolute inset-x-80 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-80 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-2/4" />
        </div>
        <div className="contact flex flex-row space-x-3 absolute items-center align-middle text-xl ">
          <div className="flex flex-row space-x-2 items-center align-middle">
            <FaXTwitter />
            <Link
              href="https://twitter.com/0xb3nr00t"
              target="_blank"
              rel="noopener noreferrer"
            >
              x.com/0xb3nr00t
            </Link>
          </div>
          <div className="flex flex-row space-x-2 items-center align-middle">
            <FaGithub />
            <Link
              href="https://www.github.com/naveenben"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/naveenben
            </Link>
          </div>
          <div className="flex flex-row space-x-2 items-center align-middle">
            <FaLinkedinIn />
            <Link
              href="https://www.linkedin.com/in/naveen-ben/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/naveen-ben
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
