import { useEffect, useState } from "react";
import { fetchPeople, fetchPlanets, fetchVehicles } from "../api.js";
import Card from "../components/Card.jsx";

const Home = () => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
  
        const peopleLS = localStorage.getItem("people");
        const planetsLS = localStorage.getItem("planets");
        const vehiclesLS = localStorage.getItem("vehicles");

        if (peopleLS && planetsLS && vehiclesLS) {
          setPeople(JSON.parse(peopleLS));
          setPlanets(JSON.parse(planetsLS));
          setVehicles(JSON.parse(vehiclesLS));
        } else {
     
          const [peopleData, planetsData, vehiclesData] = await Promise.all([
            fetchPeople(),
            fetchPlanets(),
            fetchVehicles()
          ]);
          setPeople(peopleData);
          setPlanets(planetsData);
          setVehicles(vehiclesData);
          localStorage.setItem("people", JSON.stringify(peopleData));
          localStorage.setItem("planets", JSON.stringify(planetsData));
          localStorage.setItem("vehicles", JSON.stringify(vehiclesData));
        }
      } catch (err) {
        console.error("Error al obtener los datos:", err);
        setError("Hubo un error al cargar los datos.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

const [favorites, setFavorites] = useState(() => {

  const favs = localStorage.getItem("favorites");
  return favs ? JSON.parse(favs) : [];
});

const addFavorite = (item, type) => {
  const newItem = {
    uid: item.uid,
    name: item.properties?.name || item.name,
    type: type
  };

  if (!favorites.some(fav => fav.uid === newItem.uid && fav.type === newItem.type)) {
    const newFavorites = [...favorites, newItem];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    window.dispatchEvent(new Event("favoritesUpdated")); // ← Esto notifica a otros componentes
  }
};

  const renderSection = (title, items, image, renderDescription, type) => (
    <>
     
      <div className="mb-5">
         <h2 className="ms-3 mb-3">{title}</h2>
      <div className="d-flex flex-row flex-nowrap overflow-auto gap-3 px-3 py-2"  style={{ scrollSnapType: "x mandatory" }}>
        {items.map((item) => (
          <Card
            key={item.uid || item.properties?.name}
            title={item.properties?.name}
            description={renderDescription(item)}
            imgSrc={image}
            altText={item.properties?.name}
            id={item.uid}
            type={type} 
            onFavorite={() => addFavorite(item, type)}
          />
        ))}
      </div>
      </div>
    </>
  );

  if (loading) {
    return <div className="text-center mt-5">Cargando datos...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-danger">{error}</div>;
  }

  return (
    <div className="container-fluid py-4">
      

        {renderSection("Personajes", people, "img/peoples.jpg", (person) => `
      
      Gender: ${person.properties?.gender || "?"}
      Hair color: ${person.properties?.hair_color || "?"}
      Eye color: ${person.properties?.eye_color || "?"}
    `,
          "people")}
     

      
        {renderSection("Planetas", planets, "img/planets.jpg", (planet) => `
     
      Climate: ${planet.properties?.climate || "?"}
      Terrain: ${planet.properties?.terrain || "?"}
    `,
          "planets")}
     
    
        {renderSection("Vehículos", vehicles, "img/vehicles.jpg", (vehicle) => `
    
      Model: ${vehicle.properties?.model || "?"}
      Manufacturer: ${vehicle.properties?.manufacturer || "?"}
    `,
          "vehicles")}
    
    </div>
  );




};

export default Home;