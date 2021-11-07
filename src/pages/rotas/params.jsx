import { useRouter } from 'next/router'

export default () => {
    const router = useRouter()

    const { id, name } = router.query

    return (
        <div>
            <h1>Rotas Params</h1>
            <h3>ID: {id}</h3>
            <h3>Nome: {name}</h3>
        </div>
    )
}