import Express from 'express';

const router = Express.Router();

router.get('/new', (req, res) => {
    res.send("Creating new user");
})

export default router;