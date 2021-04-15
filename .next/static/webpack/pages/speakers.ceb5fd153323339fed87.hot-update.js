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
          speakers: action.speakers
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
        var speakers = state.speakers;
        var singleRecord = action.singleRecord;
        var speakerIndex = speakers.map(function (single) {
          return single.id;
        }).indexOf(singleRecord.id);
        return _objectSpread(_objectSpread({}, state), {}, {
          speakers: [].concat(Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(speakers.slice(0, speakerIndex)), [toggledSpeakerRecord], Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(speakers.slice(speakerIndex + 1)))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJFUVVFU1RfU1RBVFVTIiwiTE9BRElORyIsIlNVQ0NFU1MiLCJFUlJPUiIsIlJlcXVlc3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiR0VUX0FMTF9TVUNDRVNTIiwic3RhdHVzIiwic3BlYWtlcnMiLCJHRVRfQUxMX0ZBSUxVUkUiLCJlcnJvciIsIlBVVF9TVUNDRVNTIiwic2luZ2xlUmVjb3JkIiwic3BlYWtlckluZGV4IiwibWFwIiwic2luZ2xlIiwiaWQiLCJpbmRleE9mIiwic2xpY2UiLCJ0b2dnbGVkU3BlYWtlclJlY29yZCIsIlBVVF9GQUlMVVJFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPTyxJQUFNQSxjQUFjLEdBQUc7QUFDNUJDLFNBQU8sRUFBRSxTQURtQjtBQUU1QkMsU0FBTyxFQUFFLFNBRm1CO0FBRzVCQyxPQUFLLEVBQUU7QUFIcUIsQ0FBdkI7O0FBTVAsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDeEMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0Msd0RBQUw7QUFBc0I7QUFDcEIsK0NBQ0tILEtBREw7QUFFRUksZ0JBQU0sRUFBRVQsY0FBYyxDQUFDRSxPQUZ6QjtBQUdFUSxrQkFBUSxFQUFFSixNQUFNLENBQUNJO0FBSG5CO0FBS0Q7O0FBQ0QsU0FBS0Msd0RBQUw7QUFBc0I7QUFDcEIsK0NBQ0tOLEtBREw7QUFFRUksZ0JBQU0sRUFBRVQsY0FBYyxDQUFDRyxLQUZ6QjtBQUdFUyxlQUFLLEVBQUVOLE1BQU0sQ0FBQ007QUFIaEI7QUFLRDs7QUFDRCxTQUFLQyxXQUFMO0FBQWtCO0FBQUEsWUFDUkgsUUFEUSxHQUNLTCxLQURMLENBQ1JLLFFBRFE7QUFBQSxZQUVSSSxZQUZRLEdBRVNSLE1BRlQsQ0FFUlEsWUFGUTtBQUdoQixZQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FDMUJNLEdBRGtCLENBQ2QsVUFBQ0MsTUFBRDtBQUFBLGlCQUFZQSxNQUFNLENBQUNDLEVBQW5CO0FBQUEsU0FEYyxFQUVsQkMsT0FGa0IsQ0FFVkwsWUFBWSxDQUFDSSxFQUZILENBQXJCO0FBR0EsK0NBQ0tiLEtBREw7QUFFRUssa0JBQVEsdUpBQ0hBLFFBQVEsQ0FBQ1UsS0FBVCxDQUFlLENBQWYsRUFBa0JMLFlBQWxCLENBREcsSUFFTk0sb0JBRk0sOElBR0hYLFFBQVEsQ0FBQ1UsS0FBVCxDQUFlTCxZQUFZLEdBQUcsQ0FBOUIsQ0FIRztBQUZWO0FBUUQ7O0FBQ0QsU0FBS08sb0RBQUw7QUFBa0I7QUFDaEIsK0NBQ0tqQixLQURMO0FBRUVPLGVBQUssRUFBRU4sTUFBTSxDQUFDTTtBQUZoQjtBQUlEOztBQUNEO0FBQ0UsYUFBT1AsS0FBUDtBQXJDSjtBQXVDRCxDQXhDRDs7S0FBTUQsYztBQTBDU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuY2ViNWZkMTUzMzIzMzM5ZmVkODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgR0VUX0FMTF9TVUNDRVNTLFxyXG4gIEdFVF9BTExfRkFJTFVSRSxcclxuICBQVVRfU1VDRVNTLFxyXG4gIFBVVF9GQUlMVVJFLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVRVUVTVF9TVEFUVVMgPSB7XHJcbiAgTE9BRElORzogXCJsb2FkaW5nXCIsXHJcbiAgU1VDQ0VTUzogXCJzdWNjZXNzXCIsXHJcbiAgRVJST1I6IFwiZXJyb3JcIixcclxufTtcclxuXHJcbmNvbnN0IFJlcXVlc3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEdFVF9BTExfU1VDQ0VTUzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyxcclxuICAgICAgICBzcGVha2VyczogYWN0aW9uLnNwZWFrZXJzLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBHRVRfQUxMX0ZBSUxVUkU6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzdGF0dXM6IFJFUVVFU1RfU1RBVFVTLkVSUk9SLFxyXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIFBVVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHsgc3BlYWtlcnMgfSA9IHN0YXRlO1xyXG4gICAgICBjb25zdCB7IHNpbmdsZVJlY29yZCB9ID0gYWN0aW9uO1xyXG4gICAgICBjb25zdCBzcGVha2VySW5kZXggPSBzcGVha2Vyc1xyXG4gICAgICAgIC5tYXAoKHNpbmdsZSkgPT4gc2luZ2xlLmlkKVxyXG4gICAgICAgIC5pbmRleE9mKHNpbmdsZVJlY29yZC5pZCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc3BlYWtlcnM6IFtcclxuICAgICAgICAgIC4uLnNwZWFrZXJzLnNsaWNlKDAsIHNwZWFrZXJJbmRleCksXHJcbiAgICAgICAgICB0b2dnbGVkU3BlYWtlclJlY29yZCxcclxuICAgICAgICAgIC4uLnNwZWFrZXJzLnNsaWNlKHNwZWFrZXJJbmRleCArIDEpLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIFBVVF9GQUlMVVJFOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0UmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==