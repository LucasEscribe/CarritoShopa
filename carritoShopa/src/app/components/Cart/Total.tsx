import styles from "../Product/product.module.css";

type ShopoProps = {
  totalPrice: number;
};

function Total(props: ShopoProps) {
  return (
    <div className={styles.load}>
      <img src="/src/app/assets/img/ico_carrito.ico" alt="icocno_carrito" width={32} height={32} />
      <p>{props.totalPrice}</p>
    </div>
  );
}

export default Total;