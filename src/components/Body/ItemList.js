import '../../componentsCSS/Body/ItemList.css';
import Item from '../Body/Item';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


const ItemList = (props) =>{    
  
    return(
        <div className='center'>
            {
                props.trips.length > 0 ? (
                    props.trips.map((trip) => (
                    <Item 
                        key={trip.id} 
                        title={trip.name}
                        img={trip.img} 
                        price={trip.price}
                        id={trip.id} 
                    />
                ))
            ):(
                <div className='center'>
                <Box sx={{ width: '100%'}} id="box">
                    <LinearProgress />
                </Box>
            </div>  
            )}
        </div>
    )
}

export default ItemList;