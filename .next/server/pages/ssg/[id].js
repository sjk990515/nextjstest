"use strict";
(() => {
var exports = {};
exports.id = 776;
exports.ids = [776];
exports.modules = {

/***/ 1564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const { useRouter  } = __webpack_require__(1853);
const Post = ({ post  })=>{
    const router = useRouter();
    if (router.isFallback) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "...isLoading"
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            "Post: ",
            router.asPath,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: post.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: post.body
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);
//정적인경로 설정 후 이외의 페이지는 fallback : true로 loading 표시후 생성
//fallback blocking은 ssr과 똑같이 기다린후에 보여줌
async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    id: "1"
                }
            },
            {
                params: {
                    id: "2"
                }
            },
            {
                params: {
                    id: "3"
                }
            }
        ],
        fallback: "blocking"
    };
}
async function getStaticProps(context) {
    const { id  } = context.params;
    const response = await fetch(`http://localhost:3001/posts/${id}`);
    const post = await response.json();
    return {
        props: {
            post
        },
        revalidate: 10
    };
}


/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1564));
module.exports = __webpack_exports__;

})();