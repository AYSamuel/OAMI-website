const { registerTransforms } = require('@tokens-studio/sd-transforms');
const StyleDictionary = require('style-dictionary');
const { readFileSync } = require('fs');
const path = require('path');

registerTransforms(StyleDictionary, {
  excludeParentKeys: true,
});

const configPath = path.join(__dirname, 'config.json');
const config = JSON.parse(readFileSync(configPath));

const sd = StyleDictionary.extend(config);

sd.cleanPlatform('output');
sd.buildPlatform('output');
