import layouts from '../../styles/layouts.module.css';

import { useYeti } from './hook';
import styles from './styles.module.css';

function Yeti() {
  const { handleClick, total } = useYeti();
  return (
    <div className={layouts.centered}>
      <div className={styles.yeti}>
        <div className={styles.yeti__spaghetti}></div>
      </div>
      <h1>Yeti {total}</h1>
      <button onClick={handleClick}>+1</button>
    </div>
  );
}

export default Yeti;
