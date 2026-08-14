import { streamText } from 'ai';
import { chatModel, systemPrompt } from '@/lib/ai-config';

// Force dynamic execution for API routes that stream
export const dynamic = 'force-dynamic';
export const maxDuration = 30; // max Vercel timeout for free tier

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const coreMessages = messages.map((msg: any) => ({
      role: msg.role,
      content: msg.parts ? msg.parts.map((p: any) => p.text).join('') : (msg.content || '')
    }));

    // streamText handles the SSE connection and token chunking automatically
    const result = await streamText({
      model: chatModel,
      system: systemPrompt,
      messages: coreMessages,
      temperature: 0.7,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate response' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
