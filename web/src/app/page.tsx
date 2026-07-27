import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight text-primary sm:text-7xl">
        OmniStudy Copilot
      </h1>
      <p className="mt-6 text-lg leading-8 text-secondary max-w-2xl">
        Transform your educational PDFs into an interactive learning engine. 
        Read, retain, and review—all in one place.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/chat"
          className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
