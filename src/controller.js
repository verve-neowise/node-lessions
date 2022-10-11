const list = []

exports.todos = (req, res) => {

    for (let i = 0; i < list.length; i++) {
        list[i].index = i + 1
    }

    res.render('todos', {
        massiv: list
    })
}

exports.addTodo = (req, res) => {
    const text = req.query.text
    list.push({
        index: list.length + 1,
        text: text
    })

    res.redirect('/')
}

exports.clear = (req, res) => {
    list.splice(0)
    res.redirect('/')
}

exports.deleteIndex = (req, res) => {
    const index = req.query.index
    list.splice(index, 1)
    res.redirect('/')
}