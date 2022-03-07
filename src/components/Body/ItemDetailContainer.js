import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import db from '../firebaseConfig';
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [trips , setTrips ] = useState("");
    const { id } = useParams();

    useEffect (() => {
        const firestoreFetchDetail = async () => {
            const docRef = doc(db, "dataTrips", id);
            const docSnap = await getDoc(docRef);
            return {
                id:id,
                ...docSnap.data()
            }
        }
        firestoreFetchDetail()
          .then(trip => setTrips(trip))
          .catch(error => console.log(error));
      },[trips])

    //para actualizar el componenete
    useEffect(() => {
    },[id])

    return (
        <>
            {
                trips.id > 0 ? (
                        <ItemDetail 
                        id={trips.id} 
                        name={trips.name}
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