import React from 'react';
import ReactDOM from 'react-dom';
import PageNotFound from './PageNotFound';

it('PageNotFound renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageNotFound />, div);
  ReactDOM.unmountComponentAtNode(div);
});
