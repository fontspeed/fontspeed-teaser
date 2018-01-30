const FontToSvg = require("./FontToSvg");
const FontToSvgData = require("./FontToSvgData");

(async function() {
  let data = new FontToSvgData();

  // let opensans = new FontToSvg("opensans");
  // opensans.setFontSize(72);
  // await opensans.load('assets/fonts/OpenSans-Regular.ttf');
  // data.add( await opensans.getLettersSVG('assets/svg/opensans.svg') );

  let roboto = new FontToSvg("roboto");
  roboto.setFontSize(144);
  await roboto.load('assets/fonts/Roboto-BlackItalic.ttf');
  data.add( await roboto.getLettersSVG('assets/svg/roboto.svg') );

  let eightbit = new FontToSvg("eightbit");
  eightbit.setFontSize(123);
  await eightbit.load('assets/fonts/8BitArtSansNeue.ttf');
  data.add( await eightbit.getLettersSVG('assets/svg/8bitart.svg') );

  // let slabo = new FontToSvg("slabo");
  // await slabo.load('assets/fonts/Slabo27px-Regular.ttf');
  // slabo.setFontSize(123);
  // data.add( await slabo.getLettersSVG('assets/svg/slabo.svg') );

  await data.write("_data/fontpaths.json");
})();
