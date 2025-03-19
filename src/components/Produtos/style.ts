import styled from "styled-components"
import variaveis from "../../styles/variaveis"
export const Container = styled.div`
    margin: 1rem auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    max-width: 950px;
    width: 100%;

`
export const ContainerCard = styled.div`
    margin: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap; 
    gap: 10px;
`

export const Image = styled.img`
    max-width: 260px;
    width: 100%;
    height: 280px;
    display: block;
    border-radius: 20px;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        transform: scale(1.05); /* Aumenta um pouco a imagem ao passar o mouse */
        opacity: 0.8; /* Diminui a opacidade ao passar o mouse */
    }

`
export const Button = styled.button`
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    border: none;
    border: 1px solid #fff;
    background-color: ${variaveis.corDeFundoBotao};
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px;
    position: absolute;
    bottom: 80px;
    right: 32px;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #EEF1DA;
    }
    img {
        width: 21px;
        height: 20px;
    }
`
export const Itens = styled.div`
    padding-top: 20px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    span {
        font-size: 13px;
        color: ${variaveis.corTexto};
        font-weight: bold;
    }
    h3, p {
        font-weight: bold;
        font-size: 16px;
    }
`