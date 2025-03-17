import Express from 'express';
import usersRouter from './router.mjs';

const app = Express();
app.use(Express.static('public')); // For serving static content from your app

app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.send("Hello")
});

app.listen(3000, () => console.log('Running on 3000'));