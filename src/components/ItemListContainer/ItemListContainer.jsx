import Item from '../Item/Item'
import './ItemListContainer.css';

function ItemListContainer() {
    return (
        <div className='container-cards'>
            <Item nombre={'Gol'} precio={15000} />
            <Item nombre={'Virtus'} precio={25000} />
            <Item nombre={'Golf'} precio={30000} />
            <Item nombre={'Taos'} precio={35000} />

        </div>
    )
}

export default ItemListContainer;
