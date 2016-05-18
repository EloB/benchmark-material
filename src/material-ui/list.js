import React from 'react';
import benchmark from '../benchmark';
import {list, onClick} from '../fixtures';
import MuiBoilerplate from './boilerplate';

import {List, ListItem} from 'material-ui';

benchmark(badProps => (
  <MuiBoilerplate>
    <List>
      {list.map((item, index) => (
        <ListItem key={index} onTouchTap={badProps ? () => onClick('Bad', index) : onClick} primaryText={item} />
      ))}
    </List>
  </MuiBoilerplate>
));
