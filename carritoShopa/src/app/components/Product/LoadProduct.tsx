import styles from "./product.module.css";
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

type LoadProductProps = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

function LoadProduct(props: LoadProductProps) {
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const handleClick = () => {
    if (newName === "" || newPrice === "") {
      alert("Por favor, ingrese el nombre y el precio del producto.");
      return;
    }
  
    const parsedPrice = parseFloat(newPrice);
    if (isNaN(parsedPrice)) {
      alert("El precio debe ser un número válido.");
      return;
    }
    
    const lastProductId = props.products[props.products.length - 1]?.id || 1000;
    const newProductId = lastProductId + 1;
    const newProduct: Product = {
      id: newProductId,
      name: newName,
      description: newDescription || "",
      price: parsedPrice,
    };

    props.setProducts([...props.products, newProduct]);
  };


  return (
    <div className={styles.load}>
      <label htmlFor="new_product">Nuevo Producto</label>

      <label htmlFor="name" className={styles.inputLabel}>
        Nombre
      </label>
      <input
        type="text"
        name="product_name"
        id="name"
        value={newName}
        onChange={(event) => setNewName(event.target.value)}
      />

      <label htmlFor="description" className={styles.inputLabel}>
        Descripción
      </label>
      <input
        type="text"
        name="product_description"
        placeholder="descripción opcional"
        id="description"
        value={newDescription}
        onChange={(event) => setNewDescription(event.target.value)}
      />

      <label htmlFor="price" className={styles.inputLabel}>
        Precio
      </label>
      <input
        type="text"
        name="product_price"
        id="price"
        value={newPrice}
        onChange={(event) => setNewPrice(event.target.value)}
      />

      <button className={styles.button_load} type="submit" onClick={handleClick}>
        Cargar
      </button>
    </div>
  );
}

export default LoadProduct;
