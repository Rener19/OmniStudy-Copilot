import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="flex flex-col col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 text-2xl font-black text-foreground font-sans tracking-tight mb-4">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent shadow-sm shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L4 7L12 12L20 7L12 2Z" />
                  <path d="M4 12L12 17L20 12" className="opacity-70" />
                  <path d="M4 17L12 22L20 17" className="opacity-40" />
                </svg>
              </div>
              OmniStudy
            </Link>
            <p className="text-secondary font-mono text-sm leading-relaxed max-w-md">
              Transform your educational PDFs into an interactive learning engine. Read, retain, and review—all in one place with real-time AI assistance.
            </p>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-foreground font-sans">Product</h4>
            <Link href="/chat" className="text-sm text-secondary hover:text-primary transition-colors font-mono">RAG Chat</Link>
            <Link href="/flashcards" className="text-sm text-secondary hover:text-primary transition-colors font-mono">Flashcards</Link>
            <Link href="/quizzes" className="text-sm text-secondary hover:text-primary transition-colors font-mono">Quizzes</Link>
            <Link href="/pricing" className="text-sm text-secondary hover:text-primary transition-colors font-mono">Pricing</Link>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-foreground font-sans">Legal</h4>
            <Link href="#" className="text-sm text-secondary hover:text-primary transition-colors font-mono">Privacy Policy</Link>
            <Link href="#" className="text-sm text-secondary hover:text-primary transition-colors font-mono">Terms of Service</Link>
            <Link href="#" className="text-sm text-secondary hover:text-primary transition-colors font-mono">Cookie Policy</Link>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-sm text-secondary font-mono mb-4 md:mb-0">
            © {new Date().getFullYear()} OmniStudy Copilot Team. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {/* Social Icons Placeholder */}
            <a href="#" className="text-secondary hover:text-primary transition-colors" aria-label="Twitter">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="text-secondary hover:text-primary transition-colors" aria-label="GitHub">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
