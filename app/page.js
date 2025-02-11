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
          <h1 className="text-black">
            S-Bio-S
          </h1>
        </div>
      </header>
      <Contents
      />
    </div>
  );
}
