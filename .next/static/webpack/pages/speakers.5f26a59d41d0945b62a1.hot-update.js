webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/Speakers/singleSpeaker.js":
/*!**************************************************!*\
  !*** ./src/components/Speakers/singleSpeaker.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _favoriteButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../favoriteButton */ "./src/components/favoriteButton/index.js");
/* harmony import */ var _speakerImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../speakerImage */ "./src/components/speakerImage/index.js");


var _jsxFileName = "J:\\react-search-designed-component\\src\\components\\Speakers\\singleSpeaker.js",
    _this = undefined;





var SingleSpeaker = function SingleSpeaker(_ref) {
  var id = _ref.id,
      bio = _ref.bio,
      firstName = _ref.firstName,
      lastName = _ref.lastName,
      isFavorite = _ref.isFavorite,
      toggleButton = _ref.toggleButton;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "rounded overflow-hidden shadow-lg p-6 bg-white",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid grid-cols-4 mb-6",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "font-bold text-lg col-span-3",
        children: "".concat(firstName, " ").concat(lastName)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-end",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_favoriteButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          isFavorite: isFavorite,
          toggleButton: toggleButton
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-6",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_speakerImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: bio.substr(0, 70) + "..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_c = SingleSpeaker;
/* harmony default export */ __webpack_exports__["default"] = (SingleSpeaker);

var _c;

$RefreshReg$(_c, "SingleSpeaker");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvc2luZ2xlU3BlYWtlci5qcyJdLCJuYW1lcyI6WyJTaW5nbGVTcGVha2VyIiwiaWQiLCJiaW8iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImlzRmF2b3JpdGUiLCJ0b2dnbGVCdXR0b24iLCJzdWJzdHIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQU9oQjtBQUFBLE1BTkpDLEVBTUksUUFOSkEsRUFNSTtBQUFBLE1BTEpDLEdBS0ksUUFMSkEsR0FLSTtBQUFBLE1BSkpDLFNBSUksUUFKSkEsU0FJSTtBQUFBLE1BSEpDLFFBR0ksUUFISkEsUUFHSTtBQUFBLE1BRkpDLFVBRUksUUFGSkEsVUFFSTtBQUFBLE1BREpDLFlBQ0ksUUFESkEsWUFDSTtBQUNKLHNCQUNFO0FBQUssYUFBUyxFQUFDLGdEQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsdUJBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsOEJBQWY7QUFBQSw0QkFBa0RILFNBQWxELGNBQStEQyxRQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBLCtCQUNFLHFFQUFDLHVEQUFEO0FBQVcsb0JBQVUsRUFBRUMsVUFBdkI7QUFBbUMsc0JBQVksRUFBRUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU9FO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw2QkFDRSxxRUFBQyxxREFBRDtBQUFjLFVBQUUsRUFBRUw7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQVVFO0FBQUEsZ0JBQU1DLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLENBQVgsRUFBYyxFQUFkLElBQW9CO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBdEJEOztLQUFNUCxhO0FBd0JTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy41ZjI2YTU5ZDQxZDA5NDViNjJhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRmF2QnV0dG9uIGZyb20gXCIuLi9mYXZvcml0ZUJ1dHRvblwiO1xyXG5pbXBvcnQgU3BlYWtlckltYWdlIGZyb20gXCIuLi9zcGVha2VySW1hZ2VcIjtcclxuXHJcbmNvbnN0IFNpbmdsZVNwZWFrZXIgPSAoe1xyXG4gIGlkLFxyXG4gIGJpbyxcclxuICBmaXJzdE5hbWUsXHJcbiAgbGFzdE5hbWUsXHJcbiAgaXNGYXZvcml0ZSxcclxuICB0b2dnbGVCdXR0b24sXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbGcgcC02IGJnLXdoaXRlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBtYi02XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZyBjb2wtc3Bhbi0zXCI+e2Ake2ZpcnN0TmFtZX0gJHtsYXN0TmFtZX1gfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgPEZhdkJ1dHRvbiBpc0Zhdm9yaXRlPXtpc0Zhdm9yaXRlfSB0b2dnbGVCdXR0b249e3RvZ2dsZUJ1dHRvbn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgIDxTcGVha2VySW1hZ2UgaWQ9e2lkfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj57YmlvLnN1YnN0cigwLCA3MCkgKyBcIi4uLlwifTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVNwZWFrZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=