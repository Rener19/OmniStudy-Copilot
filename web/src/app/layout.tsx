import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OmniStudy Copilot",
  description: "AI-Powered PDF Study Companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <header className="border-b border-gray-200 bg-background">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <Link href="/" className="-m-1.5 p-1.5 text-2xl font-bold text-primary">
              OmniStudy
            </Link>
            <div className="flex gap-x-8">
              <Link href="/chat" className="text-sm/6 font-semibold text-foreground hover:text-primary">Chat</Link>
              <Link href="/flashcards" className="text-sm/6 font-semibold text-foreground hover:text-primary">Flashcards</Link>
              <Link href="/quizzes" className="text-sm/6 font-semibold text-foreground hover:text-primary">Quizzes</Link>
              <Link href="/health" className="text-sm/6 font-semibold text-foreground hover:text-primary">Health</Link>
            </div>
          </nav>
        </header>
        <main className="flex-1 mx-auto w-full max-w-7xl p-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
