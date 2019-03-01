require('dotenv').config();
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
const auth_ctrl = require('./controllers/auth_controller');
const newBuild_ctrl = require('./controllers/newBuild_controller');
const compBuild_ctrl = require('./controllers/completedBuilds_controller');

const app = express();

const aws = require('aws-sdk');

const {SERVER_PORT, DB_CONNECTION, SESSION_SECRET, S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} = process.env;

// app.use( express.static( `${__dirname}/../build` ) );

app.use(bodyParser.json());
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

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

// edit user
app.put('/auth/user/:id', auth_ctrl.updatePic)

 // new build
 app.get('/api/cpus', newBuild_ctrl.cpus)
 app.post('/api/mobos', newBuild_ctrl.mobos)
 app.post('/api/ram', newBuild_ctrl.ram)
 app.post('/api/case', newBuild_ctrl.case)
 app.post('/api/cooler', newBuild_ctrl.cooler)
 app.post('/api/gpu', newBuild_ctrl.gpu)
 app.post('/api/psu', newBuild_ctrl.psu)

 // S3
 app.get('/api/signs3', (req, res) => {
  aws.config = {
    region: 'us-west-2',
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  };

  const s3 = new aws.S3();
  const fileName = req.query['file-name'];
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read',
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
    };

    return res.send(returnData);
  });
});