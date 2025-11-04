export async function generateMock(type: 'price'|'copy'|'message', prompt: string) {
  if (type === 'price') return { text: 'Prezzo suggerito: €118.000 - €124.000', tokens: 12, mock: true };
  if (type === 'copy') return { text: 'Bilocale luminoso, piano alto, balcone e vista aperta. Zona servita.', tokens: 40, mock: true };
  return { text: 'Messaggio gentile e conciso per l’offerta.', tokens: 10, mock: true };
}
