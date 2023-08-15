import styles from './Homepage.module.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas);

import { webpages } from '../../data/websites';
import NavPage from '../components/NavPage';
import MyPages from '../components/MyPages';
import { useState } from 'react';

function Homepage() {
  const [selectedSort, setSelectedSort] = useState('default');

  const sortedWebpages = [...webpages];

  sortedWebpages.sort((a, b) => {
    if (selectedSort === 'name') {
      return a.name.localeCompare(b.name);
    } else if (selectedSort === 'icon') {
      return a.icon.localeCompare(b.icon);
    } else {
      return 0;
    }
  });

  return (
    <>
      <NavPage />
      <div className={styles.websites}>
        {sortedWebpages.map((webpage) => (
          <a
            href={webpage.link}
            target='_blank'
            rel='noopener noreferrer'
            key={webpage.name}
          >
            <FontAwesomeIcon icon={webpage.icon} className={styles.icon} />
            <span>{webpage.name}</span>
          </a>
        ))}
      </div>
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
      <MyPages />
    </>
  );
}

export default Homepage;
