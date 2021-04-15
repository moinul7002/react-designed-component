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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiU3BlYWtlcnMiLCJ1c2VTdGF0ZSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJ1c2VSZWR1Y2VyIiwicmVkdWNlciIsInN0YXR1cyIsIlJFUVVFU1RfU1RBVFVTIiwiTE9BRElORyIsInNwZWFrZXJzIiwiZGlzcGF0Y2giLCJlcnJvciIsInNldEVycm9yIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJ0eXBlIiwiRVJST1IiLCJzdWNjZXNzIiwiU1VDQ0VTUyIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJtYXBTcGVha2VycyIsImZpbHRlciIsInJlY29yZCIsInRhcmdldFN0cmluZyIsImxhc3ROYW1lIiwiZmlyc3ROYW1lIiwidG9Mb3dlckNhc2UiLCJsZW5ndGgiLCJpbmNsdWRlcyIsIm1hcCIsInNpbmdsZSIsInRvZ2dsZUJ1dHRvbkhhbmRsZXIiLCJpZCIsInRvZ2dsZUZhdm9yaXRlU3RhdHVzIiwic3BlYWtlclJlY29yZCIsImlzRmF2b3JpdGUiLCJ0b2dnbGVkU3BlYWtlclJlY29yZCIsInNwZWFrZXJJbmRleCIsImluZGV4T2YiLCJwdXQiLCJzZXRTcGVha2VycyIsInNsaWNlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQU1BOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDaUJDLHNEQUFRLENBQUMsRUFBRCxDQUR6QjtBQUFBLE1BQ2RDLFdBRGM7QUFBQSxNQUNEQyxjQURDOztBQUFBLG9CQUdvQkMsd0RBQVUsQ0FBQ0MsT0FBRCxFQUFVO0FBQzNEQyxVQUFNLEVBQUVDLHlEQUFjLENBQUNDLE9BRG9DO0FBRTNEQyxZQUFRLEVBQUU7QUFGaUQsR0FBVixDQUg5QjtBQUFBO0FBQUEsTUFHWkEsUUFIWSxnQkFHWkEsUUFIWTtBQUFBLE1BR0ZILE1BSEUsZ0JBR0ZBLE1BSEU7QUFBQSxNQUdRSSxRQUhSOztBQUFBLG1CQU9LVCxzREFBUSxDQUFDLEVBQUQsQ0FQYjtBQUFBLE1BT2RVLEtBUGM7QUFBQSxNQU9QQyxRQVBPOztBQVNyQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsU0FBUztBQUFBLDhSQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFU0MsNENBQUssQ0FBQ0MsR0FBTixDQUFVLGdDQUFWLENBRlQ7O0FBQUE7QUFFUkMsd0JBRlE7QUFHZFAsd0JBQVEsQ0FBQztBQUNQRCwwQkFBUSxFQUFFUSxRQUFRLENBQUNDLElBRFo7QUFFUEMsc0JBQUksRUFBRTtBQUZDLGlCQUFELENBQVIsQ0FIYyxDQU9kO0FBQ0E7QUFDQTtBQUNBOztBQVZjO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBWWRULHdCQUFRLENBQUM7QUFDUEosd0JBQU0sRUFBRUMseURBQWMsQ0FBQ2EsS0FEaEI7QUFFUEQsc0JBQUksRUFBRTtBQUZDLGlCQUFELENBQVI7QUFJQVAsd0JBQVEsYUFBUjs7QUFoQmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVEUsU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQW1CQUEsYUFBUztBQUNWLEdBckJRLEVBcUJOLEVBckJNLENBQVQ7QUF1QkEsTUFBTU8sT0FBTyxHQUFHZixNQUFNLEtBQUtDLHlEQUFjLENBQUNlLE9BQTFDO0FBQ0EsTUFBTUMsU0FBUyxHQUFHakIsTUFBTSxLQUFLQyx5REFBYyxDQUFDQyxPQUE1QztBQUNBLE1BQU1nQixPQUFPLEdBQUdsQixNQUFNLEtBQUtDLHlEQUFjLENBQUNhLEtBQTFDO0FBRUEsTUFBTUssV0FBVyxHQUFHaEIsUUFBUSxDQUN6QmlCLE1BRGlCLENBQ1YsVUFBQ0MsTUFBRCxFQUFZO0FBQ2xCLFFBQU1DLFlBQVksR0FBRyxVQUFHRCxNQUFNLENBQUNFLFFBQVYsY0FBc0JGLE1BQU0sQ0FBQ0csU0FBN0IsRUFBeUNDLFdBQXpDLEVBQXJCO0FBQ0EsV0FBTzdCLFdBQVcsQ0FBQzhCLE1BQVosS0FBdUIsQ0FBdkIsR0FDSCxJQURHLEdBRUhKLFlBQVksQ0FBQ0ssUUFBYixDQUFzQi9CLFdBQVcsQ0FBQzZCLFdBQVosRUFBdEIsQ0FGSjtBQUdELEdBTmlCLEVBT2pCRyxHQVBpQixDQU9iLFVBQUNDLE1BQUQsRUFBWTtBQUNmLHdCQUNFLHFFQUFDLHNEQUFELGtDQUVNQSxNQUZOO0FBR0Usa0JBQVksRUFBRTtBQUFBLGVBQU1DLG1CQUFtQixDQUFDRCxNQUFELENBQXpCO0FBQUE7QUFIaEIsUUFDT0EsTUFBTSxDQUFDRSxFQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQU9ELEdBZmlCLENBQXBCOztBQWlCQSxNQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLGFBQUQsRUFBbUI7QUFDOUMsMkNBQ0tBLGFBREw7QUFFRUMsZ0JBQVUsRUFBRSxDQUFDRCxhQUFhLENBQUNDO0FBRjdCO0FBSUQsR0FMRDs7QUFPQSxNQUFNSixtQkFBbUI7QUFBQSw2UkFBRyxrQkFBT0csYUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEJFLGtDQURvQixHQUNHSCxvQkFBb0IsQ0FBQ0MsYUFBRCxDQUR2QjtBQUVwQkcsMEJBRm9CLEdBRUxqQyxRQUFRLENBQzFCeUIsR0FEa0IsQ0FDZCxVQUFDQyxNQUFEO0FBQUEsdUJBQVlBLE1BQU0sQ0FBQ0UsRUFBbkI7QUFBQSxlQURjLEVBRWxCTSxPQUZrQixDQUVWSixhQUFhLENBQUNGLEVBRkosQ0FGSztBQUFBO0FBQUE7QUFBQSxxQkFPbEJ0Qiw0Q0FBSyxDQUFDNkIsR0FBTiwwQ0FDOEJMLGFBQWEsQ0FBQ0YsRUFENUMsR0FFSkksb0JBRkksQ0FQa0I7O0FBQUE7QUFXeEJJLHlCQUFXLHNKQUNOcEMsUUFBUSxDQUFDcUMsS0FBVCxDQUFlLENBQWYsRUFBa0JKLFlBQWxCLENBRE0sSUFFVEQsb0JBRlMsOElBR05oQyxRQUFRLENBQUNxQyxLQUFULENBQWVKLFlBQVksR0FBRyxDQUE5QixDQUhNLEdBQVg7QUFYd0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFpQnhCaEMsc0JBQVEsQ0FBQztBQUNQSixzQkFBTSxFQUFFQyx5REFBYyxDQUFDYSxLQURoQjtBQUVQRCxvQkFBSSxFQUFFO0FBRkMsZUFBRCxDQUFSO0FBSUFQLHNCQUFRLGNBQVI7O0FBckJ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFuQndCLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxLQUF6Qjs7QUF5QkEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxrREFBRDtBQUFXLGlCQUFXLEVBQUVsQyxXQUF4QjtBQUFxQyxvQkFBYyxFQUFFQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFR29CLFNBQVMsaUJBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGaEIsRUFJR0MsT0FBTyxpQkFDTjtBQUFBLHFJQUVpQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRmpDLGVBR0U7QUFBQSw4QkFBV2IsS0FBSyxDQUFDb0MsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosRUFXRzFCLE9BQU8saUJBQ047QUFBSyxlQUFTLEVBQUMsdURBQWY7QUFBQSxnQkFDR0k7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWko7QUFBQSxrQkFERjtBQW1CRCxDQXhHRDs7R0FBTXpCLFE7O0tBQUFBLFE7QUF5R1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLmQzZGM2MWY3NDE4NjRhNzUxOTA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuLi9TZWFyY2hCYXJcIjtcclxuLy8gaW1wb3J0IHNwZWFrZXJzRGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XHJcbmltcG9ydCBTaW5nbGVTcGVha2VyIGZyb20gXCIuL3NpbmdsZVNwZWFrZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIEdFVF9BTExfU1VDQ0VTUyxcclxuICBHRVRfQUxMX0ZBSUxVUkUsXHJcbiAgUFVUX1NVQ0VTUyxcclxuICBQVVRfRkFJTFVSRSxcclxufSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgUmVxdWVzdFJlZHVjZXIsIHsgUkVRVUVTVF9TVEFUVVMgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbmNvbnN0IFNwZWFrZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFt7IHNwZWFrZXJzLCBzdGF0dXMgfSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCB7XHJcbiAgICBzdGF0dXM6IFJFUVVFU1RfU1RBVFVTLkxPQURJTkcsXHJcbiAgICBzcGVha2VyczogW10sXHJcbiAgfSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvc3BlYWtlcnNcIik7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgc3BlYWtlcnM6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICB0eXBlOiBcIkdFVF9BTExfU1VDQ0VTU1wiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGRpc3BhdGNoKHtcclxuICAgICAgICAvLyAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyxcclxuICAgICAgICAvLyAgIHR5cGU6IFwiVVBEQVRFX1NUQVRVU1wiLFxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgc3RhdHVzOiBSRVFVRVNUX1NUQVRVUy5FUlJPUixcclxuICAgICAgICAgIHR5cGU6IFwiVVBEQVRFX1NUQVRVU1wiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldEVycm9yKGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzdWNjZXNzID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTO1xyXG4gIGNvbnN0IGlzTG9hZGluZyA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuTE9BRElORztcclxuICBjb25zdCBpc0Vycm9yID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5FUlJPUjtcclxuXHJcbiAgY29uc3QgbWFwU3BlYWtlcnMgPSBzcGVha2Vyc1xyXG4gICAgLmZpbHRlcigocmVjb3JkKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldFN0cmluZyA9IGAke3JlY29yZC5sYXN0TmFtZX0gJHtyZWNvcmQuZmlyc3ROYW1lfWAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgcmV0dXJuIHNlYXJjaFF1ZXJ5Lmxlbmd0aCA9PT0gMFxyXG4gICAgICAgID8gdHJ1ZVxyXG4gICAgICAgIDogdGFyZ2V0U3RyaW5nLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfSlcclxuICAgIC5tYXAoKHNpbmdsZSkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTaW5nbGVTcGVha2VyXHJcbiAgICAgICAgICBrZXk9e3NpbmdsZS5pZH1cclxuICAgICAgICAgIHsuLi5zaW5nbGV9XHJcbiAgICAgICAgICB0b2dnbGVCdXR0b249eygpID0+IHRvZ2dsZUJ1dHRvbkhhbmRsZXIoc2luZ2xlKX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUZhdm9yaXRlU3RhdHVzID0gKHNwZWFrZXJSZWNvcmQpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnNwZWFrZXJSZWNvcmQsXHJcbiAgICAgIGlzRmF2b3JpdGU6ICFzcGVha2VyUmVjb3JkLmlzRmF2b3JpdGUsXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUJ1dHRvbkhhbmRsZXIgPSBhc3luYyAoc3BlYWtlclJlY29yZCkgPT4ge1xyXG4gICAgY29uc3QgdG9nZ2xlZFNwZWFrZXJSZWNvcmQgPSB0b2dnbGVGYXZvcml0ZVN0YXR1cyhzcGVha2VyUmVjb3JkKTtcclxuICAgIGNvbnN0IHNwZWFrZXJJbmRleCA9IHNwZWFrZXJzXHJcbiAgICAgIC5tYXAoKHNpbmdsZSkgPT4gc2luZ2xlLmlkKVxyXG4gICAgICAuaW5kZXhPZihzcGVha2VyUmVjb3JkLmlkKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wdXQoXHJcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zcGVha2Vycy8ke3NwZWFrZXJSZWNvcmQuaWR9YCxcclxuICAgICAgICB0b2dnbGVkU3BlYWtlclJlY29yZFxyXG4gICAgICApO1xyXG4gICAgICBzZXRTcGVha2VycyhbXHJcbiAgICAgICAgLi4uc3BlYWtlcnMuc2xpY2UoMCwgc3BlYWtlckluZGV4KSxcclxuICAgICAgICB0b2dnbGVkU3BlYWtlclJlY29yZCxcclxuICAgICAgICAuLi5zcGVha2Vycy5zbGljZShzcGVha2VySW5kZXggKyAxKSxcclxuICAgICAgXSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICBzdGF0dXM6IFJFUVVFU1RfU1RBVFVTLkVSUk9SLFxyXG4gICAgICAgIHR5cGU6IFwiVVBEQVRFX1NUQVRVU1wiLFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0RXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTZWFyY2hCYXIgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fSBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9IC8+XHJcbiAgICAgIHtpc0xvYWRpbmcgJiYgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+fVxyXG4gICAgICB7LyogZXJyb3IgaGFuZGxpbmcgKi99XHJcbiAgICAgIHtpc0Vycm9yICYmIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgTG9hZGluZyBlcnJvci4uLiBJcyB0aGUganNvbi1zZXJ2ZXIgdXAgYW5kIHJ1bm5pbmc/ICh0cnkgXCJucG0gcnVuXHJcbiAgICAgICAgICBqc29uLXNlcnZlclwiIGF0IHlvdXIgdGVybWluYWwpIDxiciAvPlxyXG4gICAgICAgICAgPGI+RVJST1I6IHtlcnJvci5tZXNzYWdlfTwvYj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAge3N1Y2Nlc3MgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBncmlkLWNvbHMtMSBnYXAtMTJcIj5cclxuICAgICAgICAgIHttYXBTcGVha2Vyc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9