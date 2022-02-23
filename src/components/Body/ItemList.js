import '../../componentsCSS/Body/ItemList.css';
import Item from '../Body/Item';


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
                <span>Cargando...</span>
            )}
        </div>
    )
}

export default ItemList;