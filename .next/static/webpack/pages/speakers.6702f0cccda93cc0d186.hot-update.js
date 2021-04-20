webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/contexts/DataContext.js":
/*!*************************************!*\
  !*** ./src/contexts/DataContext.js ***!
  \*************************************/
/*! exports provided: DataContext, DataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataContext", function() { return DataContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProvider", function() { return DataProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "J:\\react-search-designed-component\\src\\contexts\\DataContext.js",
    _this = undefined,
    _s = $RefreshSig$();


var DataContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();

var DataProvider = function DataProvider(_ref) {
  _s();

  var children = _ref.children;
  var speakers = [{
    id: 1530,
    firstName: "Tamara",
    lastName: "Baker",
    sat: false,
    sun: true,
    isFavorite: true,
    bio: "Tammy has held a number of executive and management roles over the past 15 years, including VP engineering Roles at Molekule Inc., Cantaloupe Systems, E-Color, and Untangle Inc."
  }, {
    id: 5996,
    firstName: "Craig",
    lastName: "Berntson",
    isFavorite: false,
    bio: 'Craig has a passion for community and helping other developers improve their skills. He writes the column "Software Gardening" in DotNet Curry Magazine and is the co-author of "Continuous Integration in .NET" available from Manning.',
    sat: true,
    sun: true
  }, {
    id: 10803,
    firstName: "Eugene",
    lastName: "Chuvyrov",
    sat: true,
    sun: false,
    isFavorite: true,
    bio: "Eugene Chuvyrov is  a Senior Cloud Architect at Microsoft. He works directly with both startups and enterprises to enable their solutions in Microsoft cloud, and to make Azure better as a result of this work with partners."
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    speakers: speakers,
    status: "loading"
  }),
      state = _useState[0],
      setState = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var timer = setTimeout(function () {}, 3000);
    return function () {
      return clearTimeout(timer);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DataContext.Provider, {
    value: state,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 10
  }, _this);
};

_s(DataProvider, "o3NqIOQUsvYQ8VhgHotnebPy35c=");

_c = DataProvider;


var _c;

$RefreshReg$(_c, "DataProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0RhdGFDb250ZXh0LmpzIl0sIm5hbWVzIjpbIkRhdGFDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkRhdGFQcm92aWRlciIsImNoaWxkcmVuIiwic3BlYWtlcnMiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2F0Iiwic3VuIiwiaXNGYXZvcml0ZSIsImJpbyIsInVzZVN0YXRlIiwic3RhdHVzIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLEVBQWpDOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3JDLE1BQU1DLFFBQVEsR0FBRyxDQUNmO0FBQ0VDLE1BQUUsRUFBRSxJQUROO0FBRUVDLGFBQVMsRUFBRSxRQUZiO0FBR0VDLFlBQVEsRUFBRSxPQUhaO0FBSUVDLE9BQUcsRUFBRSxLQUpQO0FBS0VDLE9BQUcsRUFBRSxJQUxQO0FBTUVDLGNBQVUsRUFBRSxJQU5kO0FBT0VDLE9BQUcsRUFDRDtBQVJKLEdBRGUsRUFXZjtBQUNFTixNQUFFLEVBQUUsSUFETjtBQUVFQyxhQUFTLEVBQUUsT0FGYjtBQUdFQyxZQUFRLEVBQUUsVUFIWjtBQUlFRyxjQUFVLEVBQUUsS0FKZDtBQUtFQyxPQUFHLEVBQ0QsME9BTko7QUFPRUgsT0FBRyxFQUFFLElBUFA7QUFRRUMsT0FBRyxFQUFFO0FBUlAsR0FYZSxFQXFCZjtBQUNFSixNQUFFLEVBQUUsS0FETjtBQUVFQyxhQUFTLEVBQUUsUUFGYjtBQUdFQyxZQUFRLEVBQUUsVUFIWjtBQUlFQyxPQUFHLEVBQUUsSUFKUDtBQUtFQyxPQUFHLEVBQUUsS0FMUDtBQU1FQyxjQUFVLEVBQUUsSUFOZDtBQU9FQyxPQUFHLEVBQ0Q7QUFSSixHQXJCZSxDQUFqQjs7QUFEcUMsa0JBa0NYQyxzREFBUSxDQUFDO0FBQ2pDUixZQUFRLEVBQUVBLFFBRHVCO0FBRWpDUyxVQUFNLEVBQUU7QUFGeUIsR0FBRCxDQWxDRztBQUFBLE1Ba0M5QkMsS0FsQzhCO0FBQUEsTUFrQ3ZCQyxRQWxDdUI7O0FBdUNyQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsS0FBSyxHQUFHQyxVQUFVLENBQUMsWUFBTSxDQUFFLENBQVQsRUFBVyxJQUFYLENBQXhCO0FBQ0EsV0FBTztBQUFBLGFBQU1DLFlBQVksQ0FBQ0YsS0FBRCxDQUFsQjtBQUFBLEtBQVA7QUFDRCxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0Esc0JBQU8scUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFSCxLQUE3QjtBQUFBLGNBQXFDWDtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQTdDRDs7R0FBTUQsWTs7S0FBQUEsWTtBQStDTiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy42NzAyZjBjY2NkYTkzY2MwZDE4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IERhdGFDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgRGF0YVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHNwZWFrZXJzID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMTUzMCxcclxuICAgICAgZmlyc3ROYW1lOiBcIlRhbWFyYVwiLFxyXG4gICAgICBsYXN0TmFtZTogXCJCYWtlclwiLFxyXG4gICAgICBzYXQ6IGZhbHNlLFxyXG4gICAgICBzdW46IHRydWUsXHJcbiAgICAgIGlzRmF2b3JpdGU6IHRydWUsXHJcbiAgICAgIGJpbzpcclxuICAgICAgICBcIlRhbW15IGhhcyBoZWxkIGEgbnVtYmVyIG9mIGV4ZWN1dGl2ZSBhbmQgbWFuYWdlbWVudCByb2xlcyBvdmVyIHRoZSBwYXN0IDE1IHllYXJzLCBpbmNsdWRpbmcgVlAgZW5naW5lZXJpbmcgUm9sZXMgYXQgTW9sZWt1bGUgSW5jLiwgQ2FudGFsb3VwZSBTeXN0ZW1zLCBFLUNvbG9yLCBhbmQgVW50YW5nbGUgSW5jLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDU5OTYsXHJcbiAgICAgIGZpcnN0TmFtZTogXCJDcmFpZ1wiLFxyXG4gICAgICBsYXN0TmFtZTogXCJCZXJudHNvblwiLFxyXG4gICAgICBpc0Zhdm9yaXRlOiBmYWxzZSxcclxuICAgICAgYmlvOlxyXG4gICAgICAgICdDcmFpZyBoYXMgYSBwYXNzaW9uIGZvciBjb21tdW5pdHkgYW5kIGhlbHBpbmcgb3RoZXIgZGV2ZWxvcGVycyBpbXByb3ZlIHRoZWlyIHNraWxscy4gSGUgd3JpdGVzIHRoZSBjb2x1bW4gXCJTb2Z0d2FyZSBHYXJkZW5pbmdcIiBpbiBEb3ROZXQgQ3VycnkgTWFnYXppbmUgYW5kIGlzIHRoZSBjby1hdXRob3Igb2YgXCJDb250aW51b3VzIEludGVncmF0aW9uIGluIC5ORVRcIiBhdmFpbGFibGUgZnJvbSBNYW5uaW5nLicsXHJcbiAgICAgIHNhdDogdHJ1ZSxcclxuICAgICAgc3VuOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDEwODAzLFxyXG4gICAgICBmaXJzdE5hbWU6IFwiRXVnZW5lXCIsXHJcbiAgICAgIGxhc3ROYW1lOiBcIkNodXZ5cm92XCIsXHJcbiAgICAgIHNhdDogdHJ1ZSxcclxuICAgICAgc3VuOiBmYWxzZSxcclxuICAgICAgaXNGYXZvcml0ZTogdHJ1ZSxcclxuICAgICAgYmlvOlxyXG4gICAgICAgIFwiRXVnZW5lIENodXZ5cm92IGlzICBhIFNlbmlvciBDbG91ZCBBcmNoaXRlY3QgYXQgTWljcm9zb2Z0LiBIZSB3b3JrcyBkaXJlY3RseSB3aXRoIGJvdGggc3RhcnR1cHMgYW5kIGVudGVycHJpc2VzIHRvIGVuYWJsZSB0aGVpciBzb2x1dGlvbnMgaW4gTWljcm9zb2Z0IGNsb3VkLCBhbmQgdG8gbWFrZSBBenVyZSBiZXR0ZXIgYXMgYSByZXN1bHQgb2YgdGhpcyB3b3JrIHdpdGggcGFydG5lcnMuXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgc3BlYWtlcnM6IHNwZWFrZXJzLFxyXG4gICAgc3RhdHVzOiBcImxvYWRpbmdcIixcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7fSwgMzAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiA8RGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT57Y2hpbGRyZW59PC9EYXRhQ29udGV4dC5Qcm92aWRlcj47XHJcbn07XHJcblxyXG5leHBvcnQgeyBEYXRhQ29udGV4dCwgRGF0YVByb3ZpZGVyIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=