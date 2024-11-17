import React, { useState } from "react";
import FileUploader from "./components/FileUploader";
import ModelList from "./components/ModelList";
import ModelViewer from "./components/ModelViewer";

function App() {
  const [selectedModel, setSelectedModel] = useState(null);
  const [reloadModels, setReloadModels] = useState(false); 

  
  const refreshModels = () => {
    setReloadModels((prev) => !prev); 
  };

  return (
    <div className="App">
      <header>
        <h1>3D Object Viewer</h1>
      </header>
      <div className="main-content">
        {}
        <FileUploader onUploadSuccess={refreshModels} />

        {}
        <ModelList onSelectModel={setSelectedModel} reloadModels={reloadModels} />

        {}
        {selectedModel && <ModelViewer model={selectedModel} />}
      </div>
    </div>
  );
}

export default App;
