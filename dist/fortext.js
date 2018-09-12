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

/***/ "./src/functions/exists.js":
/*!*********************************!*\
  !*** ./src/functions/exists.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n/**\n * Check the existence of a string in the string\n * @return {[Boolean]} existence of string\n */\n\nexports.default = String.prototype.exists = function (str) {\n  return this.indexOf(str) != -1;\n};\n\n//# sourceURL=webpack:///./src/functions/exists.js?");

/***/ }),

/***/ "./src/functions/firstWord.js":
/*!************************************!*\
  !*** ./src/functions/firstWord.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n/**\n * Get first word from string\n * @return {[String]} the first word\n */\n\nexports.default = String.prototype.firstWord = function () {\n  return this.trim().split(\" \")[0];\n};\n\n//# sourceURL=webpack:///./src/functions/firstWord.js?");

/***/ }),

/***/ "./src/functions/howMany.js":
/*!**********************************!*\
  !*** ./src/functions/howMany.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n/**\n * How many occurences of a string in another string\n * @param  {[String]}  search                  search string\n * @param  {Boolean} [isCaseSensitive=false] determine the Case Sensitivity of search\n * @return {int}                          number of occurences\n */\nexports.default = String.prototype.howMany = function (search) {\n  var isCaseSensitive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n  var re = new RegExp(search, \"g\" + (isCaseSensitive == true ? \"\" : 'i'));\n  return (this.match(re) || []).length;\n};\n\n//# sourceURL=webpack:///./src/functions/howMany.js?");

/***/ }),

/***/ "./src/functions/initials.js":
/*!***********************************!*\
  !*** ./src/functions/initials.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n/**\n * Get initials of a string\n * @param  {Boolean} isInitialsCapital  return capital letters\n * @param  {type}  execludeWordsArray ignore words in execludeWordsArray\n * @return {String} initials of  a string\n */\nexports.default = String.prototype.initials = function (isInitialsCapital, execludeWordsArray) {\n    var result = \"\",\n        words = this.trim().split(\" \");\n    // if no execlude words go and iterate over the words array\n    if (typeof execludeWordsArray == 'undefined' || execludeWordsArray.length == 0) {\n        // append each words first letter to result variable\n        words.forEach(function (word) {\n            result += word.split(\"\")[0];\n        });\n    } else {\n        // ignore execluded words from string\n        words.forEach(function (word) {\n            if (execludeWordsArray.indexOf(word) == -1) {\n                result += word.split(\"\")[0];\n            }\n        });\n    }\n    // return the result uppercase if isInitialsCapital is true else as it is\n    return isInitialsCapital === true ? result.toUpperCase() : result;\n};\n\n//# sourceURL=webpack:///./src/functions/initials.js?");

/***/ }),

/***/ "./src/functions/lastWord.js":
/*!***********************************!*\
  !*** ./src/functions/lastWord.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n/**\n * Get last word of the text\n * @return {[String]} the last word\n */\nexports.default = String.prototype.lastWord = function () {\n  var str = this.trim().split(\" \");\n  return str[str.length - 1];\n};\n\n//# sourceURL=webpack:///./src/functions/lastWord.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _initials = __webpack_require__(/*! ./functions/initials */ \"./src/functions/initials.js\");\n\nvar _initials2 = _interopRequireDefault(_initials);\n\nvar _firstWord = __webpack_require__(/*! ./functions/firstWord */ \"./src/functions/firstWord.js\");\n\nvar _firstWord2 = _interopRequireDefault(_firstWord);\n\nvar _lastWord = __webpack_require__(/*! ./functions/lastWord */ \"./src/functions/lastWord.js\");\n\nvar _lastWord2 = _interopRequireDefault(_lastWord);\n\nvar _howMany = __webpack_require__(/*! ./functions/howMany */ \"./src/functions/howMany.js\");\n\nvar _howMany2 = _interopRequireDefault(_howMany);\n\nvar _exists = __webpack_require__(/*! ./functions/exists */ \"./src/functions/exists.js\");\n\nvar _exists2 = _interopRequireDefault(_exists);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });