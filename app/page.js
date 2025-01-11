import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-green-900 grid grid-rows-[90px_1fr_20px] items-center justify-items-center min-h-screen gap-1 font-[family-name:var(--font-geist-sans)]">
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
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
        </div>
      </main>
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
