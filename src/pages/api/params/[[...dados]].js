export default function dados (req, res) {
    res.status(200).json({
        params: req.query
    })
}