import 'bootstrap/dist/css/bootstrap.min.css';
import '../../componentsCSS/Header/NavBar.css';
import logoPrincipal from '../../image/iconoTienda.png';
import compras from '../../image/compras.png';
import CartWidget from '../Header/CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
             
            <ul className="nav justify-content-center"  id='navBar'>
                <Link to='/' id='logoNav' >
                    <a className="navbar-brand" href="#" >
                        <img src={logoPrincipal} alt="" width="80" height="80" /> CAVA
                    </a>
                </Link>
                <Link to='/category/ESPAÑA' id='liEspaña'>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">España</a>
                    </li>
                </Link>
                <Link to='/category/EUROPA' id='liEuropa'>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Europa</a>
                    </li>
                </Link>
                <Link to='/category/ASIA' id='liAsia'>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Asia</a>
                    </li>
                </Link>
                <Link to='/category/MARRUECOS' id='liMarruecos'>
                    <li className="nav-item">
                        <a className="nav-link" href="#" >Marruecos</a>
                    </li>
                </Link>
                <Link to='/' id="btonRegistro">
                    <li className="nav-item" >
                        <a className="nav-link" href="#" >Crear tu cuenta</a>
                    </li>
                </Link>
                <Link to='/' id="btonLogin" >
                    <li className="nav-item" id="btonLogin">
                        <a className="nav-link" href="#" >Ingresar</a>
                    </li>
                </Link>                 
                <CartWidget imagen={compras} cant={5} />
            </ul>
        </div>
    );
}

export default NavBar;