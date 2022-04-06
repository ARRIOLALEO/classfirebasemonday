import React ,{useContext}from 'react'
import {CartContext} from '../../contex/GeneralCart'
import {Grid,Button,Box,Typography,CardMedia} from '@mui/material'
import {Sho} from '@mui/icons-material'
import {Link} from 'react-router-dom'
export default function Header() {
  const {myCart} = useContext(CartContext)
  const articlesInCart = myCart.reduce((acc,product)=>acc + product.qqt,0)
  return (
    <Grid container spacing={2} style={{justifyContent:"space-arround"}}>
      <Grid item sx={12} md={2}>
         <Link to="/"><CardMedia component="img"  height="50" image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/ITunes_Store_logo.svg/2560px-ITunes_Store_logo.svg.png" alt="logo"/></Link>
      </Grid>
      <Grid item sx={12} md={10} style={{display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Box sx={{ display: 'flex',  alignItems: 'center', textAlign: 'center' }}>
        <Link to="/dashboard" style={{ textDecoration: 'none',color:"black" }}><Typography sx={{ minWidth: 100}}>Dashboard</Typography></Link>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Button color="secondary" variant="contained">CART {articlesInCart} PRODUCTS</Button>
        </Box>
        </Grid>
    </Grid>
  )
}
