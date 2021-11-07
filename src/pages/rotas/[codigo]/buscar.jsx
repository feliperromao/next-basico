import { useRouter } from 'next/router'

export default () => {
    const router = useRouter()
    const codigo = router.query.codigo

    return (
        <div>
            <h1>Rotas / {codigo} / Buscar</h1>
        </div>
    )
}