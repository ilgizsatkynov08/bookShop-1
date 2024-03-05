import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './header.css'
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../ProductContext/Context';
import Basket from '../Basket/Index';

interface Product {
    block: boolean;
}

const Header: React.FC<Product> = () => {
    const [block, setBlock] = useState(false);
    const [password, setPassword] = useState<string>('');
    const { basket, readProduct, addBasket, getOneProduct , oneProduct} = useProduct();
    console.log('basket' , basket);
    
    useEffect(() => {
        readProduct();
    }, [basket]);



    function handleBasket() {
        addBasket();
    }

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    };

    const handleSignIn = () => {
        if (password === '123') {
            navigate('/admin');
            setBlock(false);
        } else {
            alert("none password!");
        }
    };

    const toggleModal = () => {
        setBlock(!block);
    };

    const navigate = useNavigate();

    return (
        <div id="header">
            <div className='container'>
                <div className="header">
                    <h1 onClick={() => navigate("/booksApp")}>BOOKShop</h1>
                    <div className="icon">
                        <TextField
                            sx={{
                                color: "white",
                                border: "none",
                                background: "white",
                                width: "400px",
                                borderRadius: "10px",
                                height: "50px"
                            }}
                            id="outlined-basic"
                            label="Search..."
                            variant="outlined"
                        />
                        <div
                            style={{ color: "white" }}
                            onClick={(el: any) => {
                                getOneProduct(el.id);
                                handleBasket();
                            }}
                            className="bag"
                        >
                            <Basket/>
                        </div>
                        <div className="bag" onClick={toggleModal}>
                            <AccountCircleIcon />
                            <h1>Aдмин</h1>
                        </div>
                        {block && (
                            <div className="bg">
                                <div className='password'>
                                    <div className="login">
                                        <span onClick={toggleModal} className='close'>&times;</span>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                gap: "2pc"
                                            }}
                                            className="ib"
                                        >
                                            <input
                                                type="password"
                                                onChange={handlePasswordChange}
                                                value={password}
                                                placeholder="Password..."
                                            />
                                            <button onClick={handleSignIn}>SIGN IN</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;