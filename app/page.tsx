import Image from "next/image";
import Link from "next/link";
import icon from "@/public/icon.png";
import githubIcon from "@/public/github.png";
import xIcon from "@/public/x.png";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen p-10">
      <div className="custom-container relative w-[500px] min-h-[600px] shadow-lg rounded-lg hover:-translate-y-1 transition-all">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-blue-600 rounded-full">
          <Image
            src={icon}
            alt="Scallops"
            height={140}
            width={140}
            className="rounded-full shadow-lg p-1"
          />
        </div>
        <div
          style={{ transform: "translate(0, calc(150px / 2))" }}
          className="p-10 flex flex-col gap-5"
        >
          <div className="flex flex-col gap-3">
            <p className="font-bold text-4xl">Taiga ito</p>
            <p className="font-bold text-blue-600">August 11, 2010</p>
          </div>
          <p className="mt-10 font-black text-2xl mb-6">Links</p>
          <Link
            href="https://github.com/boyintyoko"
            className="flex items-center justify-between bg-gray-100 p-5 rounded-lg shadow-lg"
          >
            <Image src={githubIcon} alt="github" height={50} width={50} />
            <p className="font-bold text-xl text-blue-600">
              https://github.com/boyintyoko
            </p>
          </Link>
          <Link
            href="https://x.com/TaigaIto78868"
            className="flex items-center justify-between bg-gray-100 p-5 rounded-lg shadow-lg"
          >
            <Image src={xIcon} alt="x" height={50} width={50} />
            <p className="font-bold text-xl text-blue-600">
              https://x.com/TaigaIto78868
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
