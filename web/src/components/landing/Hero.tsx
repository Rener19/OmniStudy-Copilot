import React from 'react';

export function Hero() {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-gray-50 px-6 py-[100px]">
      <h1 className="mb-5 text-center text-[40px] font-black text-gray-900 md:text-6xl">
        Supercharge Your Focus.
      </h1>
      <p className="mb-10 max-w-[700px] text-center text-lg leading-8 text-gray-600 md:text-2xl">
        OmniStudy transforms your educational PDFs into an interactive learning engine. 
        Read, retain, and review—all in one place.
      </p>
      <button className="rounded-xl bg-indigo-600 px-10 py-5 shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-colors">
        <span className="text-xl font-bold text-white">Try Now Without Account</span>
      </button>
    </div>
  );
}
