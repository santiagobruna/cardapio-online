import { RootReducer } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./style";
import Produto from "../../models/Produto";
import { adicionar } from "../../store/reducers/carrinho";
const Produtos = () => {
    const produto = useSelector((state: RootReducer) => state.produto.itens);
    const dispatch = useDispatch();
    const handleClick = (produto: Produto) => {
        dispatch(adicionar(produto)); 
    }
    return (
        <>
            <S.Container>
                {produto.map((p) => (
                    <S.ContainerCard key={p.id}>
                        <S.Image src={p.imagem} alt='Imagem do produto' />
                        <S.Button type="button" onClick={() => handleClick(p)}>
                            <img src="./assets/icon-add-to-cart.png" alt="Ícone de carrinho" />
                            Adicionar ao carrinho
                        </S.Button>
                        <S.Itens>
                            <span>{p.nome}</span>
                            <h3>{p.descricao}</h3>
                            <p>R$ {p.preco.toFixed(2)}</p>
                        </S.Itens>
                    </S.ContainerCard>
                ))}

            </S.Container>
        </>
    )
}

export default Produtos;