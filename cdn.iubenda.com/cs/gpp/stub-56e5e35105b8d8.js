! function() {
    "use strict";

    function e(e, n) {
        for (var r = 0; r < n.length; r++) {
            var a = n[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, t(a.key), a)
        }
    }

    function t(e) {
        var t = function(e, t) {
            if ("object" != typeof e || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != typeof r) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == typeof t ? t : t + ""
    }

    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var r = "stub",
        a = "loading",
        i = "hidden",
        o = "not ready",
        s = "tcfeuv2",
        u = "usnat",
        c = function(e) {
            return Array.isArray ? Array.isArray(e) : "[object Array]" === {}.toString.call(e)
        },
        p = function(e, t, r, a) {
            var i, o = e || {},
                s = t || {};
            return r ? i = o : (i = c(o) ? [] : {}, Object.keys(o).forEach((function(e) {
                i[e] = o[e]
            }))), a ? Object.keys(s).forEach((function(e) {
                "object" !== n(s[e]) || null === s[e] || s[e] instanceof HTMLElement ? i[e] = s[e] : ("object" !== n(i[e]) && (i[e] = c(s[e]) ? [] : {}), i[e] = p(i[e], s[e], r, !0))
            })) : Object.keys(s).forEach((function(e) {
                i[e] = s[e]
            })), i
        },
        l = function() {
            return t = function e(t, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var r = {
                    cmpId: t,
                    cmpStatus: a,
                    cmpDisplayStatus: i,
                    supportedAPIs: [],
                    supportedAPIs_1_1: [],
                    sectionList: [],
                    applicableSections: [],
                    gppVersion: n || "1.0",
                    signalStatus: o,
                    gppString: "",
                    gppUpdatedSectionIds: {},
                    parsedSections: {}
                };
                this.data = r, this.fireEvent = function() {}
            }, (n = [{
                key: "setFireEvent",
                value: function(e) {
                    this.fireEvent = e
                }
            }, {
                key: "updateData",
                value: function(e) {
                    var t;
                    this.data = (t = this.data, p(t, e, !1, !0))
                }
            }, {
                key: "getModelStructure",
                value: function(e) {
                    return "1.1" === e ? ["gppVersion", "cmpStatus", "cmpDisplayStatus", "signalStatus", "supportedAPIs", "cmpId", "sectionList", "applicableSections", "gppString", "parsedSections"] : ["gppVersion", "cmpStatus", "cmpDisplayStatus", "supportedAPIs", "cmpId"]
                }
            }, {
                key: "getItemValue",
                value: function(e, t) {
                    switch (t) {
                        case "sectionList":
                            return Object.keys(this.data.gppUpdatedSectionIds).map(Number);
                        case "supportedAPIs":
                            return this.data["1.1" === e ? "supportedAPIs_1_1" : "supportedAPIs"];
                        default:
                            return this.data[t]
                    }
                }
            }, {
                key: "getPingData",
                value: function(e) {
                    var t = this,
                        n = this.getModelStructure(e.toString()),
                        r = {};
                    return n.forEach((function(n) {
                        r[n] = t.getItemValue(e, n)
                    })), r
                }
            }]) && e(t.prototype, n), r && e(t, r), Object.defineProperty(t, "prototype", {
                writable: !1
            }), t;
            var t, n, r
        }(),
        d = [2024, 0, 31, 8],
        f = function() {
            return Date.UTC.apply(window, d) <= Date.now() ? 1.1 : 1
        },
        v = function() {
            var e, t, n, r = (t = "options.cmpId", (n = function(e, t) {
                    var r = t.shift();
                    return 0 === t.length ? e[r] : (e[r] = e[r] || {}, n(e[r] || {}, t))
                })(window._iub.sharedData || {}, t.split("."))),
                a = null === (e = window._iub) || void 0 === e || null === (e = e.csConfiguration) || void 0 === e ? void 0 : e.cmpId,
                i = null == r ? void 0 : r.gpp,
                o = null == a ? void 0 : a.gpp;
            return i || o || 123
        },
        g = function(e) {
            return function(e) {
                var t = e.store,
                    n = e.cmpId,
                    a = void 0 === n ? 0 : n,
                    i = e.supportedAPIs,
                    o = void 0 === i ? [] : i,
                    s = "1.0",
                    u = new l(a, s);
                return function() {
                    for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                    var i = n[0],
                        c = n[1],
                        p = n[2],
                        l = n[3],
                        d = void 0 === l ? s : l;
                    if (Number(d) === Number(s) && "string" == typeof i) switch (i) {
                        case "ping":
                            return u.updateData({
                                cmpStatus: r,
                                supportedAPIs: o
                            }), u.getPingData(d);
                        case "addEventListener":
                            var f = 0,
                                v = !1;
                            return "function" == typeof c && (v = !0, f = ++t.lastId, t.events.push({
                                id: f,
                                callback: c,
                                parameter: p,
                                version: d
                            })), {
                                eventName: "listenerRegistered",
                                listenerId: f,
                                data: v
                            };
                        case "removeEventListener":
                            for (var g = !1, y = 0; y < t.events.length; ++y)
                                if (t.events[y].id === p) {
                                    t.events.splice(y, 1), g = !0;
                                    break
                                }
                            return {
                                eventName: "listenerRemoved",
                                listenerId: p,
                                data: g
                            };
                        case "hasSection":
                        case "getSection":
                        case "getField":
                        case "getGPPData":
                            return null;
                        default:
                            t.queue.push(n)
                    }
                }
            }({
                store: e,
                cmpId: v(),
                supportedAPIs: [s, u]
            })
        },
        y = function(e) {
            return function(e) {
                var t = e.store,
                    n = e.cmpId,
                    a = void 0 === n ? 0 : n,
                    i = e.supportedAPIs,
                    o = void 0 === i ? [] : i,
                    s = "1.1",
                    u = new l(a, s);
                u.updateData({
                    cmpStatus: r,
                    supportedAPIs: o
                });
                var c = function(e) {
                    try {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        e.apply(void 0, n)
                    } catch (e) {}
                };
                return function() {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    var a = n[0],
                        i = n[1],
                        o = n[2],
                        p = n[3],
                        l = void 0 === p ? s : p;
                    if (Number(l) === Number(s) && "string" == typeof a && "function" == typeof i) switch (a) {
                        case "ping":
                            c(i, u.getPingData(l), !0);
                            break;
                        case "addEventListener":
                            var d = ++t.lastId;
                            t.events.push({
                                id: d,
                                callback: i,
                                version: l
                            });
                            var f = {
                                eventName: "listenerRegistered",
                                listenerId: d,
                                data: !0,
                                pingData: u.getPingData(l)
                            };
                            t.events.forEach((function(e) {
                                c(e.callback, f, !0)
                            }));
                            break;
                        case "removeEventListener":
                            for (var v = !1, g = 0; g < t.events.length; ++g)
                                if (t.events[g].id === o) {
                                    t.events.splice(g, 1), v = !0;
                                    break
                                }
                            c(i, v, !0);
                            var y = {
                                eventName: "listenerRemoved",
                                listenerId: o,
                                data: v,
                                pingData: u.getPingData(l)
                            };
                            t.events.forEach((function(e) {
                                c(e.callback, y, !0)
                            }));
                            break;
                        case "hasSection":
                        case "getSection":
                        case "getField":
                            c(i, null, "string" == typeof o);
                            break;
                        default:
                            t.queue.push(n)
                    } else "function" == typeof i && i(null, !1)
                }
            }({
                store: e,
                cmpId: v(),
                supportedAPIs: ["".concat(2, ":").concat(s), "".concat(7, ":").concat(u)]
            })
        };
    ! function(e) {
        var t, r, a = "__gppLocator",
            i = window,
            o = i;
        var s = function() {
            return r.apply(void 0, arguments)
        };
        for (s.queue = [], s.lastId = 0, s.events = [], r = e(s); o;) {
            try {
                if (o.frames.__gppLocator) {
                    t = o;
                    break
                }
            } catch (e) {}
            if (o === i.top) break;
            o = o.parent
        }
        t || (! function e() {
            var t = i.document,
                n = !!i.frames.__gppLocator;
            if (!n)
                if (t.body) {
                    var r = t.createElement("iframe");
                    r.style.cssText = "display:none", r.setAttribute("aria-hidden", "true"), r.setAttribute("title", "GPP Locator"), r.name = a, t.body.appendChild(r)
                } else setTimeout(e, 5);
            return !n
        }(), i.__gpp = s, i.addEventListener("message", (function(e) {
            var t = "string" == typeof e.data,
                r = {};
            if (t) try {
                r = JSON.parse(e.data)
            } catch (e) {} else r = e.data;
            var a = "object" === n(r) ? r.__gppCall : null;
            a && window.__gpp(a.command, (function(n, r) {
                var i = {
                    __gppReturn: {
                        returnValue: n,
                        success: r,
                        callId: a.callId
                    }
                };
                e && e.source && e.source.postMessage && e.source.postMessage(t ? JSON.stringify(i) : i, "*")
            }), a.parameter, a.version)
        }), !1))
    }((function(e) {
        var t = g(e),
            n = y(e);
        return function() {
            var e, r, a, i = arguments.length >= 4 ? arguments.length <= 3 ? void 0 : arguments[3] : null;
            return i = null !== (e = null !== (r = i) && void 0 !== r ? r : null === (a = window._iub) || void 0 === a || null === (a = a.csConfiguration) || void 0 === a ? void 0 : a.gppVersion) && void 0 !== e ? e : f(), 1 === Number(i) ? t.apply(void 0, arguments) : n.apply(void 0, arguments)
        }
    }))
}();