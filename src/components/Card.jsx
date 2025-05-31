import{ Link } from "react-router-dom";
import React from "react";
const Card = ({ title, description, id, type, altText, onFavorite  }) => {
    return (
        <div className="container my-4">
            <div className="d-flex overflow-auto gap-3 pb-2">
                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://placehold.co/600x400" className="card-img-top"  alt={altText} />
                    <div className="card-body">
                        <h5 className="card-title" style={{color:'#d6b73f'}}>{title}</h5>
                        <p className="card-text" style={{ whiteSpace: "pre-line" }}>{description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to ={`/${type}/${id}`} className="btn ms-2" style={{ backgroundColor: "#3a8ea5", color: "white" }}>
                                Detalles
                            </Link>
                            <button type="button" onClick={onFavorite} className="btn btn-outline-danger border-0  "><i className="fa-regular fa-heart"></i></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

   
    );
};

export default Card;
