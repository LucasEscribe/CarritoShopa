import styles from "./total.module.css";

type ShopoProps = {
  totalPrice: number;
};

function Total(props: ShopoProps) {
  return (
    <div className={styles.total}>
      <img src="/src/app/assets/img/ico_carrito.ico" alt="icocno_carrito" width={32} height={32} />
      <p>Total Carrito: {props.totalPrice}</p>
    </div>
  );
}

export default Total;