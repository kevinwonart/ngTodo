const fs = require('fs').promises;
const path = require('path');

async function appendBakToFiles(directory) {
  try {
    const files = await fs.readdir(directory, { withFileTypes: true });
    for (const file of files) {
      const fullPath = path.join(directory, file.name);
      if (file.isDirectory()) {
        await appendBakToFiles(fullPath); // Recurse into subdirectories
      } else {
        const bakPath = fullPath + '.bak';
        await fs.rename(fullPath, bakPath);
        console.log(`Renamed ${fullPath} to ${bakPath}`);
      }
    }
  } catch (error) {
    console.error('Error appending .bak to files:', error);
  }
}

// Start the renaming process in ./src/app directory
appendBakToFiles(path.join(process.cwd(), 'src/app'));

