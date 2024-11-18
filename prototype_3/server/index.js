const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' }); 

const metadataFile = path.join(__dirname, 'uploads', 'metadata.json');
let metadata = [];

if (fs.existsSync(metadataFile)) {
  metadata = JSON.parse(fs.readFileSync(metadataFile, 'utf8'));
}

app.use(cors());
app.use(express.static('uploads'));

app.post('/upload', upload.single('model'), (req, res) => {
  if (req.file) {
    const fileData = {
      filename: req.file.filename,        
      originalname: req.file.originalname 
    };

    metadata.push(fileData); 
    fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2)); 

    res.status(200).json(fileData); 
  } else {
    res.status(400).send({ error: 'File upload failed' });
  }
});

app.get('/models', (req, res) => {
  res.status(200).json(metadata); 
});


app.listen(5000, () => console.log('Server running on port 5000'));
