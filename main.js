/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bg.jpg */ "./src/img/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* * {\n  border: 1px solid red;\n} */\n\n:root {\n  font-family: 'Roboto', sans-serif;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  height: 100vh;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  /* background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('./img/bg.jpg'); */\n  background-color: #f1f3f4;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    \"header\"\n    \"main\"\n    \"footer\";\n}\n\nheader {\n  grid-area: header;\n  display: flex;\n  justify-content: center;\n  padding-top: 2rem;\n}\n\n.game-title {\n  font-size: 7rem;\n  font-weight: 600;\n}\n\n.main {\n  grid-area: main;\n  align-self: center;\n}\n\n.player-name-container {\n  background-color: #c2deec;\n  align-self: center;\n  padding: 0 1.5rem;\n  border: 1px solid #f1f3f4;\n  border-radius: 0.25rem;\n}\n\n.modal-place-ships-txt,\n.player1-name,\n.player2-name {\n  display: flex;\n  justify-content: center;\n  font-size: 1.9rem;\n  font-weight: 600;\n}\n\n.boards-container {\n  display: flex;\n  justify-content: center;\n  gap: 10rem;\n}\n\n.player1-board-container,\n.player2-board-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n[class=\"modal-place-ships-board\"],\n[class=\"player1-board\"],\n[class=\"player2-board\"] {\n  background-color: #c2deec;\n  display: grid;\n  width: 450px;\n  height: 450px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 10px solid #c2deec;\n  \n}\n\n.pos {\n  background-color: #269ad7;\n  border: 2.5px solid #c2deec;\n}\n\n.player2-board.pos:hover {\n  cursor: crosshair;\n  border: 5px double #f54140;\n}\n\n.modal-place-ships,\n.modal-game-over {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0,0,0);\n  background-color: rgba(0,0,0,0.4);\n}\n\n.modal-place-ships-content,\n.modal-game-over-content {\n  display: flex;\n  flex-direction: column;\n  background-color: #c2deec;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid #f1f3f4;\n  border-radius: 0.25rem;\n}\n\n.modal-place-ships-content {\n  padding: 0.5rem 0 1rem 0;\n  gap: 0.5rem;\n}\n\n.modal-game-over-content {\n  padding: 1.5rem;\n  gap: 1.25rem;\n}\n\n.modal-game-over-content-txt {\n  font-size: 3rem;\n  font-weight: 600;\n}\n\n.modal-place-ships-top-btn-container {\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n}\n\n.modal-place-ships-axis-btn,\n.modal-place-ships-random-btn,\n.modal-place-ships-clear-btn {\n  font-size: 1.25rem;\n  align-self: center;\n  padding: 0 1.25rem;\n  border: none;\n  border-radius: 0.25rem;\n  margin-top: 0.3rem;\n}\n\n.modal-place-ships-random-btn:hover,\n.modal-place-ships-axis-btn:hover,\n.modal-place-ships-clear-btn:hover {\n  cursor: pointer;\n  background-image: linear-gradient(rgb(0 0 0/3%) 0 0);\n}\n\n.modal-place-ships-board.pos:hover {\n  cursor: pointer;\n}\n\n.modal-place-ships-play-btn,\n.modal-game-over-content-reset-btn {\n  align-self: center;\n  border: 2px solid black;\n  border-radius: 0.25rem;\n  font-size: 1.5rem;\n  padding: 0 1.5rem;\n}\n\n.modal-place-ships-play-btn:hover,\n.modal-game-over-content-reset-btn:hover {\n  cursor: pointer;\n  color: white;\n  background-color: #269ad7;\n}\n\nfooter {\n  grid-area: footer;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;GAEG;;AAEH;EACE,iCAAiC;AACnC;;AAEA;EACE,sBAAsB;AACxB;AACA;;;EAGE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,yDAAmC;EACnC,gGAAgG;EAChG,yBAAyB;EACzB,2BAA2B;EAC3B,sBAAsB;EACtB,4BAA4B;EAC5B,SAAS;EACT,UAAU;EACV,aAAa;EACb,iCAAiC;EACjC;;;YAGU;AACZ;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB;EACjB,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;;;EAGE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;AACZ;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;;;EAGE,yBAAyB;EACzB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,0BAA0B;;AAE5B;;AAEA;EACE,yBAAyB;EACzB,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;;EAEE,aAAa;EACb,eAAe;EACf,UAAU;EACV,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc;EACd,4BAA4B;EAC5B,iCAAiC;AACnC;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;EACxB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;;;EAGE,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;;;EAGE,eAAe;EACf,oDAAoD;AACtD;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,kBAAkB;EAClB,uBAAuB;EACvB,sBAAsB;EACtB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;;EAEE,eAAe;EACf,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":["/* * {\n  border: 1px solid red;\n} */\n\n:root {\n  font-family: 'Roboto', sans-serif;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  height: 100vh;\n  background-image: url(./img/bg.jpg);\n  /* background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('./img/bg.jpg'); */\n  background-color: #f1f3f4;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    \"header\"\n    \"main\"\n    \"footer\";\n}\n\nheader {\n  grid-area: header;\n  display: flex;\n  justify-content: center;\n  padding-top: 2rem;\n}\n\n.game-title {\n  font-size: 7rem;\n  font-weight: 600;\n}\n\n.main {\n  grid-area: main;\n  align-self: center;\n}\n\n.player-name-container {\n  background-color: #c2deec;\n  align-self: center;\n  padding: 0 1.5rem;\n  border: 1px solid #f1f3f4;\n  border-radius: 0.25rem;\n}\n\n.modal-place-ships-txt,\n.player1-name,\n.player2-name {\n  display: flex;\n  justify-content: center;\n  font-size: 1.9rem;\n  font-weight: 600;\n}\n\n.boards-container {\n  display: flex;\n  justify-content: center;\n  gap: 10rem;\n}\n\n.player1-board-container,\n.player2-board-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n[class=\"modal-place-ships-board\"],\n[class=\"player1-board\"],\n[class=\"player2-board\"] {\n  background-color: #c2deec;\n  display: grid;\n  width: 450px;\n  height: 450px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 10px solid #c2deec;\n  \n}\n\n.pos {\n  background-color: #269ad7;\n  border: 2.5px solid #c2deec;\n}\n\n.player2-board.pos:hover {\n  cursor: crosshair;\n  border: 5px double #f54140;\n}\n\n.modal-place-ships,\n.modal-game-over {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0,0,0);\n  background-color: rgba(0,0,0,0.4);\n}\n\n.modal-place-ships-content,\n.modal-game-over-content {\n  display: flex;\n  flex-direction: column;\n  background-color: #c2deec;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid #f1f3f4;\n  border-radius: 0.25rem;\n}\n\n.modal-place-ships-content {\n  padding: 0.5rem 0 1rem 0;\n  gap: 0.5rem;\n}\n\n.modal-game-over-content {\n  padding: 1.5rem;\n  gap: 1.25rem;\n}\n\n.modal-game-over-content-txt {\n  font-size: 3rem;\n  font-weight: 600;\n}\n\n.modal-place-ships-top-btn-container {\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n}\n\n.modal-place-ships-axis-btn,\n.modal-place-ships-random-btn,\n.modal-place-ships-clear-btn {\n  font-size: 1.25rem;\n  align-self: center;\n  padding: 0 1.25rem;\n  border: none;\n  border-radius: 0.25rem;\n  margin-top: 0.3rem;\n}\n\n.modal-place-ships-random-btn:hover,\n.modal-place-ships-axis-btn:hover,\n.modal-place-ships-clear-btn:hover {\n  cursor: pointer;\n  background-image: linear-gradient(rgb(0 0 0/3%) 0 0);\n}\n\n.modal-place-ships-board.pos:hover {\n  cursor: pointer;\n}\n\n.modal-place-ships-play-btn,\n.modal-game-over-content-reset-btn {\n  align-self: center;\n  border: 2px solid black;\n  border-radius: 0.25rem;\n  font-size: 1.5rem;\n  padding: 0 1.5rem;\n}\n\n.modal-place-ships-play-btn:hover,\n.modal-game-over-content-reset-btn:hover {\n  cursor: pointer;\n  color: white;\n  background-color: #269ad7;\n}\n\nfooter {\n  grid-area: footer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


const displayFlow = () => {
  const player1BoardDiv = document.querySelector('.player1-board');
  const player2BoardDiv = document.querySelector('.player2-board');

  displayPlacingBoard();
  displayPlacingShips(_game__WEBPACK_IMPORTED_MODULE_0__.ships[0]);
  displayGameboard(_game__WEBPACK_IMPORTED_MODULE_0__.game.playerBoard.board, player1BoardDiv, true);
  displayGameboard(_game__WEBPACK_IMPORTED_MODULE_0__.game.computerBoard.board, player2BoardDiv);
  createEventListeners();
};

const displayPlacingBoard = () => {
  const modal = document.querySelector('.modal-place-ships');
  const modalBoard = document.querySelector('.modal-place-ships-board');
  const rotateBtn = document.querySelector('.modal-place-ships-axis-btn');
  const randBtn = document.querySelector('.modal-place-ships-random-btn');
  const clearBtn = document.querySelector('.modal-place-ships-clear-btn');
  const playBtn = document.querySelector('.modal-place-ships-play-btn');
  modal.style.display = 'block';

  rotateBtn.addEventListener('click', () => {
    const axis = rotateBtn.classList.contains('horizontal')
      ? 'vertical'
      : 'horizontal';
    rotateBtn.classList.remove('horizontal', 'vertical');
    rotateBtn.classList.add(axis);
  });

  randBtn.addEventListener('click', () => {
    _game__WEBPACK_IMPORTED_MODULE_0__.game.playerBoard.resetBoard(_game__WEBPACK_IMPORTED_MODULE_0__.game.playerBoard.board);
    _game__WEBPACK_IMPORTED_MODULE_0__.game.randPlayerShips();
    updatePlayerDisplayBoards();
  });

  clearBtn.addEventListener('click', () => {
    _game__WEBPACK_IMPORTED_MODULE_0__.game.playerBoard.resetBoard(_game__WEBPACK_IMPORTED_MODULE_0__.game.playerBoard.board);
    updatePlayerDisplayBoards();
  });

  playBtn.addEventListener('click', () => {
    if (_game__WEBPACK_IMPORTED_MODULE_0__.game.playerBoard.allShipsPlaced(_game__WEBPACK_IMPORTED_MODULE_0__.game.playerBoard.board)) modal.remove();
  });

  displayGameboard(_game__WEBPACK_IMPORTED_MODULE_0__.game.playerBoard.board, modalBoard, true);
};

const displayPlacingShips = (ship) => {
  const modalBoardPositions = document.querySelectorAll(
    '.modal-place-ships-board.pos'
  );
  const rotateBtn = document.querySelector('.modal-place-ships-axis-btn');
  const nextPositions = [];

  let length = ship.length;
  let shipIndex = 0;

  modalBoardPositions.forEach((position) => {
    position.addEventListener('mouseover', (e) => {
      const x = Number(e.target.dataset.coords[1]);
      const y = Number(e.target.dataset.coords[3]);
      const target = document.querySelector(
        `[data-coords="${e.target.dataset.coords}"]`
      );

      target.style.backgroundColor = '#935620';

      for (let i = 1; i < length; i++) {
        const nextX = rotateBtn.classList.contains('horizontal') ? x : x + i;
        const nextY = rotateBtn.classList.contains('vertical') ? y : y + i;
        const coords = JSON.stringify([nextX, nextY]);
        const nextPos = document.querySelector(`[data-coords="${coords}"]`);
        if (nextPos) {
          nextPositions.push(nextPos);
          nextPos.style.backgroundColor = '#935620';
        }
      }
    });
  });

  modalBoardPositions.forEach((position) => {
    position.addEventListener('mouseout', (e) => {
      e.target.style.backgroundColor = '#269ad7';
      nextPositions.forEach((nextPos) => {
        nextPos.style.backgroundColor = '#269ad7';
      });
    });
    nextPositions.length = 0;
  });

  modalBoardPositions.forEach((position) => {
    position.addEventListener('click', (e) => {
      let coordsStr = e.target.dataset.coords;
      let coords = JSON.parse(coordsStr);
      let axis = rotateBtn.classList.contains('horizontal') ? 'horizontal' : 'vertical';
      _game__WEBPACK_IMPORTED_MODULE_0__.game.playerBoard.placeShip(_game__WEBPACK_IMPORTED_MODULE_0__.ships[shipIndex], coords, axis)
      updatePlayerDisplayBoards();
      shipIndex += 1;
      displayPlacingShips(_game__WEBPACK_IMPORTED_MODULE_0__.ships[shipIndex])
      console.log(_game__WEBPACK_IMPORTED_MODULE_0__.game.playerBoard.board)
    })
  });
};

const updatePlayerDisplayBoards = () => {
  const playerModalBoard = document.querySelector('.modal-place-ships-board');
  const playerBoardDiv = document.querySelector('.player1-board');
  displayGameboard(_game__WEBPACK_IMPORTED_MODULE_0__.game.playerBoard.board, playerModalBoard, true);
  displayGameboard(_game__WEBPACK_IMPORTED_MODULE_0__.game.playerBoard.board, playerBoardDiv, true);
};

const displayGameboard = (board, boardDiv, shipsVisible) => {
  // Reset board if one exists already
  if (boardDiv.hasChildNodes()) boardDiv.innerHTML = '';

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const pos = document.createElement('div');
      pos.classList.add(`${boardDiv.className}`, `pos`);
      pos.setAttribute('data-coords', `[${i},${j}]`);
      if (shipsVisible && board[i][j]) pos.style.backgroundColor = '#935620';
      boardDiv.appendChild(pos);
    }
  }
};

