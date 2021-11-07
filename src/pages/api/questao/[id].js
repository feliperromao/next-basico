export default (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).send()
    }

    const { id } = req.query

    return res.status(200).json({
        id,
        enunciado: "Qual sua cor preferida?",
        respostas: [
            'Branca', 'Vermelha', 'Amarela', 'Verde'
        ]
    })
}