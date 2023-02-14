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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* * {\n  border: 1px solid red;\n} */\n\n:root {\n  font-family: 'Roboto', sans-serif;\n  --shadow: rgba(0, 0, 0, 0.05) 0px 6px 10px 0px,\n    rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;\n  --color: #166e67;\n  --gap: 0.5rem;\n  --radius: 5px;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  height: 100vh;\n  background-color: #fcfcfc;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    \"header\"\n    \"main\"\n    \"footer\";\n}\n\nheader {\n  grid-area: header;\n}\n\n.main {\n  grid-area: main;\n  align-self: center;\n}\n\n.player1-name,\n.player2-name {\n  display: flex;\n  justify-content: center;\n  font-size: 1.9rem;\n}\n\n.boards-container {\n  display: flex;\n  justify-content: center;\n  gap: 10rem;\n}\n\n.player1-board-container,\n.player2-board-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n[class=\"player1-board\"],\n[class=\"player2-board\"] {\n  background-color: #269ad7;\n  display: grid;\n  width: 450px;\n  height: 450px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.pos {\n  border: 2.5px solid #c2deec;\n}\n\n.player2-board.pos:hover {\n  cursor: crosshair;\n  border: 5px double #f54140;\n}\n\nfooter {\n  grid-area: footer;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;GAEG;;AAEH;EACE,iCAAiC;EACjC;sCACoC;EACpC,gBAAgB;EAChB,aAAa;EACb,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;AACA;;;EAGE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,SAAS;EACT,UAAU;EACV,aAAa;EACb,iCAAiC;EACjC;;;YAGU;AACZ;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;AACZ;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;;EAEE,yBAAyB;EACzB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":["/* * {\n  border: 1px solid red;\n} */\n\n:root {\n  font-family: 'Roboto', sans-serif;\n  --shadow: rgba(0, 0, 0, 0.05) 0px 6px 10px 0px,\n    rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;\n  --color: #166e67;\n  --gap: 0.5rem;\n  --radius: 5px;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  height: 100vh;\n  background-color: #fcfcfc;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    \"header\"\n    \"main\"\n    \"footer\";\n}\n\nheader {\n  grid-area: header;\n}\n\n.main {\n  grid-area: main;\n  align-self: center;\n}\n\n.player1-name,\n.player2-name {\n  display: flex;\n  justify-content: center;\n  font-size: 1.9rem;\n}\n\n.boards-container {\n  display: flex;\n  justify-content: center;\n  gap: 10rem;\n}\n\n.player1-board-container,\n.player2-board-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n[class=\"player1-board\"],\n[class=\"player2-board\"] {\n  background-color: #269ad7;\n  display: grid;\n  width: 450px;\n  height: 450px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.pos {\n  border: 2.5px solid #c2deec;\n}\n\n.player2-board.pos:hover {\n  cursor: crosshair;\n  border: 5px double #f54140;\n}\n\nfooter {\n  grid-area: footer;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


const displayGameboard = () => {
  const player1Board = ___WEBPACK_IMPORTED_MODULE_0__.game.playerBoard.board;
  const player2Board = ___WEBPACK_IMPORTED_MODULE_0__.game.computerBoard.board;
  const player1BoardDiv = document.querySelector('.player1-board');
  const player2BoardDiv = document.querySelector('.player2-board');

  function createPos(board, boardDiv, visible) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        const pos = document.createElement('div');
        pos.classList.add(`${boardDiv.className}`, `pos`);
        pos.setAttribute('data-coords', `[${i},${j}]`);
        if (visible && board[i][j]) pos.style.backgroundColor = '#935620';
        boardDiv.appendChild(pos);
      }
    }
  }

  createPos(player1Board, player1BoardDiv, true);
  createPos(player2Board, player2BoardDiv);
  playerAttacks();
};

const displayPlayerNames = ((player1 = 'Player', player2 = 'Computer') => {
  const player1Name = document.querySelector('.player1-name');
  const player2Name = document.querySelector('.player2-name');
  player1Name.textContent = player1;
  player2Name.textContent = player2;
})();

const playerAttacks = () => {
  const computerPos = document.querySelectorAll('.player2-board.pos');
  computerPos.forEach((computerPos) =>
    computerPos.addEventListener('click', playerRound)
  );

  function playerRound(e) {
    // Use JSON.parse to convert '[x, y]' from string to array
    let coords = JSON.parse(e.target.dataset.coords);
    let playerAttack = ___WEBPACK_IMPORTED_MODULE_0__.game.player.attack(coords);
    displayAttack(e, playerAttack);

    let computerAttack = ___WEBPACK_IMPORTED_MODULE_0__.game.computer.attack();
    displayAttack(e, computerAttack);
  }
};

