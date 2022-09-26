const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;


//tells the server.js to use the client folder
app.use(express.static('../client/'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//requiring the html route
require('./routes/htmlRoutes.js')(app);

app.listen(PORT, function() {
    console.log(`Now listening on port: ${PORT}`);
});