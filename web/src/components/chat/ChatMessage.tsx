import React from 'react';
import { UIMessage } from 'ai';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Sparkles } from 'lucide-react';

interface ChatMessageProps {
  message: UIMessage;
  isLatest: boolean;
}

export const ChatMessage = React.memo(function ChatMessage({ message, isLatest }: ChatMessageProps) {
  const isUser = message.role === 'user';
  
  const textContent = (message as any).parts?.filter((p: any) => p.type === 'text').map((p: any) => p.text).join('') || '';

  // If it's the assistant, it's the latest message, and content is empty, it's "Thinking..."
  const isThinking = !isUser && isLatest && textContent.length === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-6`}
    >
      <div className={`flex max-w-[85%] md:max-w-[75%] gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser ? 'bg-primary text-primary-foreground' : 'bg-emerald-900 text-emerald-100'
        }`}>
          {isUser ? <User size={16} /> : <Sparkles size={16} />}
        </div>

        {/* Message Bubble */}
        <div className={`flex flex-col gap-1 ${isUser ? 'items-end' : 'items-start'} min-w-0`}>
          <span className="text-xs text-muted-foreground font-medium px-1">
            {isUser ? 'You' : 'Kabisado'}
          </span>
          
          <div className={`px-4 py-3 rounded-2xl ${
            isUser 
              ? 'bg-primary text-primary-foreground rounded-tr-sm' 
              : 'bg-card border border-border text-card-foreground rounded-tl-sm shadow-sm'
          }`}>
            <AnimatePresence mode="wait">
              {isThinking ? (
                <motion.div
                  key="thinking"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, position: 'absolute' }}
                  className="flex items-center gap-1.5 h-6 text-emerald-500"
                >
                  <motion.div 
                    className="w-1.5 h-1.5 rounded-full bg-current"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div 
                    className="w-1.5 h-1.5 rounded-full bg-current"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div 
                    className="w-1.5 h-1.5 rounded-full bg-current"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`prose prose-sm md:prose-base dark:prose-invert max-w-none break-words ${isUser ? 'text-primary-foreground prose-p:text-primary-foreground prose-a:text-primary-foreground/80' : ''}`}
                >
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({children}) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
                      a: ({node, ...props}) => <a {...props} className="text-emerald-500 hover:underline" target="_blank" rel="noreferrer" />,
                    }}
                  >
                    {textContent}
                  </ReactMarkdown>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
});
