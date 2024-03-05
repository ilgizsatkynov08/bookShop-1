import React, { createContext, useContext, useState} from 'react';
import axios from 'axios';

interface Product {
    el: string;
    id: number;
}

const productContext = createContext<undefined>(undefined);

export const useProduct = (): any=> {
    const context = useContext(productContext);
    if (!context) {

    }
    return context;
};


const ProductProvider = ({ children }: any)=> {
    const API_PRODUCTS = 'http://localhost:3000/product';
    const API_BASKET = 'http://localhost:3000/basket';

    const [basket, setBasket]=useState([])
    const [product, setProduct] = useState<Product[]>([]);
    const [oneProduct, setOneProduct] = useState<null>(null); 
    const [data, setData]=useState<Product[]>([])


    async function AddProduct(newProduct: Product){
        await axios.post(API_PRODUCTS, newProduct);
    }

    async function readProduct() {
        const { data } = await axios(`${API_PRODUCTS}`);
        setProduct(data);
        
    }

    async function deleteProduct(id: any) {
        await axios.delete(`${API_PRODUCTS}/${id}`);
        readProduct();
    }

    async function getOneProduct(id: any | string){ 
        const { data } = await axios(`${API_PRODUCTS}/${id}`);
        setOneProduct(data);
    }

    async function  addBasket(){
        await axios.post(API_BASKET, oneProduct);
    
    }

    async function editProduct(id: any, editProduct: Product) {
        await axios.patch(`${API_PRODUCTS}/${id}`, editProduct); 
        readProduct();
    }


async function deleteBasket(id:any) {
    await axios.delete(`${API_BASKET}/${id}`)
    ReadBasket()
}


async function ReadBasket(){
    let {data}=await axios(API_BASKET)
    setBasket(data)
}
 
    const values:any = { 
        AddProduct,
        readProduct,
        deleteProduct,  
        product,
        getOneProduct,
        oneProduct,
        editProduct,
        setData,
        data,
        ReadBasket,
        addBasket,
        basket,
        deleteBasket,
    };

    return <productContext.Provider value={values}>{children}</productContext.Provider>;
};

export default ProductProvider;
