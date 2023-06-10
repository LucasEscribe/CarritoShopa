import { useState } from "react";
import Product from "../../components/Product/Product";
import LoadProduct from "../../components/Product/LoadProduct";
import Total from "../../components/Cart/Total";

import styles from "./styles.module.css";
import "../../../global.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1001,
      name: "Colchón Kamikase",
      description: "Duerma o Muera en den 50",
      price: 224000,
    },
    {
      id: 1002,
      name: "Colchón Químico",
      description: "Ignífugo para fumadores den 30",
      price: 250000,
    },
    {
      id: 1003,
      name: "Colchón Pasti",
      description: "La cura del dolor den 100",
      price: 375000,
    },
    {
      id: 1004,
      name: "Colchón Amor",
      description: "Duerma solo den 1",
      price: 20000,
    },
    {
      id: 1005,
      name: "Colchón Party",
      description: "Hasta 30 en den 4",
      price: 1250000,
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddProductToCart = (price: number) => {
    setTotalPrice(totalPrice + price);
  };

  const handleRemoveProductFromCart = (price: number) => {
    setTotalPrice(totalPrice - price);
  };

  return (
    <main>
      <div className={styles.root}>
        <div className={styles.side_left}>
          <h1 className={styles.title_left}>Cargar Producto</h1>
          <LoadProduct products={products} setProducts={setProducts} />
        </div>

        <div className={styles.center}>
          <h1 className={styles.title_center}>Listado</h1>
          <div className={styles.grid_products}>
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                handleAddProductToCart={handleAddProductToCart}
                handleRemoveProductFromCart={handleRemoveProductFromCart}
              />
            ))}
          </div>
        </div>

        <div className={styles.side_right}>
          <h2 className={styles.title_right}>Carrito Shopo</h2>
          <Total totalPrice={totalPrice} />
        </div>
      </div>
    </main>
  );
}

export default App;