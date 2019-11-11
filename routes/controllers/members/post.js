module.exports = (req, res) => {
    const { name, followers, following } = req.body;
    const { organization } = req.params;

    Member.find({ organization, name })
        .then(member => {
            if (member.length !== 0) {
                return res.status(400).json({ msg: `${name} is already a member of ${organization}` })
            }

            else {
                const newMember = new Member({
                    name,
                    organization,
                    followers,
                    following
                });

                newMember.save().then(member => {
                    res.status(201).json({ msg: `Member Added to ${organization}`, member })
                })
            }
        }).catch(err => {
            res.status(400).json({ msg: err.message })
        })
}