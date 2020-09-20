import express from 'express';

import routes from './routes';

const app = express();

// acho que é isso, né?
app.use(routes);

app.get('/', (request, response) => {
    return response.json({ message: 'Hello world' });
})

app.listen(3333, () => {
    console.log('Server started on port 3333 🐶😺');
});
