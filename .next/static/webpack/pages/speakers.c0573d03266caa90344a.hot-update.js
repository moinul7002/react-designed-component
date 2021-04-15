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
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SearchBar */ "./src/components/SearchBar/index.js");
/* harmony import */ var _singleSpeaker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./singleSpeaker */ "./src/components/Speakers/singleSpeaker.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "J:\\react-search-designed-component\\src\\components\\Speakers\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // import speakersData from "./data.js";




var Speakers = function Speakers() {
  _s();

  var REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error"
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      searchQuery = _useState[0],
      setSearchQuery = _useState[1];

  var reducer = function reducer(state, action) {
    switch (action.type) {
      case "GET_ALL_SUCCESS":
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

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(reducer, {
    status: REQUEST_STATUS.LOADING,
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
      var _ref = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var response;
        return J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
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
                  status: REQUEST_STATUS.ERROR,
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
  var success = status === REQUEST_STATUS.SUCCESS;
  var isLoading = status === REQUEST_STATUS.LOADING;
  var isError = status === REQUEST_STATUS.ERROR;
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
      lineNumber: 72,
      columnNumber: 9
    }, _this);
  });

  var toggleFavoriteStatus = function toggleFavoriteStatus(speakerRecord) {
    return _objectSpread(_objectSpread({}, speakerRecord), {}, {
      isFavorite: !speakerRecord.isFavorite
    });
  };

  var toggleButtonHandler = /*#__PURE__*/function () {
    var _ref2 = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(speakerRecord) {
      var toggledSpeakerRecord, speakerIndex;
      return J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
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
                status: REQUEST_STATUS.ERROR,
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
      lineNumber: 114,
      columnNumber: 7
    }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }, _this), isError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["Loading error... Is the json-server up and running? (try \"npm run json-server\" at your terminal) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 42
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: ["ERROR: ", error.message]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
      children: mapSpeakers
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiU3BlYWtlcnMiLCJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJTVUNDRVNTIiwiRVJST1IiLCJ1c2VTdGF0ZSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwic3RhdHVzIiwic3BlYWtlcnMiLCJ1c2VSZWR1Y2VyIiwiZGlzcGF0Y2giLCJlcnJvciIsInNldEVycm9yIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJzdWNjZXNzIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsIm1hcFNwZWFrZXJzIiwiZmlsdGVyIiwicmVjb3JkIiwidGFyZ2V0U3RyaW5nIiwibGFzdE5hbWUiLCJmaXJzdE5hbWUiLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsImluY2x1ZGVzIiwibWFwIiwic2luZ2xlIiwidG9nZ2xlQnV0dG9uSGFuZGxlciIsImlkIiwidG9nZ2xlRmF2b3JpdGVTdGF0dXMiLCJzcGVha2VyUmVjb3JkIiwiaXNGYXZvcml0ZSIsInRvZ2dsZWRTcGVha2VyUmVjb3JkIiwic3BlYWtlckluZGV4IiwiaW5kZXhPZiIsInB1dCIsInNldFNwZWFrZXJzIiwic2xpY2UiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxjQUFjLEdBQUc7QUFDckJDLFdBQU8sRUFBRSxTQURZO0FBRXJCQyxXQUFPLEVBQUUsU0FGWTtBQUdyQkMsU0FBSyxFQUFFO0FBSGMsR0FBdkI7O0FBRHFCLGtCQU1pQkMsc0RBQVEsQ0FBQyxFQUFELENBTnpC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cUlBRWlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGakMsZUFHRTtBQUFBLDhCQUFXVixLQUFLLENBQUNpQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSixFQVdHekIsT0FBTyxpQkFDTjtBQUFLLGVBQVMsRUFBQyx1REFBZjtBQUFBLGdCQUNHRztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaSjtBQUFBLGtCQURGO0FBbUJELENBNUhEOztHQUFNM0IsUTs7S0FBQUEsUTtBQTZIU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuYzA1NzNkMDMyNjZjYWE5MDM0NGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uL1NlYXJjaEJhclwiO1xyXG4vLyBpbXBvcnQgc3BlYWtlcnNEYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcclxuaW1wb3J0IFNpbmdsZVNwZWFrZXIgZnJvbSBcIi4vc2luZ2xlU3BlYWtlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBTcGVha2VycyA9ICgpID0+IHtcclxuICBjb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcclxuICAgIExPQURJTkc6IFwibG9hZGluZ1wiLFxyXG4gICAgU1VDQ0VTUzogXCJzdWNjZXNzXCIsXHJcbiAgICBFUlJPUjogXCJlcnJvclwiLFxyXG4gIH07XHJcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJHRVRfQUxMX1NVQ0NFU1NcIjpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBzdGF0dXM6IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MsXHJcbiAgICAgICAgICBzcGVha2VyczogYWN0aW9uLnNwZWFrZXJzLFxyXG4gICAgICAgIH07XHJcbiAgICAgIGNhc2UgXCJVUERBVEVfU1RBVFVTXCI6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgc3RhdHVzOiBhY3Rpb24uc3RhdHVzLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBbeyBzcGVha2Vycywgc3RhdHVzIH0sIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge1xyXG4gICAgc3RhdHVzOiBSRVFVRVNUX1NUQVRVUy5MT0FESU5HLFxyXG4gICAgc3BlYWtlcnM6IFtdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NwZWFrZXJzXCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHNwZWFrZXJzOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgdHlwZTogXCJHRVRfQUxMX1NVQ0NFU1NcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBkaXNwYXRjaCh7XHJcbiAgICAgICAgLy8gICBzdGF0dXM6IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MsXHJcbiAgICAgICAgLy8gICB0eXBlOiBcIlVQREFURV9TVEFUVVNcIixcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuRVJST1IsXHJcbiAgICAgICAgICB0eXBlOiBcIlVQREFURV9TVEFUVVNcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRFcnJvcihlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc3VjY2VzcyA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUztcclxuICBjb25zdCBpc0xvYWRpbmcgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkxPQURJTkc7XHJcbiAgY29uc3QgaXNFcnJvciA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRVJST1I7XHJcblxyXG4gIGNvbnN0IG1hcFNwZWFrZXJzID0gc3BlYWtlcnNcclxuICAgIC5maWx0ZXIoKHJlY29yZCkgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXRTdHJpbmcgPSBgJHtyZWNvcmQubGFzdE5hbWV9ICR7cmVjb3JkLmZpcnN0TmFtZX1gLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHJldHVybiBzZWFyY2hRdWVyeS5sZW5ndGggPT09IDBcclxuICAgICAgICA/IHRydWVcclxuICAgICAgICA6IHRhcmdldFN0cmluZy5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH0pXHJcbiAgICAubWFwKChzaW5nbGUpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U2luZ2xlU3BlYWtlclxyXG4gICAgICAgICAga2V5PXtzaW5nbGUuaWR9XHJcbiAgICAgICAgICB7Li4uc2luZ2xlfVxyXG4gICAgICAgICAgdG9nZ2xlQnV0dG9uPXsoKSA9PiB0b2dnbGVCdXR0b25IYW5kbGVyKHNpbmdsZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCB0b2dnbGVGYXZvcml0ZVN0YXR1cyA9IChzcGVha2VyUmVjb3JkKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zcGVha2VyUmVjb3JkLFxyXG4gICAgICBpc0Zhdm9yaXRlOiAhc3BlYWtlclJlY29yZC5pc0Zhdm9yaXRlLFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVCdXR0b25IYW5kbGVyID0gYXN5bmMgKHNwZWFrZXJSZWNvcmQpID0+IHtcclxuICAgIGNvbnN0IHRvZ2dsZWRTcGVha2VyUmVjb3JkID0gdG9nZ2xlRmF2b3JpdGVTdGF0dXMoc3BlYWtlclJlY29yZCk7XHJcbiAgICBjb25zdCBzcGVha2VySW5kZXggPSBzcGVha2Vyc1xyXG4gICAgICAubWFwKChzaW5nbGUpID0+IHNpbmdsZS5pZClcclxuICAgICAgLmluZGV4T2Yoc3BlYWtlclJlY29yZC5pZCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucHV0KFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjQwMDAvc3BlYWtlcnMvJHtzcGVha2VyUmVjb3JkLmlkfWAsXHJcbiAgICAgICAgdG9nZ2xlZFNwZWFrZXJSZWNvcmRcclxuICAgICAgKTtcclxuICAgICAgc2V0U3BlYWtlcnMoW1xyXG4gICAgICAgIC4uLnNwZWFrZXJzLnNsaWNlKDAsIHNwZWFrZXJJbmRleCksXHJcbiAgICAgICAgdG9nZ2xlZFNwZWFrZXJSZWNvcmQsXHJcbiAgICAgICAgLi4uc3BlYWtlcnMuc2xpY2Uoc3BlYWtlckluZGV4ICsgMSksXHJcbiAgICAgIF0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgc3RhdHVzOiBSRVFVRVNUX1NUQVRVUy5FUlJPUixcclxuICAgICAgICB0eXBlOiBcIlVQREFURV9TVEFUVVNcIixcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U2VhcmNoQmFyIHNlYXJjaFF1ZXJ5PXtzZWFyY2hRdWVyeX0gc2V0U2VhcmNoUXVlcnk9e3NldFNlYXJjaFF1ZXJ5fSAvPlxyXG4gICAgICB7aXNMb2FkaW5nICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2Pn1cclxuICAgICAgey8qIGVycm9yIGhhbmRsaW5nICovfVxyXG4gICAgICB7aXNFcnJvciAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIExvYWRpbmcgZXJyb3IuLi4gSXMgdGhlIGpzb24tc2VydmVyIHVwIGFuZCBydW5uaW5nPyAodHJ5IFwibnBtIHJ1blxyXG4gICAgICAgICAganNvbi1zZXJ2ZXJcIiBhdCB5b3VyIHRlcm1pbmFsKSA8YnIgLz5cclxuICAgICAgICAgIDxiPkVSUk9SOiB7ZXJyb3IubWVzc2FnZX08L2I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzdWNjZXNzICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ3JpZC1jb2xzLTEgZ2FwLTEyXCI+XHJcbiAgICAgICAgICB7bWFwU3BlYWtlcnN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VycztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==