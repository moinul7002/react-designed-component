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
    status: "Loading"
  }),
      state = _useState[0],
      setState = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DataContext.Provider, {
    value: state,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 10
  }, _this);
};

_s(DataProvider, "ZRKFVixTnA8lxzb//ALAyBBBXhY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0RhdGFDb250ZXh0LmpzIl0sIm5hbWVzIjpbIkRhdGFDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkRhdGFQcm92aWRlciIsImNoaWxkcmVuIiwic3BlYWtlcnMiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2F0Iiwic3VuIiwiaXNGYXZvcml0ZSIsImJpbyIsInVzZVN0YXRlIiwic3RhdHVzIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsInRpbWVyIiwic2V0VGltZW91dCIsImVycm9yIiwiY2xlYXJUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsRUFBakM7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDckMsTUFBTUMsUUFBUSxHQUFHLENBQ2Y7QUFDRUMsTUFBRSxFQUFFLElBRE47QUFFRUMsYUFBUyxFQUFFLFFBRmI7QUFHRUMsWUFBUSxFQUFFLE9BSFo7QUFJRUMsT0FBRyxFQUFFLEtBSlA7QUFLRUMsT0FBRyxFQUFFLElBTFA7QUFNRUMsY0FBVSxFQUFFLElBTmQ7QUFPRUMsT0FBRyxFQUNEO0FBUkosR0FEZSxFQVdmO0FBQ0VOLE1BQUUsRUFBRSxJQUROO0FBRUVDLGFBQVMsRUFBRSxPQUZiO0FBR0VDLFlBQVEsRUFBRSxVQUhaO0FBSUVHLGNBQVUsRUFBRSxLQUpkO0FBS0VDLE9BQUcsRUFDRCwwT0FOSjtBQU9FSCxPQUFHLEVBQUUsSUFQUDtBQVFFQyxPQUFHLEVBQUU7QUFSUCxHQVhlLEVBcUJmO0FBQ0VKLE1BQUUsRUFBRSxLQUROO0FBRUVDLGFBQVMsRUFBRSxRQUZiO0FBR0VDLFlBQVEsRUFBRSxVQUhaO0FBSUVDLE9BQUcsRUFBRSxJQUpQO0FBS0VDLE9BQUcsRUFBRSxLQUxQO0FBTUVDLGNBQVUsRUFBRSxJQU5kO0FBT0VDLE9BQUcsRUFDRDtBQVJKLEdBckJlLENBQWpCOztBQURxQyxrQkFrQ1hDLHNEQUFRLENBQUM7QUFDakNSLFlBQVEsRUFBRUEsUUFEdUI7QUFFakNTLFVBQU0sRUFBRTtBQUZ5QixHQUFELENBbENHO0FBQUEsTUFrQzlCQyxLQWxDOEI7QUFBQSxNQWtDdkJDLFFBbEN1Qjs7QUF1Q3JDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxLQUFLLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO0FBQzdCSCxjQUFRLENBQUM7QUFDUFgsZ0JBQVEsRUFBRUEsUUFESDtBQUVQUyxjQUFNLEVBQUUsU0FGRDtBQUdQTSxhQUFLLEVBQUU7QUFIQSxPQUFELENBQVI7QUFLRCxLQU51QixFQU1yQixJQU5xQixDQUF4QjtBQU9BLFdBQU87QUFBQSxhQUFNQyxZQUFZLENBQUNILEtBQUQsQ0FBbEI7QUFBQSxLQUFQO0FBQ0QsR0FUUSxFQVNOLEVBVE0sQ0FBVDtBQVdBLHNCQUFPLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRUgsS0FBN0I7QUFBQSxjQUFxQ1g7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FuREQ7O0dBQU1ELFk7O0tBQUFBLFk7QUFxRE4iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuYjJhMmVhMjQwNzMyOTZmNTAzZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBEYXRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IERhdGFQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBzcGVha2VycyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDE1MzAsXHJcbiAgICAgIGZpcnN0TmFtZTogXCJUYW1hcmFcIixcclxuICAgICAgbGFzdE5hbWU6IFwiQmFrZXJcIixcclxuICAgICAgc2F0OiBmYWxzZSxcclxuICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICBpc0Zhdm9yaXRlOiB0cnVlLFxyXG4gICAgICBiaW86XHJcbiAgICAgICAgXCJUYW1teSBoYXMgaGVsZCBhIG51bWJlciBvZiBleGVjdXRpdmUgYW5kIG1hbmFnZW1lbnQgcm9sZXMgb3ZlciB0aGUgcGFzdCAxNSB5ZWFycywgaW5jbHVkaW5nIFZQIGVuZ2luZWVyaW5nIFJvbGVzIGF0IE1vbGVrdWxlIEluYy4sIENhbnRhbG91cGUgU3lzdGVtcywgRS1Db2xvciwgYW5kIFVudGFuZ2xlIEluYy5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA1OTk2LFxyXG4gICAgICBmaXJzdE5hbWU6IFwiQ3JhaWdcIixcclxuICAgICAgbGFzdE5hbWU6IFwiQmVybnRzb25cIixcclxuICAgICAgaXNGYXZvcml0ZTogZmFsc2UsXHJcbiAgICAgIGJpbzpcclxuICAgICAgICAnQ3JhaWcgaGFzIGEgcGFzc2lvbiBmb3IgY29tbXVuaXR5IGFuZCBoZWxwaW5nIG90aGVyIGRldmVsb3BlcnMgaW1wcm92ZSB0aGVpciBza2lsbHMuIEhlIHdyaXRlcyB0aGUgY29sdW1uIFwiU29mdHdhcmUgR2FyZGVuaW5nXCIgaW4gRG90TmV0IEN1cnJ5IE1hZ2F6aW5lIGFuZCBpcyB0aGUgY28tYXV0aG9yIG9mIFwiQ29udGludW91cyBJbnRlZ3JhdGlvbiBpbiAuTkVUXCIgYXZhaWxhYmxlIGZyb20gTWFubmluZy4nLFxyXG4gICAgICBzYXQ6IHRydWUsXHJcbiAgICAgIHN1bjogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxMDgwMyxcclxuICAgICAgZmlyc3ROYW1lOiBcIkV1Z2VuZVwiLFxyXG4gICAgICBsYXN0TmFtZTogXCJDaHV2eXJvdlwiLFxyXG4gICAgICBzYXQ6IHRydWUsXHJcbiAgICAgIHN1bjogZmFsc2UsXHJcbiAgICAgIGlzRmF2b3JpdGU6IHRydWUsXHJcbiAgICAgIGJpbzpcclxuICAgICAgICBcIkV1Z2VuZSBDaHV2eXJvdiBpcyAgYSBTZW5pb3IgQ2xvdWQgQXJjaGl0ZWN0IGF0IE1pY3Jvc29mdC4gSGUgd29ya3MgZGlyZWN0bHkgd2l0aCBib3RoIHN0YXJ0dXBzIGFuZCBlbnRlcnByaXNlcyB0byBlbmFibGUgdGhlaXIgc29sdXRpb25zIGluIE1pY3Jvc29mdCBjbG91ZCwgYW5kIHRvIG1ha2UgQXp1cmUgYmV0dGVyIGFzIGEgcmVzdWx0IG9mIHRoaXMgd29yayB3aXRoIHBhcnRuZXJzLlwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIHNwZWFrZXJzOiBzcGVha2VycyxcclxuICAgIHN0YXR1czogXCJMb2FkaW5nXCIsXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgc3BlYWtlcnM6IHNwZWFrZXJzLFxyXG4gICAgICAgIHN0YXR1czogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgZXJyb3I6IFwidW5kZWZpbmVkXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMjAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiA8RGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT57Y2hpbGRyZW59PC9EYXRhQ29udGV4dC5Qcm92aWRlcj47XHJcbn07XHJcblxyXG5leHBvcnQgeyBEYXRhQ29udGV4dCwgRGF0YVByb3ZpZGVyIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=