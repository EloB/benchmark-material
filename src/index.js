import React from 'react';
import {render} from 'react-dom';
import {frameworks, components} from './config';

const {addEventListener} = global;

addEventListener('load', () => {
  render(
    (
      <div>
        {frameworks.map(framework => (
          <div key={framework}>
            <h1>{framework}</h1>
            <ul>
              {components.map((component, index) => (
                <li key={component}><a href={`${framework}/${component}.html`}>{component}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
    document.getElementById('container')
  )
}, false);
