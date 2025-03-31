(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4228], {
        33675: function(e, t, n) {
            "use strict";
            var r = n(4730),
                i = n(50029),
                a = n(59499),
                l = n(64687),
                u = n.n(l),
                o = n(86520),
                s = n(48939),
                c = n(85893),
                d = ["ctx", "props"];

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            t.Z = function(e) {
                var t;

                function n(t) {
                    return (0, c.jsx)(e, m({}, t))
                }
                return n.getRenderData = e.getRenderData, n.initPage = (t = (0, i.Z)(u().mark(function t(n) {
                    var i, a, l, c, p, b, f, y, v, g, h, P, x;
                    return u().wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (i = n.ctx, a = n.props, l = (0, r.Z)(n, d), c = a.self, p = a.currentGroup, b = i.query, f = (0, s.aK)(b), y = (0, s.VO)(b), v = (0, s.kG)(b), g = (0, s.GG)(b), h = (0, s.AC)(b), P = (0, s.gf)(b), (0, o.Wr)({
                                        member: null == c ? void 0 : c.member,
                                        group: p
                                    })) {
                                    t.next = 13;
                                    break
                                }
                                return x = (0, s.jQ)({
                                    invite: f,
                                    group: p,
                                    ref: v,
                                    pending: y,
                                    joinGroup: g,
                                    autoJoin: h,
                                    auth: P
                                }).as, t.abrupt("return", {
                                    settings: {
                                        redirect: {
                                            destination: x,
                                            permanent: !1
                                        }
                                    }
                                });
                            case 13:
                                if (!e.initPage) {
                                    t.next = 19;
                                    break
                                }
                                return t.next = 16, e.initPage(m({
                                    ctx: i,
                                    props: a
                                }, l));
                            case 16:
                                t.t0 = t.sent, t.next = 20;
                                break;
                            case 19:
                                t.t0 = a;
                            case 20:
                                return t.abrupt("return", t.t0);
                            case 21:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                })), function(e) {
                    return t.apply(this, arguments)
                }), n
            }
        },
        16188: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return J
                },
                default: function() {
                    return Q
                }
            });
            var r, i, a = n(59499),
                l = n(90116),
                u = n(50029),
                o = n(64687),
                s = n.n(o),
                c = n(48402),
                d = n(27987),
                p = n(84941),
                m = n(1584),
                b = n(92230),
                f = n(42432),
                y = n(67294),
                v = n(73793),
                g = n(11163),
                h = n(73865),
                P = n(86520),
                x = n(19842),
                k = n(52885),
                O = n(11210),
                w = n(48939),
                I = n(25123),
                j = n(33675),
                M = n(56653),
                B = n(31865),
                C = [{
                    key: "status",
                    label: "Status",
                    multiple: !0,
                    columns: 2,
                    width: 167,
                    choices: [{
                        key: "admins",
                        label: "Admins"
                    }, {
                        key: "online",
                        label: "Online"
                    }, {
                        key: "monthly",
                        label: "Monthly",
                        adminOnly: !0
                    }, {
                        key: "annual",
                        label: "Annual",
                        adminOnly: !0
                    }, {
                        key: "freeTrials",
                        label: "Trials",
                        adminOnly: !0
                    }]
                }, {
                    key: "price",
                    label: "Price",
                    adminOnly: !0,
                    multiple: !0,
                    columns: 2,
                    width: 204,
                    choices: []
                }, {
                    key: "courseIds",
                    label: "Courses",
                    adminOnly: !0,
                    multiple: !0,
                    columns: 1,
                    width: 208,
                    choices: []
                }, {
                    key: "sortType",
                    label: "Sort",
                    width: 181,
                    labelPrefix: "Sort:",
                    choices: [{
                        key: "-memberapprovedat",
                        label: "Newest"
                    }, {
                        key: "-memberlastoffline",
                        label: "Last active"
                    }, {
                        key: "-memberpoints",
                        label: "Most points"
                    }]
                }],
                T = n(50378),
                D = n(3284),
                _ = n(91425),
                N = (0, T.iv)(["padding:0px 10px;margin-bottom:16px;> div{gap:8px;}"]),
                S = T.ZP.div.withConfig({
                    displayName: "styled__GroupMembersHeader",
                    componentId: "sc-cx05x3-0"
                })(["display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;> div{display:flex;gap:8px;}> label{", "}", ""], D.c.t7, function(e) {
                    return e.theme.isMobile && N
                }),
                Z = (0, T.iv)(["padding:0px 13px;"]),
                A = T.ZP.div.withConfig({
                    displayName: "styled__NoMembersWrapper",
                    componentId: "sc-cx05x3-1"
                })(["", " ", ""], D.c.t7, function(e) {
                    return e.theme.isMobile && Z
                }),
                E = T.ZP.div.withConfig({
                    displayName: "styled__CsvLoadingWrapper",
                    componentId: "sc-cx05x3-2"
                })(["height:40px;width:92.39px;display:flex;justify-content:center;align-items:center;background:", ";border-radius:25px;color:", ";"], _.O9.n3, _.O9.n5),
                F = (0, T.iv)(["> div{height:14px !important;width:14px !important;}"]),
                q = (0, T.ZP)(b.z).withConfig({
                    displayName: "styled__InviteButton",
                    componentId: "sc-cx05x3-3"
                })(["height:40px;background-color:", ";color:", ";", " ", ""], _.O9.p3, _.O9.fgPrimary, D.c.t8, function(e) {
                    return e.theme.isMobile && F
                }),
                G = n(14988),
                R = n(41609),
                L = n.n(R),
                W = n(85893);

            function V(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? V(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : V(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var K = function(e) {
                    var t = document.createElement("a");
                    t.href = e, t.download = !0, t.click()
                },
                X = function(e) {
                    var t = e.page,
                        n = e.price,
                        r = e.total,
                        i = e.users,
                        a = e.online,
                        o = e.levels,
                        x = e.tabName,
                        j = e.courses,
                        T = e.isAdmin,
                        D = e.tabChips,
                        _ = e.sortType,
                        N = e.courseIds,
                        Z = e.totalPages,
                        F = e.isFiltered,
                        R = e.adminFilter,
                        V = e.currentGroup,
                        z = e.initialFilterState,
                        X = e.membershipBillingProducts,
                        $ = e.monthly,
                        H = e.annual,
                        J = e.trials,
                        Q = (0, g.useRouter)(),
                        U = (0, v.bI)("isMobile", "self"),
                        Y = U.isMobile,
                        ee = U.self,
                        et = U.dispatch,
                        en = (0, y.useState)(!1),
                        er = en[0],
                        ei = en[1],
                        ea = (0, y.useState)(!1),
                        el = ea[0],
                        eu = ea[1],
                        eo = (0, y.useState)(null),
                        es = eo[0],
                        ec = eo[1],
                        ed = (0, y.useRef)(),
                        ep = (0, y.useRef)(!1),
                        em = (0, y.useRef)(!1),
                        eb = T && !Y;
                    (0, y.useEffect)(function() {
                        return em.current = !0,
                            function() {
                                em.current = !1
                            }
                    }, []), (0, y.useEffect)(function() {
                        var e;
                        if (eb && null != V && null !== (e = V.metadata) && void 0 !== e && e.bulkActionInProgress) {
                            eu(!0);
                            var t = setInterval((0, u.Z)(s().mark(function e() {
                                return s().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, I.Z.getBulkActionProgress({
                                                groupID: V.id
                                            });
                                        case 3:
                                            0 === e.sent.data.inProgress && (eu(!1), clearInterval(t)), e.next = 12;
                                            break;
                                        case 8:
                                            return e.prev = 8, e.t0 = e.catch(0), clearInterval(t), e.abrupt("return");
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [0, 8]
                                ])
                            })), 1500);
                            return function() {
                                clearInterval(t)
                            }
                        }
                    }, [V, eb]);
                    var ef = (0, y.useMemo)(function() {
                            return (0, P.yd)({
                                member: null == ee ? void 0 : ee.member,
                                group: V
                            })
                        }, [ee, V]),
                        ey = (0, y.useMemo)(function() {
                            return X ? X.map(function(e) {
                                var t = !!e.monthlyBillingProduct,
                                    n = !!e.annualBillingProduct,
                                    r = !!e.oneTimeBillingProduct;
                                return t && n ? {
                                    key: "".concat(e.monthlyBillingProduct.id, ",").concat(e.annualBillingProduct.id),
                                    label: "".concat((0, O.O5)(e.monthlyBillingProduct), "/m ").concat((0, O.O5)(e.annualBillingProduct), "/y")
                                } : t ? {
                                    key: e.monthlyBillingProduct.id,
                                    label: "".concat((0, O.O5)(e.monthlyBillingProduct), "/m")
                                } : n ? {
                                    key: e.annualBillingProduct.id,
                                    label: "".concat((0, O.O5)(e.annualBillingProduct), "/y")
                                } : r ? {
                                    key: e.oneTimeBillingProduct.id,
                                    label: "".concat((0, O.O5)(e.oneTimeBillingProduct), " lifetime")
                                } : {}
                            }) : []
                        }, [X]),
                        ev = (0, y.useMemo)(function() {
                            var e = (0, l.Z)(C);
                            return e[2].choices = j.filter(function(e) {
                                return !!e.privacy
                            }), e[1].choices = [{
                                key: "memberfreebillingproduct00000000",
                                label: "Free"
                            }].concat((0, l.Z)(ey)), T || (e = e.filter(function(e) {
                                return !e.adminOnly
                            })), e
                        }, [j, T, ey]);
                    (0, y.useEffect)(function() {
                        es && !ep.current && (ep.current = !0, K(es), ed.current = setTimeout(function() {
                            ei(!0), ed.current = null
                        }, 3e5))
                    }, [es]);
                    var eg = (0, y.useCallback)(function(e) {
                            (0, k.VF)(Q, (0, w.DW)({
                                price: n,
                                monthly: $,
                                annual: H,
                                trials: J,
                                group: V,
                                tab: x,
                                page: e,
                                levels: o,
                                sortType: _,
                                courseIds: N,
                                online: a
                            }))
                        }, [N, V, o, a, Q, _, x, n, $, H, J]),
                        eh = (0, y.useCallback)(function() {
                            (0, k.VF)(Q, (0, w.DW)({
                                group: V,
                                tab: x
                            }))
                        }, [V, Q, x]),
                        eP = (0, y.useCallback)(function() {
                            et(B.fi, function() {
                                return {
                                    settingsModal: T ? "adminInvite" : "userInvite"
                                }
                            })
                        }, [et, T]),
                        ex = (0, y.useMemo)(function() {
                            return ef ? (0, W.jsx)(q, {
                                label: "Invite",
                                onClick: eP,
                                icon: Y ? "Add" : void 0,
                                variant: Y ? "icon-round" : void 0
                            }) : null
                        }, [ef, Y, eP]),
                        ek = (0, y.useMemo)(function() {
                            if (!(null != i && i.length)) {
                                var e = x === h.bI.GroupMembersPending ? "No membership requests" : "No members";
                                return (0, W.jsx)(A, {
                                    children: e
                                })
                            }
                            return (0, W.jsx)(M.t, {
                                users: i
                            })
                        }, [i, x]),
                        eO = (0, y.useCallback)(function(e) {
                            var t = !!e.status.includes("admins") || void 0,
                                n = !!e.status.includes("online") || void 0,
                                r = !!e.status.includes("monthly") || void 0,
                                i = !!e.status.includes("annual") || void 0,
                                a = !!e.status.includes("freeTrials") || void 0;
                            (0, k.VF)(Q, (0, w.DW)({
                                group: V,
                                admin: t,
                                online: n,
                                annual: i,
                                monthly: r,
                                trials: a,
                                levels: L()(e.levels) ? void 0 : e.levels,
                                tab: x,
                                sortType: e.sortType,
                                courseIds: e.courseIds,
                                price: e.price
                            }))
                        }, [V, x, Q]),
                        ew = (0, y.useCallback)(function(e) {
                            (0, k.VF)(Q, (0, w.DW)({
                                group: V,
                                tab: e.tab
                            }))
                        }, [V, Q]),
                        eI = (0, y.useMemo)(function() {
                            if (Z > 1) return (0, W.jsx)(c.t, {
                                totalCount: r,
                                currentPage: t,
                                pageSize: 30,
                                onChange: eg,
                                style: {
                                    marginTop: Y ? 48 : 32
                                }
                            })
                        }, [eg, Y, t, r, Z]),
                        ej = (0, y.useMemo)(function() {
                            if ("active" === x) return (0, W.jsx)(d.l, {
                                xOffset: 214,
                                active: F,
                                onReset: eh,
                                options: ev,
                                onApply: eO,
                                initialState: z,
                                children: Y ? (0, W.jsx)(b.z, {
                                    variant: "icon",
                                    active: F,
                                    icon: "NewFilter",
                                    iconSize: 16
                                }) : (0, W.jsx)(m.A, {
                                    label: "Filter",
                                    icon: "NewFilter",
                                    active: F
                                })
                            })
                        }, [x, Y, F, eh, ev, z, eO]),
                        eM = (0, y.useCallback)((0, u.Z)(s().mark(function e() {
                            var t, r, i, l, u, c;
                            return s().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(es && !er)) {
                                            e.next = 3;
                                            break
                                        }
                                        return K(es), e.abrupt("return");
                                    case 3:
                                        return eu(!0), ei(!1), ep.current = !1, ed.current && (clearTimeout(ed.current), ed.current = null), t = [$ && "month", H && "year"].filter(function(e) {
                                            return e
                                        }), e.next = 10, I.Z.membersBulkActions({
                                            groupID: V.id,
                                            type: "bulk-export-csv",
                                            allMembersSelected: !0,
                                            levels: o ? o.split(",").map(function(e) {
                                                return +e
                                            }) : void 0,
                                            courseIds: N ? N.split(",").map(function(e) {
                                                return e
                                            }) : void 0,
                                            price: n ? n.split(",") : void 0,
                                            online: !!a || void 0,
                                            admin: R || void 0,
                                            memberStatus: x,
                                            sortType: _,
                                            billingProductIntervals: t,
                                            trials: J
                                        });
                                    case 10:
                                        if (i = (r = e.sent).data, !r.error) {
                                            e.next = 17;
                                            break
                                        }
                                        return et(B.bI, {
                                            message: "There was an issue with your request, please try again.",
                                            severity: "error"
                                        }), eu(!1), e.abrupt("return");
                                    case 17:
                                        return l = i.token, u = i.fileId, e.prev = 18, e.next = 21, (0, G.Cx)({
                                            token: l,
                                            userID: null == ee ? void 0 : ee.id,
                                            timeoutMS: 3e5
                                        });
                                    case 21:
                                        if (!em.current) {
                                            e.next = 27;
                                            break
                                        }
                                        return eu(!1), e.next = 25, I.Z.getResourceUrl({
                                            fileId: u
                                        });
                                    case 25:
                                        c = e.sent, em.current && ec(c.data);
                                    case 27:
                                        e.next = 33;
                                        break;
                                    case 29:
                                        e.prev = 29, e.t0 = e.catch(18), et(B.bI, {
                                            message: "There was an issue with your request, please try again.",
                                            severity: "error"
                                        }), em.current && eu(!1);
                                    case 33:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [18, 29]
                            ])
                        })), [er, V, R, N, et, _, es, x, o, a, n, ee, H, $, J]),
                        eB = (0, y.useMemo)(function() {
                            if (eb) return el ? (0, W.jsx)(E, {
                                children: (0, W.jsx)(f.D, {})
                            }) : (0, W.jsx)(m.A, {
                                label: "Export",
                                icon: "Export",
                                onClick: eM
                            })
                        }, [eb, eM, el]),
                        eC = (0, y.useMemo)(function() {
                            return (0, W.jsxs)(S, {
                                children: [(0, W.jsx)(p.u, {
                                    chipKey: "tab",
                                    chips: D,
                                    value: {
                                        tab: x
                                    },
                                    onChange: ew,
                                    scrollable: !0,
                                    style: {
                                        paddingRight: 0
                                    }
                                }), (0, W.jsxs)("div", {
                                    children: [ej, eB, ex]
                                })]
                            })
                        }, [x, D, eB, ex, ej, ew]);
                    return (0, W.jsxs)("div", {
                        children: [eC, ek, eI]
                    })
                };
            X.getRenderData = (r = (0, u.Z)(s().mark(function e(t) {
                var n, r, i, a, l, u, o, c, d, p, m, b, f, y, v, g;
                return s().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = t.ctx, r = t.apiClient, i = (0, w.Z9)(n.query), a = (0, w.q$)(n.query), l = (0, w.XT)(n.query), o = (u = n.query).online, c = u.admin, d = u.sortType, p = u.levels, m = u.courseIds, b = u.price, f = u.monthly, y = u.annual, v = u.trials, g = ["true" === f ? "month" : null, "true" === y ? "year" : null].filter(function(e) {
                                return e
                            }), e.next = 8, r.readGroupMembersData({
                                groupName: i,
                                tabName: a,
                                page: l,
                                billingProductIds: b ? b.split(",") : void 0,
                                levels: p ? p.split(",").map(function(e) {
                                    return +e
                                }) : void 0,
                                courseIds: m ? m.split(",") : void 0,
                                online: !!o,
                                admin: !!c,
                                limit: 30,
                                sortType: d,
                                billingProductIntervals: g,
                                trials: "true" === v
                            });
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }, e)
            })), function(e) {
                return r.apply(this, arguments)
            }), X.initPage = (i = (0, u.Z)(s().mark(function e(t) {
                var n, r, i, a, l, u, o, c, d, p, m, b, f, y, v, g, k, O, I, j, M, B, C, T, D, _, N, S, Z, A, E, F, q, G, R, W, V, K, X, $, H, J, Q, U, Y, ee, et, en;
                return s().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            n = t.ctx, i = (r = t.props).currentGroup, a = r.self, l = (0, P.q2)({
                                group: i,
                                user: a,
                                member: null == a ? void 0 : a.member
                            }), u = (0, w.q$)(n.query) || (l ? "active" : "member"), o = (0, w.XT)(n.query), c = r.renderData, p = (d = n.query).online, m = d.admin, b = d.sortType, f = d.levels, y = d.courseIds, v = d.price, g = d.monthly, k = d.annual, O = d.trials, I = [], j = !1, M = "true" === g, B = "true" === k, C = "true" === O, c.courses && (I = c.courses.map(function(e) {
                                return {
                                    key: e.id,
                                    label: e.title,
                                    privacy: e.privacy || 0,
                                    minAccessLevel: e.minAccessLevel || null
                                }
                            })), T = {
                                status: [],
                                levels: []
                            }, p && (T.status.push("online"), j = !0), m && (T.status.push("admins"), j = !0), M && (T.status.push("monthly"), j = !0), B && (T.status.push("annual"), j = !0), C && (T.status.push("freeTrials"), j = !0), b && !L()(b) ? (T.sortType = b, j = !0) : T.sortType = "-memberapprovedat", f && !L()(f) && (T.levels = f.split(","), j = !0), y && !L()(y) && (T.courseIds = y.split(","), j = !0), v && (_ = (null != (D = c.groupMembershipProducts) ? D : []).reduce(function(e, t) {
                                return t.monthlyBillingProduct && (e[t.monthlyBillingProduct.id] = t), t.annualBillingProduct && (e[t.annualBillingProduct.id] = t), e
                            }, {}), N = v.split(",").map(function(e) {
                                var t = _[e];
                                return t && t.monthlyBillingProduct && t.annualBillingProduct ? "".concat(t.monthlyBillingProduct.id, ",").concat(t.annualBillingProduct.id) : e
                            }), T.price = Array.from(new Set(N)), j = !0), Z = void 0 === (S = c.totalCancellingMembers) ? 0 : S, E = void 0 === (A = c.totalFilteredMembers) ? 0 : A, q = void 0 === (F = c.totalChurnedMembers) ? 0 : F, R = void 0 === (G = c.totalOnlineMembers) ? 0 : G, V = void 0 === (W = c.totalBannedMembers) ? 0 : W, X = void 0 === (K = c.totalMembers) ? 0 : K, H = void 0 === ($ = c.totalAdmins) ? 0 : $, J = 0, e.t0 = u, e.next = "admin" === e.t0 ? 28 : "online" === e.t0 ? 30 : "banned" === e.t0 ? 32 : "churned" === e.t0 ? 34 : "cancelling" === e.t0 ? 36 : 38;
                            break;
                        case 28:
                            return J = H, e.abrupt("break", 40);
                        case 30:
                            return J = R, e.abrupt("break", 40);
                        case 32:
                            return J = V, e.abrupt("break", 40);
                        case 34:
                            return J = q, e.abrupt("break", 40);
                        case 36:
                            return J = Z, e.abrupt("break", 40);
                        case 38:
                            return J = X, e.abrupt("break", 40);
                        case 40:
                            return j && (J = E), Q = Math.ceil(J / 30), U = (0, P.CP)({
                                group: i,
                                user: a,
                                member: null == a ? void 0 : a.member
                            }), Y = l ? [{
                                key: "active",
                                label: "Active",
                                activeLabel: "Active \xa0".concat(j ? E : X)
                            }, {
                                key: "cancelling",
                                label: "Cancelling",
                                activeLabel: "Cancelling \xa0".concat(Z),
                                dataTestId: "cancelled-members"
                            }, {
                                key: "churned",
                                label: "Churned",
                                activeLabel: "Churned \xa0".concat(q),
                                dataTestId: "churned-members"
                            }, {
                                key: "banned",
                                label: "Banned",
                                activeLabel: "Banned \xa0".concat(V),
                                dataTestId: "banned-members"
                            }] : [{
                                key: "member",
                                label: "Members \xa0".concat(X)
                            }, {
                                key: "admin",
                                label: "Admins \xa0".concat(H)
                            }, {
                                key: "online",
                                label: "Online \xa0".concat(R)
                            }], ee = "Members \xb7 ".concat(i.metadata.displayName), et = c.members || [], en = (c.groupMembershipProducts || []).reduce(function(e, t) {
                                return t.monthlyBillingProduct && (e[t.monthlyBillingProduct.id] = t), t.annualBillingProduct && (e[t.annualBillingProduct.id] = t), e
                            }, {}), l && (et = et.map(function(e) {
                                if (!e.member.billingProductId) return e;
                                var t = en[e.member.billingProductId];
                                if (!t) return e;
                                var n = t[0],
                                    r = z({}, e);
                                return r.member.pricing = z({}, n), r
                            })), e.abrupt("return", z({
                                tabName: u,
                                tabChips: Y,
                                users: et,
                                adminFilter: !!m,
                                annual: B,
                                monthly: M,
                                courses: I,
                                page: o,
                                totalPages: Q,
                                total: J,
                                itemsPerPage: 30,
                                isAdmin: U,
                                trials: C,
                                initialFilterState: T,
                                membershipBillingProducts: c.groupMembershipProducts,
                                isFiltered: j,
                                levels: f || "",
                                sortType: b || "",
                                courseIds: y || "",
                                online: p || "",
                                price: v || "",
                                membersCount: [],
                                settings: {
                                    pageTitle: ee,
                                    pageMeta: {
                                        description: (0, x.Kv)({
                                            content: i.metadata.description
                                        }) || ""
                                    },
                                    mainMenuName: h.K0.GroupDefault,
                                    mainMenuItem: h.t5.GroupDefaultMembers,
                                    searchMembers: !0
                                }
                            }, r));
                        case 49:
                        case "end":
                            return e.stop()
                    }
                }, e)
            })), function(e) {
                return i.apply(this, arguments)
            });
            var $ = (0, j.Z)(X),
                H = n(50282),
                J = !0,
                Q = (0, H.Z)($)
        },
        42409: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[group]/-/members", function() {
                return n(16188)
            }])
        }
    },
    function(e) {
        e.O(0, [4027, 630, 6911, 1509, 2859, 4192, 6527, 282, 4221, 2888, 9774, 179], function() {
            return e(e.s = 42409)
        }), _N_E = e.O()
    }
]);