import styles from "./product.module.css";

import { useState } from "react";

type ProductProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  updateTotal: (subtotal: number) => void;
  removeItem: (subtotal: number) => void;
};

function Product(props: ProductProps) {
  const [quantity, setQuantity] = useState(0);

  const handleAddUnit = () => {
    setQuantity((quantity) => quantity + 1);
    const subtotal = quantity * props.price;
    props.updateTotal(subtotal);
  };

  const handleRemoveUnit = () => {
    if (quantity > 0) {
      setQuantity((quantity) => quantity - 1);
      const subtotal = props.price;
      props.removeItem(subtotal);
    }
  };

  return (
    <div className={styles.product_container}>
      <h2>{props.name}</h2>
      <h3>{props.description}</h3>
      <p>{props.price}</p>
      <div>
        <button onClick={handleRemoveUnit}>-</button>
        <span>{quantity}</span>
        <button onClick={handleAddUnit}>+</button>
        <span>Subtotal: {quantity * props.price}</span>
      </div>
    </div>
  );
}

export default Product;