import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../lib/db';
import { getCurrentUserId } from '../../../../lib/auth';

export async function POST(req: NextRequest) {
  const userId = getCurrentUserId();
  const body = await req.json();
  const row = {
    id: crypto.randomUUID(),
    listing_id: body.listing_id,
    buyer_id: userId,
    amount: body.amount,
    message: body.message || null,
  };
  const { error } = await supabase.from('offers').insert(row);
  if (error) return NextResponse.json({ ok:false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok:true, data: row });
}
