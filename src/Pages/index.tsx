import React from 'react';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';


const PagesProduct = () => {
    return (
            <div className="pages">
    <Hero/>
    <ProductList/>
    <Footer/>
            </div>
            
    );
};

export default PagesProduct;