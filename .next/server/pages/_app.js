(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5610:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/assets/svgs/Svgs.js
var Svgs = __webpack_require__(4087);
// EXTERNAL MODULE: ./node_modules/react-icons/vsc/index.esm.js
var index_esm = __webpack_require__(4578);
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js
var fi_index_esm = __webpack_require__(6893);
;// CONCATENATED MODULE: ./src/Layout/Footer.js







function Footer() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Svgs/* FooterTopSvg */.w, {}), /*#__PURE__*/jsx_runtime_.jsx("footer", {
      className: "text-white bg-[#7300ab]",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container flex flex-col items-center justify-between py-8 mx-auto sm:flex-row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mb-8 sm:mb-0",
          children: "Copyright 2020. All rights reserved."
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "flex items-center space-x-8",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "mailto:nwangumav@gmail.com",
              className: "text-white hover:text-gray-400",
              children: /*#__PURE__*/jsx_runtime_.jsx(fi_index_esm/* FiMail */.Imn, {
                className: "text-2xl"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: "https://github.com/kachidk",
              target: "_blank",
              rel: "noreferrer",
              className: "text-white hover:text-gray-400",
              children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* VscGithubInverted */.MG0, {
                className: "text-2xl"
              }), " "]
            })
          })]
        })]
      })
    })]
  });
}

/* harmony default export */ var Layout_Footer = (Footer);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/Layout/Header.js





function Header() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex border-t-[14px] min-h-[80px] border-[#8600c8] mb-[75px]",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: "container flex flex-col items-center justify-between px-4 py-8 mt-12 mx-auhref sm:flex-row sm:mt-0",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mb-4 sm:mb-0",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          href: "/",
          className: "active--exact active",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            style: {
              fontSize: "35px",
              color: "#2d3748"
            },
            children: "Victor"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            style: {
              fontSize: "35px",
              color: "#8600c8",
              fontWeight: "bolder"
            },
            children: "Nwanguma"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "flex items-center space-x-8 font-bold tracking-wide uppercase sm:mr-20",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/Resume",
            className: "cursor-pointer text-copy-primary",
            activeClassName: "text-purple-800",
            children: "Resume"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            className: "cursor-pointer text-copy-primary",
            activeClassName: "text-purple-800",
            href: "/Projects",
            children: "Projects"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            className: "cursor-pointer text-copy-primary",
            activeClassName: "text-purple-800",
            href: "/Contact",
            children: "Contact"
          })
        })]
      })]
    })
  });
}

/* harmony default export */ var Layout_Header = (Header);
;// CONCATENATED MODULE: ./src/Layout/Layout.js






function Layout(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col justify-between h-screen",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Layout_Header, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: props.children
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Layout_Footer, {})]
  });
}

/* harmony default export */ var Layout_Layout = (Layout);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout_Layout, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(HeadIndex, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ var _app = (MyApp);

function HeadIndex() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/manifest/apple-touch-icon.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/manifest/favicon-32x32.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/manifest/favicon-16x16.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "manifest",
      href: "/manifest/site.webmanifest"
    }), /*#__PURE__*/jsx_runtime_.jsx("title", {
      children: "Victor Nwanguma"
    })]
  });
}

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [999,599,732,87], function() { return __webpack_exec__(5610); });
module.exports = __webpack_exports__;

})();