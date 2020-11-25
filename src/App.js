import Products from './components/products';
import Cart from './components/cart';
import {useState, useContext, useEffect, useMemo, createContext} from 'react';

export const CartContext = createContext(null);

const App = () => {
  const [items, setItems] = useState([]);

  const Provider = useMemo(() => ({items, setItems}), [items, setItems])

  return (
    <CartContext.Provider value={Provider}>
    <main>
    <Cart />
      <Products />
      
    </main>
    </CartContext.Provider>
  )
}


export default App;