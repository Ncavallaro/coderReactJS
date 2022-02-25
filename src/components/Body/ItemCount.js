import { useEffect, useState } from 'react';
import '../../componentsCSS/Body/ItemCount.css';
import Button from '@mui/material/Button';

export default function ItemCount(props) {
    
    const [cant, setCant] = useState(1);

   const increment = () => {
        if( cant < props.stock ){
            setCant(cant +1 )
            
        }
    }

    const decrement = () => {
        if( props.initial < cant ){
            setCant(cant -1 )
        }
    }

    //para actualizar el componenete
    useEffect(() => {
    },[cant])

    return (
        <div className='itemCount'>
            <div className="input-group mb-3">
                <span id='lblCantidad'>Cantidad</span>
                <button className="btn btn-outline-secondary" type="button" onClick={decrement}>-</button>
                <input type="text" className="large" placeholder="" value={cant} id='inputCant'></input>
                <button className="btn btn-outline-secondary" type="button" onClick={increment}>+</button>
                <div>
                    <Button variant="outlined" id='btonAgregar' onClick={() => props.clicked(cant)}>Agregar al carrito</Button>
                </div>
            </div>
        </div>
    );
}