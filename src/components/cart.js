import { useState, useEffect, useContext } from "react";
import { CartContext } from "../App";
import CartItems from "./cart-items";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const { items, setItems } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const data = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      let x = sessionStorage.key(i);
      data[i] = JSON.parse(sessionStorage[x]);
    }
    setItems(data);
  }, [setItems]);

  useEffect(() => {
    items.forEach(
      (i) => {
        sessionStorage.setItem(`${i.id}`, JSON.stringify(i));
      },
      [items]
    );
  });

  useEffect(() => {
    let list = [];
    items.forEach((i) => {
      list.push(i.price);
    });
    setTotal(list.reduce((a, b) => a + b, 0));
  }, [items]);

  const clear = () => {
    sessionStorage.clear();
    setItems([]);
  };

  const hideCart = () => {
    document.querySelector(".cart").classList.remove("show");
  };

  return (
    <div className="cart">
      <div className="overlay">
        <h2>CART</h2>
        {items.map((item) => (
          <CartItems item={item} />
        ))}
        <button onClick={clear}>Clear Cart</button>
        <h3>Total: ${total.toFixed(2)}</h3>
        <StripeCheckout
          stripeKey="pk_test_51HrTf7Bd9JsdvqhAWTlNGmsrf92k9SbdFsBUrEEdQ5eJ2a7Hc2CEngZhee6GPvRgtYWkeXHxLZAPDqQmHCtkioz800nV3IROwP"
          amount={total * 100}
        />
        <button className="back" onClick={hideCart}>
          Back to Shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;
