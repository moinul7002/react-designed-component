webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: REQUEST_STATUS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_STATUS", function() { return REQUEST_STATUS; });
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error"
};

var RequestReducer = function RequestReducer(state, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_2__["GET_ALL_SUCCESS"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          status: REQUEST_STATUS.SUCCESS,
          records: action.records
        });
      }

    case _actions__WEBPACK_IMPORTED_MODULE_2__["GET_ALL_FAILURE"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          status: REQUEST_STATUS.ERROR,
          error: action.error
        });
      }

    case PUT_SUCCESS:
      {
        var records = state.records;
        var singleRecord = action.singleRecord;
        var recordIndex = records.map(function (single) {
          return single.id;
        }).indexOf(singleRecord.id);
        return _objectSpread(_objectSpread({}, state), {}, {
          records: [].concat(Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(records.slice(0, recordIndex)), [singleRecord], Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(records.slice(recordIndex + 1)))
        });
      }

    case _actions__WEBPACK_IMPORTED_MODULE_2__["PUT_FAILURE"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: action.error
        });
      }

    default:
      return state;
  }
};

_c = RequestReducer;
/* harmony default export */ __webpack_exports__["default"] = (RequestReducer);

var _c;

$RefreshReg$(_c, "RequestReducer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJFUVVFU1RfU1RBVFVTIiwiTE9BRElORyIsIlNVQ0NFU1MiLCJFUlJPUiIsIlJlcXVlc3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiR0VUX0FMTF9TVUNDRVNTIiwic3RhdHVzIiwicmVjb3JkcyIsIkdFVF9BTExfRkFJTFVSRSIsImVycm9yIiwiUFVUX1NVQ0NFU1MiLCJzaW5nbGVSZWNvcmQiLCJyZWNvcmRJbmRleCIsIm1hcCIsInNpbmdsZSIsImlkIiwiaW5kZXhPZiIsInNsaWNlIiwiUFVUX0ZBSUxVUkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9PLElBQU1BLGNBQWMsR0FBRztBQUM1QkMsU0FBTyxFQUFFLFNBRG1CO0FBRTVCQyxTQUFPLEVBQUUsU0FGbUI7QUFHNUJDLE9BQUssRUFBRTtBQUhxQixDQUF2Qjs7QUFNUCxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN4QyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQyx3REFBTDtBQUFzQjtBQUNwQiwrQ0FDS0gsS0FETDtBQUVFSSxnQkFBTSxFQUFFVCxjQUFjLENBQUNFLE9BRnpCO0FBR0VRLGlCQUFPLEVBQUVKLE1BQU0sQ0FBQ0k7QUFIbEI7QUFLRDs7QUFDRCxTQUFLQyx3REFBTDtBQUFzQjtBQUNwQiwrQ0FDS04sS0FETDtBQUVFSSxnQkFBTSxFQUFFVCxjQUFjLENBQUNHLEtBRnpCO0FBR0VTLGVBQUssRUFBRU4sTUFBTSxDQUFDTTtBQUhoQjtBQUtEOztBQUNELFNBQUtDLFdBQUw7QUFBa0I7QUFBQSxZQUNSSCxPQURRLEdBQ0lMLEtBREosQ0FDUkssT0FEUTtBQUFBLFlBRVJJLFlBRlEsR0FFU1IsTUFGVCxDQUVSUSxZQUZRO0FBR2hCLFlBQU1DLFdBQVcsR0FBR0wsT0FBTyxDQUN4Qk0sR0FEaUIsQ0FDYixVQUFDQyxNQUFEO0FBQUEsaUJBQVlBLE1BQU0sQ0FBQ0MsRUFBbkI7QUFBQSxTQURhLEVBRWpCQyxPQUZpQixDQUVUTCxZQUFZLENBQUNJLEVBRkosQ0FBcEI7QUFHQSwrQ0FDS2IsS0FETDtBQUVFSyxpQkFBTyx1SkFDRkEsT0FBTyxDQUFDVSxLQUFSLENBQWMsQ0FBZCxFQUFpQkwsV0FBakIsQ0FERSxJQUVMRCxZQUZLLDhJQUdGSixPQUFPLENBQUNVLEtBQVIsQ0FBY0wsV0FBVyxHQUFHLENBQTVCLENBSEU7QUFGVDtBQVFEOztBQUNELFNBQUtNLG9EQUFMO0FBQWtCO0FBQ2hCLCtDQUNLaEIsS0FETDtBQUVFTyxlQUFLLEVBQUVOLE1BQU0sQ0FBQ007QUFGaEI7QUFJRDs7QUFDRDtBQUNFLGFBQU9QLEtBQVA7QUFyQ0o7QUF1Q0QsQ0F4Q0Q7O0tBQU1ELGM7QUEwQ1NBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLmFmNmM3Yjk0ZDM3NDhlOGJmNzBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEdFVF9BTExfU1VDQ0VTUyxcclxuICBHRVRfQUxMX0ZBSUxVUkUsXHJcbiAgUFVUX1NVQ0VTUyxcclxuICBQVVRfRkFJTFVSRSxcclxufSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfU1RBVFVTID0ge1xyXG4gIExPQURJTkc6IFwibG9hZGluZ1wiLFxyXG4gIFNVQ0NFU1M6IFwic3VjY2Vzc1wiLFxyXG4gIEVSUk9SOiBcImVycm9yXCIsXHJcbn07XHJcblxyXG5jb25zdCBSZXF1ZXN0UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBHRVRfQUxMX1NVQ0NFU1M6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzdGF0dXM6IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MsXHJcbiAgICAgICAgcmVjb3JkczogYWN0aW9uLnJlY29yZHMsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIEdFVF9BTExfRkFJTFVSRToge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuRVJST1IsXHJcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgUFVUX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc3QgeyByZWNvcmRzIH0gPSBzdGF0ZTtcclxuICAgICAgY29uc3QgeyBzaW5nbGVSZWNvcmQgfSA9IGFjdGlvbjtcclxuICAgICAgY29uc3QgcmVjb3JkSW5kZXggPSByZWNvcmRzXHJcbiAgICAgICAgLm1hcCgoc2luZ2xlKSA9PiBzaW5nbGUuaWQpXHJcbiAgICAgICAgLmluZGV4T2Yoc2luZ2xlUmVjb3JkLmlkKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICByZWNvcmRzOiBbXHJcbiAgICAgICAgICAuLi5yZWNvcmRzLnNsaWNlKDAsIHJlY29yZEluZGV4KSxcclxuICAgICAgICAgIHNpbmdsZVJlY29yZCxcclxuICAgICAgICAgIC4uLnJlY29yZHMuc2xpY2UocmVjb3JkSW5kZXggKyAxKSxcclxuICAgICAgICBdLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBQVVRfRkFJTFVSRToge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=