webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/customHooks/useTheme.js":
/*!*************************************!*\
  !*** ./src/customHooks/useTheme.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ThemeContext */ "./src/contexts/ThemeContext.js");
var _s = $RefreshSig$();




var useTheme = function useTheme(_ref) {
  _s();

  var initialTheme = _ref.initialTheme;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialTheme),
      theme = _useState[0],
      setTheme = _useState[1];

  return {
    theme: theme,
    toggleTheme: function toggleTheme() {
      if (theme === _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__["THEMELIST"].DARK) {
        setTheme(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__["THEMELIST"].LIGHT);
      } else {
        setTheme(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__["THEMELIST"].DARK);
      }
    }
  };
};

_s(useTheme, "UdI/sUL+BM/Ht+JjmzTx/eya+mM=");

/* harmony default export */ __webpack_exports__["default"] = (useTheme);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2N1c3RvbUhvb2tzL3VzZVRoZW1lLmpzIl0sIm5hbWVzIjpbInVzZVRoZW1lIiwiaW5pdGlhbFRoZW1lIiwidXNlU3RhdGUiLCJ0aGVtZSIsInNldFRoZW1lIiwidG9nZ2xlVGhlbWUiLCJUSEVNRUxJU1QiLCJEQVJLIiwiTElHSFQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXNCO0FBQUE7O0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjs7QUFBQSxrQkFDWEMsc0RBQVEsQ0FBQ0QsWUFBRCxDQURHO0FBQUEsTUFDOUJFLEtBRDhCO0FBQUEsTUFDdkJDLFFBRHVCOztBQUVyQyxTQUFPO0FBQ0xELFNBQUssRUFBTEEsS0FESztBQUVMRSxlQUFXLEVBQUUsdUJBQU07QUFDakIsVUFBSUYsS0FBSyxLQUFLRyxnRUFBUyxDQUFDQyxJQUF4QixFQUE4QjtBQUM1QkgsZ0JBQVEsQ0FBQ0UsZ0VBQVMsQ0FBQ0UsS0FBWCxDQUFSO0FBQ0QsT0FGRCxNQUVPO0FBQ0xKLGdCQUFRLENBQUNFLGdFQUFTLENBQUNDLElBQVgsQ0FBUjtBQUNEO0FBQ0Y7QUFSSSxHQUFQO0FBVUQsQ0FaRDs7R0FBTVAsUTs7QUFjU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuNzdkN2FlMTdkNWU2OWUzOTllZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUSEVNRUxJU1QgfSBmcm9tIFwiLi4vY29udGV4dHMvVGhlbWVDb250ZXh0XCI7XHJcblxyXG5jb25zdCB1c2VUaGVtZSA9ICh7IGluaXRpYWxUaGVtZSB9KSA9PiB7XHJcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShpbml0aWFsVGhlbWUpO1xyXG4gIHJldHVybiB7XHJcbiAgICB0aGVtZSxcclxuICAgIHRvZ2dsZVRoZW1lOiAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGVtZSA9PT0gVEhFTUVMSVNULkRBUkspIHtcclxuICAgICAgICBzZXRUaGVtZShUSEVNRUxJU1QuTElHSFQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFRoZW1lKFRIRU1FTElTVC5EQVJLKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlVGhlbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=