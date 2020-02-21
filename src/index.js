import express from 'express';

import packageInfo from '../package.json';
import bot from './bot.js';
import { googleDrive } from './services';

googleDrive.files.list({}, (err, res) => {
  if (err) throw err;
  const files = res.data.files;
  if (files.length) {
    files.map(file => {
      console.log(file);
    });
  } else {
    console.log('No files found');
  }
});

const app = express();
bot.launch();
app.get('/', function(req, res) {
  res.json({ version: packageInfo.version });
});

const server = app.listen(process.env.PORT || 3000, function() {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Web server started at http://%s:%s', host, port);
});
