require('dotenv').config();
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
const auth_ctrl = require('./controllers/auth_controller');
const newBuild_ctrl = require('./controllers/newBuild_controller');
const compBuild_ctrl = require('./controllers/completedBuilds_controller');

const app = express();
const {SERVER_PORT, DB_CONNECTION, SESSION_SECRET} = process.env;

app.use(bodyParser.json());
 /* session goes here */

 massive(DB_CONNECTION).then(db => {
   app.set('db', db);
   app.listen(SERVER_PORT, () => 
   console.log(`Port ${SERVER_PORT} finna be lit`)
   );
 });

 // authentication
 app.post('/auth/register', auth_ctrl.register)
 app.post('/auth/login', auth_ctrl.login)
 app.post('/auth/logout', auth_ctrl.logout)

 // new build
 app.get('/api/cpus', newBuild_ctrl.getcpus)
 app.get('/api/mobos', newBuild_ctrl.getmobos)