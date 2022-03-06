import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import db from '../firebaseConfig';
import { TripOriginOutlined } from '@mui/icons-material';

const ItemListContainer = () => {

  const [trips , setTrips ] = useState("");
  const { idCategory } = useParams();

  useEffect (() => {
    const firestoreFetch = async () => {
      const querySnapshot = await getDocs (collection(db, "dataTrips"));
      return querySnapshot.docs.map (document => ({
        id: document.id,
        ...document.data()
      }))
    }
    firestoreFetch()
      .then(trips => setTrips(idCategory !== undefined ? trips.filter(trip => trip.category === idCategory):trips))
      .catch(error => console.log(error));
  },[trips])

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