const displayPlayerNames = ((player1 = 'Player', player2 = 'Computer') => {
  const player1Name = document.querySelector('.player1-name');
  const player2Name = document.querySelector('.player2-name');
  player1Name.textContent = player1;
  player2Name.textContent = player2;
})();

const createEventListeners = () => {
  const computerPos = document.querySelectorAll('.player2-board.pos');
  computerPos.forEach((computerPos) =>
    computerPos.addEventListener('click', handleAttacks)
  );
};

const handleAttacks = (e) => {
  // Use JSON.parse to convert '[x, y]' from string to array
  const coords = JSON.parse(e.target.dataset.coords);
  const playerAttack = _game__WEBPACK_IMPORTED_MODULE_0__.game.player.attack(coords);
  displayAttack(e, playerAttack);

  if (playerAttack.includes('already shot')) return;
  if (playerAttack.includes('Game Over')) {
    removeAttackEvents();
    displayGameOver('Player');
    return;
  }

  const computerAttack = _game__WEBPACK_IMPORTED_MODULE_0__.game.computer.attack();
  displayAttack(null, computerAttack);

  if (computerAttack.includes('Game Over')) {
    removeAttackEvents();
    displayGameOver('Computer');
    return;
  }
  console.log(_game__WEBPACK_IMPORTED_MODULE_0__.game.computerBoard.board);
};

