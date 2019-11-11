module.exports = (req, res) => {
    const { organization } = req.params;

    Comment.find({organization, status:'active'})
    .then(comments => {
        if(comments.length===0){
            return res.status(200).json({msg: `There are currently no comments for the organization: ${organization}`})
        }
        return res.status(200).json({comments})
    }).catch(err => {
        res.status(400).json({ msg: err.message })
    })

}