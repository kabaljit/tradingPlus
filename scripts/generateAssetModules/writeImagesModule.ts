import * as path from 'path';

import { ensureDir } from 'fs-extra';
import { promise } from 'glob-promise';
import { camelCase, lowerFirst } from 'lodash';

import writeModule, { AssetSection } from './writeModule';

async function writeImagesModule(imagesPath: string, outPath: string) {
  await ensureDir(imagesPath);

  const images: string[] = await promise(path.join(imagesPath, '**/*.{jpg,jpeg,png,gif,webp}'));
  
  const duplicates = images
    .map((p) => path.parse(p).name)
    .map((n) => lowerFirst(camelCase(n)))
    .filter((v, i, a) => a.indexOf(v) !== i);

  if (duplicates.length > 0) {
    console.error(`Found multiple assets with the same name in camel-case: ${duplicates.join(', ')}`);
    console.error('Please have only one asset with the same name.');
    return;
  }

  // Ensure the output directory exists
  await ensureDir(outPath);

  // Build asset sections
  const assetSections: AssetSection[] = [
    {
      name: 'Image assets by reference',
      assets: images
        .map((assetPath) => path.parse(assetPath))
        .filter((assetPath) => !assetPath.name.match(/@([2-4])x$/))
        .map((assetPath) => ({
          name: lowerFirst(camelCase(assetPath.name)),
          path: path.join(path.relative(outPath, assetPath.dir), assetPath.base).replace(/\\/g, '\\\\'),
        })),
    },
  ];

  // Write module
  return writeModule(assetSections, path.join(outPath, 'index.ts'));
}

export default writeImagesModule;