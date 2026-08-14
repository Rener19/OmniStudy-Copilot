import { ChatInterface } from '@/components/chat/ChatInterface';

export const metadata = {
  title: 'Kabisado Copilot - Chat',
};

export default function ChatPage() {
  return (
    <div className="flex-1 p-4 md:p-8 flex items-center justify-center max-w-7xl mx-auto w-full">
      <ChatInterface />
    </div>
  );
}
