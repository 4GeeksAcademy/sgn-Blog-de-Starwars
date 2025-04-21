// src/api.js

export const fetchAllData = async (baseUrl) => {
  let results = [];
  let url = baseUrl;

  while (url) {
    const res = await fetch(url);
    const data = await res.json();
    results = results.concat(data.results);
    url = data.next; // sigue a la siguiente página
  }

  return results;
};

export const fetchPeople = () => fetchAllData("https://www.swapi.tech/api/people");
export const fetchPlanets = () => fetchAllData("https://www.swapi.tech/api/planets");
export const fetchVehicles = () => fetchAllData("https://www.swapi.tech/api/vehicles");