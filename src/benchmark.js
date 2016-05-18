import React from 'react';
import {render} from 'react-dom';
import Stats from 'stats.js';
// import {whyDidYouUpdate} from 'why-did-you-update';
//
// if (process.env.NODE_ENV !== 'production') {
//   whyDidYouUpdate(React);
// }

const {document, addEventListener, requestAnimationFrame} = global;

let badProps = false;

const label = document.createElement('label');
label.innerHTML = ' Bad props';
label.style.cssText = 'position: fixed; top: 0; right: 90px;';

const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.checked = badProps;
checkbox.onclick = () => {
  badProps = checkbox.checked;
};
label.insertBefore(checkbox, label.firstChild);

const stats = new Stats();
stats.dom.style.left = null;
stats.dom.style.right = 0;

const reference = {};
export default renderer => {
  addEventListener('load', () => {
    const container = document.getElementById('container');

    [stats.dom, label].forEach(el => document.body.appendChild(el));

    const animate = () => {
      stats.begin();

      render(renderer(badProps), container);

      stats.end();

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, false);
};