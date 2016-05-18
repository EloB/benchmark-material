import React from 'react';
import benchmark from '../benchmark';
import {list, onClick} from '../fixtures';
import MuiBoilerplate from './boilerplate';

import {List, ListItem} from 'material-ui';
import Iterate from '../iterate';

const renderItem = (item, props, index) => (
  <ListItem key={index} onTouchTap={props.badProps ? () => onClick('Bad', index) : onClick} primaryText={item} />
);

benchmark(badProps => (
  <MuiBoilerplate>
    <Iterate
      root={List}
      items={list}
      children={renderItem}
      badProps={badProps}
    />
  </MuiBoilerplate>
));
