import { useEffect, useState } from 'react';
import '../../componentsCSS/Body/ItemCount.css';

const  ItemCount = () =>{

    const valMin = 1;
    const valMax = 5;
    
    const [cant, setValoraciones] = useState(0);

    const increment = () => {
        if( cant < valMax ){
            setValoraciones(cant +1 )
        }
    }

    const decrement = () => {
        if( valMin < cant ){
            setValoraciones(cant -1 )
        }
    }

    //cuando incia el componente
    useEffect(() => {
        setValoraciones(valMin )
    },[])  

    //para actualizar el componenete
    useEffect(() => {
    },[cant])

    return (
        <div className='container'>
            <h3>Camisa</h3>
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" onClick={decrement}>-</button>
                <input type="text" className="large" placeholder="" value={cant} id='inputCant'></input>
                <button className="btn btn-outline-secondary" type="button" onClick={increment}>+</button>
                <div>
                    <button className="btn btn-primary" type="button" id='btonAgregar'>Agregar al carrito</button>
                </div>
               
            </div>
        </div>
    );
}

export default ItemCount;