webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
        var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
        var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'box';

        var element = document.createElement(tag);
        element.className = className;
        element.innerHTML = content;
        return element;
};

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(1);
var header = __webpack_require__(3)();
var main = __webpack_require__(5)();
var footer = __webpack_require__(6)();

$('body').append(header).append(main).append(footer);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var builder = __webpack_require__(0);
__webpack_require__(4);

module.exports = function () {
    var content = '<a href="/">Logo</a>';
    return builder('header', content, 'header');
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var builder = __webpack_require__(0);
__webpack_require__(14);

module.exports = function () {
    var getDate = function getDate() {
        return new Date().toLocaleDateString();
    };
    var items = '';
    for (var i = 1; i < 11; i++) {
        items += '<li class="item' + i + '">' + i + '</li>';
    }
    var content = '\n    <h1 class="title">Hello</h1>\n    <h5 class="date">' + getDate() + '\n    <ul>' + items + '</ul>\n';
    return builder('main', content, 'main');
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var builder = __webpack_require__(0);
__webpack_require__(7);

module.exports = function () {
    var content = '<p>Easycode 2017 &copy; <a href="#">Footer;</a></p>';
    return builder('footer', content, 'footer');
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[2]);