import ItemList from './ItemList';
import Data from '../Data';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

  const [trips , setTrips ] = useState("");
  const { idCategory } = useParams();

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
        
    listTrip(2000, idCategory !== undefined ? Data.filter(data => data.category === idCategory):Data)
        .then((data)=> setTrips(data))
        .catch((error) => console.log(error));


    //para actualizar el componenete
    useEffect(() => {
    },[idCategory])
  
    return (
      <>       
        <ItemList trips={trips}/>
      </>
    );
}

export default ItemListContainer;