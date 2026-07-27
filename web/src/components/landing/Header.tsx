"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
        
        {/* Left Side: Logo & Desktop Nav */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2 text-2xl font-black text-foreground font-sans tracking-tight hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
              <span className="text-background text-sm font-bold">O</span>
            </div>
            OmniStudy
          </Link>
          <nav className="hidden md:flex flex-row items-center gap-6">
            <Link href="/chat" className="text-sm font-semibold text-foreground hover:text-primary transition-colors font-mono">Chat</Link>
            <Link href="/flashcards" className="text-sm font-semibold text-foreground hover:text-primary transition-colors font-mono">Flashcards</Link>
            <Link href="/quizzes" className="text-sm font-semibold text-foreground hover:text-primary transition-colors font-mono">Quizzes</Link>
          </nav>
        </div>

        {/* Right Side: Desktop Buttons & Mobile Toggle */}
        <div className="flex flex-row items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-2.5 rounded-lg hover:bg-muted transition-colors font-mono">
              <span className="text-sm font-semibold text-foreground">Login</span>
            </button>
            <button className="rounded-lg bg-foreground px-5 py-2.5 hover:bg-gray-800 dark:hover:bg-gray-300 transition-colors font-mono">
              <span className="text-sm font-semibold text-background">Register</span>
            </button>
          </div>
          
          {/* Hamburger Menu Toggle (Mobile Only) */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border p-4 flex flex-col gap-4 shadow-lg">
          <nav className="flex flex-col gap-2">
            <Link 
              href="/chat" 
              className="px-4 py-3 text-base font-semibold text-foreground hover:bg-muted rounded-lg font-mono"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Chat
            </Link>
            <Link 
              href="/flashcards" 
              className="px-4 py-3 text-base font-semibold text-foreground hover:bg-muted rounded-lg font-mono"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Flashcards
            </Link>
            <Link 
              href="/quizzes" 
              className="px-4 py-3 text-base font-semibold text-foreground hover:bg-muted rounded-lg font-mono"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Quizzes
            </Link>
          </nav>
          <div className="flex flex-col gap-2 pt-2 border-t border-border">
            <button className="w-full px-5 py-3 rounded-lg hover:bg-muted transition-colors font-mono text-center">
              <span className="text-base font-semibold text-foreground">Login</span>
            </button>
            <button className="w-full rounded-lg bg-foreground px-5 py-3 hover:bg-gray-800 transition-colors font-mono text-center">
              <span className="text-base font-semibold text-background">Register</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
