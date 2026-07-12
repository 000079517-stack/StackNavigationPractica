// Dirección donde está la API
const BASE_URL = 'https://api-items-icel-production.up.railway.app';

// ==========================
// Obtener todos los elementos
// ==========================
export async function getItems() {
  const response = await fetch(`${BASE_URL}/items`);

  if (!response.ok) {
    throw new Error('No se pudieron cargar los elementos');
  }

  return await response.json();
}

// ==========================
// Obtener un elemento por ID
// ==========================
export async function getItemById(id) {
  const response = await fetch(`${BASE_URL}/items/${id}`);

  if (!response.ok) {
    throw new Error('No se pudo obtener el elemento');
  }

  return await response.json();
}

// ==========================
// Crear un nuevo elemento
// ==========================
export async function createItem(item) {
  const response = await fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    throw new Error('No se pudo crear el elemento');
  }

  return await response.json();
}

// ==========================
// Actualizar un elemento
// ==========================
export async function updateItem(id, item) {
  const response = await fetch(`${BASE_URL}/items/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    throw new Error('No se pudo actualizar el elemento');
  }

  return await response.json();
}

// ==========================
// Eliminar un elemento
// ==========================
export async function deleteItem(id) {
  const response = await fetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('No se pudo eliminar el elemento');
  }

  return true;
}