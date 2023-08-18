import styles from './Sorter.module.css';

function Sorter({ selectedSort, setSelectedSort }) {
  return (
    <label className={styles.sort}>
      <h2>Sort by</h2>
      <select
        value={selectedSort}
        onChange={(e) => setSelectedSort(e.target.value)}
      >
        <option value='default'>default</option>
        <option value='name'>name</option>
        <option value='icon'>icon</option>
      </select>
    </label>
  );
}

export default Sorter;
