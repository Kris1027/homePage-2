import NavPage from '../components/NavPage';
import styles from './NotePad.module.css';

function NotePad() {
  return (
    <>
      <NavPage />
      <div className={styles.notePad}>
        <textarea cols='50' rows='10'></textarea>
      </div>
    </>
  );
}

export default NotePad;
