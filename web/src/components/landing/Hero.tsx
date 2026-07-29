import React from 'react';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative w-full bg-background px-6 flex justify-center min-h-[calc(100vh-80px)] overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl items-center justify-center lg:justify-between z-10 py-10 lg:py-0">

        {/* Left: Text Content */}
        <div className="flex flex-col max-w-2xl xl:max-w-3xl lg:pr-10 text-center lg:text-left items-center lg:items-start">

          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-foreground font-sans leading-[1.1]">
            Supercharge Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Focus.</span>
          </h1>

          <p className="mb-10 text-lg xl:text-xl leading-relaxed text-secondary font-mono max-w-xl">
            Kabisado transforms your educational PDFs into an interactive learning engine.
            Read, retain, and review—all in one place with real-time AI assistance.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="rounded-xl bg-primary px-10 py-5 hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300">
              <span className="text-xl font-bold text-white">Try Now Without Account</span>
            </button>
            <button className="rounded-xl bg-white dark:bg-muted border border-border px-10 py-5 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300">
              <span className="text-xl font-bold text-foreground">See How It Works</span>
            </button>
          </div>
        </div>

        {/* Right: Visual Graphic */}
        <div className="z-10 mt-10 lg:mt-0 lg:w-1/2 flex justify-center relative w-full h-[40vh] lg:h-[60vh] max-h-[600px]">
          <div className="relative w-full h-full max-w-[600px]">
            <Image
              src="/images/ai-hero-v2.png"
              alt="AI Study Assistant"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

      </div>

    </div>
  );
}
