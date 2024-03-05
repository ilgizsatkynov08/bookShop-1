import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useProduct } from '../ProductContext/Context';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Basket() {

  const {basket}=useProduct()

  const nav=useNavigate()
  return (
    <IconButton onClick={()=>nav("/basket")}  sx={{color: "white"}} aria-label="cart">
      <StyledBadge  badgeContent={basket.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>

  );
}