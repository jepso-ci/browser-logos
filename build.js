var fs = require('fs');
var ls = fs.readdirSync;
var read = fs.readFileSync;
var write = fs.writeFileSync;
var uglify = require('uglify-js').minify;
var path = require('path');
var join = path.join;

var images = ls(join(__dirname, 'images'));

images.forEach(function (image) {
  var src = read(join(__dirname, 'images', image), 'utf8');
  src = 'module.exports = ' + JSON.stringify(src.replace(/^ +/gm, '').replace(/\r/g, ''));
  fs.writeFileSync(join(__dirname, 'js-images', image.replace('.svg', '.js')), uglify(src, {fromString: true}).code, 'utf8');
});