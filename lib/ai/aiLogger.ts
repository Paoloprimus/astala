import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export async function logAI(userId: string, type: 'copy'|'price'|'message'|'feedback', input_preview: string, output_preview: string, tokens_used = 0, mock = true) {
  await supabase.from('ai_logs').insert({ id: crypto.randomUUID(), user_id: userId, type, input_preview, output_preview, tokens_used, mock });
}
