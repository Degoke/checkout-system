import {CartContext} from '../App';
import {useContext, useEffect} from 'react';

const Product = ({product}) => {
    const {items, setItems} = useContext(CartContext)

    const addToCart = () => {
        items.map((i, index) => {
            if(i.id === product.id){
                product.count ++;
                items.splice(index, 1);
                sessionStorage.removeItem(i.id)
            }
        })
        setItems(state => [...state, {...product, price: product.fixprice * product.count}])
    }

    useEffect(() => {
        items.map(i => {
            sessionStorage.setItem(`${i.id}`, JSON.stringify(i))
        }, [items])
    })
    


    return (
        <div id={product.id} key={product.id}>
            <p>{product.title}</p>
            <img src={product.image} width='150'  alt='' />
            <p>{product.fixprice}</p>
            <p>{product.description}</p>
            <button onClick={addToCart}>Add to cart</button>
          </div>
    )
}

export default Product;