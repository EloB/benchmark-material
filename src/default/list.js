import React from 'react';
import benchmark from '../benchmark';
import {list, onClick} from '../fixtures';

benchmark(badProps => (
  <ul>
    {list.map((item, index) => (
      <li key={index} onClick={badProps ? () => onClick('Bad', index) : onClick}>{item}</li>
    ))}
  </ul>
));
