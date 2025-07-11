export async function getStaticProps(){

    const resposta = await fetch("http://localhost:3000/api/produtos")
    const produtos = await resposta.json()
    return {
        props: {
            produtos
        }
    }
}


export default function Estatico4(props) {


    function renderizarProdutos(){
        return props.produtos.map(produto => {
            return (
                <li key={produto.id}>
                    {produto.id} - {produto.nome} tem o preço de R${produto.preco}<br/>
                </li>
            )
        })
    }

    return (
        <div>
            <h1>Estático #04</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}