"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
var link_1 = __importDefault(require("next/link"));
var router_1 = require("next/router");
var react_1 = __importDefault(require("react"));
var translatePushReplaceArgs_1 = require("./translatePushReplaceArgs");
/**
 * Link component that handle route translations
 */
exports.Link = react_1.default.forwardRef(function (_a, ref) {
    var href = _a.href, as = _a.as, locale = _a.locale, props = __rest(_a, ["href", "as", "locale"]);
    var router = (0, router_1.useRouter)();
    var translatedArgs = (0, translatePushReplaceArgs_1.translatePushReplaceArgs)({ router: router, url: href, as: as, locale: locale });
    return (react_1.default.createElement(link_1.default, __assign({ ref: ref, href: translatedArgs.url, as: translatedArgs.as, locale: translatedArgs.locale }, props)));
});
exports.default = exports.Link;
//# sourceMappingURL=link.js.map