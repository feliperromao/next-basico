import Link from 'next/link'
import router, { useRouter } from 'next/router'

export default function rotas() {

    function navegacaoSimples(url) {
        router.push(url)
    }

    function navegacaoComParams() {
        router.push({
            pathname: "/rotas/params",
            query: {
                id: '123456kkk',
                name: 'Ana Bea'
            }
        })
    }

    return (
        <div>
            <h1>Rotas Index</h1>
            <ul>
                <li>
                    <Link href="/rotas/params?id=12&name=Ana">Ana (12)</Link>
                </li>

                <li>
                    <Link href="/rotas/1234/buscar">Buscar (123)</Link>
                </li>

                <li>
                    <Link href="/rotas/1234/Felipe">Felipe (123)</Link>
                </li>
            </ul>

            <div style={{display: 'flex', flexDirection: 'column' , alignItems: 'flex-start'}}>
                <button onClick={() => router.push('/rotas/1234/buscar')}>Buscar</button>
                <button onClick={() => navegacaoSimples('/rotas/1234/Felipe')}>Felipe</button>
                <button onClick={() => navegacaoComParams()}>Params</button>
            </div>
        </div>
    )
}