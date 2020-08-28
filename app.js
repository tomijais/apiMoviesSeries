const express = require('express');
const app = express();
const cors = require('cors')
const moviesRouter = require('./routes/moviesRouter')
const seriesRouter = require('./routes/seriesRouter')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())

app.use('/movies', moviesRouter);
app.use('/series', seriesRouter);



app.listen(3000, function() {
    console.log("El servidor está corriendo");
})