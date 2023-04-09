const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Define a static directory to serve static files from
app.use(express.static(path.join(__dirname, 'Public')));


app.get('*', (req, res) => {
  let filepath = path.join(__dirname, 'Public',
    req.url == '/' ? 'homepage.html' : `${req.url}.html`
  );

  console.log(filepath);

  let extname = path.extname(filepath);

  let contentType = 'text/html';

  switch (extname) {
    case '.js':
      contentType = 'text/javascript'
      break;

    case '.css':
      contentType = 'text/css'
      break;

    case '.json':
      contentType = 'application/json'
      break;

    case '.png':
      contentType = 'image/png'
      break;

    case '.jpg':
      contentType = 'image/jpg'
      break;
  }

  fs.readFile(filepath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        res.end(content, 'utf8');
      }
      else {
        res.end(`Server error : ${err.code}`);
      }
    }
    else {
      // no error
      res.end(content,'utf8');
    }
  })
});

const port = process.env.PORT || 7000;
const host = '127.0.0.1';

app.listen(port, host, () => console.log(`Server running at http://${host}:${port}`));
