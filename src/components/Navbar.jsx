import { Link } from "react-router-dom";

export const Navbar = () => {

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
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
                <li className="dropdown-item text-muted">agregados</li>
            </ul>
        </div>
			</div>
		</nav>
	);
};