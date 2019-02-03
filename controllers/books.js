const Book = require('../models').Book;
const Author = require('../models').Author;

module.exports = {
    getAll(req, res) {
        Book.findAll({
            include: [{
                model: Author,
                as: 'authors'
            }]
        })
            .then(books => {
                res.send(books);
            });
    },

    create(req, res) {
        const data = {
            name: req.body.name,
            year: req.body.year,
            shortDescription: req.body.shortDescription
        };
        return Book.create(data)
            .then(book => {
                return book.setAuthors(req.body.authors)
                    .then(() => res.status(201).send(book));
            });
    },
    getById(req, res) {
        return Book
            .findById(req.params.id, {
                include: [{
                    model: Author,
                    as: 'authors'
                }]
            })
            .then(book => {
                if (!book) return res.send(404);
                return res.send(book);
            });
    },
    delete(req, res) {
        return Book
            .findById(req.params.id)
            .then(book => {
                if (!book) return res.sendStatus(400);
                return book
                    .destroy()
                    .then(() => res.sendStatus(204));
            });
    },
    update(req, res) {
        const id = req.params.id;
        Book.findById(req.params.id)
            .then(book => {
                if(!book) return res.sendStatus(404);
                book.update({ 
                    name: req.body.name || book.name,
                    year: req.body.year || book.year,
                    shortDescription: req.body.shortDescription }
                )
                    .then(book => {
                        if (!req.body.authors) {
                            return res.send(book);
                        }
                        book.setAuthors(req.body.authors)
                            .then(() => res.send(book))
                    });
            });
    }
};
