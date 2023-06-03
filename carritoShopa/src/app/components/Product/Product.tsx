import styles from "./Product.module.css";
import { useState } from "react";

type ProductProps = {
  id: string;
  name: string;
  description: string;
  price: string | number;
  updateTotal: (subtotal: number) => void;
};

function Product(props: ProductProps) {
  const [quantity, setQuantity] = useState(0);

  const handleAddUnit = () => {
    setQuantity(quantity + 1);
    calculateSubtotal(quantity + 1);
  };

  const handleRemoveUnit = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      calculateSubtotal(quantity - 1);
    }
  };

  const calculateSubtotal = (newQuantity: number) => {
    const subtotal = newQuantity * Number(props.price);
    props.updateTotal(subtotal);
  };

  return (
    <div className={styles.product}>
      <h2 className={styles.name}>{props.name}</h2>
      <p className={styles.description}>{props.description}</p>
      <p className={styles.price}>{props.price}</p>

      <div className={styles.unitContainer}>
        <button className={styles.unitButton} onClick={handleRemoveUnit}>
          -
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button className={styles.unitButton} onClick={handleAddUnit}>
          +
        </button>
      </div>
    </div>
  );
}

export default Product;
