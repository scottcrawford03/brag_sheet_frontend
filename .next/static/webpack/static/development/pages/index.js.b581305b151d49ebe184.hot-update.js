webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/scottcrawford/scott_coding/bragsheet/brag_sheet_frontend/pages/index.js";




var Page = function Page(_ref) {
  var brags = _ref.brags;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-481871213",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "Brags: ", brags.map(function (brag) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "jsx-481871213" + " " + 'brag',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, brag.brag);
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "481871213",
    __self: this
  }, ".brag.jsx-481871213{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zY290dGNyYXdmb3JkL3Njb3R0X2NvZGluZy9icmFnc2hlZXQvYnJhZ19zaGVldF9mcm9udGVuZC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZZ0IsQUFHc0IsV0FDYiIsImZpbGUiOiIvVXNlcnMvc2NvdHRjcmF3Zm9yZC9zY290dF9jb2RpbmcvYnJhZ3NoZWV0L2JyYWdfc2hlZXRfZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiXG5cbmNvbnN0IFBhZ2UgPSAoeyBicmFncyB9KSA9PlxuICA8ZGl2PlxuICAgIEJyYWdzOiB7YnJhZ3MubWFwKChicmFnKSA9PiB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2JyYWcnPlxuICAgICAgICAgICAge2JyYWcuYnJhZ31cbiAgICAgICAgICA8L3A+XG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgfVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmJyYWcge1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuXG5QYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSB9KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5icmFnc2hlZXQuYXBwJylcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgZGVidWdnZXJcbiAgcmV0dXJuIHsgYnJhZ3M6IGpzb24uYnJhZ3MgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlXG4iXX0= */\n/*@ sourceURL=/Users/scottcrawford/scott_coding/bragsheet/brag_sheet_frontend/pages/index.js */"));
};

Page.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var req, res, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://api.bragsheet.app');

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            json = _context.sent;
            debugger;
            return _context.abrupt("return", {
              brags: json.brags
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=index.js.b581305b151d49ebe184.hot-update.js.map