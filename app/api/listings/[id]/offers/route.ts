import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../../lib/db';

export async function GET(
  _: NextRequest, 
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { data, error } = await supabase
    .from('offers')
    .select('*')
    .eq('listing_id', id)
    .order('amount', { ascending: false });
  if (error) return NextResponse.json({ ok:false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok:true, data });
}
