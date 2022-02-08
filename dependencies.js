var path = require('path');
const publicPath = path.join(__dirname, "/public");
const express = require('express');
const session = require('express-session');
const http = require('http');
const App = express();


let server = http.createServer(App);


module.exports = {
    publicPath,
    express,
    http,
    session,
    App,
    server
}