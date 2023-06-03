import styles from "./product.module.css";
import { useState } from "react";

function LoadProduct() {
  const [newName, setNewName] = useState("Ingrese Nombre");
  const [newDescription, setNewDescription] = useState("Ingrese Descripción (opcional)");
  const [newPrice, setNewPrice] = useState("Ingrese Precio");

  const handleClick = () => {
    setNewName("");
    setNewDescription("");
    setNewPrice("");
  };
    
  return (
    <div className={styles.load}>
      <label htmlFor="new_product">Nuevo Producto</label>
      
      <label htmlFor="name" className={styles.inputLabel}>Nombre</label>
      <input type="text" name="product_name" id="name" value={newName} onClick={handleClick} onChange={(event) => setNewName(event.target.value)} />
      
      <label htmlFor="description" className={styles.inputLabel}>Descripción</label>
      <input type="text" name="product_description" id="description" value={newDescription} onClick={handleClick} onChange={(event) => setNewDescription(event.target.value)} />
      
      <label htmlFor="price" className={styles.inputLabel}>Precio</label>
      <input type="text" name="product_price" id="price" value={newPrice} onClick={handleClick} onChange={(event) => setNewPrice(event.target.value)} />
      
      <button type="submit">Cargar</button>
    </div>
  );
}

export default LoadProduct;
