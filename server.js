const express = require('express');
const routes = require('./routes/routes.js');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static('public'));
app.use(routes)


app.listen(PORT, () => 
    console.log(`Now on port ${PORT}`)
);