export default (req, res) => {
    res.status(200).json({
        params: req.query
    })
}