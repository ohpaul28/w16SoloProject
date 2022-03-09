const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const illusionsRouter = require('./illusions.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/explore', illusionsRouter);

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});

module.exports = router;
