const fs = require("fs-extra");
const pify = require("pify");

class FontToSvgData {
  constructor() {
    this.svgs = [];
  }

  add(svg) {
    this.svgs.push(svg);
  }

  toJSON() {
    return JSON.stringify({ svgs: this.svgs });
  }

  async write(filename) {
    await pify(fs.outputFile)(filename, this.toJSON());
  }
}

module.exports = FontToSvgData;
