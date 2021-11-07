import Link from 'next/link'

export default function rotas() {
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
        </div>
    )
}