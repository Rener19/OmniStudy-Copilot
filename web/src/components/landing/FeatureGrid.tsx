import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: 'RAG Chat Engine',
    description: 'Query your documents directly with real-time streaming responses and exact page citations.',
    image: '/images/rag-v2.png'
  },
  {
    title: 'Spaced-Repetition',
    description: 'AI-generated flashcards scheduled using cognitive science algorithms to maximize retention.',
    image: '/images/flashcards-v2.png'
  },
  {
    title: 'Dynamic Quizzes',
    description: 'Test your knowledge with auto-generated assessments and immediate grading.',
    image: '/images/quizzes-v2.png'
  }
];

export function FeatureGrid() {
  return (
    <div className="flex w-full flex-col justify-center items-center gap-12 bg-white dark:bg-muted px-4 md:px-8 py-24">
      
      <div className="text-center max-w-4xl mb-6 px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold text-foreground font-sans mb-6">Everything You Need to Ace It.</h2>
        <p className="text-xl md:text-2xl text-secondary font-mono">Three powerful engines seamlessly integrated to turn passive reading into active mastery.</p>
      </div>

      <div className="flex w-full max-w-7xl flex-col flex-wrap justify-center gap-8 md:flex-row">
        {features.map((f, i) => (
          <div key={i} className="group flex flex-col w-full overflow-hidden rounded-3xl border border-border bg-background shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 md:flex-1">
            <div className="relative h-[300px] w-full bg-muted overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500 z-10" />
              <Image 
                src={f.image} 
                alt={f.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <div className="flex flex-col p-10">
              <h3 className="mb-4 text-3xl font-bold text-foreground font-sans line-clamp-2">{f.title}</h3>
              <p className="text-lg md:text-xl leading-relaxed text-secondary font-mono line-clamp-4">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
