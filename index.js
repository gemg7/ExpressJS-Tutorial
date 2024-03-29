const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const router = require('./routes/api/members');
const members = require('./Members');

const app = express();

// Init middleware
// app.use(logger);

// handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Homepage route
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members
}));

// Not static folder \/

// app.get('/', function(req, res){
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Set static folder

app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = 5000;

app.listen(PORT, () => console.log('Server started on port ' + PORT));