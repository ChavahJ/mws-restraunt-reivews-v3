# Build Boilerplate: Static/ES6/SASS

A boilerplate for building a static app/website with ES6 and SASS.

This project was created to enable the easy, setup-free use of ES6 and SASS while creating a static website/app.

## Features

- Dev-server to aid development by automatically refreshing the browser whenever an edit is made to any of the source files.
- Build script that:
  - Converts all ES6 to browser friendly ES5.
  - Converts SASS to CSS and adds vendor prefixes to CSS rules.
  - Minifies, concatenates, and bundles all JavaScript and CSS files.
  - Compresses images.

# Installation

The only development dependency of this project is [Node.js](https://nodejs.org). Once Node is installed:

```
git clone https://github.com/mdziedzic/build-boilerplate-static-es6-sass.git
cd build-boilerplate-static-es6-sass
npm install
```

# Usage

## Development

Sample files are included in `source`. These files are meant to be replaced. The only constraint is that there must be a `source/index.js` and `source/index.html` file. All other files only need be inside `source` (nested sub-directories allowed).

`npm run start` to start up the dev-server. View site under development at: `http://localhost:8080`. As files are edited in `source` the browser will be updated.

## Build

`npm run build` to create a production build of the site in a `build` directory. This is a static build so it can be opened directly in a browser.

# Notes

## JavaScript, SASS, CSS files

This project uses Webpack which relies on a dependency graph. What this means as far as this project is concerned is that all JavaScript, SASS, and CSS files must be imported in `index.js` (or in files that can be accessed via `index.js`). See the sample included with the project at `source/index.js` for an example of how to do this.

## HTML and images

Nothing special needs to be don to HTML and image files apart from placing them somewhere in `source`. (Obviously images must be referenced by the HTML files and all HTML files must be accessible via `index.html`).

## Image Compression

The build script compresses the images. To disable image compression when running `npm run build`, simply remove the `--compress` flag in the `postbuild` script in `package.json`.

## Supported Browsers

Use the `browserslist` file to list what browsers the site supports. This affects what vendor prefixes get applied to the CSS, among other things. (See [https://github.com/ai/browserslist](https://github.com/ai/browserslist) for more information on how to use this file).

# Contributing

## Bug Reports & Feature Requests

Please use the [issue tracker](https://github.com/mdziedzic/build-boilerplate-static-es6-sass/issues) to report any bugs or file feature requests.

# Author

Michael Dziedzic ([michaeldziedzic.com](http://michaeldziedzic.com))

# License

The code is available under the [MIT license](LICENSE.txt).
