import React from 'react';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative w-full bg-background px-6 py-20 lg:py-32 overflow-hidden flex justify-center">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl items-center justify-between z-10">
      
      {/* Left: Text Content */}
      <div className="flex flex-col max-w-3xl lg:pr-10">
        <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20 w-fit">
          <span aria-hidden="true" className="flex h-3 w-3 rounded-full bg-primary animate-pulse"></span>
          <span className="text-base font-semibold text-primary">AI-Native Study Engine</span>
        </div>
        
        <h1 className="mb-8 text-6xl font-extrabold tracking-tight text-foreground md:text-[5.5rem] font-sans leading-[1.1]">
          Supercharge Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Focus.</span>
        </h1>
        
        <p className="mb-12 text-xl leading-relaxed text-secondary md:text-2xl font-mono">
          OmniStudy transforms your educational PDFs into an interactive learning engine. 
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
      <div className="z-10 mt-16 lg:mt-0 lg:w-1/2 flex justify-center relative">
        <div className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px]">
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
