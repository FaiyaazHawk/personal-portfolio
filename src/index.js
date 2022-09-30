import React from 'react';
import ReactDOM from 'react-dom/client';
import Routeswitch from './components/Routeswitch';
import "./custom.scss"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routeswitch />
  </React.StrictMode>
);

