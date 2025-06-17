"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [175], {
        1469: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                default: function() {
                    return c
                },
                getImageProps: function() {
                    return u
                }
            });
            let n = r(8229),
                o = r(8883),
                a = r(3063),
                i = n._(r(1193));

            function u(e) {
                let {
                    props: t
                } = (0, o.getImgProps)(e, {
                    defaultLoader: i.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !1
                    }
                });
                for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
                return {
                    props: t
                }
            }
            let c = a.Image
        },
        3096: (e, t, r) => {
            r.d(t, {
                Wx: () => s
            });
            var n = r(2115),
                o = Object.defineProperty,
                a = (e, t, r) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                i = new Map,
                u = new WeakMap,
                c = 0,
                l = void 0;

            function s() {
                var e;
                let {
                    threshold: t,
                    delay: r,
                    trackVisibility: o,
                    rootMargin: a,
                    root: s,
                    triggerOnce: f,
                    skip: d,
                    initialInView: h,
                    fallbackInView: p,
                    onChange: y
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [v, b] = n.useState(null), m = n.useRef(y), [g, w] = n.useState({
                    inView: !!h,
                    entry: void 0
                });
                m.current = y, n.useEffect(() => {
                    let e;
                    if (!d && v) return e = function(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l;
                        if (void 0 === window.IntersectionObserver && void 0 !== n) {
                            let o = e.getBoundingClientRect();
                            return t(n, {
                                isIntersecting: n,
                                target: e,
                                intersectionRatio: "number" == typeof r.threshold ? r.threshold : 0,
                                time: 0,
                                boundingClientRect: o,
                                intersectionRect: o,
                                rootBounds: o
                            }), () => {}
                        }
                        let {
                            id: o,
                            observer: a,
                            elements: s
                        } = function(e) {
                            let t = Object.keys(e).sort().filter(t => void 0 !== e[t]).map(t => {
                                    var r;
                                    return "".concat(t, "_").concat("root" === t ? (r = e.root) ? (u.has(r) || (c += 1, u.set(r, c.toString())), u.get(r)) : "0" : e[t])
                                }).toString(),
                                r = i.get(t);
                            if (!r) {
                                let n, o = new Map,
                                    a = new IntersectionObserver(t => {
                                        t.forEach(t => {
                                            var r;
                                            let a = t.isIntersecting && n.some(e => t.intersectionRatio >= e);
                                            e.trackVisibility && void 0 === t.isVisible && (t.isVisible = a), null == (r = o.get(t.target)) || r.forEach(e => {
                                                e(a, t)
                                            })
                                        })
                                    }, e);
                                n = a.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
                                    id: t,
                                    observer: a,
                                    elements: o
                                }, i.set(t, r)
                            }
                            return r
                        }(r), f = s.get(e) || [];
                        return s.has(e) || s.set(e, f), f.push(t), a.observe(e),
                            function() {
                                f.splice(f.indexOf(t), 1), 0 === f.length && (s.delete(e), a.unobserve(e)), 0 === s.size && (a.disconnect(), i.delete(o))
                            }
                    }(v, (t, r) => {
                        w({
                            inView: t,
                            entry: r
                        }), m.current && m.current(t, r), r.isIntersecting && f && e && (e(), e = void 0)
                    }, {
                        root: s,
                        rootMargin: a,
                        threshold: t,
                        trackVisibility: o,
                        delay: r
                    }, p), () => {
                        e && e()
                    }
                }, [Array.isArray(t) ? t.toString() : t, v, s, a, f, d, o, p, r]);
                let k = null == (e = g.entry) ? void 0 : e.target,
                    x = n.useRef(void 0);
                v || !k || f || d || x.current === k || (x.current = k, w({
                    inView: !!h,
                    entry: void 0
                }));
                let S = [b, g.inView, g.entry];
                return S.ref = S[0], S.inView = S[1], S.entry = S[2], S
            }
            n.Component
        },
        4631: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(9946).A)("Loader", [
                ["path", {
                    d: "M12 2v4",
                    key: "3427ic"
                }],
                ["path", {
                    d: "m16.2 7.8 2.9-2.9",
                    key: "r700ao"
                }],
                ["path", {
                    d: "M18 12h4",
                    key: "wj9ykh"
                }],
                ["path", {
                    d: "m16.2 16.2 2.9 2.9",
                    key: "1bxg5t"
                }],
                ["path", {
                    d: "M12 18v4",
                    key: "jadmvz"
                }],
                ["path", {
                    d: "m4.9 19.1 2.9-2.9",
                    key: "bwix9q"
                }],
                ["path", {
                    d: "M2 12h4",
                    key: "j09sii"
                }],
                ["path", {
                    d: "m4.9 4.9 2.9 2.9",
                    key: "giyufr"
                }]
            ])
        },
        5453: (e, t, r) => {
            r.d(t, {
                v: () => c
            });
            var n = r(2115);
            let o = e => {
                    let t, r = new Set,
                        n = (e, n) => {
                            let o = "function" == typeof e ? e(t) : e;
                            if (!Object.is(o, t)) {
                                let e = t;
                                t = (null != n ? n : "object" != typeof o || null === o) ? o : Object.assign({}, t, o), r.forEach(r => r(t, e))
                            }
                        },
                        o = () => t,
                        a = {
                            setState: n,
                            getState: o,
                            getInitialState: () => i,
                            subscribe: e => (r.add(e), () => r.delete(e))
                        },
                        i = t = e(n, o, a);
                    return a
                },
                a = e => e ? o(e) : o,
                i = e => e,
                u = e => {
                    let t = a(e),
                        r = e => (function(e, t = i) {
                            let r = n.useSyncExternalStore(e.subscribe, () => t(e.getState()), () => t(e.getInitialState()));
                            return n.useDebugValue(r), r
                        })(t, e);
                    return Object.assign(r, t), r
                },
                c = e => e ? u(e) : u
        },
        5695: (e, t, r) => {
            var n = r(8999);
            r.o(n, "usePathname") && r.d(t, {
                usePathname: function() {
                    return n.usePathname
                }
            }), r.o(n, "useRouter") && r.d(t, {
                useRouter: function() {
                    return n.useRouter
                }
            }), r.o(n, "useSearchParams") && r.d(t, {
                useSearchParams: function() {
                    return n.useSearchParams
                }
            })
        },
        6766: (e, t, r) => {
            r.d(t, {
                default: () => o.a
            });
            var n = r(1469),
                o = r.n(n)
        },
        7238: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(9946).A)("ChevronsUp", [
                ["path", {
                    d: "m17 11-5-5-5 5",
                    key: "e8nh98"
                }],
                ["path", {
                    d: "m17 18-5-5-5 5",
                    key: "2avn1x"
                }]
            ])
        },
        7470: (e, t, r) => {
            r.d(t, {
                d: () => f
            });
            var n = r(2115);

            function o(e, t, r, n) {
                return new(r || (r = Promise))(function(o, a) {
                    function i(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function u(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? o(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(i, u)
                    }
                    c((n = n.apply(e, t || [])).next())
                })
            }

            function a(e, t) {
                var r, n, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        var c = [a, u];
                        if (r) throw TypeError("Generator is already executing.");
                        for (; i;) try {
                            if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                            switch (n = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, n = c[1], c = [0];
                                    continue;
                                case 7:
                                    c = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        i.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && i.label < o[1]) {
                                        i.label = o[1], o = c;
                                        break
                                    }
                                    if (o && i.label < o[2]) {
                                        i.label = o[2], i.ops.push(c);
                                        break
                                    }
                                    o[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            c = t.call(e, i)
                        } catch (e) {
                            c = [6, e], n = 0
                        } finally {
                            r = o = 0
                        }
                        if (5 & c[0]) throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }
                }
            }

            function i(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function u(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, o, a = r.call(e),
                    i = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = a.next()).done;) i.push(n.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = a.return) && r.call(a)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return i
            }

            function c(e, t, r) {
                if (r || 2 == arguments.length)
                    for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
                return e.concat(n || Array.prototype.slice.call(t))
            }

            function l(e, t, r, n, l) {
                for (var f = [], d = 5; d < arguments.length; d++) f[d - 5] = arguments[d];
                return o(this, void 0, void 0, function() {
                    var d, h, p, y, v;
                    return a(this, function(b) {
                        switch (b.label) {
                            case 0:
                                b.trys.push([0, 12, 13, 14]), h = (d = i(f)).next(), b.label = 1;
                            case 1:
                                if (h.done) return [3, 11];
                                switch (typeof(p = h.value)) {
                                    case "string":
                                        return [3, 2];
                                    case "number":
                                        return [3, 4];
                                    case "function":
                                        return [3, 6]
                                }
                                return [3, 8];
                            case 2:
                                return [4, function(e, t, r, n, l, f) {
                                    return o(this, void 0, void 0, function() {
                                        var d, h;
                                        return a(this, function(p) {
                                            switch (p.label) {
                                                case 0:
                                                    var y, v;
                                                    return y = d = e.textContent || "", v = u(r).slice(0), h = c(c([], u(y), !1), [NaN], !1).findIndex(function(e, t) {
                                                        return v[t] !== e
                                                    }), [4, function(e, t, r, n, c) {
                                                        return o(this, void 0, void 0, function() {
                                                            var o, l, f, d, h, p, y, v, b, m, g, w;
                                                            return a(this, function(k) {
                                                                switch (k.label) {
                                                                    case 0:
                                                                        if (o = t, c) {
                                                                            for (l = 0, f = 1; f < t.length; f++)
                                                                                if (h = (d = u([t[f - 1], t[f]], 2))[0], (p = d[1]).length > h.length || "" === p) {
                                                                                    l = f;
                                                                                    break
                                                                                }
                                                                            o = t.slice(l, t.length)
                                                                        }
                                                                        k.label = 1;
                                                                    case 1:
                                                                        k.trys.push([1, 6, 7, 8]), v = (y = i(function(e) {
                                                                            var t, r, n, o, u, c;
                                                                            return a(this, function(l) {
                                                                                switch (l.label) {
                                                                                    case 0:
                                                                                        t = function(e) {
                                                                                            return a(this, function(t) {
                                                                                                switch (t.label) {
                                                                                                    case 0:
                                                                                                        return [4, {
                                                                                                            op: function(t) {
                                                                                                                return requestAnimationFrame(function() {
                                                                                                                    return t.textContent = e
                                                                                                                })
                                                                                                            },
                                                                                                            opCode: function(t) {
                                                                                                                var r = t.textContent || "";
                                                                                                                return "" === e || r.length > e.length ? "DELETE" : "WRITING"
                                                                                                            }
                                                                                                        }];
                                                                                                    case 1:
                                                                                                        return t.sent(), [2]
                                                                                                }
                                                                                            })
                                                                                        }, l.label = 1;
                                                                                    case 1:
                                                                                        l.trys.push([1, 6, 7, 8]), n = (r = i(e)).next(), l.label = 2;
                                                                                    case 2:
                                                                                        return n.done ? [3, 5] : (o = n.value, [5, t(o)]);
                                                                                    case 3:
                                                                                        l.sent(), l.label = 4;
                                                                                    case 4:
                                                                                        return n = r.next(), [3, 2];
                                                                                    case 5:
                                                                                        return [3, 8];
                                                                                    case 6:
                                                                                        return u = {
                                                                                            error: l.sent()
                                                                                        }, [3, 8];
                                                                                    case 7:
                                                                                        try {
                                                                                            n && !n.done && (c = r.return) && c.call(r)
                                                                                        } finally {
                                                                                            if (u) throw u.error
                                                                                        }
                                                                                        return [7];
                                                                                    case 8:
                                                                                        return [2]
                                                                                }
                                                                            })
                                                                        }(o))).next(), k.label = 2;
                                                                    case 2:
                                                                        return v.done ? [3, 5] : (m = "WRITING" === (b = v.value).opCode(e) ? r + r * (Math.random() - .5) : n + n * (Math.random() - .5), b.op(e), [4, s(m)]);
                                                                    case 3:
                                                                        k.sent(), k.label = 4;
                                                                    case 4:
                                                                        return v = y.next(), [3, 2];
                                                                    case 5:
                                                                        return [3, 8];
                                                                    case 6:
                                                                        return g = {
                                                                            error: k.sent()
                                                                        }, [3, 8];
                                                                    case 7:
                                                                        try {
                                                                            v && !v.done && (w = y.return) && w.call(y)
                                                                        } finally {
                                                                            if (g) throw g.error
                                                                        }
                                                                        return [7];
                                                                    case 8:
                                                                        return [2]
                                                                }
                                                            })
                                                        })
                                                    }(e, c(c([], u(function(e, t, r) {
                                                        var n, o;
                                                        return void 0 === r && (r = 0), a(this, function(a) {
                                                            switch (a.label) {
                                                                case 0:
                                                                    o = (n = t(e)).length, a.label = 1;
                                                                case 1:
                                                                    return o > r ? [4, n.slice(0, --o).join("")] : [3, 3];
                                                                case 2:
                                                                    return a.sent(), [3, 1];
                                                                case 3:
                                                                    return [2]
                                                            }
                                                        })
                                                    }(d, t, h)), !1), u(function(e, t, r) {
                                                        var n, o;
                                                        return void 0 === r && (r = 0), a(this, function(a) {
                                                            switch (a.label) {
                                                                case 0:
                                                                    o = (n = t(e)).length, a.label = 1;
                                                                case 1:
                                                                    return r < o ? [4, n.slice(0, ++r).join("")] : [3, 3];
                                                                case 2:
                                                                    return a.sent(), [3, 1];
                                                                case 3:
                                                                    return [2]
                                                            }
                                                        })
                                                    }(r, t, h)), !1), n, l, f)];
                                                case 1:
                                                    return p.sent(), [2]
                                            }
                                        })
                                    })
                                }(e, t, p, r, n, l)];
                            case 3:
                            case 5:
                            case 7:
                                return b.sent(), [3, 10];
                            case 4:
                                return [4, s(p)];
                            case 6:
                                return [4, p.apply(void 0, c([e, t, r, n, l], u(f), !1))];
                            case 8:
                                return [4, p];
                            case 9:
                                b.sent(), b.label = 10;
                            case 10:
                                return h = d.next(), [3, 1];
                            case 11:
                                return [3, 14];
                            case 12:
                                return y = {
                                    error: b.sent()
                                }, [3, 14];
                            case 13:
                                try {
                                    h && !h.done && (v = d.return) && v.call(d)
                                } finally {
                                    if (y) throw y.error
                                }
                                return [7];
                            case 14:
                                return [2]
                        }
                    })
                })
            }

            function s(e) {
                return o(this, void 0, void 0, function() {
                    return a(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, new Promise(function(t) {
                                    return setTimeout(t, e)
                                })];
                            case 1:
                                return t.sent(), [2]
                        }
                    })
                })
            }! function(e, t) {
                void 0 === t && (t = {});
                var r = t.insertAt;
                if (e && "undefined" != typeof document) {
                    var n = document.head || document.getElementsByTagName("head")[0],
                        o = document.createElement("style");
                    o.type = "text/css", "top" === r && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e))
                }
            }(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");
            var f = (0, n.memo)((0, n.forwardRef)(function(e, t) {
                var r = e.sequence,
                    o = e.repeat,
                    a = e.className,
                    i = e.speed,
                    s = void 0 === i ? 40 : i,
                    f = e.deletionSpeed,
                    d = e.omitDeletionAnimation,
                    h = void 0 !== d && d,
                    p = e.preRenderFirstString,
                    y = e.wrapper,
                    v = e.splitter,
                    b = void 0 === v ? function(e) {
                        return c([], u(e), !1)
                    } : v,
                    m = e.cursor,
                    g = void 0 === m || m,
                    w = e.style,
                    k = function(e, t) {
                        var r = {};
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var o = 0;
                            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) 0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                        }
                        return r
                    }(e, ["sequence", "repeat", "className", "speed", "deletionSpeed", "omitDeletionAnimation", "preRenderFirstString", "wrapper", "splitter", "cursor", "style"]),
                    x = k["aria-label"],
                    S = k["aria-hidden"],
                    E = k.role;
                f || (f = s);
                var A = [, , ].fill(40);
                [s, f].forEach(function(e, t) {
                    switch (typeof e) {
                        case "number":
                            A[t] = Math.abs(e - 100);
                            break;
                        case "object":
                            var r = e.type,
                                n = e.value;
                            if ("number" != typeof n) break;
                            "keyStrokeDelayInMs" === r && (A[t] = n)
                    }
                });
                var j, O, R, _, C, P, I, N, M = A[0],
                    T = A[1],
                    V = (void 0 === j && (j = null), O = (0, n.useRef)(j), (0, n.useEffect)(function() {
                        t && ("function" == typeof t ? t(O.current) : t.current = O.current)
                    }, [t]), O),
                    z = "index-module_type__E-SaG";
                R = a ? "".concat(g ? z + " " : "").concat(a) : g ? z : "", _ = (0, n.useRef)(function() {
                    var e, t = r;
                    o === 1 / 0 ? e = l : "number" == typeof o && (t = Array(1 + o).fill(r).flat());
                    var n = e ? c(c([], u(t), !1), [e], !1) : c([], u(t), !1);
                    return l.apply(void 0, c([V.current, b, M, T, h], u(n), !1)),
                        function() {
                            V.current
                        }
                }), C = (0, n.useRef)(), P = (0, n.useRef)(!1), I = (0, n.useRef)(!1), N = u((0, n.useState)(0), 2)[1], P.current && (I.current = !0), (0, n.useEffect)(function() {
                    return P.current || (C.current = _.current(), P.current = !0), N(function(e) {
                            return e + 1
                        }),
                        function() {
                            I.current && C.current && C.current()
                        }
                }, []);
                var D = void 0 !== p && p ? r.find(function(e) {
                    return "string" == typeof e
                }) || "" : null;
                return n.createElement(void 0 === y ? "span" : y, {
                    "aria-hidden": S,
                    "aria-label": x,
                    role: E,
                    style: w,
                    className: R,
                    children: x ? n.createElement("span", {
                        "aria-hidden": "true",
                        ref: V,
                        children: D
                    }) : D,
                    ref: x ? void 0 : V
                })
            }), function(e, t) {
                return !0
            })
        },
        7775: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(9946).A)("ChevronsDown", [
                ["path", {
                    d: "m7 6 5 5 5-5",
                    key: "1lc07p"
                }],
                ["path", {
                    d: "m7 13 5 5 5-5",
                    key: "1d48rs"
                }]
            ])
        },
        9946: (e, t, r) => {
            r.d(t, {
                A: () => c
            });
            var n = r(2115);
            let o = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                a = function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return t.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim()
                };
            var i = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            };
            let u = (0, n.forwardRef)((e, t) => {
                    let {
                        color: r = "currentColor",
                        size: o = 24,
                        strokeWidth: u = 2,
                        absoluteStrokeWidth: c,
                        className: l = "",
                        children: s,
                        iconNode: f,
                        ...d
                    } = e;
                    return (0, n.createElement)("svg", {
                        ref: t,
                        ...i,
                        width: o,
                        height: o,
                        stroke: r,
                        strokeWidth: c ? 24 * Number(u) / Number(o) : u,
                        className: a("lucide", l),
                        ...d
                    }, [...f.map(e => {
                        let [t, r] = e;
                        return (0, n.createElement)(t, r)
                    }), ...Array.isArray(s) ? s : [s]])
                }),
                c = (e, t) => {
                    let r = (0, n.forwardRef)((r, i) => {
                        let {
                            className: c,
                            ...l
                        } = r;
                        return (0, n.createElement)(u, {
                            ref: i,
                            iconNode: t,
                            className: a("lucide-".concat(o(e)), c),
                            ...l
                        })
                    });
                    return r.displayName = "".concat(e), r
                }
        }
    }
]);