import '../../componentsCSS/Body/ItemList.css';
import Item from '../Body/Item';
import Data from '../Data';
import { useState } from 'react';

const ItemList = () =>{

    const [trips , setTrips ] = useState("");

      //implementacion de promesa
        const listTrip = (timeout, data) => {
            return new Promise ((resolve, reject) => {
            setTimeout(() =>{
                if (data) {
                resolve(data);
                } else {
                reject('KO');
                }
            }, timeout)
            });
        };

  listTrip(2000,Data)
    .then((data)=> setTrips(data) )
    .catch((error) => console.log(error));

    return(
        <div className='center'>
            {
                trips.length > 0 ? (
                trips.map((trip) => (
                    <Item 
                        key={trip.id} 
                        title={trip.name}
                        img={trip.img} 
                        price={trip.price} 
                    />
                ))
            ):(
                <span>Cargando...</span>
            )}
        </div>
    )
}

export default ItemList;