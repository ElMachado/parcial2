/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/utils */ \"./src/js/utils.js\");\n\n\nconst el = document.createElement(\"div\");\nconst objAttr = {\n  class: \"inn-container home\"\n};\nlet total = 2500701;\nconst children = [Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\"i\", {\n  class: \"fas fa-camera\"\n}), Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\"p\", {\n  class: \"home__banner__text\"\n}, ['Sign language']), Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\"img\", {\n  class: \"home__img\",\n  src: \"src/images/e.png\",\n  alt: \"Model\"\n}), Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\"div\", {\n  class: \"home__letras\"\n}, [`<p>e</p>`]), Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\"div\", {\n  class: \"home__letras\"\n}, [`<p>i</p>`]), Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\"div\", {\n  class: \"home__letras\"\n}, [`<p>l</p>`]), Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\"div\", {\n  class: \"home__letras\"\n}, [`<p>o</p>`]), Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\"div\", {\n  class: \"home__letras\"\n}, [`<p>r</p>`]), Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\"div\", {\n  class: \"home__letras\"\n}, [`<p>t</p>`]), Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\"div\", {\n  class: \"home__letras\"\n}, [`<p>v</p>`]), Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\"div\", {\n  class: \"home__letras\"\n}, [`<p>w</p>`])];\nconst app = Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(el, objAttr, children);\nconsole.log(app);\nconst root = document.getElementById(\"root\");\nroot.appendChild(app);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: addAttributes, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addAttributes\", function() { return addAttributes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/**\n * Add attributes to an HTMLElement instance\n * \n * @param {HTMLElement} el an HTMLInstance\n * @param  {object} objAttr attributes of HTML elements\n * @example\n * \n * const el = document.createElement('div')\n * addAttributes(el, { class: 'root' })\n * <div class=\"root\"></div>\n */\nfunction addAttributes(el, objAttr) {\n  Object.keys(objAttr).forEach(attr => {\n    el.setAttribute(attr, objAttr[attr]);\n  });\n}\n/**\n * @param {HTMLElement || string} type type of HTML element\n * @param {object} objAttr attributes of HTML elements\n * @param {Array} children children of this element\n * @returns {HTMLElement} HTML elements and their children\n */\n\nfunction createElement(type, objAttr, children) {\n  const el = type instanceof HTMLElement ? type : document.createElement(type);\n  addAttributes(el, objAttr);\n\n  if (children && children.length >= 0) {\n    children.forEach(child => {\n      child instanceof HTMLElement ? el.appendChild(child) : el.innerHTML += child;\n    });\n  }\n\n  return el;\n}\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/styles.scss?");

/***/ })

/******/ });