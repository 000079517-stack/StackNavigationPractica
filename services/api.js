// Dirección donde está la API
const BASE_URL = 'https://api-items-icel-production.up.railway.app';

// Función para obtener todos los elementos
export async function getItems() {
  const response = await fetch(`${BASE_URL}/items`);

  // Si ocurre un error
  if (!response.ok) {
    throw new Error('No se pudieron cargar los elementos');
  }

  // Convierte la respuesta a JSON
  const data = await response.json();

  return data;
}