import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: 'RAG Chat Engine',
    description: 'Query your documents directly with real-time streaming responses and exact page citations.',
    image: '/images/rag.png'
  },
  {
    title: 'Spaced-Repetition',
    description: 'AI-generated flashcards scheduled using cognitive science algorithms to maximize retention.',
    image: '/images/flashcards.png'
  },
  {
    title: 'Dynamic Quizzes',
    description: 'Test your knowledge with auto-generated assessments and immediate grading.',
    image: '/images/quizzes.png'
  }
];

export function FeatureGrid() {
  return (
    <div className="flex w-full flex-col flex-wrap justify-center gap-8 bg-white px-8 py-[60px] md:flex-row">
      {features.map((f, i) => (
        <div key={i} className="flex flex-col min-w-[320px] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] md:flex-1">
          <div className="relative h-[220px] w-full bg-gray-50">
            <Image src={f.image} alt={f.title} fill className="object-cover" />
          </div>
          <div className="flex flex-col p-6">
            <h3 className="mb-3 text-2xl font-extrabold text-gray-900">{f.title}</h3>
            <p className="text-base leading-6 text-gray-600">{f.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