const displayAttack = (e, attack) => {
  console.log(attack);
  if (attack.includes('already shot')) return;
  const coords = attack.slice(-5);
  let target = attack.includes('Player1')
    ? e.target
    : document.querySelector(`[data-coords="${coords}"]`);
  let color = attack.includes('hit') ? '#bc1f2a' : '#a8d9fa';
  target.style.backgroundColor = color;
};

const removeAttackEvents = () => {
  const computerPositions = document.querySelectorAll('.player2-board.pos');
  computerPositions.forEach((computerPosition) =>
    computerPosition.removeEventListener('click', handleAttacks)
  );
};

const displayGameOver = (winner) => {
  const modal = document.querySelector('.modal-game-over');
  const modalTxt = document.querySelector('.modal-game-over-content-txt');
  const modalResetBtn = document.querySelector(
    '.modal-game-over-content-reset-btn'
  );
  modal.style.display = 'block';
  modalTxt.textContent = `${winner} wins!`;
  modalResetBtn.addEventListener('click', () => window.location.reload());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayFlow);


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game),
/* harmony export */   "ships": () => (/* binding */ ships)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/ship.js");




let ships = [];

const game = (() => {
  const playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const computerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const player = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])('Player1', computerBoard);
  const computer = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])('Player2', playerBoard);

  const carrier1 = (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])('carrier1', 5);
  const battleship1 = (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])('battleship1', 4);
  const destroyer1 = (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])('destroyer1', 3);
  const submarine1 = (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])('submarine1', 3);
  const patrol1 = (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])('patrol1', 2);

  const carrier2 = (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])('carrier2', 5);
  const battleship2 = (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])('battleship2', 4);
  const destroyer2 = (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])('destroyer2', 3);
  const submarine2 = (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])('submarine2', 3);
  const patrol2 = (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])('patrol2', 2);

  ships.push(
    carrier1,
    battleship1,
    destroyer1,
    submarine1,
    patrol1,
    carrier2,
    battleship2,
    destroyer2,
    submarine2,
    patrol2
  );

  const randPlayerShips = () => {
    const playerShips = ships.filter((ship) => ship.player === 'Player1');
    playerShips.forEach((ship) => {
      playerBoard.placeShip(ship);
    });
  };

  const computerShips = ships.filter((ship) => ship.player === 'Player2');
  computerShips.forEach((ship) => {
    computerBoard.placeShip(ship);
  });

  console.log(playerBoard.board);
  console.log(computerBoard.board);

  return {
    playerBoard,
    computerBoard,
    player,
    computer,
    randPlayerShips,
  };
})();




