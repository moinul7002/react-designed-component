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
/* harmony import */ var _HOCs_withRequest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../HOCs/withRequest */ "./src/HOCs/withRequest.js");






var _jsxFileName = "J:\\react-search-designed-component\\src\\components\\Speakers\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Speakers = function Speakers(_ref) {
  _s();

  var speakers = _ref.records,
      status = _ref.status,
      error = _ref.error,
      put = _ref.put;

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
      lineNumber: 31,
      columnNumber: 9
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }, _this), isError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["Loading error... Is the json-server up and running? (try \"npm run json-server\" at your terminal) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 42
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: ["ERROR: ", error.message]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
      children: mapSpeakers
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Speakers, "4/Qdl0R3tQNJqUS4eMrvY/uMU/4=");

_c = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOCs_withRequest__WEBPACK_IMPORTED_MODULE_8__["default"])("http://localhost:4000", "speakers")(Speakers));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiU3BlYWtlcnMiLCJzcGVha2VycyIsInJlY29yZHMiLCJzdGF0dXMiLCJlcnJvciIsInB1dCIsInVzZVN0YXRlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInN1Y2Nlc3MiLCJSRVFVRVNUX1NUQVRVUyIsIlNVQ0NFU1MiLCJpc0xvYWRpbmciLCJMT0FESU5HIiwiaXNFcnJvciIsIkVSUk9SIiwidG9nZ2xlQnV0dG9uSGFuZGxlciIsInNwZWFrZXJSZWNvcmQiLCJpc0Zhdm9yaXRlIiwibWFwU3BlYWtlcnMiLCJmaWx0ZXIiLCJyZWNvcmQiLCJ0YXJnZXRTdHJpbmciLCJsYXN0TmFtZSIsImZpcnN0TmFtZSIsInRvTG93ZXJDYXNlIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJtYXAiLCJzaW5nbGUiLCJpZCIsIm1lc3NhZ2UiLCJ3aXRoUmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBK0M7QUFBQTs7QUFBQSxNQUFuQ0MsUUFBbUMsUUFBNUNDLE9BQTRDO0FBQUEsTUFBekJDLE1BQXlCLFFBQXpCQSxNQUF5QjtBQUFBLE1BQWpCQyxLQUFpQixRQUFqQkEsS0FBaUI7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7O0FBQUEsa0JBQ3hCQyxzREFBUSxDQUFDLEVBQUQsQ0FEZ0I7QUFBQSxNQUN2REMsV0FEdUQ7QUFBQSxNQUMxQ0MsY0FEMEM7O0FBRzlELE1BQU1DLE9BQU8sR0FBR04sTUFBTSxLQUFLTyx3REFBYyxDQUFDQyxPQUExQztBQUNBLE1BQU1DLFNBQVMsR0FBR1QsTUFBTSxLQUFLTyx3REFBYyxDQUFDRyxPQUE1QztBQUNBLE1BQU1DLE9BQU8sR0FBR1gsTUFBTSxLQUFLTyx3REFBYyxDQUFDSyxLQUExQzs7QUFFQSxNQUFNQyxtQkFBbUI7QUFBQSw2UkFBRyxpQkFBT0MsYUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFCWixpQkFBRyxpQ0FDRVksYUFERjtBQUVEQywwQkFBVSxFQUFFLENBQUNELGFBQWEsQ0FBQ0M7QUFGMUIsaUJBQUg7O0FBRDBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQW5CRixtQkFBbUI7QUFBQTtBQUFBO0FBQUEsS0FBekI7O0FBT0EsTUFBTUcsV0FBVyxHQUFHbEIsUUFBUSxDQUN6Qm1CLE1BRGlCLENBQ1YsVUFBQ0MsTUFBRCxFQUFZO0FBQ2xCLFFBQU1DLFlBQVksR0FBRyxVQUFHRCxNQUFNLENBQUNFLFFBQVYsY0FBc0JGLE1BQU0sQ0FBQ0csU0FBN0IsRUFBeUNDLFdBQXpDLEVBQXJCO0FBQ0EsV0FBT2xCLFdBQVcsQ0FBQ21CLE1BQVosS0FBdUIsQ0FBdkIsR0FDSCxJQURHLEdBRUhKLFlBQVksQ0FBQ0ssUUFBYixDQUFzQnBCLFdBQVcsQ0FBQ2tCLFdBQVosRUFBdEIsQ0FGSjtBQUdELEdBTmlCLEVBT2pCRyxHQVBpQixDQU9iLFVBQUNDLE1BQUQsRUFBWTtBQUNmLHdCQUNFLHFFQUFDLHNEQUFELGtDQUVNQSxNQUZOO0FBR0Usa0JBQVksRUFBRTtBQUFBLGVBQU1iLG1CQUFtQixDQUFDYSxNQUFELENBQXpCO0FBQUE7QUFIaEIsUUFDT0EsTUFBTSxDQUFDQyxFQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQU9ELEdBZmlCLENBQXBCO0FBaUJBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsa0RBQUQ7QUFBVyxpQkFBVyxFQUFFdkIsV0FBeEI7QUFBcUMsb0JBQWMsRUFBRUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUdJLFNBQVMsaUJBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGaEIsRUFJR0UsT0FBTyxpQkFDTjtBQUFBLHFJQUVpQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRmpDLGVBR0U7QUFBQSw4QkFBV1YsS0FBSyxDQUFDMkIsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosRUFXR3RCLE9BQU8saUJBQ047QUFBSyxlQUFTLEVBQUMsdURBQWY7QUFBQSxnQkFDR1U7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWko7QUFBQSxrQkFERjtBQW1CRCxDQWxERDs7R0FBTW5CLFE7O0tBQUFBLFE7QUFvRFNnQyxnSUFBVyxDQUFDLHVCQUFELEVBQTBCLFVBQTFCLENBQVgsQ0FBaURoQyxRQUFqRCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLjU4N2U0NGQzYjY5NzQ0ZDQwMjU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi4vU2VhcmNoQmFyXCI7XHJcbmltcG9ydCBTaW5nbGVTcGVha2VyIGZyb20gXCIuL3NpbmdsZVNwZWFrZXJcIjtcclxuXHJcbmltcG9ydCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB3aXRoUmVxdWVzdCBmcm9tIFwiLi4vLi4vSE9Dcy93aXRoUmVxdWVzdFwiO1xyXG5cclxuY29uc3QgU3BlYWtlcnMgPSAoeyByZWNvcmRzOiBzcGVha2Vycywgc3RhdHVzLCBlcnJvciwgcHV0IH0pID0+IHtcclxuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBzdWNjZXNzID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTO1xyXG4gIGNvbnN0IGlzTG9hZGluZyA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuTE9BRElORztcclxuICBjb25zdCBpc0Vycm9yID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5FUlJPUjtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQnV0dG9uSGFuZGxlciA9IGFzeW5jIChzcGVha2VyUmVjb3JkKSA9PiB7XHJcbiAgICBwdXQoe1xyXG4gICAgICAuLi5zcGVha2VyUmVjb3JkLFxyXG4gICAgICBpc0Zhdm9yaXRlOiAhc3BlYWtlclJlY29yZC5pc0Zhdm9yaXRlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbWFwU3BlYWtlcnMgPSBzcGVha2Vyc1xyXG4gICAgLmZpbHRlcigocmVjb3JkKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldFN0cmluZyA9IGAke3JlY29yZC5sYXN0TmFtZX0gJHtyZWNvcmQuZmlyc3ROYW1lfWAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgcmV0dXJuIHNlYXJjaFF1ZXJ5Lmxlbmd0aCA9PT0gMFxyXG4gICAgICAgID8gdHJ1ZVxyXG4gICAgICAgIDogdGFyZ2V0U3RyaW5nLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfSlcclxuICAgIC5tYXAoKHNpbmdsZSkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTaW5nbGVTcGVha2VyXHJcbiAgICAgICAgICBrZXk9e3NpbmdsZS5pZH1cclxuICAgICAgICAgIHsuLi5zaW5nbGV9XHJcbiAgICAgICAgICB0b2dnbGVCdXR0b249eygpID0+IHRvZ2dsZUJ1dHRvbkhhbmRsZXIoc2luZ2xlKX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U2VhcmNoQmFyIHNlYXJjaFF1ZXJ5PXtzZWFyY2hRdWVyeX0gc2V0U2VhcmNoUXVlcnk9e3NldFNlYXJjaFF1ZXJ5fSAvPlxyXG4gICAgICB7aXNMb2FkaW5nICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2Pn1cclxuICAgICAgey8qIGVycm9yIGhhbmRsaW5nICovfVxyXG4gICAgICB7aXNFcnJvciAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIExvYWRpbmcgZXJyb3IuLi4gSXMgdGhlIGpzb24tc2VydmVyIHVwIGFuZCBydW5uaW5nPyAodHJ5IFwibnBtIHJ1blxyXG4gICAgICAgICAganNvbi1zZXJ2ZXJcIiBhdCB5b3VyIHRlcm1pbmFsKSA8YnIgLz5cclxuICAgICAgICAgIDxiPkVSUk9SOiB7ZXJyb3IubWVzc2FnZX08L2I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzdWNjZXNzICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ3JpZC1jb2xzLTEgZ2FwLTEyXCI+XHJcbiAgICAgICAgICB7bWFwU3BlYWtlcnN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlcXVlc3QoXCJodHRwOi8vbG9jYWxob3N0OjQwMDBcIiwgXCJzcGVha2Vyc1wiKShTcGVha2Vycyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=