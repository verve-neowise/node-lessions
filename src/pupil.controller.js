const { groups, pupils } = require('./data')

exports.pupilsPage = (req, res) => {
    res.render('pupils', {
        pupils,
        groups
    })
}

exports.deletePupil = (req, res) => {
    const id = +req.query.id
    const index = pupils.findIndex(pupil => pupil.id == id)
    pupils.splice(index, 1)
    res.redirect('/pupils')
}

