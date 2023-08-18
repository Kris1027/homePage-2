import { useState } from 'react';

import styles from './Homepage.module.css';

import { webpages } from '../../data/websites';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas);

import NavPage from '../components/NavPage';
import MyPages from '../components/MyPages';
import Weather from '../components/Weather';
import Sorter from '../components/Sorter';

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
      <MyPages />
      <Weather />
      <Sorter
        sortedWebpages={sortedWebpages}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
      />
    </>
  );
}

export default Homepage;
