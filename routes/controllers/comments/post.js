module.exports = (req, res) => {
    const { comment } = req.body;
    const { organization } = req.params;

    const newComment = new Comment({
        comment,
        organization
    });

    newComment.save().then(comment => {
            res.status(201).json({ msg: `Comment Added to ${organization}`, comment })
    }).catch(err => {
        res.status(400).json({msg: err.message})
    })
}