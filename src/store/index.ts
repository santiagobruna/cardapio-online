import { configureStore } from "@reduxjs/toolkit";
import produtoReducer from './reducers/Produtos'
import carrinhoReducer from './reducers/carrinho'

export const store = configureStore({
    reducer: {
        produto: produtoReducer,
        carrinho: carrinhoReducer
    },
})
export type RootReducer = ReturnType<typeof store.getState>
export default store;