const Card = ({ title, description}) => {
    return (
        <div className="container my-4">
            <div className="d-flex overflow-auto gap-3 pb-2">
                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://placehold.co/600x400" className="card-img-top" alt="place-holder" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <a href="#" className="btn btn-outline-primary ms-2">
                                Detalles
                            </a>
                            <button type="button" className="btn btn-outline-danger border-0 "><i class="fa-regular fa-heart"></i></button>
                        </div>
                    </div>
                </div>





            </div>
        </div>

   
    );
};

export default Card;
