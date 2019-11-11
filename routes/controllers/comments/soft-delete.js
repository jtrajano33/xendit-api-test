module.exports = (req, res) => {
    const { organization } = req.params;

    Comment.updateMany({organization, status:'active'},{organization, status: 'deleted'})
    .then(comments => {
        return res.status(200).json({msg: 'Comments deleted',comments})
    }).catch(err => {
        res.status(400).json({ msg: err.message })
    })

}