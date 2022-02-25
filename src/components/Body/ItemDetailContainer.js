import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import Data from '../Data';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


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
            {
                trips.id > 0 ? (
                        <ItemDetail 
                        key={trips.id} 
                        title={trips.name}
                        img={trips.img} 
                        price={trips.price} 
                        descrption= {trips.descrption}
                        includ={trips.includ}
                        stock={trips.stock}
                        />
            ):(
            <div className='center'>
                <Box sx={{ width: '100%'}} id="box">
                    <LinearProgress />
                </Box>
            </div>    
            )}
        </>
    )
}


export default ItemDetailContainer;