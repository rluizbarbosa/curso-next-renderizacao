export async function getServerSideProps(){

    const resposta = await fetch("http://localhost:3000/api/produtos")
    const produtos = await resposta.json()
    return {
        props: {
            produtos
        }
    }
}


export default function Dinamico2(props) {


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
            <h1>Dinamico #02</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}