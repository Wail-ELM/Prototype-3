const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.static('uploads'));

app.post('/upload', upload.single('model'), (req, res) => {
  if (req.file) {
    res.status(200).json({ filename: req.file.filename, originalname: req.file.originalname });
  } else {
    res.status(400).send({ error: 'File upload failed' });
  }
});

app.get('/models', (req, res) => {
  fs.readdir(path.join(__dirname, 'uploads'), (err, files) => {
    if (err) {
      return res.status(500).send({ error: 'Error retrieving files' });
    }
    res.status(200).json(files);
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));
