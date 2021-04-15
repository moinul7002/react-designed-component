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
              dispatch([].concat(Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(speakers.slice(0, speakerIndex)), [toggledSpeakerRecord], Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(speakers.slice(speakerIndex + 1))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiU3BlYWtlcnMiLCJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJTVUNDRVNTIiwiRVJST1IiLCJ1c2VTdGF0ZSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwic3RhdHVzIiwic3BlYWtlcnMiLCJ1c2VSZWR1Y2VyIiwiZGlzcGF0Y2giLCJlcnJvciIsInNldEVycm9yIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJzdWNjZXNzIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsIm1hcFNwZWFrZXJzIiwiZmlsdGVyIiwicmVjb3JkIiwidGFyZ2V0U3RyaW5nIiwibGFzdE5hbWUiLCJmaXJzdE5hbWUiLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsImluY2x1ZGVzIiwibWFwIiwic2luZ2xlIiwidG9nZ2xlQnV0dG9uSGFuZGxlciIsImlkIiwidG9nZ2xlRmF2b3JpdGVTdGF0dXMiLCJzcGVha2VyUmVjb3JkIiwiaXNGYXZvcml0ZSIsInRvZ2dsZWRTcGVha2VyUmVjb3JkIiwic3BlYWtlckluZGV4IiwiaW5kZXhPZiIsInB1dCIsInNsaWNlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDckIsTUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxXQUFPLEVBQUUsU0FEWTtBQUVyQkMsV0FBTyxFQUFFLFNBRlk7QUFHckJDLFNBQUssRUFBRTtBQUhjLEdBQXZCOztBQURxQixrQkFNaUJDLHNEQUFRLENBQUMsRUFBRCxDQU56QjtBQUFBLE1BTWRDLFdB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QUE7QUFBQTtBQUFBLGVBRmpDLGVBR0U7QUFBQSw4QkFBV1YsS0FBSyxDQUFDZ0MsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosRUFXR3hCLE9BQU8saUJBQ047QUFBSyxlQUFTLEVBQUMsdURBQWY7QUFBQSxnQkFDR0c7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWko7QUFBQSxrQkFERjtBQW1CRCxDQTVIRDs7R0FBTTNCLFE7O0tBQUFBLFE7QUE2SFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLjA5MWQ2YzU4YzBhMWVjZTI5ZDFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuLi9TZWFyY2hCYXJcIjtcclxuLy8gaW1wb3J0IHNwZWFrZXJzRGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XHJcbmltcG9ydCBTaW5nbGVTcGVha2VyIGZyb20gXCIuL3NpbmdsZVNwZWFrZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgU3BlYWtlcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgUkVRVUVTVF9TVEFUVVMgPSB7XHJcbiAgICBMT0FESU5HOiBcImxvYWRpbmdcIixcclxuICAgIFNVQ0NFU1M6IFwic3VjY2Vzc1wiLFxyXG4gICAgRVJST1I6IFwiZXJyb3JcIixcclxuICB9O1xyXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIFwiR0VUX0FMTF9TVUNDRVNTXCI6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgc3RhdHVzOiBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTLFxyXG4gICAgICAgICAgc3BlYWtlcnM6IGFjdGlvbi5zcGVha2VycyxcclxuICAgICAgICB9O1xyXG4gICAgICBjYXNlIFwiVVBEQVRFX1NUQVRVU1wiOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHN0YXR1czogYWN0aW9uLnN0YXR1cyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgW3sgc3BlYWtlcnMsIHN0YXR1cyB9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHtcclxuICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuTE9BRElORyxcclxuICAgIHNwZWFrZXJzOiBbXSxcclxuICB9KTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zcGVha2Vyc1wiKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICBzcGVha2VyczogcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgIHR5cGU6IFwiR0VUX0FMTF9TVUNDRVNTXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gZGlzcGF0Y2goe1xyXG4gICAgICAgIC8vICAgc3RhdHVzOiBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTLFxyXG4gICAgICAgIC8vICAgdHlwZTogXCJVUERBVEVfU1RBVFVTXCIsXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICBzdGF0dXM6IFJFUVVFU1RfU1RBVFVTLkVSUk9SLFxyXG4gICAgICAgICAgdHlwZTogXCJVUERBVEVfU1RBVFVTXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0RXJyb3IoZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHN1Y2Nlc3MgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1M7XHJcbiAgY29uc3QgaXNMb2FkaW5nID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5MT0FESU5HO1xyXG4gIGNvbnN0IGlzRXJyb3IgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkVSUk9SO1xyXG5cclxuICBjb25zdCBtYXBTcGVha2VycyA9IHNwZWFrZXJzXHJcbiAgICAuZmlsdGVyKChyZWNvcmQpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0U3RyaW5nID0gYCR7cmVjb3JkLmxhc3ROYW1lfSAke3JlY29yZC5maXJzdE5hbWV9YC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICByZXR1cm4gc2VhcmNoUXVlcnkubGVuZ3RoID09PSAwXHJcbiAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgOiB0YXJnZXRTdHJpbmcuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9KVxyXG4gICAgLm1hcCgoc2luZ2xlKSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNpbmdsZVNwZWFrZXJcclxuICAgICAgICAgIGtleT17c2luZ2xlLmlkfVxyXG4gICAgICAgICAgey4uLnNpbmdsZX1cclxuICAgICAgICAgIHRvZ2dsZUJ1dHRvbj17KCkgPT4gdG9nZ2xlQnV0dG9uSGFuZGxlcihzaW5nbGUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlRmF2b3JpdGVTdGF0dXMgPSAoc3BlYWtlclJlY29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3BlYWtlclJlY29yZCxcclxuICAgICAgaXNGYXZvcml0ZTogIXNwZWFrZXJSZWNvcmQuaXNGYXZvcml0ZSxcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQnV0dG9uSGFuZGxlciA9IGFzeW5jIChzcGVha2VyUmVjb3JkKSA9PiB7XHJcbiAgICBjb25zdCB0b2dnbGVkU3BlYWtlclJlY29yZCA9IHRvZ2dsZUZhdm9yaXRlU3RhdHVzKHNwZWFrZXJSZWNvcmQpO1xyXG4gICAgY29uc3Qgc3BlYWtlckluZGV4ID0gc3BlYWtlcnNcclxuICAgICAgLm1hcCgoc2luZ2xlKSA9PiBzaW5nbGUuaWQpXHJcbiAgICAgIC5pbmRleE9mKHNwZWFrZXJSZWNvcmQuaWQpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnB1dChcclxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NwZWFrZXJzLyR7c3BlYWtlclJlY29yZC5pZH1gLFxyXG4gICAgICAgIHRvZ2dsZWRTcGVha2VyUmVjb3JkXHJcbiAgICAgICk7XHJcbiAgICAgIGRpc3BhdGNoKFtcclxuICAgICAgICAuLi5zcGVha2Vycy5zbGljZSgwLCBzcGVha2VySW5kZXgpLFxyXG4gICAgICAgIHRvZ2dsZWRTcGVha2VyUmVjb3JkLFxyXG4gICAgICAgIC4uLnNwZWFrZXJzLnNsaWNlKHNwZWFrZXJJbmRleCArIDEpLFxyXG4gICAgICBdKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuRVJST1IsXHJcbiAgICAgICAgdHlwZTogXCJVUERBVEVfU1RBVFVTXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRFcnJvcihlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNlYXJjaEJhciBzZWFyY2hRdWVyeT17c2VhcmNoUXVlcnl9IHNldFNlYXJjaFF1ZXJ5PXtzZXRTZWFyY2hRdWVyeX0gLz5cclxuICAgICAge2lzTG9hZGluZyAmJiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj59XHJcbiAgICAgIHsvKiBlcnJvciBoYW5kbGluZyAqL31cclxuICAgICAge2lzRXJyb3IgJiYgKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICBMb2FkaW5nIGVycm9yLi4uIElzIHRoZSBqc29uLXNlcnZlciB1cCBhbmQgcnVubmluZz8gKHRyeSBcIm5wbSBydW5cclxuICAgICAgICAgIGpzb24tc2VydmVyXCIgYXQgeW91ciB0ZXJtaW5hbCkgPGJyIC8+XHJcbiAgICAgICAgICA8Yj5FUlJPUjoge2Vycm9yLm1lc3NhZ2V9PC9iPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7c3VjY2VzcyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdyaWQtY29scy0xIGdhcC0xMlwiPlxyXG4gICAgICAgICAge21hcFNwZWFrZXJzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=