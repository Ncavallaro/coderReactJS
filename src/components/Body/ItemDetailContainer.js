import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import Data from '../Data';


const ItemDetailContainer = () => {

    const [trips , setTrips ] = useState("");
    const { id } = useParams();

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
    .then((data)=> setTrips(data[id -1 ]) )
    .catch((error) => console.log(error));

    //para actualizar el componenete
    useEffect(() => {
    },[id])

    return (
        <>
            <ItemDetail 
            key={trips.id} 
            title={trips.name}
            img={trips.img} 
            price={trips.price} 
            descrption= {trips.descrption}
            includ={trips.includ}
            stock={trips.stock}
            />
        </>
    )
}


export default ItemDetailContainer;