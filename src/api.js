const BASE_URL = "https://www.swapi.tech/api";

// Función genérica para obtener un recurso por tipo e id
export const fetchById = async (type, id) => {
  const res = await fetch(`${BASE_URL}/${type}/${id}`);
  if (res.status === 429) {
    throw new Error("Has hecho demasiadas peticiones. Intenta de nuevo en unos minutos.");
  }
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Error HTTP ${res.status}: ${text}`);
  }
  const data = await res.json();
  return data.result;
};

// Funciones específicas usando la genérica
export const fetchPlanetById = (id) => fetchById("planets", id);
export const fetchPeopleById = (id) => fetchById("people", id);
export const fetchVehiclesById = (id) => fetchById("vehicles", id);

// Función para obtener listas con detalles completos
export const fetchAllData = async (baseUrl, limit = 10) => {
  let results = [];
  let url = baseUrl;

  while (url) {
    const res = await fetch(url);

    if (res.status === 429) {
      throw new Error("Has hecho demasiadas peticiones. Intenta de nuevo en unos minutos.");
    }

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Error HTTP ${res.status}: ${text}`);
    }

    const data = await res.json();
    results = results.concat(data.results);

    if (limit && results.length >= limit) {
      results = results.slice(0, limit);
      break;
    }

    url = data.next;
  }

  // Obtener detalles completos de cada recurso
  const detailedResults = await Promise.all(
    results.map(async (item) => {
      const detailRes = await fetch(item.url);
      if (!detailRes.ok) return item;
      const detailData = await detailRes.json();
      return detailData.result;
    })
  );

  return detailedResults;
};

// Funciones para obtener listas de recursos con detalles completos
export const fetchPeople = (limit = 10) => fetchAllData(`${BASE_URL}/people`, limit);
export const fetchPlanets = (limit = 10) => fetchAllData(`${BASE_URL}/planets`, limit);
export const fetchVehicles = (limit = 10) => fetchAllData(`${BASE_URL}/vehicles`, limit);