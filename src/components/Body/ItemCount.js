import { useEffect, useState } from 'react';
import '../../componentsCSS/Body/ItemCount.css';

export default function ItemCount(props) {
    
    const [cant, setValoraciones] = useState(1);

   const increment = () => {
        if( cant < props.stock ){
            setValoraciones(cant +1 )
            
        }
    }

    const decrement = () => {
        if( props.initial < cant ){
            setValoraciones(cant -1 )
        }
    }

    //cuando incia el componente
//    useEffect(() => {
//        setValoraciones(props.initial )
//    },[])  

    //para actualizar el componenete
    useEffect(() => {
        console.log(cant)
    },[cant])

    return (
        <div className='container'>
            <h3>Camisa</h3>
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" onClick={decrement}>-</button>
                <input type="text" className="large" placeholder="" value={cant} id='inputCant'></input>
                <button className="btn btn-outline-secondary" type="button" onClick={increment}>+</button>
                <div>
                    <button className="btn btn-primary" type="button" id='btonAgregar' onClick={() => props.clicked(cant)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}