import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <div className="w-full flex flex-row items-center justify-between border-b border-gray-200 bg-white px-8 py-5">
      <div>
        <Link href="/" className="text-3xl font-extrabold text-indigo-600">OmniStudy</Link>
      </div>
      <div className="flex flex-row items-center gap-4">
        <button className="px-5 py-2.5">
          <span className="text-base font-semibold text-gray-700">Login</span>
        </button>
        <button className="rounded-lg bg-indigo-600 px-5 py-2.5">
          <span className="text-base font-semibold text-white">Register</span>
        </button>
      </div>
    </div>
  );
}
