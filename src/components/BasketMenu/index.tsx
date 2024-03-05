import React, { useEffect } from 'react';
import { useProduct } from '../ProductContext/Context';
import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./basket.css";

const BasketMenu = () => {
    const {ReadBasket, basket, deleteBasket}=useProduct()
    useEffect(()=>{
        ReadBasket()
    })
    console.log(basket);
    
    return (
        <div className="container">

        <div className='basket'>
{
    basket.map((el:any)=>(
        <div>
        <Card sx={{ width: "240px", height: "400px"}}>
        <CardMedia
          sx={{ height: 260 }}
          image={el.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {el.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
        {el.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={()=>deleteBasket(el.id)}
          size="small">Delete</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </div>

    ))
}        </div>
</div>

    );
};

export default BasketMenu;