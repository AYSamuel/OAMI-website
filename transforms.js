import { registerTransforms } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { readFileSync } from 'fs';

registerTransforms(StyleDictionary, {
  excludeParentKeys: true,
});

const configPath = new URL('./config.json', import.meta.url);
const config = JSON.parse(readFileSync(configPath));

const sd = StyleDictionary.extend(config);

sd.cleanPlatform('output');
sd.buildPlatform('output');
