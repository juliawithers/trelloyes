// test to see if the component renders at all - smoke test
// tests to see if any of the UI has changed at all - snapshot test

import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';
import STORE from './STORE'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <List 
    header="test-list" 
    cards={["1"]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
        .create(
            <List 
            header="test-list" 
            cards={["1"]}/>
            )
        .toJSON();
    expect(tree).toMatchSnapshot();  
});

