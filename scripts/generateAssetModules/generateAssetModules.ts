import * as path from 'path';


import writeImagesModule from './writeImagesModule';
import writeRootModule from './writeRootModule';


const imagesPath = path.resolve('./assets/images');
const imagesModuleOutPath = path.resolve('./src/data/images');

const rootModuleOutPath = path.resolve('./src/data/');

async function run() {
  console.log('Generating asset modules...');
  try {
    await Promise.all([
      writeImagesModule(imagesPath, imagesModuleOutPath),
      writeRootModule(rootModuleOutPath, ['images']),
    ]);
    console.log('Done!');
  } catch (error) {
    console.error(`Failed! ${error}`);
  }
}


run().catch((error) =>
  console.error('Failed to generate asset modules.', error)
);