/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard),
/* harmony export */   "randNewPos": () => (/* binding */ randNewPos)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


const Gameboard = (size = 10) => {
  let board = Array.from(Array(size), () => new Array(size));

  const placeShip = (ship, coords, axis = 'horizontal') => {
    // Place ship in random position if no coords
    if (!coords) {
      randPlaceShip(ship, randNewPos(board), randAxis());
    } else {
      if (
        coords[0] < 0 ||
        coords[0] > size ||
        coords[1] < 0 ||
        coords[1] > size
      )
        return 'Ship placement out of bounds';

      // Create array of the specific cells that the ship would occupy
      const cellsToCheck = [];

      if (axis === 'horizontal') {
        if (coords[1] + ship.length > size) return 'Placement out of bounds';
        for (let i = coords[1]; i < coords[1] + ship.length; i++) {
          if (board[coords[0]][i] !== undefined)
            return 'Ship placement overlaps with another ship';
          cellsToCheck.push([coords[0], i]);
        }
      } else if (axis === 'vertical') {
        if (coords[0] + ship.length > size) return 'Placement out of bounds';
        for (let j = coords[0]; j < coords[0] + ship.length; j++) {
          if (board[j][coords[1]] !== undefined)
            return 'Ship placement overlaps with another ship';
          cellsToCheck.push([j, coords[1]]);
        }
      }

      for (const [row, col] of cellsToCheck) {
        board[row][col] = ship.name;
      }

      return 'Placement successful';
    }
  };

  const randPlaceShip = (ship, coords, axis) => {
    let placementSuccessful = false;
    while (!placementSuccessful) {
      const result = placeShip(ship, coords, axis);
      if (result === 'Placement successful') {
        placementSuccessful = true;
      } else {
        coords = randNewPos(board);
      }
    }
  };

  const receiveAttack = (coords) => {
    const [x, y] = coords;
    const pos = board[x][y];

    if (pos && pos.includes('X')) return 'Position already shot';

    // Add 'X' to all positions shot
    if (pos) {
      const ship = _game__WEBPACK_IMPORTED_MODULE_0__.ships.find((el) => el.name === pos);
      ship.hit();
      board[x][y] = `${ship.name}X`;
      if (gameOver()) return `${ship.name} hit. ${gameOver()}`;
      return `${ship.name} hit`;
    } else {
      board[x][y] = 'X';
      return 'missed shot';
    }
  };

  const gameOver = () => {
    const player1SunkCount = _game__WEBPACK_IMPORTED_MODULE_0__.ships.filter(
      (el) => el.player === 'Player1' && el.sunk === true
    ).length;
    const player2SunkCount = _game__WEBPACK_IMPORTED_MODULE_0__.ships.filter(
      (el) => el.player === 'Player2' && el.sunk === true
    ).length;
    const totalShips = _game__WEBPACK_IMPORTED_MODULE_0__.ships.length;

    if (
      player1SunkCount === totalShips / 2 ||
      player2SunkCount === totalShips / 2
    ) {
      return 'Game Over';
    }
  };

  const resetBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        board[i][j] = undefined;
      }
    }
  };

  const allShipsPlaced = (board) => {
    const posOccupied = board.flat().filter(Boolean).length;
    const totalShipsLength = _game__WEBPACK_IMPORTED_MODULE_0__.ships.reduce(
      (total, ship) => total + ship.length,
      0
    );
    return posOccupied === totalShipsLength / 2;
  };

  return {
    board,
    placeShip,
    receiveAttack,
    gameOver,
    resetBoard,
    allShipsPlaced,
  };
};

