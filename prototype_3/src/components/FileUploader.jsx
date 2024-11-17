import React, { useState } from 'react';
import axios from 'axios';

function FileUploader({ onUploadSuccess }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]); 
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('model', file);
      try {
        const response = await axios.post('http://localhost:5000/upload', formData);
        console.log("File uploaded:", response.data); 
        onUploadSuccess(); 
      } catch (error) {
        console.error('File upload failed', error);
      }
    }
  };

  return (
    <div className="file-uploader">
      <input id="fileInput" type="file" accept=".glb,.obj" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Model</button>
    </div>
  );
}

export default FileUploader;
