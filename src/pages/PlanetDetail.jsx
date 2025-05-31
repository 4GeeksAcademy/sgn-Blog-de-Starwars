import { useEffect, useState } from "react";
import { fetchPlanetById } from "../api.js";
import { useParams } from "react-router-dom";

export const PlanetDetail = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const planetData = await fetchPlanetById(id);
        setPlanet(planetData.properties);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [id]);

  return (

    <div className="container my-4">
      {planet ? (
        <>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://placehold.co/600x400" className="img-fluid rounded-start" alt={planet.name} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-title fs-1" style={{color:'#3ca37d'}}><strong>{planet.name}</strong></p> 
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel purus sapien. Donec ac venenatis magna. Integer efficitur fermentum lectus, a pellentesque augue. Sed porttitor, nisl vitae elementum malesuada, lectus magna vulputate nisl, sit amet placerat augue metus in sem. </p>
                  
                </div>
              </div>
            </div>
          </div>
          <hr className="sable-laser" />
          <div className="row justify-content-center">
            <div className="col">
              <p className="fs-4"><strong>Name:</strong><br/> 
              {planet.name}</p> 
            </div>
            <div className="col">
              <p className="fs-4" ><strong>Diameter:</strong> <br/>  {planet.diameter}</p>
            </div>
            <div className="col">
              <p className="fs-4"><strong>Gravity:</strong> <br/>  {planet.gravity}</p>
            </div>
            <div className="col">
              <p className="fs-4"><strong>Population:</strong> <br/>  {planet.population}</p>
            </div>

            <div className="col">
              <p className="fs-4"><strong>Climate:</strong><br/> {planet.climate}</p>
            </div>
            <div className="col">
              <p className="fs-4"><strong>Terrain:</strong> <br/> {planet.terrain}</p>
            </div>
          </div>



 </>

      ) : (
        <p>Cargando...</p>
      )}
      <button className="btn mt-3" style={{backgroundColor:'#3a8ea5', color:'white'}} onClick={() => window.history.back()}>Volver</button>
    </div>
   
  );
};
export default PlanetDetail;
