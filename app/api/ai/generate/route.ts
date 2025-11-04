import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUserId } from '../../../../lib/auth';
import { generateAI } from '../../../../lib/ai/openaiClient';
import { logAI } from '../../../../lib/ai/aiLogger';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { type, prompt } = body as { type: 'copy'|'price'|'message'; prompt: string };
  const userId = getCurrentUserId();
  const out = await generateAI(type, prompt || '');
  await logAI(userId, type, (prompt||'').slice(0,120), out.text.slice(0,200), out.tokens, true);
  return NextResponse.json({ ok: true, text: out.text });
}
