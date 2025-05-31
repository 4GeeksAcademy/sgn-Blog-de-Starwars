import { useEffect, useState } from "react";
import { fetchVehiclesById } from "../api.js";
import { useParams } from "react-router-dom";

export const VehicleDetail = () => {
  const { id } = useParams();
  const [vehicles, setVehicles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const vehiclesData = await fetchVehiclesById(id);
        setVehicles(vehiclesData.properties);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
 <div className="container my-4">
      {vehicles ? (
        <>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://placehold.co/600x400" className="img-fluid rounded-start" alt={vehicles.name} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-title fs-1" style={{color:'#3ca37d'}}><strong>{vehicles.name}</strong></p> 
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel purus sapien. Donec ac venenatis magna. Integer efficitur fermentum lectus, a pellentesque augue. Sed porttitor, nisl vitae elementum malesuada, lectus magna vulputate nisl, sit amet placerat augue metus in sem. </p>
                  
                </div>
              </div>
            </div>
          </div>
          <hr className="sable-laser" />
          <div className="row justify-content-center">
            <div className="col">
              <p className="fs-4"><strong>Name:</strong><br/> 
              {vehicles.name}</p> 
            </div>
            <div className="col">
              <p className="fs-4" ><strong>Birth Year:</strong> <br/>  {vehicles.vehicle_class}</p>
            </div>
            <div className="col">
              <p className="fs-4"><strong>Gender:</strong> <br/> {vehicles.manufacturer}</p>
            </div>
            <div className="col">
              <p className="fs-4"><strong>Height:</strong> <br/>  {vehicles.crew}</p>
            </div>

            <div className="col">
              <p className="fs-4"><strong>Skin color:</strong><br/> {vehicles.passengers}</p>
            </div>
            <div className="col">
              <p className="fs-4"><strong>Eye color:</strong> <br/> {vehicles.cargo_capacity}</p>
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
export default VehicleDetail;