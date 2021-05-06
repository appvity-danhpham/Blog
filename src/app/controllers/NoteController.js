class NoteController {

    // [GET] /note
    index(req, res) {
        res.render('note');
    }

    // [GET] /note/:slug
    show(req, res) {
        res.send('note detail');
    }
}

module.exports = new NoteController;