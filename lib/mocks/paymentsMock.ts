export async function fakeCheckout(userId: string, plan: 'free'|'pro' = 'pro') {
  await new Promise(r => setTimeout(r, 1200));
  return { id: crypto.randomUUID(), userId, plan, status: 'mocked' as const };
}
