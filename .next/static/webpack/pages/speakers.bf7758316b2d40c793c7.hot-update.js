webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/Speakers/index.js":
/*!******************************************!*\
  !*** ./src/components/Speakers/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SearchBar */ "./src/components/SearchBar/index.js");
/* harmony import */ var _singleSpeaker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./singleSpeaker */ "./src/components/Speakers/singleSpeaker.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reducers */ "./src/reducers/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _HOCs_withRequest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../HOCs/withRequest */ "./src/HOCs/withRequest.js");
/* harmony import */ var _HOCs_withSpecialMessage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../HOCs/withSpecialMessage */ "./src/HOCs/withSpecialMessage.js");






var _jsxFileName = "J:\\react-search-designed-component\\src\\components\\Speakers\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 //HOCs




var Speakers = function Speakers(_ref) {
  _s();

  var speakers = _ref.records,
      status = _ref.status,
      error = _ref.error,
      put = _ref.put,
      bgColor = _ref.bgColor,
      specialMessage = _ref.specialMessage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      searchQuery = _useState[0],
      setSearchQuery = _useState[1];

  var success = status === _reducers__WEBPACK_IMPORTED_MODULE_7__["REQUEST_STATUS"].SUCCESS;
  var isLoading = status === _reducers__WEBPACK_IMPORTED_MODULE_7__["REQUEST_STATUS"].LOADING;
  var isError = status === _reducers__WEBPACK_IMPORTED_MODULE_7__["REQUEST_STATUS"].ERROR;

  var toggleButtonHandler = /*#__PURE__*/function () {
    var _ref2 = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(speakerRecord) {
      return J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              put(_objectSpread(_objectSpread({}, speakerRecord), {}, {
                isFavorite: !speakerRecord.isFavorite
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function toggleButtonHandler(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var mapSpeakers = speakers.filter(function (record) {
    var targetString = "".concat(record.lastName, " ").concat(record.firstName).toLowerCase();
    return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
  }).map(function (single) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_singleSpeaker__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({}, single), {}, {
      toggleButton: function toggleButton() {
        return toggleButtonHandler(single);
      }
    }), single.id, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), specialMessage && specialMessage.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-orange-100 border-1-8 border-orange-500 text-orange-700 p-4 text-2xl",
      role: "alert",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "font-bold",
        children: "Special Message"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: specialMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }, _this), isError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["Loading error... Is the json-server up and running? (try \"npm run json-server\" at your terminal) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 42
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: ["ERROR: ", error.message]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
      children: mapSpeakers
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Speakers, "4/Qdl0R3tQNJqUS4eMrvY/uMU/4=");

_c = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_8__["compose"])(Object(_HOCs_withSpecialMessage__WEBPACK_IMPORTED_MODULE_10__["default"])(), Object(_HOCs_withRequest__WEBPACK_IMPORTED_MODULE_9__["default"])("http://localhost:4000", "speakers"))(Speakers));

var _c;

$RefreshReg$(_c, "Speakers");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiU3BlYWtlcnMiLCJzcGVha2VycyIsInJlY29yZHMiLCJzdGF0dXMiLCJlcnJvciIsInB1dCIsImJnQ29sb3IiLCJzcGVjaWFsTWVzc2FnZSIsInVzZVN0YXRlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInN1Y2Nlc3MiLCJSRVFVRVNUX1NUQVRVUyIsIlNVQ0NFU1MiLCJpc0xvYWRpbmciLCJMT0FESU5HIiwiaXNFcnJvciIsIkVSUk9SIiwidG9nZ2xlQnV0dG9uSGFuZGxlciIsInNwZWFrZXJSZWNvcmQiLCJpc0Zhdm9yaXRlIiwibWFwU3BlYWtlcnMiLCJmaWx0ZXIiLCJyZWNvcmQiLCJ0YXJnZXRTdHJpbmciLCJsYXN0TmFtZSIsImZpcnN0TmFtZSIsInRvTG93ZXJDYXNlIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJtYXAiLCJzaW5nbGUiLCJpZCIsIm1lc3NhZ2UiLCJjb21wb3NlIiwid2l0aFNwZWNpYWxNZXNzYWdlIiwid2l0aFJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQU9YO0FBQUE7O0FBQUEsTUFOS0MsUUFNTCxRQU5KQyxPQU1JO0FBQUEsTUFMSkMsTUFLSSxRQUxKQSxNQUtJO0FBQUEsTUFKSkMsS0FJSSxRQUpKQSxLQUlJO0FBQUEsTUFISkMsR0FHSSxRQUhKQSxHQUdJO0FBQUEsTUFGSkMsT0FFSSxRQUZKQSxPQUVJO0FBQUEsTUFESkMsY0FDSSxRQURKQSxjQUNJOztBQUFBLGtCQUNrQ0Msc0RBQVEsQ0FBQyxFQUFELENBRDFDO0FBQUEsTUFDR0MsV0FESDtBQUFBLE1BQ2dCQyxjQURoQjs7QUFHSixNQUFNQyxPQUFPLEdBQUdSLE1BQU0sS0FBS1Msd0RBQWMsQ0FBQ0MsT0FBMUM7QUFDQSxNQUFNQyxTQUFTLEdBQUdYLE1BQU0sS0FBS1Msd0RBQWMsQ0FBQ0csT0FBNUM7QUFDQSxNQUFNQyxPQUFPLEdBQUdiLE1BQU0sS0FBS1Msd0RBQWMsQ0FBQ0ssS0FBMUM7O0FBRUEsTUFBTUMsbUJBQW1CO0FBQUEsNlJBQUcsaUJBQU9DLGFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMxQmQsaUJBQUcsaUNBQ0VjLGFBREY7QUFFREMsMEJBQVUsRUFBRSxDQUFDRCxhQUFhLENBQUNDO0FBRjFCLGlCQUFIOztBQUQwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFuQkYsbUJBQW1CO0FBQUE7QUFBQTtBQUFBLEtBQXpCOztBQU9BLE1BQU1HLFdBQVcsR0FBR3BCLFFBQVEsQ0FDekJxQixNQURpQixDQUNWLFVBQUNDLE1BQUQsRUFBWTtBQUNsQixRQUFNQyxZQUFZLEdBQUcsVUFBR0QsTUFBTSxDQUFDRSxRQUFWLGNBQXNCRixNQUFNLENBQUNHLFNBQTdCLEVBQXlDQyxXQUF6QyxFQUFyQjtBQUNBLFdBQU9sQixXQUFXLENBQUNtQixNQUFaLEtBQXVCLENBQXZCLEdBQ0gsSUFERyxHQUVISixZQUFZLENBQUNLLFFBQWIsQ0FBc0JwQixXQUFXLENBQUNrQixXQUFaLEVBQXRCLENBRko7QUFHRCxHQU5pQixFQU9qQkcsR0FQaUIsQ0FPYixVQUFDQyxNQUFELEVBQVk7QUFDZix3QkFDRSxxRUFBQyxzREFBRCxrQ0FFTUEsTUFGTjtBQUdFLGtCQUFZLEVBQUU7QUFBQSxlQUFNYixtQkFBbUIsQ0FBQ2EsTUFBRCxDQUF6QjtBQUFBO0FBSGhCLFFBQ09BLE1BQU0sQ0FBQ0MsRUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFPRCxHQWZpQixDQUFwQjtBQWlCQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGtEQUFEO0FBQVcsaUJBQVcsRUFBRXZCLFdBQXhCO0FBQXFDLG9CQUFjLEVBQUVDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUdHSCxjQUFjLElBQUlBLGNBQWMsQ0FBQ3FCLE1BQWYsR0FBd0IsQ0FBMUMsaUJBQ0M7QUFDRSxlQUFTLEVBQUMseUVBRFo7QUFFRSxVQUFJLEVBQUMsT0FGUDtBQUFBLDhCQUlFO0FBQUcsaUJBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFLRTtBQUFBLGtCQUFJckI7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkosRUFhR08sU0FBUyxpQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJoQixFQWdCR0UsT0FBTyxpQkFDTjtBQUFBLHFJQUVpQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRmpDLGVBR0U7QUFBQSw4QkFBV1osS0FBSyxDQUFDNkIsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJKLEVBd0JHdEIsT0FBTyxpQkFDTjtBQUFLLGVBQVMsRUFBQyx1REFBZjtBQUFBLGdCQUNHVTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6Qko7QUFBQSxrQkFERjtBQWdDRCxDQXRFRDs7R0FBTXJCLFE7O0tBQUFBLFE7QUF3RVNrQyx3SEFBTyxDQUNwQkMseUVBQWtCLEVBREUsRUFFcEJDLGlFQUFXLENBQUMsdUJBQUQsRUFBMEIsVUFBMUIsQ0FGUyxDQUFQLENBR2JwQyxRQUhhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuYmY3NzU4MzE2YjJkNDBjNzkzYzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuLi9TZWFyY2hCYXJcIjtcclxuaW1wb3J0IFNpbmdsZVNwZWFrZXIgZnJvbSBcIi4vc2luZ2xlU3BlYWtlclwiO1xyXG5pbXBvcnQgeyBSRVFVRVNUX1NUQVRVUyB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSBcInJlY29tcG9zZVwiO1xyXG5cclxuLy9IT0NzXHJcbmltcG9ydCB3aXRoUmVxdWVzdCBmcm9tIFwiLi4vLi4vSE9Dcy93aXRoUmVxdWVzdFwiO1xyXG5pbXBvcnQgd2l0aFNwZWNpYWxNZXNzYWdlIGZyb20gXCIuLi8uLi9IT0NzL3dpdGhTcGVjaWFsTWVzc2FnZVwiO1xyXG5cclxuY29uc3QgU3BlYWtlcnMgPSAoe1xyXG4gIHJlY29yZHM6IHNwZWFrZXJzLFxyXG4gIHN0YXR1cyxcclxuICBlcnJvcixcclxuICBwdXQsXHJcbiAgYmdDb2xvcixcclxuICBzcGVjaWFsTWVzc2FnZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHN1Y2Nlc3MgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1M7XHJcbiAgY29uc3QgaXNMb2FkaW5nID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5MT0FESU5HO1xyXG4gIGNvbnN0IGlzRXJyb3IgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkVSUk9SO1xyXG5cclxuICBjb25zdCB0b2dnbGVCdXR0b25IYW5kbGVyID0gYXN5bmMgKHNwZWFrZXJSZWNvcmQpID0+IHtcclxuICAgIHB1dCh7XHJcbiAgICAgIC4uLnNwZWFrZXJSZWNvcmQsXHJcbiAgICAgIGlzRmF2b3JpdGU6ICFzcGVha2VyUmVjb3JkLmlzRmF2b3JpdGUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtYXBTcGVha2VycyA9IHNwZWFrZXJzXHJcbiAgICAuZmlsdGVyKChyZWNvcmQpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0U3RyaW5nID0gYCR7cmVjb3JkLmxhc3ROYW1lfSAke3JlY29yZC5maXJzdE5hbWV9YC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICByZXR1cm4gc2VhcmNoUXVlcnkubGVuZ3RoID09PSAwXHJcbiAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgOiB0YXJnZXRTdHJpbmcuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9KVxyXG4gICAgLm1hcCgoc2luZ2xlKSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNpbmdsZVNwZWFrZXJcclxuICAgICAgICAgIGtleT17c2luZ2xlLmlkfVxyXG4gICAgICAgICAgey4uLnNpbmdsZX1cclxuICAgICAgICAgIHRvZ2dsZUJ1dHRvbj17KCkgPT4gdG9nZ2xlQnV0dG9uSGFuZGxlcihzaW5nbGUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTZWFyY2hCYXIgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fSBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9IC8+XHJcblxyXG4gICAgICB7c3BlY2lhbE1lc3NhZ2UgJiYgc3BlY2lhbE1lc3NhZ2UubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctb3JhbmdlLTEwMCBib3JkZXItMS04IGJvcmRlci1vcmFuZ2UtNTAwIHRleHQtb3JhbmdlLTcwMCBwLTQgdGV4dC0yeGxcIlxyXG4gICAgICAgICAgcm9sZT1cImFsZXJ0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5TcGVjaWFsIE1lc3NhZ2U8L3A+XHJcbiAgICAgICAgICA8cD57c3BlY2lhbE1lc3NhZ2V9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2lzTG9hZGluZyAmJiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj59XHJcblxyXG4gICAgICB7LyogZXJyb3IgaGFuZGxpbmcgKi99XHJcbiAgICAgIHtpc0Vycm9yICYmIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgTG9hZGluZyBlcnJvci4uLiBJcyB0aGUganNvbi1zZXJ2ZXIgdXAgYW5kIHJ1bm5pbmc/ICh0cnkgXCJucG0gcnVuXHJcbiAgICAgICAgICBqc29uLXNlcnZlclwiIGF0IHlvdXIgdGVybWluYWwpIDxiciAvPlxyXG4gICAgICAgICAgPGI+RVJST1I6IHtlcnJvci5tZXNzYWdlfTwvYj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtzdWNjZXNzICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ3JpZC1jb2xzLTEgZ2FwLTEyXCI+XHJcbiAgICAgICAgICB7bWFwU3BlYWtlcnN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcclxuICB3aXRoU3BlY2lhbE1lc3NhZ2UoKSxcclxuICB3aXRoUmVxdWVzdChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMFwiLCBcInNwZWFrZXJzXCIpXHJcbikoU3BlYWtlcnMpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9