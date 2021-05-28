import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';
import Portfolio from './layout/portfolio'
import Upload from './views/upload/Upload'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Route exact path="/" component={Portfolio} />
      <Route exact path="/upload" component={Upload} />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
