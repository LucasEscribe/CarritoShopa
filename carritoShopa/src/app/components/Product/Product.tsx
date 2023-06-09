import styles from "./product.module.css";
import { useState } from "react";

type ProductProps = {
  id: number;
  name: string;
  description: string;
  price: number;
};

function Product(props: ProductProps) {
  const [quantity, setQuantity] = useState(0);

  const handleAddUnit = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveUnit = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const formattedPrice = props.price.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  });

  const subtotal = quantity * props.price;
  const formattedSubtotal = subtotal.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  });

  return (
    <div className={styles.product_container}>
      <h2>{props.name}</h2>
      <h3 className={styles.empty_description}>{props.description}</h3>
      <p>{formattedPrice}</p>
      <div className={styles.handler_subtotal}>
        <button className={styles.remove} onClick={() => {
          handleRemoveUnit();
        }}>
          -
        </button>
        <span>{quantity}</span>
        <button className={styles.add} onClick={() => {
          handleAddUnit();
        }}>
          +
        </button>
        <span>Subtotal: {formattedSubtotal}</span>
      </div>
    </div>
  );
}

export default Product;
