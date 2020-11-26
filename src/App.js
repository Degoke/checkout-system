import Products from './components/products';
import Cart from './components/cart';
import {useState, useMemo, createContext} from 'react';

export const CartContext = createContext(null);

const App = () => {
  const [items, setItems] = useState([]);

  const Provider = useMemo(() => ({items, setItems}), [items, setItems])

  return (
    <CartContext.Provider value={Provider}>
    <main className='wrapper'>
        <Products />
        <Cart />
    </main>
    </CartContext.Provider>
  )
}


export default App;