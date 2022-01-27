import 'bootstrap/dist/css/bootstrap.min.css';
import '../componentsCSS/NavBar.css';
import logoPrincipal from '../image/tienda de emprendedores.png';


const NavBar = () => {
    return (
        <div>
             
            <ul className="nav justify-content-center"  id='navBar'>
                <a className="navbar-brand" href="#" id='logoNav'>
                    <img src={logoPrincipal} alt="" width="80" height="80" /> Emprendedores
                </a>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Negocios</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Categorias</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Ofertas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" >Vender</a>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;