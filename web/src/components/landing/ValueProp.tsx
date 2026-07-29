import React from 'react';

export function ValueProp() {
  return (
    <div className="flex flex-col w-full items-center border-y border-border bg-muted/50 px-8 py-24">
      <h2 className="mb-8 text-3xl font-extrabold text-primary font-sans md:text-4xl text-center">Why Kabisado?</h2>
      <p className="max-w-3xl text-center text-lg leading-loose text-foreground font-mono md:text-xl">
        Designed for serious students, Kabisado reduces distractions and focuses purely on efficient learning. 
        Whether you&apos;re reviewing lecture notes or mastering complex textbooks, our <span className="font-bold text-accent">AI tools</span> are engineered to save you time and boost comprehension. Sync across devices and study anywhere, anytime.
      </p>
    </div>
  );
}
