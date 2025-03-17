
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <nav className="nav-bar">
                <img src="../src/assets/imgs/volkswagen.png" alt="vw" className="logo" />
                <ul className="nav-bar-options">
                    <li className="nav-bar-item">
                        <Link to="/">
                            Todos los vehiculos
                        </Link>
                    </li>
                    <li className="nav-bar-item">
                        <Link to="/categoria/sedanes">
                            Sedanes
                        </Link>
                    </li>
                    <li className="nav-bar-item">
                        <Link to="/categoria/suvs">
                            Suvs
                        </Link>
                    </li>
                    <li className="nav-bar-item">
                        <Link to="/categoria/hatchback">
                            Hatchback
                        </Link>
                    </li>
                </ul>
                <CartWidget />
            </nav>
        </header>
    );
};

export default Navbar;





