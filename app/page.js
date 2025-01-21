import Contents from "@/components/contents";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#355F2E] grid grid-rows-[90px_1fr] gap-2 items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header>
        <div className="flex items-center gap-4 font-semibold text-6xl">
          <Image
            aria-hidden
            src="/logo.png"
            alt="Gas icon"
            width={70}
            height={79.5}
          />
          <h1>
            S-Bio-S
          </h1>
        </div>
      </header>
      <Contents
      />
      {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a> */}
    </div>
  );
}
