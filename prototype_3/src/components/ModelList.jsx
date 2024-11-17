import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ModelList({ onSelectModel, reloadModels }) {
  const [models, setModels] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/models')
      .then((res) => setModels(res.data))
      .catch((error) => console.error('Error fetching models', error));
  }, [reloadModels]); 

  return (
    <div className="model-list">
      {models.map((model) => (
        <div
          key={model.filename}
          className="model-item"
          onClick={() => onSelectModel(model)} 
        >
          {model.originalname} {}
        </div>
      ))}
    </div>
  );
}

export default ModelList;
