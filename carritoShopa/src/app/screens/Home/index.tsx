import { useState } from "react";
import "../../../global.css";

import Product from "../../components/Product/Product.tsx";
import LoadProduct from "../../components/Product/LoadProduct.tsx";
import Total from "../../components/Cart/Total.tsx";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotal = (subtotal: number) => {
    setTotalPrice(totalPrice + subtotal); 
  };

  return (
    <main>
      <div className="side_left">
        <h1 className="title_left">Cargar Producto</h1>
        <LoadProduct />
      </div>

      <div className="center">
        <h1 className="title_center">Listado</h1>
        <Product
          id="1001"
          name="Colchón Kamikase"
          description="Duerma o Muera en den 50"
          price={224000}
          updateTotal={updateTotal}
        />
        <Product
          id="1002"
          name="Colchón Químico"
          description="Ignífugo para fumadores den 30"
          price={250000}
          updateTotal={updateTotal}
        />
        <Product
          id="1003"
          name="Colchón Pasti"
          description="La cura del dolor den 100"
          price={375000}
          updateTotal={updateTotal}
        />
        <Product
          id="1004"
          name="Colchón Amor"
          description="Duerma solo den 1"
          price={20000}
          updateTotal={updateTotal}
        />
        <Product
          id="1005"
          name="Colchón Party"
          description="Hasta 30 en den 4"
          price={1250000}
          updateTotal={updateTotal}
        />
      </div>

      <div className="side_right">
        <h2 className="title_right">Total</h2>
        <Total totalPrice={totalPrice} />
      </div>
    </main>
  );
}

export default App;
