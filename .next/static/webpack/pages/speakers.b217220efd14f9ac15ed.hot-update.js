webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/layouts/index.js":
/*!******************************!*\
  !*** ./src/layouts/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Menu */ "./src/components/Menu/index.js");
/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/ThemeContext */ "./src/contexts/ThemeContext.js");


var _jsxFileName = "J:\\react-search-designed-component\\src\\layouts\\index.js",
    _this = undefined,
    _s = $RefreshSig$();







var LayoutComponent = function LayoutComponent(_ref) {
  _s();

  var children = _ref.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_5__["ThemeContext"]),
      theme = _useContext.theme;

  var toggleThemeColor = theme === _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_5__["THEMELIST"].LIGHT ? "overflow-auto bg-white" : "overflow-auto bg-gray-700";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
    initialTheme: _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_5__["THEMELIST"].LIGHT,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: toggleThemeColor,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mx-4 my-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_s(LayoutComponent, "LidUGjXGvl6nqLnPI8yC77ot4bM=");

_c = LayoutComponent;

var Layout = function Layout() {
  /*#__PURE__*/
  Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
    initialTheme: _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_5__["THEMELIST"].LIGHT,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LayoutComponent, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }, _this), ";"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 3
  }, _this);
};

_c2 = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c, _c2;

$RefreshReg$(_c, "LayoutComponent");
$RefreshReg$(_c2, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvaW5kZXguanMiXSwibmFtZXMiOlsiTGF5b3V0Q29tcG9uZW50IiwiY2hpbGRyZW4iLCJ1c2VDb250ZXh0IiwiVGhlbWVDb250ZXh0IiwidGhlbWUiLCJ0b2dnbGVUaGVtZUNvbG9yIiwiVEhFTUVMSVNUIiwiTElHSFQiLCJMYXlvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQU1BLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsb0JBQ3RCQyx3REFBVSxDQUFDQyxtRUFBRCxDQURZO0FBQUEsTUFDaENDLEtBRGdDLGVBQ2hDQSxLQURnQzs7QUFFeEMsTUFBTUMsZ0JBQWdCLEdBQ3BCRCxLQUFLLEtBQUtFLGdFQUFTLENBQUNDLEtBQXBCLEdBQ0ksd0JBREosR0FFSSwyQkFITjtBQUlBLHNCQUNFLHFFQUFDLG9FQUFEO0FBQWUsZ0JBQVksRUFBRUQsZ0VBQVMsQ0FBQ0MsS0FBdkM7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUYsZ0JBQWhCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQUdHSixRQUhILGVBSUUscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0FsQkQ7O0dBQU1ELGU7O0tBQUFBLGU7O0FBb0JOLElBQU1RLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkI7QUFBQSx1RUFBQyxvRUFBRDtBQUFlLGdCQUFZLEVBQUVGLGdFQUFTLENBQUNDLEtBQXZDO0FBQUEsNEJBQ0UscUVBQUMsZUFBRDtBQUFBLGdCQUFrQk47QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdELENBSkQ7O01BQU1PLE07QUFNU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuYjIxNzIyMGVmZDE0ZjlhYzE1ZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL01lbnVcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgVGhlbWVQcm92aWRlcixcclxuICBUaGVtZUNvbnRleHQsXHJcbiAgVEhFTUVMSVNULFxyXG59IGZyb20gXCIuLi9jb250ZXh0cy9UaGVtZUNvbnRleHRcIjtcclxuXHJcbmNvbnN0IExheW91dENvbXBvbmVudCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB7IHRoZW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcbiAgY29uc3QgdG9nZ2xlVGhlbWVDb2xvciA9XHJcbiAgICB0aGVtZSA9PT0gVEhFTUVMSVNULkxJR0hUXHJcbiAgICAgID8gXCJvdmVyZmxvdy1hdXRvIGJnLXdoaXRlXCJcclxuICAgICAgOiBcIm92ZXJmbG93LWF1dG8gYmctZ3JheS03MDBcIjtcclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgaW5pdGlhbFRoZW1lPXtUSEVNRUxJU1QuTElHSFR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlVGhlbWVDb2xvcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG15LTNcIj5cclxuICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoKSA9PiB7XHJcbiAgPFRoZW1lUHJvdmlkZXIgaW5pdGlhbFRoZW1lPXtUSEVNRUxJU1QuTElHSFR9PlxyXG4gICAgPExheW91dENvbXBvbmVudD57Y2hpbGRyZW59PC9MYXlvdXRDb21wb25lbnQ+O1xyXG4gIDwvVGhlbWVQcm92aWRlcj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=