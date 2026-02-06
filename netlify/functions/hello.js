export async function handler(event, context) {
  // Validar método HTTP (opcional pero recomendado)
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  // Simular lógica async (DB, API, etc)
  const data = await Promise.resolve({
    message: 'Hola desde Netlify Functions 🚀',
    timestamp: new Date().toISOString()
  });

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
}
