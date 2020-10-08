import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it("getInventory connection successful", () => {
  fetch("/api/getInventory")
    .then(res => console.assert(res.status == 200 || res.status == "200"), "Error")
})
