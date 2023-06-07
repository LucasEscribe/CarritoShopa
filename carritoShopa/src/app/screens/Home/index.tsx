import Product from "../../components/Product/Product.tsx";
import LoadProduct from "../../components/Product/LoadProduct.tsx";
import Total from "../../components/Cart/Total.tsx";

import "./style.modules.css";

import { useState } from "react";


function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([
    {
      id: Date.now().toString(),
      name: "Colchón Kamikase",
      description: "Duerma o Muera en den 50",
      price: 224000,
    },
    {
      id: Date.now().toString(),
      name: "Colchón Químico",
      description: "Ignífugo para fumadores den 30",
      price: 250000,
    },
    {
      id: Date.now().toString(),
      name: "Colchón Pasti",
      description: "La cura del dolor den 100",
      price: 375000,
    },
    {
      id: Date.now().toString(),
      name: "Colchón Amor",
      description: "Duerma solo den 1",
      price: 20000,
    },
    {
      id: Date.now().toString(),
      name: "Colchón Party",
      description: "Hasta 30 en den 4",
      price: 1250000,
    },
  ]);

  const updateTotal = (subtotal: number) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + subtotal);
  };
  
  const removeItem = (subtotal: number) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice - subtotal);
  };

  return (
    <main>
      <div className="side_left">
        <h1 className="title_left">Cargar Producto</h1>
        <LoadProduct products={products} setProducts={setProducts} />
      </div>


      <div className="center">
        <h1 className="title_center">Listado</h1>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            updateTotal={updateTotal}
            removeItem={removeItem}
          />
        ))}
      </div>

      <div className="side_right">
        <h2 className="title_right">Carrito Shopo</h2>
        <Total totalPrice={totalPrice} />
      </div>
    </main>
  );
}

export default App;
