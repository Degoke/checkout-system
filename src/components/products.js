import { useState, useEffect } from "react";
import Product from "./product";

const Products = () => {
  const [products, setProduct] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setProduct(data.map(i => ({...i, count: 1, fixprice: i.price}))));
  }, []);

  const changeCategory = (e) => {
    setCategory(e.target.name);
    document.querySelector('.active').classList.remove('active')
    e.target.classList.add('active')
  };

  return (
    <section>
      <h1 className='center-text'>Products</h1>
      <nav className='navbar'>
        <ul>
          <li>
            <button name="all" className='active' onClick={changeCategory}>
              All Products
            </button>
          </li>
          <li>
            <button name="men clothing" onClick={changeCategory}>
              Men's Clothing
            </button>
          </li>
          <li>
            <button name="women clothing" onClick={changeCategory}>
              Women's Clothing
            </button>
          </li>
          <li>
            <button name="jewelery" onClick={changeCategory}>
              Jewelery
            </button>
          </li>
          <li>
            <button name="electronics" onClick={changeCategory}>
              
              Electronics
            </button>
          </li>
        </ul>
      </nav>
      <div className='products'>
        {category === "all"
          ? products.map((product) => <Product product={product}  />)
          : products
              .filter((product) => category === product.category)
              .map((item) => <Product product={item} />)}
      </div>
    </section>
  );
};

export default Products;
