import React from 'react';

export function Footer() {
  return (
    <div className="flex flex-col w-full items-center bg-gray-900 py-12">
      <div className="mb-8 flex flex-row flex-wrap justify-center gap-4">
        {/* Placeholder for ASO badges */}
        <div className="flex flex-col rounded-lg border border-gray-700 bg-gray-800 px-6 py-3 items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
          <span className="text-base font-semibold text-gray-50">Download on App Store</span>
        </div>
        <div className="flex flex-col rounded-lg border border-gray-700 bg-gray-800 px-6 py-3 items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
          <span className="text-base font-semibold text-gray-50">Get it on Google Play</span>
        </div>
      </div>
      <p className="text-sm text-gray-400">© {new Date().getFullYear()} OmniStudy Copilot Team. All rights reserved.</p>
    </div>
  );
}
