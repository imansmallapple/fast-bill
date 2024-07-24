import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import sum from '@/test'
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './theme.css'
const total = sum(1,2)
console.log(total)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
