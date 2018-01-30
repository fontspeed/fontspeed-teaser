const fs = require("fs-extra");
const pify = require("pify");
const opentype = require("opentype.js");

class FontToSvg {
  constructor(id, str) {
    this.id = id;
    this.str = 'font speed' || str;
    this.fontSize = 72;
  }

  setFontSize(fontsize) {
    this.fontSize = fontsize;
  }

  async load(fontFile) {
    this.font = await pify(opentype.load)(fontFile);
  }

  getGlobalPath() {
    return this.font.getPath(this.str, 0, 0, this.fontSize);
  }

  getPaths() {
    return this.font.getPaths(this.str, 0, 0, this.fontSize);
  }

  getAdvanceWidth() {
    return this.font.getAdvanceWidth(this.str, this.fontSize);
  }

  getHeight() {
    let path = this.getGlobalPath();
    let box = path.getBoundingBox();
    return Math.abs(box.y2 - box.y1);
  }

  getLettersSVG() {
    let viewBox = {
      x: 0,
      y: 0,
      width: this.getAdvanceWidth(),
      height: this.getHeight()
    };
    let paths = [];

    this.getPaths().forEach(function(path, j) {
      let box = path.getBoundingBox();
      paths.push( `<path id="${this.id}-${j}" class="${this.id}" d="${path.toPathData(4)}"></path>` );

      viewBox.x = Math.min(box.x1, viewBox.x);
      viewBox.y = Math.min(box.y1, viewBox.y);
      // viewBox.width = viewBox.width + Math.abs(box.x2 - box.x1);
      viewBox.height = Math.max(Math.abs(box.y2 - box.y1), viewBox.height);
    }.bind(this));

    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="${this.id}" width="${viewBox.width}" height="${viewBox.height}" preserveAspectRatio="xMidYMid" viewBox="${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}">${paths.join("\n")}</svg>`;
  }
}

module.exports = FontToSvg;
