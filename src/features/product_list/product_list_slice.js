import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getProductList } from './product_list_repository';
const initialState = {
    productList: getProductList(),
    shoppingCart: [],
  };

export const productListSlice = createSlice({
  name:'productList',
  initialState,
  reducers:{
    addProductToCart:(state,action)=>{
        console.log(state.shoppingCart);
        let productId = action.payload;
        let productInCart = state.shoppingCart.filter(e=>e.id == productId);
        if(productInCart.length > 0){
            productInCart[0].count++;
        }else{
            let product = state.productList.filter(e=>e.id == productId)[0];
            state.shoppingCart.push({...product,count:1});
        }
    },
    removeProductFromCart:(state,action)=>{
        let productId = action.payload.id;
        let productInCart = state.shoppingCart.filter(e=>e.id == productId);
        if(productInCart.length == 1){
            state.shoppingCart = state.shoppingCart.filter(e=>e.id != productId);
        }else{
            productInCart.count--;            
        }
    }
  }
});

export const { addProductToCart, removeProductFromCart } = productListSlice.actions;
export const selectProductListState = (state) => state.productList;
export const selectShoppingCartState = (state) => state.shoppingCart;
export default productListSlice.reducer;