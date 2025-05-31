import { useEffect, useState } from "react";
import { fetchPeopleById } from "../api.js";
import { useParams } from "react-router-dom";

export const PeopleDetail = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const personData = await fetchPeopleById(id);
        setPerson(personData.properties);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [id]);

  return (

    <div className="container my-4">
      {person ? (
        <>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://placehold.co/600x400" className="img-fluid rounded-start" alt={person.name} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-title fs-1" style={{color:'#3ca37d'}}><strong>{person.name}</strong></p> 
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel purus sapien. Donec ac venenatis magna. Integer efficitur fermentum lectus, a pellentesque augue. Sed porttitor, nisl vitae elementum malesuada, lectus magna vulputate nisl, sit amet placerat augue metus in sem. </p>
                  
                </div>
              </div>
            </div>
          </div>
          <hr className="sable-laser" />
          <div className="row justify-content-center">
            <div className="col">
              <p className="fs-4"><strong>Name:</strong><br/> 
              {person.name}</p> 
            </div>
            <div className="col">
              <p className="fs-4" ><strong>Birth Year:</strong> <br/>  {person.birth_year}</p>
            </div>
            <div className="col">
              <p className="fs-4"><strong>Gender:</strong> <br/>  {person.gender}</p>
            </div>
            <div className="col">
              <p className="fs-4"><strong>Height:</strong> <br/>  {person.height}</p>
            </div>

            <div className="col">
              <p className="fs-4"><strong>Skin color:</strong><br/> {person.skin_color}</p>
            </div>
            <div className="col">
              <p className="fs-4"><strong>Eye color:</strong> <br/> {person.eye_color}</p>
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
export default PeopleDetail;