import React, { useState } from "react";
import FileUploader from "./components/FileUploader";
import ModelList from "./components/ModelList";
import ModelViewer from "./components/ModelViewer";
import StaticRoom from "./components/StaticRoom";

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
        {selectedModel ? (
          <h2>Mode : Visualisation 3D Model </h2>
        ) : (
          <h2>Mode : Room</h2>
        )}
      </header>

      <div className="main-content" style={{ width: "100%", height: "90vh" }}>
        <FileUploader onUploadSuccess={refreshModels} />
        <ModelList onSelectModel={setSelectedModel} reloadModels={reloadModels} />
        {selectedModel ? (
          <ModelViewer model={selectedModel} />
        ) : (
          <StaticRoom />
        )}
      </div>
    </div>
  );
}

export default App;
