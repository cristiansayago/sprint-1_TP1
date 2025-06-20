
import path from 'path';

// Definir una ruta de archivo de ejemplo
const filePath = './data/example.txt';

// Obtener el directorio base
const dirName = path.dirname(filePath);
console.log('Directorio base:', dirName);

// Obtener el nombre del archivo sin extensión
const baseName = path.basename(filePath, '.txt');
console.log('Nombre del archivo:', baseName);

// Obtener la extensión del archivo
const extName = path.extname(filePath);
console.log('Extensión del archivo:', extName);




