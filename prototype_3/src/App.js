import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import ModelList from './components/ModelList';

function App() {
  const [selectedModel, setSelectedModel] = useState(null);

  return (
    <div className="App">
      <header>
        <h1>3D Object Viewer</h1>
      </header>
      <div className="main-content">
        {}
        <FileUploader onUploadSuccess={(data) => console.log('File uploaded:', data)} />

        {}
        <ModelList onSelectModel={setSelectedModel} />

        {}
        {selectedModel && <p>Modèle sélectionné : {selectedModel}</p>}
      </div>
    </div>
  );
}

export default App;
