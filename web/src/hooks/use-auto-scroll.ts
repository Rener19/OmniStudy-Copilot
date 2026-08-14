import { useEffect, useRef, useState, useCallback } from 'react';

export function useAutoScroll<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);
  const [isAtBottom, setIsAtBottom] = useState(true);

  // Check if we are at the bottom of the container
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    
    // A small threshold (10px) accounts for sub-pixel rendering and minor bounces
    const atBottom = scrollHeight - scrollTop - clientHeight < 10;
    setIsAtBottom(atBottom);
  }, []);

  // Effect to automatically scroll down when new content arrives IF we are at the bottom
  useEffect(() => {
    if (!containerRef.current || !isAtBottom) return;
    
    const container = containerRef.current;
    
    // Create a MutationObserver to watch for DOM changes (like streaming text arriving)
    const observer = new MutationObserver(() => {
      if (isAtBottom) {
        container.scrollTo({ top: container.scrollHeight, behavior: 'instant' });
      }
    });

    observer.observe(container, { childList: true, subtree: true, characterData: true });

    return () => observer.disconnect();
  }, [isAtBottom]);

  // Function to manually jump to bottom
  const scrollToBottom = useCallback((behavior: ScrollBehavior = 'smooth') => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior,
    });
    setIsAtBottom(true);
  }, []);

  return { containerRef, isAtBottom, handleScroll, scrollToBottom };
}
