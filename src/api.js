// src/api.js

export const fetchAllData = async (baseUrl, limit=null) => {
  let results = [];
  let url = baseUrl;

  while (url) {
    const res = await fetch(url);
    const data = await res.json();
    results = results.concat(data.results);
    if (limit && results.length >= limit) {
      results = results.slice(0, limit); 
      break;
    }
    url = data.next; // sigue a la siguiente página
  }

  return results;
};

export const fetchPeople = () => fetchAllData("https://www.swapi.tech/api/people", 10);
export const fetchPlanets = () => fetchAllData("https://www.swapi.tech/api/planets", 10);
export const fetchVehicles = () => fetchAllData("https://www.swapi.tech/api/vehicles", 10);

