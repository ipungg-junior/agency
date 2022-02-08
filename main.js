const sys = require('./dependencies');
const App = sys.App;
require('dotenv').config();
// Custom define require
const routeAccount = require('./routes/account');
const routeHome = require('./routes/home');

//set template engine and express static
App.set('view engine', 'ejs');
App.use('/static', sys.express.static(sys.publicPath));
App.use(sys.session({secret: process.env.SECRET_SESSION}));

// Route Configurations from './routes'
App.use('/', routeHome);
App.use('/account', routeAccount);


sys.server.listen(8000, () => {
    console.log('Start server at 8000');
})