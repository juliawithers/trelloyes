// test to see if the component renders at all - smoke test
// tests to see if any of the UI has changed at all - snapshot test

import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
// import STORE from './STORE'
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card title="test-card" content="card-content"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
        .create(
        <Card 
        title="test-card" 
        content="card-content"/>
         )
        .toJSON();
    expect(tree).toMatchSnapshot();  
});

