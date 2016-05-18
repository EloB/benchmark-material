import React from 'react';
import benchmark from '../benchmark';
import {list, onClick} from '../fixtures';
import MuiBoilerplate from './boilerplate';

import {List, ListItem} from 'material-ui';
import Iterate from '../iterate';

benchmark(badProps => (
  <MuiBoilerplate>
    <Iterate
      badProps={badProps}
      root={<List />}
      items={list}
      children={(item, index) => (
        <ListItem key={index} onTouchTap={badProps ? () => {console.log('Bad', index); onClick('hello')} : onClick} primaryText={item} />
      )}
    />
  </MuiBoilerplate>
));