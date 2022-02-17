import { useState } from "react"
import ItemDetail from "./ItemDetail";
import Data from '../Data';


const ItemDetailContainer = () => {

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
    .then((data)=> setTrips(data[0]) )
    .then((data)=> console.log(data) )
    .catch((error) => console.log(error));


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