const groups = []
// 

exports.groupPage = (req, res) => {
    res.render('groups', {
        groups
    })
}

exports.addGroup = (req, res) => {
    const name = req.body.name
    const group = {
        id: groups.length,
        name
    }
    groups.push(group)
    res.redirect('/groups')
}

exports.deleteGroup = (req, res) => {
    const id = +req.query.id
    const index = groups.findIndex(group => group.id == id)
    groups.splice(index, 1)
    res.redirect('/groups')
}