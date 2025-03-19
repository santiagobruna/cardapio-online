import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Produto from "../../models/Produto";

// carrinhoSlice.ts
type carrinhoState = {
    itens: Produto[], // Lista dos itens que foram adicionados ao carrinho
};

const initialState: carrinhoState ={
    itens: []
}

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<Produto> ) => {
            const produto = action.payload;
            if(state.itens.find((p) => p.id === produto.id)){ // verificando se ja existe no
                alert('Este produto já foi adicionado')
            }else {
                state.itens.push(produto) // adicionando
            }
        }
    }
})
export const { adicionar} = carrinhoSlice.actions;
export default carrinhoSlice.reducer;