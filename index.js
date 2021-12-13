const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 80;

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send(req.query.sense)
});

app.listen(port, () => {
    console.log(`server on port ${port}`)
})