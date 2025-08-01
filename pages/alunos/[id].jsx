export async  function getStaticPaths(){
    const resp = await fetch('http://localhost:3000/api/alunos/tutores')
    const ids = await resp.json()

    const paths = ids.map(id => {
        return { params: {id: `${id}`}}
    })

    return {
        fallback: false,
        paths
    }
}

export async function getStaticProps(context){
    const resp = await fetch(`http://localhost:3000/api/alunos/${context.params.id}`)
    const aluno = await resp.json()
    return{
        props: {
            aluno
        }
    }
}


export default function AlunoPorId(props){
    const { aluno } = props

    function rederizarAluno(){
        console.log(aluno)
        return (aluno != undefined) ? (
            <>
                <li>{aluno.id}</li>
                <li>{aluno.nome}</li>
                <li>{aluno.email}</li>
            </>
        ) : false
    }

    return ( 
        <div>
            <h1>Detalhes do Aluno</h1>
            <ul>
                {rederizarAluno()}
            </ul>
        </div>
    )
}