const randNewPos = (board) => {
  // Save all positions not already attacked
  if (!board) return 'no board found';
  let posNotShot = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let pos = board[i][j];
      if (!pos || (pos && !pos.includes('X'))) {
        posNotShot.push([i, j]);
      }
    }
  }
  // Randomly pick one and attack
  let randomIndex = Math.floor(Math.random() * posNotShot.length);
  let randomPosNotShot = posNotShot[randomIndex];
  return randomPosNotShot;
};

const randAxis = () => {
  const axis = ['horizontal', 'vertical'];
  let randomIndex = Math.floor(Math.random() * axis.length);
  return axis[randomIndex];
};




/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


const Player = (name, ennemyGameboard) => {
  const attack = (coords = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.randNewPos)(ennemyGameboard.board)) => {
    return `${name}: ${ennemyGameboard.receiveAttack(coords)} at [${coords}]`;
  };
  return { name, ennemyGameboard, attack };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (name, length) => {
  let health = length;
  let sunk = false;
  let player = name.includes('1') ? 'Player1' : 'Player2';
  const hit = function () {
    this.health -= 1;
    if (this.health <= 0) this.sunk = true;
  };
  return { name, length, health, player, sunk, hit };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/img/bg.jpg":
/*!************************!*\
  !*** ./src/img/bg.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73b33fcedee69c446c47.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");



(0,_DOM__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map