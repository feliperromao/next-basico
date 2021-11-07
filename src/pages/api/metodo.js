export default function metodo (req, res) {
    res.status(200).json({
        metodo: req.method
    });
}