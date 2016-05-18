import React from 'react';
import benchmark from '../benchmark';
import {list, onClick} from '../fixtures';
import './boilerplate';

import { List, ListItem } from 'react-toolbox';
import Iterate from '../iterate';

const renderItem = (item, props, index) => (
  <ListItem key={index} onClick={props.badProps ? () => onClick('Bad', index) : onClick} caption={item} />
);

benchmark(badProps => (
  <Iterate
    root={List}
    rootProps={{selectable: true, ripple: true}}
    items={list}
    children={renderItem}
    badProps={badProps}
  />
));
