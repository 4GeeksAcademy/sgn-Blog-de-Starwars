import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Navbar = () => {
	  const [favorites, setFavorites] = useState([]);

    useEffect(() => {
  const loadFavorites = () => {
    const favs = localStorage.getItem("favorites");
    setFavorites(favs ? JSON.parse(favs) : []);
  };

  loadFavorites(); // cargar al inicio

  window.addEventListener("favoritesUpdated", loadFavorites); // ← Escuchar cambios

  return () => {
    window.removeEventListener("favoritesUpdated", loadFavorites);
  };
}, []);

const handleDeleteFavorite = (uid) => {
	const updatedFavorites = favorites.filter(fav => fav.uid !== uid);
	setFavorites(updatedFavorites);
	localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }

	return (
		<nav className="navbar">
			<div className="container">
				<Link to="/">
				<img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-emblema.jpg" alt="LOGO_STAR_WARS"   className="img-fluid"
  				style={{ width: "100px", height: "auto" }}  />
				</Link>
				<div className="dropdown">
            <button className="btn dropdown-toggle" style={{backgroundColor:'#7f5af0', color:'white'}} type="button" data-bs-toggle="dropdown">
                Favoritos
				 <span className="badge">{favorites.length}</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
                        {favorites.length === 0 ? (
                            <li className="dropdown-item text-muted">Sin favoritos</li>
                        ) : (
                            favorites.map((fav) => (
                                <li key={fav.uid} className="dropdown-item d-flex justify-content-between align-items-center">
								<Link to={`/${fav.type}/${fav.uid}`} className="text-decoration-none text-dark">
                                    {fav.properties?.name || fav.name}
								</Link>
								<button
									className="btn btn-outline-danger btn-sm ms-2"
									onClick={(e) =>{
										 e.stopPropagation();
										 handleDeleteFavorite(fav.uid)}
									} 
									title="Eliminar de favoritos"
								></button>

                                </li>
                            ))
                        )}
                    </ul>
        </div>
			</div>
		</nav>
	);
};