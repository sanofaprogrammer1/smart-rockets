var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index.html');
});

app.listen(PORT, ()=> { console.log('Application running on port ',PORT)});
