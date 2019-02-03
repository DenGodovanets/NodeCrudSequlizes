const Author = require('../models').Author;
const Book = require('../models').Book;

module.exports = {
    getAll(req, res) {
        Author.findAll({
            include: [{
                model: Book,
                as: 'books'
            }]
        })
            .then(authors => {
                res.send(authors);
            });
    },
    getById(req, res) {
        return Author
            .findById(req.params.id, {
                include: [{
                    model: Book,
                    as: 'books',
                }]
            })
            .then(author => {
                if (!author) return res.send(404);
                return res.send(author);
            });
    },
    create(req, res) {
        const data = {
            name: req.body.name
        };
        return Author.create(data)
            .then(author => {
                res.status(201).send(author);
            });
    },
    delete(req, res) {
        return Author
            .findById(req.params.id)
            .then(author => {
                if (!author) return res.sendStatus(404);
                return author
                    .destroy()
                    .then(() => res.sendStatus(204));
            });
    },
    update(req, res) {
        const id = req.params.Id;
        Author.findById(req.params.id)
            .then(author => {
                if(!author) return res.sendStatus(404);
                author.update({
                    name: req.body.name || author.name
                })
                    .then(author => {
                        res.status(200).send(author);
                    });
            });
    }
};
