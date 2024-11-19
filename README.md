# Prototype-3 Three.js - Wail El Majdoubi

Dit prototyoe is een webapplicatie die gebruikers in staat stelt om 3D-modellen te uploaden, te bekijken en te manipuleren. Daarnaast bevat het een isometrische interactieve kamer met objectmanipulatie.

---

## **Features**

### **1. 3D Modellen Uploaden**
- Ondersteunt `.glb` en `.obj` bestanden.
- Uploaden van 3d modellen.
- Modellen worden opgeslagen op de server.

### **2. Modellen Lijst**
- Toont een lijst van alle geüploade modellen.
- Gebruikers kunnen een model selecteren om te bekijken.

### **3. 3D Model Viewer**
- Ondersteunt zoom, rotatie rond geüploade modellen.

### **4. Interactieve Kamer**
- Isometrische kamer met interactieve objecten.
- Functies zoals:
  - Lamp aan/uit zetten.
  - Kleuren aanpassen.

---

## **Technologieën**

### **Frontend**
- **React.js**
- **React Three Fiber**: 3D-rendering met Three.js.


### **Backend**
- **Node.js** met **Express.js** voor het beheren van bestanduploads en API.

---

## **Installatie en Configuratie**

### **Vereisten**
- Node.js


### **Stappen**
1. Clone het project:
   ```bash
   git clone https://github.com/your-repository/3d-model-viewer.git
   cd 3d-model-viewer
   ```

2. Installeer de afhankelijkheden:
   ```bash
   npm install
   ```

3. Start de ontwikkelserver:
   ```bash
   npm start
   ```

4. Open de applicatie in je browser:
   ```
   http://localhost:3000
   ```

---


## **Hoe te gebruiken**

1. **Upload een 3D-model**
   - Klik op **Choose a 3d model** om een .glb of .obj bestand te kiezen.
   - Klik op **Upload Model** om het bestand op te slaan.

2. **Bekijk een model**
   - Selecteer een model uit de lijst.
   - Gebruik je muis om het model te roteren, zoomen.

3. **Interactie met de kamer**
   - Ga naar de interactieve kamer.
   - Gebruik knoppen om lampen aan/uit te zetten,en kleuren te wijzigen.

---

## **Volgende Stappen**
1. **Animaties toevoegen**
   - Gebruik react-spring voor dynamische animaties, zoals draaiende modellen.
2. **Cloudopslag integreren**
   - Opslag van geüploade bestanden op AWS S3 of een andere schaalbare service.
3. **Prestaties optimaliseren**
   - Implementatie van Level of Detail (LOD) om minder complexe versies van objecten te tonen op afstand.
4. **Fysica integreren**
   - Gebruik van cannon-es voor realistische botsingen en zwaartekracht.
5. **Foutmeldingen verbeteren**
   - Voeg gebruiksvriendelijke foutmeldingen toe.

---

## **Bronvermelding**

### **Gebruikte bronnen**

1. **[React Three Fiber Getting Started](https://r3f.docs.pmnd.rs/getting-started/introduction)**  
   Voor het begrijpen van de basisstructuur van R3F en het declaratief beheren van 3D-objecten.

2. **[R3F Loading Models](https://r3f.docs.pmnd.rs/tutorials/loading-models)**  
   Voor het correct laden en renderen van GLTF- en OBJ-bestanden.

3. **[Three.js Documentatie](https://threejs.org/docs/)**  
   Om inzicht te krijgen in camera's, objecten en het renderproces.

4. **[R3F Events and Interaction](https://r3f.docs.pmnd.rs/tutorials/events-and-interaction)**  
   Voor het implementeren van interacties zoals klikken en slepen.

5. **[ChatGPT](https://chatgpt.com/share/673bc0d0-70c8-800e-bfb4-dca1bf497413)**  
   Voor hulp met canvasinstellingen, CSS, interacties en modelcentrering.

6. **[Three.js Journey Tutorials](https://threejs-journey.com/lessons/what-is-webgl-and-why-use-three-js)**  
   Voor een overzicht van WebGL en hoe Three.js werkt in een webomgeving.

7. **[GLTFLoader Troubleshooting](https://discourse.threejs.org/t/gltfloader-cannot-be-found/42254)**  
   Voor oplossingen bij het laden van GLTF-bestanden.

8. **[OBJLoader Documentatie](https://threejs.org/docs/#examples/en/loaders/OBJLoader)**  
   Voor het integreren van oudere OBJ-bestanden in de applicatie.

9. **[YouTube: GLTF Modellen Laden](https://www.youtube.com/watch?v=Q7AOvWpIVHU)**  
   Voor praktische voorbeelden van het correct laden van GLTF-bestanden.

10. **[Youtube Video Tutorial](https://www.youtube.com/watch?v=M5nt1GamB_g)**  
   Voor het exporteren van modellen vanuit Blender naar een GLTF- of GLB-formaat.

---

