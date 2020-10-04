import * as React from 'react';
import { hydrate, render } from 'react-dom';

import { App, AppProviders } from './App';

const rootElement = document.getElementById('root');
let fn: Function;
if (rootElement.hasChildNodes()) {
  fn = hydrate;
} else {
  fn = render;
}

fn(
  (
    <AppProviders>
      <App />
    </AppProviders>
  ),
  rootElement
);