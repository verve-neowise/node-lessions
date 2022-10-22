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

exports.addPupil = (req, res) => {
    const { name, surname, phone, group } = req.body

    const findGroup = groups.find(g => g.id == group)

    const pupil = {
        id: pupils.length,
        name,
        surname,
        phone,
        group: findGroup.name
    }

    pupils.push(pupil)

    res.redirect('/pupils')
}