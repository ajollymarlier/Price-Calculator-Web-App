import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it("getInventory connection successful", () => {
  fetch(`${window.origin}api/getInventory`)
    .then(res => {
      if(res.status !== 200){
        throw Error
      }
    }).catch(() => {throw Error})
})
