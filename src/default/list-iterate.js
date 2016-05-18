import React from 'react';
import benchmark from '../benchmark';
import {list, onClick} from '../fixtures';

import Iterate from '../iterate';

const renderItem = (item, props, index) => (
  <li key={index} onClick={props.badProps ? () => onClick('Bad', index) : onClick}>{item}</li>
);

benchmark(badProps => (
  <Iterate
    root="ul"
    rootProps={{ className: 'hello-world' }}
    items={list}
    children={renderItem}
    badProps={badProps}
  />
));
