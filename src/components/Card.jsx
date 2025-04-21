const Card = ({ title, description, imgSrc, altText }) => {
    return (
        <div className="container my-4">
            <div className="d-flex overflow-auto gap-3 pb-2">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imgSrc} className="card-img-top" alt={altText} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="#" className="btn btn-primary">
                            Más información
                        </a>
                    </div>
                </div>
                
                



            </div>
        </div>

        //   <div className="card" style={{ width: "18rem" }}>
        //     <img src={imgSrc} className="card-img-top" alt={altText} />
        //     <div className="card-body">
        //       <h5 className="card-title">{title}</h5>
        //       <p className="card-text">{description}</p>
        //       <a href="#" className="btn btn-primary">
        //         Más información
        //       </a>
        //     </div>
        //   </div>
    );
};

export default Card;
