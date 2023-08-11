import NavPage from '../components/NavPage';
import styles from './NotePad.module.css';

function NotePad() {
  return (
    <>
      <NavPage />
      <div className={styles.notePad}></div>
    </>
  );
}

export default NotePad;
