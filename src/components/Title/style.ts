import styled from "styled-components";

export const Titulo = styled.h2`
    color: #000000;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin: 20px 0;
`

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const ContainerItens = styled.div`
    display: flex;
    gap: 10px;
    @media(max-width: 768px){
        font-size: 24px;
    }
`