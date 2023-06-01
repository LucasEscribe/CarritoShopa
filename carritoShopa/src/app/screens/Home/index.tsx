import Product from '../../components/Product/Product.tsx';
//import styles from './styles.modules.css';
import './styles.modules.css'

function App() {
  return (
    <main>
      <div className="side"></div>

      <div className="center">
        <h1 className="section1">Recently Played</h1>
        <br />
        <Product img="/src/app/assets/img/Productas/colchones/colchones_opa.jpg" name="colchones" song="Opa" views="10M" />
        <Product img="/src/app/assets/img/Productas/colchones/colchones_pelotuda.jpg" name="colchones" song="Pelotuda" views="18M" />
        <Product img="/src/app/assets/img/Productas/colchones/colchones_sauce.jpg" name="colchones" song="Sauce" views="6M" />
      </div>

      <div className="bottom"></div>
    </main>
  );
}

export default App;
