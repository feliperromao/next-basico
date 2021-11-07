import { useEffect, useState } from "react"

export default function Questao() {
    const [questao, setQuestao] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/questao/1234567890kk')
            .then(resp => resp.json())
            .then(setQuestao)
    }, [])

    function renderRespostas() {
        if (!questao) {
            return null
        }

        return questao?.respostas?.map(resp => <li key={resp}>{resp}</li>)
    }

    return (
        <div>
            <h1>Questão</h1>
            <div>
                <span>{questao?.id} - {questao?.enunciado}</span>
                <ul>
                    {renderRespostas()}
                </ul>
            </div>
        </div>
    )
}