import * as fse from 'fs-extra';

import moduleHeader from './moduleHeader';

// TODO: Accept `modules: string[]` as first parameter which
// will have values like ['images', 'i18n'].
async function writeRootModule(outPath: string, submoduleNames: string[]) {
  await fse.ensureDir(outPath);

  const exports = submoduleNames.map(
    (name) => `export { default as ${name} } from './${name}';`
  );

  const moduleContents = `${moduleHeader}
${exports.join('\n')}
`;

  await fse.writeFile(`${outPath}/index.ts`, moduleContents);
}

export default writeRootModule;
