const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' }); // Dossier où les fichiers sont stockés

// Fichier pour stocker les métadonnées
const metadataFile = path.join(__dirname, 'uploads', 'metadata.json');
let metadata = [];

// Charger les métadonnées existantes (si le fichier existe)
if (fs.existsSync(metadataFile)) {
  metadata = JSON.parse(fs.readFileSync(metadataFile, 'utf8'));
}

app.use(cors());
app.use(express.static('uploads'));

// Endpoint pour uploader un fichier
app.post('/upload', upload.single('model'), (req, res) => {
  if (req.file) {
    const fileData = {
      filename: req.file.filename,        // Nom généré par Multer
      originalname: req.file.originalname // Nom original du fichier
    };

    metadata.push(fileData); // Ajoute les métadonnées
    fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2)); // Sauvegarde dans le fichier JSON

    res.status(200).json(fileData); // Retourne les métadonnées au frontend
  } else {
    res.status(400).send({ error: 'File upload failed' });
  }
});

// Endpoint pour obtenir la liste des fichiers
app.get('/models', (req, res) => {
  res.status(200).json(metadata); // Retourne toutes les métadonnées
});

// Démarre le serveur
app.listen(5000, () => console.log('Server running on port 5000'));
