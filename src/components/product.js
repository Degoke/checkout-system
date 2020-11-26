import {CartContext} from '../App';
import {useContext, useEffect} from 'react';

const Product = ({product}) => {
    const {items, setItems} = useContext(CartContext)

    const addToCart = () => {
        items.forEach((i, index) => {
            if(i.id === product.id){
                product.count ++;
                items.splice(index, 1);
                sessionStorage.removeItem(i.id)
            }
        })
        setItems(state => [...state, {...product, price: product.fixprice * product.count}])
    }

    useEffect(() => {
        items.forEach(i => {
            sessionStorage.setItem(`${i.id}`, JSON.stringify(i))
        }, [items])
    })
    


    return (
        <div  className='box' id={product.id} key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} width='150'  alt='' />
            <h3>${product.fixprice}</h3>
            <p>{product.description}</p>
            <button className='add' onClick={addToCart}>Add to cart</button>
          </div>
    )
}

export default Product;