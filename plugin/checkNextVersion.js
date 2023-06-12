"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkNextVersion = void 0;
var parseVersion = function (version) {
    var _a, _b, _c;
    return (_c = (_b = (_a = version === null || version === void 0 ? void 0 : version.match(/(\d+)(?:\.(\d+))?(?:\.(\d+))?/)) === null || _a === void 0 ? void 0 : _a.slice(1)) === null || _b === void 0 ? void 0 : _b.filter(Boolean)) === null || _c === void 0 ? void 0 : _c.map(Number);
};
var checkNextVersion = function (
/** Ex: '>=13.3.1', '!=12.2.4' */
version, 
/** Fallback if next version is not found */
fallback) {
    var _a;
    if (fallback === void 0) { fallback = false; }
    var referenceVersion = parseVersion(version);
    var nextVersion = parseVersion((_a = process.env) === null || _a === void 0 ? void 0 : _a.npm_package_dependencies_next);
    if (!referenceVersion || !nextVersion) {
        return fallback;
    }
    var comparison = 0;
    for (var i = 0; i < referenceVersion.length; i++) {
        if (nextVersion[i] > referenceVersion[i]) {
            comparison = 1;
        }
        else if (nextVersion[i] < referenceVersion[i]) {
            comparison = -1;
        }
    }
    if ((version.includes('!=') && comparison !== 0) ||
        (version.includes('=') && !version.includes('!=') && comparison === 0) ||
        (version.includes('<') && comparison === -1) ||
        (version.includes('>') && comparison === 1)) {
        return true;
    }
    return false;
};
exports.checkNextVersion = checkNextVersion;
//# sourceMappingURL=checkNextVersion.js.map