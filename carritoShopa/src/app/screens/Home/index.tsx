import { useState } from "react";

import Product from "../../components/Product/Product";
import LoadProduct from "../../components/Product/LoadProduct";
import Total from "../../components/Cart/Total";

import "./styles.modules.css";
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

  const [subtotals, setSubtotals] = useState<number[]>([]);

  const updateTotal = (subtotal: number) => {
    setSubtotals((prevSubtotals) => [...prevSubtotals, subtotal]);
  };

  const removeItem = (subtotal: number) => {
    setSubtotals((prevSubtotals) => prevSubtotals.filter((sub) => sub !== subtotal));
  };

  const calcTotal = () => {
    return subtotals.reduce((accumulator, subtotal) => accumulator + subtotal, 0);
  };

  return (
    <main>
      <div className="root">
        <div className="side_left">
          <h1 className="title_left">Cargar Producto</h1>
          <LoadProduct products={products} setProducts={setProducts} />
        </div>

        <div className="center">
          <h1 className="title_center">Listado</h1>
          <div className="grid_products">
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                updateTotal={updateTotal}
                removeItem={removeItem}
                calcTotal={calcTotal}
              />
            ))}
          </div>
        </div>

        <div className="side_right">
          <h2 className="title_right">Carrito Shopo</h2>
          <Total subtotals={subtotals} />
        </div>
      </div>
    </main>
  );
}

export default App;
