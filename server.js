const express = require('express');
const port = 3000;
const booksRouter = require('./routes/books');
const countriesRouter = require('./routes/countries'); // Import the countries router

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {    
    res.render('index');
});

app.use('/books', booksRouter);
app.use('/countries', countriesRouter); // Use the countries router

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
