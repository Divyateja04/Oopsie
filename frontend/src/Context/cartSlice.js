import { createSlice, current } from "@reduxjs/toolkit";

const initialCartState = {
    cart: {},
    totalQuantity: 0
}

export const cartSlice = createSlice({
    name: "Cart",
    initialState: initialCartState,
    reducers: {
        addToCart: (state, { payload }) => {
            if(state.cart[payload.id]){
                state.cart[payload.id].quantity++;
            }else{
                state.cart[payload.id] = {
                    ...payload,
                    quantity: 1
                }
            }
            state.totalQuantity += 1;
            console.log(current(state));
        },
        removeFromCart: (state, payload) => {
            if(state.cart[payload.id]){
                state.cart[payload.id].quantity--;
                state.totalQuantity -= 1;
            }
        }
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;