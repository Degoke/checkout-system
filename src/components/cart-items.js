import {CartContext} from '../App';
import {useContext}  from 'react';
 

const CartItems = ({item}) => {
    
    const {items, setItems} = useContext(CartContext)

    const handleClick = (e) => {
         console.log(e)
         item.price = item.fixprice * item.count
        switch(e.target.id){
            case 'add':
            items.map((i, index) => {
            if(i.id === item.id){
                item.count ++;
                
                items.splice(index, 1);
                sessionStorage.removeItem(i.id)
                }
        })
        setItems(state => [...state, {...item, price: item.fixprice * item.count}])
        break
        case 'subtract':
        items.map((i, index) => {
            if(i.id === item.id){
                if(item.count > 1)(
                    item.count --
                )
                items.splice(index, 1);
                sessionStorage.removeItem(i.id)
            }
        })
        setItems(state => [...state, {...item, price: item.fixprice * item.count}])
        break
        case 'delete':
         items.map((i, index) => {
             if (i.id === item.id) {
                 sessionStorage.removeItem(i.id)
                 setItems(state => state.splice(index, 1))
                 console.log(items)
            }
        })
    }
    }
    return(
        <div className='cart-box'>
            <img src={item.image} alt='' width='50' />
            <p>{item.title} </p>
            <p>Quantity: {item.count}</p>
            <p>Price: ${item.price}</p>
        <button id='add' onClick={handleClick}>Increase Quantity</button> <button id='subtract' onClick={handleClick}>Decrease Quantity</button> <button id='delete' onClick={handleClick}>Remove Item</button>
        </div>
    )
}

export default CartItems;