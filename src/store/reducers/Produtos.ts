import {createSlice } from "@reduxjs/toolkit";
import Produto from "../../models/Produto";

type produtoState = {
    itens: Produto[],
}

const initialState: produtoState = {
    itens: [
        {
            id: 1, 
            nome: "Waffle", 
            descricao: "Waffle with Berries", 
            preco: 6.50, 
            imagem: "./assets/image-waffle-tablet.jpg" 
        },
        {
            id: 2, 
            nome: "Baklava", 
            descricao: "Pistachio Baklava", 
            preco:  4.00, 
            imagem: "./assets/image-baklava-tablet.jpg" 
        },
        {
            id: 3, 
            nome: "Brownie", 
            descricao: "Salted Caramel Brownie", 
            preco: 5.50, 
            imagem: "./assets/image-brownie-tablet.jpg" 
        },
        {
            id: 4, 
            nome: "Cake", 
            descricao: "Red Velvet Cake", 
            preco: 9.50, 
            imagem: "./assets/image-cake-tablet.jpg" 
        },
        {
            id: 5, 
            nome: "Créme Brulée", 
            descricao: "Vanilla Bean Créme Brulée", 
            preco: 7.00, 
            imagem: "./assets/image-creme-brulee-tablet.jpg" 
        },
        {
            id: 6, 
            nome: "Macaron", 
            descricao: "Macaron Mix of Five", 
            preco: 8.00, 
            imagem: "./assets/image-macaron-tablet.jpg" 
        }, 
    ]
}

const ProdutoSlice = createSlice({
    name: 'produtos',
    initialState,
    reducers: {}
})
export default ProdutoSlice.reducer;