import React from 'react';
import { Route, Routes } from 'react-router';
import AdminProduct from '../Admin';
import PagesProduct from '../../Pages';
import EditProduct from '../Edit/Edit';
import BasketMenu from '../BasketMenu';
import ProductDetal from '../ProductDetalis';

const MainRoutes = () => {
    const PUBLIC = [
        { link: "/admin", element: <AdminProduct/>, id: 1 },
        { link: "/", element: <PagesProduct/>, id: 2 },
        { link: "/booksApp", element: <PagesProduct/>, id: 3 },
        { link: "/save", element: <PagesProduct/>, id: 4 },
        { link: "/edit/:id", element: <EditProduct/>, id: 5 },
        { link: "/basket", element: <BasketMenu/>, id: 6 },
        { link: "/detal/:id", element: <ProductDetal/>, id: 7 },    




    ];

    
    return (
        <Routes>
            {PUBLIC.map((el) => (
                <Route path={el.link} element={el.element} key={el.id}/> 
            ))}
        </Routes>
    );
};

export default MainRoutes;