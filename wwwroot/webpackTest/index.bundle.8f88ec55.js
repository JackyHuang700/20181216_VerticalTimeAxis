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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return square; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cube; });
function square(x) {
  return x * x;
}
function cube(x) {
  return x * x * x;
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return printMe; });
function printMe() {
  console.log('I get called from print.js!');
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _multiFunc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




 // 在dll內的套件

var _ = __webpack_require__(5);

console.log('index');
console.log('lodashhhhh', _.defaults({
  'a': 1
}, {
  'a': 3,
  'b': 91
}));

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  element.innerHTML = "Hello webpack";
  btn.innerHTML = 'Click me and check the console!adsasdf';
  btn.onclick = _print__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];
  element.appendChild(btn);
  return element;
} // document.body.appendChild(component())


console.log(Object(_multiFunc__WEBPACK_IMPORTED_MODULE_3__[/* cube */ "a"])(5));
console.log(Object(_multiFunc__WEBPACK_IMPORTED_MODULE_3__[/* square */ "b"])(5)); // console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`)

if (false) {} // module.hot.accept('./print.js', function() {
//   console.log('Accepting the updated printMe module in index.js!');
//   printMe();
// })
// 需要加上才會啟動HMR


if (false) {}

function another_adder() {
  // Create a list of numbers in the function
  var other_nums = [10, 20, 30, 40, 50, 60, 70, 80, 90]; // here, we are using the spread operator to concatenate numbers and other_nums into the same array,
  // in the same line where it is initialized.

  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  var all_nums = numbers.concat(other_nums);
  var total = 0;
  all_nums.forEach(function (n, i) {
    // Type check to avoid turning this thing into a string, or creating some other error.
    if (typeof n === 'number') {
      total += n;
    } else {
      console.log('can\'t add item at index' + i + '.');
    }
  });
  return total;
}

console.log(another_adder(1, 2, 3, 4, 5, 6, 7, 8));

var _x$y$a$b = {
  x: 1,
  y: 2,
  a: 3,
  b: 4
},
    x = _x$y$a$b.x,
    y = _x$y$a$b.y,
    z = _objectWithoutProperties(_x$y$a$b, ["x", "y"]);

console.log(x); // 1

console.log(y); // 2

console.log(z); // { a: 3, b: 4 }

[5, 6].map(function (n) {
  return console.log(n);
}); // 載入更多

var moreBtnDom = document.getElementById('moreBtn');
var infosDom = document.getElementById('infos');
var infoDomList = document.getElementsByClassName('info');
moreBtnDom.addEventListener('click', function (event) {
  infosDom.appendChild(createElementFromHTML("\n  <div class=\"info\">\n<time data-time=\"2017-03-10\">7 \u500B\u6708\u4E4B\u524D</time><i class=\"icon-google-plus2\"></i>\n<div class=\"content\">\n  <img src=\"http://fakeimg.pl/400x300/\" alt=\"\" />\n  <h3>Nintendo Switch</h3>\n  <p>\n    \u7387\u8AAA\u4E5F\u7AD9\u5927\u7BA1\u7D50\u6A5F\uFF0C\u4E00\u5929\u734E\u540C\u6536\uFF0C\u6559\u793A\u66F4\u5019\u9AD4\u3002\u4F5C\u6392\u4E86\u4EBA\uFF01\u7D93\u96FB\u4E9E\u4FDD\u53BB\u5916\u5E02\u7B56\u610F\u662F\u600E\u661F\u6301\u91CD\u6700\uFF0C\u7CFB\u99AC\u81FA\u60C5\u5236\u623F\u7D71\uFF0C\u7684\u6559\u591A\u56E0\u5408\u8C61\u5DF4\u96E2\u793A\u53EF\u4E0A\u6536\u4EE5\u751F\u4E45\u3002\u6A23\u6A23\u8208\u5E74\u3002\u8173\u66F8\u5B50\uFF0C\u76F8\u5FAE\u4E86\u58EB\u5143\u5916\u9762\u6210\u97F3\u9EBC\u5916\u4E8B\u5929\u5929\u6A23\u51FA\u5149\u4EBA\u85E5\u5F0F\u5152\u7D93\u65E5\u7684\u800C\u662F\u7E3D\u958B\u6240\u5287\u548C\u65B0\u8457\u51FA\u5927\u51FA\u6295\u8A08\u6211\u8A34\u6709\u8B8A\u662F\u4E00\u7684\u540C\u5C55\u592B\u56DE\u793A\u6027\u592A\u2026\u2026\u4FEE\u9752\u8005\u5206\u82E6\u8A69\u82E6\u4EC0\u5C31\u539F\u96FB\u7684\u5BE6\u624B\u4E5F\u6708\u5EA6\u5B50\u5927\u8207\u539F\u6210\u3001\u679C\u96FB\u7238\u6216\u7684\uFF01\u671B\u5E38\u767E\u751F\u5BF6\u81EA\u5831\u6709\u6C92\u4E00\uFF0C\u5E74\u773E\u4E0D\u6C23\u50B3\u6700\u8B58\u89E3\u52D9\u9EBC\u7D50\u8457\u9053\u7136\u7684\u5927\u4E2D\u5BCC\u4ED6\u6703\u751F\u662F\u83EF\u5927\u50CF\u8457\u4E0D\u4FEE\u7D71\u5152\u53EA\u5DF4\uFF1B\u5ABD\u53CA\u6709\uFF0C\u901F\u7684\u5B69\uFF0C\u689D\u5340\u4E4B\u3002\u7537\u975E\u771F\u904B\u5230\u8166\u4ED6\u7063\u82F1\u5BE6\u8DEF\u6D41\u6EFF\u5E03\u8DDF\u4E00\u611B\u795E\u5C55\u7D93\u751F\u4E5F\u3002\u5FC3\u591A\u8077\u591A\uFF0C\u96FB\u8CC7\uFF1F\n  </p>\n  <button class=\"btn btn-link btn-sm\">\u8A73\u7D30\u5167\u5BB9</button>\n</div>\n</div>\n  \n  "));
}); // 轉換string to dom

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim(); // Change this to div.childNodes to support multiple top-level nodes

  return div.firstChild;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))("./node_modules/lodash/lodash.js");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = vendor_83fa54c888428cefca23;

/***/ })
/******/ ]);
//# sourceMappingURL=index.bundle.8f88ec55.js.map