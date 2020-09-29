import 'reflect-metadata';
import express from 'express';

import routes from './routes';

import './database';

const app = express();

app.use(routes);

app.get('/', (request, response) => {
    return response.json({ message: 'Hello world' });
})

app.listen(3333, () => {
    console.log('Server started on port 3333 🐶😺');
});
