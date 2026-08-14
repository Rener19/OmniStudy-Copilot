'use client';

import React, { useEffect, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { Send, Square, ArrowDown } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { useAutoScroll } from '@/hooks/use-auto-scroll';
import { motion, AnimatePresence } from 'framer-motion';

export function ChatInterface() {
  const [mounted, setMounted] = useState(false);
  const [input, setInput] = useState('');
  
  const { messages, status, sendMessage, stop, setMessages } = useChat({
    throttle: 50,
  });

  const isLoading = status === 'streaming' || status === 'submitted';

  const { containerRef, isAtBottom, handleScroll, scrollToBottom } = useAutoScroll<HTMLDivElement>();

  // Handle Hydration mismatch for localStorage
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('kabisado_chat_history');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse history");
      }
    }
  }, [setMessages]);

  useEffect(() => {
    if (mounted && messages.length > 0) {
      localStorage.setItem('kabisado_chat_history', JSON.stringify(messages));
    }
  }, [messages, mounted]);

  if (!mounted) return <div className="h-[80vh] w-full max-w-4xl mx-auto border border-border rounded-2xl bg-card animate-pulse" />;

  return (
    <div className="flex flex-col h-[calc(100vh-100px)] md:h-[80vh] w-full max-w-4xl mx-auto border border-border rounded-2xl overflow-hidden bg-background shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-card">
        <h2 className="text-lg font-bold">Kabisado Chat</h2>
        <button 
          onClick={() => { setMessages([]); localStorage.removeItem('kabisado_chat_history'); }}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Clear Chat
        </button>
      </div>

      {/* Messages Area */}
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto p-4 md:p-6 scroll-smooth relative"
      >
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-2">
              <span className="text-2xl">🎓</span>
            </div>
            <p className="text-center max-w-sm">
              Upload a PDF to start studying, or just say hello to test the AI.
            </p>
          </div>
        ) : (
          messages.map((m, idx) => (
            <ChatMessage key={m.id} message={m} isLatest={idx === messages.length - 1} />
          ))
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-card border-t border-border relative">
        {/* Floating Jump to Bottom Button */}
        <AnimatePresence>
          {!isAtBottom && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onClick={() => scrollToBottom()}
              className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full py-1.5 px-4 shadow-md hover:bg-primary/90 transition-colors z-10 flex items-center gap-2 text-sm font-medium"
            >
              <ArrowDown size={14} /> Jump to latest
            </motion.button>
          )}
        </AnimatePresence>

        <form 
          onSubmit={(e) => {
            e.preventDefault();
            if (!input.trim() || isLoading) return;
            const userMsg = { id: Date.now().toString(), role: 'user' as const, parts: [{ type: 'text' as const, text: input }] };
            sendMessage(userMsg as any);
            setInput('');
          }} 
          className="flex items-center gap-2 bg-background border border-border rounded-xl p-1 shadow-sm focus-within:ring-2 focus-within:ring-emerald-500/50 transition-shadow"
        >
          <input
            className="flex-1 bg-transparent px-4 py-3 outline-none text-foreground placeholder:text-muted-foreground min-w-0"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your study materials..."
          />
          
          {isLoading ? (
            <button
              type="button"
              onClick={stop}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors flex-shrink-0"
              aria-label="Stop generation"
            >
              <Square size={16} className="fill-current" />
            </button>
          ) : (
            <button
              type="submit"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
