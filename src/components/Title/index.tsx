import { useSelector } from "react-redux";
import * as S from "./style";
import { RootReducer } from "../../store";

const Title = () => {
    const carrinho = useSelector((state: RootReducer) => state.carrinho.itens);
    const valorTotal = carrinho.reduce((acc, produto) => {
        return acc + produto.preco;
    }, 0)
    return (
        <>
            <S.ContainerHeader>
                <S.Titulo>Cardápio</S.Titulo>   
                <S.ContainerItens>
                    <img src="./assets/icon-add-to-cart.png" alt="Ícone do carrinho" />
                    <span>
                        {carrinho.length} itens,
                    </span>
                    <span>
                        valor total: R$ {valorTotal.toFixed(2)}
                    </span>
                </S.ContainerItens>
            </S.ContainerHeader>
        </>
    )
}

export default Title;