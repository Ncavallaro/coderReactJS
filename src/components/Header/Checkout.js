import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return(
        <div id='btonCarrito'>
            <Link to='/cart' style={{textDecoration: "none"}}>
                <Button variant="outlined">Ir al carrito</Button>
            </Link>
        </div>
    )
}

export default Checkout;