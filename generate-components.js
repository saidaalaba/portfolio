const fs = require('fs');
const path = require('path');

// Créer le dossier components s'il n'existe pas
const componentsDir = path.join(__dirname, 'src', 'components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

// Template de base pour chaque composant
const componentTemplate = (name) => `
import React from 'react';

const ${name} = () => {
  return (
    <section id="${name.toLowerCase()}" className="section-padding">
      <div className="container">
        <h2 className="section-title">${name}</h2>
        <p>Contenu du composant ${name} à compléter...</p>
      </div>
    </section>
  );
};

export default ${name};
`;

// Liste des composants à créer
const components = [
  'About', 'Education', 'Experience', 
  'Projects', 'Skills', 'Contact', 'Footer'
];

// Créer chaque fichier
components.forEach(component => {
  const filePath = path.join(componentsDir, `${component}.js`);
  fs.writeFileSync(filePath, componentTemplate(component));
  console.log(`✅ ${component}.js créé`);
});

console.log('🎉 Tous les composants ont été créés !');