import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    // Get the chatbot URL from environment variable
    const chatbotUrl = process.env.NEXT_PUBLIC_CHATBOT_URL || 'http://localhost:8000';
    
    // Forward the request to the chatbot service
    const response = await fetch(`${chatbotUrl}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error('Chatbot service error');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    );
  }
}
