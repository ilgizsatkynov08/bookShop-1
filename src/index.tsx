import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './components/routes/MainRoutes';
import ProductProvider from './components/ProductContext/Context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ProductProvider>
<BrowserRouter>
<App />
<MainRoutes/>
</BrowserRouter>
  </ProductProvider>
);
