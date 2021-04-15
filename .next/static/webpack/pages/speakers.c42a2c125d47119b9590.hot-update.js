webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: GET_ALL_SUCCESS, GET_ALL_FAILURE, PUT_SUCCCESS, PUT_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_SUCCESS", function() { return GET_ALL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_FAILURE", function() { return GET_ALL_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUT_SUCCCESS", function() { return PUT_SUCCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUT_FAILURE", function() { return PUT_FAILURE; });
var GET_ALL_SUCCESS = "GET_ALL_SUCCESS";
var GET_ALL_FAILURE = "GET_ALL_FAILURE";
var PUT_SUCCCESS = "PUT_SUCCCESS";
var PUT_FAILURE = "PUT_FAILURE";

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

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(reducer, {
    status: _reducers__WEBPACK_IMPORTED_MODULE_10__["REQUEST_STATUS"].LOADING,
    speakers: []
  }),
      _useReducer$ = _useReducer[0],
      speakers = _useReducer$.speakers,
      status = _useReducer$.status,
      dispatch = _useReducer[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      error = _useState2[0],
      setError = _useState2[1];

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
                  speakers: response.data,
                  type: "GET_ALL_SUCCESS"
                }); // dispatch({
                //   status: REQUEST_STATUS.SUCCESS,
                //   type: "UPDATE_STATUS",
                // });

                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                dispatch({
                  status: _reducers__WEBPACK_IMPORTED_MODULE_10__["REQUEST_STATUS"].ERROR,
                  type: "UPDATE_STATUS"
                });
                setError(_context.t0);

              case 11:
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
      lineNumber: 59,
      columnNumber: 9
    }, _this);
  });

  var toggleFavoriteStatus = function toggleFavoriteStatus(speakerRecord) {
    return _objectSpread(_objectSpread({}, speakerRecord), {}, {
      isFavorite: !speakerRecord.isFavorite
    });
  };

  var toggleButtonHandler = /*#__PURE__*/function () {
    var _ref2 = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(speakerRecord) {
      var toggledSpeakerRecord, speakerIndex;
      return J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              toggledSpeakerRecord = toggleFavoriteStatus(speakerRecord);
              speakerIndex = speakers.map(function (single) {
                return single.id;
              }).indexOf(speakerRecord.id);
              _context2.prev = 2;
              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.put("http://localhost:4000/speakers/".concat(speakerRecord.id), toggledSpeakerRecord);

            case 5:
              setSpeakers([].concat(Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(speakers.slice(0, speakerIndex)), [toggledSpeakerRecord], Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(speakers.slice(speakerIndex + 1))));
              _context2.next = 12;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](2);
              dispatch({
                status: _reducers__WEBPACK_IMPORTED_MODULE_10__["REQUEST_STATUS"].ERROR,
                type: "UPDATE_STATUS"
              });
              setError(_context2.t0);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 8]]);
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
      lineNumber: 101,
      columnNumber: 7
    }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }, _this), isError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["Loading error... Is the json-server up and running? (try \"npm run json-server\" at your terminal) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 42
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: ["ERROR: ", error.message]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
      children: mapSpeakers
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Speakers, "0bEMKZgUqEBw2yKLo69YZ9oke2E=");

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

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: REQUEST_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_STATUS", function() { return REQUEST_STATUS; });
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error"
};

