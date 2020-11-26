import {CartContext} from '../App';
import {useContext}  from 'react';
 

const CartItems = ({item}) => {
    
    const {items, setItems} = useContext(CartContext)

     const handleClick = (e) => {
         item.price = item.fixprice * item.count
        switch(e.target.id){
            case 'add':
            items.forEach((i, index) => {
            if(i.id === item.id){
                item.count ++;
                
                items.splice(index, 1);
                sessionStorage.removeItem(i.id)
            }
        })
        setItems(state => [...state, {...item, price: item.fixprice * item.count}])
        break
        case 'subtract':
        items.forEach((i, index) => {
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
         items.forEach((i, index) => {
             setItems(state => state.filter(j => {
                   return j.id !== item.id
             })
             )
                //items.splice(index, 1);
                sessionStorage.removeItem(i.id)
         })
                break
            default:
                setItems(state => state)
    }
    }
    return(
         <>
        <p>{item.title} {item.count} {item.price}</p>
        <button id='add' onClick={handleClick}>+</button> <button id='subtract' onClick={handleClick}>-</button> <button id='delete' onClick={handleClick}>D</button>
        </>
    )
}

export default CartItems;