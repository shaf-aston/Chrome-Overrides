"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6527], {
        53980: function(e, t, n) {
            n.d(t, {
                O1: function() {
                    return a
                },
                bU: function() {
                    return i
                }
            });
            var r = {
                insufficient_funds: {
                    userMessage: "Insufficient funds. Make sure your card has enough balance for this transaction, or try another payment method.",
                    adminMessage: "Insufficient funds. The customer should make sure their card has enough balance for this transaction, or try another payment method."
                },
                transaction_not_allowed: {
                    userMessage: "Transaction not allowed. Call your card issuing bank and ask them to remove the block on the transaction, then try again. ",
                    adminMessage: "Transaction not allowed. The customer should call their card issuing bank and ask them to remove the block on the transaction, then try again. "
                },
                do_not_honor: {
                    userMessage: "Do not honor. Call your card issuing bank and ask them to remove the block on the transaction, then try again. ",
                    adminMessage: "Do not honor. The customer should call their card issuing bank and ask them to remove the block on the transaction, then try again."
                },
                try_again_later: {
                    userMessage: "Try again later. Try processing the transaction again. If the issue persists, call your card issuing bank and ask them why the transaction is failing.",
                    adminMessage: "Try again later. The customer should try processing the transaction again. If the issue persists, they should call their card issuing bank and ask them why the transaction is failing."
                },
                fraudulent: {
                    userMessage: "Your card was declined. Try another payment method.",
                    adminMessage: "Fraudulent. The transaction was blocked because it has a high risk of being fraudulent. "
                },
                incorrect_number: {
                    userMessage: "Incorrect card number. Try again with the correct card number. If the issue persists, call your card issuing bank and ask them why the transaction is failing.",
                    adminMessage: "Incorrect card number. The customer should try again with the correct card number. If the issue persists, they should call their card issuing bank and ask them why the transaction is failing."
                },
                generic_decline: {
                    userMessage: "Generic decline. Your card was declined for an unknown reason. Call your card issuing bank and ask them why the transaction is declining.",
                    adminMessage: "Generic decline. The customers card was declined for an unknown reason. They should call their card issuing bank and ask them why the transaction is declining."
                },
                card_velocity_exceeded: {
                    userMessage: "Card velocity exceeded. Your card was declined for making repeated attempts too frequently or exceeding its amount limit.",
                    adminMessage: "Card velocity exceeded. The customers card was declined for making repeated attempts too frequently or exceeding its amount limit."
                },
                invalid_account: {
                    userMessage: "Invalid account. Try again with the correct card number. If the issue persists, call your card issuing bank and ask them why the transaction is failing.",
                    adminMessage: "Invalid account. The customer should try again with the correct card number. If the issue persists, they should call their card issuing bank and ask them why the transaction is failing."
                },
                invalid_amount: {
                    userMessage: "Invalid amount. Call your card issuing bank to see if you can make purchases of this amount.",
                    adminMessage: "Invalid amount. The customer should call their card issuing bank to see if they can make purchases of this amount."
                },
                expired_card: {
                    userMessage: "Expired card. Try another payment method.",
                    adminMessage: "Expired card. The customer should try again with another payment method."
                },
                pickup_card: {
                    userMessage: "Pickup card. You can't use this card to make this payment. It's possible it's been reported lost or stolen. Call your card issuing bank for more information.",
                    adminMessage: "Pickup card. The customer can't use this card to make this payment. It's possible it's been reported lost or stolen. They should call their card issuing bank for more information."
                },
                processing_error: {
                    userMessage: "Processing error. Try processing this payment again. If it still can't be pocessed, try again later.",
                    adminMessage: "Processing error. The customer should try processing this payment again. If it still can't be pocessed, they should try again later."
                },
                invalid_cvc: {
                    userMessage: "Invalid CVC number. Try again using the correct CVC number.",
                    adminMessage: "Invalid CVC number. The customer should try again using the correct CVC number."
                },
                stolen_card: {
                    userMessage: "Your card was declined. Try another payment method.",
                    adminMessage: "Stolen card. The customers card has been reported stolen. They should call their card issuing bank to resolve this problem."
                },
                lost_card: {
                    userMessage: "Your card was declined. Try another payment method.",
                    adminMessage: "Lost card. The customers card has been reported lost. They should call their card issuing bank to resolve this problem."
                },
                revocation_of_authorization: {
                    userMessage: "Revocation of authorization. Call your card issuing bank and ask them to remove the block on the transaction, then try again.",
                    adminMessage: "Revocation of authorization. The customer should call their card issuing bank and ask them to remove the block on the transaction, then try again. "
                },
                reenter_transaction: {
                    userMessage: "Re-enter transaction. Try processing this payment again. If it still can't be processed, call your card issuing bank and ask them why it's failing.",
                    adminMessage: "Re-enter transaction. The customer should try processing this payment again. If it still can't be processed, they should call their card issuing bank and ask them why it's failing."
                },
                revocation_of_all_authorizations: {
                    userMessage: "Revocation of all authorizations. Call your card issuing bank and ask them to remove the block on the transaction, then try again.",
                    adminMessage: "Revocation of all authorizations. The customer should call their card issuing bank and ask them to remove the block on the transaction, then try again."
                },
                incorrect_pin: {
                    userMessage: "Incorrect pin. Try again with the correct pin number. If the issue persists, call your card issuing bank and ask them why the transaction is failing.",
                    adminMessage: "Incorrect pin. The customer should try again with the correct pin number. If the issue persists, they should call their card issuing bank and ask them why the transaction is failing."
                },
                incorrect_cvc: {
                    userMessage: "Incorrect CVC number. Try again using the correct CVC number.",
                    adminMessage: "Incorrect CVC number. The customer should try again using the correct CVC number."
                },
                card_not_supported: {
                    userMessage: "Card not supported. Call your card issuing bank and make sure this card can be used for this type of purchase.",
                    adminMessage: "Card not supported. The customer should call their card issuing bank and make sure this card can be used for this type of purchase."
                },
                call_issuer: {
                    userMessage: "Call issuer. Call your card issuing bank and ask them why the transaction is failing.",
                    adminMessage: "Call issuer. The customer should call their card issuing bank and ask them why the transaction is failing."
                },
                authentication_required: {
                    userMessage: "Authentication required. Try again. ",
                    adminMessage: "Authentication required. The customer should try again and make sure they complete the authentication step their bank requires."
                },
                approve_with_id: {
                    userMessage: "Approve with ID. Try again. If the issue persists, call your card issuing bank and ask them why the transaction is failing.",
                    adminMessage: "Approve with ID. Try again. The customer should try again. If the issue persists, they should call their card issuing bank and ask them why the transaction is failing."
                },
                currency_not_supported: {
                    userMessage: "Currency not supported. Call your card issuing bank to make sure this card can make purchses in USD.",
                    adminMessage: "Currency not supported. The customer should call their card issuing bank to make sure this card can make purchses in USD."
                },
                do_not_try_again: {
                    userMessage: "Do not try again. Call your card issuing bank and ask them why the transaction is failing.",
                    adminMessage: "Do not try again. The customer should call their card issuing bank and ask them why the transaction is failing."
                },
                duplicate_transaction: {
                    userMessage: "Duplicate transaction. Check to see if a recent payment already exists.",
                    adminMessage: "Duplicate transaction. The customer should check to see if a recent payment already exists."
                },
                incorrect_zip: {
                    userMessage: "Incorrect ZIP. Try again using the correct billing postal code.",
                    adminMessage: "Incorrect ZIP. The customer should try again using the correct billing postal code."
                },
                invalid_expiry_month: {
                    userMessage: "Invalid expiry month. Try again using the correct expiration month.",
                    adminMessage: "Invalid expiry month. The customer should try again using the correct expiration month."
                },
                invalid_expiry_year: {
                    userMessage: "Invalid expiry year. Try again using the correct expiration year.",
                    adminMessage: "Invalid expiry year. The customer should try again using the correct expiration month."
                },
                invalid_number: {
                    userMessage: "Invalid number. Try again using the correct card number.",
                    adminMessage: "Invalid number. The customer should try again using the correct card number."
                },
                invalid_pin: {
                    userMessage: "Invalid PIN. Try again using the correct PIN.",
                    adminMessage: "Invalid PIN. The customer should try again using the correct PIN."
                },
                issuer_not_available: {
                    userMessage: "Issuer not available. Try again. If the issue persists, call your card issuing bank and ask them why the transaction is failing.",
                    adminMessage: "Issuer not available. The customer should try again. If the issue persists, they should call their card issuing bank and ask them why the transaction is failing."
                },
                merchant_blacklist: {
                    userMessage: "Your card was declined. Try another payment method.",
                    adminMessage: "Merchant blacklist. The transaction was blocked because it has a high risk of being fraudulent. "
                },
                new_account_information_available: {
                    userMessage: "New account information available. Call your card issuing bank and ask them for more information.",
                    adminMessage: "New account information available. The customer should call their card issuing bank and ask them for more information."
                },
                no_action_taken: {
                    userMessage: "No action taken. Call your card issuing bank and ask them for more information.",
                    adminMessage: "No action taken. The customer should  call their card issuing bank and ask them for more information."
                },
                not_permitted: {
                    userMessage: "Not permitted. Call your card issuing bank and ask them for more information.",
                    adminMessage: "Not permitted. The customer should call their card issuing bank and ask them for more information."
                },
                offline_pin_required: {
                    userMessage: "PIN required. Try again with the correct PIN.",
                    adminMessage: "PIN required. The customer should try again with the correct PIN."
                },
                online_or_offline_pin_required: {
                    userMessage: "PIN required. Try again with the correct PIN.",
                    adminMessage: "PIN required. The customer should try again with the correct PIN."
                },
                pin_try_exceeded: {
                    userMessage: "PIN try exceeded. Use another payment method.",
                    adminMessage: "PIN try exceeded. The customer should try again with another payment method."
                },
                restricted_card: {
                    userMessage: "Your card was declined. Try another payment method.",
                    adminMessage: "Restricted card. The customer should call their card issuing bank to resolve this problem."
                },
                security_violation: {
                    userMessage: "Your card was declined. Try another payment method.",
                    adminMessage: "Security violation. The customer should call their card issuing bank to resolve this problem."
                },
                service_not_allowed: {
                    userMessage: "Your card was declined. Try another payment method.",
                    adminMessage: "Service not allowed. The customer should call their card issuing bank to resolve this problem."
                },
                stop_payment_order: {
                    userMessage: "Your card was declined. Try another payment method.",
                    adminMessage: "Stop payment order. The customer should call their card issuing bank to resolve this problem."
                },
                testmode_decline: {
                    userMessage: "Testmode decline. Use a genuine card to make payment.",
                    adminMessage: "Testmode decline. The customer should use a genuine card to make payment."
                },
                withdrawal_count_limit_exceeded: {
                    userMessage: "Withdrawal count limit exceeded. Try another payment method.",
                    adminMessage: "Withdrawal count limit exceeded. The customer has exceeded the available balance on their card. They should try another payment method."
                },
                default: {
                    userMessage: "Unknown decline. Your card was declined for an unknown reason. Call your card issuing bank and ask them why the transaction is declining.",
                    adminMessage: "Unknown decline. The customers card was declined for an unknown reason. They should calls their card issuing bank and ask them why the transaction is declining."
                },
                payment_intent_mandate_invalid: {
                    userMessage: "Inactive or canceled mandate. Please reinput your card information and try again.",
                    adminMessage: "Inactive or canceled mandate. Please have the customer reinput their card information and try again."
                }
            };

            function i(e, t) {
                var n = r[e];
                return n ? t ? n.userMessage : n.adminMessage : null
            }
            var a = {
                ALREADY_MEMBER: "already_member",
                FREE_TRIAL_NOT_ELIGIBLE: "free_trial_not_eligible"
            }
        },
        8030: function(e, t, n) {
            n.d(t, {
                Eo: function() {
                    return a
                },
                R$: function() {
                    return s
                },
                Rj: function() {
                    return r
                },
                Tu: function() {
                    return o
                },
                q2: function() {
                    return l
                }
            });
            var r = {
                    minGroupName: 3,
                    maxGroupName: 30,
                    minDisplayName: 3,
                    maxDisplayName: 30,
                    minDescription: 3,
                    maxDescription: 150,
                    maxURLName: 30,
                    minCourseName: 3,
                    maxCourseName: 50,
                    minCourseDescription: 3,
                    maxCourseDescription: 2e3,
                    maxCourseLinkLabel: 34,
                    maxCourseFileLabel: 34,
                    maxActionItems: 2e3
                },
                i = "You can change this later",
                a = function(e) {
                    var t = e.trim();
                    return "" === t ? i : t.length < r.minDisplayName ? "Group name is too short" : i
                },
                o = "skoolers",
                s = {
                    FREE: "free",
                    TRIAL: "trial",
                    ACTIVE: "active",
                    FAILING: "failing",
                    CANCELED: "canceled",
                    ARCHIVED: "archived",
                    FREE_PROMO: "free_promo"
                };

            function l(e) {
                var t, n, r;
                return !!(null != e && null !== (t = e.metadata) && void 0 !== t && t.currentMBp) || !!(null != e && null !== (n = e.metadata) && void 0 !== n && n.currentABp) || !!(null != e && null !== (r = e.metadata) && void 0 !== r && r.currentOtBp)
            }
        },
        79801: function(e, t, n) {
            n.d(t, {
                C1: function() {
                    return d
                },
                CM: function() {
                    return m
                },
                YB: function() {
                    return f
                },
                c8: function() {
                    return p
                },
                yl: function() {
                    return h
                }
            });
            var r = n(50029),
                i = n(64687),
                a = n.n(i),
                o = n(67294),
                s = n(20863),
                l = n(97778),
                c = n(25123),
                u = n(73793),
                d = function() {
                    var e = (0, o.useState)(!1),
                        t = e[0],
                        n = e[1],
                        r = (0, o.useState)(null),
                        i = r[0],
                        a = r[1],
                        s = (0, o.useCallback)(function(e) {
                            a(null != e ? e : null), n(!0)
                        }, []),
                        l = (0, o.useCallback)(function() {
                            n(!1), a(null)
                        }, []);
                    return (0, o.useMemo)(function() {
                        return [t, s, l, i]
                    }, [t, s, l, i])
                },
                p = d,
                f = (0, s.s$)() ? o.useEffect : o.useLayoutEffect;

            function m(e) {
                var t = (0, o.useState)(e),
                    n = t[0],
                    r = t[1],
                    i = (0, o.useRef)();
                return (0, o.useEffect)(function() {
                    var e;
                    null === (e = i.current) || void 0 === e || e.call(i, n), i.current = void 0
                }, [n]), [n, (0, o.useCallback)(function(e, t) {
                    r(e), t && "function" == typeof t && (i.current = t)
                }, [])]
            }

            function h() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = (0, u.bI)("currentGroup").currentGroup,
                    n = (0, o.useState)(null),
                    i = n[0],
                    s = n[1];
                return (0, o.useEffect)(function() {
                    if (!e) {
                        if (t) return s(t);
                        (0, r.Z)(a().mark(function e() {
                            var t, n, r, i, o, u;
                            return a().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, c.Z.readSelfGroups({
                                            limit: 11
                                        });
                                    case 2:
                                        if (i = (r = e.sent).data, !r.error) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 7:
                                        s(null != (u = (o = (0, l.tv)({
                                            key: l.H0.lastGroupAccessed
                                        }).value) ? null == i || null === (t = i.groups) || void 0 === t ? void 0 : t.find(function(e) {
                                            return e.name === o
                                        }) : null) ? u : null == i || null === (n = i.groups) || void 0 === n ? void 0 : n[0]);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }))()
                    }
                }, [t, e]), i
            }
        },
        71734: function(e, t, n) {
            n.d(t, {
                $O: function() {
                    return a
                },
                Lx: function() {
                    return i
                },
                fz: function() {
                    return o
                }
            });
            var r = n(97778);

            function i(e) {
                var t = e.message,
                    n = e.severity,
                    i = e.expireInMSec,
                    a = e.persist;
                (0, r.co)({
                    key: r.H0.nextPageAlert,
                    value: {
                        message: t,
                        severity: n,
                        persist: void 0 !== a && a
                    },
                    expireInMSec: i
                })
            }

            function a() {
                return (0, r.tv)({
                    key: r.H0.nextPageAlert
                })
            }

            function o() {
                (0, r.pN)({
                    key: r.H0.nextPageAlert
                })
            }
        },
        12637: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return a
                },
                i: function() {
                    return i
                }
            });
            var r = n(20863),
                i = function(e) {
                    var t, n = e.eventName,
                        i = e.eventID,
                        a = e.params;
                    (0, r.S_)() && null !== (t = window) && void 0 !== t && t.fbq && window.fbq("track", n, void 0 === a ? {} : a, i ? {
                        eventID: i
                    } : void 0)
                },
                a = function() {
                    if (!(0, r.S_)() || !(null !== (e = window) && void 0 !== e && e.fbq)) return {};
                    var e, t = /_fbp=(fb\.1\.\d+\.\d+)/.exec(window.document.cookie),
                        n = /_fbc=(fb\.1\.\d+\.[a-zA-Z0-9]+)/.exec(window.document.cookie);
                    return {
                        fbp: null == t ? void 0 : t[1],
                        fbc: null == n ? void 0 : n[1]
                    }
                }
        },
        52885: function(e, t, n) {
            n.d(t, {
                $Z: function() {
                    return y
                },
                H5: function() {
                    return s
                },
                Tr: function() {
                    return b
                },
                VF: function() {
                    return c
                },
                Xs: function() {
                    return C
                },
                cq: function() {
                    return f
                },
                gx: function() {
                    return d
                },
                hj: function() {
                    return h
                }
            });
            var r = n(90116),
                i = n(50029),
                a = n(64687),
                o = n.n(a);

            function s(e) {
                return l.apply(this, arguments)
            }

            function l() {
                return (l = (0, i.Z)(o().mark(function e(t) {
                    var n = arguments;
                    return o().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(n.length > 1 && void 0 !== n[1] && n[1])) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", window.location.reload());
                            case 3:
                                return e.next = 5, t.replace({
                                    pathname: t.pathname,
                                    query: t.query
                                }, t.asPath);
                            case 5:
                                return e.abrupt("return", e.sent);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }

            function c(e, t) {
                return u.apply(this, arguments)
            }

            function u() {
                return (u = (0, i.Z)(o().mark(function e(t, n) {
                    var r, i, a, s = arguments;
                    return o().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = n.href, i = n.as, a = s.length > 2 && void 0 !== s[2] && s[2], i = i || r, !a) {
                                    e.next = 6;
                                    break
                                }
                                return window.location.href = i, e.abrupt("return");
                            case 6:
                                return e.next = 8, t.push(r, i);
                            case 8:
                                return e.abrupt("return", e.sent);
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }

            function d(e, t) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = (0, i.Z)(o().mark(function e(t, n) {
                    var r, i, a, s = arguments;
                    return o().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = n.href, i = n.as, a = s.length > 2 && void 0 !== s[2] && s[2], i = i || r, !a) {
                                    e.next = 6;
                                    break
                                }
                                return window.location.href = i, e.abrupt("return");
                            case 6:
                                return e.next = 8, t.replace(r, i);
                            case 8:
                                return e.abrupt("return", e.sent);
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }

            function f(e, t) {
                return m.apply(this, arguments)
            }

            function m() {
                return (m = (0, i.Z)(o().mark(function e(t, n) {
                    var r, i;
                    return o().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = n.href, i = (i = n.as) || r, e.next = 4, t.replace(r, i, {
                                    shallow: !0
                                });
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }

            function h(e, t) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = (0, i.Z)(o().mark(function e(t, n) {
                    var r, i, a = arguments;
                    return o().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = !(a.length > 2) || void 0 === a[2] || a[2], (i = new URL("http://localhost" + t.asPath)).searchParams.delete(n), e.next = 5, t.replace(i.pathname + i.search, void 0, {
                                    shallow: r
                                });
                            case 5:
                                return e.abrupt("return", e.sent);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }

            function b(e) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = (0, i.Z)(o().mark(function e(t) {
                    var n, r, i, a, s;
                    return o().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.router, r = t.queries, a = void 0 !== (i = t.shallow) && i, s = new URL("http://localhost" + n.asPath), Object.keys(r).forEach(function(e) {
                                    s.searchParams.append(e, r[e])
                                }), e.next = 5, n.replace(s.pathname + s.search, void 0, {
                                    shallow: a
                                });
                            case 5:
                                return e.abrupt("return", e.sent);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }

            function y(e, t) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = (0, i.Z)(o().mark(function e(t, n) {
                    var r, i, a = arguments;
                    return o().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = !(a.length > 2) || void 0 === a[2] || a[2], i = new URL("http://localhost" + t.asPath), n.forEach(function(e) {
                                    return i.searchParams.delete(e)
                                }), e.next = 5, t.replace(i.pathname + i.search, void 0, {
                                    shallow: r
                                });
                            case 5:
                                return e.abrupt("return", e.sent);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }
            var w = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];

            function C(e) {
                var t = new URL("http://localhost" + e.asPath),
                    n = (0, r.Z)(t.searchParams);
                if (!(n.some(function(e) {
                        return "auth_code" === e[0]
                    }) && n.some(function(e) {
                        return "auth_email" === e[0]
                    })) && n.some(function(e) {
                        return w.includes(e[0])
                    })) return y(e, w)
            }
        },
        94874: function(e, t, n) {
            n.d(t, {
                g: function() {
                    return r
                }
            });
            var r = {
                goat: {
                    emoji: "\uD83D\uDC10",
                    label: "The Goat",
                    type: "mrr",
                    modalImg: "https://assets.skool.com/skool/8c0615b7f3834cfea7984c8ac41abf4a.gif"
                },
                fire: {
                    emoji: "\uD83E\uDD77",
                    percentage: .1,
                    label: "Ninja",
                    type: "mrr",
                    modalImg: "https://assets.skool.com/skool/9fcfff08c7f1468b96dea367c9f6cfaf.gif"
                },
                diamond: {
                    emoji: "\uD83D\uDC8E",
                    percentage: .5,
                    label: "Diamond",
                    type: "mrr",
                    modalImg: "https://assets.skool.com/skool/e1515b408f474ca6a911fcf8bf6c4793.gif"
                },
                crown: {
                    emoji: "\uD83D\uDC51",
                    percentage: 1,
                    label: "Crown",
                    type: "mrr",
                    modalImg: "https://assets.skool.com/skool/b267f9261ba0415cbc3a88e91167c4b9.webp"
                },
                liftoff: {
                    emoji: "\uD83D\uDE80",
                    percentage: 5,
                    label: "Rocket",
                    type: "mrr",
                    modalImg: "https://assets.skool.com/skool/64f2e98d06be42a4a84af18189c02236.gif"
                },
                hardcore: {
                    emoji: "\uD83D\uDD25",
                    label: "Fire",
                    type: "act",
                    days: 30,
                    activities: 10,
                    modalImg: "https://assets.skool.com/skool/4a789619b90745179bb76067e0485c10.gif"
                },
                star: {
                    emoji: "⭐",
                    label: "Star",
                    percentage: 1,
                    type: "disc",
                    modalImg: "https://assets.skool.com/skool/5e4d5c5fae3747de994027c599e67578.gif"
                }
            }
        },
        14988: function(e, t, n) {
            n.d(t, {
                Cx: function() {
                    return u
                },
                k9: function() {
                    return c
                }
            });
            var r = n(50029),
                i = n(64687),
                a = n.n(i),
                o = n(25123),
                s = Error("token is required"),
                l = Error("invalid timeout"),
                c = Error("wait timeout");

            function u(e) {
                var t = e.token,
                    n = e.userID,
                    i = e.timeoutMS,
                    u = void 0 === i ? 1e4 : i,
                    d = e.successState,
                    p = void 0 === d ? "completed" : d;
                return new Promise(function(e, i) {
                    if (!t) {
                        i(s);
                        return
                    }
                    if (u <= 0) {
                        i(l);
                        return
                    }
                    var d, f, m = ["wat:".concat(n || "", ":").concat(t)];
                    f = o.Z.subscribe({
                        topics: m,
                        fn: function(t) {
                            var n = t.state;
                            o.Z.unsubscribe({
                                topics: m,
                                id: f
                            }), d = !0, n === p ? e(n) : i(n)
                        }
                    }), (0, r.Z)(a().mark(function n() {
                        var r, s, l;
                        return a().wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, o.Z.getWait({
                                        waitToken: t
                                    });
                                case 2:
                                    s = (r = n.sent).data, l = r.error, d || l || "in-progress" === s || (o.Z.unsubscribe({
                                        topics: m,
                                        id: f
                                    }), d = !0, s === p ? e(s) : i(s));
                                case 6:
                                case "end":
                                    return n.stop()
                            }
                        }, n)
                    }))(), setTimeout(function() {
                        d || (o.Z.unsubscribe({
                            topics: m,
                            id: f
                        }), i(c))
                    }, u)
                })
            }
        },
        63233: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return eO
                }
            });
            var r = n(50029),
                i = n(59499),
                a = n(64687),
                o = n.n(a),
                s = n(67294),
                l = n(11865),
                c = n.n(l),
                u = n(92230),
                d = n(10329),
                p = n(63023),
                f = n(87461),
                m = n(52885),
                h = n(11163),
                g = n(25123),
                b = n(91425),
                v = n(53907),
                y = n(8030),
                x = n(71734),
                w = n(31865),
                C = n(48939),
                k = n(20863),
                j = n(97778),
                O = n(73793),
                P = n(24252),
                I = n(80008),
                _ = n.n(I),
                M = n(13886),
                Z = n(66482),
                S = n(50378),
                N = n(3284),
                T = S.ZP.div.withConfig({
                    displayName: "styled__FormContentWrapper",
                    componentId: "sc-mul7iy-0"
                })(["display:flex;flex-direction:column;"]),
                E = (0, S.iv)(["height:auto;margin-top:16px;opacity:1;"]),
                R = S.ZP.div.withConfig({
                    displayName: "styled__AffiliateRow",
                    componentId: "sc-mul7iy-1"
                })(["justify-content:center;display:flex;flex-wrap:wrap;transition:opacity 300ms ease;height:0px;margin-top:0px;opacity:0;margin-bottom:32px;", ""], function(e) {
                    return e.$affiliateUser && E
                }),
                D = S.ZP.div.withConfig({
                    displayName: "styled__ReferralUserRow",
                    componentId: "sc-mul7iy-2"
                })(["max-width:100%;display:flex;"]),
                $ = S.ZP.div.withConfig({
                    displayName: "styled__BottomInfo",
                    componentId: "sc-mul7iy-3"
                })(["display:flex;flex-direction:column;", ";a{color:", ";text-decoration:underline;", ";}"], N.c.t11, b.O9.n7, N.c.t11),
                L = S.ZP.span.withConfig({
                    displayName: "styled__AffiliateReferText",
                    componentId: "sc-mul7iy-4"
                })(["white-space:nowrap;", ""], N.c.t7),
                z = S.ZP.span.withConfig({
                    displayName: "styled__AffiliateReferName",
                    componentId: "sc-mul7iy-5"
                })(["", " ", ""], N.c.t7, N.c.ellipsis),
                q = S.ZP.div.withConfig({
                    displayName: "styled__FirstChargeText",
                    componentId: "sc-mul7iy-6"
                })(["margin-top:8px;", ""], N.c.t11),
                B = (0, S.ZP)(u.z).withConfig({
                    displayName: "styled__CreateSkoolButton",
                    componentId: "sc-mul7iy-7"
                })(["width:100%;height:", "px;margin-top:24px;"], function(e) {
                    return e.theme.isMobile ? 40 : 48
                }),
                G = n(14988),
                W = n(85893),
                F = "You can change this later",
                A = function(e) {
                    var t, n, i = e.affiliateCode,
                        a = e.groupId,
                        l = e.affiliateReferrer,
                        c = (0, O.bI)("self"),
                        u = c.self,
                        p = c.dispatch,
                        I = (0, h.useRouter)(),
                        S = (0, s.useState)(""),
                        N = S[0],
                        E = S[1],
                        A = (0, s.useState)(null),
                        U = A[0],
                        H = A[1],
                        V = (0, s.useState)(""),
                        Y = V[0],
                        J = V[1],
                        K = (0, s.useState)(b.O9.defaultGroupColors[Math.floor(Math.random() * b.O9.defaultGroupColors.length)])[0],
                        X = (0, s.useState)(!1),
                        Q = X[0],
                        ee = X[1],
                        et = (0, s.useState)(!1),
                        en = et[0],
                        er = et[1],
                        ei = (0, s.useState)(null),
                        ea = ei[0],
                        eo = ei[1],
                        es = (0, s.useState)(null),
                        el = es[0],
                        ec = es[1],
                        eu = (0, s.useRef)((0, k.Vj)()),
                        ed = (0, C.kU)({
                            tab: "terms"
                        }),
                        ep = (0, s.useRef)(),
                        ef = (0, s.useState)(F),
                        em = ef[0],
                        eh = ef[1],
                        eg = (0, s.useRef)(null == I || null === (n = I.query) || void 0 === n ? void 0 : n.utm_source);
                    (0, s.useEffect)(function() {
                        (0, Z.P3)({
                            eventName: Z.qI.createGroupStart,
                            metadata: {
                                referrer: l
                            }
                        })
                    }, []), (0, s.useEffect)(function() {
                        (0, r.Z)(o().mark(function e() {
                            var t, n, r, s, l;
                            return o().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(t = i) && (n = (0, j.tv)({
                                                key: j.H0.savedAffiliateCode
                                            }).value) && (t = n), !a) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.next = 5, g.Z.getAffiliateCustomerData({
                                            currentGroupID: a
                                        });
                                    case 5:
                                        s = (r = e.sent).data, r.error && p(w.bI, {
                                            message: "There was an issue with your request regarding affiliate data, please try again.",
                                            severity: "error"
                                        }), null != s && s.affiliateUser ? ec(null == s ? void 0 : s.affiliateUser) : ec(null), e.next = 18;
                                        break;
                                    case 12:
                                        if (!t) {
                                            e.next = 18;
                                            break
                                        }
                                        return e.next = 15, g.Z.getAffiliateCustomerDataNoAuth({
                                            affiliateCode: t
                                        });
                                    case 15:
                                        null != (l = e.sent.data) && l.affiliateUser ? ec(null == l ? void 0 : l.affiliateUser) : ec(null);
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }))()
                    }, [p, a, i, u]);
                    var eb = (0, s.useCallback)((t = (0, r.Z)(o().mark(function e(t) {
                            var n, r, i, s, l, c, d, f, h, b, v, k, j, O, P, _, M, S, T;
                            return o().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), ee(!0), e.next = 4, g.Z.setupCreateGroup({
                                            utmSource: eg.current
                                        });
                                    case 4:
                                        if (s = (i = e.sent).data, !(l = i.error)) {
                                            e.next = 12;
                                            break
                                        }
                                        return f = null !== (c = null === (d = l.data) || void 0 === d || null === (d = d.fields) || void 0 === d || null === (d = d[0]) || void 0 === d ? void 0 : d.error) && void 0 !== c ? c : "There was an issue with your request, please try again.", p(w.bI, {
                                            message: f,
                                            severity: "error"
                                        }), ee(!1), e.abrupt("return");
                                    case 12:
                                        return h = s.clientSecret, b = s.immediate, v = s.waitToken, h && eo(h), k = b || v ? "paymentIntent" : "setupIntent", e.next = 17, g.Z.validateGroupName({
                                            name: N.trim()
                                        });
                                    case 17:
                                        if (!(j = e.sent.error)) {
                                            e.next = 23;
                                            break
                                        }
                                        return H(null == j || null === (O = j.data) || void 0 === O || null === (O = O.fields) || void 0 === O || null === (O = O[0]) || void 0 === O ? void 0 : O.error), ee(!1), e.abrupt("return");
                                    case 23:
                                        return e.prev = 23, e.next = 26, ep.current.handleIntentConfirmation(k);
                                    case 26:
                                        P = e.sent, e.next = 33;
                                        break;
                                    case 29:
                                        return e.prev = 29, e.t0 = e.catch(23), ee(!1), e.abrupt("return");
                                    case 33:
                                        return e.next = 35, g.Z.createGroup({
                                            displayName: N.trim(),
                                            initials: Y,
                                            color: K,
                                            privacy: 1,
                                            membership: 1,
                                            token: eu.current,
                                            paymentToken: P,
                                            currentGroupID: a || void 0
                                        });
                                    case 35:
                                        if (M = (_ = e.sent).error, S = _.data, !M) {
                                            e.next = 42;
                                            break
                                        }
                                        return 422 === M.status && null != M && null !== (T = M.data) && void 0 !== T && null !== (T = T.fields) && void 0 !== T && T.length ? M.data.fields.forEach(function(e) {
                                            e.name, H(e.error)
                                        }) : H("Failed to create group"), ee(!1), e.abrupt("return");
                                    case 42:
                                        if (!v) {
                                            e.next = 53;
                                            break
                                        }
                                        return e.prev = 43, e.next = 46, (0, G.Cx)({
                                            token: v,
                                            userID: null == u ? void 0 : u.id,
                                            timeoutMS: 6e4
                                        });
                                    case 46:
                                        e.next = 53;
                                        break;
                                    case 48:
                                        return e.prev = 48, e.t1 = e.catch(43), H("Failed to create group"), ee(!1), e.abrupt("return");
                                    case 53:
                                        return (0, x.Lx)({
                                            message: "Group was created"
                                        }), null === (n = window) || void 0 === n || null === (r = n.gtag) || void 0 === r || r.call(n, "event", "conversion", {
                                            send_to: "AW-16683458508/S_8oCIuAr84ZEMy_pZM-"
                                        }), (0, Z.uR)(Z.qI.startTrialSignUp), e.next = 58, g.Z.joinGroup({
                                            groupName: y.Tu
                                        });
                                    case 58:
                                        return e.next = 60, g.Z.pinGroup({
                                            group: y.Tu
                                        });
                                    case 60:
                                        return e.next = 62, g.Z.pinGroup({
                                            group: S.name
                                        });
                                    case 62:
                                        return (0, Z.P3)({
                                            eventName: Z.qI.createGroupEnd,
                                            metadata: {
                                                group_name: S.name
                                            }
                                        }), e.next = 65, (0, m.VF)(I, (0, C.AZ)({
                                            groupName: S.name
                                        }));
                                    case 65:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [23, 29],
                                [43, 48]
                            ])
                        })), function(e) {
                            return t.apply(this, arguments)
                        }), [K, N, Y, I, a, u, p]),
                        ev = N.trim().length >= y.Rj.minDisplayName && N.trim().length <= y.Rj.maxDisplayName,
                        ey = (0, s.useCallback)(function() {
                            var e = N.trim();
                            if ("" === e) {
                                eh(F);
                                return
                            }
                            if (e.length < y.Rj.minDisplayName) {
                                eh("Group name is too short");
                                return
                            }
                            eh(F)
                        }, [N]),
                        ex = !!U || !ev || !Y || !K || !en,
                        ew = (0, s.useCallback)(function(e) {
                            var t;
                            H(!1), E(e.target.value), J((0, k.$g)(e.target.value)), null != e && null !== (t = e.target) && void 0 !== t && t.value && e.target.value.trim().length >= y.Rj.minDisplayName && eh(F)
                        }, []),
                        eC = (0, s.useCallback)(function(e) {
                            er(e || null === e)
                        }, []);
                    return (0, W.jsxs)(T, {
                        children: [(0, W.jsxs)(d.s, {
                            marginBottom: 32,
                            children: [(0, W.jsxs)(R, {
                                $affiliateUser: el,
                                children: [(0, W.jsx)(L, {
                                    children: "You were referred by "
                                }), "\xa0 \xa0", (0, W.jsxs)(D, {
                                    children: [(0, W.jsx)(f.Z, {
                                        disableLink: !0,
                                        size: 25,
                                        user: el
                                    }), "\xa0", (0, W.jsx)(z, {
                                        children: "".concat(null == el ? void 0 : el.firstName, " ").concat(null == el ? void 0 : el.lastName)
                                    })]
                                })]
                            }), (0, W.jsx)(P.I, {
                                autoFocus: !0,
                                id: "display-name",
                                label: "Group name",
                                value: N,
                                onBlur: ey,
                                onChange: ew,
                                error: U,
                                disabled: !!Q,
                                style: {
                                    background: Q ? b.O9.n2 : b.O9.n1
                                },
                                infoLabel: em,
                                maxCharacters: y.Rj.maxDisplayName,
                                inputProps: {
                                    "data-testid": "group-name-input"
                                }
                            })]
                        }), (0, W.jsxs)($, {
                            children: [(0, W.jsx)(M.Z, {
                                ref: ep,
                                intentClientSecret: ea,
                                paymentElementOnChange: eC,
                                isLoading: Q
                            }), (0, W.jsxs)(q, {
                                children: ["Your first charge will be on ".concat(_()().add(14, "days").format("MMMM Do, YYYY"), " for $99. Cancel anytime with 1-click. By clicking below, you accept our "), (0, W.jsx)(v.r, {
                                    href: ed.href,
                                    as: ed.as,
                                    newTab: !0,
                                    label: "terms"
                                }), "."]
                            })]
                        }), (0, W.jsx)(B, {
                            type: "submit",
                            onClick: eb,
                            disabled: Q || ex,
                            label: Q ? "Processing..." : "Start Free Trial"
                        })]
                    })
                },
                U = (0, S.iv)(["margin-top:40px;"]),
                H = S.ZP.div.withConfig({
                    displayName: "styled__AuthFormWrapper",
                    componentId: "sc-1xwv0bh-0"
                })(["display:flex;flex-direction:column;align-items:center;> a:first-child{margin-bottom:32px;}", ""], function(e) {
                    return e.theme.isMobile && U
                }),
                V = (0, S.iv)(["margin-bottom:0px;"]),
                Y = S.ZP.div.withConfig({
                    displayName: "styled__AuthFormTitle",
                    componentId: "sc-1xwv0bh-1"
                })(["margin-bottom:32px;display:flex;flex-direction:column;align-items:center;text-align:center;", " ", ""], N.c.t1, function(e) {
                    return e.$showCreateCommunity && V
                }),
                J = S.ZP.div.withConfig({
                    displayName: "styled__ModeSwitcher",
                    componentId: "sc-1xwv0bh-2"
                })(["display:flex;align-items:center;", " > button{height:fit-content;", "}"], N.c.t7, N.c.t7),
                K = S.ZP.div.withConfig({
                    displayName: "styled__Subtitle",
                    componentId: "sc-1xwv0bh-3"
                })(["margin-top:8px;", ""], N.c.t7),
                X = S.ZP.div.withConfig({
                    displayName: "styled__AffiliateRow",
                    componentId: "sc-1xwv0bh-4"
                })(["justify-content:center;display:flex;flex-wrap:wrap;margin-top:12px;", ""], N.c.t7),
                Q = S.ZP.div.withConfig({
                    displayName: "styled__ReferralUserRow",
                    componentId: "sc-1xwv0bh-5"
                })(["max-width:100%;align-items:center;display:flex;> span{", "}"], N.c.ellipsis),
                ee = n(17674),
                et = S.ZP.form.withConfig({
                    displayName: "styled__SignUpFormWrapper",
                    componentId: "sc-1bk28fy-0"
                })(["width:100%;display:flex;flex-direction:column;> div{width:100%;}> button{width:100%;margin-bottom:16px;}"]),
                en = S.ZP.div.withConfig({
                    displayName: "styled__SignUpInputs",
                    componentId: "sc-1bk28fy-1"
                })(["gap:8px;display:flex;margin-bottom:24px;flex-direction:column;"]),
                er = (0, S.iv)(["align-items:flex-start;display:block;margin-bottom:26px;"]),
                ei = S.ZP.p.withConfig({
                    displayName: "styled__TermsWrapper",
                    componentId: "sc-1bk28fy-2"
                })(["width:100%;margin:0px 0px 24px 0px;color:", ";text-align:center;", " a{text-decoration:underline;}", ""], b.O9.n5, N.c.t11, function(e) {
                    return e.theme.isMobile && er
                }),
                ea = n(3241),
                eo = S.ZP.form.withConfig({
                    displayName: "styled__EmailVerificationWrapper",
                    componentId: "sc-as714p-0"
                })(["display:flex;align-items:center;flex-direction:column;> h2{margin:0px 0px 8px 0px;", "}> p{margin:0px 0px 32px 0px;text-align:center;", "}> div{width:100%;}> button{margin:", ";width:100%;}"], N.c.t1, N.c.t7, function(e) {
                    return e.theme.isMobile ? "16px 0px 24px 0" : "16px 0px"
                }),
                es = S.ZP.div.withConfig({
                    displayName: "styled__BottomRow",
                    componentId: "sc-as714p-1"
                })(["display:flex;flex-direction:column;gap:4px;", " text-align:center;a{cursor:pointer;height:fit-content;color:", ";", " &:hover{text-decoration:underline;}}span{color:", ";}"], N.c.t7, b.O9.sd1, N.c.t7, b.O9.n5),
                el = (0, s.memo)(function(e) {
                    var t, n = e.email,
                        i = e.onClose,
                        a = e.verified,
                        l = e.password,
                        c = e.onSuccess,
                        d = e.inviteCode,
                        p = e.onResendCode,
                        f = e.signupToken,
                        m = (0, O.bI)("isMobile", "currentGroup"),
                        b = m.dispatch,
                        v = m.isMobile,
                        y = m.currentGroup,
                        x = (0, s.useState)(""),
                        C = x[0],
                        k = x[1],
                        I = (0, s.useState)(!1),
                        _ = I[0],
                        M = I[1],
                        S = (0, s.useState)(""),
                        N = S[0],
                        T = S[1],
                        E = (0, s.useState)(0),
                        R = E[0],
                        D = E[1],
                        $ = (0, s.useRef)(),
                        L = (0, h.useRouter)(),
                        z = L.pathname,
                        q = L.query,
                        B = "/signup" === z,
                        G = R > 0;
                    (0, s.useEffect)(function() {
                        a || (0, Z.P3)({
                            eventName: Z.qI.accountEmailVerificationStart
                        })
                    }, [a]), (0, s.useEffect)(function() {
                        if (G) return $.current = setInterval(function() {
                                D(function(e) {
                                    return e <= 0 ? 0 : e - 1
                                })
                            }, 1e3),
                            function() {
                                clearInterval($.current)
                            }
                    }, [G]);
                    var F = (0, s.useCallback)((t = (0, r.Z)(o().mark(function e(t, r) {
                        var i, a, s, u, p;
                        return o().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return null == t || t.preventDefault(), null == t || t.stopPropagation(), M(!0), e.next = 5, g.Z.verifySignUp({
                                        code: r || C,
                                        token: f,
                                        invite: d,
                                        createGroupIntent: B ? "signup" : void 0,
                                        membershipGroupID: null != y && null !== (i = y.metadata) && void 0 !== i && i.currentMBp ? y.id : void 0
                                    });
                                case 5:
                                    if (!e.sent.error) {
                                        e.next = 14;
                                        break
                                    }
                                    a = "Invalid code", (0, Z.P3)({
                                        eventName: Z.qI.formError,
                                        metadata: {
                                            form: "email_verification",
                                            error_message: a
                                        }
                                    }), T(a), M(!1), e.next = 37;
                                    break;
                                case 14:
                                    return e.next = 16, g.Z.login({
                                        email: n,
                                        password: l
                                    });
                                case 16:
                                    if (!(s = (0, j.tv)({
                                            key: j.H0.savedAffiliateCode
                                        }).value)) {
                                        e.next = 23;
                                        break
                                    }
                                    return e.next = 20, g.Z.setAffiliateCustomerData({
                                        affiliateCode: s
                                    });
                                case 20:
                                    (u = e.sent.error) && console.error("Failed to set affiliate customer data", u);
                                case 23:
                                    if (!q.group) {
                                        e.next = 27;
                                        break
                                    }
                                    p = Z.qI.createAccountGroup, e.next = 34;
                                    break;
                                case 27:
                                    e.t0 = z, e.next = "/signup" === e.t0 ? 30 : "/" === e.t0 ? 32 : "/discovery" === e.t0 ? 32 : 34;
                                    break;
                                case 30:
                                    return p = Z.qI.createAccountSignUp, e.abrupt("break", 34);
                                case 32:
                                    return p = Z.qI.createAccountDiscovery, e.abrupt("break", 34);
                                case 34:
                                    (0, Z.uR)(p), r || (0, Z.uR)(Z.qI.accountEmailVerificationEnd), null == c || c();
                                case 37:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function(e, n) {
                        return t.apply(this, arguments)
                    }), [C, f, d, n, l, q.group, c, z, B, y]);
                    (0, s.useEffect)(function() {
                        a && F(null, a)
                    }, [a, F]);
                    var A = (0, s.useCallback)(function(e) {
                            T(null), k(e.target.value)
                        }, []),
                        U = (0, s.useCallback)((0, r.Z)(o().mark(function e() {
                            return o().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return (0, Z.P3)({
                                            eventName: Z.qI.resendEmailVerificationCode
                                        }), e.next = 3, p();
                                    case 3:
                                        e.sent.error || (D(60), b(w.bI, {
                                            message: "Email resent"
                                        }));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [b, p]),
                        H = (0, s.useCallback)(function() {
                            (0, Z.P3)({
                                eventName: Z.qI.emailVerificationCancel
                            }), null == i || i()
                        }, [i]);
                    return a ? null : (0, W.jsx)(ea.u_, {
                        open: !0,
                        size: "small",
                        noBackdrop: !v && "/signup" !== z,
                        children: (0, W.jsxs)(eo, {
                            onSubmit: F,
                            children: [(0, W.jsx)("h2", {
                                children: "We sent you a code"
                            }), (0, W.jsx)("p", {
                                children: "Enter it below to verify ".concat(n)
                            }), (0, W.jsx)(P.I, {
                                onChange: A,
                                label: "Verification code",
                                value: C,
                                error: N,
                                autoFocus: !0
                            }), (0, W.jsx)(u.z, {
                                type: "submit",
                                label: "Next",
                                loading: _,
                                disabled: 0 === C.length
                            }), (0, W.jsxs)(es, {
                                children: [(0, W.jsxs)("div", {
                                    children: [(0, W.jsx)("span", {
                                        children: "Didn't get the email?"
                                    }), "\xa0", G ? (0, W.jsx)("span", {
                                        children: "Resend in ".concat(R, "s")
                                    }) : (0, W.jsx)("a", {
                                        onClick: U,
                                        children: "Resend"
                                    })]
                                }), (0, W.jsx)("div", {
                                    children: (0, W.jsx)("a", {
                                        onClick: H,
                                        children: "Use a different email"
                                    })
                                })]
                            })]
                        })
                    })
                }),
                ec = (0, s.memo)(function(e) {
                    var t, n = e.onSuccess,
                        i = e.inviteCode,
                        a = (0, O.bI)("isMobile"),
                        l = a.isMobile,
                        c = a.dispatch,
                        d = (0, s.useState)(!1),
                        p = d[0],
                        f = d[1],
                        m = (0, s.useState)(null),
                        b = m[0],
                        y = m[1],
                        x = (0, s.useState)(""),
                        C = x[0],
                        k = x[1],
                        j = (0, s.useState)(""),
                        I = j[0],
                        _ = j[1],
                        M = (0, s.useState)(""),
                        S = M[0],
                        N = M[1],
                        T = (0, s.useState)(null),
                        E = T[0],
                        R = T[1],
                        D = (0, s.useState)(""),
                        $ = D[0],
                        L = D[1],
                        z = (0, s.useState)({}),
                        q = z[0],
                        B = z[1],
                        G = "/signup" === (0, h.useRouter)().pathname,
                        F = (0, s.useCallback)(function(e) {
                            B({}), k(e.target.value)
                        }, []),
                        A = (0, s.useCallback)(function(e) {
                            B({}), _(e.target.value)
                        }, []),
                        U = (0, s.useCallback)(function(e) {
                            B({}), L(e.target.value)
                        }, []),
                        H = (0, s.useCallback)(function(e) {
                            B({}), N(e.target.value)
                        }, []),
                        V = (0, s.useCallback)((t = (0, r.Z)(o().mark(function e(t) {
                            var n, r, a, s, l, u, d, p, m;
                            return o().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return null == t || t.preventDefault(), f(!0), e.next = 4, g.Z.requestSignUp({
                                            firstName: C,
                                            lastName: I,
                                            email: $,
                                            password: S,
                                            invite: i
                                        });
                                    case 4:
                                        if (r = (n = e.sent).data, a = n.error, s = {}, !a) {
                                            e.next = 15;
                                            break
                                        }
                                        return (null == a ? void 0 : a.status) === 429 && c(w.bI, {
                                            message: "Signup failed. Try again later.",
                                            severity: "error"
                                        }), 422 === a.status && null != a && null !== (l = a.data) && void 0 !== l && null !== (l = l.fields) && void 0 !== l && l.length && a.data.fields.forEach(function(e) {
                                            switch (e.name) {
                                                case "first_name":
                                                    s.firstName = e.error;
                                                    break;
                                                case "last_name":
                                                    s.lastName = e.error;
                                                    break;
                                                case "email":
                                                    s.email = "Email is already in use" === e.error ? "Email is already in use. Please log in." : e.error;
                                                    break;
                                                default:
                                                    s.password = e.error
                                            }
                                        }), (0, Z.P3)({
                                            eventName: Z.qI.formError,
                                            metadata: {
                                                form: "create_account",
                                                error_message: Object.values(s)[0]
                                            }
                                        }), B(s), f(!1), e.abrupt("return", {
                                            error: a
                                        });
                                    case 15:
                                        return t && (0, Z.P3)({
                                            eventName: Z.qI.createUserEnd
                                        }), u = r.split(":"), p = (d = (0, ee.Z)(u, 2))[0], m = d[1], y(p), R(m), f(!1), e.abrupt("return", {});
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(e) {
                            return t.apply(this, arguments)
                        }), [$, C, I, S, i, c]),
                        Y = (0, s.useCallback)(function() {
                            y(null)
                        }, []),
                        J = (0, s.useMemo)(function() {
                            return (0, W.jsx)(el, {
                                email: $,
                                verified: E,
                                password: S,
                                inviteCode: i,
                                signupToken: b,
                                onSuccess: n,
                                onResendCode: V,
                                onClose: Y
                            })
                        }, [$, E, S, i, b, n, V, Y]);
                    return b && !G ? J : (0, W.jsxs)(et, {
                        onSubmit: V,
                        children: [(0, W.jsxs)(en, {
                            children: [(0, W.jsx)(P.I, {
                                value: C,
                                id: "first_name",
                                label: "First name",
                                autoFocus: !l,
                                error: q.firstName,
                                onChange: F
                            }), (0, W.jsx)(P.I, {
                                id: "last_name",
                                label: "Last name",
                                type: "text",
                                value: I,
                                onChange: A,
                                error: q.lastName
                            }), (0, W.jsx)(P.I, {
                                id: "email",
                                label: "Email",
                                type: "email",
                                value: $,
                                error: q.email,
                                onChange: U
                            }), (0, W.jsx)(P.I, {
                                id: "password",
                                label: "Password",
                                type: "password",
                                value: S,
                                onChange: H,
                                error: q.password
                            })]
                        }), (0, W.jsx)(u.z, {
                            type: "submit",
                            label: "Sign Up",
                            loading: p,
                            disabled: !C || !I || !$ || !S
                        }), (0, W.jsxs)(ei, {
                            children: [(0, W.jsxs)("span", {
                                children: ["By signing up, you accept our", "\xa0"]
                            }), (0, W.jsx)(v.r, {
                                href: "/legal?t=terms",
                                newTab: !0,
                                children: "terms"
                            }), (0, W.jsxs)("span", {
                                children: ["\xa0", "and", "\xa0"]
                            }), (0, W.jsx)(v.r, {
                                href: "/legal?t=privacy",
                                newTab: !0,
                                children: "privacy policy"
                            }), (0, W.jsx)("span", {
                                children: "."
                            })]
                        }), b && G && J]
                    })
                }),
                eu = S.ZP.form.withConfig({
                    displayName: "styled__SignUpFormWrapper",
                    componentId: "sc-1xe4ng4-0"
                })(["width:100%;display:flex;flex-direction:column;> div{width:100%;}> button{width:100%;margin-bottom:16px;}"]),
                ed = S.ZP.div.withConfig({
                    displayName: "styled__SignUpInputs",
                    componentId: "sc-1xe4ng4-1"
                })(["gap:14px;display:flex;margin-bottom:24px;flex-direction:column;"]),
                ep = (0, S.ZP)(u.z).withConfig({
                    displayName: "styled__ForgotPasswordButton",
                    componentId: "sc-1xe4ng4-2"
                })(["width:fit-content !important;height:fit-content;align-self:flex-start;", ""], N.c.t7),
                ef = (0, S.ZP)(u.z).withConfig({
                    displayName: "styled__LoginWithCodeButton",
                    componentId: "sc-1xe4ng4-3"
                })(["height:auto;"]),
                em = n(79801),
                eh = n(56640),
                eg = n(41211),
                eb = n(97628),
                ev = (0, s.memo)(function(e) {
                    var t, n, i = e.onSuccess,
                        a = e.setShowForgotPassword,
                        l = (0, s.useState)(!1),
                        c = l[0],
                        d = l[1],
                        p = (0, s.useState)(""),
                        f = p[0],
                        m = p[1],
                        h = (0, s.useState)(function() {
                            return (0, j.tv)({
                                key: j.H0.savedEmail
                            }).value || ""
                        }),
                        b = h[0],
                        v = h[1],
                        y = (0, s.useState)({}),
                        x = y[0],
                        w = y[1],
                        C = (0, s.useState)(null),
                        O = C[0],
                        I = C[1],
                        _ = (0, j.tv)({
                            key: j.H0.savedEmail
                        }).value,
                        M = (0, em.C1)(),
                        S = (0, ee.Z)(M, 3),
                        N = S[0],
                        T = S[1],
                        E = S[2],
                        R = (0, s.useRef)(),
                        D = (0, s.useRef)(),
                        $ = (0, eg.M)(R),
                        L = $.count,
                        z = $.startTimer,
                        q = $.resetTimer;
                    (0, s.useEffect)(function() {
                        _ && v(_)
                    }, [_]);
                    var B = (0, s.useCallback)(function() {
                            v(""), (0, j.pN)({
                                key: j.H0.savedEmail
                            })
                        }, []),
                        G = (0, s.useCallback)(function(e) {
                            w({}), v(e.target.value)
                        }, []),
                        F = (0, s.useCallback)(function(e) {
                            w({}), m(e.target.value)
                        }, []),
                        A = (0, s.useCallback)((t = (0, r.Z)(o().mark(function e(t) {
                            var n, r, a;
                            return o().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), d(!0), w({}), e.next = 5, g.Z.login({
                                            email: b,
                                            password: f
                                        });
                                    case 5:
                                        if (n = e.sent.error, r = {}, !n) {
                                            e.next = 14;
                                            break
                                        }
                                        return 401 === n.status ? r.password = "Incorrect password" : 422 === n.status && null != n && null !== (a = n.data) && void 0 !== a && null !== (a = a.fields) && void 0 !== a && a.length && n.data.fields.forEach(function(e) {
                                            "email" === e.name ? r.email = e.error : r.password = e.error
                                        }), (0, Z.P3)({
                                            eventName: Z.qI.formError,
                                            metadata: {
                                                form: "login",
                                                error_message: Object.values(r)[0]
                                            }
                                        }), w(r), d(!1), e.abrupt("return");
                                    case 14:
                                        (0, Z.uR)(Z.qI.loginUserEnd), (0, j.co)({
                                            key: j.H0.savedEmail,
                                            value: b
                                        }), i && i(), d(!1);
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(e) {
                            return t.apply(this, arguments)
                        }), [b, i, f]),
                        U = (0, s.useCallback)(function() {
                            a(!0)
                        }, [a]),
                        H = (0, s.useCallback)((0, r.Z)(o().mark(function e() {
                            var t;
                            return o().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return (0, Z.P3)({
                                            eventName: Z.qI.resendLoginCode
                                        }), e.next = 3, g.Z.requestLoginCode({
                                            email: b
                                        });
                                    case 3:
                                        e.sent.error && (t = "Request failed. Please try again.", (0, Z.P3)({
                                            eventName: Z.qI.formError,
                                            metadata: {
                                                form: "request_login_code",
                                                error_message: t
                                            }
                                        }), I(t));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [b]),
                        V = (0, s.useCallback)((0, r.Z)(o().mark(function e() {
                            var t, n, r, i, a;
                            return o().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (b) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (w({}), !((null == D ? void 0 : D.current) === b && null != R && R.current)) {
                                            e.next = 6;
                                            break
                                        }
                                        return T(), e.abrupt("return");
                                    case 6:
                                        return (0, Z.P3)({
                                            eventName: Z.qI.loginWithCodeStart
                                        }), e.next = 9, g.Z.requestLoginCode({
                                            email: b
                                        });
                                    case 9:
                                        if (!(t = e.sent.error)) {
                                            e.next = 16;
                                            break
                                        }
                                        return a = 422 === t.status && (null == t || null === (n = t.data) || void 0 === n || null === (n = n.fields) || void 0 === n || null === (n = n[0]) || void 0 === n ? void 0 : n.name) === "email" ? null !== (r = null === (i = t.data.fields[0]) || void 0 === i ? void 0 : i.error) && void 0 !== r ? r : "Invalid email" : "Request failed. Please try again.", (0, Z.P3)({
                                            eventName: Z.qI.formError,
                                            metadata: {
                                                form: "request_login_code",
                                                error_message: a
                                            }
                                        }), w({
                                            email: a
                                        }), e.abrupt("return");
                                    case 16:
                                        q(), T(), z(), D.current = b;
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [b, T, q, z]),
                        Y = (0, s.useCallback)((n = (0, r.Z)(o().mark(function e(t) {
                            var n, r, a, s;
                            return o().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.code, r = t.email, I(null), e.next = 4, g.Z.loginWithCode({
                                            code: n,
                                            email: r
                                        });
                                    case 4:
                                        if (!(a = e.sent.error)) {
                                            e.next = 11;
                                            break
                                        }
                                        return s = 429 === a.status ? "Login failed. Too many attempts." : "Login failed. Please try again.", (0, Z.P3)({
                                            eventName: Z.qI.formError,
                                            metadata: {
                                                form: "login_code",
                                                error_message: s
                                            }
                                        }), I(s), e.abrupt("return");
                                    case 11:
                                        (0, Z.uR)(Z.qI.loginUserEnd, {
                                            method: "code"
                                        }), null == i || i();
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(e) {
                            return n.apply(this, arguments)
                        }), [i]),
                        J = (0, s.useCallback)((0, r.Z)(o().mark(function e() {
                            return o().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return I(null), e.next = 3, H();
                                    case 3:
                                        q(), z();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [H, q, z]),
                        K = (0, s.useCallback)(function() {
                            I(null), E()
                        }, [E]),
                        X = (0, s.useMemo)(function() {
                            return !!b && (0, k.vV)(b)
                        }, [b]);
                    return (0, W.jsxs)(W.Fragment, {
                        children: [(0, W.jsxs)(eu, {
                            onSubmit: A,
                            children: [(0, W.jsxs)(ed, {
                                children: [(0, W.jsx)(P.I, {
                                    id: "email",
                                    label: "Email",
                                    type: "email",
                                    value: b,
                                    error: x.email,
                                    onChange: G,
                                    onClear: B
                                }), (0, W.jsx)(P.I, {
                                    id: "password",
                                    label: "Password",
                                    type: "password",
                                    value: f,
                                    onChange: F,
                                    error: x.password
                                })]
                            }), (0, W.jsxs)(eb.X, {
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: 16,
                                children: [(0, W.jsx)(ep, {
                                    variant: "link",
                                    label: "Forgot password?",
                                    onClick: U
                                }), X && (0, W.jsx)(ef, {
                                    variant: "link",
                                    label: "Log in with a code",
                                    typography: "t7",
                                    onClick: V
                                })]
                            }), (0, W.jsx)(u.z, {
                                type: "submit",
                                label: "Log In",
                                loading: c,
                                disabled: !b || !f
                            })]
                        }), N && (0, W.jsx)(eh.W, {
                            email: b,
                            onClose: K,
                            onSubmit: Y,
                            onResendEmail: J,
                            loginCodeError: O,
                            secondsRemaining: L
                        })]
                    })
                }),
                ey = S.ZP.form.withConfig({
                    displayName: "styled__ForgotPasswordFormWrapper",
                    componentId: "sc-1cfgghb-0"
                })(["width:100%;display:flex;flex-direction:column;> div{width:100%;}> button{width:100%;margin-top:16px;}"]),
                ex = S.ZP.div.withConfig({
                    displayName: "styled__ForgotPasswordFormTitle",
                    componentId: "sc-1cfgghb-1"
                })(["text-align:center;margin-bottom:16px;", ""], N.c.t1),
                ew = S.ZP.div.withConfig({
                    displayName: "styled__ForgotPasswordFormSubtitle",
                    componentId: "sc-1cfgghb-2"
                })(["text-align:center;", ""], N.c.t7),
                eC = (0, s.memo)(function(e) {
                    var t, n = e.setShowForgotPassword,
                        i = (0, s.useState)(!1),
                        a = i[0],
                        l = i[1],
                        c = (0, s.useState)(!1),
                        d = c[0],
                        p = c[1],
                        f = (0, s.useState)(""),
                        m = f[0],
                        h = f[1],
                        b = (0, s.useState)(null),
                        v = b[0],
                        y = b[1];
                    (0, s.useEffect)(function() {
                        a ? (0, Z.P3)({
                            eventName: Z.qI.forgotPasswordEnd
                        }) : (0, Z.P3)({
                            eventName: Z.qI.forgotPasswordStart
                        })
                    }, [a]);
                    var x = (0, s.useCallback)(function(e) {
                            y(null), h(e.target.value)
                        }, []),
                        w = (0, s.useCallback)((t = (0, r.Z)(o().mark(function e(t) {
                            var r, i, s;
                            return o().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.preventDefault(), p(!0), !a) {
                                            e.next = 5;
                                            break
                                        }
                                        return n(!1), e.abrupt("return");
                                    case 5:
                                        return y(null), e.next = 8, g.Z.requestPasswordReset({
                                            email: m
                                        });
                                    case 8:
                                        (r = e.sent.error) ? (422 === r.status && null != r && null !== (i = r.data) && void 0 !== i && null !== (i = i.fields) && void 0 !== i && i.length && y(s = r.data.fields[0].error), (0, Z.P3)({
                                            eventName: Z.qI.formError,
                                            metadata: {
                                                form: "forgot_password",
                                                error_message: s
                                            }
                                        })) : l(!0), p(!1);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(e) {
                            return t.apply(this, arguments)
                        }), [m, a, n]);
                    return (0, W.jsxs)(ey, {
                        onSubmit: w,
                        children: [(0, W.jsx)(ex, {
                            children: a ? "Please check your email" : "Forgot Password"
                        }), (0, W.jsx)(ew, {
                            style: {
                                marginBottom: a ? 16 : 32
                            },
                            children: a ? "We sent you an email, which contains a link to reset your Skool password." : "Enter your email address and we'll send you a link to reset your password."
                        }), !a && (0, W.jsx)(P.I, {
                            id: "email",
                            label: "Email",
                            type: "email",
                            value: m,
                            error: v,
                            onChange: x
                        }), (0, W.jsx)(u.z, {
                            type: "submit",
                            label: a ? "Back to Login" : "Email me",
                            loading: d,
                            disabled: !m
                        })]
                    })
                }),
                ek = n(86520);

            function ej(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var eO = (0, s.memo)(function(e) {
                var t = e.reason,
                    n = e.inviter,
                    a = e.groupId,
                    l = e.onSuccess,
                    b = e.inviteCode,
                    v = e.inviteError,
                    y = e.affiliateCode,
                    x = e.signUp,
                    w = e.showCreateCommunity,
                    k = e.autoJoin,
                    P = void 0 !== k && k,
                    I = (0, s.useState)(void 0 === x || x),
                    _ = I[0],
                    M = I[1],
                    S = (0, s.useState)(!1),
                    N = S[0],
                    T = S[1],
                    E = (0, O.bI)("isMobile", "currentGroup"),
                    R = E.isMobile,
                    D = E.currentGroup,
                    $ = (0, h.useRouter)(),
                    L = $.pathname,
                    z = $.push,
                    q = "/signup" === L,
                    B = "/login" === L,
                    G = !q && !B,
                    F = (0, s.useState)(null),
                    U = F[0],
                    V = F[1],
                    ee = t && D,
                    et = (0, s.useMemo)(function() {
                        return "" === t ? "login" : t ? c()(t) : void 0
                    }, [t]),
                    en = (0, s.useCallback)(function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (0, Z.P3)({
                            eventName: e,
                            metadata: function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? ej(Object(n), !0).forEach(function(t) {
                                        (0, i.Z)(e, t, n[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ej(Object(n)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    })
                                }
                                return e
                            }({
                                context: null != et ? et : null,
                                invite_code: b
                            }, t)
                        })
                    }, [b, et]),
                    er = (0, s.useMemo)(function() {
                        return a ? "group" : U ? "affiliate" : "none"
                    }, [a, U]);
                (0, s.useEffect)(function() {
                    ee && en(Z.qI.joinGroupClick, {
                        invite_code_error: v ? v || "unknown" : void 0
                    })
                }, [ee, en, v]), (0, s.useEffect)(function() {
                    w || (_ ? en(Z.qI.createUserStart, {
                        referrer: q ? er : void 0
                    }) : en(Z.qI.loginUserStart))
                }, [en, _, w, q, er]);
                var ei = (0, s.useCallback)((0, r.Z)(o().mark(function e() {
                    var t, n, r;
                    return o().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(t = y) && (n = (0, j.tv)({
                                        key: j.H0.savedAffiliateCode
                                    }).value) && (t = n), !t) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 5, g.Z.getAffiliateCustomerDataNoAuth({
                                    affiliateCode: t
                                });
                            case 5:
                                null != (r = e.sent.data) && r.affiliateUser ? V(null == r ? void 0 : r.affiliateUser) : V(null);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), [y]);
                (0, s.useEffect)(function() {
                    q && ei()
                }, [ei, q]);
                var ea = (0, s.useMemo)(function() {
                        var e, n, r = "";
                        if (!G) {
                            if (!w) return null;
                            r = (0, W.jsxs)(d.s, {
                                children: [(0, W.jsxs)("span", {
                                    children: ["Free for 14 days, then $99/month. Cancel anytime.", R && " All features. Unlimited everything. No hidden fees."]
                                }), !R && (0, W.jsx)("span", {
                                    children: "All features. Unlimited everything. No hidden fees."
                                })]
                            })
                        }
                        var i = (null == D || null === (e = D.metadata) || void 0 === e ? void 0 : e.displayName) || "Skool";
                        if (_ && !w) switch (t || (r = "to join ".concat(i)), t) {
                            case ek.lT.JoinGroup:
                            case ek.lT.InviteJoinGroup:
                                r = "to join ".concat(i);
                                break;
                            case ek.lT.AddPost:
                            case ek.lT.EditPost:
                            case ek.lT.Upvote:
                                r = "to like, post, and comment in ".concat(i);
                                break;
                            case ek.lT.ViewCourse:
                                r = "to view this course in ".concat(null == D || null === (n = D.metadata) || void 0 === n ? void 0 : n.displayName);
                                break;
                            case ek.lT.OpenCourseAttachment:
                            case ek.lT.VotePoll:
                                break;
                            default:
                                r = t
                        }
                        if (r) return (0, W.jsx)(K, {
                            children: r
                        })
                    }, [G, D, _, t, w, R]),
                    eo = (0, s.useCallback)((0, r.Z)(o().mark(function e() {
                        var t;
                        return o().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (null == l || l(), !(_ && !G)) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", (0, m.Tr)({
                                        router: $,
                                        queries: {
                                            auth: !0
                                        }
                                    }));
                                case 5:
                                    if (!ee) {
                                        e.next = 11;
                                        break
                                    }
                                    if (!b) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return", (0, m.Tr)({
                                        router: $,
                                        queries: {
                                            auth: !0
                                        }
                                    }));
                                case 8:
                                    if (!(null != D && null !== (t = D.metadata) && void 0 !== t && t.currentMBp)) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", (0, m.Tr)({
                                        router: $,
                                        queries: {
                                            ssm: !0,
                                            auth: !0
                                        }
                                    }));
                                case 10:
                                    return e.abrupt("return", (0, m.gx)($, (0, C.jQ)({
                                        group: D,
                                        joinGroup: !0,
                                        autoJoin: P,
                                        auth: !0
                                    })));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), [_, D, G, ee, l, b, $, P]),
                    es = (0, s.useMemo)(function() {
                        return U && !w && q ? (0, W.jsxs)(X, {
                            children: [(0, W.jsx)("div", {
                                children: "You were referred by "
                            }), "\xa0\xa0", (0, W.jsxs)(Q, {
                                children: [(0, W.jsx)(f.Z, {
                                    disableLink: !0,
                                    size: 25,
                                    user: U
                                }), "\xa0", (0, W.jsx)("span", {
                                    children: "".concat(null == U ? void 0 : U.firstName, " ").concat(null == U ? void 0 : U.lastName)
                                })]
                            })]
                        }) : null
                    }, [U, w, q]),
                    el = (0, s.useMemo)(function() {
                        return N ? (0, W.jsx)(eC, {
                            setShowForgotPassword: T
                        }) : w ? (0, W.jsx)(A, {
                            groupId: a,
                            affiliateCode: y,
                            affiliateReferrer: er
                        }) : _ ? (0, W.jsx)(ec, {
                            onSuccess: eo,
                            inviteCode: b
                        }) : (0, W.jsx)(ev, {
                            onSuccess: eo,
                            setShowForgotPassword: T
                        })
                    }, [_, eo, w, N, b, a, y, er]),
                    eu = (0, s.useCallback)(function() {
                        G ? M(function(e) {
                            return !e
                        }) : z("/signup" === L ? "/login" : "/signup")
                    }, [G, z, L]),
                    ed = (0, s.useMemo)(function() {
                        if (w || N) return null;
                        var e = _ ? "Already have an account?" : "Don't have an account?",
                            t = _ ? "Log in" : "Sign up for free";
                        return (0, W.jsxs)(J, {
                            children: [e, "\xa0", (0, W.jsx)(u.z, {
                                variant: "link",
                                label: t,
                                onClick: eu
                            })]
                        })
                    }, [_, eu, N, w]),
                    ep = (0, s.useMemo)(function() {
                        return q && !R ? null : n ? (0, W.jsx)(f.Z, {
                            user: n,
                            disableLink: !0,
                            size: R ? 75 : 100,
                            style: {
                                marginBottom: 16
                            }
                        }) : (0, W.jsx)(p.Z, {
                            width: 72
                        })
                    }, [n, R, q]),
                    ef = (0, s.useMemo)(function() {
                        return w ? "Create your community" : n ? "".concat(n.firstName, " ").concat(n.lastName, " invited you") : _ ? "Create your Skool account" : "Log in to Skool"
                    }, [w, _, n]),
                    em = (0, s.useMemo)(function() {
                        return N ? null : (0, W.jsxs)(Y, {
                            $showCreateCommunity: w,
                            children: [ef, ea, es]
                        })
                    }, [N, w, ef, ea, es]);
                return (0, W.jsxs)(H, {
                    children: [ep, em, el, ed]
                })
            })
        },
        41010: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return g
                }
            });
            var r = n(67294),
                i = n(73793),
                a = n(48939),
                o = n(3241),
                s = n(10329),
                l = n(430),
                c = n(50378),
                u = n(3284),
                d = n(92230),
                p = c.ZP.div.withConfig({
                    displayName: "styled__Title",
                    componentId: "sc-khxi5a-0"
                })(["text-align:center;", ""], u.c.t1),
                f = c.ZP.div.withConfig({
                    displayName: "styled__Subtitle",
                    componentId: "sc-khxi5a-1"
                })(["text-align:center;"]),
                m = (0, c.ZP)(d.z).withConfig({
                    displayName: "styled__ConfirmButton",
                    componentId: "sc-khxi5a-2"
                })(["width:100%;"]),
                h = n(85893),
                g = (0, r.memo)(function(e) {
                    var t = e.user,
                        n = e.onClose,
                        r = e.portalRef,
                        c = e.isLeaderboards,
                        u = void 0 !== c && c,
                        d = (0, i.bI)("self", "currentGroup"),
                        g = d.self,
                        b = d.currentGroup;
                    if (!b) return null;
                    if ((0, l.M)(g) && !(null !== (v = g.member.metadata) && void 0 !== v && v.chatLvlAllowed) || u) {
                        var v, y, x, w = (null !== (y = null == b || null === (x = b.metadata) || void 0 === x ? void 0 : x.pluginMinChatLevelEnabled) && void 0 !== y ? y : 0) + 1,
                            C = (0, a.Xt)({
                                group: b
                            });
                        return (0, h.jsxs)(o.u_, {
                            size: "small",
                            open: !0,
                            onClose: n,
                            portalRef: r,
                            children: [(0, h.jsx)(o.fe, {
                                children: (0, h.jsxs)(s.s, {
                                    gap: 8,
                                    children: [(0, h.jsx)(p, {
                                        children: "Chat unlocks at Level ".concat(w)
                                    }), (0, h.jsx)(f, {
                                        children: "Get to Level ".concat(w, " to chat with other members.")
                                    })]
                                })
                            }), (0, h.jsx)(o.mz, {
                                children: u ? (0, h.jsx)(m, {
                                    label: "Got it",
                                    onClick: n
                                }) : (0, h.jsx)(m, {
                                    label: "Check level on leaderboards",
                                    href: C.as
                                })
                            })]
                        })
                    }
                    return (0, h.jsxs)(o.u_, {
                        size: "small",
                        open: !0,
                        onClose: n,
                        portalRef: r,
                        children: [(0, h.jsx)(o.fe, {
                            children: (0, h.jsxs)(s.s, {
                                gap: 8,
                                children: [(0, h.jsx)(p, {
                                    children: "".concat(t.firstName, " has chat turned off")
                                }), (0, h.jsx)(f, {
                                    children: "".concat(t.firstName, " has chat turned off for ").concat(b.metadata.displayName, ". You can turn chat off for specific groups in your settings.")
                                })]
                            })
                        }), (0, h.jsx)(o.mz, {
                            children: (0, h.jsx)(m, {
                                label: "Got it",
                                onClick: n
                            })
                        })]
                    })
                })
        },
        52827: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return j
                }
            });
            var r = n(59499),
                i = n(50029),
                a = n(64687),
                o = n.n(a),
                s = n(67294),
                l = n(25123),
                c = n(31865),
                u = n(87461),
                d = n(97778),
                p = n(73793),
                f = n(3241),
                m = n(92230),
                h = n(10329),
                g = n(50378),
                b = n(3284),
                v = g.ZP.div.withConfig({
                    displayName: "styled__Title",
                    componentId: "sc-dpc7f8-0"
                })(["text-align:center;", ""], b.c.t1),
                y = g.ZP.div.withConfig({
                    displayName: "styled__Subtitle",
                    componentId: "sc-dpc7f8-1"
                })(["text-align:center;"]),
                x = n(12637),
                w = n(66482),
                C = n(85893);

            function k(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var j = (0, s.memo)(function(e) {
                var t = e.open,
                    n = e.onSuccess,
                    a = e.onCancel,
                    g = e.group,
                    b = e.inviter,
                    j = e.inviteCode,
                    O = e.inviteError,
                    P = (0, p.bI)("isMobile"),
                    I = P.isMobile,
                    _ = P.dispatch,
                    M = (0, s.useState)(!1),
                    Z = M[0],
                    S = M[1],
                    N = (0, s.useCallback)((0, i.Z)(o().mark(function e() {
                        var t, i, s, u, p, f, m;
                        return o().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!g) {
                                        e.next = 27;
                                        break
                                    }
                                    return S(!0), (0, d.pN)({
                                        key: d.H0.inviteCode
                                    }), u = (0, x.K)(), e.next = 6, l.Z.joinGroup(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {};
                                            t % 2 ? k(Object(n), !0).forEach(function(t) {
                                                (0, r.Z)(e, t, n[t])
                                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach(function(t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                            })
                                        }
                                        return e
                                    }({
                                        groupName: g.name,
                                        inviteCode: O ? void 0 : j
                                    }, u));
                                case 6:
                                    if (f = (p = e.sent).data, (null == (m = p.error) ? void 0 : m.data) !== "group limit exceeded") {
                                        e.next = 12;
                                        break
                                    }
                                    return _(c.Df, !0), e.abrupt("return");
                                case 12:
                                    if (!(j && !O)) {
                                        e.next = 15;
                                        break
                                    }
                                    return e.next = 15, l.Z.grantCourseAccess({
                                        groupID: g.id,
                                        inviteCode: j
                                    });
                                case 15:
                                    if (!m) {
                                        e.next = 20;
                                        break
                                    }
                                    return null == a || a(), _(c.bI, {
                                        message: "Something went wrong, please try again",
                                        severity: "error"
                                    }), S(!1), e.abrupt("return");
                                case 20:
                                    if (!(null != f && f.needsSurvey)) {
                                        e.next = 24;
                                        break
                                    }
                                    return null == a || a(), S(!1), e.abrupt("return", _(c.nx, !0));
                                case 24:
                                    f.eventId && (0, x.i)({
                                        eventName: "CompleteRegistration",
                                        eventID: f.eventId
                                    }), null === (t = window) || void 0 === t || null === (i = t.gtag) || void 0 === i || i.call(t, "event", "conversion", {
                                        send_to: null == g || null === (s = g.metadata) || void 0 === s ? void 0 : s.googleTagId
                                    }), (0, w.uR)(w.qI.joinSuccess, {
                                        invite_code: O ? void 0 : j
                                    });
                                case 27:
                                    null == n || n();
                                case 28:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), [g, n, a, j, O, _]),
                    T = (0, s.useCallback)(function() {
                        a && a()
                    }, [a]),
                    E = (0, s.useMemo)(function() {
                        return b ? (0, C.jsx)(u.Z, {
                            user: b,
                            size: I ? 75 : 100,
                            disableLink: !0
                        }) : null
                    }, [b, I]);
                return g ? (0, C.jsxs)(f.u_, {
                    size: "small",
                    open: t,
                    onClose: T,
                    shouldFullscreenOnMobile: !0,
                    children: [(0, C.jsx)(f.fe, {
                        children: (0, C.jsxs)(h.s, {
                            gap: 32,
                            alignItems: "center",
                            marginTop: I ? 48 : 0,
                            children: [E, (0, C.jsxs)(h.s, {
                                gap: 8,
                                children: [(0, C.jsx)(v, {
                                    children: b ? "".concat(b.firstName, " ").concat(b.lastName, " invited you") : "Join Group"
                                }), (0, C.jsx)(y, {
                                    children: b ? "to join ".concat(g.metadata.displayName) : "to like, post, and comment in ".concat(g.metadata.displayName)
                                })]
                            })]
                        })
                    }), (0, C.jsx)(f.mz, {
                        children: (0, C.jsx)(m.z, {
                            label: "Join Group",
                            onClick: N,
                            disabled: Z,
                            style: {
                                width: "100%"
                            }
                        })
                    })]
                }) : null
            })
        },
        41211: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return i
                }
            });
            var r = n(67294);

            function i(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.initialCount,
                    i = void 0 === n ? 60 : n,
                    a = t.intervalMs,
                    o = void 0 === a ? 1e3 : a,
                    s = (0, r.useState)(i),
                    l = s[0],
                    c = s[1],
                    u = (0, r.useCallback)(function() {
                        c(i)
                    }, [i]),
                    d = (0, r.useCallback)(function() {
                        null != e && e.current && (c(null), clearInterval(e.current), e.current = void 0)
                    }, [e]),
                    p = (0, r.useCallback)(function() {
                        null != e && e.current || (u(), e.current = setInterval(function() {
                            c(function(e) {
                                if (e <= 1) {
                                    d();
                                    return
                                }
                                return e - 1
                            })
                        }, o))
                    }, [u, d, o, e]);
                return (0, r.useEffect)(function() {
                    return function() {
                        d()
                    }
                }, [d]), {
                    count: l,
                    startTimer: p,
                    resetTimer: d
                }
            }
        },
        56640: function(e, t, n) {
            n.d(t, {
                W: function() {
                    return v
                }
            });
            var r = n(50029),
                i = n(64687),
                a = n.n(i),
                o = n(67294),
                s = n(10329),
                l = n(24252),
                c = n(94619),
                u = n(3241),
                d = n(91425),
                p = n(97628),
                f = n(50378),
                m = n(92230),
                h = (0, f.ZP)(m.z).withConfig({
                    displayName: "styled__LoginButton",
                    componentId: "sc-144hoaq-0"
                })(["width:100%;"]),
                g = (0, f.ZP)(m.z).withConfig({
                    displayName: "styled__ResendCodeButton",
                    componentId: "sc-144hoaq-1"
                })(["height:auto;"]),
                b = n(85893),
                v = (0, o.memo)(function(e) {
                    var t, n = e.email,
                        i = e.onSubmit,
                        f = e.onClose,
                        m = e.onResendEmail,
                        v = e.loginCodeError,
                        y = e.secondsRemaining,
                        x = (0, o.useState)(""),
                        w = x[0],
                        C = x[1],
                        k = (0, o.useState)(!1),
                        j = k[0],
                        O = k[1],
                        P = (0, o.useCallback)(function(e) {
                            C(e.target.value)
                        }, []),
                        I = (0, o.useCallback)((t = (0, r.Z)(a().mark(function e(t) {
                            return a().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), O(!0), e.next = 4, i({
                                            code: w,
                                            email: n
                                        });
                                    case 4:
                                        O(!1);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(e) {
                            return t.apply(this, arguments)
                        }), [w, n, i]),
                        _ = (0, o.useCallback)(function() {
                            C(""), m()
                        }, [m]),
                        M = (0, o.useMemo)(function() {
                            return y ? (0, b.jsx)(c.Z, {
                                as: "span",
                                color: d.O9.n5,
                                variant: "t7",
                                children: "Resend in ".concat(y, "s")
                            }) : (0, b.jsx)(g, {
                                variant: "link",
                                label: "Resend",
                                typography: "t7",
                                onClick: _
                            })
                        }, [_, y]);
                    return n ? (0, b.jsx)(u.u_, {
                        size: "small",
                        open: !0,
                        onClose: f,
                        children: (0, b.jsxs)("form", {
                            onSubmit: I,
                            children: [(0, b.jsx)(u.xB, {
                                children: (0, b.jsx)(c.Z, {
                                    textAlign: "center",
                                    children: "We sent you a code"
                                })
                            }), (0, b.jsxs)(u.fe, {
                                children: [(0, b.jsx)(c.Z, {
                                    textAlign: "center",
                                    children: "Enter it below to log in using ".concat(n)
                                }), (0, b.jsxs)(s.s, {
                                    gap: 16,
                                    marginTop: 32,
                                    children: [(0, b.jsx)(l.I, {
                                        placeholder: "Code",
                                        staticLabel: !0,
                                        value: w,
                                        onChange: P,
                                        error: v
                                    }), (0, b.jsx)(h, {
                                        label: "Log in",
                                        onClick: I,
                                        disabled: !w || j,
                                        loading: j
                                    })]
                                }), (0, b.jsx)(s.s, {
                                    gap: 4,
                                    alignItems: "center",
                                    marginTop: 24,
                                    children: (0, b.jsxs)(p.X, {
                                        gap: 2,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        children: [(0, b.jsx)(c.Z, {
                                            color: d.O9.n5,
                                            variant: "t7",
                                            children: "Didn't get the email?"
                                        }), M]
                                    })
                                })]
                            })]
                        })
                    }) : null
                })
        },
        74261: function(e, t, n) {
            n.d(t, {
                p: function() {
                    return g
                }
            });
            var r = n(59499),
                i = n(4730),
                a = n(67294),
                o = n(3241),
                s = n(92230),
                l = n(50378),
                c = n(3284),
                u = l.ZP.div.withConfig({
                    displayName: "styled__NoticeModalWrapper",
                    componentId: "sc-19gdumt-0"
                })(["display:flex;flex-direction:column;align-items:center;text-align:center;> h2{margin:0px 0px 16px 0px;", "}> p{margin:0px 0px 24px 0px;", "}> button{width:100%;}"], c.c.t1, c.c.t7),
                d = n(85893),
                p = ["title", "subtitle", "okButtonText", "onConfirm", "onCancel"];

            function f(e, t) {
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
                    t % 2 ? f(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var h = {
                    zIndex: 1400
                },
                g = (0, a.memo)(function(e) {
                    var t = e.title,
                        n = e.subtitle,
                        r = e.okButtonText,
                        a = e.onConfirm,
                        l = e.onCancel,
                        c = (0, i.Z)(e, p);
                    return (0, d.jsx)(o.u_, m(m({
                        onClose: l
                    }, c), {}, {
                        size: "small",
                        style: h,
                        children: (0, d.jsxs)(u, {
                            children: [(0, d.jsx)("h2", {
                                children: t
                            }), (0, d.jsx)("p", {
                                children: n
                            }), (0, d.jsx)(s.z, {
                                label: r,
                                onClick: a
                            })]
                        })
                    }))
                })
        },
        430: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return T
                }
            });
            var r = n(59499),
                i = n(50029),
                a = n(64687),
                o = n.n(a),
                s = n(67294),
                l = n(11865),
                c = n.n(l),
                u = n(25123),
                d = n(66053),
                p = n(86520),
                f = n(97778),
                m = n(73793),
                h = n(52827),
                g = n(74261),
                b = n(74484),
                v = n(11163),
                y = n(52885),
                x = n(31865),
                w = n(48939),
                C = n(12637),
                k = n(66482),
                j = n(8030),
                O = n(85893);

            function P(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var I = "login",
                _ = "join",
                M = "banned",
                Z = "pending",
                S = "archived";

            function N(e) {
                var t, n = (null === (t = e.member) || void 0 === t ? void 0 : t.role) || "";
                switch (n) {
                    case "":
                    case d.Wo:
                        return d.Wo;
                    default:
                        return n
                }
            }

            function T(e) {
                if (!e) return !1;
                switch (N(e)) {
                    case d.Wo:
                    case d.th:
                    case d.JR:
                    case d.Zn:
                        return !1
                }
                return !0
            }
            t.Z = (0, s.memo)(function(e) {
                var t, n, a = e.onSuccess,
                    l = e.reason,
                    E = e.children,
                    R = e.showSignUp,
                    D = e.autoJoin,
                    $ = void 0 !== D && D,
                    L = e.subscriptionRedirectUrl,
                    z = (0, m.bI)("canShowSurvey", "currentGroup", "self"),
                    q = z.currentGroup,
                    B = z.canShowSurvey,
                    G = z.self,
                    W = z.dispatch,
                    F = (0, s.useState)(""),
                    A = F[0],
                    U = F[1],
                    H = (0, s.useState)(!1),
                    V = H[0],
                    Y = H[1],
                    J = (0, v.useRouter)(),
                    K = (0, w.GG)(J.query),
                    X = (0, w.AC)(J.query),
                    Q = (0, s.useState)(null != X ? X : $),
                    ee = Q[0],
                    et = Q[1],
                    en = (0, w.gf)(J.query),
                    er = !!(null != q && null !== (n = q.metadata) && void 0 !== n && n.archived),
                    ei = (null == q ? void 0 : q.name) === "skoolers",
                    ea = (0, s.useCallback)(function() {
                        (0, y.gx)(J, (0, w.AZ)({
                            groupName: q.name,
                            pending: !0
                        }))
                    }, [J, null == q ? void 0 : q.name]),
                    eo = (0, s.useMemo)(function() {
                        return "" === l ? "login" : l ? c()(l) : void 0
                    }, [l]),
                    es = (0, s.useCallback)((t = (0, i.Z)(o().mark(function e(t) {
                        var n, i, s, c, m, h, g, b, v, y, w, O;
                        return o().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t && t.stopPropagation(), !(l === p.lT.JoinGroup && !G && ei)) {
                                        e.next = 4;
                                        break
                                    }
                                    return W(x.Mx, !0), e.abrupt("return");
                                case 4:
                                    if (!er) {
                                        e.next = 7;
                                        break
                                    }
                                    return U(S), e.abrupt("return");
                                case 7:
                                    if (G) {
                                        e.next = 10;
                                        break
                                    }
                                    return U(I), e.abrupt("return");
                                case 10:
                                    if (!(c = T(G))) {
                                        e.next = 14;
                                        break
                                    }
                                    return a && a(), e.abrupt("return", c);
                                case 14:
                                    m = N(G), e.t0 = m, e.next = "" === e.t0 ? 18 : e.t0 === d.Zn ? 18 : e.t0 === d.Wo ? 18 : e.t0 === d.th ? 56 : e.t0 === d.JR ? 58 : 60;
                                    break;
                                case 18:
                                    if (en || (0, k.P3)({
                                            eventName: k.qI.joinGroupClick,
                                            metadata: {
                                                context: null != eo ? eo : null
                                            }
                                        }), (0, f.pN)({
                                            key: f.H0.inviteCode
                                        }), !(null != q && null !== (n = q.metadata) && void 0 !== n && n.currentMBp || null != q && null !== (i = q.metadata) && void 0 !== i && i.currentABp || null != q && null !== (s = q.metadata) && void 0 !== s && s.currentOtBp)) {
                                        e.next = 24;
                                        break
                                    }
                                    if (!L) {
                                        e.next = 23;
                                        break
                                    }
                                    return e.abrupt("return", W(x.RV, {
                                        open: !0,
                                        subscriptionRedirectUrl: L
                                    }));
                                case 23:
                                    return e.abrupt("return", W(x.RV, !0));
                                case 24:
                                    if (!ee) {
                                        e.next = 53;
                                        break
                                    }
                                    return v = (0, C.K)(), Y(!0), e.next = 29, u.Z.joinGroup(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {};
                                            t % 2 ? P(Object(n), !0).forEach(function(t) {
                                                (0, r.Z)(e, t, n[t])
                                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach(function(t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                            })
                                        }
                                        return e
                                    }({
                                        groupName: q.name
                                    }, v));
                                case 29:
                                    if (w = (y = e.sent).data, !(O = y.error)) {
                                        e.next = 39;
                                        break
                                    }
                                    if ((null == O ? void 0 : O.data) !== "group limit exceeded") {
                                        e.next = 36;
                                        break
                                    }
                                    return W(x.Df, !0), e.abrupt("return");
                                case 36:
                                    return W(x.bI, {
                                        message: "Something went wrong, please try again",
                                        severity: "error"
                                    }), Y(!1), e.abrupt("return");
                                case 39:
                                    if (!(null != w && w.skoolersModal)) {
                                        e.next = 42;
                                        break
                                    }
                                    return Y(!1), e.abrupt("return", W(x.Mx, !0));
                                case 42:
                                    if ((null == q ? void 0 : q.name) !== j.Tu) {
                                        e.next = 45;
                                        break
                                    }
                                    return e.next = 45, u.Z.pinGroup({
                                        group: j.Tu
                                    });
                                case 45:
                                    if (!(null != w && w.needsSurvey)) {
                                        e.next = 48;
                                        break
                                    }
                                    return Y(!1), e.abrupt("return", W(x.nx, !0));
                                case 48:
                                    return w.eventId && (0, C.i)({
                                        eventName: "CompleteRegistration",
                                        eventID: w.eventId
                                    }), null === (h = window) || void 0 === h || null === (g = h.gtag) || void 0 === g || g.call(h, "event", "conversion", {
                                        send_to: null == q || null === (b = q.metadata) || void 0 === b ? void 0 : b.googleTagId
                                    }), (0, k.uR)(k.qI.joinSuccess), ea(), e.abrupt("return");
                                case 53:
                                    return U(_), W(x.wd, !0), e.abrupt("break", 62);
                                case 56:
                                    return U(M), e.abrupt("break", 62);
                                case 58:
                                    return U(Z), e.abrupt("break", 62);
                                case 60:
                                    return console.warn("membership ".concat(m, " unexpected here")), e.abrupt("break", 62);
                                case 62:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function(e) {
                        return t.apply(this, arguments)
                    }), [ei, l, er, G, a, q, eo, ee, en, L, W, ea]);
                (0, s.useEffect)(function() {
                    l === p.lT.JoinGroup && K && es()
                }, [l, K, J, en, es]);
                var el = (0, s.useCallback)(function() {
                        U(""), et($)
                    }, [$]),
                    ec = (0, s.useCallback)(function() {
                        U(""), W(x.wd, !1)
                    }, [W]),
                    eu = (0, s.useCallback)((0, i.Z)(o().mark(function e() {
                        return o().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, y.VF)(J, (0, w.AZ)({
                                        groupName: q.name,
                                        pending: !0
                                    }));
                                case 2:
                                    ec();
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), [ec, J, q]),
                    ed = (0, s.useCallback)(function() {
                        U("")
                    }, []),
                    ep = (0, s.useCallback)(function() {
                        U("")
                    }, [U]),
                    ef = (0, s.useMemo)(function() {
                        return A !== I ? null : (0, O.jsx)(b.Z, {
                            reason: l,
                            open: !0,
                            signIn: !R,
                            autoJoin: ee,
                            onCancel: el
                        })
                    }, [A, l, el, R, ee]),
                    em = (0, s.useMemo)(function() {
                        return A !== _ ? null : (0, O.jsx)(h.Z, {
                            open: !0,
                            group: q,
                            onCancel: ec,
                            onSuccess: eu
                        })
                    }, [A, q, ec, eu]),
                    eh = (0, s.useMemo)(function() {
                        return A !== M ? null : (0, O.jsx)(g.p, {
                            open: !0,
                            title: "Banned",
                            subtitle: "Sorry, you've been banned from this group.",
                            okButtonText: "Got It",
                            onConfirm: ed,
                            onCancel: ed
                        })
                    }, [A, ed]),
                    eg = (0, s.useMemo)(function() {
                        return A !== Z || B ? null : (0, O.jsx)(g.p, {
                            open: !0,
                            title: "Membership pending",
                            subtitle: "".concat(q.metadata.displayName, " admins are reviewing your request. You'll get an email when you're approved."),
                            okButtonText: "Got It",
                            onConfirm: ep,
                            onCancel: ep
                        })
                    }, [A, q, B, ep]),
                    eb = (0, s.useMemo)(function() {
                        return A !== S ? null : (0, O.jsx)(g.p, {
                            open: !0,
                            title: "This group has been archived",
                            subtitle: "Archived groups are read only. You can’t like, post, comment, or chat.",
                            okButtonText: "Got It",
                            onConfirm: ed,
                            onCancel: ed
                        })
                    }, [A, ed]);
                return q ? null != G && G.groupId && G.member.groupId !== (null == q ? void 0 : q.id) ? (console.error("MembershipChecked: self membership does not match current group", G, q), (0, O.jsx)("div", {})) : (0, O.jsxs)(O.Fragment, {
                    children: [E ? E({
                        onClick: es,
                        disabled: V
                    }) : null, ef, em, eh, eg, eb]
                }) : (console.error("MembershipChecked: current group not set"), (0, O.jsx)("div", {}))
            })
        },
        13886: function(e, t, n) {
            var r = n(59499),
                i = n(50029),
                a = n(64687),
                o = n.n(a),
                s = n(67294),
                l = n(91425),
                c = n(73793),
                u = n(86664),
                d = n(94619),
                p = n(50378),
                f = n(53980),
                m = n(85893);

            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var g = p.ZP.div.withConfig({
                    displayName: "PaymentForm__PaymentFormWrapper",
                    componentId: "sc-1f1dty6-0"
                })(["transition:opacity 0.5s ease-in-out,height 0.2s ease-in-out;margin:0 0 16px 0;position:relative;"]),
                b = p.ZP.div.withConfig({
                    displayName: "PaymentForm__ErrorMessageWrapper",
                    componentId: "sc-1f1dty6-1"
                })(["margin:8px 0 32px 0;"]),
                v = p.ZP.div.withConfig({
                    displayName: "PaymentForm__CardElementWrapper",
                    componentId: "sc-1f1dty6-2"
                })(["background:", ";border:1px solid ", ";border-radius:4px;padding:16px 12px;position:relative;"], function(e) {
                    return e.isLoading ? l.O9.n2 : l.O9.n1
                }, l.O9.n3),
                y = {
                    fonts: [{
                        cssSrc: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    }]
                },
                x = (0, s.forwardRef)(function(e, t) {
                    var n = e.intentClientSecret,
                        r = e.cardElementOnChange,
                        a = e.setErrorMessage,
                        c = e.isLoading,
                        d = e.paymentElementOnReady,
                        p = e.setShowDeclinedPrefix,
                        h = e.setErrorMessageHeight,
                        g = (0, u.useStripe)(),
                        b = (0, u.useElements)(),
                        y = (0, s.useCallback)(function() {
                            d && d(!0)
                        }, [d]),
                        x = (0, s.useCallback)(function(e, t, n) {
                            throw console.error("".concat("setupIntent" === e ? "confirm setup" : "confirm payment", " failed"), n), p(!!t), h(48), a((0, f.bU)(t, !0) || "There was an issue with your request, please try again."), Error(t)
                        }, [a, p, h]);
                    (0, s.useImperativeHandle)(t, function() {
                        var e;
                        return {
                            handleIntentConfirmation: (e = (0, i.Z)(o().mark(function e(t) {
                                var r, i, a, s, l, c, u, d, p, f, m, h, v, y, w, C;
                                return o().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = b.getElement("card"), "setupIntent" !== t) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.next = 4, g.confirmCardSetup(n, {
                                                payment_method: {
                                                    card: r
                                                }
                                            });
                                        case 4:
                                            if (a = (i = e.sent).error, s = i.setupIntent, !a) {
                                                e.next = 10;
                                                break
                                            }
                                            return c = null !== (l = a.decline_code) && void 0 !== l ? l : a.code, e.abrupt("return", x(t, c, a));
                                        case 10:
                                            return e.abrupt("return", s.payment_method);
                                        case 13:
                                            if ("paymentIntent" !== t) {
                                                e.next = 25;
                                                break
                                            }
                                            return e.next = 16, g.confirmCardPayment(n, {
                                                payment_method: {
                                                    card: r
                                                }
                                            });
                                        case 16:
                                            if (d = (u = e.sent).error, p = u.paymentIntent, !d) {
                                                e.next = 22;
                                                break
                                            }
                                            return m = null !== (f = d.decline_code) && void 0 !== f ? f : d.code, e.abrupt("return", x(t, m, d));
                                        case 22:
                                            return e.abrupt("return", p.payment_method);
                                        case 25:
                                            return e.next = 27, g.createPaymentMethod({
                                                type: "card",
                                                card: r
                                            });
                                        case 27:
                                            if (v = (h = e.sent).paymentMethod, !(y = h.error)) {
                                                e.next = 33;
                                                break
                                            }
                                            return C = null !== (w = y.decline_code) && void 0 !== w ? w : y.code, e.abrupt("return", x(t, C, y));
                                        case 33:
                                            return e.abrupt("return", v.id);
                                        case 34:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            })), function(t) {
                                return e.apply(this, arguments)
                            })
                        }
                    });
                    var w = (0, s.useMemo)(function() {
                        return {
                            style: {
                                base: {
                                    color: c ? "rgba(0, 0, 0, 0.38)" : l.O9.n7,
                                    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                                    fontSize: "16px",
                                    fontWeight: "normal",
                                    fontSmoothing: "antialiased",
                                    "::placeholder": {
                                        color: l.O9.n5,
                                        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                                        fontSize: "16px",
                                        fontWeight: "normal",
                                        fontSmoothing: "antialiased"
                                    }
                                },
                                invalid: {
                                    color: l.O9.e2
                                }
                            },
                            disabled: c
                        }
                    }, [c]);
                    return (0, m.jsx)(v, {
                        isLoading: c,
                        children: (0, m.jsx)(u.CardElement, {
                            id: "card-element",
                            options: w,
                            onChange: r,
                            onReady: y
                        })
                    })
                }),
                w = (0, s.forwardRef)(function(e, t) {
                    var n = e.intentClientSecret,
                        i = e.paymentElementOnChange,
                        a = e.isBilling,
                        o = e.isLoading,
                        p = e.onReady,
                        f = e.style,
                        v = (0, c.bI)("stripePromise", "billingStripePromise"),
                        w = v.stripePromise,
                        C = v.billingStripePromise,
                        k = (0, s.useState)(!1),
                        j = k[0],
                        O = k[1],
                        P = (0, s.useState)(null),
                        I = P[0],
                        _ = P[1],
                        M = (0, s.useState)(!1),
                        Z = M[0],
                        S = M[1],
                        N = (0, s.useState)(0),
                        T = N[0],
                        E = N[1],
                        R = (0, s.useCallback)(function(e) {
                            E((null == e ? void 0 : e.offsetHeight) || 0)
                        }, []),
                        D = (0, s.useCallback)(function(e) {
                            null == i || i(e.complete && n), e.error ? (S(!1), _(e.error.message)) : _(null)
                        }, [n, i]),
                        $ = (0, s.useCallback)(function(e) {
                            null == p || p(e), O(e)
                        }, [p]);
                    return (0, m.jsx)(u.Elements, {
                        stripe: a ? C : w,
                        options: y,
                        children: (0, m.jsxs)(g, {
                            style: function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? h(Object(n), !0).forEach(function(t) {
                                        (0, r.Z)(e, t, n[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    })
                                }
                                return e
                            }({
                                height: I ? "".concat(58 + T, "px") : "58px",
                                opacity: j ? 1 : 0
                            }, void 0 === f ? {} : f),
                            children: [(0, m.jsx)(x, {
                                ref: t,
                                intentClientSecret: n,
                                cardElementOnChange: D,
                                paymentElementOnReady: $,
                                setErrorMessage: _,
                                setShowDeclinedPrefix: S,
                                isLoading: o,
                                setErrorMessageHeight: E
                            }), I && (0, m.jsx)(b, {
                                ref: R,
                                children: (0, m.jsxs)(d.Z, {
                                    variant: "t11",
                                    color: l.O9.e2,
                                    children: [Z && (0, m.jsxs)(m.Fragment, {
                                        children: [(0, m.jsx)("strong", {
                                            children: "Declined. "
                                        }), "Reason: "]
                                    }), I]
                                })
                            })]
                        })
                    })
                });
            t.Z = (0, s.memo)(w)
        },
        98193: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return x
                }
            });
            var r = n(59499),
                i = n(4730),
                a = n(67294),
                o = n(73793),
                s = n(31865),
                l = n(50378),
                c = n(3284),
                u = n(91425),
                d = n(58401),
                p = l.ZP.div.withConfig({
                    displayName: "styled__PointsToGoWrapper",
                    componentId: "sc-kn43ny-0"
                })(["display:flex;align-items:center;justify-content:center;color:", ";", " > span{color:", ";", " margin-right:4px;}> svg{height:18px;width:18px;cursor:pointer;margin-left:4px;}"], u.O9.n5, c.c.t11, function(e) {
                    return e.theme.isDarkTheme ? u.O9.sd1 : u.O9.g1
                }, c.c.t10),
                f = (0, l.ZP)(d.J).withConfig({
                    displayName: "styled__HelpIcon",
                    componentId: "sc-kn43ny-1"
                })(["cursor:pointer;margin-left:4px;height:18px;width:18px;"]),
                m = n(23450),
                h = n.n(m),
                g = n(85893),
                b = ["points", "dataTestId", "onClick"];

            function v(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var x = (0, a.memo)(function(e) {
                var t = e.points,
                    n = (e.dataTestId, e.onClick),
                    r = (0, i.Z)(e, b),
                    l = (0, o.bI)().dispatch,
                    c = (0, a.useCallback)(function() {
                        n && n(), l(s.or, {
                            showSkoolPointsInfoModal: !0
                        })
                    }, [n, l]);
                return t <= 0 ? null : (0, g.jsxs)(p, y(y({}, r), {}, {
                    children: [(0, g.jsx)("span", {
                        children: t.toLocaleString("en-US")
                    }), "".concat(h()("point", t), " to level up"), (0, g.jsx)(f, {
                        onClick: c,
                        name: "InfoOutline"
                    })]
                }))
            })
        },
        74484: function(e, t, n) {
            var r = n(67294),
                i = n(73793),
                a = n(3241),
                o = n(63233),
                s = n(85893);
            t.Z = (0, r.memo)(function(e) {
                var t = e.open,
                    n = e.onSuccess,
                    l = e.onCancel,
                    c = e.reason,
                    u = e.inviter,
                    d = e.inviteCode,
                    p = e.inviteError,
                    f = e.signIn,
                    m = e.autoJoin,
                    h = (0, i.bI)("self").self,
                    g = (0, r.useCallback)(function() {
                        null == l || l()
                    }, [l]),
                    b = (0, r.useCallback)(function() {
                        null == n || n(), g()
                    }, [n, g]);
                return h ? null : (0, s.jsx)(a.u_, {
                    shouldFullscreenOnMobile: !0,
                    onClose: l ? g : void 0,
                    size: "small",
                    open: t,
                    children: (0, s.jsx)(o.B, {
                        signUp: !f,
                        reason: c,
                        inviter: u,
                        onSuccess: b,
                        inviteCode: d,
                        inviteError: p,
                        autoJoin: void 0 !== m && m
                    })
                })
            })
        },
        63023: function(e, t, n) {
            var r = n(67294),
                i = n(53907),
                a = n(85893);

            function o(e) {
                var t = e.width,
                    n = e.href,
                    r = e.as,
                    o = e.disableLink,
                    s = function() {
                        return (0, a.jsx)("div", {
                            style: {
                                width: t
                            },
                            children: (0, a.jsxs)("svg", {
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%"
                                },
                                viewBox: "0 0 2783 905",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, a.jsx)("path", {
                                    d: "M429 403.6C424.6 410.4 420 415.4 415.2 418.6C410.8 421.4 404.6 422.8 396.6 422.8C388.6 422.8 380.4 420.8 372 416.8C363.6 412.8 354.2 408.6 343.8 404.2C333.4 399.4 321.4 395 307.8 391C294.6 387 279.2 385 261.6 385C234.8 385 214 390.6 199.2 401.8C184.4 412.6 177 427 177 445C177 457.4 181.2 467.8 189.6 476.2C198 484.6 209 492 222.6 498.4C236.6 504.4 252.4 510.2 270 515.8C287.6 521 305.6 526.8 324 533.2C342.8 539.6 361 547 378.6 555.4C396.2 563.8 411.8 574.4 425.4 587.2C439.4 599.6 450.6 614.8 459 632.8C467.4 650.4 471.6 671.8 471.6 697C471.6 727 466 754.8 454.8 780.4C444 805.6 428 827.4 406.8 845.8C385.6 864.2 359.2 878.6 327.6 889C296 899.4 259.6 904.6 218.4 904.6C197.2 904.6 176.2 902.6 155.4 898.6C134.6 895 114.8 889.8 96 883C77.2 875.8 59.6 867.6 43.2 858.4C26.8 849.2 12.6 839.2 0.600001 828.4L39 766.6C43.4 759.4 48.8 753.8 55.2 749.8C62 745.8 70.6 743.8 81 743.8C91 743.8 100.2 746.4 108.6 751.6C117 756.4 126.4 761.8 136.8 767.8C147.2 773.4 159.4 778.8 173.4 784C187.8 788.8 205.6 791.2 226.8 791.2C242.8 791.2 256.6 789.4 268.2 785.8C279.8 782.2 289.2 777.4 296.4 771.4C303.6 765 308.8 758 312 750.4C315.6 742.4 317.4 734.2 317.4 725.8C317.4 712.2 313 701.2 304.2 692.8C295.8 684 284.6 676.4 270.6 670C257 663.6 241.2 657.8 223.2 652.6C205.2 647.4 186.8 641.6 168 635.2C149.6 628.8 131.4 621.2 113.4 612.4C95.8 603.6 80 592.6 66 579.4C52.4 565.8 41.2 549.2 32.4 529.6C24 510 19.8 486.2 19.8 458.2C19.8 432.6 24.8 408.4 34.8 385.6C44.8 362.4 59.8 342 79.8 324.4C99.8 306.8 124.6 292.8 154.2 282.4C184.2 272 218.8 266.8 258 266.8C302 266.8 342 274 378 288.4C414 302.8 443.6 321.6 466.8 344.8L429 403.6Z",
                                    fill: "#263397"
                                }), (0, a.jsx)("path", {
                                    d: "M740.859 0.399966V508H768.459C778.859 508 787.059 506.6 793.059 503.8C799.059 500.6 805.059 495 811.059 487L947.859 304.6C954.659 295.4 962.259 288.4 970.659 283.6C979.459 278.8 990.459 276.4 1003.66 276.4H1154.86L977.259 502C963.259 520.8 947.059 535.6 928.659 546.4C937.859 552.8 945.859 560.2 952.659 568.6C959.459 577 966.059 586.4 972.459 596.8L1163.86 895H1015.06C1002.26 895 991.259 893 982.059 889C972.859 884.6 965.259 877 959.259 866.2L820.059 638.8C814.459 629.2 808.659 623 802.659 620.2C796.659 617.4 787.659 616 775.659 616H740.859V895H575.259V0.399966H740.859Z",
                                    fill: "#D3513E"
                                }), (0, a.jsx)("path", {
                                    d: "M1509.34 266.8C1555.74 266.8 1597.94 274.2 1635.94 289C1673.94 303.8 1706.54 325 1733.74 352.6C1760.94 379.8 1781.94 413 1796.74 452.2C1811.54 491.4 1818.94 535.6 1818.94 584.8C1818.94 634 1811.54 678.4 1796.74 718C1781.94 757.2 1760.94 790.6 1733.74 818.2C1706.54 845.8 1673.94 867 1635.94 881.8C1597.94 896.6 1555.74 904 1509.34 904C1462.54 904 1419.94 896.6 1381.54 881.8C1343.54 867 1310.94 845.8 1283.74 818.2C1256.54 790.6 1235.34 757.2 1220.14 718C1205.34 678.4 1197.94 634 1197.94 584.8C1197.94 535.6 1205.34 491.4 1220.14 452.2C1235.34 413 1256.54 379.8 1283.74 352.6C1310.94 325 1343.54 303.8 1381.54 289C1419.94 274.2 1462.54 266.8 1509.34 266.8ZM1509.34 779.8C1556.54 779.8 1591.54 763.6 1614.34 731.2C1637.14 698.4 1648.54 649.8 1648.54 585.4C1648.54 521.4 1637.14 473.2 1614.34 440.8C1591.54 408 1556.54 391.6 1509.34 391.6C1460.94 391.6 1425.34 408 1402.54 440.8C1379.74 473.2 1368.34 521.4 1368.34 585.4C1368.34 649.8 1379.74 698.4 1402.54 731.2C1425.34 763.6 1460.94 779.8 1509.34 779.8Z",
                                    fill: "#E0B467"
                                }), (0, a.jsx)("path", {
                                    d: "M2201.92 266.8C2248.32 266.8 2290.52 274.2 2328.52 289C2366.52 303.8 2399.12 325 2426.32 352.6C2453.52 379.8 2474.52 413 2489.32 452.2C2504.12 491.4 2511.52 535.6 2511.52 584.8C2511.52 634 2504.12 678.4 2489.32 718C2474.52 757.2 2453.52 790.6 2426.32 818.2C2399.12 845.8 2366.52 867 2328.52 881.8C2290.52 896.6 2248.32 904 2201.92 904C2155.12 904 2112.52 896.6 2074.12 881.8C2036.12 867 2003.52 845.8 1976.32 818.2C1949.12 790.6 1927.92 757.2 1912.72 718C1897.92 678.4 1890.52 634 1890.52 584.8C1890.52 535.6 1897.92 491.4 1912.72 452.2C1927.92 413 1949.12 379.8 1976.32 352.6C2003.52 325 2036.12 303.8 2074.12 289C2112.52 274.2 2155.12 266.8 2201.92 266.8ZM2201.92 779.8C2249.12 779.8 2284.12 763.6 2306.92 731.2C2329.72 698.4 2341.12 649.8 2341.12 585.4C2341.12 521.4 2329.72 473.2 2306.92 440.8C2284.12 408 2249.12 391.6 2201.92 391.6C2153.52 391.6 2117.92 408 2095.12 440.8C2072.32 473.2 2060.92 521.4 2060.92 585.4C2060.92 649.8 2072.32 698.4 2095.12 731.2C2117.92 763.6 2153.52 779.8 2201.92 779.8Z",
                                    fill: "#6BB7EE"
                                }), (0, a.jsx)("path", {
                                    d: "M2782.29 0.399966V895H2616.69V0.399966H2782.29Z",
                                    fill: "#C45946"
                                })]
                            })
                        })
                    };
                return o ? (0, a.jsx)(s, {}) : (0, a.jsx)(i.r, {
                    href: n,
                    as: r,
                    underline: "none",
                    children: (0, a.jsx)(s, {})
                })
            }
            o.defaultProps = {
                width: 200,
                href: "/",
                as: "/",
                disableLink: !1
            }, t.Z = (0, r.memo)(o)
        },
        87461: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return _
                }
            });
            var r = n(59499),
                i = n(4730),
                a = n(67294),
                o = n(73793),
                s = n(34544),
                l = n(48939),
                c = n(91425),
                u = n(42260),
                d = n(67975),
                p = n(19494),
                f = n(85893),
                m = (0, a.memo)(function(e) {
                    var t = e.level,
                        n = e.size,
                        r = e.fontWeight,
                        i = e.noBorder,
                        a = e.fontSize;
                    return (0, f.jsxs)("svg", {
                        width: n,
                        height: n,
                        viewBox: "0 0 40 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, f.jsx)("rect", {
                            x: "1",
                            y: "1",
                            width: "38",
                            height: "38",
                            rx: "19",
                            fill: c.O9.g1,
                            stroke: i ? c.O9.g1 : c.O9.n1,
                            strokeWidth: "2"
                        }), (0, f.jsx)("text", {
                            x: "50%",
                            y: "50%",
                            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                            fontSize: void 0 === a ? 24 : a,
                            fontWeight: r,
                            style: {
                                fill: c.O9.fgGamification,
                                marginBottom: 8,
                                userSelect: "none"
                            },
                            textRendering: "geometricPrecision",
                            textAnchor: "middle",
                            dominantBaseline: "central",
                            children: t
                        })]
                    })
                }),
                h = n(50378),
                g = h.ZP.div.withConfig({
                    displayName: "styled__AvatarWrapper",
                    componentId: "sc-1o1lx2q-0"
                })(["position:relative;display:flex;align-items:center;justify-content:center;height:", "px;width:", "px;> svg{overflow:visible;}"], function(e) {
                    return e.$size
                }, function(e) {
                    return e.$size
                }),
                b = (0, h.iv)(["top:5px;left:5px;height:calc(100% - 10px);width:calc(100% - 10px);"]),
                v = h.ZP.svg.withConfig({
                    displayName: "styled__ProgressCircle",
                    componentId: "sc-1o1lx2q-1"
                })(["position:absolute;top:2px;left:2px;height:calc(100% - 4px);width:calc(100% - 4px);", ""], function(e) {
                    return e.theme.isMobile && b
                }),
                y = h.ZP.div.withConfig({
                    displayName: "styled__BadgeWrapper",
                    componentId: "sc-1o1lx2q-2"
                })(["position:absolute;z-index:1;right:", "px;bottom:", "px;line-height:0;"], function(e) {
                    return e.$right
                }, function(e) {
                    return e.$bottom
                }),
                x = ["user", "group", "size", "disableLink", "userPreview", "newTab", "style", "showLevel", "showProgress"];

            function w(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var C = {
                    32: 18,
                    40: 21,
                    48: 21,
                    60: 21,
                    70: 30,
                    100: 30,
                    144: 40,
                    150: 40,
                    200: 48
                },
                k = {
                    32: -3,
                    40: -5,
                    48: -3,
                    60: 5,
                    70: -6,
                    100: 13,
                    144: 13,
                    150: 13,
                    200: 15
                },
                j = {
                    32: -3,
                    40: -5,
                    48: -3,
                    60: 5,
                    70: -6,
                    100: 6,
                    144: 6,
                    150: 6,
                    200: 11
                },
                O = {
                    32: 500,
                    40: 500,
                    48: 500,
                    60: 500,
                    70: 500,
                    100: 500,
                    144: 600,
                    150: 600,
                    200: 600
                },
                P = {
                    32: 20,
                    40: 20,
                    48: 20,
                    60: 20,
                    70: 20,
                    100: 20,
                    144: 20,
                    150: 20,
                    200: 23
                };

            function I(e) {
                var t, n, h, b, I = e.user,
                    _ = e.group,
                    M = e.size,
                    Z = e.disableLink,
                    S = e.userPreview,
                    N = e.newTab,
                    T = e.style,
                    E = e.showLevel,
                    R = e.showProgress,
                    D = (0, i.Z)(e, x),
                    $ = M >= 100 ? (null == I || null === (t = I.metadata) || void 0 === t ? void 0 : t.pictureProfile) || (null == I || null === (n = I.metadata) || void 0 === n ? void 0 : n.pictureBubble) : void 0,
                    L = M < 100 ? (null == I || null === (h = I.metadata) || void 0 === h ? void 0 : h.pictureBubble) || (null == I || null === (b = I.metadata) || void 0 === b ? void 0 : b.pictureProfile) : void 0,
                    z = (I ? $ || L : void 0) || (0, l.X7)(),
                    q = I ? "".concat(I.firstName, " ").concat(I.lastName).trim() : "User",
                    B = (0, o.bI)("isMobile").isMobile,
                    G = (0, s._g)(I) || {},
                    W = G.level,
                    F = G.currentLevelProgress,
                    A = (0, a.useMemo)(function() {
                        return E && I && _ ? (0, f.jsx)(y, {
                            $right: k[M],
                            $bottom: j[M],
                            children: (0, f.jsx)(m, {
                                level: W || 0,
                                size: C[M],
                                fontSize: P[M],
                                fontWeight: O[M]
                            })
                        }) : null
                    }, [I, E, W, M, _]),
                    U = (0, a.useMemo)(function() {
                        var e = void 0 !== W ? 251.2 * F : 33;
                        return (0, f.jsxs)(g, {
                            style: T,
                            $size: R ? M + (60 === M ? 18 : 24) : M,
                            children: [(0, f.jsx)(p.q, function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? w(Object(n), !0).forEach(function(t) {
                                        (0, r.Z)(e, t, n[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    })
                                }
                                return e
                            }({
                                size: M,
                                as: "span",
                                src: z,
                                alt: q,
                                title: q
                            }, D)), A, R && (0, f.jsxs)(v, {
                                viewBox: "9 9 82 82",
                                children: [(0, f.jsx)("path", {
                                    fill: "none",
                                    strokeLinecap: "round",
                                    strokeWidth: "2.2",
                                    stroke: c.O9.n3,
                                    strokeDasharray: "1",
                                    d: "M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
                                }), (0, f.jsx)("path", {
                                    fill: "none",
                                    strokeWidth: "2.4",
                                    stroke: c.O9.g1,
                                    strokeDasharray: "".concat(e, ",251.2"),
                                    d: "M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
                                })]
                            })]
                        })
                    }, [z, q, D, T, M, W, F, R, A]);
                return Z || !I ? U : S && _ && !B ? I && !Z ? (0, f.jsx)(d.Z, {
                    user: I,
                    group: _,
                    children: (0, f.jsx)("div", {
                        children: (0, f.jsx)(u.Z, {
                            newTab: N,
                            user: I,
                            group: _,
                            showOverflow: !0,
                            children: U
                        })
                    })
                }) : U : (0, f.jsx)(u.Z, {
                    newTab: N,
                    user: I,
                    group: _,
                    showOverflow: !0,
                    children: U
                })
            }
            I.defaultProps = {
                size: 24
            };
            var _ = (0, a.memo)(I)
        },
        98621: function(e, t, n) {
            var r = n(67294),
                i = n(34544),
                a = n(48939),
                o = n(3284),
                s = n(91425),
                l = n(53907),
                c = n(50378),
                u = n(85893),
                d = c.ZP.span.withConfig({
                    displayName: "UserLevelTitle__LevelTitleContent",
                    componentId: "sc-2zrgyv-0"
                })(["color:", ";white-space:nowrap;", ""], function(e) {
                    return e.theme.isDarkTheme ? s.O9.sd1 : s.O9.g1
                }, o.c.t10),
                p = function(e) {
                    var t = e.user,
                        n = e.group,
                        o = e.hideTitle,
                        s = e.noParens,
                        c = e.disableLink,
                        p = (0, i._g)(t || {}),
                        f = (0, i.yF)(n, null == p ? void 0 : p.level),
                        m = (0, a.Xt)({
                            group: n
                        }),
                        h = m.href,
                        g = m.as,
                        b = (0, r.useCallback)(function(e) {
                            e.stopPropagation()
                        }, []),
                        v = (0, r.useMemo)(function() {
                            return c ? function(e) {
                                var t = e.children;
                                return (0, u.jsx)("div", {
                                    children: t
                                })
                            } : function(e) {
                                var t = e.children;
                                return (0, u.jsx)(l.r, {
                                    href: h,
                                    as: g,
                                    onClick: b,
                                    underline: "hover",
                                    children: t
                                })
                            }
                        }, [g, c, b, h]);
                    return o ? (0, u.jsx)(v, {
                        children: (0, u.jsx)(d, {
                            children: "".concat(s ? "" : "(", "Level ").concat((null == p ? void 0 : p.level) || 0).concat(s ? "" : ")")
                        })
                    }) : (0, u.jsx)(v, {
                        children: (0, u.jsx)(d, {
                            children: "".concat(s ? "" : "(", "Level ").concat((null == p ? void 0 : p.level) || 0).concat(f ? " - " + f : "").concat(s ? "" : ")")
                        })
                    })
                };
            p.defaultProps = {}, t.Z = (0, r.memo)(p)
        },
        37349: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return P
                }
            });
            var r = n(59499),
                i = n(67294),
                a = n(91425),
                o = n(94619),
                s = n(42260),
                l = n(73793),
                c = n(67975),
                u = n(50378),
                d = n(3284),
                p = n(17199),
                f = u.ZP.div.withConfig({
                    displayName: "styled__UserNameWrapper",
                    componentId: "sc-24o0l3-0"
                })(["display:inline-flex;align-items:center;justify-content:", ";> div:first-child{max-width:100%;}", " ", ""], function(e) {
                    return e.$usernameCentered ? "center" : void 0
                }, function(e) {
                    var t = e.$maxWidth;
                    return t && "max-width: ".concat(t, ";")
                }, function(e) {
                    return e.$ellipsis && d.c.ellipsis
                }),
                m = (0, u.iv)(["&:hover{text-decoration:underline;}"]),
                h = u.ZP.span.withConfig({
                    displayName: "styled__UserNameText",
                    componentId: "sc-24o0l3-1"
                })(["color:", ";display:", ";white-space:nowrap;overflow:hidden;text-overflow:ellipsis;", " em{", "}"], function(e) {
                    return e.$color
                }, function(e) {
                    return e.$display
                }, function(e) {
                    return e.$hoverUnderline && m
                }, p.LA),
                g = (0, u.iv)(["> div:not(:first-child){cursor:default;&:hover{text-decoration:none;}}"]),
                b = u.ZP.div.withConfig({
                    displayName: "styled__UserNameWithStatus",
                    componentId: "sc-24o0l3-2"
                })(["min-width:0px;display:flex;align-items:center;gap:4px;", " > div{&:first-child{max-width:100%;overflow:hidden;*{max-width:100%;}}&:not(:first-child){cursor:pointer;transform:translateY(-1px);&:hover{text-decoration:underline;}}}", ""], function(e) {
                    var t = e.$maxWidth;
                    return t && "max-width: ".concat(t, ";")
                }, function(e) {
                    return e.$disableStatusBadgeModal && g
                }),
                v = n(94874),
                y = n(31865),
                x = n(85893);

            function w(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var k = function(e) {
                    var t, n = e.disableStatusBadgeModal,
                        r = e.typographyVariant,
                        a = e.status,
                        s = (0, l.bI)().dispatch,
                        c = (0, i.useCallback)(function(e) {
                            e.stopPropagation(), s(y._E, a)
                        }, [s, a]);
                    return (0, x.jsx)(o.Z, {
                        onClick: n ? void 0 : c,
                        variant: r,
                        children: null === (t = v.g[a]) || void 0 === t ? void 0 : t.emoji
                    })
                },
                j = function(e) {
                    var t = e.mrrStatus,
                        n = e.actStatus,
                        r = e.discStatus,
                        i = e.typographyVariant,
                        a = e.disableStatusBadgeModal,
                        o = e.maxWidth,
                        s = e.children,
                        l = {
                            disableStatusBadgeModal: a,
                            typographyVariant: i
                        };
                    return (0, x.jsxs)(b, {
                        $maxWidth: o,
                        $disableStatusBadgeModal: a,
                        children: [s, t && (0, x.jsx)(k, C(C({}, l), {}, {
                            status: t
                        })), r && (0, x.jsx)(k, C(C({}, l), {}, {
                            status: r
                        })), n && (0, x.jsx)(k, C(C({}, l), {}, {
                            status: n
                        }))]
                    })
                };

            function O(e) {
                var t, n, r, i = e.user,
                    a = e.userNameHl,
                    u = e.firstNameHl,
                    d = e.lastNameHl,
                    p = e.fullNameHl,
                    m = e.group,
                    g = e.disableLink,
                    b = e.display,
                    v = void 0 === b ? "block" : b,
                    y = e.color,
                    w = e.userPreview,
                    C = e.hoverUnderline,
                    k = e.typographyVariant,
                    O = e.maxLines,
                    P = e.maxWidth,
                    I = e.lineHeight,
                    _ = e.usernameCentered,
                    M = e.ellipsis,
                    Z = e.disableStatusBadgeModal,
                    S = e.addByline,
                    N = e.newTab,
                    T = (0, l.bI)("isMobile").isMobile;
                e["data-testid"];
                var E = null == i || null === (t = i.metadata) || void 0 === t ? void 0 : t.mrrStatus,
                    R = null == i || null === (n = i.metadata) || void 0 === n ? void 0 : n.actStatus,
                    D = null == i || null === (r = i.metadata) || void 0 === r ? void 0 : r.discTop,
                    $ = "number" == typeof P ? "".concat(P, "px") : P,
                    L = (0, x.jsx)(o.Z, {
                        variant: k,
                        maxLines: O,
                        lineHeight: I,
                        ellipsis: !!$ || M,
                        style: {
                            maxWidth: $
                        },
                        children: a ? (0, x.jsx)(h, {
                            $hoverUnderline: C,
                            $color: y,
                            $display: v,
                            dangerouslySetInnerHTML: {
                                __html: a
                            }
                        }) : (0, x.jsxs)(h, {
                            $hoverUnderline: C,
                            $color: y,
                            $display: v,
                            children: [S && "By ", i ? p ? (0, x.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                    __html: p
                                }
                            }) : (0, x.jsxs)("span", {
                                children: [u ? (0, x.jsx)("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: u
                                    }
                                }) : i.firstName, "\xa0", d ? (0, x.jsx)("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: d
                                    }
                                }) : i.lastName]
                            }) : "Deleted"]
                        })
                    });
                return (i && !g && (L = w && m && !T ? (0, x.jsx)(f, {
                    $maxWidth: $,
                    $ellipsis: M,
                    $usernameCentered: _,
                    children: (0, x.jsx)(c.Z, {
                        user: i,
                        group: m,
                        children: (0, x.jsx)("div", {
                            children: (0, x.jsx)(s.Z, {
                                user: i,
                                group: m,
                                newTab: N,
                                children: L
                            })
                        })
                    })
                }) : (0, x.jsx)(f, {
                    $maxWidth: $,
                    $ellipsis: M,
                    $usernameCentered: _,
                    children: (0, x.jsx)(s.Z, {
                        user: i,
                        group: m,
                        newTab: N,
                        children: L
                    })
                })), E || R || D) ? (0, x.jsx)(j, {
                    maxWidth: $,
                    mrrStatus: E,
                    actStatus: R,
                    discStatus: D,
                    typographyVariant: k,
                    disableStatusBadgeModal: Z,
                    children: L
                }) : L
            }
            O.defaultProps = {
                color: a.O9.n7
            };
            var P = (0, i.memo)(O)
        },
        67975: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return V
                }
            });
            var r = n(50029),
                i = n(59499),
                a = n(17674),
                o = n(64687),
                s = n.n(o),
                l = n(67294),
                c = n(73793),
                u = n(58401),
                d = n(92230),
                p = n(11163),
                f = n.n(p),
                m = n(23450),
                h = n.n(m),
                g = n(42260),
                b = n(31865),
                v = n(98193),
                y = n(41010),
                x = n(10329),
                w = n(48153),
                C = n(25123),
                k = n(52885),
                j = n(94682),
                O = n(34544),
                P = n(86520),
                I = n(48939),
                _ = n(430),
                M = n(79801),
                Z = n(98621),
                S = n(87461),
                N = n(37349),
                T = n(50378),
                E = n(3284),
                R = n(91425),
                D = n(90879),
                $ = T.ZP.div.withConfig({
                    displayName: "styled__UserBio",
                    componentId: "sc-ootcfh-0"
                })(["margin:", ";word-break:break-word;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;flex:1;color:", ";text-align:left;", ""], function(e) {
                    return e.theme.isMobile ? "4px 0px 8px" : "16px 0px"
                }, R.O9.n7, E.c.t7),
                L = T.ZP.div.withConfig({
                    displayName: "styled__UserBioWrapper",
                    componentId: "sc-ootcfh-1"
                })(["margin-right:", "px;position:relative;"], function(e) {
                    return e.theme.isMobile ? 16 : 12
                }),
                z = T.ZP.div.withConfig({
                    displayName: "styled__ButtonWrapper",
                    componentId: "sc-ootcfh-2"
                })(["gap:8px;display:flex;"]),
                q = T.ZP.div.withConfig({
                    displayName: "styled__UserGroups",
                    componentId: "sc-ootcfh-3"
                })(["", " color:", ";text-align:left;"], E.c.t10, R.O9.n7),
                B = T.ZP.div.withConfig({
                    displayName: "styled__IconInfoItem",
                    componentId: "sc-ootcfh-4"
                })(["display:flex;align-items:center;gap:8px;color:", ";", ";> div{color:", ";height:", "px;width:", "px;}"], function(e) {
                    return e.$onlineNow ? R.O9.s2 : R.O9.n5
                }, E.c.t11, R.O9.n5, function(e) {
                    return e.theme.isMobile ? 10 : 17
                }, function(e) {
                    return e.theme.isMobile ? 10 : 17
                }),
                G = T.ZP.div.withConfig({
                    displayName: "styled__StatusLocation",
                    componentId: "sc-ootcfh-5"
                })(["margin-top:", "px;display:flex;flex-direction:column;gap:4px;"], function(e) {
                    return e.theme.isMobile ? 0 : 8
                }),
                W = T.ZP.div.withConfig({
                    displayName: "styled__GreenDot",
                    componentId: "sc-ootcfh-6"
                })(["height:16px;width:16px;border-radius:50%;background:", ";"], R.O9.s2),
                F = (0, T.ZP)(D.u).withConfig({
                    displayName: "styled__StyledTooltip",
                    componentId: "sc-ootcfh-7"
                })(["display:inline-block;"]),
                A = n(85893);

            function U(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function H(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(Object(n), !0).forEach(function(t) {
                        (0, i.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var V = (0, l.memo)(function(e) {
                var t, n, i, o, m = e.user,
                    T = e.group,
                    E = e.children,
                    R = e.showDialog,
                    D = e.onDialogClose,
                    U = e.contentOnly,
                    V = e.onChatClick,
                    Y = e.onProfileClick,
                    J = e.onFollowClick,
                    K = (0, l.useState)(null),
                    X = K[0],
                    Q = K[1],
                    ee = (m ? null === (n = m.metadata) || void 0 === n ? void 0 : n.pictureProfile : void 0) || (X ? null == X || null === (i = X.user.metadata) || void 0 === i ? void 0 : i.pictureProfile : void 0) || (0, I.X7)(),
                    et = (0, l.useRef)(!1),
                    en = (0, l.useRef)(!1),
                    er = (0, l.useRef)(),
                    ei = (0, c.bI)("isMobile", "self", "currentGroup"),
                    ea = ei.isMobile,
                    eo = ei.self,
                    es = ei.currentGroup,
                    el = ei.dispatch,
                    ec = (0, l.useState)(!1),
                    eu = ec[0],
                    ed = ec[1],
                    ep = (0, M.C1)(),
                    ef = (0, a.Z)(ep, 3),
                    em = ef[0],
                    eh = ef[1],
                    eg = ef[2],
                    eb = (0, l.useState)(!1),
                    ev = eb[0],
                    ey = eb[1],
                    ex = (0, p.useRouter)(),
                    ew = !!(null != T && null !== (o = T.metadata) && void 0 !== o && o.numCourses),
                    eC = (0, _.M)(eo);
                (0, l.useEffect)(function() {
                    return et.current = !0,
                        function() {
                            et.current = !1
                        }
                }, []), (0, l.useEffect)(function() {
                    en.current = !1
                }, []), (0, l.useEffect)(function() {
                    if (ea) {
                        var e = function() {
                            et.current && D && D()
                        };
                        return window.addEventListener("scroll", e), f().events.on("routeChangeStart", e),
                            function() {
                                window.removeEventListener("scroll", e), f().events.off("routeChangeStart", e)
                            }
                    }
                }, [ea, D]);
                var ek = (0, l.useCallback)(function() {
                        ed(!0), setTimeout(function() {
                            et.current && ed(!1)
                        }, 100)
                    }, []),
                    ej = (0, l.useMemo)(function() {
                        return (0, P.q2)({
                            group: es,
                            user: eo,
                            member: null == eo ? void 0 : eo.member
                        })
                    }, [es, eo]),
                    eO = (0, l.useMemo)(function() {
                        return ej && (0, P.cD)({
                            member: null == X ? void 0 : X.member,
                            group: es
                        })
                    }, [ej, X, es]),
                    eP = (0, l.useCallback)(function() {
                        el(b.wj, H(H({}, X.user), X)), ek()
                    }, [el, X, ek]),
                    eI = (0, l.useMemo)(function() {
                        if (!eO) return null;
                        var e = ea ? 40 : 48;
                        return (0, A.jsx)(d.z, {
                            variant: "icon",
                            iconSize: 17,
                            icon: "GearOutlined",
                            onClick: eP,
                            style: {
                                borderRadius: 4,
                                height: e,
                                width: e
                            }
                        })
                    }, [eO, eP, ea]),
                    e_ = (0, l.useCallback)((0, r.Z)(s().mark(function e() {
                        var t, n, r, i, a, o, l;
                        return s().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return ey(!0), e.next = 3, C.Z.sendChatRequest({
                                        userId: (null == m ? void 0 : m.id) || (null == X || null === (t = X.user) || void 0 === t ? void 0 : t.id),
                                        groupId: T.id
                                    });
                                case 3:
                                    if (r = (n = e.sent).data, (null == (i = n.error) ? void 0 : i.status) !== 429) {
                                        e.next = 10;
                                        break
                                    }
                                    return ek(), ey(!1), e.abrupt("return", el(b.vb, !0));
                                case 10:
                                    if (null == V || V(), !r) {
                                        e.next = 25;
                                        break
                                    }
                                    if (o = (a = r.channel).id, l = a.metadata.lastRead, !ea) {
                                        e.next = 20;
                                        break
                                    }
                                    return e.next = 18, (0, k.VF)(ex, (0, I.rv)({
                                        channelId: o,
                                        chatLastRead: l
                                    }));
                                case 18:
                                    e.next = 23;
                                    break;
                                case 20:
                                    ed(!0), setTimeout(function() {
                                        et.current && ed(!1)
                                    }, 100), el(b.WT, function() {
                                        return {
                                            chatModalProps: {
                                                id: o,
                                                lastRead: l
                                            }
                                        }
                                    });
                                case 23:
                                    e.next = 26;
                                    break;
                                case 25:
                                    el(b.bI, {
                                        message: "Chat request error",
                                        severity: "error"
                                    });
                                case 26:
                                    ey(!1);
                                case 27:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), [m, T.id, el, ea, X, ex, ek, V]),
                    eM = (0, l.useCallback)(function() {
                        eh(), ek()
                    }, [eh, ek]),
                    eZ = (0, l.useCallback)(function() {
                        var e = (0, I.tL)({
                                tab: "profile"
                            }),
                            t = e.href,
                            n = e.as;
                        (0, k.VF)(ex, {
                            href: t,
                            as: n
                        })
                    }, [ex]),
                    eS = (0, l.useMemo)(function() {
                        return [er]
                    }, []),
                    eN = (0, l.useMemo)(function() {
                        return null != X && X.chatRequest ? (0, A.jsx)(d.z, {
                            style: {
                                flex: 1
                            },
                            label: "Chat",
                            onClick: e_,
                            iconSize: 20,
                            icon: "Chat",
                            loading: ev
                        }) : (0, A.jsx)(d.z, {
                            style: {
                                flex: 1
                            },
                            label: "Chat",
                            icon: "ChatOff",
                            variant: "disabled",
                            onClick: eM
                        })
                    }, [X, e_, eM, ev]),
                    eT = (0, l.useCallback)((t = (0, r.Z)(s().mark(function e(t) {
                        var n;
                        return s().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(!et.current || en.current && !t || !(null != T && T.id) || !(null != m && m.id) || !eo)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, C.Z.previewUser({
                                        userID: m.id,
                                        groupID: T.id
                                    });
                                case 4:
                                    n = e.sent.data, en.current = !0, Q(n);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function(e) {
                        return t.apply(this, arguments)
                    }), [null == T ? void 0 : T.id, null == m ? void 0 : m.id, eo]);
                (0, l.useEffect)(function() {
                    (R || U) && eT()
                }, [R, eT, U]);
                var eE = (0, l.useMemo)(function() {
                        if (!X) return null;
                        var e = X.user.metadata,
                            t = e.lastOffline,
                            n = e.online,
                            r = n ? (0, A.jsx)(W, {}) : ea ? null : (0, A.jsx)(u.J, {
                                name: "Clock"
                            }),
                            i = n ? "Online now" : "Active ".concat((0, j.ur)({
                                value: t,
                                justNow: !1,
                                ago: !0
                            }), " ago");
                        return (0, A.jsxs)(B, {
                            $onlineNow: n,
                            children: [r, (0, A.jsx)("span", {
                                children: i
                            })]
                        })
                    }, [X, ea]),
                    eR = (0, l.useMemo)(function() {
                        var e, t;
                        return !ea && X && null != X && null !== (e = X.user) && void 0 !== e && null !== (e = e.metadata) && void 0 !== e && e.location ? (0, A.jsxs)(B, {
                            children: [(0, A.jsx)(u.J, {
                                name: "Location"
                            }), (0, A.jsx)("span", {
                                children: null == X || null === (t = X.user) || void 0 === t || null === (t = t.metadata) || void 0 === t ? void 0 : t.location
                            })]
                        }) : null
                    }, [X, ea]),
                    eD = (0, l.useMemo)(function() {
                        return X ? (0, A.jsxs)(G, {
                            children: [eE, eR]
                        }) : null
                    }, [X, eE, eR]),
                    e$ = (0, l.useMemo)(function() {
                        return ej ? {
                            width: 103
                        } : eC ? {
                            flex: 1
                        } : {
                            width: 201
                        }
                    }, [ej, eC]),
                    eL = (0, l.useCallback)(function() {
                        if (!X || !eo) return null;
                        var e, t, n, i = "".concat(X.user.firstName, " ").concat(X.user.lastName).trim(),
                            a = (e = (0, r.Z)(s().mark(function e(t) {
                                var n;
                                return s().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (null == t || t.stopPropagation(), null == J || J(!X.following), !X.following) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.next = 5, C.Z.unfollowUser({
                                                userName: X.user.name
                                            });
                                        case 5:
                                            e.next = 13;
                                            break;
                                        case 7:
                                            return e.next = 9, C.Z.followUser({
                                                userName: X.user.name,
                                                groupID: null == es ? void 0 : es.id
                                            });
                                        case 9:
                                            if ((null == (n = e.sent.error) ? void 0 : n.status) !== 429) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.abrupt("return", el(b.bI, {
                                                message: "You’ve hit your follow limit",
                                                severity: "error"
                                            }));
                                        case 13:
                                            eT(!0);
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            })), function(t) {
                                return e.apply(this, arguments)
                            }),
                            o = 272 - (null !== (t = X.user) && void 0 !== t && null !== (t = t.metadata) && void 0 !== t && t.online ? 61 : 0) - 16,
                            l = X.user.id === eo.id,
                            c = (0, O._g)(X.user) || {},
                            u = X.totalGroupsCreatedByUser,
                            p = X.totalGroupsMemberOf,
                            f = X.totalSharedGroups;
                        return (0, A.jsxs)(x.s, {
                            paddingLeft: 8,
                            paddingRight: 8,
                            paddingTop: 8,
                            paddingBottom: ew ? 8 : 6,
                            style: {
                                maxWidth: 428
                            },
                            children: [(0, A.jsxs)(w.x, {
                                alignItems: "start",
                                paddingBottom: l ? 0 : 16,
                                children: [(0, A.jsxs)(L, {
                                    children: [(0, A.jsx)(S.Z, {
                                        src: ee,
                                        alt: i,
                                        title: i,
                                        showLevel: !0,
                                        user: X.user,
                                        group: T,
                                        showProgress: !ea,
                                        size: ea ? 70 : 144
                                    }), !ea && (0, A.jsxs)(A.Fragment, {
                                        children: [(0, A.jsx)(w.x, {
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexGrow: 1,
                                            marginTop: 4,
                                            children: (0, A.jsx)(Z.Z, {
                                                group: T,
                                                user: X.user,
                                                noParens: !0
                                            })
                                        }), c.level && (0, A.jsx)(w.x, {
                                            justifyContent: "center",
                                            marginTop: 2,
                                            children: (0, A.jsx)(v.E, {
                                                onClick: ek,
                                                points: c.pointsToNextLevel
                                            })
                                        })]
                                    })]
                                }), (0, A.jsxs)(x.s, {
                                    style: {
                                        overflow: "hidden",
                                        width: ea ? "100%" : "230px"
                                    },
                                    children: [(0, A.jsx)(N.Z, {
                                        user: X.user,
                                        group: T,
                                        hoverUnderline: !0,
                                        maxLines: 1,
                                        typographyVariant: ea ? "t2" : "t1",
                                        ellipsis: !0,
                                        maxWidth: o
                                    }), eD, (0, A.jsx)($, {
                                        children: null === (n = X.user.metadata) || void 0 === n || null === (n = n.bio) || void 0 === n ? void 0 : n.trim()
                                    }), (0, A.jsxs)(q, {
                                        children: [p >= 1 && (0, A.jsx)(g.Z, {
                                            user: X.user,
                                            children: (0, A.jsx)("div", {
                                                children: "".concat(h()("Membership", p, !0), " ").concat(!l && f ? "(".concat(f, " in common)") : "")
                                            })
                                        }), u >= 1 && (0, A.jsx)(g.Z, {
                                            user: X.user,
                                            children: (0, A.jsx)("div", {
                                                children: "Owner of ".concat(h()("group", u, !0))
                                            })
                                        })]
                                    })]
                                })]
                            }), !l && (0, A.jsxs)(z, {
                                children: [!ea && (0, A.jsx)(g.Z, {
                                    user: X.user,
                                    group: T,
                                    showOverflow: !0,
                                    children: (0, A.jsx)(d.z, {
                                        variant: "secondary",
                                        label: "Profile",
                                        style: e$,
                                        onClick: Y
                                    })
                                }), eC && (0, A.jsx)(d.z, {
                                    variant: "secondary",
                                    onClick: a,
                                    label: X.following ? "following" : "follow",
                                    style: {
                                        flex: 1
                                    }
                                }), eN, eI]
                            }), l && (0, I.VV)(ex) && (0, A.jsx)(z, {
                                children: (0, A.jsx)(d.z, {
                                    variant: "secondary",
                                    label: "Change location",
                                    onClick: eZ,
                                    style: {
                                        flex: 1,
                                        marginTop: 16
                                    }
                                })
                            })]
                        })
                    }, [ee, eo, el, T, e$, eC, eT, ew, eN, X, es, eD, ek, eI, ex, eZ, Y, J, ea]),
                    ez = (0, l.useMemo)(function() {
                        return U ? eL() : null
                    }, [U, eL]);
                return U ? ez : T ? (0, A.jsxs)(A.Fragment, {
                    children: [eu ? E : (0, A.jsx)(F, {
                        variant: "light",
                        placement: "top-start",
                        leaveDelay: 500,
                        interactive: !0,
                        onOpen: eT,
                        onClose: eg,
                        content: eL,
                        animated: !1,
                        yOffset: 8,
                        portalRefs: eS,
                        children: E
                    }), em && (0, A.jsx)(y.Z, {
                        user: X.user,
                        onClose: eg,
                        portalRef: er
                    })]
                }) : E
            })
        },
        42260: function(e, t, n) {
            var r = n(67294),
                i = n(48939),
                a = n(53907),
                o = n(85893);

            function s(e) {
                var t = e.user,
                    n = e.group,
                    s = e.tab,
                    l = e.page,
                    c = e.children,
                    u = e.underline,
                    d = e.newTab,
                    p = e.showOverflow,
                    f = (0, i.sB)({
                        userName: t.name,
                        group: n,
                        tab: s,
                        page: l
                    }),
                    m = f.href,
                    h = f.as,
                    g = (0, r.useCallback)(function(e) {
                        e.stopPropagation()
                    }, []);
                return (0, o.jsx)(a.r, {
                    href: m,
                    as: h,
                    underline: u,
                    onClick: g,
                    newTab: d,
                    style: {
                        overflow: p ? "visible" : "hidden"
                    },
                    children: c
                })
            }
            s.defaultProps = {
                underline: "none"
            }, t.Z = (0, r.memo)(s)
        },
        19494: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return d
                }
            });
            var r = n(59499),
                i = n(4730),
                a = n(67294),
                o = n(50378).ZP.div.withConfig({
                    displayName: "styled__AvatarWrapper",
                    componentId: "sc-1ruw40r-0"
                })(["width:", "px;height:", "px;position:relative;display:flex;justify-content:center;align-items:center;overflow:hidden;flex-shrink:0;user-select:none;border-radius:50%;> img{color:transparent;width:100%;height:100%;object-fit:cover;text-align:center;}"], function(e) {
                    return e.$size
                }, function(e) {
                    return e.$size
                }),
                s = n(85893),
                l = ["size", "src", "alt", "title"];

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var d = (0, a.memo)(function(e) {
                var t = e.size,
                    n = e.src,
                    r = e.alt,
                    a = e.title,
                    c = (0, i.Z)(e, l);
                return (0, s.jsx)(o, u(u({
                    $size: void 0 === t ? 40 : t,
                    title: a
                }, c), {}, {
                    children: (0, s.jsx)("img", {
                        src: n,
                        alt: r
                    })
                }))
            })
        },
        80803: function(e, t, n) {
            n.d(t, {
                I: function() {
                    return I
                }
            });
            var r = n(59499),
                i = n(50029),
                a = n(4730),
                o = n(64687),
                s = n.n(o),
                l = n(67294),
                c = n(73935),
                u = n(13661),
                d = n(38877),
                p = n(50378),
                f = n(92230),
                m = (0, p.iv)(["overflow:auto;"]),
                h = p.ZP.div.withConfig({
                    displayName: "styled__BaseModalWrapper",
                    componentId: "sc-1la7f6z-0"
                })(["display:flex;position:", ";align-items:center;justify-content:center;top:0px;left:0px;height:100%;width:100%;z-index:", ";", ""], function(e) {
                    return e.$hasRootParent ? "fixed" : "absolute"
                }, function(e) {
                    return e.$hasRootParent ? 1300 : 1
                }, function(e) {
                    return e.$scrollable && m
                }),
                g = (0, p.iv)(["background-color:rgba(0,0,0,0.65);bottom:0;right:0;left:0;top:0;"]),
                b = (0, p.iv)(["backdrop-filter:blur(2px);bottom:-4px;right:-4px;left:-4px;top:-4px;"]),
                v = p.ZP.div.withConfig({
                    displayName: "styled__ModalBackground",
                    componentId: "sc-1la7f6z-1"
                })(["position:", ";z-index:-1;", " ", ""], function(e) {
                    return e.$hasRootParent ? "fixed" : "absolute"
                }, function(e) {
                    return e.$blurredBackground ? b : g
                }, function(e) {
                    var t = e.$backgroundColor;
                    return t && "background-color: ".concat(t, ";")
                }),
                y = p.ZP.div.withConfig({
                    displayName: "styled__ModalContent",
                    componentId: "sc-1la7f6z-2"
                })(["max-height:100%;max-width:calc(100% - 16px);"]),
                x = (0, p.ZP)(f.z).withConfig({
                    displayName: "styled__CloseButton",
                    componentId: "sc-1la7f6z-3"
                })(["position:fixed;top:8px;right:8px;"]),
                w = p.ZP.div.withConfig({
                    displayName: "styled__VerticalSpacer",
                    componentId: "sc-1la7f6z-4"
                })(["", ""], function(e) {
                    var t = e.$space;
                    return t && "height: ".concat(t, "px;")
                }),
                C = n(71494),
                k = n(85893),
                j = ["rootId", "onEscapeDisabled", "disableEscape", "children", "onClose", "open", "contentStyle", "showCloseButton", "confettiOnClose", "withoutWrapper", "scrollable", "noBackdrop", "dataTestId", "portalRef", "blurBackground", "backgroundColor"];

            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }(0, u.EO)({}), (0, u.gZ)({}), (0, u.nz)({}), (0, u.MN)({}), (0, u.EO)({}), (0, u.gZ)({}), (0, u.F5)({}), (0, u.gZ)({}), (0, u.gZ)({}), (0, u.gZ)({}), (0, u.gZ)({}), (0, u.nz)({}), (0, u.gZ)({}), (0, u.E_)({}), (0, u.gZ)({}), (0, u.gZ)({});
            var I = (0, l.memo)(function(e) {
                var t = e.rootId,
                    n = void 0 === t ? "__next" : t,
                    r = e.onEscapeDisabled,
                    o = e.disableEscape,
                    u = e.children,
                    p = e.onClose,
                    f = e.open,
                    m = e.contentStyle,
                    g = e.showCloseButton,
                    b = e.confettiOnClose,
                    O = e.withoutWrapper,
                    I = e.scrollable,
                    _ = e.noBackdrop,
                    M = (e.dataTestId, e.portalRef),
                    Z = e.blurBackground,
                    S = e.backgroundColor,
                    N = (0, a.Z)(e, j),
                    T = (0, l.useState)(!1),
                    E = T[0],
                    R = T[1],
                    D = (0, l.useRef)(!1),
                    $ = "__next" === n;
                (0, C.P)(f && $), (0, l.useEffect)(function() {
                    b && f && (D.current = !0, R(!1))
                }, [b, f]), (0, l.useEffect)(function() {
                    !f && b && D.current && (D.current = !1, R(!0))
                }, [b, f]);
                var L = (0, l.useCallback)((0, i.Z)(s().mark(function e() {
                    return s().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (o) {
                                    e.next = 3;
                                    break
                                }
                                return null == p || p(), e.abrupt("return");
                            case 3:
                                r && r();
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), [r, o, p]);
                (0, l.useEffect)(function() {
                    if (f) {
                        var e = function(e) {
                            "Escape" === e.key && L()
                        };
                        return window.addEventListener("keydown", e),
                            function() {
                                window.removeEventListener("keydown", e)
                            }
                    }
                }, [f, o, L, p]);
                var z = (0, l.useMemo)(function() {
                        return !g || o ? null : (0, k.jsx)(x, {
                            icon: "Close",
                            onClick: L,
                            variant: "icon-round"
                        })
                    }, [g, o, L]),
                    q = (0, l.useMemo)(function() {
                        return O ? u : (0, k.jsxs)(y, {
                            style: m,
                            children: [(0, k.jsx)(w, {
                                $space: 12
                            }), u, (0, k.jsx)(w, {
                                $space: 12
                            })]
                        })
                    }, [u, m, O]);
                return E ? (0, k.jsx)(d.D, {}) : f ? (0, c.createPortal)((0, k.jsxs)(h, P(P({
                    className: "skool-ui-base-modal",
                    $scrollable: void 0 !== I && I,
                    $hasRootParent: $,
                    ref: M
                }, N), {}, {
                    children: [!_ && (0, k.jsx)(v, {
                        onClick: L,
                        $blurredBackground: Z,
                        $hasRootParent: $,
                        $backgroundColor: S
                    }), q, z]
                })), document.getElementById(n)) : null
            })
        },
        48153: function(e, t, n) {
            n.d(t, {
                x: function() {
                    return f
                }
            });
            var r = n(59499),
                i = n(4730),
                a = n(67294),
                o = n(13661),
                s = n(50378).ZP.div.withConfig({
                    displayName: "styled__BoxWrapper",
                    componentId: "sc-z75ylc-0"
                })(["display:flex;flex-direction:", ";flex-grow:", ";flex-shrink:", ";flex-wrap:", ";justify-content:", ";align-items:", ";align-self:", ";gap:", ";margin:", ";margin-left:", ";margin-right:", ";margin-top:", ";margin-bottom:", ";padding:", ";padding-left:", ";padding-right:", ";padding-top:", ";padding-bottom:", ";height:", ";width:", ";"], function(e) {
                    return e.$flexDirection
                }, function(e) {
                    return e.$flexGrow
                }, function(e) {
                    return e.$flexShrink
                }, function(e) {
                    return e.$flexWrap
                }, function(e) {
                    return e.$justifyContent
                }, function(e) {
                    return e.$alignItems
                }, function(e) {
                    return e.$alignSelf
                }, function(e) {
                    var t = e.$gap;
                    return "number" == typeof t ? "".concat(t, "px") : t
                }, function(e) {
                    var t = e.$margin;
                    return "number" == typeof t ? "".concat(t, "px") : t
                }, function(e) {
                    var t = e.$marginLeft;
                    return "number" == typeof t ? "".concat(t, "px") : t
                }, function(e) {
                    var t = e.$marginRight;
                    return "number" == typeof t ? "".concat(t, "px") : t
                }, function(e) {
                    var t = e.$marginTop;
                    return "number" == typeof t ? "".concat(t, "px") : t
                }, function(e) {
                    var t = e.$marginBottom;
                    return "number" == typeof t ? "".concat(t, "px") : t
                }, function(e) {
                    var t = e.$padding;
                    return "number" == typeof t ? "".concat(t, "px") : t
                }, function(e) {
                    var t = e.$paddingLeft;
                    return "number" == typeof t ? "".concat(t, "px") : t
                }, function(e) {
                    var t = e.$paddingRight;
                    return "number" == typeof t ? "".concat(t, "px") : t
                }, function(e) {
                    var t = e.$paddingTop;
                    return "number" == typeof t ? "".concat(t, "px") : t
                }, function(e) {
                    var t = e.$paddingBottom;
                    return "number" == typeof t ? "".concat(t, "px") : t
                }, function(e) {
                    var t = e.$height;
                    return "number" == typeof t ? "".concat(t, "px") : t
                }, function(e) {
                    var t = e.$width;
                    return "number" == typeof t ? "".concat(t, "px") : t
                }),
                l = n(85893),
                c = ["children", "flexDirection", "flexGrow", "flexShrink", "flexWrap", "justifyContent", "alignItems", "alignSelf", "gap", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom", "padding", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "height", "width"];

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var p = (0, a.forwardRef)(function(e, t) {
                var n = e.children,
                    r = e.flexDirection,
                    a = e.flexGrow,
                    o = e.flexShrink,
                    u = e.flexWrap,
                    p = e.justifyContent,
                    f = e.alignItems,
                    m = e.alignSelf,
                    h = e.gap,
                    g = e.margin,
                    b = e.marginLeft,
                    v = e.marginRight,
                    y = e.marginTop,
                    x = e.marginBottom,
                    w = e.padding,
                    C = e.paddingLeft,
                    k = e.paddingRight,
                    j = e.paddingTop,
                    O = e.paddingBottom,
                    P = e.height,
                    I = e.width,
                    _ = (0, i.Z)(e, c);
                return (0, l.jsx)(s, d(d({
                    ref: t,
                    $flexDirection: r,
                    $flexGrow: a,
                    $flexShrink: o,
                    $flexWrap: u,
                    $justifyContent: p,
                    $alignItems: f,
                    $alignSelf: m,
                    $gap: h,
                    $margin: g,
                    $marginLeft: b,
                    $marginRight: v,
                    $marginTop: y,
                    $marginBottom: x,
                    $padding: w,
                    $paddingLeft: C,
                    $paddingRight: k,
                    $paddingTop: j,
                    $paddingBottom: O,
                    $height: P,
                    $width: I
                }, _), {}, {
                    children: n
                }))
            });
            (0, o.MN)({}), (0, o.nz)({}), (0, o.gG)({}), (0, o.gG)({}), (0, o.nz)({}), (0, o.nz)({}), (0, o.nz)({}), (0, o.nz)({}), (0, o.gG)({}), (0, o.gG)({}), (0, o.gG)({}), (0, o.gG)({}), (0, o.gG)({}), (0, o.gG)({}), (0, o.gG)({}), (0, o.gG)({}), (0, o.gG)({}), (0, o.gG)({}), (0, o.gG)({}), (0, o.gG)({}), (0, o.gG)({});
            var f = (0, a.memo)(p)
        },
        62256: function(e, t, n) {
            n.d(t, {
                H: function() {
                    return b
                }
            });
            var r = n(59499),
                i = n(4730),
                a = n(67294),
                o = n(50378),
                s = n(3284),
                l = n(91425),
                c = (0, o.iv)(["color:", ";"], l.O9.e2),
                u = (0, o.iv)(["justify-content:space-between;"]),
                d = o.ZP.div.withConfig({
                    displayName: "styled__CharacterCountWrapper",
                    componentId: "sc-1tnsota-0"
                })(["display:flex;color:", ";padding-top:8px;justify-content:flex-end;width:100%;", " ", " ", ""], l.O9.n5, s.c.t11, function(e) {
                    return e.$isOver && c
                }, function(e) {
                    return e.$hasError && u
                }),
                p = o.ZP.div.withConfig({
                    displayName: "styled__ErrorWrapper",
                    componentId: "sc-1tnsota-1"
                })(["color:", ";padding:0px 12px 0px 12px;", ""], l.O9.e2, s.c.t11),
                f = n(85893),
                m = ["value", "error", "maxCharacters", "characterCountOverride"];

            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var b = (0, a.memo)(function(e) {
                var t = e.value,
                    n = e.error,
                    r = e.maxCharacters,
                    o = e.characterCountOverride,
                    s = (0, i.Z)(e, m),
                    l = (0, a.useMemo)(function() {
                        return o || t.length
                    }, [o, t]),
                    c = (0, a.useMemo)(function() {
                        return l > r
                    }, [r, l]);
                return (0, f.jsxs)(d, g(g({}, s), {}, {
                    $isOver: c,
                    $hasError: !!n,
                    children: [(0, f.jsx)(p, {
                        children: n
                    }), (0, f.jsx)("span", {
                        children: "".concat(t.length, " / ").concat(r)
                    })]
                }))
            })
        },
        10329: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return a
                }
            });
            var r = n(50378),
                i = n(48153),
                a = (0, r.ZP)(i.x).withConfig({
                    displayName: "Column",
                    componentId: "sc-1kucbtm-0"
                })(["flex-direction:column;"])
        },
        38877: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return d
                }
            });
            var r = n(50029),
                i = n(64687),
                a = n.n(i),
                o = n(56502),
                s = n(63253),
                l = n(67294),
                c = n(50378).ZP.div.withConfig({
                    displayName: "styled__ConfettiWrapper",
                    componentId: "sc-8v1hyy-0"
                })(["position:fixed;top:0px;left:0px;z-index:1100;pointer-events:none;"]),
                u = n(85893),
                d = function() {
                    var e, t = (0, l.useCallback)((e = (0, r.Z)(a().mark(function e(t) {
                        return a().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.R)(t);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function(t) {
                        return e.apply(this, arguments)
                    }), []);
                    return (0, u.jsx)(c, {
                        children: (0, u.jsx)(o.Z, {
                            id: "confetti",
                            init: t,
                            options: {
                                fpsLimit: 60,
                                particles: {
                                    number: {
                                        value: 0
                                    },
                                    color: {
                                        value: ["#F700FF", "#00FF51", "#FFDF40", "#0095FF", "#FF2600"]
                                    },
                                    shape: {
                                        type: ["circle", "square", "polygon"],
                                        options: {
                                            polygon: {
                                                sides: 6
                                            }
                                        }
                                    },
                                    opacity: {
                                        value: 5,
                                        animation: {
                                            enable: !0,
                                            minimumValue: 0,
                                            speed: 2,
                                            startValue: "max",
                                            destroy: "min"
                                        }
                                    },
                                    size: {
                                        value: 5
                                    },
                                    links: {
                                        enable: !1
                                    },
                                    life: {
                                        duration: {
                                            sync: !0,
                                            value: 5
                                        },
                                        count: 1
                                    },
                                    move: {
                                        enable: !0,
                                        gravity: {
                                            enable: !0,
                                            acceleration: 15
                                        },
                                        speed: {
                                            min: 10,
                                            max: 70
                                        },
                                        decay: .1,
                                        direction: "none",
                                        straight: !0,
                                        outModes: {
                                            default: "destroy",
                                            top: "none"
                                        }
                                    },
                                    rotate: {
                                        value: {
                                            min: 0,
                                            max: 360
                                        },
                                        direction: "random",
                                        move: !0,
                                        animation: {
                                            enable: !0,
                                            speed: 60
                                        }
                                    },
                                    tilt: {
                                        direction: "random",
                                        enable: !0,
                                        move: !0,
                                        value: {
                                            min: 0,
                                            max: 360
                                        },
                                        animation: {
                                            enable: !0,
                                            speed: 120
                                        }
                                    },
                                    roll: {
                                        darken: {
                                            enable: !0,
                                            value: 25
                                        },
                                        enable: !0,
                                        speed: {
                                            min: 15,
                                            max: 25
                                        }
                                    },
                                    wobble: {
                                        distance: 30,
                                        enable: !0,
                                        move: !0,
                                        speed: {
                                            min: -15,
                                            max: 15
                                        }
                                    }
                                },
                                detectRetina: !0,
                                emitters: {
                                    direction: "none",
                                    spawnColor: {
                                        animation: {
                                            h: {
                                                enable: !0,
                                                offset: {
                                                    min: 10,
                                                    max: 90
                                                },
                                                speed: .1,
                                                sync: !1
                                            },
                                            l: {
                                                enable: !0,
                                                offset: {
                                                    min: 10,
                                                    max: 90
                                                },
                                                speed: 0,
                                                sync: !1
                                            }
                                        }
                                    },
                                    life: {
                                        count: 1,
                                        duration: .5,
                                        delay: 2
                                    },
                                    rate: {
                                        delay: .1,
                                        quantity: 200
                                    },
                                    size: {
                                        width: 10,
                                        height: 10
                                    },
                                    position: {
                                        x: 50,
                                        y: 45
                                    }
                                }
                            }
                        })
                    })
                }
        },
        24252: function(e, t, n) {
            n.d(t, {
                I: function() {
                    return A
                }
            });
            var r = n(59499),
                i = n(4730),
                a = n(67294),
                o = n(50378),
                s = n(3284),
                l = n(91425),
                c = n(92230),
                u = (0, o.iv)(["transform-origin:0 0;transform:translate(0,-24px) scale(0.8125);"]),
                d = (0, o.iv)(["top:14px;"]),
                p = o.ZP.label.withConfig({
                    displayName: "styled__InputLabel",
                    componentId: "sc-1saiqqb-0"
                })(["", " position:absolute;pointer-events:none;left:14px;top:14px;color:", ";transition:color 200ms cubic-bezier(0,0,0.2,1) 0ms,transform 200ms cubic-bezier(0,0,0.2,1) 0ms;", ";", ";"], s.c.t7, function(e) {
                    return e.$disabled ? l.O9.n4 : l.O9.n5
                }, function(e) {
                    return e.$multiline && d
                }, function(e) {
                    return e.$active && u
                }),
                f = (0, o.iv)(["box-sizing:border-box;height:100%;width:100%;border:none;background-color:transparent;color:", ";", " &:focus{outline:none;}&::placeholder{color:", ";", "}"], l.O9.n7, s.c.t7, l.O9.n5, s.c.t7),
                m = (0, o.iv)(["color:", ";-webkit-text-fill-color:", ";"], l.O9.n4, l.O9.n4),
                h = o.ZP.input.withConfig({
                    displayName: "styled__SingleLineInput",
                    componentId: "sc-1saiqqb-1"
                })(["", " padding:0px 14px;height:52px;", ";"], f, function(e) {
                    return e.$disabled && m
                }),
                g = o.ZP.textarea.withConfig({
                    displayName: "styled__MultiLineInput",
                    componentId: "sc-1saiqqb-2"
                })(["", " resize:none;padding:6px 14px 12px;", ";height:", "px;overflow:", ";"], f, function(e) {
                    return e.$disabled && m
                }, function(e) {
                    return e.$height
                }, function(e) {
                    return e.$hideOverflow ? "hidden" : "auto"
                }),
                b = (0, o.iv)(["> legend{max-width:100%;}"]),
                v = o.ZP.fieldset.withConfig({
                    displayName: "styled__InputBorder",
                    componentId: "sc-1saiqqb-3"
                })(["box-sizing:border-box;position:absolute;top:-5px !important;left:0px !important;right:0px !important;bottom:0px !important;padding:0px 8px;height:calc(100% + 5px);pointer-events:none;min-width:0%;border-radius:4px;overflow:hidden;inset:-6px -2px 0px;border:1px solid ", ";margin:0px;> legend{float:unset;height:11px;max-width:0.01px;padding:0px;> span{padding:0px 5px;visibility:hidden;", "}}", ""], function(e) {
                    return e.$disabled ? l.O9.n4 : l.O9.n3
                }, s.c.t11, function(e) {
                    return e.$active && b
                }),
                y = (0, o.iv)(["", "{border:2px solid ", ";}", "{color:", ";}"], v, l.O9.n7, p, l.O9.n7),
                x = (0, o.iv)(["padding-top:8px;"]),
                w = (0, o.iv)(["", "{border:1px solid ", " !important;}", "{color:", " !important;}"], v, l.O9.e2, p, l.O9.e2),
                C = (0, o.iv)(["display:flex;align-items:center;white-space:nowrap;"]),
                k = (0, o.iv)(["", " padding-left:12px;"], C),
                j = (0, o.iv)(["", " padding-right:12px;"], C),
                O = o.ZP.div.withConfig({
                    displayName: "styled__InputWrapper",
                    componentId: "sc-1saiqqb-4"
                })(["box-sizing:border-box;position:relative;min-height:52px;&:focus-within{", " ", "{", "}", "{", "}}", " ", " ", " ", ""], y, p, u, v, b, function(e) {
                    return e.$multiline && x
                }, function(e) {
                    return e.$error && w
                }, function(e) {
                    return e.$prefix && k
                }, function(e) {
                    return e.$suffix && j
                }),
                P = o.ZP.div.withConfig({
                    displayName: "styled__InputContainer",
                    componentId: "sc-1saiqqb-5"
                })(["display:flex;flex-direction:column;"]),
                I = o.ZP.div.withConfig({
                    displayName: "styled__InputError",
                    componentId: "sc-1saiqqb-6"
                })(["color:", ";padding:8px 12px 0px 12px;", ""], l.O9.e2, s.c.t11),
                _ = o.ZP.span.withConfig({
                    displayName: "styled__InputAdornments",
                    componentId: "sc-1saiqqb-7"
                })(["color:", ";", ""], l.O9.n5, s.c.t5),
                M = (0, o.ZP)(c.z).withConfig({
                    displayName: "styled__ClearButton",
                    componentId: "sc-1saiqqb-8"
                })(["position:absolute;top:50%;transform:translateY(-50%);right:4px;width:34px;height:34px;"]),
                Z = o.ZP.div.withConfig({
                    displayName: "styled__InputInfo",
                    componentId: "sc-1saiqqb-9"
                })(["padding-top:8px;display:flex;align-items:center;> span{white-space:pre;color:", ";", " font-style:italic;}> div{padding-top:0px;}"], l.O9.n5, s.c.t11),
                S = o.ZP.textarea.withConfig({
                    displayName: "styled__HiddenTextArea",
                    componentId: "sc-1saiqqb-10"
                })(["height:0px;top:0px;left:0px;overflow:hidden;position:absolute;visibility:hidden;transform:translateZ(0px);padding-top:0;padding-bottom:0;"]),
                N = n(62256),
                T = n(79801),
                E = ["borderLeftWidth", "borderRightWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingLeft", "paddingRight", "tabSize", "textIndent", "textRendering", "textTransform", "width", "wordBreak"];

            function R(e) {
                return parseInt(e, 10) || 0
            }
            var D = n(85893),
                $ = ["minRows", "maxRows", "onChange", "onKeyPress", "placeholder", "value"];

            function L(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var z = (0, a.forwardRef)(function(e, t) {
                    var n = e.minRows,
                        o = void 0 === n ? 1 : n,
                        s = e.maxRows,
                        l = e.onChange,
                        c = e.onKeyPress,
                        u = e.placeholder,
                        d = e.value,
                        p = void 0 === d ? "" : d,
                        f = (0, i.Z)(e, $),
                        m = (0, a.useRef)(null),
                        h = (0, a.useRef)(null),
                        b = function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return function(e) {
                                t.forEach(function(t) {
                                    "function" == typeof t ? t(e) : null != t && (t.current = e)
                                })
                            }
                        }(t, m),
                        v = (0, a.useState)({
                            height: 0
                        }),
                        y = v[0],
                        x = v[1],
                        w = (0, a.useCallback)(function() {
                            var e, t, n, r, i, a, l, c, d = null == m ? void 0 : m.current,
                                p = null == h ? void 0 : h.current;
                            if (!d || !p) return {};
                            var f = null === (c = window) || void 0 === c ? void 0 : c.getComputedStyle(d);
                            Object.keys(e = E.reduce(function(e, t) {
                                return e[t] = f[t], e
                            }, {})).forEach(function(t) {
                                p.style[t] = e[t]
                            }), p.value = d.value || u || "x";
                            var g = (n = (t = {
                                minRows: o,
                                maxRows: s
                            }).minRows, r = t.maxRows, i = p.scrollHeight, p.value = "x", a = p.scrollHeight, l = i, n && (l = Math.max(n * a, l)), r && (l = Math.min(r * a, l)), {
                                height: (l = Math.max(l, a)) + (R(f.paddingBottom) + R(f.paddingTop)) + (R(f.borderBottomWidth) + R(f.borderTopWidth)),
                                overflowHidden: 1 >= Math.abs(l - i)
                            });
                            return {
                                height: g.height,
                                overflowHidden: g.overflowHidden
                            }
                        }, [s, o, u]),
                        C = (0, a.useCallback)(function() {
                            var e = y.height,
                                t = y.overflowHidden,
                                n = w(),
                                r = n.height,
                                i = n.overflowHidden;
                            void 0 !== r && (e !== r || t !== i) && x({
                                height: r,
                                overflowHidden: i
                            })
                        }, [w, y]),
                        k = (0, a.useCallback)(function(e) {
                            null == l || l(e), C()
                        }, [C, l]);
                    return (0, T.YB)(function() {
                        C()
                    }, []), (0, a.useEffect)(function() {
                        window.addEventListener("resize", C);
                        var e = "undefined" != typeof ResizeObserver ? new ResizeObserver(C) : null;
                        return e && m.current && e.observe(m.current),
                            function() {
                                window.removeEventListener("resize", C), e && e.disconnect()
                            }
                    }, [C]), (0, a.useEffect)(function() {
                        "" === p && C()
                    }, [C, p]), (0, D.jsxs)(D.Fragment, {
                        children: [(0, D.jsx)(g, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? L(Object(n), !0).forEach(function(t) {
                                    (0, r.Z)(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : L(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({
                            ref: b,
                            rows: o,
                            onChange: k,
                            onKeyPress: c,
                            placeholder: u,
                            value: p,
                            $height: y.height,
                            $hideOverflow: null == y ? void 0 : y.overflowHidden
                        }, f)), (0, D.jsx)(S, {
                            "aria-hidden": !0,
                            ref: h,
                            readOnly: !0,
                            tabIndex: -1
                        })]
                    })
                }),
                q = (0, a.memo)(z),
                B = ["label", "value", "error", "readOnly", "onChange", "disabled", "multiline", "placeholder", "staticLabel", "maxCharacters", "type", "autoFocus", "prefix", "suffix", "onClear", "style", "infoLabel", "id", "autoComplete", "inputProps", "variant", "minRows", "maxRows", "onKeyPress"];

            function G(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function W(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? G(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var F = (0, a.forwardRef)(function(e, t) {
                    var n = e.label,
                        r = e.value,
                        o = e.error,
                        s = e.readOnly,
                        l = e.onChange,
                        c = e.disabled,
                        u = e.multiline,
                        d = e.placeholder,
                        f = e.staticLabel,
                        m = e.maxCharacters,
                        g = e.type,
                        b = void 0 === g ? "text" : g,
                        y = e.autoFocus,
                        x = e.prefix,
                        w = e.suffix,
                        C = void 0 === w ? "" : w,
                        k = e.onClear,
                        j = e.style,
                        S = e.infoLabel,
                        T = e.id,
                        E = e.autoComplete,
                        R = e.inputProps,
                        $ = void 0 === R ? {} : R,
                        L = e.variant,
                        z = void 0 === L ? "default" : L,
                        G = e.minRows,
                        F = void 0 === G ? 1 : G,
                        A = e.maxRows,
                        U = e.onKeyPress,
                        H = (0, i.Z)(e, B),
                        V = (0, a.useMemo)(function() {
                            return !!m && r.length > m
                        }, [m, r]),
                        Y = (0, a.useMemo)(function() {
                            return x ? (0, a.isValidElement)(x) ? x : (0, D.jsx)(_, {
                                children: x
                            }) : null
                        }, [x]),
                        J = (0, a.useMemo)(function() {
                            return C ? (0, a.isValidElement)(C) ? C : (0, D.jsx)(_, {
                                children: C
                            }) : null
                        }, [C]),
                        K = (0, a.useMemo)(function() {
                            return k && r ? (0, D.jsx)(M, {
                                iconSize: 14,
                                icon: "Close",
                                onClick: k,
                                variant: "icon-borderless",
                                tabIndex: -1
                            }) : null
                        }, [r, k]),
                        X = (0, a.useMemo)(function() {
                            var e = W(W({}, j), {}, {
                                    paddingRight: k && r ? 36 : void 0
                                }),
                                i = {
                                    $disabled: c,
                                    value: "password" === b ? void 0 : r,
                                    style: e,
                                    autoFocus: y,
                                    readOnly: s,
                                    onChange: l,
                                    onKeyPress: U,
                                    placeholder: f ? d : void 0,
                                    id: T,
                                    autoComplete: E,
                                    "data-testid": "input-component"
                                };
                            return (0, D.jsxs)(O, W(W({}, H), {}, {
                                $prefix: !!x,
                                $suffix: !!C,
                                $disabled: c,
                                $multiline: u,
                                $error: !!o || V,
                                children: [Y, u ? (0, D.jsx)(q, W(W(W({
                                    ref: t
                                }, i), $), {}, {
                                    minRows: F,
                                    maxRows: A
                                })) : (0, D.jsx)(h, W(W(W({
                                    ref: t
                                }, i), $), {}, {
                                    type: b,
                                    disabled: c
                                })), J, K, "borderless" !== z && (0, D.jsx)(v, {
                                    $active: !!r || f,
                                    $disabled: c,
                                    children: (0, D.jsx)("legend", {
                                        style: {
                                            width: n ? void 0 : 0
                                        },
                                        children: (0, D.jsx)("span", {
                                            children: n
                                        })
                                    })
                                }), (0, D.jsx)(p, {
                                    $disabled: c,
                                    $active: !!r || f,
                                    $multiline: u,
                                    children: n
                                })]
                            }))
                        }, [j, k, r, H, x, C, c, u, o, V, z, Y, y, s, l, U, f, d, b, T, E, t, F, A, $, J, K, n]),
                        Q = (0, a.useMemo)(function() {
                            return !o || m ? null : (0, D.jsx)(I, {
                                children: o
                            })
                        }, [o, m]),
                        ee = (0, a.useMemo)(function() {
                            return m ? (0, D.jsx)(N.H, {
                                value: r,
                                maxCharacters: m,
                                error: o
                            }) : null
                        }, [r, o, m]),
                        et = (0, a.useMemo)(function() {
                            return !S || o ? null : (0, a.isValidElement)(S) ? S : (0, D.jsx)("span", {
                                style: {
                                    paddingLeft: 8
                                },
                                children: S
                            })
                        }, [o, S]),
                        en = (0, a.useMemo)(function() {
                            return S || ee ? (0, D.jsxs)(Z, {
                                children: [et, ee]
                            }) : null
                        }, [S, et, ee]);
                    return (0, D.jsxs)(P, {
                        children: [X, en, Q]
                    })
                }),
                A = (0, a.memo)(F)
        },
        97628: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return a
                }
            });
            var r = n(50378),
                i = n(48153),
                a = (0, r.ZP)(i.x).withConfig({
                    displayName: "Row",
                    componentId: "sc-w8j4n-0"
                })(["flex-direction:row;"])
        },
        90879: function(e, t, n) {
            n.d(t, {
                u: function() {
                    return O
                }
            });
            var r = n(59499),
                i = n(90116),
                a = n(4730),
                o = n(67294),
                s = n(73935),
                l = n(73793),
                c = n(21190),
                u = n(37894),
                d = n(17199),
                p = function(e, t) {
                    (0, o.useEffect)(function() {
                        var n = function(n) {
                            if (null != e && e.length) {
                                for (var r = !1, i = 0; i < e.length && !r; i++) r = e[i].current && e[i].current.contains(n.target);
                                if (r) return
                            } else if (!e.current || e.current.contains(n.target)) return;
                            t(n)
                        };
                        return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n),
                            function() {
                                document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n)
                            }
                    }, [e, t])
                },
                f = n(20863),
                m = n(50378),
                h = n(92208),
                g = n(3284),
                b = n(91425),
                v = m.ZP.div.withConfig({
                    displayName: "styled__TooltipWrapper",
                    componentId: "sc-7zjhea-0"
                })(["width:fit-content;"]),
                y = (0, m.iv)(["background-color:", ";color:", ";border:1px solid ", ";padding:7px;"], b.O9.n1, b.O9.n7, b.O9.n3),
                x = (0, m.ZP)(h.E.div).withConfig({
                    displayName: "styled__TooltipContent",
                    componentId: "sc-7zjhea-1"
                })(["background-color:", ";transform-origin:bottom center;color:", ";border-radius:5px;text-align:center;padding:8px;cursor:auto;will-change:transform;pointer-events:", ";", " ", " ", ";"], function(e) {
                    return "dark" === e.$variant ? b.O9.n7 : b.O9.n1
                }, function(e) {
                    return "dark" === e.$variant ? b.O9.n1 : b.O9.n6
                }, function(e) {
                    return e.$interactive ? "auto" : "none"
                }, g.c.t11, d.Wn, function(e) {
                    return e.theme.isDarkTheme && y
                }),
                w = n(85893),
                C = ["children", "content", "placement", "showMobile", "interactive", "enterDelay", "enterNextDelay", "leaveDelay", "variant", "yOffset", "hidden", "onOpen", "onClose", "animated", "portalRefs"];

            function k(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var O = (0, o.memo)(function(e) {
                var t = e.children,
                    n = e.content,
                    r = e.placement,
                    m = e.showMobile,
                    h = void 0 !== m && m,
                    g = e.interactive,
                    b = void 0 !== g && g,
                    y = e.enterDelay,
                    k = void 0 === y ? 300 : y,
                    O = e.enterNextDelay,
                    P = void 0 === O ? k : O,
                    I = e.leaveDelay,
                    _ = void 0 === I ? 250 : I,
                    M = e.variant,
                    Z = e.yOffset,
                    S = e.hidden,
                    N = e.onOpen,
                    T = e.onClose,
                    E = e.animated,
                    R = void 0 === E || E,
                    D = e.portalRefs,
                    $ = void 0 === D ? [] : D,
                    L = (0, a.Z)(e, C),
                    z = (0, o.useState)(!1),
                    q = z[0],
                    B = z[1],
                    G = (0, o.useState)(null),
                    W = G[0],
                    F = G[1],
                    A = (0, o.useRef)(null),
                    U = (0, o.useRef)(null),
                    H = (0, o.useRef)(),
                    V = (0, o.useRef)(),
                    Y = (0, o.useRef)(!1),
                    J = (0, l.bI)("isMobile").isMobile,
                    K = (0, o.useMemo)(function() {
                        return "function" != typeof n ? n : q ? n() : null
                    }, [q, n]),
                    X = (0, u.D)(A.current, U.current, {
                        placement: void 0 === r ? "top" : r,
                        modifiers: [{
                            name: "arrow",
                            options: {
                                element: W
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: [0, void 0 === Z ? 4 : Z]
                            }
                        }],
                        strategy: "fixed"
                    }),
                    Q = X.styles,
                    ee = X.attributes,
                    et = (0, o.useCallback)(function() {
                        H.current && (clearTimeout(H.current), H.current = void 0)
                    }, []),
                    en = (0, o.useCallback)(function() {
                        V.current && (clearTimeout(V.current), V.current = void 0)
                    }, []),
                    er = (0, o.useCallback)(function() {
                        et(), en()
                    }, [et, en]),
                    ei = (0, o.useCallback)(function(e) {
                        er(), B(!0), Y.current = !0, null == N || N(e)
                    }, [N, er]),
                    ea = (0, o.useCallback)(function(e) {
                        if (er(), Y.current && !P) {
                            ei(e);
                            return
                        }
                        H.current = setTimeout(function() {
                            ei(e)
                        }, Y.current ? P : k)
                    }, [k, P, ei, er]),
                    eo = (0, o.useCallback)(function(e) {
                        er(), B(!1), null == T || T(e)
                    }, [T, er]),
                    es = (0, o.useCallback)(function(e) {
                        er(), V.current = setTimeout(function() {
                            eo(e)
                        }, _)
                    }, [eo, _, er]),
                    el = (0, o.useCallback)(function(e) {
                        var t;
                        null !== (t = A.current) && void 0 !== t && t.contains(e.target) || eo()
                    }, [eo]);
                p((0, o.useMemo)(function() {
                    return [U].concat((0, i.Z)($))
                }, [$]), el);
                var ec = (0, o.useCallback)(function(e) {
                        J || ea(e)
                    }, [J, ea]),
                    eu = (0, o.useCallback)(function(e) {
                        if (b) {
                            es(e);
                            return
                        }
                        eo(e)
                    }, [eo, es, b]),
                    ed = (0, o.useCallback)(function(e) {
                        b && ec(e)
                    }, [ec, b]),
                    ep = (0, o.useCallback)(function(e) {
                        b && eu(e)
                    }, [eu, b]),
                    ef = (0, o.useCallback)(function(e) {
                        J && h && (e.stopPropagation(), B(function(e) {
                            return !e
                        }))
                    }, [J, h]);
                (0, o.useEffect)(function() {
                    return function() {
                        er()
                    }
                }, [er]);
                var em = (0, o.useMemo)(function() {
                        return j(j({}, Q.popper), {}, {
                            zIndex: 1400
                        })
                    }, [Q.popper]),
                    eh = (0, o.useMemo)(function() {
                        return R ? d.oR : {}
                    }, [R]);
                return (0, w.jsxs)(w.Fragment, {
                    children: [(0, w.jsx)(v, j(j({
                        ref: A,
                        onClick: ef,
                        onMouseEnter: ec,
                        onMouseLeave: eu
                    }, L), {}, {
                        children: t
                    })), (0, f.S_)() ? (0, s.createPortal)((0, w.jsx)(c.M, {
                        children: !S && q && K ? (0, w.jsx)("div", j(j({
                            ref: U,
                            style: em,
                            onMouseEnter: ed,
                            onMouseLeave: ep
                        }, ee.popper), {}, {
                            children: (0, w.jsxs)(x, j(j({}, eh), {}, {
                                $variant: void 0 === M ? "dark" : M,
                                $interactive: b,
                                children: [(0, w.jsx)("div", {
                                    ref: F,
                                    style: Q.arrow,
                                    id: "arrow"
                                }), K]
                            }))
                        })) : null
                    }), document.body) : null]
                })
            })
        },
        94619: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return m
                }
            });
            var r = n(59499),
                i = n(4730),
                a = n(67294),
                o = n(50378),
                s = n(91425),
                l = n(3284),
                c = o.ZP.div.withConfig({
                    displayName: "styled__TypographyWrapper",
                    componentId: "sc-70zmwu-0"
                })(["display:", ";color:", ";text-align:", ";line-height:", ";", ";", ";max-height:", ";overflow-y:", ";"], function(e) {
                    return e.$inline && "inline-block"
                }, function(e) {
                    return e.$color || s.O9.n7
                }, function(e) {
                    return e.$textAlign
                }, function(e) {
                    return e.$lineHeight
                }, function(e) {
                    var t = e.$variant;
                    return t && l.c[t]
                }, function(e) {
                    return e.$ellipsis && l.c.ellipsis
                }, function(e) {
                    var t = e.$lineHeight,
                        n = e.$maxLines,
                        r = e.$variant;
                    if (n) {
                        var i = l.w[r];
                        return (t ? t * n : i.fontSize * i.lineHeight * n) + "px"
                    }
                }, function(e) {
                    return e.$maxLines ? "hidden" : void 0
                }),
                u = n(85893),
                d = ["children", "inline", "color", "textAlign", "lineHeight", "variant", "ellipsis", "maxLines"];

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

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var m = (0, a.memo)(function(e) {
                var t = e.children,
                    n = e.inline,
                    r = e.color,
                    a = e.textAlign,
                    o = e.lineHeight,
                    s = e.variant,
                    l = e.ellipsis,
                    p = e.maxLines,
                    m = (0, i.Z)(e, d);
                return (0, u.jsx)(c, f(f({
                    $inline: n,
                    $color: r,
                    $textAlign: a,
                    $lineHeight: o,
                    $variant: s,
                    $ellipsis: l,
                    $maxLines: p
                }, m), {}, {
                    children: t
                }))
            })
        },
        71494: function(e, t, n) {
            n.d(t, {
                P: function() {
                    return a
                }
            });
            var r = n(67294),
                i = 0;

            function a(e) {
                (0, r.useEffect)(function() {
                    if (e) {
                        if (1 == ++i) {
                            var t, n = (t = document.documentElement.clientWidth, Math.abs(window.innerWidth - t));
                            document.body.style.overflow = "hidden", document.body.style.paddingRight = "".concat(n, "px")
                        }
                        return function() {
                            0 == --i && (document.body.style.overflow = null, document.body.style.paddingRight = null)
                        }
                    }
                }, [e])
            }
        },
        3241: function(e, t, n) {
            n.d(t, {
                u_: function() {
                    return P
                },
                fe: function() {
                    return v
                },
                mz: function() {
                    return y
                },
                xB: function() {
                    return b
                }
            });
            var r = n(59499),
                i = n(4730),
                a = n(67294),
                o = n(73793),
                s = n(92230),
                l = n(80803),
                c = n(50378),
                u = n(3284),
                d = n(17199),
                p = n(91425),
                f = (0, c.iv)(["border:unset;border-radius:0;width:100%;height:100%;"]),
                m = (0, c.iv)(["padding:24px;overflow-y:auto;"]),
                h = c.ZP.div.withConfig({
                    displayName: "styled__ModalWrapper",
                    componentId: "sc-rypeb5-0"
                })(["padding:32px;border-radius:10px;background:", ";border:1px solid ", ";position:relative;", " ", " ", ""], p.O9.n1, p.O9.n3, d.Wn, function(e) {
                    return e.theme.isMobile && m
                }, function(e) {
                    var t = e.theme,
                        n = e.$shouldFullscreenOnMobile;
                    return t.isMobile && n && f
                }),
                g = c.ZP.div.withConfig({
                    displayName: "styled__ModalCloseButtonTopBar",
                    componentId: "sc-rypeb5-1"
                })(["top:11px;left:2px;position:absolute;z-index:1;"]),
                b = c.ZP.div.withConfig({
                    displayName: "styled__ModalHeader",
                    componentId: "sc-rypeb5-2"
                })(["margin-bottom:16px;word-break:break-word;", ""], u.c.t1),
                v = c.ZP.div.withConfig({
                    displayName: "styled__ModalBody",
                    componentId: "sc-rypeb5-3"
                })(["", ""], u.c.t7),
                y = c.ZP.div.withConfig({
                    displayName: "styled__ModalFooter",
                    componentId: "sc-rypeb5-4"
                })(["margin-top:32px;"]),
                x = n(85893),
                w = ["children", "size", "contentStyle", "wrapperStyle", "shouldFullscreenOnMobile", "onClose", "closeIcon"];

            function C(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var j = {
                    small: 454,
                    medium: 800,
                    large: 1074
                },
                O = {
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "100%",
                    height: "100%"
                },
                P = (0, a.memo)(function(e) {
                    var t = e.children,
                        n = e.size,
                        r = e.contentStyle,
                        c = e.wrapperStyle,
                        u = e.shouldFullscreenOnMobile,
                        d = e.onClose,
                        p = e.closeIcon,
                        f = (0, i.Z)(e, w),
                        m = (0, o.bI)("isMobile").isMobile,
                        b = (0, a.useMemo)(function() {
                            return m && u ? k(k({}, r), O) : j[n] ? k(k({}, r), {}, {
                                width: j[n]
                            }) : r
                        }, [n, r, m, u]);
                    return (0, x.jsx)(l.I, k(k({
                        withoutWrapper: m && u,
                        contentStyle: b,
                        onClose: d
                    }, f), {}, {
                        children: (0, x.jsxs)(h, {
                            $shouldFullscreenOnMobile: u,
                            style: c,
                            children: [m && u && d && (0, x.jsx)(g, {
                                children: p || (0, x.jsx)(s.z, {
                                    icon: "Close",
                                    iconSize: 14,
                                    variant: "icon-borderless",
                                    onClick: d
                                })
                            }), t]
                        })
                    }))
                })
        }
    }
]);