import 'bootstrap/dist/css/bootstrap.min.css';
import '../componentsCSS/NavBar.css';
import logoPrincipal from '../image/iconoTienda.png';
import compras from '../image/compras.png'
import CartWidget from '../components/CartWidget'


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
                <li className="nav-item" id="btonRegistro">
                    <a className="nav-link" href="#" >Crear tu cuenta</a>
                </li>
                <li className="nav-item" id="btonLogin">
                    <a className="nav-link" href="#" >Ingresar</a>
                </li>
                <CartWidget imagen={compras} cant={5} />
            </ul>
        </div>
    );
}

export default NavBar;