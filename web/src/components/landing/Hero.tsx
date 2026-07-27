import React from 'react';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative flex flex-col lg:flex-row w-full items-center justify-between bg-background px-6 py-20 lg:py-32 overflow-hidden">
      
      {/* Left: Text Content */}
      <div className="z-10 flex flex-col max-w-2xl lg:pl-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 w-fit">
          <span aria-hidden="true" className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-sm font-medium text-primary">AI-Native Study Engine</span>
        </div>
        
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-foreground md:text-7xl font-sans leading-[1.1]">
          Supercharge Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Focus.</span>
        </h1>
        
        <p className="mb-10 text-lg leading-relaxed text-secondary md:text-xl font-mono">
          OmniStudy transforms your educational PDFs into an interactive learning engine. 
          Read, retain, and review—all in one place with real-time AI assistance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="rounded-xl bg-primary px-8 py-4 hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300">
            <span className="text-lg font-bold text-white">Try Now Without Account</span>
          </button>
          <button className="rounded-xl bg-white dark:bg-muted border border-border px-8 py-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300">
            <span className="text-lg font-bold text-foreground">See How It Works</span>
          </button>
        </div>
      </div>

      {/* Right: Visual Graphic */}
      <div className="z-10 mt-16 lg:mt-0 lg:w-1/2 flex justify-center relative">
        <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px]">
          <Image 
            src="/images/ai-hero.png" 
            alt="AI Study Assistant" 
            fill 
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

    </div>
  );
}
