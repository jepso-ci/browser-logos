[![Build Status](https://travis-ci.org/jepso-ci/browser-logos.png?branch=master)](https://travis-ci.org/jepso-ci/browser-logos)
# browser-logos

  A collection of SVG logos for different web-browsers:

![demo](https://jepso-ci.com/api/proxy/jepso-ci/browser-logos/master/test/render-results/test-pane-inline.svg)

## Usage

  For each of `ie`, `chrome`, `firefox`, `opera`, `android` and `apple`, you can do the following:

```javascript
var logos = require('browser-logos');

//get the default svg text, e.g. for use in an image tag:
//  <image src="ie.svg" />
//by default it will have width and height of 256 and this
//will scale properly if you add width/height properties
//to the image tag
logos.ie();

//get an image which is scaled to specified dimensions (for use inline in another svg):
logos.ie({
  x: 0,
  y: 0,
  width: 100,
  height: 100
});
```

## Sources

  The original SVG logos, which have later been simplified by hand, can be downloaded here:

   - [ie](http://upload.wikimedia.org/wikipedia/commons/1/1b/Internet_Explorer_9_icon.svg)
   - [chrome](http://upload.wikimedia.org/wikipedia/en/d/d0/Chrome_Logo.svg)
   - [firefox](http://upload.wikimedia.org/wikipedia/en/e/e3/Firefox-logo.svg)
   - [opera](http://upload.wikimedia.org/wikipedia/commons/d/d0/Opera_O.svg)
   - [android](http://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg)
   - [apple](http://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg)

So far I only have a png for Safari [here](http://upload.wikimedia.org/wikipedia/en/6/61/Apple_Safari.png)