import {useState, useEffect, useRef, useContext} from 'react';
import {CartContext} from '../App';
import CartItems from './cart-items';
import StripeCheckout from 'react-stripe-checkout';





const Cart = () => {
    const [cart, setCart] = useState([]);
    const {items, setItems} = useContext(CartContext)
    const [total, setTotal] = useState(0)


    useEffect(() => {
        const data = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      let x = sessionStorage.key(i);
      data[i] = JSON.parse(sessionStorage[x]);
    }
    setItems(data);
    }, [])

   

    useEffect(() => {
        items.map(i => {
            sessionStorage.setItem(`${i.id}`, JSON.stringify(i))
        }, [items])
    })

    useEffect(() => {
        let list = []
        items.map(i => {
            list.push(i.price)
        })
        setTotal(list.reduce((a,b) => a + b, 0))
        
    }, [items])

    const clear = () => {
        sessionStorage.clear()
        setItems([])
        }

    return(
        <div className='cart'>
        {items.map(item => <CartItems  item={item} />)}
        <button onClick={clear}>Clear</button>
        <h3>{total}</h3>
        <StripeCheckout 
            stripeKey='pk_test_51HrTf7Bd9JsdvqhAWTlNGmsrf92k9SbdFsBUrEEdQ5eJ2a7Hc2CEngZhee6GPvRgtYWkeXHxLZAPDqQmHCtkioz800nV3IROwP'
            amount={total * 100}
        />
        </div>
        
    )
}

export default Cart;