const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

// the file name as an entry point for postcss compilation
// also used to define the output filename in our output /css folder.
const fileName = "styles";

module.exports = class {
  async data () {
    const rawFilepath = path.join(__dirname, `./${fileName}.scss`);
    return {
      permalink: `css/${fileName}.css`,
      rawFilepath,
      rawCss: await fs.readFileSync(rawFilepath)
    };
  };
  async render ({ rawCss, rawFilepath }) {
    return await postcss([
      // require('postcss-comment'),
      require('precss'),
      require('postcss-import'),
      require('postcss-mixins'),
      require('cssnano'),
      autoprefixer
    ])
    .process(rawCss, { from: rawFilepath })
    .then(result => result.css);
  };
}