var requestReducer = function requestReducer(state, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["GET_ALL_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        status: REQUEST_STATUS.SUCCESS,
        speakers: action.speakers
      });

    case "UPDATE_STATUS":
      return _objectSpread(_objectSpread({}, state), {}, {
        status: action.status
      });
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiR0VUX0FMTF9TVUNDRVNTIiwiR0VUX0FMTF9GQUlMVVJFIiwiUFVUX1NVQ0NDRVNTIiwiUFVUX0ZBSUxVUkUiLCJTcGVha2VycyIsInVzZVN0YXRlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdHVzIiwiUkVRVUVTVF9TVEFUVVMiLCJMT0FESU5HIiwic3BlYWtlcnMiLCJkaXNwYXRjaCIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJheGlvcyIsImdldCIsInJlc3BvbnNlIiwiZGF0YSIsInR5cGUiLCJFUlJPUiIsInN1Y2Nlc3MiLCJTVUNDRVNTIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsIm1hcFNwZWFrZXJzIiwiZmlsdGVyIiwicmVjb3JkIiwidGFyZ2V0U3RyaW5nIiwibGFzdE5hbWUiLCJmaXJzdE5hbWUiLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsImluY2x1ZGVzIiwibWFwIiwic2luZ2xlIiwidG9nZ2xlQnV0dG9uSGFuZGxlciIsImlkIiwidG9nZ2xlRmF2b3JpdGVTdGF0dXMiLCJzcGVha2VyUmVjb3JkIiwiaXNGYXZvcml0ZSIsInRvZ2dsZWRTcGVha2VyUmVjb3JkIiwic3BlYWtlckluZGV4IiwiaW5kZXhPZiIsInB1dCIsInNldFNwZWFrZXJzIiwic2xpY2UiLCJtZXNzYWdlIiwicmVxdWVzdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGakMsZUFHRTtBQUFBLDhCQUFXYixLQUFLLENBQUNvQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSixFQVdHMUIsT0FBTyxpQkFDTjtBQUFLLGVBQVMsRUFBQyx1REFBZjtBQUFBLGdCQUNHSTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaSjtBQUFBLGtCQURGO0FBbUJELENBeEdEOztHQUFNekIsUTs7S0FBQUEsUTtBQXlHU0EsdUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEhBO0FBT08sSUFBTU8sY0FBYyxHQUFHO0FBQzVCQyxTQUFPLEVBQUUsU0FEbUI7QUFFNUJjLFNBQU8sRUFBRSxTQUZtQjtBQUc1QkYsT0FBSyxFQUFFO0FBSHFCLENBQXZCOztBQU1QLElBQU00QixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN4QyxVQUFRQSxNQUFNLENBQUMvQixJQUFmO0FBQ0UsU0FBS3ZCLHdEQUFMO0FBQ0UsNkNBQ0txRCxLQURMO0FBRUUzQyxjQUFNLEVBQUVDLGNBQWMsQ0FBQ2UsT0FGekI7QUFHRWIsZ0JBQVEsRUFBRXlDLE1BQU0sQ0FBQ3pDO0FBSG5COztBQUtGLFNBQUssZUFBTDtBQUNFLDZDQUNLd0MsS0FETDtBQUVFM0MsY0FBTSxFQUFFNEMsTUFBTSxDQUFDNUM7QUFGakI7QUFSSjtBQWFELENBZEQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuYzQyYTJjMTI1ZDQ3MTE5Yjk1OTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBHRVRfQUxMX1NVQ0NFU1MgPSBcIkdFVF9BTExfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0FMTF9GQUlMVVJFID0gXCJHRVRfQUxMX0ZBSUxVUkVcIjtcclxuZXhwb3J0IGNvbnN0IFBVVF9TVUNDQ0VTUyA9IFwiUFVUX1NVQ0NDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBQVVRfRkFJTFVSRSA9IFwiUFVUX0ZBSUxVUkVcIjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi4vU2VhcmNoQmFyXCI7XHJcbi8vIGltcG9ydCBzcGVha2Vyc0RhdGEgZnJvbSBcIi4vZGF0YS5qc1wiO1xyXG5pbXBvcnQgU2luZ2xlU3BlYWtlciBmcm9tIFwiLi9zaW5nbGVTcGVha2VyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuICBHRVRfQUxMX1NVQ0NFU1MsXHJcbiAgR0VUX0FMTF9GQUlMVVJFLFxyXG4gIFBVVF9TVUNFU1MsXHJcbiAgUFVUX0ZBSUxVUkUsXHJcbn0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHJlcXVlc3RSZWR1Y2VyLCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcblxyXG5jb25zdCBTcGVha2VycyA9ICgpID0+IHtcclxuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbeyBzcGVha2Vycywgc3RhdHVzIH0sIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge1xyXG4gICAgc3RhdHVzOiBSRVFVRVNUX1NUQVRVUy5MT0FESU5HLFxyXG4gICAgc3BlYWtlcnM6IFtdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NwZWFrZXJzXCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHNwZWFrZXJzOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgdHlwZTogXCJHRVRfQUxMX1NVQ0NFU1NcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBkaXNwYXRjaCh7XHJcbiAgICAgICAgLy8gICBzdGF0dXM6IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MsXHJcbiAgICAgICAgLy8gICB0eXBlOiBcIlVQREFURV9TVEFUVVNcIixcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuRVJST1IsXHJcbiAgICAgICAgICB0eXBlOiBcIlVQREFURV9TVEFUVVNcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRFcnJvcihlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc3VjY2VzcyA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUztcclxuICBjb25zdCBpc0xvYWRpbmcgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkxPQURJTkc7XHJcbiAgY29uc3QgaXNFcnJvciA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRVJST1I7XHJcblxyXG4gIGNvbnN0IG1hcFNwZWFrZXJzID0gc3BlYWtlcnNcclxuICAgIC5maWx0ZXIoKHJlY29yZCkgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXRTdHJpbmcgPSBgJHtyZWNvcmQubGFzdE5hbWV9ICR7cmVjb3JkLmZpcnN0TmFtZX1gLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHJldHVybiBzZWFyY2hRdWVyeS5sZW5ndGggPT09IDBcclxuICAgICAgICA/IHRydWVcclxuICAgICAgICA6IHRhcmdldFN0cmluZy5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH0pXHJcbiAgICAubWFwKChzaW5nbGUpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U2luZ2xlU3BlYWtlclxyXG4gICAgICAgICAga2V5PXtzaW5nbGUuaWR9XHJcbiAgICAgICAgICB7Li4uc2luZ2xlfVxyXG4gICAgICAgICAgdG9nZ2xlQnV0dG9uPXsoKSA9PiB0b2dnbGVCdXR0b25IYW5kbGVyKHNpbmdsZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCB0b2dnbGVGYXZvcml0ZVN0YXR1cyA9IChzcGVha2VyUmVjb3JkKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zcGVha2VyUmVjb3JkLFxyXG4gICAgICBpc0Zhdm9yaXRlOiAhc3BlYWtlclJlY29yZC5pc0Zhdm9yaXRlLFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVCdXR0b25IYW5kbGVyID0gYXN5bmMgKHNwZWFrZXJSZWNvcmQpID0+IHtcclxuICAgIGNvbnN0IHRvZ2dsZWRTcGVha2VyUmVjb3JkID0gdG9nZ2xlRmF2b3JpdGVTdGF0dXMoc3BlYWtlclJlY29yZCk7XHJcbiAgICBjb25zdCBzcGVha2VySW5kZXggPSBzcGVha2Vyc1xyXG4gICAgICAubWFwKChzaW5nbGUpID0+IHNpbmdsZS5pZClcclxuICAgICAgLmluZGV4T2Yoc3BlYWtlclJlY29yZC5pZCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucHV0KFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjQwMDAvc3BlYWtlcnMvJHtzcGVha2VyUmVjb3JkLmlkfWAsXHJcbiAgICAgICAgdG9nZ2xlZFNwZWFrZXJSZWNvcmRcclxuICAgICAgKTtcclxuICAgICAgc2V0U3BlYWtlcnMoW1xyXG4gICAgICAgIC4uLnNwZWFrZXJzLnNsaWNlKDAsIHNwZWFrZXJJbmRleCksXHJcbiAgICAgICAgdG9nZ2xlZFNwZWFrZXJSZWNvcmQsXHJcbiAgICAgICAgLi4uc3BlYWtlcnMuc2xpY2Uoc3BlYWtlckluZGV4ICsgMSksXHJcbiAgICAgIF0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgc3RhdHVzOiBSRVFVRVNUX1NUQVRVUy5FUlJPUixcclxuICAgICAgICB0eXBlOiBcIlVQREFURV9TVEFUVVNcIixcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U2VhcmNoQmFyIHNlYXJjaFF1ZXJ5PXtzZWFyY2hRdWVyeX0gc2V0U2VhcmNoUXVlcnk9e3NldFNlYXJjaFF1ZXJ5fSAvPlxyXG4gICAgICB7aXNMb2FkaW5nICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2Pn1cclxuICAgICAgey8qIGVycm9yIGhhbmRsaW5nICovfVxyXG4gICAgICB7aXNFcnJvciAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIExvYWRpbmcgZXJyb3IuLi4gSXMgdGhlIGpzb24tc2VydmVyIHVwIGFuZCBydW5uaW5nPyAodHJ5IFwibnBtIHJ1blxyXG4gICAgICAgICAganNvbi1zZXJ2ZXJcIiBhdCB5b3VyIHRlcm1pbmFsKSA8YnIgLz5cclxuICAgICAgICAgIDxiPkVSUk9SOiB7ZXJyb3IubWVzc2FnZX08L2I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzdWNjZXNzICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ3JpZC1jb2xzLTEgZ2FwLTEyXCI+XHJcbiAgICAgICAgICB7bWFwU3BlYWtlcnN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VycztcclxuIiwiaW1wb3J0IHtcclxuICBHRVRfQUxMX1NVQ0NFU1MsXHJcbiAgR0VUX0FMTF9GQUlMVVJFLFxyXG4gIFBVVF9TVUNFU1MsXHJcbiAgUFVUX0ZBSUxVUkUsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcclxuICBMT0FESU5HOiBcImxvYWRpbmdcIixcclxuICBTVUNDRVNTOiBcInN1Y2Nlc3NcIixcclxuICBFUlJPUjogXCJlcnJvclwiLFxyXG59O1xyXG5cclxuY29uc3QgcmVxdWVzdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgR0VUX0FMTF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyxcclxuICAgICAgICBzcGVha2VyczogYWN0aW9uLnNwZWFrZXJzLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIlVQREFURV9TVEFUVVNcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzdGF0dXM6IGFjdGlvbi5zdGF0dXMsXHJcbiAgICAgIH07XHJcbiAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9