export async function sendEmailMock(to: string, subject: string, html: string) {
  console.log('[EMAIL MOCK]', { to, subject });
  return { id: crypto.randomUUID(), to, subject, html };
}
