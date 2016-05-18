import React from 'react';
import benchmark from '../benchmark';
import {list, onClick} from '../fixtures';

import { List, ListItem } from 'react-toolbox';

benchmark(badProps => (
  <List>
    {list.map((item, index) => (
      <ListItem key={index} onClick={badProps ? () => onClick() : onClick} caption={item} legend={item} />
    ))}
  </List>
));