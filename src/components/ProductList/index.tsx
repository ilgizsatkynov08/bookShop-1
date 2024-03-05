import React, { useEffect } from 'react';
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import './product.css';
import { Link, useNavigate } from 'react-router-dom';
import { useProduct } from '../ProductContext/Context';



const ProductList = () => {
    const { readProduct, product, deleteProduct ,getOneProduct, addBasket} = useProduct();
    useEffect(() => {
        readProduct();
    }, []);    


    function handleChange():any{
        addBasket()
    }

const navigate=useNavigate()

    return (
        <div className='container'>
            <div className="productList">
                {product.map((el: any) => (
                    <div className="listProductBlock" key={el.id}>
                        <Card style={{ height: "420px",width: "290px" }}>
                            <CardActionArea>
                                <Link to={`/detal/${el.id}`}>
                                
                                <CardMedia 
                                    component="img"
                                    height="300"
                                    image={el.image}
                                    alt="product"
                                />
                                </Link>
                                <CardContent>

                                    <Typography className='a1'  variant="body2" color="text.secondary">
                                        {el.price}

                                        <Button onClick={()=>{
                                            navigate("/basket")
                                       getOneProduct(el.id);
                                       handleChange()
                                    
                                        }}>
                                            <ShoppingCartIcon/>
                                        </Button>
                                        <Button onClick={() => deleteProduct(el.id)}>
                                             <DeleteIcon/>
                                        </Button>
                                            <Button onClick={()=>navigate(`/edit/${el.id}`)}>
                                                <BorderColorIcon />
                                            </Button>
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: "18px",
                                        fontWeight: "400px",
                                        marginTop: "10px",
                                        color: "#000000",
                                    }} gutterBottom variant="h5" component="div">
                                     <span style={{
                                        color: "rgba(0, 0, 0, 0.52)"
                                     }}>жанр :</span>   {el.type}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
