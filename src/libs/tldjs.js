! function (a) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
    else if ("function" == typeof define && define.amd) define([], a);
    else {
        var o;
        "undefined" != typeof window ? o = window : "undefined" != typeof global ? o = global : "undefined" != typeof self && (o = self), o.tldjs = a()
    }
}(function () {
    var a;
    return function o(a, i, n) {
        function e(t, r) {
            if (!i[t]) {
                if (!a[t]) {
                    var m = "function" == typeof require && require;
                    if (!r && m) return m(t, !0);
                    if (s) return s(t, !0);
                    var u = new Error("Cannot find module '" + t + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var k = i[t] = {
                    exports: {}
                };
                a[t][0].call(k.exports, function (o) {
                    var i = a[t][1][o];
                    return e(i ? i : o)
                }, k, k.exports, o, a, i, n)
            }
            return i[t].exports
        }
        for (var s = "function" == typeof require && require, t = 0; t < n.length; t++) e(n[t]);
        return e
    }({
        1: [function (o, i, n) {
            (function (o) {
                ! function (e) {
                    function s(a) {
                        throw RangeError(U[a])
                    }

                    function t(a, o) {
                        for (var i = a.length; i--;) a[i] = o(a[i]);
                        return a
                    }

                    function r(a, o) {
                        return t(a.split(I), o).join(".")
                    }

                    function m(a) {
                        for (var o, i, n = [], e = 0, s = a.length; e < s;) o = a.charCodeAt(e++), o >= 55296 && o <= 56319 && e < s ? (i = a.charCodeAt(e++), 56320 == (64512 & i) ? n.push(((1023 & o) << 10) + (1023 & i) + 65536) : (n.push(o), e--)) : n.push(o);
                        return n
                    }

                    function u(a) {
                        return t(a, function (a) {
                            var o = "";
                            return a > 65535 && (a -= 65536, o += F(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), o += F(a)
                        }).join("")
                    }

                    function k(a) {
                        return a - 48 < 10 ? a - 22 : a - 65 < 26 ? a - 65 : a - 97 < 26 ? a - 97 : z
                    }

                    function h(a, o) {
                        return a + 22 + 75 * (a < 26) - ((0 != o) << 5)
                    }

                    function g(a, o, i) {
                        var n = 0;
                        for (a = i ? T(a / C) : a >> 1, a += T(a / o); a > P * q >> 1; n += z) a = T(a / P);
                        return T(n + (P + 1) * a / (a + O))
                    }

                    function c(a) {
                        var o, i, n, e, t, r, m, h, c, l, d = [],
                            y = a.length,
                            b = 0,
                            p = R,
                            f = A;
                        for (i = a.lastIndexOf(L), i < 0 && (i = 0), n = 0; n < i; ++n) a.charCodeAt(n) >= 128 && s("not-basic"), d.push(a.charCodeAt(n));
                        for (e = i > 0 ? i + 1 : 0; e < y;) {
                            for (t = b, r = 1, m = z; e >= y && s("invalid-input"), h = k(a.charCodeAt(e++)), (h >= z || h > T((x - b) / r)) && s("overflow"), b += h * r, c = m <= f ? j : m >= f + q ? q : m - f, !(h < c); m += z) l = z - c, r > T(x / l) && s("overflow"), r *= l;
                            o = d.length + 1, f = g(b - t, o, 0 == t), T(b / o) > x - p && s("overflow"), p += T(b / o), b %= o, d.splice(b++, 0, p)
                        }
                        return u(d)
                    }

                    function l(a) {
                        var o, i, n, e, t, r, u, k, c, l, d, y, b, p, f, v = [];
                        for (a = m(a), y = a.length, o = R, i = 0, t = A, r = 0; r < y; ++r) d = a[r], d < 128 && v.push(F(d));
                        for (n = e = v.length, e && v.push(L); n < y;) {
                            for (u = x, r = 0; r < y; ++r) d = a[r], d >= o && d < u && (u = d);
                            for (b = n + 1, u - o > T((x - i) / b) && s("overflow"), i += (u - o) * b, o = u, r = 0; r < y; ++r)
                                if (d = a[r], d < o && ++i > x && s("overflow"), d == o) {
                                    for (k = i, c = z; l = c <= t ? j : c >= t + q ? q : c - t, !(k < l); c += z) f = k - l, p = z - l, v.push(F(h(l + f % p, 0))), k = T(f / p);
                                    v.push(F(h(k, 0))), t = g(i, b, n == e), i = 0, ++n
                                }++i, ++o
                        }
                        return v.join("")
                    }

                    function d(a) {
                        return r(a, function (a) {
                            return E.test(a) ? c(a.slice(4).toLowerCase()) : a
                        })
                    }

                    function y(a) {
                        return r(a, function (a) {
                            return H.test(a) ? "xn--" + l(a) : a
                        })
                    }
                    var b = "object" == typeof n && n,
                        p = "object" == typeof i && i && i.exports == b && i,
                        f = "object" == typeof o && o;
                    f.global !== f && f.window !== f || (e = f);
                    var v, w, x = 2147483647,
                        z = 36,
                        j = 1,
                        q = 26,
                        O = 38,
                        C = 700,
                        A = 72,
                        R = 128,
                        L = "-",
                        E = /^xn--/,
                        H = /[^ -~]/,
                        I = /\x2E|\u3002|\uFF0E|\uFF61/g,
                        U = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        },
                        P = z - j,
                        T = Math.floor,
                        F = String.fromCharCode;
                    if (v = {
                            version: "1.2.4",
                            ucs2: {
                                decode: m,
                                encode: u
                            },
                            decode: c,
                            encode: l,
                            toASCII: y,
                            toUnicode: d
                        }, "function" == typeof a && "object" == typeof a.amd && a.amd) a("punycode", function () {
                        return v
                    });
                    else if (b && !b.nodeType)
                        if (p) p.exports = v;
                        else
                            for (w in v) v.hasOwnProperty(w) && (b[w] = v[w]);
                    else e.punycode = v
                }(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        2: [function (a, o, i) {
            "use strict";

            function n(a, o) {
                return Object.prototype.hasOwnProperty.call(a, o)
            }
            o.exports = function (a, o, i, s) {
                o = o || "&", i = i || "=";
                var t = {};
                if ("string" != typeof a || 0 === a.length) return t;
                var r = /\+/g;
                a = a.split(o);
                var m = 1e3;
                s && "number" == typeof s.maxKeys && (m = s.maxKeys);
                var u = a.length;
                m > 0 && u > m && (u = m);
                for (var k = 0; k < u; ++k) {
                    var h, g, c, l, d = a[k].replace(r, "%20"),
                        y = d.indexOf(i);
                    y >= 0 ? (h = d.substr(0, y), g = d.substr(y + 1)) : (h = d, g = ""), c = decodeURIComponent(h), l = decodeURIComponent(g), n(t, c) ? e(t[c]) ? t[c].push(l) : t[c] = [t[c], l] : t[c] = l
                }
                return t
            };
            var e = Array.isArray || function (a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            }
        }, {}],
        3: [function (a, o, i) {
            "use strict";

            function n(a, o) {
                if (a.map) return a.map(o);
                for (var i = [], n = 0; n < a.length; n++) i.push(o(a[n], n));
                return i
            }
            var e = function (a) {
                switch (typeof a) {
                    case "string":
                        return a;
                    case "boolean":
                        return a ? "true" : "false";
                    case "number":
                        return isFinite(a) ? a : "";
                    default:
                        return ""
                }
            };
            o.exports = function (a, o, i, r) {
                return o = o || "&", i = i || "=", null === a && (a = void 0), "object" == typeof a ? n(t(a), function (t) {
                    var r = encodeURIComponent(e(t)) + i;
                    return s(a[t]) ? n(a[t], function (a) {
                        return r + encodeURIComponent(e(a))
                    }).join(o) : r + encodeURIComponent(e(a[t]))
                }).join(o) : r ? encodeURIComponent(e(r)) + i + encodeURIComponent(e(a)) : ""
            };
            var s = Array.isArray || function (a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                },
                t = Object.keys || function (a) {
                    var o = [];
                    for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && o.push(i);
                    return o
                }
        }, {}],
        4: [function (a, o, i) {
            "use strict";
            i.decode = i.parse = a("./decode"), i.encode = i.stringify = a("./encode")
        }, {
            "./decode": 2,
            "./encode": 3
        }],
        5: [function (a, o, i) {
            function n() {
                this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
            }

            function e(a, o, i) {
                if (a && u(a) && a instanceof n) return a;
                var e = new n;
                return e.parse(a, o, i), e
            }

            function s(a) {
                return m(a) && (a = e(a)), a instanceof n ? a.format() : n.prototype.format.call(a)
            }

            function t(a, o) {
                return e(a, !1, !0).resolve(o)
            }

            function r(a, o) {
                return a ? e(a, !1, !0).resolveObject(o) : o
            }

            function m(a) {
                return "string" == typeof a
            }

            function u(a) {
                return "object" == typeof a && null !== a
            }

            function k(a) {
                return null === a
            }

            function h(a) {
                return null == a
            }
            var g = a("punycode");
            i.parse = e, i.resolve = t, i.resolveObject = r, i.format = s, i.Url = n;
            var c = /^([a-z0-9.+-]+:)/i,
                l = /:[0-9]*$/,
                d = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
                y = ["{", "}", "|", "\\", "^", "`"].concat(d),
                b = ["'"].concat(y),
                p = ["%", "/", "?", ";", "#"].concat(b),
                f = ["/", "?", "#"],
                v = 255,
                w = /^[a-z0-9A-Z_-]{0,63}$/,
                x = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
                z = {
                    javascript: !0,
                    "javascript:": !0
                },
                j = {
                    javascript: !0,
                    "javascript:": !0
                },
                q = {
                    http: !0,
                    https: !0,
                    ftp: !0,
                    gopher: !0,
                    file: !0,
                    "http:": !0,
                    "https:": !0,
                    "ftp:": !0,
                    "gopher:": !0,
                    "file:": !0
                },
                O = a("querystring");
            n.prototype.parse = function (a, o, i) {
                if (!m(a)) throw new TypeError("Parameter 'url' must be a string, not " + typeof a);
                var n = a;
                n = n.trim();
                var e = c.exec(n);
                if (e) {
                    e = e[0];
                    var s = e.toLowerCase();
                    this.protocol = s, n = n.substr(e.length)
                }
                if (i || e || n.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var t = "//" === n.substr(0, 2);
                    !t || e && j[e] || (n = n.substr(2), this.slashes = !0)
                }
                if (!j[e] && (t || e && !q[e])) {
                    for (var r = -1, u = 0; u < f.length; u++) {
                        var k = n.indexOf(f[u]);
                        k !== -1 && (r === -1 || k < r) && (r = k)
                    }
                    var h, l;
                    l = r === -1 ? n.lastIndexOf("@") : n.lastIndexOf("@", r), l !== -1 && (h = n.slice(0, l), n = n.slice(l + 1), this.auth = decodeURIComponent(h)), r = -1;
                    for (var u = 0; u < p.length; u++) {
                        var k = n.indexOf(p[u]);
                        k !== -1 && (r === -1 || k < r) && (r = k)
                    }
                    r === -1 && (r = n.length), this.host = n.slice(0, r), n = n.slice(r), this.parseHost(), this.hostname = this.hostname || "";
                    var d = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!d)
                        for (var y = this.hostname.split(/\./), u = 0, C = y.length; u < C; u++) {
                            var A = y[u];
                            if (A && !A.match(w)) {
                                for (var R = "", L = 0, E = A.length; L < E; L++) R += A.charCodeAt(L) > 127 ? "x" : A[L];
                                if (!R.match(w)) {
                                    var H = y.slice(0, u),
                                        I = y.slice(u + 1),
                                        U = A.match(x);
                                    U && (H.push(U[1]), I.unshift(U[2])), I.length && (n = "/" + I.join(".") + n), this.hostname = H.join(".");
                                    break
                                }
                            }
                        }
                    if (this.hostname.length > v ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), !d) {
                        for (var P = this.hostname.split("."), T = [], u = 0; u < P.length; ++u) {
                            var F = P[u];
                            T.push(F.match(/[^A-Za-z0-9_-]/) ? "xn--" + g.encode(F) : F)
                        }
                        this.hostname = T.join(".")
                    }
                    var N = this.port ? ":" + this.port : "",
                        S = this.hostname || "";
                    this.host = S + N, this.href += this.host, d && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== n[0] && (n = "/" + n))
                }
                if (!z[s])
                    for (var u = 0, C = b.length; u < C; u++) {
                        var $ = b[u],
                            V = encodeURIComponent($);
                        V === $ && (V = escape($)), n = n.split($).join(V)
                    }
                var _ = n.indexOf("#");
                _ !== -1 && (this.hash = n.substr(_), n = n.slice(0, _));
                var D = n.indexOf("?");
                if (D !== -1 ? (this.search = n.substr(D), this.query = n.substr(D + 1), o && (this.query = O.parse(this.query)), n = n.slice(0, D)) : o && (this.search = "", this.query = {}), n && (this.pathname = n), q[s] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                    var N = this.pathname || "",
                        F = this.search || "";
                    this.path = N + F
                }
                return this.href = this.format(), this
            }, n.prototype.format = function () {
                var a = this.auth || "";
                a && (a = encodeURIComponent(a), a = a.replace(/%3A/i, ":"), a += "@");
                var o = this.protocol || "",
                    i = this.pathname || "",
                    n = this.hash || "",
                    e = !1,
                    s = "";
                this.host ? e = a + this.host : this.hostname && (e = a + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (e += ":" + this.port)), this.query && u(this.query) && Object.keys(this.query).length && (s = O.stringify(this.query));
                var t = this.search || s && "?" + s || "";
                return o && ":" !== o.substr(-1) && (o += ":"), this.slashes || (!o || q[o]) && e !== !1 ? (e = "//" + (e || ""), i && "/" !== i.charAt(0) && (i = "/" + i)) : e || (e = ""), n && "#" !== n.charAt(0) && (n = "#" + n), t && "?" !== t.charAt(0) && (t = "?" + t), i = i.replace(/[?#]/g, function (a) {
                    return encodeURIComponent(a)
                }), t = t.replace("#", "%23"), o + e + i + t + n
            }, n.prototype.resolve = function (a) {
                return this.resolveObject(e(a, !1, !0)).format()
            }, n.prototype.resolveObject = function (a) {
                if (m(a)) {
                    var o = new n;
                    o.parse(a, !1, !0), a = o
                }
                var i = new n;
                if (Object.keys(this).forEach(function (a) {
                        i[a] = this[a]
                    }, this), i.hash = a.hash, "" === a.href) return i.href = i.format(), i;
                if (a.slashes && !a.protocol) return Object.keys(a).forEach(function (o) {
                    "protocol" !== o && (i[o] = a[o])
                }), q[i.protocol] && i.hostname && !i.pathname && (i.path = i.pathname = "/"), i.href = i.format(), i;
                if (a.protocol && a.protocol !== i.protocol) {
                    if (!q[a.protocol]) return Object.keys(a).forEach(function (o) {
                        i[o] = a[o]
                    }), i.href = i.format(), i;
                    if (i.protocol = a.protocol, a.host || j[a.protocol]) i.pathname = a.pathname;
                    else {
                        for (var e = (a.pathname || "").split("/"); e.length && !(a.host = e.shift()););
                        a.host || (a.host = ""), a.hostname || (a.hostname = ""), "" !== e[0] && e.unshift(""), e.length < 2 && e.unshift(""), i.pathname = e.join("/")
                    }
                    if (i.search = a.search, i.query = a.query, i.host = a.host || "", i.auth = a.auth, i.hostname = a.hostname || a.host, i.port = a.port, i.pathname || i.search) {
                        var s = i.pathname || "",
                            t = i.search || "";
                        i.path = s + t
                    }
                    return i.slashes = i.slashes || a.slashes, i.href = i.format(), i
                }
                var r = i.pathname && "/" === i.pathname.charAt(0),
                    u = a.host || a.pathname && "/" === a.pathname.charAt(0),
                    g = u || r || i.host && a.pathname,
                    c = g,
                    l = i.pathname && i.pathname.split("/") || [],
                    e = a.pathname && a.pathname.split("/") || [],
                    d = i.protocol && !q[i.protocol];
                if (d && (i.hostname = "", i.port = null, i.host && ("" === l[0] ? l[0] = i.host : l.unshift(i.host)), i.host = "", a.protocol && (a.hostname = null, a.port = null, a.host && ("" === e[0] ? e[0] = a.host : e.unshift(a.host)), a.host = null), g = g && ("" === e[0] || "" === l[0])), u) i.host = a.host || "" === a.host ? a.host : i.host, i.hostname = a.hostname || "" === a.hostname ? a.hostname : i.hostname, i.search = a.search, i.query = a.query, l = e;
                else if (e.length) l || (l = []), l.pop(), l = l.concat(e), i.search = a.search, i.query = a.query;
                else if (!h(a.search)) {
                    if (d) {
                        i.hostname = i.host = l.shift();
                        var y = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@");
                        y && (i.auth = y.shift(), i.host = i.hostname = y.shift())
                    }
                    return i.search = a.search, i.query = a.query, k(i.pathname) && k(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.href = i.format(), i
                }
                if (!l.length) return i.pathname = null, i.search ? i.path = "/" + i.search : i.path = null, i.href = i.format(), i;
                for (var b = l.slice(-1)[0], p = (i.host || a.host) && ("." === b || ".." === b) || "" === b, f = 0, v = l.length; v >= 0; v--) b = l[v], "." == b ? l.splice(v, 1) : ".." === b ? (l.splice(v, 1), f++) : f && (l.splice(v, 1), f--);
                if (!g && !c)
                    for (; f--; f) l.unshift("..");
                !g || "" === l[0] || l[0] && "/" === l[0].charAt(0) || l.unshift(""), p && "/" !== l.join("/").substr(-1) && l.push("");
                var w = "" === l[0] || l[0] && "/" === l[0].charAt(0);
                if (d) {
                    i.hostname = i.host = w ? "" : l.length ? l.shift() : "";
                    var y = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@");
                    y && (i.auth = y.shift(), i.host = i.hostname = y.shift())
                }
                return g = g || i.host && l.length, g && !w && l.unshift(""), l.length ? i.pathname = l.join("/") : (i.pathname = null, i.path = null), k(i.pathname) && k(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.auth = a.auth || i.auth, i.slashes = i.slashes || a.slashes, i.href = i.format(), i
            }, n.prototype.parseHost = function () {
                var a = this.host,
                    o = l.exec(a);
                o && (o = o[0], ":" !== o && (this.port = o.substr(1)), a = a.substr(0, a.length - o.length)), a && (this.hostname = a)
            }
        }, {
            punycode: 1,
            querystring: 4
        }],
        6: [function (a, o, i) {
            "use strict";
            var n = a("./lib/tld.js").init();
            n.rules = a("./rules.json"), o.exports = n
        }, {
            "./lib/tld.js": 8,
            "./rules.json": 9
        }],
        7: [function (a, o, i) {
            "use strict";

            function n(a) {
                a = a || {}, this.exception = a.exception || !1, this.firstLevel = a.firstLevel || "", this.secondLevel = a.secondLevel || null, this.isHost = a.isHost || !1, this.source = a.source || "", this.wildcard = a.wildcard || !1
            }
            n.prototype.getNormalXld = function () {
                return (this.secondLevel ? "." + this.secondLevel : "") + "." + this.firstLevel
            }, n.prototype.getNormalPattern = function () {
                return (this.secondLevel ? "\\." + this.secondLevel : "") + "\\." + this.firstLevel
            }, n.prototype.getWildcardPattern = function () {
                return "\\.[^\\.]+" + this.getNormalXld().replace(/\./g, "\\.")
            }, n.prototype.getExceptionPattern = function () {
                return (this.secondLevel || "") + "\\." + this.firstLevel
            }, n.prototype.getPattern = function (a, o) {
                var i = "";
                return a = void 0 === a ? "(" : a + "", o = void 0 === o ? ")$" : o + "", i = this.exception === !0 ? this.getExceptionPattern() : this.isHost === !0 ? this.firstLevel : "[^\\.]+" + (this.wildcard ? this.getWildcardPattern() : this.getNormalPattern()), a + i + o
            }, o.exports = n
        }, {}],
        8: [function (a, o, i) {
            "use strict";

            function n() {
                this.validHosts = [], this.rules = []
            }

            function e(a) {
                return String(a).replace(/(^\s+|\s+$)/g, "")
            }

            function s(a, o) {
                if (void 0 === a || null === a) throw new TypeError;
                var i = Object(a),
                    n = i.length >>> 0;
                if ("function" != typeof o) throw new TypeError;
                for (var e = arguments.length >= 3 ? arguments[2] : void 0, s = 0; s < n; s++)
                    if (s in i && o.call(e, i[s], s, i)) return !0;
                return !1
            }

            function t(a, o) {
                if (void 0 === a || null === a) throw new TypeError;
                var i = Object(a),
                    n = i.length >>> 0;
                if ("function" != typeof o) throw new TypeError;
                for (var e = new Array(n), s = arguments.length >= 3 ? arguments[2] : void 0, t = 0; t < n; t++) t in i && (e[t] = o.call(s, i[t], t, i));
                return e
            }
            var r = a("./rule.js"),
                m = a("url");
            n.init = function () {
                return new n
            }, n.getCandidateRule = function (a, o, i) {
                var n = {
                    normal: null,
                    exception: null
                };
                return i = i || {
                    lazy: !1
                }, s(o, function (o) {
                    var e;
                    return "." + a === o.getNormalXld() ? ((i.lazy || o.exception || o.isHost) && (n.normal = o), !0) : (e = ".+" + o.getNormalPattern() + "$", !!new RegExp(e).test(a) && (n[o.exception ? "exception" : "normal"] = o, !o.exception))
                }), n.normal && n.exception ? n.exception : n.normal
            }, n.prototype.getRulesForTld = function (a, o) {
                var i = "!",
                    n = "*",
                    e = !0,
                    s = this.rules[a];
                return "[object Array]" === Object.prototype.toString.call(s) ? s : void 0 === s ? o ? [o] : [] : (s = t(s.split("|"), function (o) {
                    var s = o[0];
                    return s !== i && s !== n || (o = o.slice(1), o || (e = !1)), new r({
                        firstLevel: a,
                        secondLevel: o,
                        exception: s === i,
                        wildcard: s === n
                    })
                }), e && s.unshift(new r({
                    firstLevel: a
                })), this.rules[a] = s.reverse(), s)
            }, n.prototype.tldExists = function (a) {
                var o;
                return a = n.cleanHostValue(a), !!this.rules[a] || (o = n.extractTldFromHost(a), void 0 !== this.rules[o])
            }, n.prototype.getPublicSuffix = function (a) {
                var o, i, e;
                return a in this.rules ? a : (a = n.cleanHostValue(a), o = n.extractTldFromHost(a), i = this.getRulesForTld(o), e = n.getCandidateRule(a, i, {
                    lazy: !0
                }), null === e ? null : e.getNormalXld().slice(1))
            }, n.prototype.getDomain = function (a) {
                var o, i, e, s = null;
                return this.isValid(a) === !1 ? null : (a = n.cleanHostValue(a), o = n.extractTldFromHost(a), i = this.getRulesForTld(o, new r({
                    firstLevel: o,
                    isHost: this.validHosts.indexOf(o) !== -1
                })), e = n.getCandidateRule(a, i), null === e ? null : (a.replace(new RegExp(e.getPattern()), function (a, o) {
                    s = o
                }), s))
            }, n.prototype.getSubdomain = function (a) {
                var o, i, e;
                return a = n.cleanHostValue(a), o = this.getDomain(a), null === o ? null : (i = "\\.?" + n.escapeRegExp(o) + "$", e = a.replace(new RegExp(i, "i"), ""))
            }, n.prototype.isValid = function (a) {
                return "string" == typeof a && (this.validHosts.indexOf(a) !== -1 || a.indexOf(".") !== -1 && "." !== a[0])
            };
            var u = /^(([a-z][a-z0-9+.-]*)?:)?\/\//,
                k = /[^A-Za-z0-9.-]/;
            n.cleanHostValue = function (a) {
                a = e(a).toLowerCase();
                var o = m.parse(u.test(a) ? a : "//" + a, null, !0);
                return o.hostname && !k.test(o.hostname) ? o.hostname : k.test(a) ? "" : a
            }, n.extractTldFromHost = function (a) {
                return a.split(".").pop()
            }, n.escapeRegExp = function (a) {
                return String(a).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
            }, o.exports = n
        }, {
            "./rule.js": 7,
            url: 5
        }],
        9: [function (a, o, i) {
            o.exports = {
                ac: "com|edu|gov|net|mil|org",
                ad: "nom",
                ae: "co|net|org|sch|ac|gov|mil|blogspot",
                aero: "accident-investigation|accident-prevention|aerobatic|aeroclub|aerodrome|agents|aircraft|airline|airport|air-surveillance|airtraffic|air-traffic-control|ambulance|amusement|association|author|ballooning|broker|caa|cargo|catering|certification|championship|charter|civilaviation|club|conference|consultant|consulting|control|council|crew|design|dgca|educator|emergency|engine|engineer|entertainment|equipment|exchange|express|federation|flight|freight|fuel|gliding|government|groundhandling|group|hanggliding|homebuilt|insurance|journal|journalist|leasing|logistics|magazine|maintenance|media|microlight|modelling|navigation|parachuting|paragliding|passenger-association|pilot|press|production|recreation|repbody|res|research|rotorcraft|safety|scientist|services|show|skydiving|software|student|trader|trading|trainer|union|workinggroup|works",
                af: "gov|com|org|net|edu",
                ag: "com|org|net|co|nom",
                ai: "off|com|net|org",
                al: "com|edu|gov|mil|net|org|blogspot",
                am: "blogspot",
                ao: "ed|gv|og|co|pb|it",
                aq: "",
                ar: "com|edu|gob|gov|int|mil|net|org|tur|blogspot.com",
                arpa: "e164|in-addr|ip6|iris|uri|urn",
                as: "gov",
                asia: "",
                at: "ac|co|gv|or|blogspot.co|biz|info|priv",
                au: "com|net|org|edu|gov|asn|id|info|conf|oz|act|nsw|nt|qld|sa|tas|vic|wa|act.edu|nsw.edu|nt.edu|qld.edu|sa.edu|tas.edu|vic.edu|wa.edu|qld.gov|sa.gov|tas.gov|vic.gov|wa.gov|blogspot.com",
                aw: "com",
                ax: "",
                az: "com|net|int|gov|org|edu|info|pp|mil|name|pro|biz",
                ba: "com|edu|gov|mil|net|org|blogspot",
                bb: "biz|co|com|edu|gov|info|net|org|store|tv",
                bd: "*",
                be: "ac|blogspot",
                bf: "gov",
                bg: "a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|0|1|2|3|4|5|6|7|8|9|blogspot",
                bh: "com|edu|net|org|gov",
                bi: "co|com|edu|or|org",
                biz: "dyndns|for-better|for-more|for-some|for-the|selfip|webhop|mmafan|myftp|no-ip|dscloud",
                bj: "asso|barreau|gouv|blogspot",
                bm: "com|edu|gov|net|org",
                bn: "*",
                bo: "com|edu|gov|gob|int|org|net|mil|tv",
                br: "adm|adv|agr|am|arq|art|ato|b|bio|blog|bmd|cim|cng|cnt|com|coop|ecn|eco|edu|emp|eng|esp|etc|eti|far|flog|fm|fnd|fot|fst|g12|ggf|gov|imb|ind|inf|jor|jus|leg|lel|mat|med|mil|mp|mus|net|*nom|not|ntr|odo|org|ppg|pro|psc|psi|qsl|radio|rec|slg|srv|taxi|teo|tmp|trd|tur|tv|vet|vlog|wiki|zlg|blogspot.com",
                bs: "com|net|org|edu|gov",
                bt: "com|edu|gov|net|org",
                bv: "",
                bw: "co|org",
                by: "gov|mil|com|of|blogspot.com",
                bz: "com|net|org|edu|gov|za",
                ca: "ab|bc|mb|nb|nf|nl|ns|nt|nu|on|pe|qc|sk|yk|gc|co|blogspot|no-ip",
                cat: "",
                cc: "ftpaccess|game-server|myphotos|scrapping|fantasyleague",
                cd: "gov",
                cf: "blogspot",
                cg: "",
                ch: "blogspot|gotdns",
                ci: "org|or|com|co|edu|ed|ac|net|go|asso|xn--aroport-bya|int|presse|md|gouv",
                ck: "*|!www",
                cl: "gov|gob|co|mil|blogspot",
                cm: "co|com|gov|net",
                cn: "ac|com|edu|gov|net|org|mil|xn--55qx5d|xn--io0a7i|xn--od0alg|ah|bj|cq|fj|gd|gs|gz|gx|ha|hb|he|hi|hl|hn|jl|js|jx|ln|nm|nx|qh|sc|sd|sh|sn|sx|tj|xj|xz|yn|zj|hk|mo|tw|compute.amazonaws.com|cn-north-1.compute.amazonaws.com|s3.cn-north-1.amazonaws.com",
                co: "arts|com|edu|firm|gov|info|int|mil|net|nom|org|rec|web|blogspot.com",
                com: "compute.amazonaws|ap-northeast-1.compute.amazonaws|ap-northeast-2.compute.amazonaws|ap-southeast-1.compute.amazonaws|ap-southeast-2.compute.amazonaws|eu-central-1.compute.amazonaws|eu-west-1.compute.amazonaws|sa-east-1.compute.amazonaws|us-gov-west-1.compute.amazonaws|us-west-1.compute.amazonaws|us-west-2.compute.amazonaws|compute-1.amazonaws|z-1.compute-1.amazonaws|z-2.compute-1.amazonaws|us-east-1.amazonaws|elasticbeanstalk|elb.amazonaws|s3.amazonaws|s3-ap-northeast-1.amazonaws|s3-ap-northeast-2.amazonaws|s3-ap-southeast-1.amazonaws|s3-ap-southeast-2.amazonaws|s3-eu-central-1.amazonaws|s3-eu-west-1.amazonaws|s3-external-1.amazonaws|s3-external-2.amazonaws|s3-fips-us-gov-west-1.amazonaws|s3-sa-east-1.amazonaws|s3-us-gov-west-1.amazonaws|s3-us-west-1.amazonaws|s3-us-west-2.amazonaws|s3.ap-northeast-2.amazonaws|s3.eu-central-1.amazonaws|on-aptible|myasustor|betainabox|ar|br|cn|de|eu|gb|hu|jpn|kr|mex|no|qc|ru|sa|se|uk|us|uy|za|africa|gr|co|xenapponazure|cloudcontrolled|cloudcontrolapp|dreamhosters|mydrobo|dyndns-at-home|dyndns-at-work|dyndns-blog|dyndns-free|dyndns-home|dyndns-ip|dyndns-mail|dyndns-office|dyndns-pics|dyndns-remote|dyndns-server|dyndns-web|dyndns-wiki|dyndns-work|blogdns|cechire|dnsalias|dnsdojo|doesntexist|dontexist|doomdns|dyn-o-saur|dynalias|est-a-la-maison|est-a-la-masion|est-le-patron|est-mon-blogueur|from-ak|from-al|from-ar|from-ca|from-ct|from-dc|from-de|from-fl|from-ga|from-hi|from-ia|from-id|from-il|from-in|from-ks|from-ky|from-ma|from-md|from-mi|from-mn|from-mo|from-ms|from-mt|from-nc|from-nd|from-ne|from-nh|from-nj|from-nm|from-nv|from-oh|from-ok|from-or|from-pa|from-pr|from-ri|from-sc|from-sd|from-tn|from-tx|from-ut|from-va|from-vt|from-wa|from-wi|from-wv|from-wy|getmyip|gotdns|hobby-site|homelinux|homeunix|iamallama|is-a-anarchist|is-a-blogger|is-a-bookkeeper|is-a-bulls-fan|is-a-caterer|is-a-chef|is-a-conservative|is-a-cpa|is-a-cubicle-slave|is-a-democrat|is-a-designer|is-a-doctor|is-a-financialadvisor|is-a-geek|is-a-green|is-a-guru|is-a-hard-worker|is-a-hunter|is-a-landscaper|is-a-lawyer|is-a-liberal|is-a-libertarian|is-a-llama|is-a-musician|is-a-nascarfan|is-a-nurse|is-a-painter|is-a-personaltrainer|is-a-photographer|is-a-player|is-a-republican|is-a-rockstar|is-a-socialist|is-a-student|is-a-teacher|is-a-techie|is-a-therapist|is-an-accountant|is-an-actor|is-an-actress|is-an-anarchist|is-an-artist|is-an-engineer|is-an-entertainer|is-certified|is-gone|is-into-anime|is-into-cars|is-into-cartoons|is-into-games|is-leet|is-not-certified|is-slick|is-uberleet|is-with-theband|isa-geek|isa-hockeynut|issmarterthanyou|likes-pie|likescandy|neat-url|saves-the-whales|selfip|sells-for-less|sells-for-u|servebbs|simple-url|space-to-rent|teaches-yoga|writesthisblog|eu-1.evennode|eu-2.evennode|us-1.evennode|us-2.evennode|apps.fbsbx|firebaseapp|flynnhub|freebox-os|freeboxos|githubusercontent|githubcloud|*api.githubcloud|*ext.githubcloud|gist.githubcloud|*githubcloudusercontent|ro|*0emm|appspot|blogspot|codespot|googleapis|googlecode|pagespeedmobilizer|withgoogle|withyoutube|herokuapp|herokussl|*cns.joyent|meteorapp|eu.meteorapp|4u|nfshost|blogsyte|ciscofreak|damnserver|ditchyourip|dnsiskinky|dynns|geekgalaxy|health-carereform|homesecuritymac|homesecuritypc|myactivedirectory|mysecuritycamera|net-freaks|onthewifi|point2this|quicksytes|securitytactics|serveexchange|servehumour|servep2p|servesarcasm|stufftoread|unusualperson|workisboring|3utilities|ddnsking|myvnc|servebeer|servecounterstrike|serveftp|servegame|servehalflife|servehttp|serveirc|servemp3|servepics|servequake|operaunite|outsystemscloud|ownprovider|pgfog|pagefrontapp|gotpantheon|xen.prgmr|qa2|dev-myqnapcloud|alpha-myqnapcloud|myqnapcloud|rackmaze|rhcloud|logoip|myshopblocks|sinaapp|vipsinaapp|1kapp|bounty-full|alpha.bounty-full|beta.bounty-full|dsmynas|familyds|bloxcms|townnews-staging|hk|yolasite",
                coop: "",
                cr: "ac|co|ed|fi|go|or|sa",
                cu: "com|edu|org|net|gov|inf",
                cv: "blogspot",
                cw: "com|edu|net|org",
                cx: "gov|ath",
                cy: "ac|biz|com|ekloges|gov|ltd|name|net|org|parliament|press|pro|tm|blogspot.com",
                cz: "co|realm|e4|blogspot",
                de: "com|dnshome|fuettertdasnetz|isteingeek|istmein|lebtimnetz|leitungsen|traeumtgerade|goip|blogspot|logoip",
                dj: "",
                dk: "biz|co|firm|reg|store|blogspot",
                dm: "com|net|org|edu|gov",
                "do": "art|com|edu|gob|gov|mil|net|org|sld|web",
                dz: "com|org|net|gov|edu|asso|pol|art",
                ec: "com|info|net|fin|k12|med|pro|org|edu|gov|gob|mil",
                edu: "",
                ee: "edu|gov|riik|lib|med|com|pri|aip|org|fie|blogspot.com",
                eg: "com|edu|eun|gov|mil|name|net|org|sci|blogspot.com",
                er: "*",
                es: "com|nom|org|gob|edu|blogspot.com",
                et: "com|gov|org|edu|biz|name|info|net",
                eu: "mycd",
                fi: "aland|dy|blogspot|iki",
                fj: "*",
                fk: "*",
                fm: "",
                fo: "",
                fr: "com|asso|nom|prd|presse|tm|aeroport|assedic|avocat|avoues|cci|chambagri|chirurgiens-dentistes|experts-comptables|geometre-expert|gouv|greta|huissier-justice|medecin|notaires|pharmacien|port|veterinaire|fbx-os|fbxos|freebox-os|freeboxos|blogspot|chirurgiens-dentistes-en-france",
                ga: "",
                gb: "",
                gd: "",
                ge: "com|edu|gov|org|mil|net|pvt",
                gf: "",
                gg: "co|net|org",
                gh: "com|edu|gov|org|mil",
                gi: "com|ltd|gov|mod|edu|org",
                gl: "co|com|edu|net|org",
                gm: "",
                gn: "ac|com|edu|gov|org|net",
                gov: "",
                gp: "com|net|mobi|edu|org|asso",
                gq: "",
                gr: "com|edu|net|org|gov|blogspot",
                gs: "",
                gt: "com|edu|gob|ind|mil|net|org",
                gu: "*",
                gw: "",
                gy: "co|com|edu|gov|net|org",
                hk: "com|edu|gov|idv|net|org|xn--55qx5d|xn--wcvs22d|xn--lcvr32d|xn--mxtq1m|xn--gmqw5a|xn--ciqpn|xn--gmq050i|xn--zf0avx|xn--io0a7i|xn--mk0axi|xn--od0alg|xn--od0aq3b|xn--tn0ag|xn--uc0atv|xn--uc0ay4a|blogspot|ltd|inc",
                hm: "",
                hn: "com|edu|org|net|mil|gob",
                hr: "iz|from|name|com|blogspot",
                ht: "com|shop|firm|info|adult|net|pro|org|med|art|coop|pol|asso|edu|rel|gouv|perso",
                hu: "co|info|org|priv|sport|tm|2000|agrar|bolt|casino|city|erotica|erotika|film|forum|games|hotel|ingatlan|jogasz|konyvelo|lakas|media|news|reklam|sex|shop|suli|szex|tozsde|utazas|video|blogspot",
                id: "ac|biz|co|desa|go|mil|my|net|or|sch|web|blogspot.co",
                ie: "gov|blogspot",
                il: "ac|co|gov|idf|k12|muni|net|org|blogspot.co",
                im: "ac|co|com|ltd.co|net|org|plc.co|tt|tv|ro",
                "in": "co|firm|net|org|gen|ind|nic|ac|edu|res|gov|mil|blogspot",
                info: "dyndns|barrel-of-knowledge|barrell-of-knowledge|for-our|groks-the|groks-this|here-for-more|knowsitall|selfip|webhop|nsupdate|dvrcam|ilovecollege|no-ip",
                "int": "eu",
                io: "com|backplaneapp|boxfuse|browsersafetymark|dedyn|drud|github|gitlab|hasura-app|ngrok|nid|pantheonsite|protonet|hzc|sandcats|spacekit",
                iq: "gov|edu|mil|com|org|net",
                ir: "ac|co|gov|id|net|org|sch|xn--mgba3a4f16a|xn--mgba3a4fra",
                is: "net|com|edu|gov|org|int|cupcake|blogspot",
                it: "gov|edu|abr|abruzzo|aosta-valley|aostavalley|bas|basilicata|cal|calabria|cam|campania|emilia-romagna|emiliaromagna|emr|friuli-v-giulia|friuli-ve-giulia|friuli-vegiulia|friuli-venezia-giulia|friuli-veneziagiulia|friuli-vgiulia|friuliv-giulia|friulive-giulia|friulivegiulia|friulivenezia-giulia|friuliveneziagiulia|friulivgiulia|fvg|laz|lazio|lig|liguria|lom|lombardia|lombardy|lucania|mar|marche|mol|molise|piedmont|piemonte|pmn|pug|puglia|sar|sardegna|sardinia|sic|sicilia|sicily|taa|tos|toscana|trentino-a-adige|trentino-aadige|trentino-alto-adige|trentino-altoadige|trentino-s-tirol|trentino-stirol|trentino-sud-tirol|trentino-sudtirol|trentino-sued-tirol|trentino-suedtirol|trentinoa-adige|trentinoaadige|trentinoalto-adige|trentinoaltoadige|trentinos-tirol|trentinostirol|trentinosud-tirol|trentinosudtirol|trentinosued-tirol|trentinosuedtirol|tuscany|umb|umbria|val-d-aosta|val-daosta|vald-aosta|valdaosta|valle-aosta|valle-d-aosta|valle-daosta|valleaosta|valled-aosta|valledaosta|vallee-aoste|valleeaoste|vao|vda|ven|veneto|ag|agrigento|al|alessandria|alto-adige|altoadige|an|ancona|andria-barletta-trani|andria-trani-barletta|andriabarlettatrani|andriatranibarletta|ao|aosta|aoste|ap|aq|aquila|ar|arezzo|ascoli-piceno|ascolipiceno|asti|at|av|avellino|ba|balsan|bari|barletta-trani-andria|barlettatraniandria|belluno|benevento|bergamo|bg|bi|biella|bl|bn|bo|bologna|bolzano|bozen|br|brescia|brindisi|bs|bt|bz|ca|cagliari|caltanissetta|campidano-medio|campidanomedio|campobasso|carbonia-iglesias|carboniaiglesias|carrara-massa|carraramassa|caserta|catania|catanzaro|cb|ce|cesena-forli|cesenaforli|ch|chieti|ci|cl|cn|co|como|cosenza|cr|cremona|crotone|cs|ct|cuneo|cz|dell-ogliastra|dellogliastra|en|enna|fc|fe|fermo|ferrara|fg|fi|firenze|florence|fm|foggia|forli-cesena|forlicesena|fr|frosinone|ge|genoa|genova|go|gorizia|gr|grosseto|iglesias-carbonia|iglesiascarbonia|im|imperia|is|isernia|kr|la-spezia|laquila|laspezia|latina|lc|le|lecce|lecco|li|livorno|lo|lodi|lt|lu|lucca|macerata|mantova|massa-carrara|massacarrara|matera|mb|mc|me|medio-campidano|mediocampidano|messina|mi|milan|milano|mn|mo|modena|monza-brianza|monza-e-della-brianza|monza|monzabrianza|monzaebrianza|monzaedellabrianza|ms|mt|na|naples|napoli|no|novara|nu|nuoro|og|ogliastra|olbia-tempio|olbiatempio|or|oristano|ot|pa|padova|padua|palermo|parma|pavia|pc|pd|pe|perugia|pesaro-urbino|pesarourbino|pescara|pg|pi|piacenza|pisa|pistoia|pn|po|pordenone|potenza|pr|prato|pt|pu|pv|pz|ra|ragusa|ravenna|rc|re|reggio-calabria|reggio-emilia|reggiocalabria|reggioemilia|rg|ri|rieti|rimini|rm|rn|ro|roma|rome|rovigo|sa|salerno|sassari|savona|si|siena|siracusa|so|sondrio|sp|sr|ss|suedtirol|sv|ta|taranto|te|tempio-olbia|tempioolbia|teramo|terni|tn|to|torino|tp|tr|trani-andria-barletta|trani-barletta-andria|traniandriabarletta|tranibarlettaandria|trapani|trentino|trento|treviso|trieste|ts|turin|tv|ud|udine|urbino-pesaro|urbinopesaro|va|varese|vb|vc|ve|venezia|venice|verbania|vercelli|verona|vi|vibo-valentia|vibovalentia|vicenza|viterbo|vr|vs|vt|vv|blogspot",
                je: "co|net|org",
                jm: "*",
                jo: "com|org|net|edu|sch|gov|mil|name",
                jobs: "",
                jp: "ac|ad|co|ed|go|gr|lg|ne|or|aichi|akita|aomori|chiba|ehime|fukui|fukuoka|fukushima|gifu|gunma|hiroshima|hokkaido|hyogo|ibaraki|ishikawa|iwate|kagawa|kagoshima|kanagawa|kochi|kumamoto|kyoto|mie|miyagi|miyazaki|nagano|nagasaki|nara|niigata|oita|okayama|okinawa|osaka|saga|saitama|shiga|shimane|shizuoka|tochigi|tokushima|tokyo|tottori|toyama|wakayama|yamagata|yamaguchi|yamanashi|xn--4pvxs|xn--vgu402c|xn--c3s14m|xn--f6qx53a|xn--8pvr4u|xn--uist22h|xn--djrs72d6uy|xn--mkru45i|xn--0trq7p7nn|xn--8ltr62k|xn--2m4a15e|xn--efvn9s|xn--32vp30h|xn--4it797k|xn--1lqs71d|xn--5rtp49c|xn--5js045d|xn--ehqz56n|xn--1lqs03n|xn--qqqt11m|xn--kbrq7o|xn--pssu33l|xn--ntsq17g|xn--uisz3g|xn--6btw5a|xn--1ctwo|xn--6orx2r|xn--rht61e|xn--rht27z|xn--djty4k|xn--nit225k|xn--rht3d|xn--klty5x|xn--kltx9a|xn--kltp7d|xn--uuwu58a|xn--zbx025d|xn--ntso0iqx3a|xn--elqq16h|xn--4it168d|xn--klt787d|xn--rny31h|xn--7t0a264c|xn--5rtq34k|xn--k7yn95e|xn--tor131o|xn--d5qv7z876c|*kawasaki|*kitakyushu|*kobe|*nagoya|*sapporo|*sendai|*yokohama|!city.kawasaki|!city.kitakyushu|!city.kobe|!city.nagoya|!city.sapporo|!city.sendai|!city.yokohama|aisai.aichi|ama.aichi|anjo.aichi|asuke.aichi|chiryu.aichi|chita.aichi|fuso.aichi|gamagori.aichi|handa.aichi|hazu.aichi|hekinan.aichi|higashiura.aichi|ichinomiya.aichi|inazawa.aichi|inuyama.aichi|isshiki.aichi|iwakura.aichi|kanie.aichi|kariya.aichi|kasugai.aichi|kira.aichi|kiyosu.aichi|komaki.aichi|konan.aichi|kota.aichi|mihama.aichi|miyoshi.aichi|nishio.aichi|nisshin.aichi|obu.aichi|oguchi.aichi|oharu.aichi|okazaki.aichi|owariasahi.aichi|seto.aichi|shikatsu.aichi|shinshiro.aichi|shitara.aichi|tahara.aichi|takahama.aichi|tobishima.aichi|toei.aichi|togo.aichi|tokai.aichi|tokoname.aichi|toyoake.aichi|toyohashi.aichi|toyokawa.aichi|toyone.aichi|toyota.aichi|tsushima.aichi|yatomi.aichi|akita.akita|daisen.akita|fujisato.akita|gojome.akita|hachirogata.akita|happou.akita|higashinaruse.akita|honjo.akita|honjyo.akita|ikawa.akita|kamikoani.akita|kamioka.akita|katagami.akita|kazuno.akita|kitaakita.akita|kosaka.akita|kyowa.akita|misato.akita|mitane.akita|moriyoshi.akita|nikaho.akita|noshiro.akita|odate.akita|oga.akita|ogata.akita|semboku.akita|yokote.akita|yurihonjo.akita|aomori.aomori|gonohe.aomori|hachinohe.aomori|hashikami.aomori|hiranai.aomori|hirosaki.aomori|itayanagi.aomori|kuroishi.aomori|misawa.aomori|mutsu.aomori|nakadomari.aomori|noheji.aomori|oirase.aomori|owani.aomori|rokunohe.aomori|sannohe.aomori|shichinohe.aomori|shingo.aomori|takko.aomori|towada.aomori|tsugaru.aomori|tsuruta.aomori|abiko.chiba|asahi.chiba|chonan.chiba|chosei.chiba|choshi.chiba|chuo.chiba|funabashi.chiba|futtsu.chiba|hanamigawa.chiba|ichihara.chiba|ichikawa.chiba|ichinomiya.chiba|inzai.chiba|isumi.chiba|kamagaya.chiba|kamogawa.chiba|kashiwa.chiba|katori.chiba|katsuura.chiba|kimitsu.chiba|kisarazu.chiba|kozaki.chiba|kujukuri.chiba|kyonan.chiba|matsudo.chiba|midori.chiba|mihama.chiba|minamiboso.chiba|mobara.chiba|mutsuzawa.chiba|nagara.chiba|nagareyama.chiba|narashino.chiba|narita.chiba|noda.chiba|oamishirasato.chiba|omigawa.chiba|onjuku.chiba|otaki.chiba|sakae.chiba|sakura.chiba|shimofusa.chiba|shirako.chiba|shiroi.chiba|shisui.chiba|sodegaura.chiba|sosa.chiba|tako.chiba|tateyama.chiba|togane.chiba|tohnosho.chiba|tomisato.chiba|urayasu.chiba|yachimata.chiba|yachiyo.chiba|yokaichiba.chiba|yokoshibahikari.chiba|yotsukaido.chiba|ainan.ehime|honai.ehime|ikata.ehime|imabari.ehime|iyo.ehime|kamijima.ehime|kihoku.ehime|kumakogen.ehime|masaki.ehime|matsuno.ehime|matsuyama.ehime|namikata.ehime|niihama.ehime|ozu.ehime|saijo.ehime|seiyo.ehime|shikokuchuo.ehime|tobe.ehime|toon.ehime|uchiko.ehime|uwajima.ehime|yawatahama.ehime|echizen.fukui|eiheiji.fukui|fukui.fukui|ikeda.fukui|katsuyama.fukui|mihama.fukui|minamiechizen.fukui|obama.fukui|ohi.fukui|ono.fukui|sabae.fukui|sakai.fukui|takahama.fukui|tsuruga.fukui|wakasa.fukui|ashiya.fukuoka|buzen.fukuoka|chikugo.fukuoka|chikuho.fukuoka|chikujo.fukuoka|chikushino.fukuoka|chikuzen.fukuoka|chuo.fukuoka|dazaifu.fukuoka|fukuchi.fukuoka|hakata.fukuoka|higashi.fukuoka|hirokawa.fukuoka|hisayama.fukuoka|iizuka.fukuoka|inatsuki.fukuoka|kaho.fukuoka|kasuga.fukuoka|kasuya.fukuoka|kawara.fukuoka|keisen.fukuoka|koga.fukuoka|kurate.fukuoka|kurogi.fukuoka|kurume.fukuoka|minami.fukuoka|miyako.fukuoka|miyama.fukuoka|miyawaka.fukuoka|mizumaki.fukuoka|munakata.fukuoka|nakagawa.fukuoka|nakama.fukuoka|nishi.fukuoka|nogata.fukuoka|ogori.fukuoka|okagaki.fukuoka|okawa.fukuoka|oki.fukuoka|omuta.fukuoka|onga.fukuoka|onojo.fukuoka|oto.fukuoka|saigawa.fukuoka|sasaguri.fukuoka|shingu.fukuoka|shinyoshitomi.fukuoka|shonai.fukuoka|soeda.fukuoka|sue.fukuoka|tachiarai.fukuoka|tagawa.fukuoka|takata.fukuoka|toho.fukuoka|toyotsu.fukuoka|tsuiki.fukuoka|ukiha.fukuoka|umi.fukuoka|usui.fukuoka|yamada.fukuoka|yame.fukuoka|yanagawa.fukuoka|yukuhashi.fukuoka|aizubange.fukushima|aizumisato.fukushima|aizuwakamatsu.fukushima|asakawa.fukushima|bandai.fukushima|date.fukushima|fukushima.fukushima|furudono.fukushima|futaba.fukushima|hanawa.fukushima|higashi.fukushima|hirata.fukushima|hirono.fukushima|iitate.fukushima|inawashiro.fukushima|ishikawa.fukushima|iwaki.fukushima|izumizaki.fukushima|kagamiishi.fukushima|kaneyama.fukushima|kawamata.fukushima|kitakata.fukushima|kitashiobara.fukushima|koori.fukushima|koriyama.fukushima|kunimi.fukushima|miharu.fukushima|mishima.fukushima|namie.fukushima|nango.fukushima|nishiaizu.fukushima|nishigo.fukushima|okuma.fukushima|omotego.fukushima|ono.fukushima|otama.fukushima|samegawa.fukushima|shimogo.fukushima|shirakawa.fukushima|showa.fukushima|soma.fukushima|sukagawa.fukushima|taishin.fukushima|tamakawa.fukushima|tanagura.fukushima|tenei.fukushima|yabuki.fukushima|yamato.fukushima|yamatsuri.fukushima|yanaizu.fukushima|yugawa.fukushima|anpachi.gifu|ena.gifu|gifu.gifu|ginan.gifu|godo.gifu|gujo.gifu|hashima.gifu|hichiso.gifu|hida.gifu|higashishirakawa.gifu|ibigawa.gifu|ikeda.gifu|kakamigahara.gifu|kani.gifu|kasahara.gifu|kasamatsu.gifu|kawaue.gifu|kitagata.gifu|mino.gifu|minokamo.gifu|mitake.gifu|mizunami.gifu|motosu.gifu|nakatsugawa.gifu|ogaki.gifu|sakahogi.gifu|seki.gifu|sekigahara.gifu|shirakawa.gifu|tajimi.gifu|takayama.gifu|tarui.gifu|toki.gifu|tomika.gifu|wanouchi.gifu|yamagata.gifu|yaotsu.gifu|yoro.gifu|annaka.gunma|chiyoda.gunma|fujioka.gunma|higashiagatsuma.gunma|isesaki.gunma|itakura.gunma|kanna.gunma|kanra.gunma|katashina.gunma|kawaba.gunma|kiryu.gunma|kusatsu.gunma|maebashi.gunma|meiwa.gunma|midori.gunma|minakami.gunma|naganohara.gunma|nakanojo.gunma|nanmoku.gunma|numata.gunma|oizumi.gunma|ora.gunma|ota.gunma|shibukawa.gunma|shimonita.gunma|shinto.gunma|showa.gunma|takasaki.gunma|takayama.gunma|tamamura.gunma|tatebayashi.gunma|tomioka.gunma|tsukiyono.gunma|tsumagoi.gunma|ueno.gunma|yoshioka.gunma|asaminami.hiroshima|daiwa.hiroshima|etajima.hiroshima|fuchu.hiroshima|fukuyama.hiroshima|hatsukaichi.hiroshima|higashihiroshima.hiroshima|hongo.hiroshima|jinsekikogen.hiroshima|kaita.hiroshima|kui.hiroshima|kumano.hiroshima|kure.hiroshima|mihara.hiroshima|miyoshi.hiroshima|naka.hiroshima|onomichi.hiroshima|osakikamijima.hiroshima|otake.hiroshima|saka.hiroshima|sera.hiroshima|seranishi.hiroshima|shinichi.hiroshima|shobara.hiroshima|takehara.hiroshima|abashiri.hokkaido|abira.hokkaido|aibetsu.hokkaido|akabira.hokkaido|akkeshi.hokkaido|asahikawa.hokkaido|ashibetsu.hokkaido|ashoro.hokkaido|assabu.hokkaido|atsuma.hokkaido|bibai.hokkaido|biei.hokkaido|bifuka.hokkaido|bihoro.hokkaido|biratori.hokkaido|chippubetsu.hokkaido|chitose.hokkaido|date.hokkaido|ebetsu.hokkaido|embetsu.hokkaido|eniwa.hokkaido|erimo.hokkaido|esan.hokkaido|esashi.hokkaido|fukagawa.hokkaido|fukushima.hokkaido|furano.hokkaido|furubira.hokkaido|haboro.hokkaido|hakodate.hokkaido|hamatonbetsu.hokkaido|hidaka.hokkaido|higashikagura.hokkaido|higashikawa.hokkaido|hiroo.hokkaido|hokuryu.hokkaido|hokuto.hokkaido|honbetsu.hokkaido|horokanai.hokkaido|horonobe.hokkaido|ikeda.hokkaido|imakane.hokkaido|ishikari.hokkaido|iwamizawa.hokkaido|iwanai.hokkaido|kamifurano.hokkaido|kamikawa.hokkaido|kamishihoro.hokkaido|kamisunagawa.hokkaido|kamoenai.hokkaido|kayabe.hokkaido|kembuchi.hokkaido|kikonai.hokkaido|kimobetsu.hokkaido|kitahiroshima.hokkaido|kitami.hokkaido|kiyosato.hokkaido|koshimizu.hokkaido|kunneppu.hokkaido|kuriyama.hokkaido|kuromatsunai.hokkaido|kushiro.hokkaido|kutchan.hokkaido|kyowa.hokkaido|mashike.hokkaido|matsumae.hokkaido|mikasa.hokkaido|minamifurano.hokkaido|mombetsu.hokkaido|moseushi.hokkaido|mukawa.hokkaido|muroran.hokkaido|naie.hokkaido|nakagawa.hokkaido|nakasatsunai.hokkaido|nakatombetsu.hokkaido|nanae.hokkaido|nanporo.hokkaido|nayoro.hokkaido|nemuro.hokkaido|niikappu.hokkaido|niki.hokkaido|nishiokoppe.hokkaido|noboribetsu.hokkaido|numata.hokkaido|obihiro.hokkaido|obira.hokkaido|oketo.hokkaido|okoppe.hokkaido|otaru.hokkaido|otobe.hokkaido|otofuke.hokkaido|otoineppu.hokkaido|oumu.hokkaido|ozora.hokkaido|pippu.hokkaido|rankoshi.hokkaido|rebun.hokkaido|rikubetsu.hokkaido|rishiri.hokkaido|rishirifuji.hokkaido|saroma.hokkaido|sarufutsu.hokkaido|shakotan.hokkaido|shari.hokkaido|shibecha.hokkaido|shibetsu.hokkaido|shikabe.hokkaido|shikaoi.hokkaido|shimamaki.hokkaido|shimizu.hokkaido|shimokawa.hokkaido|shinshinotsu.hokkaido|shintoku.hokkaido|shiranuka.hokkaido|shiraoi.hokkaido|shiriuchi.hokkaido|sobetsu.hokkaido|sunagawa.hokkaido|taiki.hokkaido|takasu.hokkaido|takikawa.hokkaido|takinoue.hokkaido|teshikaga.hokkaido|tobetsu.hokkaido|tohma.hokkaido|tomakomai.hokkaido|tomari.hokkaido|toya.hokkaido|toyako.hokkaido|toyotomi.hokkaido|toyoura.hokkaido|tsubetsu.hokkaido|tsukigata.hokkaido|urakawa.hokkaido|urausu.hokkaido|uryu.hokkaido|utashinai.hokkaido|wakkanai.hokkaido|wassamu.hokkaido|yakumo.hokkaido|yoichi.hokkaido|aioi.hyogo|akashi.hyogo|ako.hyogo|amagasaki.hyogo|aogaki.hyogo|asago.hyogo|ashiya.hyogo|awaji.hyogo|fukusaki.hyogo|goshiki.hyogo|harima.hyogo|himeji.hyogo|ichikawa.hyogo|inagawa.hyogo|itami.hyogo|kakogawa.hyogo|kamigori.hyogo|kamikawa.hyogo|kasai.hyogo|kasuga.hyogo|kawanishi.hyogo|miki.hyogo|minamiawaji.hyogo|nishinomiya.hyogo|nishiwaki.hyogo|ono.hyogo|sanda.hyogo|sannan.hyogo|sasayama.hyogo|sayo.hyogo|shingu.hyogo|shinonsen.hyogo|shiso.hyogo|sumoto.hyogo|taishi.hyogo|taka.hyogo|takarazuka.hyogo|takasago.hyogo|takino.hyogo|tamba.hyogo|tatsuno.hyogo|toyooka.hyogo|yabu.hyogo|yashiro.hyogo|yoka.hyogo|yokawa.hyogo|ami.ibaraki|asahi.ibaraki|bando.ibaraki|chikusei.ibaraki|daigo.ibaraki|fujishiro.ibaraki|hitachi.ibaraki|hitachinaka.ibaraki|hitachiomiya.ibaraki|hitachiota.ibaraki|ibaraki.ibaraki|ina.ibaraki|inashiki.ibaraki|itako.ibaraki|iwama.ibaraki|joso.ibaraki|kamisu.ibaraki|kasama.ibaraki|kashima.ibaraki|kasumigaura.ibaraki|koga.ibaraki|miho.ibaraki|mito.ibaraki|moriya.ibaraki|naka.ibaraki|namegata.ibaraki|oarai.ibaraki|ogawa.ibaraki|omitama.ibaraki|ryugasaki.ibaraki|sakai.ibaraki|sakuragawa.ibaraki|shimodate.ibaraki|shimotsuma.ibaraki|shirosato.ibaraki|sowa.ibaraki|suifu.ibaraki|takahagi.ibaraki|tamatsukuri.ibaraki|tokai.ibaraki|tomobe.ibaraki|tone.ibaraki|toride.ibaraki|tsuchiura.ibaraki|tsukuba.ibaraki|uchihara.ibaraki|ushiku.ibaraki|yachiyo.ibaraki|yamagata.ibaraki|yawara.ibaraki|yuki.ibaraki|anamizu.ishikawa|hakui.ishikawa|hakusan.ishikawa|kaga.ishikawa|kahoku.ishikawa|kanazawa.ishikawa|kawakita.ishikawa|komatsu.ishikawa|nakanoto.ishikawa|nanao.ishikawa|nomi.ishikawa|nonoichi.ishikawa|noto.ishikawa|shika.ishikawa|suzu.ishikawa|tsubata.ishikawa|tsurugi.ishikawa|uchinada.ishikawa|wajima.ishikawa|fudai.iwate|fujisawa.iwate|hanamaki.iwate|hiraizumi.iwate|hirono.iwate|ichinohe.iwate|ichinoseki.iwate|iwaizumi.iwate|iwate.iwate|joboji.iwate|kamaishi.iwate|kanegasaki.iwate|karumai.iwate|kawai.iwate|kitakami.iwate|kuji.iwate|kunohe.iwate|kuzumaki.iwate|miyako.iwate|mizusawa.iwate|morioka.iwate|ninohe.iwate|noda.iwate|ofunato.iwate|oshu.iwate|otsuchi.iwate|rikuzentakata.iwate|shiwa.iwate|shizukuishi.iwate|sumita.iwate|tanohata.iwate|tono.iwate|yahaba.iwate|yamada.iwate|ayagawa.kagawa|higashikagawa.kagawa|kanonji.kagawa|kotohira.kagawa|manno.kagawa|marugame.kagawa|mitoyo.kagawa|naoshima.kagawa|sanuki.kagawa|tadotsu.kagawa|takamatsu.kagawa|tonosho.kagawa|uchinomi.kagawa|utazu.kagawa|zentsuji.kagawa|akune.kagoshima|amami.kagoshima|hioki.kagoshima|isa.kagoshima|isen.kagoshima|izumi.kagoshima|kagoshima.kagoshima|kanoya.kagoshima|kawanabe.kagoshima|kinko.kagoshima|kouyama.kagoshima|makurazaki.kagoshima|matsumoto.kagoshima|minamitane.kagoshima|nakatane.kagoshima|nishinoomote.kagoshima|satsumasendai.kagoshima|soo.kagoshima|tarumizu.kagoshima|yusui.kagoshima|aikawa.kanagawa|atsugi.kanagawa|ayase.kanagawa|chigasaki.kanagawa|ebina.kanagawa|fujisawa.kanagawa|hadano.kanagawa|hakone.kanagawa|hiratsuka.kanagawa|isehara.kanagawa|kaisei.kanagawa|kamakura.kanagawa|kiyokawa.kanagawa|matsuda.kanagawa|minamiashigara.kanagawa|miura.kanagawa|nakai.kanagawa|ninomiya.kanagawa|odawara.kanagawa|oi.kanagawa|oiso.kanagawa|sagamihara.kanagawa|samukawa.kanagawa|tsukui.kanagawa|yamakita.kanagawa|yamato.kanagawa|yokosuka.kanagawa|yugawara.kanagawa|zama.kanagawa|zushi.kanagawa|aki.kochi|geisei.kochi|hidaka.kochi|higashitsuno.kochi|ino.kochi|kagami.kochi|kami.kochi|kitagawa.kochi|kochi.kochi|mihara.kochi|motoyama.kochi|muroto.kochi|nahari.kochi|nakamura.kochi|nankoku.kochi|nishitosa.kochi|niyodogawa.kochi|ochi.kochi|okawa.kochi|otoyo.kochi|otsuki.kochi|sakawa.kochi|sukumo.kochi|susaki.kochi|tosa.kochi|tosashimizu.kochi|toyo.kochi|tsuno.kochi|umaji.kochi|yasuda.kochi|yusuhara.kochi|amakusa.kumamoto|arao.kumamoto|aso.kumamoto|choyo.kumamoto|gyokuto.kumamoto|hitoyoshi.kumamoto|kamiamakusa.kumamoto|kashima.kumamoto|kikuchi.kumamoto|kumamoto.kumamoto|mashiki.kumamoto|mifune.kumamoto|minamata.kumamoto|minamioguni.kumamoto|nagasu.kumamoto|nishihara.kumamoto|oguni.kumamoto|ozu.kumamoto|sumoto.kumamoto|takamori.kumamoto|uki.kumamoto|uto.kumamoto|yamaga.kumamoto|yamato.kumamoto|yatsushiro.kumamoto|ayabe.kyoto|fukuchiyama.kyoto|higashiyama.kyoto|ide.kyoto|ine.kyoto|joyo.kyoto|kameoka.kyoto|kamo.kyoto|kita.kyoto|kizu.kyoto|kumiyama.kyoto|kyotamba.kyoto|kyotanabe.kyoto|kyotango.kyoto|maizuru.kyoto|minami.kyoto|minamiyamashiro.kyoto|miyazu.kyoto|muko.kyoto|nagaokakyo.kyoto|nakagyo.kyoto|nantan.kyoto|oyamazaki.kyoto|sakyo.kyoto|seika.kyoto|tanabe.kyoto|uji.kyoto|ujitawara.kyoto|wazuka.kyoto|yamashina.kyoto|yawata.kyoto|asahi.mie|inabe.mie|ise.mie|kameyama.mie|kawagoe.mie|kiho.mie|kisosaki.mie|kiwa.mie|komono.mie|kumano.mie|kuwana.mie|matsusaka.mie|meiwa.mie|mihama.mie|minamiise.mie|misugi.mie|miyama.mie|nabari.mie|shima.mie|suzuka.mie|tado.mie|taiki.mie|taki.mie|tamaki.mie|toba.mie|tsu.mie|udono.mie|ureshino.mie|watarai.mie|yokkaichi.mie|furukawa.miyagi|higashimatsushima.miyagi|ishinomaki.miyagi|iwanuma.miyagi|kakuda.miyagi|kami.miyagi|kawasaki.miyagi|marumori.miyagi|matsushima.miyagi|minamisanriku.miyagi|misato.miyagi|murata.miyagi|natori.miyagi|ogawara.miyagi|ohira.miyagi|onagawa.miyagi|osaki.miyagi|rifu.miyagi|semine.miyagi|shibata.miyagi|shichikashuku.miyagi|shikama.miyagi|shiogama.miyagi|shiroishi.miyagi|tagajo.miyagi|taiwa.miyagi|tome.miyagi|tomiya.miyagi|wakuya.miyagi|watari.miyagi|yamamoto.miyagi|zao.miyagi|aya.miyazaki|ebino.miyazaki|gokase.miyazaki|hyuga.miyazaki|kadogawa.miyazaki|kawaminami.miyazaki|kijo.miyazaki|kitagawa.miyazaki|kitakata.miyazaki|kitaura.miyazaki|kobayashi.miyazaki|kunitomi.miyazaki|kushima.miyazaki|mimata.miyazaki|miyakonojo.miyazaki|miyazaki.miyazaki|morotsuka.miyazaki|nichinan.miyazaki|nishimera.miyazaki|nobeoka.miyazaki|saito.miyazaki|shiiba.miyazaki|shintomi.miyazaki|takaharu.miyazaki|takanabe.miyazaki|takazaki.miyazaki|tsuno.miyazaki|achi.nagano|agematsu.nagano|anan.nagano|aoki.nagano|asahi.nagano|azumino.nagano|chikuhoku.nagano|chikuma.nagano|chino.nagano|fujimi.nagano|hakuba.nagano|hara.nagano|hiraya.nagano|iida.nagano|iijima.nagano|iiyama.nagano|iizuna.nagano|ikeda.nagano|ikusaka.nagano|ina.nagano|karuizawa.nagano|kawakami.nagano|kiso.nagano|kisofukushima.nagano|kitaaiki.nagano|komagane.nagano|komoro.nagano|matsukawa.nagano|matsumoto.nagano|miasa.nagano|minamiaiki.nagano|minamimaki.nagano|minamiminowa.nagano|minowa.nagano|miyada.nagano|miyota.nagano|mochizuki.nagano|nagano.nagano|nagawa.nagano|nagiso.nagano|nakagawa.nagano|nakano.nagano|nozawaonsen.nagano|obuse.nagano|ogawa.nagano|okaya.nagano|omachi.nagano|omi.nagano|ookuwa.nagano|ooshika.nagano|otaki.nagano|otari.nagano|sakae.nagano|sakaki.nagano|saku.nagano|sakuho.nagano|shimosuwa.nagano|shinanomachi.nagano|shiojiri.nagano|suwa.nagano|suzaka.nagano|takagi.nagano|takamori.nagano|takayama.nagano|tateshina.nagano|tatsuno.nagano|togakushi.nagano|togura.nagano|tomi.nagano|ueda.nagano|wada.nagano|yamagata.nagano|yamanouchi.nagano|yasaka.nagano|yasuoka.nagano|chijiwa.nagasaki|futsu.nagasaki|goto.nagasaki|hasami.nagasaki|hirado.nagasaki|iki.nagasaki|isahaya.nagasaki|kawatana.nagasaki|kuchinotsu.nagasaki|matsuura.nagasaki|nagasaki.nagasaki|obama.nagasaki|omura.nagasaki|oseto.nagasaki|saikai.nagasaki|sasebo.nagasaki|seihi.nagasaki|shimabara.nagasaki|shinkamigoto.nagasaki|togitsu.nagasaki|tsushima.nagasaki|unzen.nagasaki|ando.nara|gose.nara|heguri.nara|higashiyoshino.nara|ikaruga.nara|ikoma.nara|kamikitayama.nara|kanmaki.nara|kashiba.nara|kashihara.nara|katsuragi.nara|kawai.nara|kawakami.nara|kawanishi.nara|koryo.nara|kurotaki.nara|mitsue.nara|miyake.nara|nara.nara|nosegawa.nara|oji.nara|ouda.nara|oyodo.nara|sakurai.nara|sango.nara|shimoichi.nara|shimokitayama.nara|shinjo.nara|soni.nara|takatori.nara|tawaramoto.nara|tenkawa.nara|tenri.nara|uda.nara|yamatokoriyama.nara|yamatotakada.nara|yamazoe.nara|yoshino.nara|aga.niigata|agano.niigata|gosen.niigata|itoigawa.niigata|izumozaki.niigata|joetsu.niigata|kamo.niigata|kariwa.niigata|kashiwazaki.niigata|minamiuonuma.niigata|mitsuke.niigata|muika.niigata|murakami.niigata|myoko.niigata|nagaoka.niigata|niigata.niigata|ojiya.niigata|omi.niigata|sado.niigata|sanjo.niigata|seiro.niigata|seirou.niigata|sekikawa.niigata|shibata.niigata|tagami.niigata|tainai.niigata|tochio.niigata|tokamachi.niigata|tsubame.niigata|tsunan.niigata|uonuma.niigata|yahiko.niigata|yoita.niigata|yuzawa.niigata|beppu.oita|bungoono.oita|bungotakada.oita|hasama.oita|hiji.oita|himeshima.oita|hita.oita|kamitsue.oita|kokonoe.oita|kuju.oita|kunisaki.oita|kusu.oita|oita.oita|saiki.oita|taketa.oita|tsukumi.oita|usa.oita|usuki.oita|yufu.oita|akaiwa.okayama|asakuchi.okayama|bizen.okayama|hayashima.okayama|ibara.okayama|kagamino.okayama|kasaoka.okayama|kibichuo.okayama|kumenan.okayama|kurashiki.okayama|maniwa.okayama|misaki.okayama|nagi.okayama|niimi.okayama|nishiawakura.okayama|okayama.okayama|satosho.okayama|setouchi.okayama|shinjo.okayama|shoo.okayama|soja.okayama|takahashi.okayama|tamano.okayama|tsuyama.okayama|wake.okayama|yakage.okayama|aguni.okinawa|ginowan.okinawa|ginoza.okinawa|gushikami.okinawa|haebaru.okinawa|higashi.okinawa|hirara.okinawa|iheya.okinawa|ishigaki.okinawa|ishikawa.okinawa|itoman.okinawa|izena.okinawa|kadena.okinawa|kin.okinawa|kitadaito.okinawa|kitanakagusuku.okinawa|kumejima.okinawa|kunigami.okinawa|minamidaito.okinawa|motobu.okinawa|nago.okinawa|naha.okinawa|nakagusuku.okinawa|nakijin.okinawa|nanjo.okinawa|nishihara.okinawa|ogimi.okinawa|okinawa.okinawa|onna.okinawa|shimoji.okinawa|taketomi.okinawa|tarama.okinawa|tokashiki.okinawa|tomigusuku.okinawa|tonaki.okinawa|urasoe.okinawa|uruma.okinawa|yaese.okinawa|yomitan.okinawa|yonabaru.okinawa|yonaguni.okinawa|zamami.okinawa|abeno.osaka|chihayaakasaka.osaka|chuo.osaka|daito.osaka|fujiidera.osaka|habikino.osaka|hannan.osaka|higashiosaka.osaka|higashisumiyoshi.osaka|higashiyodogawa.osaka|hirakata.osaka|ibaraki.osaka|ikeda.osaka|izumi.osaka|izumiotsu.osaka|izumisano.osaka|kadoma.osaka|kaizuka.osaka|kanan.osaka|kashiwara.osaka|katano.osaka|kawachinagano.osaka|kishiwada.osaka|kita.osaka|kumatori.osaka|matsubara.osaka|minato.osaka|minoh.osaka|misaki.osaka|moriguchi.osaka|neyagawa.osaka|nishi.osaka|nose.osaka|osakasayama.osaka|sakai.osaka|sayama.osaka|sennan.osaka|settsu.osaka|shijonawate.osaka|shimamoto.osaka|suita.osaka|tadaoka.osaka|taishi.osaka|tajiri.osaka|takaishi.osaka|takatsuki.osaka|tondabayashi.osaka|toyonaka.osaka|toyono.osaka|yao.osaka|ariake.saga|arita.saga|fukudomi.saga|genkai.saga|hamatama.saga|hizen.saga|imari.saga|kamimine.saga|kanzaki.saga|karatsu.saga|kashima.saga|kitagata.saga|kitahata.saga|kiyama.saga|kouhoku.saga|kyuragi.saga|nishiarita.saga|ogi.saga|omachi.saga|ouchi.saga|saga.saga|shiroishi.saga|taku.saga|tara.saga|tosu.saga|yoshinogari.saga|arakawa.saitama|asaka.saitama|chichibu.saitama|fujimi.saitama|fujimino.saitama|fukaya.saitama|hanno.saitama|hanyu.saitama|hasuda.saitama|hatogaya.saitama|hatoyama.saitama|hidaka.saitama|higashichichibu.saitama|higashimatsuyama.saitama|honjo.saitama|ina.saitama|iruma.saitama|iwatsuki.saitama|kamiizumi.saitama|kamikawa.saitama|kamisato.saitama|kasukabe.saitama|kawagoe.saitama|kawaguchi.saitama|kawajima.saitama|kazo.saitama|kitamoto.saitama|koshigaya.saitama|kounosu.saitama|kuki.saitama|kumagaya.saitama|matsubushi.saitama|minano.saitama|misato.saitama|miyashiro.saitama|miyoshi.saitama|moroyama.saitama|nagatoro.saitama|namegawa.saitama|niiza.saitama|ogano.saitama|ogawa.saitama|ogose.saitama|okegawa.saitama|omiya.saitama|otaki.saitama|ranzan.saitama|ryokami.saitama|saitama.saitama|sakado.saitama|satte.saitama|sayama.saitama|shiki.saitama|shiraoka.saitama|soka.saitama|sugito.saitama|toda.saitama|tokigawa.saitama|tokorozawa.saitama|tsurugashima.saitama|urawa.saitama|warabi.saitama|yashio.saitama|yokoze.saitama|yono.saitama|yorii.saitama|yoshida.saitama|yoshikawa.saitama|yoshimi.saitama|aisho.shiga|gamo.shiga|higashiomi.shiga|hikone.shiga|koka.shiga|konan.shiga|kosei.shiga|koto.shiga|kusatsu.shiga|maibara.shiga|moriyama.shiga|nagahama.shiga|nishiazai.shiga|notogawa.shiga|omihachiman.shiga|otsu.shiga|ritto.shiga|ryuoh.shiga|takashima.shiga|takatsuki.shiga|torahime.shiga|toyosato.shiga|yasu.shiga|akagi.shimane|ama.shimane|gotsu.shimane|hamada.shimane|higashiizumo.shimane|hikawa.shimane|hikimi.shimane|izumo.shimane|kakinoki.shimane|masuda.shimane|matsue.shimane|misato.shimane|nishinoshima.shimane|ohda.shimane|okinoshima.shimane|okuizumo.shimane|shimane.shimane|tamayu.shimane|tsuwano.shimane|unnan.shimane|yakumo.shimane|yasugi.shimane|yatsuka.shimane|arai.shizuoka|atami.shizuoka|fuji.shizuoka|fujieda.shizuoka|fujikawa.shizuoka|fujinomiya.shizuoka|fukuroi.shizuoka|gotemba.shizuoka|haibara.shizuoka|hamamatsu.shizuoka|higashiizu.shizuoka|ito.shizuoka|iwata.shizuoka|izu.shizuoka|izunokuni.shizuoka|kakegawa.shizuoka|kannami.shizuoka|kawanehon.shizuoka|kawazu.shizuoka|kikugawa.shizuoka|kosai.shizuoka|makinohara.shizuoka|matsuzaki.shizuoka|minamiizu.shizuoka|mishima.shizuoka|morimachi.shizuoka|nishiizu.shizuoka|numazu.shizuoka|omaezaki.shizuoka|shimada.shizuoka|shimizu.shizuoka|shimoda.shizuoka|shizuoka.shizuoka|susono.shizuoka|yaizu.shizuoka|yoshida.shizuoka|ashikaga.tochigi|bato.tochigi|haga.tochigi|ichikai.tochigi|iwafune.tochigi|kaminokawa.tochigi|kanuma.tochigi|karasuyama.tochigi|kuroiso.tochigi|mashiko.tochigi|mibu.tochigi|moka.tochigi|motegi.tochigi|nasu.tochigi|nasushiobara.tochigi|nikko.tochigi|nishikata.tochigi|nogi.tochigi|ohira.tochigi|ohtawara.tochigi|oyama.tochigi|sakura.tochigi|sano.tochigi|shimotsuke.tochigi|shioya.tochigi|takanezawa.tochigi|tochigi.tochigi|tsuga.tochigi|ujiie.tochigi|utsunomiya.tochigi|yaita.tochigi|aizumi.tokushima|anan.tokushima|ichiba.tokushima|itano.tokushima|kainan.tokushima|komatsushima.tokushima|matsushige.tokushima|mima.tokushima|minami.tokushima|miyoshi.tokushima|mugi.tokushima|nakagawa.tokushima|naruto.tokushima|sanagochi.tokushima|shishikui.tokushima|tokushima.tokushima|wajiki.tokushima|adachi.tokyo|akiruno.tokyo|akishima.tokyo|aogashima.tokyo|arakawa.tokyo|bunkyo.tokyo|chiyoda.tokyo|chofu.tokyo|chuo.tokyo|edogawa.tokyo|fuchu.tokyo|fussa.tokyo|hachijo.tokyo|hachioji.tokyo|hamura.tokyo|higashikurume.tokyo|higashimurayama.tokyo|higashiyamato.tokyo|hino.tokyo|hinode.tokyo|hinohara.tokyo|inagi.tokyo|itabashi.tokyo|katsushika.tokyo|kita.tokyo|kiyose.tokyo|kodaira.tokyo|koganei.tokyo|kokubunji.tokyo|komae.tokyo|koto.tokyo|kouzushima.tokyo|kunitachi.tokyo|machida.tokyo|meguro.tokyo|minato.tokyo|mitaka.tokyo|mizuho.tokyo|musashimurayama.tokyo|musashino.tokyo|nakano.tokyo|nerima.tokyo|ogasawara.tokyo|okutama.tokyo|ome.tokyo|oshima.tokyo|ota.tokyo|setagaya.tokyo|shibuya.tokyo|shinagawa.tokyo|shinjuku.tokyo|suginami.tokyo|sumida.tokyo|tachikawa.tokyo|taito.tokyo|tama.tokyo|toshima.tokyo|chizu.tottori|hino.tottori|kawahara.tottori|koge.tottori|kotoura.tottori|misasa.tottori|nanbu.tottori|nichinan.tottori|sakaiminato.tottori|tottori.tottori|wakasa.tottori|yazu.tottori|yonago.tottori|asahi.toyama|fuchu.toyama|fukumitsu.toyama|funahashi.toyama|himi.toyama|imizu.toyama|inami.toyama|johana.toyama|kamiichi.toyama|kurobe.toyama|nakaniikawa.toyama|namerikawa.toyama|nanto.toyama|nyuzen.toyama|oyabe.toyama|taira.toyama|takaoka.toyama|tateyama.toyama|toga.toyama|tonami.toyama|toyama.toyama|unazuki.toyama|uozu.toyama|yamada.toyama|arida.wakayama|aridagawa.wakayama|gobo.wakayama|hashimoto.wakayama|hidaka.wakayama|hirogawa.wakayama|inami.wakayama|iwade.wakayama|kainan.wakayama|kamitonda.wakayama|katsuragi.wakayama|kimino.wakayama|kinokawa.wakayama|kitayama.wakayama|koya.wakayama|koza.wakayama|kozagawa.wakayama|kudoyama.wakayama|kushimoto.wakayama|mihama.wakayama|misato.wakayama|nachikatsuura.wakayama|shingu.wakayama|shirahama.wakayama|taiji.wakayama|tanabe.wakayama|wakayama.wakayama|yuasa.wakayama|yura.wakayama|asahi.yamagata|funagata.yamagata|higashine.yamagata|iide.yamagata|kahoku.yamagata|kaminoyama.yamagata|kaneyama.yamagata|kawanishi.yamagata|mamurogawa.yamagata|mikawa.yamagata|murayama.yamagata|nagai.yamagata|nakayama.yamagata|nanyo.yamagata|nishikawa.yamagata|obanazawa.yamagata|oe.yamagata|oguni.yamagata|ohkura.yamagata|oishida.yamagata|sagae.yamagata|sakata.yamagata|sakegawa.yamagata|shinjo.yamagata|shirataka.yamagata|shonai.yamagata|takahata.yamagata|tendo.yamagata|tozawa.yamagata|tsuruoka.yamagata|yamagata.yamagata|yamanobe.yamagata|yonezawa.yamagata|yuza.yamagata|abu.yamaguchi|hagi.yamaguchi|hikari.yamaguchi|hofu.yamaguchi|iwakuni.yamaguchi|kudamatsu.yamaguchi|mitou.yamaguchi|nagato.yamaguchi|oshima.yamaguchi|shimonoseki.yamaguchi|shunan.yamaguchi|tabuse.yamaguchi|tokuyama.yamaguchi|toyota.yamaguchi|ube.yamaguchi|yuu.yamaguchi|chuo.yamanashi|doshi.yamanashi|fuefuki.yamanashi|fujikawa.yamanashi|fujikawaguchiko.yamanashi|fujiyoshida.yamanashi|hayakawa.yamanashi|hokuto.yamanashi|ichikawamisato.yamanashi|kai.yamanashi|kofu.yamanashi|koshu.yamanashi|kosuge.yamanashi|minami-alps.yamanashi|minobu.yamanashi|nakamichi.yamanashi|nanbu.yamanashi|narusawa.yamanashi|nirasaki.yamanashi|nishikatsura.yamanashi|oshino.yamanashi|otsuki.yamanashi|showa.yamanashi|tabayama.yamanashi|tsuru.yamanashi|uenohara.yamanashi|yamanakako.yamanashi|yamanashi.yamanashi|blogspot",
                ke: "*|blogspot.co",
                kg: "org|net|com|edu|gov|mil",
                kh: "*",
                ki: "edu|biz|net|org|gov|info|com",
                km: "org|nom|gov|prd|tm|edu|mil|ass|com|coop|asso|presse|medecin|notaires|pharmaciens|veterinaire|gouv",
                kn: "net|org|edu|gov",
                kp: "com|edu|gov|org|rep|tra",
                kr: "ac|co|es|go|hs|kg|mil|ms|ne|or|pe|re|sc|busan|chungbuk|chungnam|daegu|daejeon|gangwon|gwangju|gyeongbuk|gyeonggi|gyeongnam|incheon|jeju|jeonbuk|jeonnam|seoul|ulsan|blogspot",
                kw: "*",
                ky: "edu|gov|com|org|net",
                kz: "org|edu|net|gov|mil|com",
                la: "int|net|info|edu|gov|per|com|org|bnr|c",
                lb: "com|edu|gov|net|org",
                lc: "com|net|co|org|edu|gov|oy",
                li: "blogspot",
                lk: "gov|sch|net|int|com|org|edu|ngo|soc|web|ltd|assn|grp|hotel|ac",
                lr: "com|edu|gov|org|net",
                ls: "co|org",
                lt: "gov|blogspot",
                lu: "blogspot",
                lv: "com|edu|gov|org|mil|id|net|asn|conf",
                ly: "com|net|gov|plc|edu|sch|med|org|id",
                ma: "co|net|gov|org|ac|press",
                mc: "tm|asso",
                md: "blogspot",
                me: "co|net|org|edu|ac|gov|its|priv|daplie|brasilia|ddns|dnsfor|hopto|loginto|noip|webhop|diskstation|dscloud|i234|myds|synology",
                mg: "org|nom|gov|prd|tm|edu|mil|com|co",
                mh: "",
                mil: "",
                mk: "com|org|net|edu|gov|inf|name|blogspot",
                ml: "com|edu|gouv|gov|net|org|presse",
                mm: "*",
                mn: "gov|edu|org|nyc",
                mo: "com|net|org|edu|gov",
                mobi: "dscloud",
                mp: "",
                mq: "",
                mr: "gov|blogspot",
                ms: "com|edu|gov|net|org",
                mt: "com|edu|net|org|blogspot.com",
                mu: "com|net|org|gov|ac|co|or",
                museum: "academy|agriculture|air|airguard|alabama|alaska|amber|ambulance|american|americana|americanantiques|americanart|amsterdam|and|annefrank|anthro|anthropology|antiques|aquarium|arboretum|archaeological|archaeology|architecture|art|artanddesign|artcenter|artdeco|arteducation|artgallery|arts|artsandcrafts|asmatart|assassination|assisi|association|astronomy|atlanta|austin|australia|automotive|aviation|axis|badajoz|baghdad|bahn|bale|baltimore|barcelona|baseball|basel|baths|bauern|beauxarts|beeldengeluid|bellevue|bergbau|berkeley|berlin|bern|bible|bilbao|bill|birdart|birthplace|bonn|boston|botanical|botanicalgarden|botanicgarden|botany|brandywinevalley|brasil|bristol|british|britishcolumbia|broadcast|brunel|brussel|brussels|bruxelles|building|burghof|bus|bushey|cadaques|california|cambridge|can|canada|capebreton|carrier|cartoonart|casadelamoneda|castle|castres|celtic|center|chattanooga|cheltenham|chesapeakebay|chicago|children|childrens|childrensgarden|chiropractic|chocolate|christiansburg|cincinnati|cinema|circus|civilisation|civilization|civilwar|clinton|clock|coal|coastaldefence|cody|coldwar|collection|colonialwilliamsburg|coloradoplateau|columbia|columbus|communication|communications|community|computer|computerhistory|xn--comunicaes-v6a2o|contemporary|contemporaryart|convent|copenhagen|corporation|xn--correios-e-telecomunicaes-ghc29a|corvette|costume|countryestate|county|crafts|cranbrook|creation|cultural|culturalcenter|culture|cyber|cymru|dali|dallas|database|ddr|decorativearts|delaware|delmenhorst|denmark|depot|design|detroit|dinosaur|discovery|dolls|donostia|durham|eastafrica|eastcoast|education|educational|egyptian|eisenbahn|elburg|elvendrell|embroidery|encyclopedic|england|entomology|environment|environmentalconservation|epilepsy|essex|estate|ethnology|exeter|exhibition|family|farm|farmequipment|farmers|farmstead|field|figueres|filatelia|film|fineart|finearts|finland|flanders|florida|force|fortmissoula|fortworth|foundation|francaise|frankfurt|franziskaner|freemasonry|freiburg|fribourg|frog|fundacio|furniture|gallery|garden|gateway|geelvinck|gemological|geology|georgia|giessen|glas|glass|gorge|grandrapids|graz|guernsey|halloffame|hamburg|handson|harvestcelebration|hawaii|health|heimatunduhren|hellas|helsinki|hembygdsforbund|heritage|histoire|historical|historicalsociety|historichouses|historisch|historisches|history|historyofscience|horology|house|humanities|illustration|imageandsound|indian|indiana|indianapolis|indianmarket|intelligence|interactive|iraq|iron|isleofman|jamison|jefferson|jerusalem|jewelry|jewish|jewishart|jfk|journalism|judaica|judygarland|juedisches|juif|karate|karikatur|kids|koebenhavn|koeln|kunst|kunstsammlung|kunstunddesign|labor|labour|lajolla|lancashire|landes|lans|xn--lns-qla|larsson|lewismiller|lincoln|linz|living|livinghistory|localhistory|london|losangeles|louvre|loyalist|lucerne|luxembourg|luzern|mad|madrid|mallorca|manchester|mansion|mansions|manx|marburg|maritime|maritimo|maryland|marylhurst|media|medical|medizinhistorisches|meeres|memorial|mesaverde|michigan|midatlantic|military|mill|miners|mining|minnesota|missile|missoula|modern|moma|money|monmouth|monticello|montreal|moscow|motorcycle|muenchen|muenster|mulhouse|muncie|museet|museumcenter|museumvereniging|music|national|nationalfirearms|nationalheritage|nativeamerican|naturalhistory|naturalhistorymuseum|naturalsciences|nature|naturhistorisches|natuurwetenschappen|naumburg|naval|nebraska|neues|newhampshire|newjersey|newmexico|newport|newspaper|newyork|niepce|norfolk|north|nrw|nuernberg|nuremberg|nyc|nyny|oceanographic|oceanographique|omaha|online|ontario|openair|oregon|oregontrail|otago|oxford|pacific|paderborn|palace|paleo|palmsprings|panama|paris|pasadena|pharmacy|philadelphia|philadelphiaarea|philately|phoenix|photography|pilots|pittsburgh|planetarium|plantation|plants|plaza|portal|portland|portlligat|posts-and-telecommunications|preservation|presidio|press|project|public|pubol|quebec|railroad|railway|research|resistance|riodejaneiro|rochester|rockart|roma|russia|saintlouis|salem|salvadordali|salzburg|sandiego|sanfrancisco|santabarbara|santacruz|santafe|saskatchewan|satx|savannahga|schlesisches|schoenbrunn|schokoladen|school|schweiz|science|scienceandhistory|scienceandindustry|sciencecenter|sciencecenters|science-fiction|sciencehistory|sciences|sciencesnaturelles|scotland|seaport|settlement|settlers|shell|sherbrooke|sibenik|silk|ski|skole|society|sologne|soundandvision|southcarolina|southwest|space|spy|square|stadt|stalbans|starnberg|state|stateofdelaware|station|steam|steiermark|stjohn|stockholm|stpetersburg|stuttgart|suisse|surgeonshall|surrey|svizzera|sweden|sydney|tank|tcm|technology|telekommunikation|television|texas|textile|theater|time|timekeeping|topology|torino|touch|town|transport|tree|trolley|trust|trustee|uhren|ulm|undersea|university|usa|usantiques|usarts|uscountryestate|usculture|usdecorativearts|usgarden|ushistory|ushuaia|uslivinghistory|utah|uvic|valley|vantaa|versailles|viking|village|virginia|virtual|virtuel|vlaanderen|volkenkunde|wales|wallonie|war|washingtondc|watchandclock|watch-and-clock|western|westfalen|whaling|wildlife|williamsburg|windmill|workshop|york|yorkshire|yosemite|youth|zoological|zoology|xn--9dbhblg6di|xn--h1aegh",
                mv: "aero|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro",
                mw: "ac|biz|co|com|coop|edu|gov|int|museum|net|org",
                mx: "com|org|gob|edu|net|blogspot",
                my: "com|net|org|gov|edu|mil|name|blogspot",
                mz: "*|!teledata",
                na: "info|pro|name|school|or|dr|us|mx|ca|in|cc|tv|ws|mobi|co|com|org",
                name: "forgot.her|forgot.his",
                nc: "asso",
                ne: "",
                net: "cloudfront|myfritz|gb|hu|jp|se|uk|in|cdn77-ssl|r.cdn77|*cryptonomic|at-band-camp|blogdns|broke-it|buyshouses|dnsalias|dnsdojo|does-it|dontexist|dynalias|dynathome|endofinternet|from-az|from-co|from-la|from-ny|gets-it|ham-radio-op|homeftp|homeip|homelinux|homeunix|in-the-band|is-a-chef|is-a-geek|isa-geek|kicks-ass|office-on-the|podzone|scrapper-site|selfip|sells-it|servebbs|serveftp|thruhere|webhop|dynv6|a.ssl.fastly|b.ssl.fastly|global.ssl.fastly|a.prod.fastly|global.prod.fastly|cloudfunctions|azurewebsites|azure-mobile|cloudapp|eating-organic|mydissent|myeffect|mymediapc|mypsx|mysecuritycamera|nhlfan|no-ip|pgafan|privatizehealthinsurance|bounceme|ddns|redirectme|serveblog|serveminecraft|sytes|rackmaze|dsmynas|familyds|za",
                nf: "com|net|per|rec|web|arts|firm|info|other|store",
                ng: "com|edu|gov|i|mil|mobi|name|net|org|sch|blogspot.com",
                ni: "com|gob|edu|org|nom|net|mil|co|biz|web|int|ac|in|info",
                nl: "bv|virtueeldomein|co|blogspot",
                no: "fhs|vgs|fylkesbibl|folkebibl|museum|idrett|priv|mil|stat|dep|kommune|herad|aa|ah|bu|fm|hl|hm|jan-mayen|mr|nl|nt|of|ol|oslo|rl|sf|st|svalbard|tm|tr|va|vf|gs.aa|gs.ah|gs.bu|gs.fm|gs.hl|gs.hm|gs.jan-mayen|gs.mr|gs.nl|gs.nt|gs.of|gs.ol|gs.oslo|gs.rl|gs.sf|gs.st|gs.svalbard|gs.tm|gs.tr|gs.va|gs.vf|akrehamn|xn--krehamn-dxa|algard|xn--lgrd-poac|arna|brumunddal|bryne|bronnoysund|xn--brnnysund-m8ac|drobak|xn--drbak-wua|egersund|fetsund|floro|xn--flor-jra|fredrikstad|hokksund|honefoss|xn--hnefoss-q1a|jessheim|jorpeland|xn--jrpeland-54a|kirkenes|kopervik|krokstadelva|langevag|xn--langevg-jxa|leirvik|mjondalen|xn--mjndalen-64a|mo-i-rana|mosjoen|xn--mosjen-eya|nesoddtangen|orkanger|osoyro|xn--osyro-wua|raholt|xn--rholt-mra|sandnessjoen|xn--sandnessjen-ogb|skedsmokorset|slattum|spjelkavik|stathelle|stavern|stjordalshalsen|xn--stjrdalshalsen-sqb|tananger|tranby|vossevangen|afjord|xn--fjord-lra|agdenes|al|xn--l-1fa|alesund|xn--lesund-hua|alstahaug|alta|xn--lt-liac|alaheadju|xn--laheadju-7ya|alvdal|amli|xn--mli-tla|amot|xn--mot-tla|andebu|andoy|xn--andy-ira|andasuolo|ardal|xn--rdal-poa|aremark|arendal|xn--s-1fa|aseral|xn--seral-lra|asker|askim|askvoll|askoy|xn--asky-ira|asnes|xn--snes-poa|audnedaln|aukra|aure|aurland|aurskog-holand|xn--aurskog-hland-jnb|austevoll|austrheim|averoy|xn--avery-yua|balestrand|ballangen|balat|xn--blt-elab|balsfjord|bahccavuotna|xn--bhccavuotna-k7a|bamble|bardu|beardu|beiarn|bajddar|xn--bjddar-pta|baidar|xn--bidr-5nac|berg|bergen|berlevag|xn--berlevg-jxa|bearalvahki|xn--bearalvhki-y4a|bindal|birkenes|bjarkoy|xn--bjarky-fya|bjerkreim|bjugn|bodo|xn--bod-2na|badaddja|xn--bdddj-mrabd|budejju|bokn|bremanger|bronnoy|xn--brnny-wuac|bygland|bykle|barum|xn--brum-voa|bo.telemark|xn--b-5ga.telemark|bo.nordland|xn--b-5ga.nordland|bievat|xn--bievt-0qa|bomlo|xn--bmlo-gra|batsfjord|xn--btsfjord-9za|bahcavuotna|xn--bhcavuotna-s4a|dovre|drammen|drangedal|dyroy|xn--dyry-ira|donna|xn--dnna-gra|eid|eidfjord|eidsberg|eidskog|eidsvoll|eigersund|elverum|enebakk|engerdal|etne|etnedal|evenes|evenassi|xn--eveni-0qa01ga|evje-og-hornnes|farsund|fauske|fuossko|fuoisku|fedje|fet|finnoy|xn--finny-yua|fitjar|fjaler|fjell|flakstad|flatanger|flekkefjord|flesberg|flora|fla|xn--fl-zia|folldal|forsand|fosnes|frei|frogn|froland|frosta|frana|xn--frna-woa|froya|xn--frya-hra|fusa|fyresdal|forde|xn--frde-gra|gamvik|gangaviika|xn--ggaviika-8ya47h|gaular|gausdal|gildeskal|xn--gildeskl-g0a|giske|gjemnes|gjerdrum|gjerstad|gjesdal|gjovik|xn--gjvik-wua|gloppen|gol|gran|grane|granvin|gratangen|grimstad|grong|kraanghke|xn--kranghke-b0a|grue|gulen|hadsel|halden|halsa|hamar|hamaroy|habmer|xn--hbmer-xqa|hapmir|xn--hpmir-xqa|hammerfest|hammarfeasta|xn--hmmrfeasta-s4ac|haram|hareid|harstad|hasvik|aknoluokta|xn--koluokta-7ya57h|hattfjelldal|aarborte|haugesund|hemne|hemnes|hemsedal|heroy.more-og-romsdal|xn--hery-ira.xn--mre-og-romsdal-qqb|heroy.nordland|xn--hery-ira.nordland|hitra|hjartdal|hjelmeland|hobol|xn--hobl-ira|hof|hol|hole|holmestrand|holtalen|xn--holtlen-hxa|hornindal|horten|hurdal|hurum|hvaler|hyllestad|hagebostad|xn--hgebostad-g3a|hoyanger|xn--hyanger-q1a|hoylandet|xn--hylandet-54a|ha|xn--h-2fa|ibestad|inderoy|xn--indery-fya|iveland|jevnaker|jondal|jolster|xn--jlster-bya|karasjok|karasjohka|xn--krjohka-hwab49j|karlsoy|galsa|xn--gls-elac|karmoy|xn--karmy-yua|kautokeino|guovdageaidnu|klepp|klabu|xn--klbu-woa|kongsberg|kongsvinger|kragero|xn--krager-gya|kristiansand|kristiansund|krodsherad|xn--krdsherad-m8a|kvalsund|rahkkeravju|xn--rhkkervju-01af|kvam|kvinesdal|kvinnherad|kviteseid|kvitsoy|xn--kvitsy-fya|kvafjord|xn--kvfjord-nxa|giehtavuoatna|kvanangen|xn--kvnangen-k0a|navuotna|xn--nvuotna-hwa|kafjord|xn--kfjord-iua|gaivuotna|xn--givuotna-8ya|larvik|lavangen|lavagis|loabat|xn--loabt-0qa|lebesby|davvesiida|leikanger|leirfjord|leka|leksvik|lenvik|leangaviika|xn--leagaviika-52b|lesja|levanger|lier|lierne|lillehammer|lillesand|lindesnes|lindas|xn--linds-pra|lom|loppa|lahppi|xn--lhppi-xqa|lund|lunner|luroy|xn--lury-ira|luster|lyngdal|lyngen|ivgu|lardal|lerdal|xn--lrdal-sra|lodingen|xn--ldingen-q1a|lorenskog|xn--lrenskog-54a|loten|xn--lten-gra|malvik|masoy|xn--msy-ula0h|muosat|xn--muost-0qa|mandal|marker|marnardal|masfjorden|meland|meldal|melhus|meloy|xn--mely-ira|meraker|xn--merker-kua|moareke|xn--moreke-jua|midsund|midtre-gauldal|modalen|modum|molde|moskenes|moss|mosvik|malselv|xn--mlselv-iua|malatvuopmi|xn--mlatvuopmi-s4a|namdalseid|aejrie|namsos|namsskogan|naamesjevuemie|xn--nmesjevuemie-tcba|laakesvuemie|nannestad|narvik|narviika|naustdal|nedre-eiker|nes.akershus|nes.buskerud|nesna|nesodden|nesseby|unjarga|xn--unjrga-rta|nesset|nissedal|nittedal|nord-aurdal|nord-fron|nord-odal|norddal|nordkapp|davvenjarga|xn--davvenjrga-y4a|nordre-land|nordreisa|raisa|xn--risa-5na|nore-og-uvdal|notodden|naroy|xn--nry-yla5g|notteroy|xn--nttery-byae|odda|oksnes|xn--ksnes-uua|oppdal|oppegard|xn--oppegrd-ixa|orkdal|orland|xn--rland-uua|orskog|xn--rskog-uua|orsta|xn--rsta-fra|os.hedmark|os.hordaland|osen|osteroy|xn--ostery-fya|ostre-toten|xn--stre-toten-zcb|overhalla|ovre-eiker|xn--vre-eiker-k8a|oyer|xn--yer-zna|oygarden|xn--ygarden-p1a|oystre-slidre|xn--ystre-slidre-ujb|porsanger|porsangu|xn--porsgu-sta26f|porsgrunn|radoy|xn--rady-ira|rakkestad|rana|ruovat|randaberg|rauma|rendalen|rennebu|rennesoy|xn--rennesy-v1a|rindal|ringebu|ringerike|ringsaker|rissa|risor|xn--risr-ira|roan|rollag|rygge|ralingen|xn--rlingen-mxa|rodoy|xn--rdy-0nab|romskog|xn--rmskog-bya|roros|xn--rros-gra|rost|xn--rst-0na|royken|xn--ryken-vua|royrvik|xn--ryrvik-bya|rade|xn--rde-ula|salangen|siellak|saltdal|salat|xn--slt-elab|xn--slat-5na|samnanger|sande.more-og-romsdal|sande.xn--mre-og-romsdal-qqb|sande.vestfold|sandefjord|sandnes|sandoy|xn--sandy-yua|sarpsborg|sauda|sauherad|sel|selbu|selje|seljord|sigdal|siljan|sirdal|skaun|skedsmo|ski|skien|skiptvet|skjervoy|xn--skjervy-v1a|skierva|xn--skierv-uta|skjak|xn--skjk-soa|skodje|skanland|xn--sknland-fxa|skanit|xn--sknit-yqa|smola|xn--smla-hra|snillfjord|snasa|xn--snsa-roa|snoasa|snaase|xn--snase-nra|sogndal|sokndal|sola|solund|songdalen|sortland|spydeberg|stange|stavanger|steigen|steinkjer|stjordal|xn--stjrdal-s1a|stokke|stor-elvdal|stord|stordal|storfjord|omasvuotna|strand|stranda|stryn|sula|suldal|sund|sunndal|surnadal|sveio|svelvik|sykkylven|sogne|xn--sgne-gra|somna|xn--smna-gra|sondre-land|xn--sndre-land-0cb|sor-aurdal|xn--sr-aurdal-l8a|sor-fron|xn--sr-fron-q1a|sor-odal|xn--sr-odal-q1a|sor-varanger|xn--sr-varanger-ggb|matta-varjjat|xn--mtta-vrjjat-k7af|sorfold|xn--srfold-bya|sorreisa|xn--srreisa-q1a|sorum|xn--srum-gra|tana|deatnu|time|tingvoll|tinn|tjeldsund|dielddanuorri|tjome|xn--tjme-hra|tokke|tolga|torsken|tranoy|xn--trany-yua|tromso|xn--troms-zua|tromsa|romsa|trondheim|troandin|trysil|trana|xn--trna-woa|trogstad|xn--trgstad-r1a|tvedestrand|tydal|tynset|tysfjord|divtasvuodna|divttasvuotna|tysnes|tysvar|xn--tysvr-vra|tonsberg|xn--tnsberg-q1a|ullensaker|ullensvang|ulvik|utsira|vadso|xn--vads-jra|cahcesuolo|xn--hcesuolo-7ya35b|vaksdal|valle|vang|vanylven|vardo|xn--vard-jra|varggat|xn--vrggt-xqad|vefsn|vaapste|vega|vegarshei|xn--vegrshei-c0a|vennesla|verdal|verran|vestby|vestnes|vestre-slidre|vestre-toten|vestvagoy|xn--vestvgy-ixa6o|vevelstad|vik|vikna|vindafjord|volda|voss|varoy|xn--vry-yla5g|vagan|xn--vgan-qoa|voagat|vagsoy|xn--vgsy-qoa0j|vaga|xn--vg-yiab|valer.ostfold|xn--vler-qoa.xn--stfold-9xa|valer.hedmark|xn--vler-qoa.hedmark|co|blogspot",
                np: "*",
                nr: "biz|info|gov|edu|org|net|com",
                nu: "merseine|mine|shacknet",
                nz: "ac|co|cri|geek|gen|govt|health|iwi|kiwi|maori|mil|xn--mori-qsa|net|org|parliament|school|blogspot.co",
                om: "co|com|edu|gov|med|museum|net|org|pro",
                org: "pimienta|poivron|potager|sweetpepper|ae|us|certmgr|c.cdn77|rsc.cdn77|ssl.origin.cdn77-secure|duckdns|tunk|dyndns|blogdns|blogsite|boldlygoingnowhere|dnsalias|dnsdojo|doesntexist|dontexist|doomdns|dvrdns|dynalias|endofinternet|endoftheinternet|from-me|game-host|go.dyndns|gotdns|hobby-site|home.dyndns|homedns|homeftp|homelinux|homeunix|is-a-bruinsfan|is-a-candidate|is-a-celticsfan|is-a-chef|is-a-geek|is-a-knight|is-a-linux-user|is-a-patsfan|is-a-soxfan|is-found|is-lost|is-saved|is-very-bad|is-very-evil|is-very-good|is-very-nice|is-very-sweet|isa-geek|kicks-ass|misconfused|podzone|readmyblog|selfip|sellsyourhome|servebbs|serveftp|servegame|stuff-4-sale|webhop|eu|al.eu|asso.eu|at.eu|au.eu|be.eu|bg.eu|ca.eu|cd.eu|ch.eu|cn.eu|cy.eu|cz.eu|de.eu|dk.eu|edu.eu|ee.eu|es.eu|fi.eu|fr.eu|gr.eu|hr.eu|hu.eu|ie.eu|il.eu|in.eu|int.eu|is.eu|it.eu|jp.eu|kr.eu|lt.eu|lu.eu|lv.eu|mc.eu|me.eu|mk.eu|mt.eu|my.eu|net.eu|ng.eu|nl.eu|no.eu|nz.eu|paris.eu|pl.eu|pt.eu|q-a.eu|ro.eu|ru.eu|se.eu|si.eu|sk.eu|tr.eu|uk.eu|us.eu|hepforge|js|bmoattachments|cable-modem|collegefan|couchpotatofries|mlbfan|mysecuritycamera|nflfan|read-books|ufcfan|hopto|myftp|no-ip|zapto|dsmynas|familyds|tuxfamily|hk|wmflabs|za",
                pa: "ac|gob|com|org|sld|edu|net|ing|abo|med|nom",
                pe: "edu|gob|nom|mil|org|com|net|blogspot",
                pf: "com|org|edu",
                pg: "*",
                ph: "com|net|org|gov|edu|ngo|mil|i",
                pk: "com|net|edu|org|fam|biz|web|gov|gob|gok|gon|gop|gos|info",
                pl: "com|net|org|aid|agro|atm|auto|biz|edu|gmina|gsm|info|mail|miasta|media|mil|nieruchomosci|nom|pc|powiat|priv|realestate|rel|sex|shop|sklep|sos|szkola|targi|tm|tourism|travel|turystyka|gov|ap.gov|ic.gov|is.gov|us.gov|kmpsp.gov|kppsp.gov|kwpsp.gov|psp.gov|wskr.gov|kwp.gov|mw.gov|ug.gov|um.gov|umig.gov|ugim.gov|upow.gov|uw.gov|starostwo.gov|pa.gov|po.gov|psse.gov|pup.gov|rzgw.gov|sa.gov|so.gov|sr.gov|wsa.gov|sko.gov|uzs.gov|wiih.gov|winb.gov|pinb.gov|wios.gov|witd.gov|wzmiuw.gov|piw.gov|wiw.gov|griw.gov|wif.gov|oum.gov|sdn.gov|zp.gov|uppo.gov|mup.gov|wuoz.gov|konsulat.gov|oirm.gov|augustow|babia-gora|bedzin|beskidy|bialowieza|bialystok|bielawa|bieszczady|boleslawiec|bydgoszcz|bytom|cieszyn|czeladz|czest|dlugoleka|elblag|elk|glogow|gniezno|gorlice|grajewo|ilawa|jaworzno|jelenia-gora|jgora|kalisz|kazimierz-dolny|karpacz|kartuzy|kaszuby|katowice|kepno|ketrzyn|klodzko|kobierzyce|kolobrzeg|konin|konskowola|kutno|lapy|lebork|legnica|lezajsk|limanowa|lomza|lowicz|lubin|lukow|malbork|malopolska|mazowsze|mazury|mielec|mielno|mragowo|naklo|nowaruda|nysa|olawa|olecko|olkusz|olsztyn|opoczno|opole|ostroda|ostroleka|ostrowiec|ostrowwlkp|pila|pisz|podhale|podlasie|polkowice|pomorze|pomorskie|prochowice|pruszkow|przeworsk|pulawy|radom|rawa-maz|rybnik|rzeszow|sanok|sejny|slask|slupsk|sosnowiec|stalowa-wola|skoczow|starachowice|stargard|suwalki|swidnica|swiebodzin|swinoujscie|szczecin|szczytno|tarnobrzeg|tgory|turek|tychy|ustka|walbrzych|warmia|warszawa|waw|wegrow|wielun|wlocl|wloclawek|wodzislaw|wolomin|wroclaw|zachpomor|zagan|zarow|zgora|zgorzelec|beep|co|art|gliwice|krakow|poznan|wroc|zakopane|gda|gdansk|gdynia|med|sopot",
                pm: "",
                pn: "gov|co|org|edu|net",
                post: "",
                pr: "com|net|org|gov|edu|isla|pro|biz|info|name|est|prof|ac",
                pro: "aaa|aca|acct|avocat|bar|cpa|eng|jur|law|med|recht",
                ps: "edu|gov|sec|plo|com|org|net",
                pt: "net|gov|org|edu|int|publ|com|nome|blogspot",
                pw: "co|ne|or|ed|go|belau",
                py: "com|coop|edu|gov|mil|net|org",
                qa: "com|edu|gov|mil|name|net|org|sch|blogspot",
                re: "asso|com|nom|blogspot",
                ro: "arts|com|firm|info|nom|nt|org|rec|store|tm|www|shop|blogspot",
                rs: "ac|co|edu|gov|in|org|blogspot",
                ru: "ac|com|edu|int|net|org|pp|adygeya|altai|amur|arkhangelsk|astrakhan|bashkiria|belgorod|bir|bryansk|buryatia|cbg|chel|chelyabinsk|chita|chukotka|chuvashia|dagestan|dudinka|e-burg|grozny|irkutsk|ivanovo|izhevsk|jar|joshkar-ola|kalmykia|kaluga|kamchatka|karelia|kazan|kchr|kemerovo|khabarovsk|khakassia|khv|kirov|koenig|komi|kostroma|krasnoyarsk|kuban|kurgan|kursk|lipetsk|magadan|mari|mari-el|marine|mordovia|msk|murmansk|nalchik|nnov|nov|novosibirsk|nsk|omsk|orenburg|oryol|palana|penza|perm|ptz|rnd|ryazan|sakhalin|samara|saratov|simbirsk|smolensk|spb|stavropol|stv|surgut|tambov|tatarstan|tom|tomsk|tsaritsyn|tsk|tula|tuva|tver|tyumen|udm|udmurtia|ulan-ude|vladikavkaz|vladimir|vladivostok|volgograd|vologda|voronezh|vrn|vyatka|yakutia|yamal|yaroslavl|yekaterinburg|yuzhno-sakhalinsk|amursk|baikal|cmw|fareast|jamal|kms|k-uralsk|kustanai|kuzbass|mytis|nakhodka|nkz|norilsk|oskol|pyatigorsk|rubtsovsk|snz|syzran|vdonsk|zgrad|gov|mil|test|blogspot",
                rw: "gov|net|edu|ac|com|co|int|mil|gouv",
                sa: "com|net|org|gov|med|pub|edu|sch",
                sb: "com|edu|gov|net|org",
                sc: "com|gov|net|org|edu",
                sd: "com|net|org|edu|med|tv|gov|info",
                se: "a|ac|b|bd|brand|c|d|e|f|fh|fhsk|fhv|g|h|i|k|komforb|kommunalforbund|komvux|l|lanbib|m|n|naturbruksgymn|o|org|p|parti|pp|press|r|s|t|tm|u|w|x|y|z|com|blogspot",
                sg: "com|net|org|gov|edu|per|blogspot",
                sh: "com|net|gov|org|mil|*platform|hashbang",
                si: "blogspot",
                sj: "",
                sk: "blogspot",
                sl: "com|net|edu|gov|org",
                sm: "",
                sn: "art|com|edu|gouv|org|perso|univ|blogspot",
                so: "com|net|org",
                sr: "",
                st: "co|com|consulado|edu|embaixada|gov|mil|net|org|principe|saotome|store",
                su: "adygeya|arkhangelsk|balashov|bashkiria|bryansk|dagestan|grozny|ivanovo|kalmykia|kaluga|karelia|khakassia|krasnodar|kurgan|lenug|mordovia|msk|murmansk|nalchik|nov|obninsk|penza|pokrovsk|sochi|spb|togliatti|troitsk|tula|tuva|vladikavkaz|vladimir|vologda",
                sv: "com|edu|gob|org|red",
                sx: "gov",
                sy: "edu|gov|net|mil|com|org",
                sz: "co|ac|org",
                tc: "",
                td: "blogspot",
                tel: "",
                tf: "",
                tg: "",
                th: "ac|co|go|in|mi|net|or",
                tj: "ac|biz|co|com|edu|go|gov|int|mil|name|net|nic|org|test|web",
                tk: "",
                tl: "gov",
                tm: "com|co|org|net|nom|gov|mil|edu",
                tn: "com|ens|fin|gov|ind|intl|nat|net|org|info|perso|tourism|edunet|rnrt|rns|rnu|mincom|agrinet|defense|turen",
                to: "com|gov|net|org|edu|mil",
                tr: "com|info|biz|net|org|web|gen|tv|av|dr|bbs|name|tel|gov|bel|pol|mil|k12|edu|kep|nc|gov.nc|blogspot.com",
                travel: "",
                tt: "co|com|org|net|biz|info|pro|int|coop|jobs|mobi|travel|museum|aero|name|gov|edu",
                tv: "dyndns|better-than|on-the-web|worse-than",
                tw: "edu|gov|mil|com|net|org|idv|game|ebiz|club|xn--zf0ao64a|xn--uc0atv|xn--czrw28b|blogspot",
                tz: "ac|co|go|hotel|info|me|mil|mobi|ne|or|sc|tv",
                ua: "com|edu|gov|in|net|org|cherkassy|cherkasy|chernigov|chernihiv|chernivtsi|chernovtsy|ck|cn|cr|crimea|cv|dn|dnepropetrovsk|dnipropetrovsk|dominic|donetsk|dp|if|ivano-frankivsk|kh|kharkiv|kharkov|kherson|khmelnitskiy|khmelnytskyi|kiev|kirovograd|km|kr|krym|ks|kv|kyiv|lg|lt|lugansk|lutsk|lv|lviv|mk|mykolaiv|nikolaev|od|odesa|odessa|pl|poltava|rivne|rovno|rv|sb|sebastopol|sevastopol|sm|sumy|te|ternopil|uz|uzhgorod|vinnica|vinnytsia|vn|volyn|yalta|zaporizhzhe|zaporizhzhia|zhitomir|zhytomyr|zp|zt|biz|co|pp",
                ug: "co|or|ac|sc|go|ne|com|org|blogspot",
                uk: "ac|co|gov|ltd|me|net|nhs|org|plc|police|*sch|service.gov|blogspot.co|no-ip.co",
                us: "dni|fed|isa|kids|nsn|ak|al|ar|as|az|ca|co|ct|dc|de|fl|ga|gu|hi|ia|id|il|in|ks|ky|la|ma|md|me|mi|mn|mo|ms|mt|nc|nd|ne|nh|nj|nm|nv|ny|oh|ok|or|pa|pr|ri|sc|sd|tn|tx|ut|vi|vt|va|wa|wi|wv|wy|k12.ak|k12.al|k12.ar|k12.as|k12.az|k12.ca|k12.co|k12.ct|k12.dc|k12.de|k12.fl|k12.ga|k12.gu|k12.ia|k12.id|k12.il|k12.in|k12.ks|k12.ky|k12.la|k12.ma|k12.md|k12.me|k12.mi|k12.mn|k12.mo|k12.ms|k12.mt|k12.nc|k12.ne|k12.nh|k12.nj|k12.nm|k12.nv|k12.ny|k12.oh|k12.ok|k12.or|k12.pa|k12.pr|k12.ri|k12.sc|k12.tn|k12.tx|k12.ut|k12.vi|k12.vt|k12.va|k12.wa|k12.wi|k12.wy|cc.ak|cc.al|cc.ar|cc.as|cc.az|cc.ca|cc.co|cc.ct|cc.dc|cc.de|cc.fl|cc.ga|cc.gu|cc.hi|cc.ia|cc.id|cc.il|cc.in|cc.ks|cc.ky|cc.la|cc.ma|cc.md|cc.me|cc.mi|cc.mn|cc.mo|cc.ms|cc.mt|cc.nc|cc.nd|cc.ne|cc.nh|cc.nj|cc.nm|cc.nv|cc.ny|cc.oh|cc.ok|cc.or|cc.pa|cc.pr|cc.ri|cc.sc|cc.sd|cc.tn|cc.tx|cc.ut|cc.vi|cc.vt|cc.va|cc.wa|cc.wi|cc.wv|cc.wy|lib.ak|lib.al|lib.ar|lib.as|lib.az|lib.ca|lib.co|lib.ct|lib.dc|lib.fl|lib.ga|lib.gu|lib.hi|lib.ia|lib.id|lib.il|lib.in|lib.ks|lib.ky|lib.la|lib.ma|lib.md|lib.me|lib.mi|lib.mn|lib.mo|lib.ms|lib.mt|lib.nc|lib.nd|lib.ne|lib.nh|lib.nj|lib.nm|lib.nv|lib.ny|lib.oh|lib.ok|lib.or|lib.pa|lib.pr|lib.ri|lib.sc|lib.sd|lib.tn|lib.tx|lib.ut|lib.vi|lib.vt|lib.va|lib.wa|lib.wi|lib.wy|pvt.k12.ma|chtr.k12.ma|paroch.k12.ma|drud|is-by|land-4-sale|stuff-4-sale|golffan|noip|pointto|lib.de",
                uy: "com|edu|gub|mil|net|org|blogspot.com",
                uz: "co|com|net|org",
                va: "",
                vc: "com|net|org|gov|mil|edu",
                ve: "arts|co|com|e12|edu|firm|gob|gov|info|int|mil|net|org|rec|store|tec|web",
                vg: "",
                vi: "co|com|k12|net|org",
                vn: "com|net|org|edu|gov|int|ac|biz|info|name|pro|health|blogspot",
                vu: "com|edu|net|org",
                wf: "",
                ws: "com|net|org|gov|edu|dyndns|mypets",
                yt: "",
                "xn--mgbaam7a8h": "",
                "xn--y9a3aq": "",
                "xn--54b7fta0cc": "",
                "xn--90ais": "",
                "xn--fiqs8s": "",
                "xn--fiqz9s": "",
                "xn--lgbbat1ad8j": "",
                "xn--wgbh1c": "",
                "xn--e1a4c": "",
                "xn--node": "",
                "xn--qxam": "",
                "xn--j6w193g": "",
                "xn--h2brj9c": "",
                "xn--mgbbh1a71e": "",
                "xn--fpcrj9c3d": "",
                "xn--gecrj9c": "",
                "xn--s9brj9c": "",
                "xn--45brj9c": "",
                "xn--xkc2dl3a5ee0h": "",
                "xn--mgba3a4f16a": "",
                "xn--mgba3a4fra": "",
                "xn--mgbtx2b": "",
                "xn--mgbayh7gpa": "",
                "xn--3e0b707e": "",
                "xn--80ao21a": "",
                "xn--fzc2c9e2c": "",
                "xn--xkc2al3hye2a": "",
                "xn--mgbc0a9azcg": "",
                "xn--d1alf": "",
                "xn--l1acc": "",
                "xn--mix891f": "",
                "xn--mix082f": "",
                "xn--mgbx4cd0ab": "",
                "xn--mgb9awbf": "",
                "xn--mgbai9azgqp6j": "",
                "xn--mgbai9a5eva00b": "",
                "xn--ygbi2ammx": "",
                "xn--90a3ac": "xn--o1ac|xn--c1avg|xn--90azh|xn--d1at|xn--o1ach|xn--80au",
                "xn--p1ai": "",
                "xn--wgbl6a": "",
                "xn--mgberp4a5d4ar": "",
                "xn--mgberp4a5d4a87g": "",
                "xn--mgbqly7c0a67fbc": "",
                "xn--mgbqly7cvafr": "",
                "xn--mgbpl2fh": "",
                "xn--yfro4i67o": "",
                "xn--clchc0ea0b2g2a9gcd": "",
                "xn--ogbpf8fl": "",
                "xn--mgbtf8fl": "",
                "xn--o3cw4h": "",
                "xn--pgbs0dh": "",
                "xn--kpry57d": "",
                "xn--kprw13d": "",
                "xn--nnx388a": "",
                "xn--j1amh": "",
                "xn--mgb2ddes": "",
                xxx: "",
                ye: "*",
                za: "ac|agric|alt|co|edu|gov|grondar|law|mil|net|ngo|nis|nom|org|school|tm|web|blogspot.co",
                zm: "ac|biz|co|com|edu|gov|info|mil|net|org|sch",
                zw: "*",
                aaa: "",
                aarp: "",
                abarth: "",
                abb: "",
                abbott: "",
                abbvie: "",
                abc: "",
                able: "",
                abogado: "",
                abudhabi: "",
                academy: "",
                accenture: "",
                accountant: "",
                accountants: "",
                aco: "",
                active: "",
                actor: "",
                adac: "",
                ads: "",
                adult: "",
                aeg: "",
                aetna: "",
                afamilycompany: "",
                afl: "",
                africa: "",
                agakhan: "",
                agency: "",
                aig: "",
                aigo: "",
                airbus: "",
                airforce: "",
                airtel: "",
                akdn: "",
                alfaromeo: "",
                alibaba: "",
                alipay: "",
                allfinanz: "",
                allstate: "",
                ally: "",
                alsace: "",
                alstom: "",
                americanexpress: "",
                americanfamily: "",
                amex: "",
                amfam: "",
                amica: "",
                amsterdam: "",
                analytics: "",
                android: "",
                anquan: "",
                anz: "",
                aol: "",
                apartments: "",
                app: "",
                apple: "",
                aquarelle: "",
                arab: "",
                aramco: "",
                archi: "",
                army: "",
                art: "",
                arte: "",
                asda: "",
                associates: "",
                athleta: "",
                attorney: "",
                auction: "",
                audi: "",
                audible: "",
                audio: "",
                auspost: "",
                author: "",
                auto: "",
                autos: "",
                avianca: "",
                aws: "",
                axa: "",
                azure: "",
                baby: "",
                baidu: "",
                banamex: "",
                bananarepublic: "",
                band: "",
                bank: "",
                bar: "",
                barcelona: "",
                barclaycard: "",
                barclays: "",
                barefoot: "",
                bargains: "",
                baseball: "",
                basketball: "",
                bauhaus: "",
                bayern: "",
                bbc: "",
                bbt: "",
                bbva: "",
                bcg: "",
                bcn: "",
                beats: "",
                beauty: "",
                beer: "",
                bentley: "",
                berlin: "",
                best: "",
                bestbuy: "",
                bet: "",
                bharti: "",
                bible: "",
                bid: "",
                bike: "",
                bing: "",
                bingo: "",
                bio: "",
                black: "",
                blackfriday: "",
                blanco: "",
                blockbuster: "",
                blog: "",
                bloomberg: "",
                blue: "",
                bms: "",
                bmw: "",
                bnl: "",
                bnpparibas: "",
                boats: "",
                boehringer: "",
                bofa: "",
                bom: "",
                bond: "",
                boo: "",
                book: "",
                booking: "",
                boots: "",
                bosch: "",
                bostik: "",
                boston: "",
                bot: "",
                boutique: "",
                box: "",
                bradesco: "",
                bridgestone: "",
                broadway: "",
                broker: "",
                brother: "",
                brussels: "",
                budapest: "",
                bugatti: "",
                build: "",
                builders: "",
                business: "",
                buy: "",
                buzz: "",
                bzh: "",
                cab: "",
                cafe: "",
                cal: "",
                call: "",
                calvinklein: "",
                cam: "",
                camera: "",
                camp: "",
                cancerresearch: "",
                canon: "",
                capetown: "",
                capital: "",
                capitalone: "",
                car: "",
                caravan: "",
                cards: "",
                care: "",
                career: "",
                careers: "",
                cars: "",
                cartier: "",
                casa: "",
                "case": "",
                caseih: "",
                cash: "",
                casino: "",
                catering: "",
                catholic: "",
                cba: "",
                cbn: "",
                cbre: "",
                cbs: "",
                ceb: "",
                center: "",
                ceo: "",
                cern: "",
                cfa: "",
                cfd: "",
                chanel: "",
                channel: "",
                chase: "",
                chat: "",
                cheap: "",
                chintai: "",
                chloe: "",
                christmas: "",
                chrome: "",
                chrysler: "",
                church: "",
                cipriani: "",
                circle: "",
                cisco: "",
                citadel: "",
                citi: "",
                citic: "",
                city: "",
                cityeats: "",
                claims: "",
                cleaning: "",
                click: "",
                clinic: "",
                clinique: "",
                clothing: "",
                cloud: "*magentosite",
                club: "",
                clubmed: "",
                coach: "",
                codes: "",
                coffee: "",
                college: "",
                cologne: "",
                comcast: "",
                commbank: "",
                community: "",
                company: "",
                compare: "",
                computer: "",
                comsec: "",
                condos: "",
                construction: "",
                consulting: "",
                contact: "",
                contractors: "",
                cooking: "",
                cookingchannel: "",
                cool: "",
                corsica: "",
                country: "",
                coupon: "",
                coupons: "",
                courses: "",
                credit: "",
                creditcard: "",
                creditunion: "",
                cricket: "",
                crown: "",
                crs: "",
                cruise: "",
                cruises: "",
                csc: "",
                cuisinella: "",
                cymru: "",
                cyou: "",
                dabur: "",
                dad: "",
                dance: "",
                data: "",
                date: "",
                dating: "",
                datsun: "",
                day: "",
                dclk: "",
                dds: "",
                deal: "",
                dealer: "",
                deals: "",
                degree: "",
                delivery: "",
                dell: "",
                deloitte: "",
                delta: "",
                democrat: "",
                dental: "",
                dentist: "",
                desi: "",
                design: "",
                dev: "",
                dhl: "",
                diamonds: "",
                diet: "",
                digital: "",
                direct: "",
                directory: "",
                discount: "",
                discover: "",
                dish: "",
                diy: "",
                dnp: "",
                docs: "",
                doctor: "",
                dodge: "",
                dog: "",
                doha: "",
                domains: "",
                dot: "",
                download: "",
                drive: "",
                dtv: "",
                dubai: "",
                duck: "",
                dunlop: "",
                duns: "",
                dupont: "",
                durban: "",
                dvag: "",
                dvr: "",
                dwg: "",
                earth: "",
                eat: "",
                eco: "",
                edeka: "",
                education: "",
                email: "",
                emerck: "",
                emerson: "",
                energy: "",
                engineer: "",
                engineering: "",
                enterprises: "",
                epost: "",
                epson: "",
                equipment: "",
                ericsson: "",
                erni: "",
                esq: "",
                estate: "*compute",
                esurance: "",
                etisalat: "",
                eurovision: "",
                eus: "",
                events: "",
                everbank: "",
                exchange: "",
                expert: "",
                exposed: "",
                express: "",
                extraspace: "",
                fage: "",
                fail: "",
                fairwinds: "",
                faith: "",
                family: "",
                fan: "",
                fans: "",
                farm: "",
                farmers: "",
                fashion: "",
                fast: "",
                fedex: "",
                feedback: "",
                ferrari: "",
                ferrero: "",
                fiat: "",
                fidelity: "",
                fido: "",
                film: "",
                "final": "",
                finance: "",
                financial: "",
                fire: "",
                firestone: "",
                firmdale: "",
                fish: "",
                fishing: "",
                fit: "",
                fitness: "",
                flickr: "",
                flights: "",
                flir: "",
                florist: "",
                flowers: "",
                fly: "",
                foo: "",
                food: "",
                foodnetwork: "",
                football: "",
                ford: "",
                forex: "",
                forsale: "",
                forum: "",
                foundation: "",
                fox: "",
                free: "",
                fresenius: "",
                frl: "",
                frogans: "",
                frontdoor: "",
                frontier: "",
                ftr: "",
                fujitsu: "",
                fujixerox: "",
                fun: "",
                fund: "",
                furniture: "",
                futbol: "",
                fyi: "",
                gal: "",
                gallery: "",
                gallo: "",
                gallup: "",
                game: "",
                games: "",
                gap: "",
                garden: "",
                gbiz: "",
                gdn: "",
                gea: "",
                gent: "",
                genting: "",
                george: "",
                ggee: "",
                gift: "",
                gifts: "",
                gives: "",
                giving: "",
                glade: "",
                glass: "",
                gle: "",
                global: "",
                globo: "",
                gmail: "",
                gmbh: "",
                gmo: "",
                gmx: "",
                godaddy: "",
                gold: "",
                goldpoint: "",
                golf: "",
                goo: "",
                goodhands: "",
                goodyear: "",
                goog: "",
                google: "",
                gop: "",
                got: "",
                grainger: "",
                graphics: "",
                gratis: "",
                green: "",
                gripe: "",
                grocery: "",
                group: "",
                guardian: "",
                gucci: "",
                guge: "",
                guide: "",
                guitars: "",
                guru: "",
                hair: "",
                hamburg: "",
                hangout: "",
                haus: "",
                hbo: "",
                hdfc: "",
                hdfcbank: "",
                health: "",
                healthcare: "",
                help: "",
                helsinki: "",
                here: "",
                hermes: "",
                hgtv: "",
                hiphop: "",
                hisamitsu: "",
                hitachi: "",
                hiv: "",
                hkt: "",
                hockey: "",
                holdings: "",
                holiday: "",
                homedepot: "",
                homegoods: "",
                homes: "",
                homesense: "",
                honda: "",
                honeywell: "",
                horse: "",
                host: "",
                hosting: "",
                hot: "",
                hoteles: "",
                hotels: "",
                hotmail: "",
                house: "",
                how: "",
                hsbc: "",
                htc: "",
                hughes: "",
                hyatt: "",
                hyundai: "",
                ibm: "",
                icbc: "",
                ice: "",
                icu: "",
                ieee: "",
                ifm: "",
                iinet: "",
                ikano: "",
                imamat: "",
                imdb: "",
                immo: "",
                immobilien: "",
                industries: "",
                infiniti: "",
                ing: "",
                ink: "",
                institute: "",
                insurance: "",
                insure: "",
                intel: "",
                international: "",
                intuit: "",
                investments: "",
                ipiranga: "",
                irish: "",
                iselect: "",
                ismaili: "",
                ist: "",
                istanbul: "",
                itau: "",
                itv: "",
                iveco: "",
                iwc: "",
                jaguar: "",
                java: "",
                jcb: "",
                jcp: "",
                jeep: "",
                jetzt: "",
                jewelry: "",
                jio: "",
                jlc: "",
                jll: "",
                jmp: "",
                jnj: "",
                joburg: "",
                jot: "",
                joy: "",
                jpmorgan: "",
                jprs: "",
                juegos: "",
                juniper: "",
                kaufen: "",
                kddi: "",
                kerryhotels: "",
                kerrylogistics: "",
                kerryproperties: "",
                kfh: "",
                kia: "",
                kim: "",
                kinder: "",
                kindle: "",
                kitchen: "",
                kiwi: "",
                koeln: "",
                komatsu: "",
                kosher: "",
                kpmg: "",
                kpn: "",
                krd: "co|edu",
                kred: "",
                kuokgroup: "",
                kyoto: "",
                lacaixa: "",
                ladbrokes: "",
                lamborghini: "",
                lamer: "",
                lancaster: "",
                lancia: "",
                lancome: "",
                land: "static|dev.static|sites.static",
                landrover: "",
                lanxess: "",
                lasalle: "",
                lat: "",
                latino: "",
                latrobe: "",
                law: "",
                lawyer: "",
                lds: "",
                lease: "",
                leclerc: "",
                lefrak: "",
                legal: "",
                lego: "",
                lexus: "",
                lgbt: "",
                liaison: "",
                lidl: "",
                life: "",
                lifeinsurance: "",
                lifestyle: "",
                lighting: "",
                like: "",
                lilly: "",
                limited: "",
                limo: "",
                lincoln: "",
                linde: "",
                link: "cyon|mypep",
                lipsy: "",
                live: "",
                living: "",
                lixil: "",
                loan: "",
                loans: "",
                locker: "",
                locus: "",
                loft: "",
                lol: "",
                london: "",
                lotte: "",
                lotto: "",
                love: "",
                lpl: "",
                lplfinancial: "",
                ltd: "",
                ltda: "",
                lundbeck: "",
                lupin: "",
                luxe: "",
                luxury: "",
                macys: "",
                madrid: "",
                maif: "",
                maison: "",
                makeup: "",
                man: "",
                management: "router",
                mango: "",
                map: "",
                market: "",
                marketing: "",
                markets: "",
                marriott: "",
                marshalls: "",
                maserati: "",
                mattel: "",
                mba: "",
                mcd: "",
                mcdonalds: "",
                mckinsey: "",
                med: "",
                media: "",
                meet: "",
                melbourne: "",
                meme: "",
                memorial: "",
                men: "",
                menu: "",
                meo: "",
                merckmsd: "",
                metlife: "",
                miami: "",
                microsoft: "",
                mini: "",
                mint: "",
                mit: "",
                mitsubishi: "",
                mlb: "",
                mls: "",
                mma: "",
                mobile: "",
                mobily: "",
                moda: "",
                moe: "",
                moi: "",
                mom: "",
                monash: "",
                money: "",
                monster: "",
                montblanc: "",
                mopar: "",
                mormon: "",
                mortgage: "",
                moscow: "",
                moto: "",
                motorcycles: "",
                mov: "",
                movie: "",
                movistar: "",
                msd: "",
                mtn: "",
                mtpc: "",
                mtr: "",
                mutual: "",
                mutuelle: "",
                nab: "",
                nadex: "",
                nagoya: "",
                nationwide: "",
                natura: "",
                navy: "",
                nba: "",
                nec: "",
                netbank: "",
                netflix: "",
                network: "*alces",
                neustar: "",
                "new": "",
                newholland: "",
                news: "",
                next: "",
                nextdirect: "",
                nexus: "",
                nfl: "",
                ngo: "",
                nhk: "",
                nico: "",
                nike: "",
                nikon: "",
                ninja: "",
                nissan: "",
                nissay: "",
                nokia: "",
                northwesternmutual: "",
                norton: "",
                now: "",
                nowruz: "",
                nowtv: "",
                nra: "",
                nrw: "",
                ntt: "",
                nyc: "",
                obi: "",
                observer: "",
                off: "",
                office: "",
                okinawa: "",
                olayan: "",
                olayangroup: "",
                oldnavy: "",
                ollo: "",
                omega: "",
                one: "",
                ong: "",
                onl: "",
                online: "",
                onyourside: "",
                ooo: "",
                open: "",
                oracle: "",
                orange: "",
                organic: "",
                orientexpress: "",
                origins: "",
                osaka: "",
                otsuka: "",
                ott: "",
                ovh: "nerdpol",
                page: "",
                pamperedchef: "",
                panasonic: "",
                panerai: "",
                paris: "",
                pars: "",
                partners: "",
                parts: "",
                party: "",
                passagens: "",
                pay: "",
                pccw: "",
                pet: "",
                pfizer: "",
                pharmacy: "",
                phd: "",
                philips: "",
                phone: "",
                photo: "",
                photography: "",
                photos: "",
                physio: "",
                piaget: "",
                pics: "",
                pictet: "",
                pictures: "",
                pid: "",
                pin: "",
                ping: "",
                pink: "",
                pioneer: "",
                pizza: "",
                place: "",
                play: "",
                playstation: "",
                plumbing: "",
                plus: "",
                pnc: "",
                pohl: "",
                poker: "",
                politie: "",
                porn: "",
                pramerica: "",
                praxi: "",
                press: "",
                prime: "",
                prod: "",
                productions: "",
                prof: "",
                progressive: "",
                promo: "",
                properties: "",
                property: "",
                protection: "",
                pru: "",
                prudential: "",
                pub: "",
                pwc: "",
                qpon: "",
                quebec: "",
                quest: "",
                qvc: "",
                racing: "",
                radio: "",
                raid: "",
                read: "",
                realestate: "",
                realtor: "",
                realty: "",
                recipes: "",
                red: "",
                redstone: "",
                redumbrella: "",
                rehab: "",
                reise: "",
                reisen: "",
                reit: "",
                reliance: "",
                ren: "",
                rent: "",
                rentals: "",
                repair: "",
                report: "",
                republican: "",
                rest: "",
                restaurant: "",
                review: "",
                reviews: "",
                rexroth: "",
                rich: "",
                richardli: "",
                ricoh: "",
                rightathome: "",
                ril: "",
                rio: "",
                rip: "",
                rmit: "",
                rocher: "",
                rocks: "",
                rodeo: "",
                rogers: "",
                room: "",
                rsvp: "",
                ruhr: "",
                run: "",
                rwe: "",
                ryukyu: "",
                saarland: "",
                safe: "",
                safety: "",
                sakura: "",
                sale: "",
                salon: "",
                samsclub: "",
                samsung: "",
                sandvik: "",
                sandvikcoromant: "",
                sanofi: "",
                sap: "",
                sapo: "",
                sarl: "",
                sas: "",
                save: "",
                saxo: "",
                sbi: "",
                sbs: "",
                sca: "",
                scb: "",
                schaeffler: "",
                schmidt: "",
                scholarships: "",
                school: "",
                schule: "",
                schwarz: "",
                science: "",
                scjohnson: "",
                scor: "",
                scot: "",
                search: "",
                seat: "",
                secure: "",
                security: "",
                seek: "",
                select: "",
                sener: "",
                services: "",
                ses: "",
                seven: "",
                sew: "",
                sex: "",
                sexy: "",
                sfr: "",
                shangrila: "",
                sharp: "",
                shaw: "",
                shell: "",
                shia: "",
                shiksha: "",
                shoes: "",
                shop: "",
                shopping: "",
                shouji: "",
                show: "",
                showtime: "",
                shriram: "",
                silk: "",
                sina: "",
                singles: "",
                site: "cyon",
                ski: "",
                skin: "",
                sky: "",
                skype: "",
                sling: "",
                smart: "",
                smile: "",
                sncf: "",
                soccer: "",
                social: "",
                softbank: "",
                software: "",
                sohu: "",
                solar: "",
                solutions: "",
                song: "",
                sony: "",
                soy: "",
                space: "stackspace",
                spiegel: "",
                spot: "",
                spreadbetting: "",
                srl: "",
                srt: "",
                stada: "",
                staples: "",
                star: "",
                starhub: "",
                statebank: "",
                statefarm: "",
                statoil: "",
                stc: "",
                stcgroup: "",
                stockholm: "",
                storage: "",
                store: "",
                stream: "",
                studio: "",
                study: "",
                style: "",
                sucks: "",
                supplies: "",
                supply: "",
                support: "",
                surf: "",
                surgery: "",
                suzuki: "",
                swatch: "",
                swiftcover: "",
                swiss: "",
                sydney: "",
                symantec: "",
                systems: "",
                tab: "",
                taipei: "",
                talk: "",
                taobao: "",
                target: "",
                tatamotors: "",
                tatar: "",
                tattoo: "",
                tax: "",
                taxi: "",
                tci: "",
                tdk: "",
                team: "",
                tech: "",
                technology: "",
                telecity: "",
                telefonica: "",
                temasek: "",
                tennis: "",
                teva: "",
                thd: "",
                theater: "",
                theatre: "",
                theguardian: "",
                tiaa: "",
                tickets: "",
                tienda: "",
                tiffany: "",
                tips: "",
                tires: "",
                tirol: "",
                tjmaxx: "",
                tjx: "",
                tkmaxx: "",
                tmall: "",
                today: "",
                tokyo: "",
                tools: "",
                top: "",
                toray: "",
                toshiba: "",
                total: "",
                tours: "",
                town: "",
                toyota: "",
                toys: "",
                trade: "",
                trading: "",
                training: "",
                travelchannel: "",
                travelers: "",
                travelersinsurance: "",
                trust: "",
                trv: "",
                tube: "",
                tui: "",
                tunes: "",
                tushu: "",
                tvs: "",
                ubank: "",
                ubs: "",
                uconnect: "",
                unicom: "",
                university: "",
                uno: "",
                uol: "",
                ups: "",
                vacations: "",
                vana: "",
                vanguard: "",
                vegas: "",
                ventures: "",
                verisign: "",
                versicherung: "",
                vet: "",
                viajes: "",
                video: "",
                vig: "",
                viking: "",
                villas: "",
                vin: "",
                vip: "",
                virgin: "",
                visa: "",
                vision: "",
                vista: "",
                vistaprint: "",
                viva: "",
                vivo: "",
                vlaanderen: "",
                vodka: "",
                volkswagen: "",
                volvo: "",
                vote: "",
                voting: "",
                voto: "",
                voyage: "",
                vuelos: "",
                wales: "",
                walmart: "",
                walter: "",
                wang: "",
                wanggou: "",
                warman: "",
                watch: "",
                watches: "",
                weather: "",
                weatherchannel: "",
                webcam: "",
                weber: "",
                website: "",
                wed: "",
                wedding: "",
                weibo: "",
                weir: "",
                whoswho: "",
                wien: "",
                wiki: "",
                williamhill: "",
                win: "",
                windows: "",
                wine: "",
                winners: "",
                wme: "",
                wolterskluwer: "",
                woodside: "",
                work: "",
                works: "",
                world: "",
                wow: "",
                wtc: "",
                wtf: "",
                xbox: "",
                xerox: "",
                xfinity: "",
                xihuan: "",
                xin: "",
                "xn--11b4c3d": "",
                "xn--1ck2e1b": "",
                "xn--1qqw23a": "",
                "xn--30rr7y": "",
                "xn--3bst00m": "",
                "xn--3ds443g": "",
                "xn--3oq18vl8pn36a": "",
                "xn--3pxu8k": "",
                "xn--42c2d9a": "",
                "xn--45q11c": "",
                "xn--4gbrim": "",
                "xn--4gq48lf9j": "",
                "xn--55qw42g": "",
                "xn--55qx5d": "",
                "xn--5su34j936bgsg": "",
                "xn--5tzm5g": "",
                "xn--6frz82g": "",
                "xn--6qq986b3xl": "",
                "xn--80adxhks": "",
                "xn--80aqecdr1a": "",
                "xn--80asehdb": "",
                "xn--80aswg": "",
                "xn--8y0a063a": "",
                "xn--9dbq2a": "",
                "xn--9et52u": "",
                "xn--9krt00a": "",
                "xn--b4w605ferd": "",
                "xn--bck1b9a5dre4c": "",
                "xn--c1avg": "",
                "xn--c2br7g": "",
                "xn--cck2b3b": "",
                "xn--cg4bki": "",
                "xn--czr694b": "",
                "xn--czrs0t": "",
                "xn--czru2d": "",
                "xn--d1acj3b": "",
                "xn--eckvdtc9d": "",
                "xn--efvy88h": "",
                "xn--estv75g": "",
                "xn--fct429k": "",
                "xn--fhbei": "",
                "xn--fiq228c5hs": "",
                "xn--fiq64b": "",
                "xn--fjq720a": "",
                "xn--flw351e": "",
                "xn--fzys8d69uvgm": "",
                "xn--g2xx48c": "",
                "xn--gckr3f0f": "",
                "xn--gk3at1e": "",
                "xn--hxt814e": "",
                "xn--i1b6b1a6a2e": "",
                "xn--imr513n": "",
                "xn--io0a7i": "",
                "xn--j1aef": "",
                "xn--jlq61u9w7b": "",
                "xn--jvr189m": "",
                "xn--kcrx77d1x4a": "",
                "xn--kpu716f": "",
                "xn--kput3i": "",
                "xn--mgba3a3ejt": "",
                "xn--mgba7c0bbn0a": "",
                "xn--mgbaakc7dvf": "",
                "xn--mgbab2bd": "",
                "xn--mgbb9fbpob": "",
                "xn--mgbca7dzdo": "",
                "xn--mgbi4ecexp": "",
                "xn--mgbt3dhd": "",
                "xn--mk1bu44c": "",
                "xn--mxtq1m": "",
                "xn--ngbc5azd": "",
                "xn--ngbe9e0a": "",
                "xn--ngbrx": "",
                "xn--nqv7f": "",
                "xn--nqv7fs00ema": "",
                "xn--nyqy26a": "",
                "xn--p1acf": "",
                "xn--pbt977c": "",
                "xn--pssy2u": "",
                "xn--q9jyb4c": "",
                "xn--qcka1pmc": "",
                "xn--rhqv96g": "",
                "xn--rovu88b": "",
                "xn--ses554g": "",
                "xn--t60b56a": "",
                "xn--tckwe": "",
                "xn--tiq49xqyj": "",
                "xn--unup4y": "",
                "xn--vermgensberater-ctb": "",
                "xn--vermgensberatung-pwb": "",
                "xn--vhquv": "",
                "xn--vuq861b": "",
                "xn--w4r85el8fhu5dnra": "",
                "xn--w4rs40l": "",
                "xn--xhq521b": "",
                "xn--zfr164b": "",
                xperia: "",
                xyz: "fhapp",
                yachts: "",
                yahoo: "",
                yamaxun: "",
                yandex: "",
                yodobashi: "",
                yoga: "",
                yokohama: "",
                you: "",
                youtube: "",
                yun: "",
                zappos: "",
                zara: "",
                zero: "",
                zip: "",
                zippo: "",
                zone: "*triton",
                zuerich: ""
            }
        }, {}]
    }, {}, [6])(6)
});