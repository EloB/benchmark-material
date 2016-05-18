import React from 'react';
import benchmark from '../benchmark';
import {list, onClick} from '../fixtures';
import './boilerplate';

import { List, ListItem } from 'react-toolbox';

benchmark(badProps => (
  <List selectable ripple>
    {list.map((item, index) => (
      <ListItem key={index} onClick={badProps ? () => onClick('Bad', index) : onClick} caption={item} />
    ))}
  </List>
));
