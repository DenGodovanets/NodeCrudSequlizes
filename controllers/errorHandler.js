const errorHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next))
        .catch(err => res.status(500).send(err));
};

module.exports = errorHandler;
