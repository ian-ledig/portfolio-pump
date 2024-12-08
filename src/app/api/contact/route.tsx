import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { email, subject, message } = body;

  if (!email || !subject || !message) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  return NextResponse.json({ message: 'Message received successfully!' });
}