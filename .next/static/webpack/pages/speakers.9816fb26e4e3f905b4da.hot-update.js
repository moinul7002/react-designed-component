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
/* harmony import */ var _customHooks_useRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customHooks/useRequest */ "./src/customHooks/useRequest.js");


var _jsxFileName = "J:\\react-search-designed-component\\src\\contexts\\DataContext.js",
    _this = undefined,
    _s = $RefreshSig$();



var DataContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();

var DataProvider = function DataProvider(_ref) {
  _s();

  var children = _ref.children;
  var state = Object(_customHooks_useRequest__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DataContext.Provider, {
    value: state,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 10
  }, _this);
};

_s(DataProvider, "EpyIIlMbfwDQNupVQtj+JhK9xSc=", false, function () {
  return [_customHooks_useRequest__WEBPACK_IMPORTED_MODULE_2__["default"]];
});

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

/***/ }),

/***/ "./src/customHooks/useRequest.js":
/*!***************************************!*\
  !*** ./src/customHooks/useRequest.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();



var useRequest = function useRequest() {
  _s();

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    speakers: speakers,
    status: "loading"
  }),
      state = _useState[0],
      setState = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var timer = setTimeout(function () {
      setState({
        speakers: speakers,
        status: "success",
        error: "undefined"
      });
    }, 2000);
    return function () {
      return clearTimeout(timer);
    };
  }, []);
  return state;
};

_s(useRequest, "o3NqIOQUsvYQ8VhgHotnebPy35c=");

/* harmony default export */ __webpack_exports__["default"] = (useRequest);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0RhdGFDb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY3VzdG9tSG9va3MvdXNlUmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJEYXRhQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJEYXRhUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXRlIiwidXNlUmVxdWVzdCIsInNwZWFrZXJzIiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNhdCIsInN1biIsImlzRmF2b3JpdGUiLCJiaW8iLCJ1c2VTdGF0ZSIsInN0YXR1cyIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwidGltZXIiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJjbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQzs7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNyQyxNQUFNQyxLQUFLLEdBQUdDLHVFQUFVLEVBQXhCO0FBQ0Esc0JBQU8scUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFRCxLQUE3QjtBQUFBLGNBQXFDRDtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUhEOztHQUFNRCxZO1VBQ1VHLCtEOzs7S0FEVkgsWTtBQUtOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTs7QUFFQSxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQ3ZCLE1BQU1DLFFBQVEsR0FBRyxDQUNmO0FBQ0VDLE1BQUUsRUFBRSxJQUROO0FBRUVDLGFBQVMsRUFBRSxRQUZiO0FBR0VDLFlBQVEsRUFBRSxPQUhaO0FBSUVDLE9BQUcsRUFBRSxLQUpQO0FBS0VDLE9BQUcsRUFBRSxJQUxQO0FBTUVDLGNBQVUsRUFBRSxJQU5kO0FBT0VDLE9BQUcsRUFDRDtBQVJKLEdBRGUsRUFXZjtBQUNFTixNQUFFLEVBQUUsSUFETjtBQUVFQyxhQUFTLEVBQUUsT0FGYjtBQUdFQyxZQUFRLEVBQUUsVUFIWjtBQUlFRyxjQUFVLEVBQUUsS0FKZDtBQUtFQyxPQUFHLEVBQ0QsME9BTko7QUFPRUgsT0FBRyxFQUFFLElBUFA7QUFRRUMsT0FBRyxFQUFFO0FBUlAsR0FYZSxFQXFCZjtBQUNFSixNQUFFLEVBQUUsS0FETjtBQUVFQyxhQUFTLEVBQUUsUUFGYjtBQUdFQyxZQUFRLEVBQUUsVUFIWjtBQUlFQyxPQUFHLEVBQUUsSUFKUDtBQUtFQyxPQUFHLEVBQUUsS0FMUDtBQU1FQyxjQUFVLEVBQUUsSUFOZDtBQU9FQyxPQUFHLEVBQ0Q7QUFSSixHQXJCZSxDQUFqQjs7QUFEdUIsa0JBa0NHQyxzREFBUSxDQUFDO0FBQ2pDUixZQUFRLEVBQUVBLFFBRHVCO0FBRWpDUyxVQUFNLEVBQUU7QUFGeUIsR0FBRCxDQWxDWDtBQUFBLE1Ba0NoQlgsS0FsQ2dCO0FBQUEsTUFrQ1RZLFFBbENTOztBQXVDdkJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEtBQUssR0FBR0MsVUFBVSxDQUFDLFlBQU07QUFDN0JILGNBQVEsQ0FBQztBQUNQVixnQkFBUSxFQUFFQSxRQURIO0FBRVBTLGNBQU0sRUFBRSxTQUZEO0FBR1BLLGFBQUssRUFBRTtBQUhBLE9BQUQsQ0FBUjtBQUtELEtBTnVCLEVBTXJCLElBTnFCLENBQXhCO0FBT0EsV0FBTztBQUFBLGFBQU1DLFlBQVksQ0FBQ0gsS0FBRCxDQUFsQjtBQUFBLEtBQVA7QUFDRCxHQVRRLEVBU04sRUFUTSxDQUFUO0FBVUEsU0FBT2QsS0FBUDtBQUNELENBbEREOztHQUFNQyxVOztBQW9EU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuOTgxNmZiMjZlNGUzZjkwNWI0ZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VSZXF1ZXN0IGZyb20gXCIuLi9jdXN0b21Ib29rcy91c2VSZXF1ZXN0XCI7XHJcblxyXG5jb25zdCBEYXRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IERhdGFQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBzdGF0ZSA9IHVzZVJlcXVlc3QoKTtcclxuICByZXR1cm4gPERhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+e2NoaWxkcmVufTwvRGF0YUNvbnRleHQuUHJvdmlkZXI+O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgRGF0YUNvbnRleHQsIERhdGFQcm92aWRlciB9O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgdXNlUmVxdWVzdCA9ICgpID0+IHtcclxuICBjb25zdCBzcGVha2VycyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDE1MzAsXHJcbiAgICAgIGZpcnN0TmFtZTogXCJUYW1hcmFcIixcclxuICAgICAgbGFzdE5hbWU6IFwiQmFrZXJcIixcclxuICAgICAgc2F0OiBmYWxzZSxcclxuICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICBpc0Zhdm9yaXRlOiB0cnVlLFxyXG4gICAgICBiaW86XHJcbiAgICAgICAgXCJUYW1teSBoYXMgaGVsZCBhIG51bWJlciBvZiBleGVjdXRpdmUgYW5kIG1hbmFnZW1lbnQgcm9sZXMgb3ZlciB0aGUgcGFzdCAxNSB5ZWFycywgaW5jbHVkaW5nIFZQIGVuZ2luZWVyaW5nIFJvbGVzIGF0IE1vbGVrdWxlIEluYy4sIENhbnRhbG91cGUgU3lzdGVtcywgRS1Db2xvciwgYW5kIFVudGFuZ2xlIEluYy5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA1OTk2LFxyXG4gICAgICBmaXJzdE5hbWU6IFwiQ3JhaWdcIixcclxuICAgICAgbGFzdE5hbWU6IFwiQmVybnRzb25cIixcclxuICAgICAgaXNGYXZvcml0ZTogZmFsc2UsXHJcbiAgICAgIGJpbzpcclxuICAgICAgICAnQ3JhaWcgaGFzIGEgcGFzc2lvbiBmb3IgY29tbXVuaXR5IGFuZCBoZWxwaW5nIG90aGVyIGRldmVsb3BlcnMgaW1wcm92ZSB0aGVpciBza2lsbHMuIEhlIHdyaXRlcyB0aGUgY29sdW1uIFwiU29mdHdhcmUgR2FyZGVuaW5nXCIgaW4gRG90TmV0IEN1cnJ5IE1hZ2F6aW5lIGFuZCBpcyB0aGUgY28tYXV0aG9yIG9mIFwiQ29udGludW91cyBJbnRlZ3JhdGlvbiBpbiAuTkVUXCIgYXZhaWxhYmxlIGZyb20gTWFubmluZy4nLFxyXG4gICAgICBzYXQ6IHRydWUsXHJcbiAgICAgIHN1bjogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxMDgwMyxcclxuICAgICAgZmlyc3ROYW1lOiBcIkV1Z2VuZVwiLFxyXG4gICAgICBsYXN0TmFtZTogXCJDaHV2eXJvdlwiLFxyXG4gICAgICBzYXQ6IHRydWUsXHJcbiAgICAgIHN1bjogZmFsc2UsXHJcbiAgICAgIGlzRmF2b3JpdGU6IHRydWUsXHJcbiAgICAgIGJpbzpcclxuICAgICAgICBcIkV1Z2VuZSBDaHV2eXJvdiBpcyAgYSBTZW5pb3IgQ2xvdWQgQXJjaGl0ZWN0IGF0IE1pY3Jvc29mdC4gSGUgd29ya3MgZGlyZWN0bHkgd2l0aCBib3RoIHN0YXJ0dXBzIGFuZCBlbnRlcnByaXNlcyB0byBlbmFibGUgdGhlaXIgc29sdXRpb25zIGluIE1pY3Jvc29mdCBjbG91ZCwgYW5kIHRvIG1ha2UgQXp1cmUgYmV0dGVyIGFzIGEgcmVzdWx0IG9mIHRoaXMgd29yayB3aXRoIHBhcnRuZXJzLlwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIHNwZWFrZXJzOiBzcGVha2VycyxcclxuICAgIHN0YXR1czogXCJsb2FkaW5nXCIsXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgc3BlYWtlcnM6IHNwZWFrZXJzLFxyXG4gICAgICAgIHN0YXR1czogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgZXJyb3I6IFwidW5kZWZpbmVkXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMjAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==