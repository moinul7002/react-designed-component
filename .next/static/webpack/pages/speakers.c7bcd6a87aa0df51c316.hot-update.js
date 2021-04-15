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
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SearchBar */ "./src/components/SearchBar/index.js");
/* harmony import */ var _singleSpeaker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./singleSpeaker */ "./src/components/Speakers/singleSpeaker.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../reducers */ "./src/reducers/index.js");







var _jsxFileName = "J:\\react-search-designed-component\\src\\components\\Speakers\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // import speakersData from "./data.js";






var Speakers = function Speakers() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      searchQuery = _useState[0],
      setSearchQuery = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(_reducers__WEBPACK_IMPORTED_MODULE_10__["default"], {
    records: [],
    status: _reducers__WEBPACK_IMPORTED_MODULE_10__["REQUEST_STATUS"].LOADING,
    error: null
  }),
      _useReducer$ = _useReducer[0],
      speakers = _useReducer$.records,
      status = _useReducer$.status,
      error = _useReducer$.error,
      dispatch = _useReducer[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
        var response;
        return J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("http://localhost:4000/speakers");

              case 3:
                response = _context.sent;
                dispatch({
                  records: response.data,
                  type: _actions__WEBPACK_IMPORTED_MODULE_9__["GET_ALL_SUCCESS"]
                });
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                dispatch({
                  type: _actions__WEBPACK_IMPORTED_MODULE_9__["GET_ALL_FAILURE"],
                  error: _context.t0
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  var success = status === _reducers__WEBPACK_IMPORTED_MODULE_10__["REQUEST_STATUS"].SUCCESS;
  var isLoading = status === _reducers__WEBPACK_IMPORTED_MODULE_10__["REQUEST_STATUS"].LOADING;
  var isError = status === _reducers__WEBPACK_IMPORTED_MODULE_10__["REQUEST_STATUS"].ERROR;
  var mapSpeakers = speakers.filter(function (record) {
    var targetString = "".concat(record.lastName, " ").concat(record.firstName).toLowerCase();
    return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
  }).map(function (single) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_singleSpeaker__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread(_objectSpread({}, single), {}, {
      toggleButton: function toggleButton() {
        return toggleButtonHandler(single);
      }
    }), single.id, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, _this);
  });

  var toggleButtonHandler = /*#__PURE__*/function () {
    var _ref2 = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(speakerRecord) {
      var toggledFavoriteStatus;
      return J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              toggledFavoriteStatus = function toggledFavoriteStatus(speakerRecord) {
                return _objectSpread(_objectSpread({}, speakerRecord), {}, {
                  isFavorite: !speakerRecord.isFavorite
                });
              };

              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.put("http://localhost:4000/speakers/".concat(speakerRecord.id), toggledFavoriteStatus);

            case 4:
              setSpeakers([].concat(Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(speakers.slice(0, speakerIndex)), [toggledSpeakerRecord], Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(speakers.slice(speakerIndex + 1))));
              _context2.next = 11;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              dispatch({
                status: _reducers__WEBPACK_IMPORTED_MODULE_10__["REQUEST_STATUS"].ERROR,
                type: "UPDATE_STATUS"
              });
              setError(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function toggleButtonHandler(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }, _this), isError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["Loading error... Is the json-server up and running? (try \"npm run json-server\" at your terminal) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 42
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: ["ERROR: ", error.message]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
      children: mapSpeakers
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Speakers, "xbmOdl54+5Ya+Kee7SjZw2fsJss=");

_c = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Speakers);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiU3BlYWtlcnMiLCJ1c2VTdGF0ZSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJ1c2VSZWR1Y2VyIiwiUmVxdWVzdFJlZHVjZXIiLCJyZWNvcmRzIiwic3RhdHVzIiwiUkVRVUVTVF9TVEFUVVMiLCJMT0FESU5HIiwiZXJyb3IiLCJzcGVha2VycyIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJ0eXBlIiwiR0VUX0FMTF9TVUNDRVNTIiwiR0VUX0FMTF9GQUlMVVJFIiwic3VjY2VzcyIsIlNVQ0NFU1MiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiRVJST1IiLCJtYXBTcGVha2VycyIsImZpbHRlciIsInJlY29yZCIsInRhcmdldFN0cmluZyIsImxhc3ROYW1lIiwiZmlyc3ROYW1lIiwidG9Mb3dlckNhc2UiLCJsZW5ndGgiLCJpbmNsdWRlcyIsIm1hcCIsInNpbmdsZSIsInRvZ2dsZUJ1dHRvbkhhbmRsZXIiLCJpZCIsInNwZWFrZXJSZWNvcmQiLCJ0b2dnbGVkRmF2b3JpdGVTdGF0dXMiLCJpc0Zhdm9yaXRlIiwicHV0Iiwic2V0U3BlYWtlcnMiLCJzbGljZSIsInNwZWFrZXJJbmRleCIsInRvZ2dsZWRTcGVha2VyUmVjb3JkIiwic2V0RXJyb3IiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBTUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNpQkMsc0RBQVEsQ0FBQyxFQUFELENBRHpCO0FBQUEsTUFDZEMsV0FEYztBQUFBLE1BQ0RDLGNBREM7O0FBQUEsb0JBR29DQyx3REFBVSxDQUNq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LEVBQUU7QUFGQyxlQUFELENBQVI7QUFJQTZCLHNCQUFRLGNBQVI7O0FBdkJ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFuQlYsbUJBQW1CO0FBQUE7QUFBQTtBQUFBLEtBQXpCOztBQTJCQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGtEQUFEO0FBQVcsaUJBQVcsRUFBRXBDLFdBQXhCO0FBQXFDLG9CQUFjLEVBQUVDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHcUIsU0FBUyxpQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZoQixFQUlHQyxPQUFPLGlCQUNOO0FBQUEscUlBRWlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGakMsZUFHRTtBQUFBLDhCQUFXZixLQUFLLENBQUN1QyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSixFQVdHM0IsT0FBTyxpQkFDTjtBQUFLLGVBQVMsRUFBQyx1REFBZjtBQUFBLGdCQUNHSztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaSjtBQUFBLGtCQURGO0FBbUJELENBakdEOztHQUFNM0IsUTs7S0FBQUEsUTtBQWtHU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuYzdiY2Q2YTg3YWEwZGY1MWMzMTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uL1NlYXJjaEJhclwiO1xyXG4vLyBpbXBvcnQgc3BlYWtlcnNEYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcclxuaW1wb3J0IFNpbmdsZVNwZWFrZXIgZnJvbSBcIi4vc2luZ2xlU3BlYWtlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcbiAgR0VUX0FMTF9TVUNDRVNTLFxyXG4gIEdFVF9BTExfRkFJTFVSRSxcclxuICBQVVRfU1VDRVNTLFxyXG4gIFBVVF9GQUlMVVJFLFxyXG59IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XHJcbmltcG9ydCBSZXF1ZXN0UmVkdWNlciwgeyBSRVFVRVNUX1NUQVRVUyB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5cclxuY29uc3QgU3BlYWtlcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW3sgcmVjb3Jkczogc3BlYWtlcnMsIHN0YXR1cywgZXJyb3IgfSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcclxuICAgIFJlcXVlc3RSZWR1Y2VyLFxyXG4gICAge1xyXG4gICAgICByZWNvcmRzOiBbXSxcclxuICAgICAgc3RhdHVzOiBSRVFVRVNUX1NUQVRVUy5MT0FESU5HLFxyXG4gICAgICBlcnJvcjogbnVsbCxcclxuICAgIH1cclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NwZWFrZXJzXCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHJlY29yZHM6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICB0eXBlOiBHRVRfQUxMX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBHRVRfQUxMX0ZBSUxVUkUsXHJcbiAgICAgICAgICBlcnJvcjogZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc3VjY2VzcyA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUztcclxuICBjb25zdCBpc0xvYWRpbmcgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkxPQURJTkc7XHJcbiAgY29uc3QgaXNFcnJvciA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRVJST1I7XHJcblxyXG4gIGNvbnN0IG1hcFNwZWFrZXJzID0gc3BlYWtlcnNcclxuICAgIC5maWx0ZXIoKHJlY29yZCkgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXRTdHJpbmcgPSBgJHtyZWNvcmQubGFzdE5hbWV9ICR7cmVjb3JkLmZpcnN0TmFtZX1gLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHJldHVybiBzZWFyY2hRdWVyeS5sZW5ndGggPT09IDBcclxuICAgICAgICA/IHRydWVcclxuICAgICAgICA6IHRhcmdldFN0cmluZy5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH0pXHJcbiAgICAubWFwKChzaW5nbGUpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U2luZ2xlU3BlYWtlclxyXG4gICAgICAgICAga2V5PXtzaW5nbGUuaWR9XHJcbiAgICAgICAgICB7Li4uc2luZ2xlfVxyXG4gICAgICAgICAgdG9nZ2xlQnV0dG9uPXsoKSA9PiB0b2dnbGVCdXR0b25IYW5kbGVyKHNpbmdsZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCB0b2dnbGVCdXR0b25IYW5kbGVyID0gYXN5bmMgKHNwZWFrZXJSZWNvcmQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHRvZ2dsZWRGYXZvcml0ZVN0YXR1cyA9IChzcGVha2VyUmVjb3JkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnNwZWFrZXJSZWNvcmQsXHJcbiAgICAgICAgICBpc0Zhdm9yaXRlOiAhc3BlYWtlclJlY29yZC5pc0Zhdm9yaXRlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBhd2FpdCBheGlvcy5wdXQoXHJcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zcGVha2Vycy8ke3NwZWFrZXJSZWNvcmQuaWR9YCxcclxuICAgICAgICB0b2dnbGVkRmF2b3JpdGVTdGF0dXNcclxuICAgICAgKTtcclxuICAgICAgc2V0U3BlYWtlcnMoW1xyXG4gICAgICAgIC4uLnNwZWFrZXJzLnNsaWNlKDAsIHNwZWFrZXJJbmRleCksXHJcbiAgICAgICAgdG9nZ2xlZFNwZWFrZXJSZWNvcmQsXHJcbiAgICAgICAgLi4uc3BlYWtlcnMuc2xpY2Uoc3BlYWtlckluZGV4ICsgMSksXHJcbiAgICAgIF0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgc3RhdHVzOiBSRVFVRVNUX1NUQVRVUy5FUlJPUixcclxuICAgICAgICB0eXBlOiBcIlVQREFURV9TVEFUVVNcIixcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U2VhcmNoQmFyIHNlYXJjaFF1ZXJ5PXtzZWFyY2hRdWVyeX0gc2V0U2VhcmNoUXVlcnk9e3NldFNlYXJjaFF1ZXJ5fSAvPlxyXG4gICAgICB7aXNMb2FkaW5nICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2Pn1cclxuICAgICAgey8qIGVycm9yIGhhbmRsaW5nICovfVxyXG4gICAgICB7aXNFcnJvciAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIExvYWRpbmcgZXJyb3IuLi4gSXMgdGhlIGpzb24tc2VydmVyIHVwIGFuZCBydW5uaW5nPyAodHJ5IFwibnBtIHJ1blxyXG4gICAgICAgICAganNvbi1zZXJ2ZXJcIiBhdCB5b3VyIHRlcm1pbmFsKSA8YnIgLz5cclxuICAgICAgICAgIDxiPkVSUk9SOiB7ZXJyb3IubWVzc2FnZX08L2I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzdWNjZXNzICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ3JpZC1jb2xzLTEgZ2FwLTEyXCI+XHJcbiAgICAgICAgICB7bWFwU3BlYWtlcnN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VycztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==