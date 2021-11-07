const usersList = []

export default (req, res) => {
    if (req.method === 'GET') {
        return get(req, res)
    }

    if (req.method === 'POST') {
        return post(req, res)
    }
    
    return res.status(405).send()
}

function get(req, res) {
    return res.json(usersList)
}

function post(req, res) {
    const data = JSON.parse(req.body)

    usersList.push(data)

    return res.status(201).json({
        message: 'User was created successfully',
        user: { name: data.name, age: data.age }
    })
}