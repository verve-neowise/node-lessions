let holodilnik = [
    'Anjir',
    'Anor',
    'Uzum',
    'Tarvuz'
]

exports.allFruits = (req, res) => {
    res.render('fruits', {
        title: 'All Fruits',
        holodilnik
    })
}

exports.addFruit = (req, res) => {
    res.render('add-fruit', {
        title: 'Add Fruit'
    })
}

exports.deleteFruit = (req, res) => {
    res.render('delete-fruit', {
        title: 'Delete Fruit'
    })
}

exports.managerAdd = (req, res) => {
    const fruit = req.query.fruit
    holodilnik.push(fruit)
    res.redirect('/')
}

exports.managerDelete = (req, res) => {
    const index = +req.query.index
    holodilnik.splice(index - 1, 1)
    res.redirect('/')
}