const displayAttack = (e, attack) => {
  let coords = attack.slice(-5);
  let target = attack.includes('Player1')
    ? e.target
    : document.querySelector(`[data-coords="${coords}"]`);
  let color = attack.includes('hit') ? '#bc1f2a' : '#a8d9fa';
  target.style.backgroundColor = color;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayGameboard);


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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


const Gameboard = (size = 10) => {
  const board = Array.from(Array(size), () => new Array(size));

  const placeShip = (ship, coords, axis = 'horizontal') => {
    // Place ship in random position if no coords
    if (!coords) {
      randPlaceShip(ship, coords, axis);
    } else {
      if (
        coords[0] < 0 ||
        coords[0] > size ||
        coords[1] < 0 ||
        coords[1] > size
      )
        return 'Move out of bounds';
      if (axis === 'horizontal') {
        for (let i = coords[1]; i < coords[1] + ship.length; i++) {
          if (coords[1] + ship.length > size) return;
          if (board[coords[0]][i] !== undefined)
            return 'There is already a ship in this location';
          board[coords[0]][i] = ship.name;
        }
      } else if (axis === 'vertical') {
        for (let j = coords[0]; j < coords[0] + ship.length; j++) {
          if (coords[0] + ship.length > size) return;
          if (board[j][coords[1]] !== undefined)
            return 'There is already a ship in this location';
          board[j][coords[1]] = ship.name;
        }
      }
      return 'Placement successful';
    }
  };

  const randPlaceShip = (
    ship,
    coords = randNewPos(board),
    axis = 'horizontal'
  ) => {
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
      const ship = ___WEBPACK_IMPORTED_MODULE_0__.ships.find((el) => el.name === pos);
      ship.hit();
      board[x][y] = `${ship.name}X`;
      if (gameOver()) return gameOver();
      return `${ship.name} hit`;
    } else {
      board[x][y] = 'X';
      return 'missed shot';
    }
  };

  const gameOver = () => {
    const player1SunkCount = ___WEBPACK_IMPORTED_MODULE_0__.ships.filter(
      (el) => el.player === 'Player1' && el.sunk === true
    ).length;
    const player2SunkCount = ___WEBPACK_IMPORTED_MODULE_0__.ships.filter(
      (el) => el.player === 'Player2' && el.sunk === true
    ).length;
    const totalShips = ___WEBPACK_IMPORTED_MODULE_0__.ships.length;

    if (
      player1SunkCount === totalShips / 2 ||
      player2SunkCount === totalShips / 2
    ) {
      return 'Game Over';
    }
  };

  return { board, placeShip, receiveAttack, gameOver };
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




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game),
/* harmony export */   "ships": () => (/* binding */ ships)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");






let ships = [];

const game = (() => {
  const playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const computerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"])();

  const player = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])('Player1', computerBoard);
  const computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])('Player2', playerBoard);

  const carrier1 = (0,_ship__WEBPACK_IMPORTED_MODULE_3__["default"])('carrier1', 5);
  const battleship1 = (0,_ship__WEBPACK_IMPORTED_MODULE_3__["default"])('battleship1', 4);
  const destroyer1 = (0,_ship__WEBPACK_IMPORTED_MODULE_3__["default"])('destroyer1', 3);
  const submarine1 = (0,_ship__WEBPACK_IMPORTED_MODULE_3__["default"])('submarine1', 3);
  const patrol1 = (0,_ship__WEBPACK_IMPORTED_MODULE_3__["default"])('patrol1', 2);

  const carrier2 = (0,_ship__WEBPACK_IMPORTED_MODULE_3__["default"])('carrier2', 5);
  const battleship2 = (0,_ship__WEBPACK_IMPORTED_MODULE_3__["default"])('battleship2', 4);
  const destroyer2 = (0,_ship__WEBPACK_IMPORTED_MODULE_3__["default"])('destroyer2', 3);
  const submarine2 = (0,_ship__WEBPACK_IMPORTED_MODULE_3__["default"])('submarine2', 3);
  const patrol2 = (0,_ship__WEBPACK_IMPORTED_MODULE_3__["default"])('patrol2', 2);

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

  const playerShips = ships.filter((ship) => ship.player === 'Player1');
  playerShips.forEach((ship) => {
    playerBoard.placeShip(ship);
  });

  const computerShips = ships.filter((ship) => ship.player === 'Player2');
  computerShips.forEach((ship) => {
    computerBoard.placeShip(ship);
  });

  // console.log(player.attack([9, 0]));
  // console.log(player.attack());
  // console.log(computer.attack());
  // console.log(computer.attack());
  // console.log(computer.attack());

  console.log(playerBoard.board);
  console.log(computerBoard.board);

  return {
    playerBoard,
    computerBoard,
    player,
    computer
  };
})();

(0,_DOM__WEBPACK_IMPORTED_MODULE_4__["default"])();




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map