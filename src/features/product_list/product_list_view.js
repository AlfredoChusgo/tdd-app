import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import productListReducer, {addProductToCart, removeProductFromCart} from './product_list_slice';
import {selectProductListState,selectShoppingCartState } from '../product_list/product_list_slice';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProductListView() {
    const dispatch = useDispatch();
    const { productList, shoppingCart } = useSelector(selectProductListState);
    const productListItems = productList.map(e =>
        <Card sx={{ maxWidth: 345 }} key={e.id}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={e.imageUrl}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {e.name}
                </Typography>
                <Typography variant="h4" color="text.secondary">
                    Price : {e.price} $
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => dispatch(addProductToCart(e.id))}>Add to Cart</Button>
            </CardActions>
        </Card>
    );
    const shoppingCartItems = shoppingCart.map(e =>
        <Card sx={{ maxWidth: 345 }} key={e.id}>
            {/* <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={e.imageUrl}
          /> */}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {e.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price : {e.price}$ x Count : {e.count}
                </Typography>
            </CardContent>
        </Card>);
    const totalAmount = shoppingCart.reduce((accumulator,currentValue)=> accumulator + (currentValue.price*currentValue.count),0);
    return (
        <React.Fragment>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="h2" gutterBottom>
                                Product List
                            </Typography>
                            {productListItems}
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h2" gutterBottom>
                                Shopping Cart
                            </Typography>
                            {shoppingCartItems} 
                            <Typography variant="h6" gutterBottom>
                                Total : {totalAmount}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default ProductListView;