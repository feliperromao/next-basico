import { useState } from "react"

export default () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [users, setUsers] = useState([])

    async function salvarUsuario() {
        await fetch("/api/form", {
            method: 'POST',
            body: JSON.stringify({ name, age })
        })

        const resp = await fetch('/api/form')
        const usersList = await resp.json()
        setUsers(usersList)
    }

    function renderUsers() {
        return users?.map((user, index) => <li key={index}>{user.name} ({user.age})</li>)
    }

    return (
        <div>
            <h1>Integrando com API</h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <input type="number" value={age} onChange={e => setAge(e.target.value)} />

            <button onClick={salvarUsuario}>Enviar</button>

            <ul>
                {renderUsers()}
            </ul>
        </div>
    )
}