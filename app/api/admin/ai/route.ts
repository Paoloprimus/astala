import { NextResponse } from 'next/server';
// prima:
// import { supabase } from '@/lib/db';
import { supabase } from '../../../../lib/db';

export async function GET() {
  const { data, error } = await supabase
    .from('ai_logs')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(50);
  if (error) return NextResponse.json({ ok:false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok:true, data });
}
