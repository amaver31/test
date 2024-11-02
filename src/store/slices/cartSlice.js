import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: [], // at the beging use this but after localstorage use this 
    cartTotalQty: 0,
    cartTotalPrice: 0
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCard(state, action) {
                // console.log(state);
                // state.cartItems.push(state)
                // console.log(action.payload);
                state.cartItems.push(action.payload)
                
                
        }
    }
})

export const { addToCard } = cartSlice.actions
export default cartSlice.reducer;

