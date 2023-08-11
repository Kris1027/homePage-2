import NavPage from '../components/NavPage';
import styles from './NotePad.module.css';

function NotePad() {
  return (
    <>
      <NavPage />
      <div className={styles.notePad}>
        <h1>Here I will build NotePad!</h1>
      </div>
    </>
  );
}

export default NotePad;
