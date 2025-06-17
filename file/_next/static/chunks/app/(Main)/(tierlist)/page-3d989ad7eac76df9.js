(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [323], {
        1320: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => l
            });
            var a = s(5155),
                r = s(7470);
            let l = () => (0, a.jsx)(r.d, {
                sequence: ["Master The Meta", 2e3, "Be Strongest", 3e3, "Be Greatest", 3e3],
                wrapper: "span",
                speed: 40,
                className: "text-white inline-block font-jbmono text-[64px] sm:text-[32px]",
                repeat: 1 / 0
            })
        },
        1693: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 5397)), Promise.resolve().then(s.bind(s, 1320)), Promise.resolve().then(s.bind(s, 8163))
        },
        2634: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => n
            });
            var a = s(5155),
                r = s(2115),
                l = s(5695);
            let n = e => {
                let {
                    currentMode: t,
                    onModeChange: s,
                    setLoading: n
                } = e, o = (0, l.useRouter)(), i = (0, l.usePathname)(), c = (0, l.useSearchParams)(), [d, p] = (0, r.useState)(t);
                return (0, r.useEffect)(() => {
                    p(t)
                }, [t]), (0, a.jsxs)("div", {
                    className: "flex items-center gap-3 sm:gap-1.5",
                    children: [(0, a.jsx)("span", {
                        className: "text-sm text-white",
                        children: "Rank"
                    }), (0, a.jsx)("button", {
                        onClick: () => {
                            let e = "pro" === d ? "rank" : "pro";
                            p(e), s && s(e), n && n(!0);
                            let t = new URLSearchParams(c.toString());
                            "pro" === e ? t.set("rank_filter", "pro") : "pro" === t.get("rank_filter") && t.set("rank_filter", "Mythical Glory Plus"), o.push("".concat(i, "?").concat(t.toString()), {
                                scroll: !1
                            })
                        },
                        className: "relative inline-flex h-6 w-12 items-center rounded-full border-[1px] border-[#34364D] bg-sapphire/30 focus:outline-none",
                        children: (0, a.jsx)("span", {
                            className: "inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out ".concat("pro" === d ? "translate-x-6" : "translate-x-1")
                        })
                    }), (0, a.jsx)("span", {
                        className: "text-sm text-white",
                        children: "Pro"
                    })]
                })
            }
        },
        4738: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => l
            });
            var a = s(5155);
            s(2115);
            var r = s(4631);
            let l = e => {
                let {
                    type: t
                } = e;
                return (0, a.jsx)("div", {
                    className: "flex items-center justify-center p-4 h-full",
                    children: (0, a.jsx)(r.A, {
                        className: "rotating-icon ".concat("small" === t ? "h-6 w-6 " : "h-10 w-10", " text-white")
                    })
                })
            }
        },
        5354: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => r
            });
            var a = s(2115);
            let r = () => {
                let [e, t] = (0, a.useState)(void 0);
                return (0, a.useEffect)(() => {
                    let e = () => {
                        t(window.innerWidth <= 615)
                    };
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, []), e
            }
        },
        5397: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => F
            });
            var a = s(5155),
                r = s(6660),
                l = s(5354),
                n = s(2115),
                o = s(6766);
            let i = (0, s(5453).v)(e => ({
                isCompact: !1,
                toggleCompact: () => e(e => ({
                    isCompact: !e.isCompact
                }))
            }));
            var c = s(7775),
                d = s(7238),
                p = s(6874),
                x = s.n(p);
            let m = e => {
                var t;
                let {
                    heroWithStats: s,
                    accent: r,
                    movement: l,
                    currentRank: p
                } = e, [m, h] = (0, n.useState)(!0), {
                    isCompact: u
                } = i(), _ = u ? 74 : 64, f = u ? 74 : 64, [g, b] = (0, n.useState)(!1);
                (0, n.useEffect)(() => {
                    let e = new window.Image;
                    e.onload = () => h(!1), e.src = s.hero.avatar
                }, [s.hero.avatar]);
                let w = p ? "/heroes/".concat(s.hero.id, "?rank_filter=").concat(encodeURIComponent(p)) : "/heroes/".concat(s.hero.id);
                return _ || f ? (0, a.jsxs)(x(), {
                    href: w,
                    prefetch: !1,
                    className: "relative",
                    onClick: () => b(!1),
                    children: [g && (0, a.jsx)("div", {
                        className: "absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2 z-[50] h-20 flex items-center justify-center",
                        children: (0, a.jsx)("div", {
                            className: "w-10 h-10 border-t-[3px] border-b-[3px] border-white rounded-full animate-spin sm:w-8 sm:h-8"
                        })
                    }), (0, a.jsxs)("div", {
                        className: "group relative flex h-24 w-20 ".concat(u ? "!h-[74px] !w-[70px] sm:!h-[52px] sm:!w-[50px] xs:!w-[45px] xs:!h-[47px]" : "", " flex-col justify-center text-center items-center content-center md:group cursor-pointer sm:h-20 sm:w-full"),
                        children: [m && (0, a.jsx)("div", {
                            className: "absolute inset-0 mx-auto rounded-[40px] bg-gray-700 animate-pulse \n                            h-16 w-16 border-[3px] mt-2\n                            lg:w-[55px] lg:h-[55px] sm:h-12 sm:w-12",
                            style: {
                                borderColor: (e => {
                                    switch (e) {
                                        case "up":
                                            return "#00FF00";
                                        case "down":
                                            return "#FF0000";
                                        default:
                                            return r
                                    }
                                })(l)
                            }
                        }), "down" === l && (0, a.jsx)("div", {
                            className: "absolute top-0 left-0  rounded-full z-10 bg-red-500",
                            children: (0, a.jsx)(c.A, {
                                width: u ? 14 : 22,
                                height: u ? 14 : 22,
                                className: "text-white"
                            })
                        }), "up" === l && (0, a.jsx)("div", {
                            className: "absolute top-0 left-0 rounded-full z-10 bg-green-500 ",
                            children: (0, a.jsx)(d.A, {
                                width: u ? 14 : 22,
                                height: u ? 14 : 22,
                                className: "text-white"
                            })
                        }), (0, a.jsx)(o.default, {
                            src: s.hero.avatar,
                            alt: null != (t = s.hero.name) ? t : "Hero",
                            width: _,
                            height: f,
                            priority: !0,
                            onLoad: () => h(!1),
                            className: "h-[64px] w-[64px] rounded-[40px] border-[3px] cursor-pointer \n                            ".concat(u ? "!mt-0 !rounded-none !border-[1px] !h-[74px] !w-[74px] xs:!w-[45px] xs:!h-[47px]" : "", " mt-2 \n                            md:transition-all md:duration-300 md:ease-in-out transition group-hover:scale-110 group-hover:z-10\n                            lg:w-[55px] lg:h-[55px] sm:h-12 sm:w-12 \n                            ").concat(m ? "opacity-0" : "opacity-100"),
                            style: {
                                borderColor: r,
                                maxWidth: "100%",
                                height: "auto"
                            }
                        }), (0, a.jsx)("h1", {
                            className: "max-w-[100px] truncate md:transition-all md:duration-300 group-hover:underline sm:max-w-[75px] sm:text-[12px] ".concat(u ? "hidden" : ""),
                            children: !u && s.hero.name
                        })]
                    })]
                }) : null
            };
            var h = s(4549),
                u = s(1013),
                _ = s(3096);
            let f = {
                    SS: "Best heroes. Must ban or 1st pick",
                    S: "Strong heroes. 1st pick or 2nd pick",
                    A: "Good heroes. Safe picks, work well in teams",
                    B: "Okay heroes. Useful if played well or for special plans",
                    C: "Weaker heroes. Only good in very specific situations",
                    D: "Weakest heroes. Better to pick others",
                    F: "Wasn't picked in tournament"
                },
                g = e => f[e] || "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                b = e => {
                    var t;
                    let {
                        title: s,
                        tierData: r,
                        accent: l,
                        isMobile: o,
                        filterRole: c,
                        filterLane: d,
                        tiers: p,
                        currentRank: x
                    } = e, [f, b] = (0, n.useState)(!1), w = (null == r || null == (t = r.data) ? void 0 : t.filter(e => !c && !(d && !e.hero.lanes.some(e => e.name === d)))) || [], {
                        ref: v,
                        inView: y
                    } = (0, _.Wx)({
                        triggerOnce: !0,
                        rootMargin: "250px 0px"
                    }), {
                        isCompact: j
                    } = i();
                    return (0, a.jsx)("div", {
                        ref: v,
                        className: "flex w-full flex-row ".concat(j ? "!min-h-20 sm:!min-h-[40px] !rounded-none" : "", " min-h-32 border  border-[#34364D] rounded-xl sm:min-h-20"),
                        children: y ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)("div", {
                                className: "relative flex border-black border-[1px] basis-1/12 items-center justify-center rounded-l-xl text-2xl ".concat(j ? "!sm:basis-[8%] !rounded-none !border-[0px] !border-r-[1px]" : "", " sm:text-xl sm:basis-[14%]"),
                                style: {
                                    backgroundColor: l
                                },
                                children: [(0, a.jsx)("h1", {
                                    children: s
                                }), (0, a.jsxs)("div", {
                                    className: "absolute top-1 right-1 cursor-help",
                                    onMouseEnter: () => b(!0),
                                    onMouseLeave: () => b(!1),
                                    children: [(0, a.jsx)(u.tEG, {
                                        className: "text-white/80 hover:text-white transition-colors text-[22px] sm:text-[18px]"
                                    }), f && (0, a.jsxs)("div", {
                                        className: "absolute left-full top-1/2 transform -translate-y-1/2 mr-2 z-50",
                                        children: [(0, a.jsx)("div", {
                                            className: "bg-black text-white text-sm rounded-lg px-3 py-2 shadow-lg whitespace-nowrap border border-gray-600",
                                            children: g(s)
                                        }), (0, a.jsx)("div", {
                                            className: "absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-4 border-l-black border-t-transparent border-b-transparent border-r-transparent"
                                        })]
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "basis-11/12 bg-main text-white rounded-r-xl",
                                children: w.length > 0 ? (0, a.jsx)("div", {
                                    className: "flex flex-wrap justify-start gap-x-7 gap-y-4 ".concat(j ? "!p-[2px] !gap-x-[6px] md:!grid-cols-7 !gap-y-[6px] xs:!gap-x-1 xs:!gap-y-1 sm:!grid-cols-6 xs:!p-0 " : "", " p-5  mx-auto\n                lg:grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 sm:gap-x-4 xs:gap-4 xs:gap-y-2 xs:px-1 xs:py-1 xs:grid-cols-4"),
                                    children: w.map(e => (0, a.jsx)(m, {
                                        heroWithStats: e,
                                        movement: e.movement,
                                        accent: l,
                                        currentRank: x
                                    }, e.hero.id))
                                }) : (0, a.jsx)("div", {
                                    className: "content-center p-5 ".concat(j ? "!p-1 ml-5 sm:ml-2" : "", " pl-10 h-full sm:pl-5"),
                                    children: (0, a.jsx)(h.jgA, {
                                        className: "h-[96px] ".concat(j ? "!h-[78px] sm:!h-[55px] sm:text-[35px]" : "", " sm:h-[48px]"),
                                        fontSize: 40
                                    })
                                })
                            })]
                        }) : (0, a.jsx)("div", {
                            children: "No heroes"
                        })
                    })
                },
                w = [{
                    title: "Roam",
                    icon: (0, a.jsx)("div", {
                        className: "relative aspect-square w-[30px] sm:w-[22px] bg-[#13253F] inline-block rounded-[5px]",
                        children: (0, a.jsx)("div", {
                            className: " absolute top-0 left-0 w-[80%] h-[80%] transform translate-x-[12.5%] translate-y-[12.5%] bg-gradient-to-r from-[#45F6E3] to-[#C7F7F7] [clip-path:polygon(0_100%,_100%_100%,_100%_20%,_60%_70%,_80%_70%,_80%_80%,_40%_80%,_100%_0,_60%_0,_0_0,_0_80%,_40%_30%,_20%_30%,_20%_20%,_60%_20%)] "
                        })
                    })
                }, {
                    title: "Exp Lane",
                    icon: (0, a.jsxs)("div", {
                        className: "relative aspect-square w-[30px] sm:w-[22px] bg-[#13253F] inline-block rounded-[5px]",
                        children: [(0, a.jsx)("div", {
                            className: " absolute top-0 left-0 w-[80%] h-[80%] transform translate-x-[12.5%] translate-y-[12.5%] bg-gradient-to-r from-[#C0A0DC] to-[#E4E8F6] [clip-path:polygon(0_0,_100%_0,_80%_20%,_30%_20%,_50%_40%,_70%_40%,_80%_50%,_70%_60%,_50%_60%,_30%_80%,_80%_80%,_100%_100%,_0_100%,_0_80%,_30%_50%,_0_20%)] "
                        }), (0, a.jsx)("div", {
                            className: " absolute top-0 left-0 w-[80%] h-[80%] transform translate-x-[12.5%] translate-y-[12.5%] bg-gradient-to-r from-[#C0A0DC] to-[#E4E8F6] [clip-path:polygon(0_30%,_20%_50%,_0_70%)] "
                        }), (0, a.jsx)("div", {
                            className: " absolute top-0 left-0 w-[80%] h-[80%] transform translate-x-[12.5%] translate-y-[12.5%] bg-gradient-to-r from-[#556C87] to-[#3C4B77] [clip-path:polygon(100%_10%,_100%_90%,_90%_80%,_90%_20%)] "
                        })]
                    })
                }, {
                    title: "Jungle",
                    icon: (0, a.jsxs)("div", {
                        className: "relative aspect-square w-[30px] sm:w-[22px] bg-[#13253F] inline-block rounded-[5px]",
                        children: [(0, a.jsx)("div", {
                            className: " absolute top-0 left-0 w-[80%] h-[80%] transform translate-x-[12.5%] translate-y-[12.5%] bg-gradient-to-r from-[#45F6E3] to-[#C7F7F7] [clip-path:polygon(20%_20%,_75%_20%,_20%_75%)] "
                        }), (0, a.jsx)("div", {
                            className: " absolute top-0 left-0 w-[80%] h-[80%] transform translate-x-[12.5%] translate-y-[12.5%] bg-gradient-to-r from-[#45F6E3] to-[#C7F7F7] [clip-path:polygon(80%_80%,_25%_80%,_80%_25%)] "
                        }), (0, a.jsx)("div", {
                            className: " absolute top-0 left-0 w-[80%] h-[80%] transform translate-x-[12.5%] translate-y-[12.5%] bg-gradient-to-r from-[#556C87] to-[#3C4B77] [clip-path:polygon(0%_100%,_0_70%,_30%_100%)] "
                        }), (0, a.jsx)("div", {
                            className: " absolute top-0 left-0 w-[80%] h-[80%] transform translate-x-[12.5%] translate-y-[12.5%] bg-gradient-to-r from-[#556C87] to-[#3C4B77] [clip-path:polygon(100%_0,_100%_30%,_70%_0)] "
                        }), (0, a.jsx)("div", {
                            className: " absolute top-0 left-0 w-[80%] h-[80%] transform translate-x-[12.5%] translate-y-[12.5%] bg-gradient-to-r from-[#556C87] to-[#3C4B77] [clip-path:polygon(0_0,_60%_0,_72.5%_12.5%,_12.5%_12.5%,_12.5%_72.5%,_0_60%)] "
                        }), (0, a.jsx)("div", {
                            className: " absolute top-0 left-0 w-[80%] h-[80%] transform translate-x-[12.5%] translate-y-[12.5%] bg-gradient-to-r from-[#556C87] to-[#3C4B77] [clip-path:polygon(100%_100%,_100%_40%,_87.5%_27.5%,_87.5%_87.5%,_27.5%_87.5%,_40%_100%)] "
                        })]
                    })
                }, {
                    title: "Mid Lane",
                    icon: (0, a.jsxs)("div", {
                        className: "relative aspect-square w-[30px] sm:w-[22px] bg-[#13253F] inline-block rounded-[5px]",
                        children: [(0, a.jsx)("div", {
                            className: " absolute top-0 left-0 w-[80%] h-[80%] transform translate-x-[12.5%] translate-y-[12.5%] bg-gradient-to-r from-[#45F6E3] to-[#C7F7F7] [clip-path:polygon(0_100%,_0%_80%,_80%_0%,_100%_0,_100%_20%,_20%_100%)] "
                        }), (0, a.jsx)("div", {
                            className: " absolute top-0 left-0 w-[80%] h-[80%] transform translate-x-[12.5%] translate-y-[12.5%] bg-gradient-to-r from-[#556C87] to-[#3C4B77] [clip-path:polygon(100%_100%,_30%_100%,_45%_85%,_85%_85%,_85%_45%,_100%_30%)] "
                        }), (0, a.jsx)("div", {
                            className: " absolute top-0 left-0 w-[80%] h-[80%] transform translate-x-[12.5%] translate-y-[12.5%] bg-gradient-to-r from-[#556C87] to-[#3C4B77] [clip-path:polygon(0_0,_70%_0,_55%_15%,_15%_15%,_15%_55%,_0_70%)] "
                        }), (0, a.jsx)("div", {
                            className: " absolute top-0 left-0 w-[80%] h-[80%] transform translate-x-[12.5%] translate-y-[12.5%] bg-gradient-to-r from-[#556C87] to-[#3C4B77] [clip-path:polygon(20%_20%,_50%_20%,_20%_50%)] "
                        }), (0, a.jsx)("div", {
                            className: " absolute top-0 left-0 w-[80%] h-[80%] transform translate-x-[12.5%] translate-y-[12.5%] bg-gradient-to-r from-[#556C87] to-[#3C4B77] [clip-path:polygon(80%_80%,_50%_80%,_80%_50%)] "
                        })]
                    })
                }, {
                    title: "Gold Lane",
                    icon: (0, a.jsxs)("div", {
                        className: " relative aspect-square w-[30px] sm:w-[22px] bg-[#13253F] inline-block rounded-[5px] ",
                        children: [(0, a.jsx)("div", {
                            className: " absolute top-0 left-0 w-[80%] h-[80%] transform translate-x-[12.5%] translate-y-[12.5%] bg-gradient-to-b from-[#FAEBB1] to-[#E9D99A] [clip-path:polygon(100%_10%,_80%_30%,_30%_30%,_100%_70%,_100%_90%,_60%_90%,_60%_100%,_40%_100%,_40%_90%,_0_90%,_20%_70%,_70%_70%,_0_30%,_0_10%,_40%_10%,_40%_0,_60%_0,_60%_10%)] "
                        }), (0, a.jsx)("div", {
                            className: " absolute top-0 left-0 w-[80%] h-[80%] transform translate-x-[12.5%] translate-y-[12.5%] bg-gradient-to-r from-[#556C87] to-[#3C4B77] [clip-path:polygon(0_35%,_10%_40.71%,_10%_75%,_0_85%)] "
                        }), (0, a.jsx)("div", {
                            className: " absolute top-0 left-0 w-[80%] h-[80%] transform translate-x-[12.5%] translate-y-[12.5%] bg-gradient-to-r from-[#556C87] to-[#3C4B77] [clip-path:polygon(100%_15%,_100%_65%,_90%_59.29%,_90%_25%)] "
                        })]
                    })
                }];
            var v = s(710),
                y = s(5695),
                j = s(351),
                N = s(4738),
                k = s(7326),
                C = s(2634);
            let E = ["Epic", "Legend", "Mythic", "Mythical Honor", "Mythical Glory Plus"],
                F = e => {
                    let {
                        tierListData: t,
                        currentRank: s,
                        currentMode: o = "pro"
                    } = e, c = (0, r.A)();
                    (0, l.A)(), (0, y.usePathname)();
                    let [d, p] = (0, n.useState)(), [x, m] = (0, n.useState)(), {
                        isCompact: h,
                        toggleCompact: u
                    } = i(), [_, f] = (0, n.useState)(!1), [g, F] = (0, n.useState)(s), [S, A] = (0, n.useState)(o), [M, B] = (0, n.useState)(() => {
                        let e = JSON.parse(JSON.stringify(t));
                        return e.data.some(e => "F" === e.tier) || e.data.push({
                            tier: "F",
                            data: []
                        }), e
                    });
                    return (0, n.useEffect)(() => {
                        s === g && f(!1)
                    }, [s, g, _]), (0, n.useEffect)(() => {
                        let e = JSON.parse(JSON.stringify(t));
                        e.data.some(e => "F" === e.tier) || e.data.push({
                            tier: "F",
                            data: []
                        }), B(e)
                    }, [t]), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("div", {
                            className: "text-white flex-col flex items-center",
                            children: [(0, a.jsx)("span", {
                                className: " text-2xl ",
                                children: "Automated Tier List"
                            }), (0, a.jsxs)("span", {
                                className: "text-sm text-gray-600",
                                children: ["Last Updated: ", M.updated_at]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "w-full justify-between flex items-center relative mb-1",
                            children: [_ && (0, a.jsx)("div", {
                                className: "absolute top-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white",
                                children: (0, a.jsx)(N.A, {
                                    type: "large"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center gap-6 sm:gap-2 xss:gap-1",
                                children: [(0, a.jsx)("div", {
                                    className: "px-4 py-2 sm:px-1",
                                    children: (0, a.jsx)(C.A, {
                                        currentMode: S,
                                        onModeChange: e => {
                                            A(e)
                                        },
                                        setLoading: f
                                    })
                                }), "rank" === S && (0, a.jsx)(k.A, {
                                    currentRank: s,
                                    ranks: E,
                                    onRankChange: e => {
                                        F(e)
                                    },
                                    setLoading: f,
                                    isMobile: c
                                })]
                            }), (0, a.jsxs)("button", {
                                onClick: u,
                                className: "border-[#34364D] ".concat(h ? "bg-sapphire/90" : "bg-sapphire/50", " filterHover flex items-center justify-center gap-2 rounded-md px-2 py-2 border-[1px] text-white transition-all duration-300 ease-in-out sm:gap-1"),
                                children: [(0, a.jsxs)("div", {
                                    className: "relative w-4 h-4 flex items-center justify-center",
                                    children: [(0, a.jsx)("div", {
                                        className: "absolute inset-0 flex items-center justify-center transition-opacity duration-300 ".concat(h ? "opacity-100" : "opacity-0"),
                                        children: (0, a.jsx)(v.bPN, {
                                            className: "text-white text-sm"
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "absolute inset-0 flex items-center justify-center transition-opacity duration-300 ".concat(h ? "opacity-0" : "opacity-100"),
                                        children: (0, a.jsx)(j.SE2, {
                                            className: "text-white text-sm"
                                        })
                                    })]
                                }), (0, a.jsx)("span", {
                                    className: "text-sm flex items-center sm:text-[10px]",
                                    children: "Compact Mode"
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: "flex text-white border text-center border-[#34364D] bg-sapphire/50 rounded-xl",
                            children: w.map((e, t) => (0, a.jsxs)("div", {
                                className: "flex items-center gap-2 cursor-pointer justify-center flex-1 border-r-[1px] sm:flex-col border-r-[#34364D] last:border-r-0 last:rounded-r-xl first:rounded-l-xl py-2 filterHover sm:text-xs sm:gap-1 ".concat(x === e.title ? "bg-sapphire first:rounded-l-xl " : ""),
                                onClick: () => m(t => t === e.title ? void 0 : e.title),
                                children: [e.icon, (0, a.jsx)("span", {
                                    className: "h-full content-center",
                                    children: e.title
                                })]
                            }, t))
                        }), M.data.map((e, t) => {
                            if ("rank" === o && "F" === e.tier) return null;
                            let r = {
                                    SS: "#FFAE34FC",
                                    S: "#B03E3E",
                                    A: "#E1B04B",
                                    B: "#9E9E9E",
                                    C: "#5A5E63",
                                    D: "#B87333",
                                    F: "#3A3A3A"
                                },
                                l = e.tier;
                            return (0, a.jsxs)(n.Fragment, {
                                children: ["F" === e.tier && (0, a.jsx)("div", {
                                    className: "w-full text-center text-white text-lg mb-1",
                                    children: (0, a.jsx)("span", {
                                        className: "opacity-70",
                                        children: "Unpicked Heroes"
                                    })
                                }), (0, a.jsx)(b, {
                                    filterRole: d,
                                    filterLane: x,
                                    title: e.tier,
                                    tierData: e,
                                    accent: r[l],
                                    tiers: r,
                                    isMobile: c,
                                    currentRank: s
                                })]
                            }, t)
                        })]
                    })
                }
        },
        6660: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => r
            });
            var a = s(2115);
            let r = () => {
                let [e, t] = (0, a.useState)(void 0);
                return (0, a.useEffect)(() => {
                    let e = () => {
                        t(window.innerWidth <= 768)
                    };
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, []), e
            }
        },
        7326: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => c
            });
            var a = s(5155),
                r = s(5695),
                l = s(6766),
                n = s(2515),
                o = s(2115),
                i = s(5354);
            let c = e => {
                let {
                    currentRank: t,
                    ranks: s,
                    onRankChange: c,
                    setLoading: d,
                    isMobile: p = !1
                } = e, x = (0, r.useRouter)(), m = (0, r.usePathname)(), [h, u] = (0, o.useState)(t || "Mythical Glory Plus"), [_, f] = (0, o.useState)(!1), g = (0, o.useRef)(null), b = (0, i.A)();
                (0, o.useEffect)(() => {
                    t && "pro" !== t ? u(t) : t && "pro" !== t || u("Mythical Glory Plus")
                }, [t]), (0, o.useEffect)(() => {
                    let e = e => {
                        g.current && !g.current.contains(e.target) && f(!1)
                    };
                    return _ && document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [_]), ("Select Rank" !== h ? "/img/rank-icons/".concat(h, ".png") : "/img/rank-icons/Mythic.png").replace(/\s+/g, "_");
                let w = e => {
                        let s = "Mythical Glory+" === e ? "Mythical Glory" : e;
                        u(s), f(!1), c && c(s);
                        let a = "".concat(m, "?rank_filter=").concat(e);
                        t !== s && d && d(!0), x.replace(a, {
                            scroll: !1
                        })
                    },
                    v = e => {
                        if (b) {
                            if ("Mythical Honor" === e) return "Honor";
                            else if ("Mythical Glory Plus" === e) return "Glory"
                        }
                        return e
                    };
                return (0, a.jsx)("div", {
                    className: "flex items-center gap-2",
                    children: (0, a.jsxs)("div", {
                        className: "relative",
                        id: "rank-filter",
                        ref: g,
                        children: [(0, a.jsxs)("button", {
                            onClick: () => f(!_),
                            className: "bg-sapphire/50 filterHover flex items-center justify-between w-full rounded-md px-2 py-2 border-[1px] border-[#34364D] text-white transition-all duration-300 ease-in-out",
                            children: [h && (0, a.jsx)(l.default, {
                                src: "/img/rank-icons/".concat("Mythical Glory+" === h ? "Mythical Glory" : h, ".png"),
                                alt: h,
                                width: 19,
                                height: 19,
                                style: {
                                    maxWidth: "100%",
                                    height: "auto"
                                }
                            }), (0, a.jsx)("span", {
                                className: "text-sm flex-grow text-center ml-2 sm:text-[10px]",
                                children: h ? v(h) : "Select Rank"
                            }), (0, a.jsx)("div", {
                                className: "flex-shrink-0 ml-2",
                                children: _ ? (0, a.jsx)(n.rAP, {
                                    className: "text-white text-sm"
                                }) : (0, a.jsx)(n.WnU, {
                                    className: "text-white text-sm"
                                })
                            })]
                        }), _ && (0, a.jsx)("div", {
                            className: "absolute mt-1 z-20 bg-sapphire/100 border border-[#34364D] rounded-md shadow-lg",
                            children: s.map((e, t) => (0, a.jsx)("div", {
                                className: "text-sm text-white w-[160px] py-2 px-2 transition-colors flex items-center whitespace-nowrap ".concat(t < s.length - 1 ? "border-b border-[#34364D]" : "", " hover:bg-main cursor-pointer"),
                                onClick: () => w(e),
                                children: (0, a.jsxs)("div", {
                                    className: "flex items-center justify-between w-full",
                                    children: [(0, a.jsx)("div", {
                                        className: "flex-shrink-0 mr-2",
                                        children: (0, a.jsx)(l.default, {
                                            src: "/img/rank-icons/".concat("Mythical Glory Plus" === e ? "Mythical Glory" : e, ".png"),
                                            alt: e,
                                            width: 19,
                                            height: 19,
                                            style: {
                                                maxWidth: "100%",
                                                height: "auto"
                                            }
                                        })
                                    }), (0, a.jsx)("span", {
                                        className: "flex-grow text-center",
                                        children: v(e)
                                    }), (0, a.jsx)("div", {
                                        className: "flex-shrink-0 w-[19px]"
                                    }), " "]
                                })
                            }, e))
                        })]
                    })
                })
            }
        },
        8163: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => n
            });
            var a = s(5155),
                r = s(6660),
                l = s(2115);
            let n = () => {
                let e = (0, r.A)(),
                    [t, s] = (0, l.useState)(!0),
                    n = (0, l.useRef)(null);
                return ((0, l.useEffect)(() => {
                    let e = n.current;
                    if (e) {
                        let t = () => {
                            s(!1)
                        };
                        return e.addEventListener("loadeddata", t), () => {
                            e.removeEventListener("loadeddata", t)
                        }
                    }
                }, [e]), void 0 === e) ? null : (0, a.jsxs)("div", {
                    className: "w-full h-full",
                    children: [t && (0, a.jsx)("div", {
                        className: "absolute inset-0 w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 animate-pulse",
                        "aria-hidden": "true"
                    }), (0, a.jsxs)("video", {
                        ref: n,
                        className: "w-full h-full object-cover brightness-[50%] transition-opacity duration-500\n                    ".concat(t ? "opacity-0" : "opacity-100"),
                        loop: !0,
                        muted: !0,
                        playsInline: !0,
                        autoPlay: !0,
                        preload: "auto",
                        children: [(0, a.jsx)("source", {
                            src: e ? "/mbNewC.mp4" : "/newWebC.mp4",
                            type: "video/mp4"
                        }), "Your browser does not support the video tag."]
                    })]
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [479, 512, 150, 844, 603, 506, 874, 175, 441, 684, 358], () => t(1693)), _N_E = e.O()
    }
]);