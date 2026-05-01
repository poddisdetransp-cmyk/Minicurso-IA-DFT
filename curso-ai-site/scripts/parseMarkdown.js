import fs from 'fs';
import path from 'path';

const markdownFile = path.join(process.cwd(), '../curso_ia_detran_autoaprendizado.md');
const outputDir = path.join(process.cwd(), 'src/data');
const outputFile = path.join(outputDir, 'courseData.json');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

try {
  const content = fs.readFileSync(markdownFile, 'utf-8');
  
  // We split the document into modules based on lines starting exactly with "# "
  const lines = content.split('\n');
  const modules = [];
  
  let currentModule = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('# Módulo') || line.startsWith('# Apêndice') || line.startsWith('# IA Aplicada')) {
      if (currentModule) {
        modules.push(currentModule);
      }
      
      let title = line.replace('# ', '').trim();
      let id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      
      // Look ahead for the subtitle (##) if it exists right after, to make a better title
      let nextLineIndex = i + 1;
      let subtitle = '';
      if (nextLineIndex < lines.length && lines[nextLineIndex].startsWith('## ')) {
        subtitle = lines[nextLineIndex].replace('## ', '').trim();
      }
      
      let fullTitle = title;
      if (title.startsWith('Módulo') || title.startsWith('Apêndice')) {
         if (subtitle) {
           fullTitle = `${title} - ${subtitle}`;
         }
      } else {
        id = 'introducao';
        fullTitle = 'Introdução ao Curso';
      }
      
      currentModule = {
        id,
        title: fullTitle,
        shortTitle: title,
        content: line + '\n' // start building content
      };
    } else {
      if (currentModule) {
        currentModule.content += line + '\n';
      }
    }
  }
  
  if (currentModule) {
    modules.push(currentModule);
  }
  
  fs.writeFileSync(outputFile, JSON.stringify(modules, null, 2));
  console.log(`Successfully generated course data with ${modules.length} modules!`);
} catch (error) {
  console.error("Error generating course data:", error);
}
