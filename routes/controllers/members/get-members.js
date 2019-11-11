module.exports = (req, res) => {
    const { organization } = req.params;

    Member.find({ organization })
    .sort({followers: -1})
    .then(members => {
        if(members.length === 0){
            return res.status(400).json({msg: 'There are currently no member registered for this organization.'})
        }
        return res.status(200).json({members})
    }).catch(err => {
        res.status(400).json({ msg: err.message })
    })

}