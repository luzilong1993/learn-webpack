!function () { var o = { 466: function (o) { o.exports = { dateFormat: o => "2021-10-12", priceFormat: o => "100.00" } }, 640: function (o, t, e) { "use strict"; e.r(t), e.d(t, { add: function () { return n }, mul: function () { return r } }); const n = (o, t) => o + t, r = (o, t) => o * t } }, t = {}; function e(n) { var r = t[n]; if (void 0 !== r) return r.exports; var u = t[n] = { exports: {} }; return o[n](u, u.exports, e), u.exports } e.n = function (o) { var t = o && o.__esModule ? function () { return o.default } : function () { return o }; return e.d(t, { a: t }), t }, e.d = function (o, t) { for (var n in t) e.o(t, n) && !e.o(o, n) && Object.defineProperty(o, n, { enumerable: !0, get: t[n] }) }, e.o = function (o, t) { return Object.prototype.hasOwnProperty.call(o, t) }, e.r = function (o) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 }) }, function () { "use strict"; var o = e(466); const { add: t, mul: n } = e(640); console.log(t(20, 30)), console.log(n(20, 30)), console.log((0, o.dateFormat)("aaa")), console.log((0, o.priceFormat)("bbbb")) }() }();
//# sourceMappingURL=bundle.js.map