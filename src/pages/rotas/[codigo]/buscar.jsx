import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Buscar () {
    const router = useRouter()
    const codigo = router.query.codigo

    return (
        <div>
            <h1>Rotas / {codigo} / Buscar</h1>
            <Link passHref href="/rotas">
                <button>Voltar</button>
            </Link>
        </div>
    )
}