const express = require('express');
const app = express();
const port = 8000;

require('./server/config/mongoose.config');

app.use(express.json(), express.urlencoded({extended: true}));

const AllTheJokes = require('./server/routes/jokes.routes')(app);

app.listen(port, () => console.log(`The server is all fired up and running on port ${port}!! Now, tell some jokes!!!`));