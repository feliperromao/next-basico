import { useRouter } from 'next/router'
import Link from 'next/link'

export default () => {
    const router = useRouter()
    const { id, name } = router.query

    return (
        <div>
            <h1>Rotas Params</h1>
            <h3>ID: {id}</h3>
            <h3>Nome: {name}</h3>
            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
        </div>
    )
}