import { useEffect, useState } from "react";
import { fetchPeople, fetchPlanets, fetchVehicles } from "../api.js";
import Card from "../components/Card.jsx";

export const Home = () => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const peopleData = await fetchPeople();
        const planetsData = await fetchPlanets();
        const vehiclesData = await fetchVehicles();

        setPeople(peopleData);
        setPlanets(planetsData);
        setVehicles(vehiclesData);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Personajes</h2>
      <div className="cards-container">
        {people.map((person, index) => (
          <Card
            key={`person-${index}`}
            title={person.name}
            description={`Género: ${person.gender} | Altura: ${person.height}`}
            imgSrc="img/peoples.jpg"
            altText={person.name}
          />
        ))}
      </div>



      <h2>Planetas</h2>
      <div className="cards-container">
        {planets.map((planet, index) => (
          <Card
            key={`planet-${index}`}
            title={planet.name}
            description={`Clima: ${planet.climate} | Terreno: ${planet.terrain}`}
            imgSrc="img/planets.jpg"
            altText={planet.name}
          />
        ))}
      </div>

      <h2>Vehículos</h2>
      <div className="cards-container">
        {vehicles.map((vehicle, index) => (
          <Card
            key={`vehicle-${index}`}
            title={vehicle.name}
            description={`Modelo: ${vehicle.model} | Fabricante: ${vehicle.manufacturer}`}
            imgSrc="img/vehicles.jpg"
            altText={vehicle.name}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;