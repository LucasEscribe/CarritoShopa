import { useState } from "react";
import styles from "./product.module.css";

type ProductProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  updateTotal: (subtotal: number) => void;
  removeItem: (subtotal: number) => void;
  calcTotal: () => number;
};

function Product(props: ProductProps) {
  const [quantity, setQuantity] = useState(0);

  const handleAddUnit = () => {
    setQuantity((quantity) => quantity + 1);
    const subtotal = (quantity + 1) * props.price;
    props.updateTotal(subtotal);
  };

  const handleRemoveUnit = () => {
    if (quantity > 0) {
      setQuantity((quantity) => quantity - 1);
      const subtotal = (quantity - 1) * props.price;
      props.removeItem(subtotal);
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
      <div>
        <button onClick={handleRemoveUnit}>-</button>
        <span>{quantity}</span>
        <button onClick={handleAddUnit}>+</button>
        <span>Subtotal: {formattedSubtotal}</span>
      </div>
    </div>
  );
}

export default Product;
