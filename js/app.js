! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(f, e) {
    function t(e, t) {
        return t.toUpperCase()
    }
    var n = [],
        u = n.slice,
        m = n.concat,
        r = n.push,
        o = n.indexOf,
        i = {},
        a = i.toString,
        g = i.hasOwnProperty,
        v = {},
        b = f.document,
        s = "2.1.1",
        x = function(e, t) {
            return new x.fn.init(e, t)
        },
        l = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        c = /^-ms-/,
        d = /-([\da-z])/gi;

    function p(e) {
        var t = e.length,
            n = x.type(e);
        return "function" !== n && !x.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
    }
    x.fn = x.prototype = {
        jquery: s,
        constructor: x,
        selector: "",
        length: 0,
        toArray: function() {
            return u.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : u.call(this)
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return x.each(this, e, t)
        },
        map: function(n) {
            return this.pushStack(x.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(u.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: r,
        sort: n.sort,
        splice: n.splice
    }, x.extend = x.fn.extend = function() {
        var e, t, n, i, o, a, s = arguments[0] || {},
            r = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[r] || {}, r++), "object" == typeof s || x.isFunction(s) || (s = {}), r === l && (s = this, r--); r < l; r++)
            if (null != (e = arguments[r]))
                for (t in e) n = s[t], s !== (i = e[t]) && (c && i && (x.isPlainObject(i) || (o = x.isArray(i))) ? (a = o ? (o = !1, n && x.isArray(n) ? n : []) : n && x.isPlainObject(n) ? n : {}, s[t] = x.extend(c, a, i)) : void 0 !== i && (s[t] = i));
        return s
    }, x.extend({
        expando: "jQuery" + (s + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === x.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !x.isArray(e) && 0 <= e - parseFloat(e)
        },
        isPlainObject: function(e) {
            return "object" === x.type(e) && !e.nodeType && !x.isWindow(e) && !(e.constructor && !g.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[a.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = x.trim(e)) && (1 === e.indexOf("use strict") ? ((t = b.createElement("script")).text = e, b.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(c, "ms-").replace(d, t)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var i = 0,
                o = e.length,
                a = p(e);
            if (n) {
                if (a)
                    for (; i < o && !1 !== t.apply(e[i], n); i++);
                else
                    for (i in e)
                        if (!1 === t.apply(e[i], n)) break
            } else if (a)
                for (; i < o && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(l, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : r.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : o.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, a = e.length, s = !n; o < a; o++) !t(e[o], o) != s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o = 0,
                a = e.length,
                s = [];
            if (p(e))
                for (; o < a; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return m.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), x.isFunction(e) ? (i = u.call(arguments, 2), (o = function() {
                return e.apply(t || this, i.concat(u.call(arguments)))
            }).guid = e.guid = e.guid || x.guid++, o) : void 0
        },
        now: Date.now,
        support: v
    }), x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
        function d(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }
        var e, f, w, a, i, m, p, g, k, c, u, v, T, o, b, y, s, r, x, S = "sizzle" + -new Date,
            _ = n.document,
            C = 0,
            h = 0,
            l = oe(),
            D = oe(),
            O = oe(),
            I = function(e, t) {
                return e === t && (u = !0), 0
            },
            M = "undefined",
            E = {}.hasOwnProperty,
            t = [],
            A = t.pop,
            j = t.push,
            $ = t.push,
            L = t.slice,
            N = t.indexOf || function(e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (this[t] === e) return t;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            W = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            H = W.replace("w", "w#"),
            B = "\\[" + R + "*(" + W + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + R + "*\\]",
            U = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
            F = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            q = new RegExp("^" + R + "*," + R + "*"),
            V = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            z = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"),
            Y = new RegExp(U),
            G = new RegExp("^" + H + "$"),
            J = {
                ID: new RegExp("^#(" + W + ")"),
                CLASS: new RegExp("^\\.(" + W + ")"),
                TAG: new RegExp("^(" + W.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + B),
                PSEUDO: new RegExp("^" + U),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = /'|\\/g,
            ne = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig");
        try {
            $.apply(t = L.call(_.childNodes), _.childNodes), t[_.childNodes.length].nodeType
        } catch (e) {
            $ = {
                apply: t.length ? function(e, t) {
                    j.apply(e, L.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ie(e, t, n, i) {
            var o, a, s, r, l, c, u, d, p, h;
            if ((t ? t.ownerDocument || t : _) !== T && v(t), n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (r = (t = t || T).nodeType) && 9 !== r) return [];
            if (b && !i) {
                if (o = Q.exec(e))
                    if (s = o[1]) {
                        if (9 === r) {
                            if (!(a = t.getElementById(s)) || !a.parentNode) return n;
                            if (a.id === s) return n.push(a), n
                        } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && x(t, a) && a.id === s) return n.push(a), n
                    } else {
                        if (o[2]) return $.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = o[3]) && f.getElementsByClassName && t.getElementsByClassName) return $.apply(n, t.getElementsByClassName(s)), n
                    } if (f.qsa && (!y || !y.test(e))) {
                    if (d = u = S, p = t, h = 9 === r && e, 1 === r && "object" !== t.nodeName.toLowerCase()) {
                        for (c = m(e), (u = t.getAttribute("id")) ? d = u.replace(te, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;) c[l] = d + fe(c[l]);
                        p = ee.test(e) && pe(t.parentNode) || t, h = c.join(",")
                    }
                    if (h) try {
                        return $.apply(n, p.querySelectorAll(h)), n
                    } catch (e) {} finally {
                        u || t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(F, "$1"), t, n, i)
        }

        function oe() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > w.cacheLength && delete e[i.shift()], e[t + " "] = n
            }
        }

        function ae(e) {
            return e[S] = !0, e
        }

        function se(e) {
            var t = T.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function re(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) w.attrHandle[n[i]] = t
        }

        function le(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ce(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function ue(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function de(s) {
            return ae(function(a) {
                return a = +a, ae(function(e, t) {
                    for (var n, i = s([], e.length, a), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function pe(e) {
            return e && typeof e.getElementsByTagName !== M && e
        }
        for (e in f = ie.support = {}, i = ie.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, v = ie.setDocument = function(e) {
                var t, l = e ? e.ownerDocument || e : _,
                    n = l.defaultView;
                return l !== T && 9 === l.nodeType && l.documentElement ? (o = (T = l).documentElement, b = !i(l), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function() {
                    v()
                }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
                    v()
                })), f.attributes = se(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), f.getElementsByTagName = se(function(e) {
                    return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length
                }), f.getElementsByClassName = Z.test(l.getElementsByClassName) && se(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), f.getById = se(function(e) {
                    return o.appendChild(e).id = S, !l.getElementsByName || !l.getElementsByName(S).length
                }), f.getById ? (w.find.ID = function(e, t) {
                    if (typeof t.getElementById !== M && b) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, w.filter.ID = function(e) {
                    var t = e.replace(ne, d);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete w.find.ID, w.filter.ID = function(e) {
                    var n = e.replace(ne, d);
                    return function(e) {
                        var t = typeof e.getAttributeNode !== M && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }), w.find.TAG = f.getElementsByTagName ? function(e, t) {
                    return typeof t.getElementsByTagName !== M ? t.getElementsByTagName(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        a = t.getElementsByTagName(e);
                    if ("*" !== e) return a;
                    for (; n = a[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }, w.find.CLASS = f.getElementsByClassName && function(e, t) {
                    return typeof t.getElementsByClassName !== M && b ? t.getElementsByClassName(e) : void 0
                }, s = [], y = [], (f.qsa = Z.test(l.querySelectorAll)) && (se(function(e) {
                    e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && y.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + R + "*(?:value|" + P + ")"), e.querySelectorAll(":checked").length || y.push(":checked")
                }), se(function(e) {
                    var t = l.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + R + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
                })), (f.matchesSelector = Z.test(r = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && se(function(e) {
                    f.disconnectedMatch = r.call(e, "div"), r.call(e, "[s!='']:x"), s.push("!=", U)
                }), y = y.length && new RegExp(y.join("|")), s = s.length && new RegExp(s.join("|")), t = Z.test(o.compareDocumentPosition), x = t || Z.test(o.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, I = t ? function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument === _ && x(_, e) ? -1 : t === l || t.ownerDocument === _ && x(_, t) ? 1 : c ? N.call(c, e) - N.call(c, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        r = [t];
                    if (!o || !a) return e === l ? -1 : t === l ? 1 : o ? -1 : a ? 1 : c ? N.call(c, e) - N.call(c, t) : 0;
                    if (o === a) return le(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) r.unshift(n);
                    for (; s[i] === r[i];) i++;
                    return i ? le(s[i], r[i]) : s[i] === _ ? -1 : r[i] === _ ? 1 : 0
                }, l) : T
            }, ie.matches = function(e, t) {
                return ie(e, null, null, t)
            }, ie.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== T && v(e), t = t.replace(z, "='$1']"), !(!f.matchesSelector || !b || s && s.test(t) || y && y.test(t))) try {
                    var n = r.call(e, t);
                    if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < ie(t, T, null, [e]).length
            }, ie.contains = function(e, t) {
                return (e.ownerDocument || e) !== T && v(e), x(e, t)
            }, ie.attr = function(e, t) {
                (e.ownerDocument || e) !== T && v(e);
                var n = w.attrHandle[t.toLowerCase()],
                    i = n && E.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !b) : void 0;
                return void 0 !== i ? i : f.attributes || !b ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, ie.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ie.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (u = !f.detectDuplicates, c = !f.sortStable && e.slice(0), e.sort(I), u) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return c = null, e
            }, a = ie.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += a(t);
                return n
            }, (w = ie.selectors = {
                cacheLength: 50,
                createPseudo: ae,
                match: J,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ne, d), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return J.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = m(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ne, d).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = l[e + " "];
                        return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && l(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== M && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, i, o) {
                        return function(e) {
                            var t = ie.attr(e, n);
                            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === o : "!=" === i ? t !== o : "^=" === i ? o && 0 === t.indexOf(o) : "*=" === i ? o && -1 < t.indexOf(o) : "$=" === i ? o && t.slice(-o.length) === o : "~=" === i ? -1 < (" " + t + " ").indexOf(o) : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"))
                        }
                    },
                    CHILD: function(h, e, t, f, m) {
                        var g = "nth" !== h.slice(0, 3),
                            v = "last" !== h.slice(-4),
                            b = "of-type" === e;
                        return 1 === f && 0 === m ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var i, o, a, s, r, l, c = g != v ? "nextSibling" : "previousSibling",
                                u = e.parentNode,
                                d = b && e.nodeName.toLowerCase(),
                                p = !n && !b;
                            if (u) {
                                if (g) {
                                    for (; c;) {
                                        for (a = e; a = a[c];)
                                            if (b ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
                                        l = c = "only" === h && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [v ? u.firstChild : u.lastChild], v && p) {
                                    for (r = (i = (o = u[S] || (u[S] = {}))[h] || [])[0] === C && i[1], s = i[0] === C && i[2], a = r && u.childNodes[r]; a = ++r && a && a[c] || (s = r = 0) || l.pop();)
                                        if (1 === a.nodeType && ++s && a === e) {
                                            o[h] = [C, r, s];
                                            break
                                        }
                                } else if (p && (i = (e[S] || (e[S] = {}))[h]) && i[0] === C) s = i[1];
                                else
                                    for (;
                                        (a = ++r && a && a[c] || (s = r = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++s || (p && ((a[S] || (a[S] = {}))[h] = [C, s]), a !== e)););
                                return (s -= m) === f || s % f == 0 && 0 <= s / f
                            }
                        }
                    },
                    PSEUDO: function(e, a) {
                        var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                        return s[S] ? s(a) : 1 < s.length ? (t = [e, e, "", a], w.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, t) {
                            for (var n, i = s(e, a), o = i.length; o--;) e[n = N.call(e, i[o])] = !(t[n] = i[o])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: ae(function(e) {
                        var i = [],
                            o = [],
                            r = p(e.replace(F, "$1"));
                        return r[S] ? ae(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, t, n) {
                            return i[0] = e, r(i, null, n, o), !o.pop()
                        }
                    }),
                    has: ae(function(t) {
                        return function(e) {
                            return 0 < ie(t, e).length
                        }
                    }),
                    contains: ae(function(t) {
                        return function(e) {
                            return -1 < (e.textContent || e.innerText || a(e)).indexOf(t)
                        }
                    }),
                    lang: ae(function(n) {
                        return G.test(n || "") || ie.error("unsupported lang: " + n), n = n.replace(ne, d).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = b ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === o
                    },
                    focus: function(e) {
                        return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !w.pseudos.empty(e)
                    },
                    header: function(e) {
                        return K.test(e.nodeName)
                    },
                    input: function(e) {
                        return X.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: de(function() {
                        return [0]
                    }),
                    last: de(function(e, t) {
                        return [t - 1]
                    }),
                    eq: de(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: de(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: de(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: de(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: de(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = w.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[e] = ce(e);
        for (e in {
                submit: !0,
                reset: !0
            }) w.pseudos[e] = ue(e);

        function he() {}

        function fe(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function me(s, e, t) {
            var r = e.dir,
                l = t && "parentNode" === r,
                c = h++;
            return e.first ? function(e, t, n) {
                for (; e = e[r];)
                    if (1 === e.nodeType || l) return s(e, t, n)
            } : function(e, t, n) {
                var i, o, a = [C, c];
                if (n) {
                    for (; e = e[r];)
                        if ((1 === e.nodeType || l) && s(e, t, n)) return !0
                } else
                    for (; e = e[r];)
                        if (1 === e.nodeType || l) {
                            if ((i = (o = e[S] || (e[S] = {}))[r]) && i[0] === C && i[1] === c) return a[2] = i[2];
                            if ((o[r] = a)[2] = s(e, t, n)) return !0
                        }
            }
        }

        function ge(o) {
            return 1 < o.length ? function(e, t, n) {
                for (var i = o.length; i--;)
                    if (!o[i](e, t, n)) return !1;
                return !0
            } : o[0]
        }

        function ve(e, t, n, i, o) {
            for (var a, s = [], r = 0, l = e.length, c = null != t; r < l; r++) !(a = e[r]) || n && !n(a, i, o) || (s.push(a), c && t.push(r));
            return s
        }

        function be(h, f, m, g, v, e) {
            return g && !g[S] && (g = be(g)), v && !v[S] && (v = be(v, e)), ae(function(e, t, n, i) {
                var o, a, s, r = [],
                    l = [],
                    c = t.length,
                    u = e || function(e, t, n) {
                        for (var i = 0, o = t.length; i < o; i++) ie(e, t[i], n);
                        return n
                    }(f || "*", n.nodeType ? [n] : n, []),
                    d = !h || !e && f ? u : ve(u, r, h, n, i),
                    p = m ? v || (e ? h : c || g) ? [] : t : d;
                if (m && m(d, p, n, i), g)
                    for (o = ve(p, l), g(o, [], n, i), a = o.length; a--;)(s = o[a]) && (p[l[a]] = !(d[l[a]] = s));
                if (e) {
                    if (v || h) {
                        if (v) {
                            for (o = [], a = p.length; a--;)(s = p[a]) && o.push(d[a] = s);
                            v(null, p = [], o, i)
                        }
                        for (a = p.length; a--;)(s = p[a]) && -1 < (o = v ? N.call(e, s) : r[a]) && (e[o] = !(t[o] = s))
                    }
                } else p = ve(p === t ? p.splice(c, p.length) : p), v ? v(null, t, p, i) : $.apply(t, p)
            })
        }

        function ye(e) {
            for (var i, t, n, o = e.length, a = w.relative[e[0].type], s = a || w.relative[" "], r = a ? 1 : 0, l = me(function(e) {
                    return e === i
                }, s, !0), c = me(function(e) {
                    return -1 < N.call(i, e)
                }, s, !0), u = [function(e, t, n) {
                    return !a && (n || t !== k) || ((i = t).nodeType ? l(e, t, n) : c(e, t, n))
                }]; r < o; r++)
                if (t = w.relative[e[r].type]) u = [me(ge(u), t)];
                else {
                    if ((t = w.filter[e[r].type].apply(null, e[r].matches))[S]) {
                        for (n = ++r; n < o && !w.relative[e[n].type]; n++);
                        return be(1 < r && ge(u), 1 < r && fe(e.slice(0, r - 1).concat({
                            value: " " === e[r - 2].type ? "*" : ""
                        })).replace(F, "$1"), t, r < n && ye(e.slice(r, n)), n < o && ye(e = e.slice(n)), n < o && fe(e))
                    }
                    u.push(t)
                } return ge(u)
        }
        return he.prototype = w.filters = w.pseudos, w.setFilters = new he, m = ie.tokenize = function(e, t) {
            var n, i, o, a, s, r, l, c = D[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, r = [], l = w.preFilter; s;) {
                for (a in n && !(i = q.exec(s)) || (i && (s = s.slice(i[0].length) || s), r.push(o = [])), n = !1, (i = V.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(F, " ")
                    }), s = s.slice(n.length)), w.filter) !(i = J[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? ie.error(e) : D(e, r).slice(0)
        }, p = ie.compile = function(e, t) {
            var n, i = [],
                o = [],
                a = O[e + " "];
            if (!a) {
                for (n = (t = t || m(e)).length; n--;)(a = ye(t[n]))[S] ? i.push(a) : o.push(a);
                (a = O(e, function(g, v) {
                    function e(e, t, n, i, o) {
                        var a, s, r, l = 0,
                            c = "0",
                            u = e && [],
                            d = [],
                            p = k,
                            h = e || y && w.find.TAG("*", o),
                            f = C += null == p ? 1 : Math.random() || .1,
                            m = h.length;
                        for (o && (k = t !== T && t); c !== m && null != (a = h[c]); c++) {
                            if (y && a) {
                                for (s = 0; r = g[s++];)
                                    if (r(a, t, n)) {
                                        i.push(a);
                                        break
                                    } o && (C = f)
                            }
                            b && ((a = !r && a) && l--, e && u.push(a))
                        }
                        if (l += c, b && c !== l) {
                            for (s = 0; r = v[s++];) r(u, d, t, n);
                            if (e) {
                                if (0 < l)
                                    for (; c--;) u[c] || d[c] || (d[c] = A.call(i));
                                d = ve(d)
                            }
                            $.apply(i, d), o && !e && 0 < d.length && 1 < l + v.length && ie.uniqueSort(i)
                        }
                        return o && (C = f, k = p), u
                    }
                    var b = 0 < v.length,
                        y = 0 < g.length;
                    return b ? ae(e) : e
                }(o, i))).selector = e
            }
            return a
        }, g = ie.select = function(e, t, n, i) {
            var o, a, s, r, l, c = "function" == typeof e && e,
                u = !i && m(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (a = u[0] = u[0].slice(0)).length && "ID" === (s = a[0]).type && f.getById && 9 === t.nodeType && b && w.relative[a[1].type]) {
                    if (!(t = (w.find.ID(s.matches[0].replace(ne, d), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(a.shift().value.length)
                }
                for (o = J.needsContext.test(e) ? 0 : a.length; o-- && (s = a[o], !w.relative[r = s.type]);)
                    if ((l = w.find[r]) && (i = l(s.matches[0].replace(ne, d), ee.test(a[0].type) && pe(t.parentNode) || t))) {
                        if (a.splice(o, 1), !(e = i.length && fe(a))) return $.apply(n, i), n;
                        break
                    }
            }
            return (c || p(e, u))(i, t, !b, n, ee.test(e) && pe(t.parentNode) || t), n
        }, f.sortStable = S.split("").sort(I).join("") === S, f.detectDuplicates = !!u, v(), f.sortDetached = se(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("div"))
        }), se(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || re("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), f.attributes && se(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || re("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), se(function(e) {
            return null == e.getAttribute("disabled")
        }) || re(P, function(e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), ie
    }(f);
    x.find = h, x.expr = h.selectors, x.expr[":"] = x.expr.pseudos, x.unique = h.uniqueSort, x.text = h.getText, x.isXMLDoc = h.isXML, x.contains = h.contains;
    var y = x.expr.match.needsContext,
        w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        k = /^.[^:#\[\.,]*$/;

    function T(e, n, i) {
        if (x.isFunction(n)) return x.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        });
        if (n.nodeType) return x.grep(e, function(e) {
            return e === n !== i
        });
        if ("string" == typeof n) {
            if (k.test(n)) return x.filter(n, e, i);
            n = x.filter(n, e)
        }
        return x.grep(e, function(e) {
            return 0 <= o.call(n, e) !== i
        })
    }
    x.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? x.find.matchesSelector(i, e) ? [i] : [] : x.find.matches(e, x.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, x.fn.extend({
        find: function(e) {
            var t, n = this.length,
                i = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (x.contains(o[t], this)) return !0
            }));
            for (t = 0; t < n; t++) x.find(e, o[t], i);
            return (i = this.pushStack(1 < n ? x.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(T(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(T(this, e || [], !0))
        },
        is: function(e) {
            return !!T(this, "string" == typeof e && y.test(e) ? x(e) : e || [], !1).length
        }
    });
    var S, _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (x.fn.init = function(e, t) {
        var n, i;
        if (!e) return this;
        if ("string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? void 0 !== S.ready ? S.ready(e) : e(x) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this));
        if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : _.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || S).find(e) : this.constructor(t).find(e);
        if (n[1]) {
            if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), w.test(n[1]) && x.isPlainObject(t))
                for (n in t) x.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this
        }
        return (i = b.getElementById(n[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = b, this.selector = e, this
    }).prototype = x.fn, S = x(b);
    var C = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    x.extend({
        dir: function(e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && x(e).is(n)) break;
                    i.push(e)
                } return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), x.fn.extend({
        has: function(e) {
            var t = x(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (x.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, a = [], s = y.test(e) || "string" != typeof e ? x(e, t || this.context) : 0; i < o; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                        a.push(n);
                        break
                    } return this.pushStack(1 < a.length ? x.unique(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? o.call(x(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(x.unique(x.merge(this.get(), x(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x.dir(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return x.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return x.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || x.merge([], e.childNodes)
        }
    }, function(i, o) {
        x.fn[i] = function(e, t) {
            var n = x.map(this, o, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = x.filter(t, n)), 1 < this.length && (D[i] || x.unique(n), C.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var I, M = /\S+/g,
        E = {};

    function A() {
        b.removeEventListener("DOMContentLoaded", A, !1), f.removeEventListener("load", A, !1), x.ready()
    }
    x.Callbacks = function(o) {
        o = "string" == typeof o ? E[o] || function(e) {
            var n = E[e] = {};
            return x.each(e.match(M) || [], function(e, t) {
                n[t] = !0
            }), n
        }(o) : x.extend({}, o);
        var t, n, i, a, s, r, l = [],
            c = !o.once && [],
            u = function(e) {
                for (t = o.memory && e, n = !0, r = a || 0, a = 0, s = l.length, i = !0; l && r < s; r++)
                    if (!1 === l[r].apply(e[0], e[1]) && o.stopOnFalse) {
                        t = !1;
                        break
                    } i = !1, l && (c ? c.length && u(c.shift()) : t ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var e = l.length;
                        ! function i(e) {
                            x.each(e, function(e, t) {
                                var n = x.type(t);
                                "function" === n ? o.unique && d.has(t) || l.push(t) : t && t.length && "string" !== n && i(t)
                            })
                        }(arguments), i ? s = l.length : t && (a = e, u(t))
                    }
                    return this
                },
                remove: function() {
                    return l && x.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = x.inArray(t, l, n));) l.splice(n, 1), i && (n <= s && s--, n <= r && r--)
                    }), this
                },
                has: function(e) {
                    return e ? -1 < x.inArray(e, l) : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], s = 0, this
                },
                disable: function() {
                    return l = c = t = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, t || d.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, t) {
                    return !l || n && !c || (t = [e, (t = t || []).slice ? t.slice() : t], i ? c.push(t) : u(t)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return d
    }, x.extend({
        Deferred: function(e) {
            var a = [
                    ["resolve", "done", x.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", x.Callbacks("memory")]
                ],
                o = "pending",
                s = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var o = arguments;
                        return x.Deferred(function(i) {
                            x.each(a, function(e, t) {
                                var n = x.isFunction(o[e]) && o[e];
                                r[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && x.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === s ? i.promise() : this, n ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, s) : s
                    }
                },
                r = {};
            return s.pipe = s.then, x.each(a, function(e, t) {
                var n = t[2],
                    i = t[3];
                s[t[1]] = n.add, i && n.add(function() {
                    o = i
                }, a[1 ^ e][2].disable, a[2][2].lock), r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? s : this, arguments), this
                }, r[t[0] + "With"] = n.fireWith
            }), s.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            function t(t, n, i) {
                return function(e) {
                    n[t] = this, i[t] = 1 < arguments.length ? u.call(arguments) : e, i === o ? c.notifyWith(n, i) : --l || c.resolveWith(n, i)
                }
            }
            var o, n, i, a = 0,
                s = u.call(arguments),
                r = s.length,
                l = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
                c = 1 === l ? e : x.Deferred();
            if (1 < r)
                for (o = new Array(r), n = new Array(r), i = new Array(r); a < r; a++) s[a] && x.isFunction(s[a].promise) ? s[a].promise().done(t(a, i, s)).fail(c.reject).progress(t(a, n, o)) : --l;
            return l || c.resolveWith(i, s), c.promise()
        }
    }), x.fn.ready = function(e) {
        return x.ready.promise().done(e), this
    }, x.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? x.readyWait++ : x.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --x.readyWait : x.isReady) || ((x.isReady = !0) !== e && 0 < --x.readyWait || (I.resolveWith(b, [x]), x.fn.triggerHandler && (x(b).triggerHandler("ready"), x(b).off("ready"))))
        }
    }), x.ready.promise = function(e) {
        return I || (I = x.Deferred(), "complete" === b.readyState ? setTimeout(x.ready) : (b.addEventListener("DOMContentLoaded", A, !1), f.addEventListener("load", A, !1))), I.promise(e)
    }, x.ready.promise();
    var j = x.access = function(e, t, n, i, o, a, s) {
        var r = 0,
            l = e.length,
            c = null == n;
        if ("object" === x.type(n))
            for (r in o = !0, n) x.access(e, t, r, n[r], !0, a, s);
        else if (void 0 !== i && (o = !0, x.isFunction(i) || (s = !0), c && (t = s ? (t.call(e, i), null) : (c = t, function(e, t, n) {
                return c.call(x(e), n)
            })), t))
            for (; r < l; r++) t(e[r], n, s ? i : i.call(e[r], r, t(e[r], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : a
    };

    function $() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = x.expando + Math.random()
    }
    x.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, $.uid = 1, $.accepts = x.acceptData, $.prototype = {
        key: function(t) {
            if (!$.accepts(t)) return 0;
            var n = {},
                i = t[this.expando];
            if (!i) {
                i = $.uid++;
                try {
                    n[this.expando] = {
                        value: i
                    }, Object.defineProperties(t, n)
                } catch (e) {
                    n[this.expando] = i, x.extend(t, n)
                }
            }
            return this.cache[i] || (this.cache[i] = {}), i
        },
        set: function(e, t, n) {
            var i, o = this.key(e),
                a = this.cache[o];
            if ("string" == typeof t) a[t] = n;
            else if (x.isEmptyObject(a)) x.extend(this.cache[o], t);
            else
                for (i in t) a[i] = t[i];
            return a
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, x.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, o, a = this.key(e),
                s = this.cache[a];
            if (void 0 === t) this.cache[a] = {};
            else {
                n = (i = x.isArray(t) ? t.concat(t.map(x.camelCase)) : (o = x.camelCase(t), t in s ? [t, o] : (i = o) in s ? [i] : i.match(M) || [])).length;
                for (; n--;) delete s[i[n]]
            }
        },
        hasData: function(e) {
            return !x.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var L = new $,
        N = new $,
        P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        R = /([A-Z])/g;

    function W(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(R, "-$1").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : P.test(n) ? x.parseJSON(n) : n)
                } catch (e) {}
                N.set(e, t, n)
            } else n = void 0;
        return n
    }
    x.extend({
        hasData: function(e) {
            return N.hasData(e) || L.hasData(e)
        },
        data: function(e, t, n) {
            return N.access(e, t, n)
        },
        removeData: function(e, t) {
            N.remove(e, t)
        },
        _data: function(e, t, n) {
            return L.access(e, t, n)
        },
        _removeData: function(e, t) {
            L.remove(e, t)
        }
    }), x.fn.extend({
        data: function(i, e) {
            var t, n, o, a = this[0],
                s = a && a.attributes;
            if (void 0 !== i) return "object" == typeof i ? this.each(function() {
                N.set(this, i)
            }) : j(this, function(t) {
                var e, n = x.camelCase(i);
                if (a && void 0 === t) {
                    if (void 0 !== (e = N.get(a, i))) return e;
                    if (void 0 !== (e = N.get(a, n))) return e;
                    if (void 0 !== (e = W(a, n, void 0))) return e
                } else this.each(function() {
                    var e = N.get(this, n);
                    N.set(this, n, t), -1 !== i.indexOf("-") && void 0 !== e && N.set(this, i, t)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = N.get(a), 1 === a.nodeType && !L.get(a, "hasDataAttrs"))) {
                for (t = s.length; t--;) s[t] && (0 === (n = s[t].name).indexOf("data-") && (n = x.camelCase(n.slice(5)), W(a, n, o[n])));
                L.set(a, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function(e) {
            return this.each(function() {
                N.remove(this, e)
            })
        }
    }), x.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = L.get(e, t), n && (!i || x.isArray(n) ? i = L.access(e, t, x.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                i = n.length,
                o = n.shift(),
                a = x._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete a.stop, o.call(e, function() {
                x.dequeue(e, t)
            }, a)), !i && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return L.get(e, n) || L.access(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    L.remove(e, [t + "queue", n])
                })
            })
        }
    }), x.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? x.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = x.queue(this, t, n);
                x._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && x.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --o || a.resolveWith(s, [s])
            }
            var i, o = 1,
                a = x.Deferred(),
                s = this,
                r = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(i = L.get(s[r], e + "queueHooks")) && i.empty && (o++, i.empty.add(n));
            return n(), a.promise(t)
        }
    });

    function H(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }
    var B, U, F = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        q = ["Top", "Right", "Bottom", "Left"],
        V = /^(?:checkbox|radio)$/i;
    B = b.createDocumentFragment().appendChild(b.createElement("div")), (U = b.createElement("input")).setAttribute("type", "radio"), U.setAttribute("checked", "checked"), U.setAttribute("name", "t"), B.appendChild(U), v.checkClone = B.cloneNode(!0).cloneNode(!0).lastChild.checked, B.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!B.cloneNode(!0).lastChild.defaultValue;
    var z = "undefined";
    v.focusinBubbles = "onfocusin" in f;
    var Y = /^key/,
        G = /^(?:mouse|pointer|contextmenu)|click/,
        J = /^(?:focusinfocus|focusoutblur)$/,
        X = /^([^.]*)(?:\.(.+)|)$/;

    function K() {
        return !0
    }

    function Z() {
        return !1
    }

    function Q() {
        try {
            return b.activeElement
        } catch (e) {}
    }
    x.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var a, s, r, l, c, u, d, p, h, f, m, g = L.get(t);
            if (g)
                for (n.handler && (n = (a = n).handler, o = a.selector), n.guid || (n.guid = x.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(e) {
                        return typeof x != z && x.event.triggered !== e.type ? x.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(M) || [""]).length; c--;) h = m = (r = X.exec(e[c]) || [])[1], f = (r[2] || "").split(".").sort(), h && (d = x.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = x.event.special[h] || {}, u = x.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && x.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, a), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, f, s) || t.addEventListener && t.addEventListener(h, s, !1)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), x.event.global[h] = !0)
        },
        remove: function(e, t, n, i, o) {
            var a, s, r, l, c, u, d, p, h, f, m, g = L.hasData(e) && L.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(M) || [""]).length; c--;)
                    if (h = m = (r = X.exec(t[c]) || [])[1], f = (r[2] || "").split(".").sort(), h) {
                        for (d = x.event.special[h] || {}, p = l[h = (i ? d.delegateType : d.bindType) || h] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = p.length; a--;) u = p[a], !o && m !== u.origType || n && n.guid !== u.guid || r && !r.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(a, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !p.length && (d.teardown && !1 !== d.teardown.call(e, f, g.handle) || x.removeEvent(e, h, g.handle), delete l[h])
                    } else
                        for (h in l) x.event.remove(e, h + t[c], n, i, !0);
                x.isEmptyObject(l) && (delete g.handle, L.remove(e, "events"))
            }
        },
        trigger: function(e, t, n, i) {
            var o, a, s, r, l, c, u, d = [n || b],
                p = g.call(e, "type") ? e.type : e,
                h = g.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = s = n = n || b, 3 !== n.nodeType && 8 !== n.nodeType && !J.test(p + x.event.triggered) && (0 <= p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, (e = e[x.expando] ? e : new x.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : x.makeArray(t, [e]), u = x.event.special[p] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!i && !u.noBubble && !x.isWindow(n)) {
                    for (r = u.delegateType || p, J.test(r + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
                    s === (n.ownerDocument || b) && d.push(s.defaultView || s.parentWindow || f)
                }
                for (o = 0;
                    (a = d[o++]) && !e.isPropagationStopped();) e.type = 1 < o ? r : u.bindType || p, (c = (L.get(a, "events") || {})[e.type] && L.get(a, "handle")) && c.apply(a, t), (c = l && a[l]) && c.apply && x.acceptData(a) && (e.result = c.apply(a, t), !1 === e.result && e.preventDefault());
                return e.type = p, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), t) || !x.acceptData(n) || l && x.isFunction(n[p]) && !x.isWindow(n) && ((s = n[l]) && (n[l] = null), n[x.event.triggered = p](), x.event.triggered = void 0, s && (n[l] = s)), e.result
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var t, n, i, o, a, s = [],
                r = u.call(arguments),
                l = (L.get(this, "events") || {})[e.type] || [],
                c = x.event.special[e.type] || {};
            if ((r[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (s = x.event.handlers.call(this, e, l), t = 0;
                    (o = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (a = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(a.namespace) || (e.handleObj = a, e.data = a.data, void 0 !== (i = ((x.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, r)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, a, s = [],
                r = t.delegateCount,
                l = e.target;
            if (r && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (!0 !== l.disabled || "click" !== e.type) {
                        for (i = [], n = 0; n < r; n++) void 0 === i[o = (a = t[n]).selector + " "] && (i[o] = a.needsContext ? 0 <= x(o, this).index(l) : x.find(o, this, null, [l]).length), i[o] && i.push(a);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    } return r < t.length && s.push({
                elem: this,
                handlers: t.slice(r)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, a = t.button;
                return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || b).documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[x.expando]) return e;
            var t, n, i, o = e.type,
                a = e,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = G.test(o) ? this.mouseHooks : Y.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(a), t = i.length; t--;) e[n = i[t]] = a[n];
            return e.target || (e.target = b), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, a) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== Q() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === Q() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && x.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return x.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var o = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? x.event.trigger(o, null, t) : x.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, x.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, x.Event = function(e, t) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? K : Z) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || x.now(), void(this[x.expando] = !0)) : new x.Event(e, t)
    }, x.Event.prototype = {
        isDefaultPrevented: Z,
        isPropagationStopped: Z,
        isImmediatePropagationStopped: Z,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = K, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = K, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = K, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        x.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || x.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), v.focusinBubbles || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        function o(e) {
            x.event.simulate(i, e.target, x.event.fix(e), !0)
        }
        x.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = L.access(e, i);
                t || e.addEventListener(n, o, !0), L.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = L.access(e, i) - 1;
                t ? L.access(e, i, t) : (e.removeEventListener(n, o, !0), L.remove(e, i))
            }
        }
    }), x.fn.extend({
        on: function(e, t, n, i, o) {
            var a, s;
            if ("object" == typeof e) {
                for (s in "string" != typeof t && (n = n || t, t = void 0), e) this.on(s, t, n, e[s], o);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = Z;
            else if (!i) return this;
            return 1 === o && (a = i, (i = function(e) {
                return x().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = x.guid++)), this.each(function() {
                x.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Z), this.each(function() {
                x.event.remove(this, e, n, t)
            });
            for (o in e) this.off(o, t, e[o]);
            return this
        },
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? x.event.trigger(e, t, n, !0) : void 0
        }
    });
    var ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        te = /<([\w:]+)/,
        ne = /<|&#?\w+;/,
        ie = /<(?:script|style|link)/i,
        oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ae = /^$|\/(?:java|ecma)script/i,
        se = /^true\/(.*)/,
        re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        le = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ce(e, t) {
        return x.nodeName(e, "table") && x.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function ue(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function de(e) {
        var t = se.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function pe(e, t) {
        for (var n = 0, i = e.length; n < i; n++) L.set(e[n], "globalEval", !t || L.get(t[n], "globalEval"))
    }

    function he(e, t) {
        var n, i, o, a, s, r, l, c;
        if (1 === t.nodeType) {
            if (L.hasData(e) && (a = L.access(e), s = L.set(t, a), c = a.events))
                for (o in delete s.handle, s.events = {}, c)
                    for (n = 0, i = c[o].length; n < i; n++) x.event.add(t, o, c[o][n]);
            N.hasData(e) && (r = N.access(e), l = x.extend({}, r), N.set(t, l))
        }
    }

    function fe(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && x.nodeName(e, t) ? x.merge([e], n) : n
    }
    le.optgroup = le.option, le.tbody = le.tfoot = le.colgroup = le.caption = le.thead, le.th = le.td, x.extend({
        clone: function(e, t, n) {
            var i, o, a, s, r, l, c, u = e.cloneNode(!0),
                d = x.contains(e.ownerDocument, e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (s = fe(u), i = 0, o = (a = fe(e)).length; i < o; i++) r = a[i], l = s[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && V.test(r.type) ? l.checked = r.checked : "input" !== c && "textarea" !== c || (l.defaultValue = r.defaultValue);
            if (t)
                if (n)
                    for (a = a || fe(e), s = s || fe(u), i = 0, o = a.length; i < o; i++) he(a[i], s[i]);
                else he(e, u);
            return 0 < (s = fe(u, "script")).length && pe(s, !d && fe(e, "script")), u
        },
        buildFragment: function(e, t, n, i) {
            for (var o, a, s, r, l, c, u = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
                if ((o = e[p]) || 0 === o)
                    if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
                    else if (ne.test(o)) {
                for (a = a || u.appendChild(t.createElement("div")), s = (te.exec(o) || ["", ""])[1].toLowerCase(), r = le[s] || le._default, a.innerHTML = r[1] + o.replace(ee, "<$1></$2>") + r[2], c = r[0]; c--;) a = a.lastChild;
                x.merge(d, a.childNodes), (a = u.firstChild).textContent = ""
            } else d.push(t.createTextNode(o));
            for (u.textContent = "", p = 0; o = d[p++];)
                if ((!i || -1 === x.inArray(o, i)) && (l = x.contains(o.ownerDocument, o), a = fe(u.appendChild(o), "script"), l && pe(a), n))
                    for (c = 0; o = a[c++];) ae.test(o.type || "") && n.push(o);
            return u
        },
        cleanData: function(e) {
            for (var t, n, i, o, a = x.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (x.acceptData(n) && ((o = n[L.expando]) && (t = L.cache[o]))) {
                    if (t.events)
                        for (i in t.events) a[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                    L.cache[o] && delete L.cache[o]
                }
                delete N.cache[n[N.expando]]
            }
        }
    }), x.fn.extend({
        text: function(e) {
            return j(this, function(e) {
                return void 0 === e ? x.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ce(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ce(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? x.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || x.cleanData(fe(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && pe(fe(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(fe(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return j(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ie.test(e) && !le[(te.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(ee, "<$1></$2>");
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(fe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, x.cleanData(fe(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(n, i) {
            n = m.apply([], n);
            var e, t, o, a, s, r, l = 0,
                c = this.length,
                u = this,
                d = c - 1,
                p = n[0],
                h = x.isFunction(p);
            if (h || 1 < c && "string" == typeof p && !v.checkClone && oe.test(p)) return this.each(function(e) {
                var t = u.eq(e);
                h && (n[0] = p.call(this, e, t.html())), t.domManip(n, i)
            });
            if (c && (t = (e = x.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === e.childNodes.length && (e = t), t)) {
                for (a = (o = x.map(fe(e, "script"), ue)).length; l < c; l++) s = e, l !== d && (s = x.clone(s, !0, !0), a && x.merge(o, fe(s, "script"))), i.call(this[l], s, l);
                if (a)
                    for (r = o[o.length - 1].ownerDocument, x.map(o, de), l = 0; l < a; l++) s = o[l], ae.test(s.type || "") && !L.access(s, "globalEval") && x.contains(r, s) && (s.src ? x._evalUrl && x._evalUrl(s.src) : x.globalEval(s.textContent.replace(re, "")))
            }
            return this
        }
    }), x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        x.fn[e] = function(e) {
            for (var t, n = [], i = x(e), o = i.length - 1, a = 0; a <= o; a++) t = a === o ? this : this.clone(!0), x(i[a])[s](t), r.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var me, ge = {};

    function ve(e, t) {
        var n, i = x(t.createElement(e)).appendTo(t.body),
            o = f.getDefaultComputedStyle && (n = f.getDefaultComputedStyle(i[0])) ? n.display : x.css(i[0], "display");
        return i.detach(), o
    }

    function be(e) {
        var t = b,
            n = ge[e];
        return n || ("none" !== (n = ve(e, t)) && n || ((t = (me = (me || x("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = ve(e, t), me.detach()), ge[e] = n), n
    }
    var ye = /^margin/,
        we = new RegExp("^(" + F + ")(?!px)[a-z%]+$", "i"),
        ke = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        };

    function Te(e, t, n) {
        var i, o, a, s, r = e.style;
        return (n = n || ke(e)) && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || x.contains(e.ownerDocument, e) || (s = x.style(e, t)), we.test(s) && ye.test(t) && (i = r.width, o = r.minWidth, a = r.maxWidth, r.minWidth = r.maxWidth = r.width = s, s = n.width, r.width = i, r.minWidth = o, r.maxWidth = a)), void 0 !== s ? s + "" : s
    }

    function xe(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }! function() {
        var t, n, i = b.documentElement,
            o = b.createElement("div"),
            a = b.createElement("div");
        if (a.style) {
            function e() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(o);
                var e = f.getComputedStyle(a, null);
                t = "1%" !== e.top, n = "4px" === e.width, i.removeChild(o)
            }
            a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), f.getComputedStyle && x.extend(v, {
                pixelPosition: function() {
                    return e(), t
                },
                boxSizingReliable: function() {
                    return null == n && e(), n
                },
                reliableMarginRight: function() {
                    var e, t = a.appendChild(b.createElement("div"));
                    return t.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", a.style.width = "1px", i.appendChild(o), e = !parseFloat(f.getComputedStyle(t, null).marginRight), i.removeChild(o), e
                }
            })
        }
    }(), x.swap = function(e, t, n, i) {
        var o, a, s = {};
        for (a in t) s[a] = e.style[a], e.style[a] = t[a];
        for (a in o = n.apply(e, i || []), t) e.style[a] = s[a];
        return o
    };
    var Se = /^(none|table(?!-c[ea]).+)/,
        _e = new RegExp("^(" + F + ")(.*)$", "i"),
        Ce = new RegExp("^([+-])=(" + F + ")", "i"),
        De = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Oe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ie = ["Webkit", "O", "Moz", "ms"];

    function Me(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), i = t, o = Ie.length; o--;)
            if ((t = Ie[o] + n) in e) return t;
        return i
    }

    function Ee(e, t, n) {
        var i = _e.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function Ae(e, t, n, i, o) {
        for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; a < 4; a += 2) "margin" === n && (s += x.css(e, n + q[a], !0, o)), i ? ("content" === n && (s -= x.css(e, "padding" + q[a], !0, o)), "margin" !== n && (s -= x.css(e, "border" + q[a] + "Width", !0, o))) : (s += x.css(e, "padding" + q[a], !0, o), "padding" !== n && (s += x.css(e, "border" + q[a] + "Width", !0, o)));
        return s
    }

    function je(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            a = ke(e),
            s = "border-box" === x.css(e, "boxSizing", !1, a);
        if (o <= 0 || null == o) {
            if (((o = Te(e, t, a)) < 0 || null == o) && (o = e.style[t]), we.test(o)) return o;
            i = s && (v.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + Ae(e, t, n || (s ? "border" : "content"), i, a) + "px"
    }

    function $e(e, t) {
        for (var n, i, o, a = [], s = 0, r = e.length; s < r; s++)(i = e[s]).style && (a[s] = L.get(i, "olddisplay"), n = i.style.display, t ? (a[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && H(i) && (a[s] = L.access(i, "olddisplay", be(i.nodeName)))) : (o = H(i), "none" === n && o || L.set(i, "olddisplay", o ? n : x.css(i, "display"))));
        for (s = 0; s < r; s++)(i = e[s]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[s] || "" : "none"));
        return e
    }

    function Le(e, t, n, i, o) {
        return new Le.prototype.init(e, t, n, i, o)
    }
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Te(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, r = x.camelCase(t),
                    l = e.style;
                return t = x.cssProps[r] || (x.cssProps[r] = Me(l, r)), s = x.cssHooks[t] || x.cssHooks[r], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t] : ("string" === (a = typeof n) && (o = Ce.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(x.css(e, t)), a = "number"), void(null != n && n == n && ("number" !== a || x.cssNumber[r] || (n += "px"), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var o, a, s, r = x.camelCase(t);
            return t = x.cssProps[r] || (x.cssProps[r] = Me(e.style, r)), (s = x.cssHooks[t] || x.cssHooks[r]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = Te(e, t, i)), "normal" === o && t in Oe && (o = Oe[t]), "" === n || n ? (a = parseFloat(o), !0 === n || x.isNumeric(a) ? a || 0 : o) : o
        }
    }), x.each(["height", "width"], function(e, o) {
        x.cssHooks[o] = {
            get: function(e, t, n) {
                return t ? Se.test(x.css(e, "display")) && 0 === e.offsetWidth ? x.swap(e, De, function() {
                    return je(e, o, n)
                }) : je(e, o, n) : void 0
            },
            set: function(e, t, n) {
                var i = n && ke(e);
                return Ee(0, t, n ? Ae(e, o, n, "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), x.cssHooks.marginRight = xe(v.reliableMarginRight, function(e, t) {
        return t ? x.swap(e, {
            display: "inline-block"
        }, Te, [e, "marginRight"]) : void 0
    }), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, a) {
        x.cssHooks[o + a] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + q[t] + a] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, ye.test(o) || (x.cssHooks[o + a].set = Ee)
    }), x.fn.extend({
        css: function(e, t) {
            return j(this, function(e, t, n) {
                var i, o, a = {},
                    s = 0;
                if (x.isArray(t)) {
                    for (i = ke(e), o = t.length; s < o; s++) a[t[s]] = x.css(e, t[s], !1, i);
                    return a
                }
                return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return $e(this, !0)
        },
        hide: function() {
            return $e(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                H(this) ? x(this).show() : x(this).hide()
            })
        }
    }), ((x.Tween = Le).prototype = {
        constructor: Le,
        init: function(e, t, n, i, o, a) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Le.propHooks[this.prop];
            return e && e.get ? e.get(this) : Le.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Le.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Le.propHooks._default.set(this), this
        }
    }).init.prototype = Le.prototype, (Le.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }).scrollTop = Le.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, x.fx = Le.prototype.init, x.fx.step = {};
    var Ne, Pe, Re, We, He, Be = /^(?:toggle|show|hide)$/,
        Ue = new RegExp("^(?:([+-])=|)(" + F + ")([a-z%]*)$", "i"),
        Fe = /queueHooks$/,
        qe = [function(t, e, n) {
            var i, o, a, s, r, l, c, u = this,
                d = {},
                p = t.style,
                h = t.nodeType && H(t),
                f = L.get(t, "fxshow");
            for (i in n.queue || (null == (r = x._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, l = r.empty.fire, r.empty.fire = function() {
                    r.unqueued || l()
                }), r.unqueued++, u.always(function() {
                    u.always(function() {
                        r.unqueued--, x.queue(t, "fx").length || r.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = x.css(t, "display"), "inline" === ("none" === c ? L.get(t, "olddisplay") || be(t.nodeName) : c) && "none" === x.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", u.always(function() {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), e)
                if (o = e[i], Be.exec(o)) {
                    if (delete e[i], a = a || "toggle" === o, o === (h ? "hide" : "show")) {
                        if ("show" !== o || !f || void 0 === f[i]) continue;
                        h = !0
                    }
                    d[i] = f && f[i] || x.style(t, i)
                } else c = void 0;
            if (x.isEmptyObject(d)) "inline" === ("none" === c ? be(t.nodeName) : c) && (p.display = c);
            else
                for (i in f ? "hidden" in f && (h = f.hidden) : f = L.access(t, "fxshow", {}), a && (f.hidden = !h), h ? x(t).show() : u.done(function() {
                        x(t).hide()
                    }), u.done(function() {
                        var e;
                        for (e in L.remove(t, "fxshow"), d) x.style(t, e, d[e])
                    }), d) s = Ge(h ? f[i] : 0, i, u), i in f || (f[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }],
        Ve = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    o = Ue.exec(t),
                    a = o && o[3] || (x.cssNumber[e] ? "" : "px"),
                    s = (x.cssNumber[e] || "px" !== a && +i) && Ue.exec(x.css(n.elem, e)),
                    r = 1,
                    l = 20;
                if (s && s[3] !== a)
                    for (a = a || s[3], o = o || [], s = +i || 1; s /= r = r || ".5", x.style(n.elem, e, s + a), r !== (r = n.cur() / i) && 1 !== r && --l;);
                return o && (s = n.start = +s || +i || 0, n.unit = a, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };

    function ze() {
        return setTimeout(function() {
            Ne = void 0
        }), Ne = x.now()
    }

    function Ye(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = q[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function Ge(e, t, n) {
        for (var i, o = (Ve[t] || []).concat(Ve["*"]), a = 0, s = o.length; a < s; a++)
            if (i = o[a].call(n, t, e)) return i
    }

    function Je(a, e, t) {
        var n, s, i = 0,
            o = qe.length,
            r = x.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = Ne || ze(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, o = c.tweens.length; i < o; i++) c.tweens[i].run(n);
                return r.notifyWith(a, [c, n, t]), n < 1 && o ? t : (r.resolveWith(a, [c]), !1)
            },
            c = r.promise({
                elem: a,
                props: x.extend({}, e),
                opts: x.extend(!0, {
                    specialEasing: {}
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ne || ze(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = x.Tween(a, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? r.resolveWith(a, [c, e]) : r.rejectWith(a, [c, e]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var n, i, o, a, s;
                for (n in e)
                    if (o = t[i = x.camelCase(n)], a = e[n], x.isArray(a) && (o = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), (s = x.cssHooks[i]) && "expand" in s)
                        for (n in a = s.expand(a), delete e[i], a) n in e || (e[n] = a[n], t[n] = o);
                    else t[i] = o
            }(u, c.opts.specialEasing); i < o; i++)
            if (n = qe[i].call(c, a, u, c.opts)) return n;
        return x.map(u, Ge, c), x.isFunction(c.opts.start) && c.opts.start.call(a, c), x.fx.timer(x.extend(l, {
            elem: a,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    x.Animation = x.extend(Je, {
        tweener: function(e, t) {
            for (var n, i = 0, o = (e = x.isFunction(e) ? (t = e, ["*"]) : e.split(" ")).length; i < o; i++) n = e[i], Ve[n] = Ve[n] || [], Ve[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? qe.unshift(e) : qe.push(e)
        }
    }), x.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return i.duration = x.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in x.fx.speeds ? x.fx.speeds[i.duration] : x.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            x.isFunction(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue)
        }, i
    }, x.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(H).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            function o() {
                var e = Je(this, x.extend({}, t), s);
                (a || L.get(this, "finish")) && e.stop(!0)
            }
            var a = x.isEmptyObject(t),
                s = x.speed(e, n, i);
            return o.finish = o, a || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(o, e, a) {
            function s(e) {
                var t = e.stop;
                delete e.stop, t(a)
            }
            return "string" != typeof o && (a = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                var e = !0,
                    t = null != o && o + "queueHooks",
                    n = x.timers,
                    i = L.get(this);
                if (t) i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && Fe.test(t) && s(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(a), e = !1, n.splice(t, 1));
                !e && a || x.dequeue(this, o)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = L.get(this),
                    n = t[s + "queue"],
                    i = t[s + "queueHooks"],
                    o = x.timers,
                    a = n ? n.length : 0;
                for (t.finish = !0, x.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < a; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), x.each(["toggle", "show", "hide"], function(e, i) {
        var o = x.fn[i];
        x.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(Ye(i, !0), e, t, n)
        }
    }), x.each({
        slideDown: Ye("show"),
        slideUp: Ye("hide"),
        slideToggle: Ye("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        x.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), x.timers = [], x.fx.tick = function() {
        var e, t = 0,
            n = x.timers;
        for (Ne = x.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || x.fx.stop(), Ne = void 0
    }, x.fx.timer = function(e) {
        x.timers.push(e), e() ? x.fx.start() : x.timers.pop()
    }, x.fx.interval = 13, x.fx.start = function() {
        Pe = Pe || setInterval(x.fx.tick, x.fx.interval)
    }, x.fx.stop = function() {
        clearInterval(Pe), Pe = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fn.delay = function(i, e) {
        return i = x.fx && x.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = setTimeout(e, i);
            t.stop = function() {
                clearTimeout(n)
            }
        })
    }, Re = b.createElement("input"), We = b.createElement("select"), He = We.appendChild(b.createElement("option")), Re.type = "checkbox", v.checkOn = "" !== Re.value, v.optSelected = He.selected, We.disabled = !0, v.optDisabled = !He.disabled, (Re = b.createElement("input")).value = "t", Re.type = "radio", v.radioValue = "t" === Re.value;
    var Xe, Ke = x.expr.attrHandle;
    x.fn.extend({
        attr: function(e, t) {
            return j(this, x.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        }
    }), x.extend({
        attr: function(e, t, n) {
            var i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute == z ? x.prop(e, t, n) : (1 === a && x.isXMLDoc(e) || (t = t.toLowerCase(), i = x.attrHooks[t] || (x.expr.match.bool.test(t) ? Xe : void 0)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : null == (o = x.find.attr(e, t)) ? void 0 : o : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void x.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
                a = t && t.match(M);
            if (a && 1 === e.nodeType)
                for (; n = a[o++];) i = x.propFix[n] || n, x.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Xe = {
        set: function(e, t, n) {
            return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = Ke[t] || x.find.attr;
        Ke[t] = function(e, t, n) {
            var i, o;
            return n || (o = Ke[t], Ke[t] = i, i = null != a(e, t, n) ? t.toLowerCase() : null, Ke[t] = o), i
        }
    });
    var Ze = /^(?:input|select|textarea|button)$/i;
    x.fn.extend({
        prop: function(e, t) {
            return j(this, x.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[x.propFix[e] || e]
            })
        }
    }), x.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return (1 !== a || !x.isXMLDoc(e)) && (t = x.propFix[t] || t, o = x.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || Ze.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), v.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    });
    var Qe = /[\t\r\n\f]/g;
    x.fn.extend({
        addClass: function(t) {
            var e, n, i, o, a, s, r = "string" == typeof t && t,
                l = 0,
                c = this.length;
            if (x.isFunction(t)) return this.each(function(e) {
                x(this).addClass(t.call(this, e, this.className))
            });
            if (r)
                for (e = (t || "").match(M) || []; l < c; l++)
                    if (i = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(Qe, " ") : " ")) {
                        for (a = 0; o = e[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = x.trim(i), n.className !== s && (n.className = s)
                    } return this
        },
        removeClass: function(t) {
            var e, n, i, o, a, s, r = 0 === arguments.length || "string" == typeof t && t,
                l = 0,
                c = this.length;
            if (x.isFunction(t)) return this.each(function(e) {
                x(this).removeClass(t.call(this, e, this.className))
            });
            if (r)
                for (e = (t || "").match(M) || []; l < c; l++)
                    if (i = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(Qe, " ") : "")) {
                        for (a = 0; o = e[a++];)
                            for (; 0 <= i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        s = t ? x.trim(i) : "", n.className !== s && (n.className = s)
                    } return this
        },
        toggleClass: function(o, t) {
            var a = typeof o;
            return "boolean" == typeof t && "string" == a ? t ? this.addClass(o) : this.removeClass(o) : this.each(x.isFunction(o) ? function(e) {
                x(this).toggleClass(o.call(this, e, this.className, t), t)
            } : function() {
                if ("string" == a)
                    for (var e, t = 0, n = x(this), i = o.match(M) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else a != z && "boolean" != a || (this.className && L.set(this, "__className__", this.className), this.className = this.className || !1 === o ? "" : L.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(Qe, " ").indexOf(t)) return !0;
            return !1
        }
    });
    var et = /\r/g;
    x.fn.extend({
        val: function(n) {
            var i, e, o, t = this[0];
            return arguments.length ? (o = x.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = o ? n.call(this, e, x(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : x.isArray(t) && (t = x.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (i = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = x.valHooks[t.type] || x.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(et, "") : null == e ? "" : e : void 0
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : x.trim(x.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, a = "select-one" === e.type || o < 0, s = a ? null : [], r = a ? o + 1 : i.length, l = o < 0 ? r : a ? o : 0; l < r; l++)
                        if (!(!(n = i[l]).selected && l !== o || (v.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, a = x.makeArray(t), s = o.length; s--;)((i = o[s]).selected = 0 <= x.inArray(i.value, a)) && (n = !0);
                    return n || (e.selectedIndex = -1), a
                }
            }
        }
    }), x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, t) {
                return x.isArray(t) ? e.checked = 0 <= x.inArray(x(e).val(), t) : void 0
            }
        }, v.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        x.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var tt = x.now(),
        nt = /\?/;
    x.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, x.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + e), t
    };
    var it, ot, at = /#.*$/,
        st = /([?&])_=[^&]*/,
        rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        lt = /^(?:GET|HEAD)$/,
        ct = /^\/\//,
        ut = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        dt = {},
        pt = {},
        ht = "*/".concat("*");
    try {
        ot = location.href
    } catch (e) {
        (ot = b.createElement("a")).href = "", ot = ot.href
    }

    function ft(a) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                o = e.toLowerCase().match(M) || [];
            if (x.isFunction(t))
                for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (a[n] = a[n] || []).unshift(t)) : (a[n] = a[n] || []).push(t)
        }
    }

    function mt(t, o, a, s) {
        var r = {},
            l = t === pt;

        function c(e) {
            var i;
            return r[e] = !0, x.each(t[e] || [], function(e, t) {
                var n = t(o, a, s);
                return "string" != typeof n || l || r[n] ? l ? !(i = n) : void 0 : (o.dataTypes.unshift(n), c(n), !1)
            }), i
        }
        return c(o.dataTypes[0]) || !r["*"] && c("*")
    }

    function gt(e, t) {
        var n, i, o = x.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i = i || {})[n] = t[n]);
        return i && x.extend(!0, e, i), e
    }
    it = ut.exec(ot.toLowerCase()) || [], x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ot,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(it[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ht,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": x.parseJSON,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? gt(gt(e, x.ajaxSettings), t) : gt(x.ajaxSettings, e)
        },
        ajaxPrefilter: ft(dt),
        ajaxTransport: ft(pt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var u, d, p, n, h, i, f, o, m = x.ajaxSetup({}, t),
                g = m.context || m,
                v = m.context && (g.nodeType || g.jquery) ? x(g) : x.event,
                b = x.Deferred(),
                y = x.Callbacks("once memory"),
                w = m.statusCode || {},
                a = {},
                s = {},
                k = 0,
                r = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === k) {
                            if (!n)
                                for (n = {}; t = rt.exec(p);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === k ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return k || (e = s[n] = s[n] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return k || (m.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (k < 2)
                                for (t in e) w[t] = [w[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || r;
                        return u && u.abort(t), l(0, t), this
                    }
                };
            if (b.promise(T).complete = y.add, T.success = T.done, T.error = T.fail, m.url = ((e || m.url || ot) + "").replace(at, "").replace(ct, it[1] + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = x.trim(m.dataType || "*").toLowerCase().match(M) || [""], null == m.crossDomain && (i = ut.exec(m.url.toLowerCase()), m.crossDomain = !(!i || i[1] === it[1] && i[2] === it[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (it[3] || ("http:" === it[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = x.param(m.data, m.traditional)), mt(dt, m, t, T), 2 === k) return T;
            for (o in (f = m.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !lt.test(m.type), d = m.url, m.hasContent || (m.data && (d = m.url += (nt.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = st.test(d) ? d.replace(st, "$1_=" + tt++) : d + (nt.test(d) ? "&" : "?") + "_=" + tt++)), m.ifModified && (x.lastModified[d] && T.setRequestHeader("If-Modified-Since", x.lastModified[d]), x.etag[d] && T.setRequestHeader("If-None-Match", x.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader("Content-Type", m.contentType), T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ht + "; q=0.01" : "") : m.accepts["*"]), m.headers) T.setRequestHeader(o, m.headers[o]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g, T, m) || 2 === k)) return T.abort();
            for (o in r = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[o](m[o]);
            if (u = mt(pt, m, t, T)) {
                T.readyState = 1, f && v.trigger("ajaxSend", [T, m]), m.async && 0 < m.timeout && (h = setTimeout(function() {
                    T.abort("timeout")
                }, m.timeout));
                try {
                    k = 1, u.send(a, l)
                } catch (e) {
                    if (!(k < 2)) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, i) {
                var o, a, s, r, l, c = t;
                2 !== k && (k = 2, h && clearTimeout(h), u = void 0, p = i || "", T.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (r = function(e, t, n) {
                    for (var i, o, a, s, r = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in r)
                            if (r[o] && r[o].test(i)) {
                                l.unshift(o);
                                break
                            } if (l[0] in n) a = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                a = o;
                                break
                            }
                            s = s || o
                        }
                        a = a || s
                    }
                    return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0
                }(m, T, n)), r = function(e, t, n, i) {
                    var o, a, s, r, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (a = u.shift(); a;)
                        if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = u.shift())
                            if ("*" === a) a = l;
                            else if ("*" !== l && l !== a) {
                        if (!(s = c[l + " " + a] || c["* " + a]))
                            for (o in c)
                                if ((r = o.split(" "))[1] === a && (s = c[l + " " + r[0]] || c["* " + r[0]])) {
                                    !0 === s ? s = c[o] : !0 !== c[o] && (a = r[0], u.unshift(r[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + a
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, r, T, o), o ? (m.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (x.lastModified[d] = l), (l = T.getResponseHeader("etag")) && (x.etag[d] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = r.state, a = r.data, o = !(s = r.error))) : (s = c, !e && c || (c = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || c) + "", o ? b.resolveWith(g, [a, c, T]) : b.rejectWith(g, [T, c, s]), T.statusCode(w), w = void 0, f && v.trigger(o ? "ajaxSuccess" : "ajaxError", [T, m, o ? a : s]), y.fireWith(g, [T, c]), f && (v.trigger("ajaxComplete", [T, m]), --x.active || x.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return x.get(e, void 0, t, "script")
        }
    }), x.each(["get", "post"], function(e, o) {
        x[o] = function(e, t, n, i) {
            return x.isFunction(t) && (i = i || n, n = t, t = void 0), x.ajax({
                url: e,
                type: o,
                dataType: i,
                data: t,
                success: n
            })
        }
    }), x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), x._evalUrl = function(e) {
        return x.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, x.fn.extend({
        wrapAll: function(t) {
            var e;
            return x.isFunction(t) ? this.each(function(e) {
                x(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = x(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(n) {
            return this.each(x.isFunction(n) ? function(e) {
                x(this).wrapInner(n.call(this, e))
            } : function() {
                var e = x(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = x.isFunction(t);
            return this.each(function(e) {
                x(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }
    }), x.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, x.expr.filters.visible = function(e) {
        return !x.expr.filters.hidden(e)
    };
    var vt = /%20/g,
        bt = /\[\]$/,
        yt = /\r?\n/g,
        wt = /^(?:submit|button|image|reset|file)$/i,
        kt = /^(?:input|select|textarea|keygen)/i;

    function Tt(n, e, i, o) {
        var t;
        if (x.isArray(e)) x.each(e, function(e, t) {
            i || bt.test(n) ? o(n, t) : Tt(n + "[" + ("object" == typeof t ? e : "") + "]", t, i, o)
        });
        else if (i || "object" !== x.type(e)) o(n, e);
        else
            for (t in e) Tt(n + "[" + t + "]", e[t], i, o)
    }
    x.param = function(e, t) {
        function n(e, t) {
            t = x.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        var i, o = [];
        if (void 0 === t && (t = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (i in e) Tt(i, e[i], t, n);
        return o.join("&").replace(vt, "+")
    }, x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && kt.test(this.nodeName) && !wt.test(e) && (this.checked || !V.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(yt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(yt, "\r\n")
                }
            }).get()
        }
    }), x.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var xt = 0,
        St = {},
        _t = {
            0: 200,
            1223: 204
        },
        Ct = x.ajaxSettings.xhr();
    f.ActiveXObject && x(f).on("unload", function() {
        for (var e in St) St[e]()
    }), v.cors = !!Ct && "withCredentials" in Ct, v.ajax = Ct = !!Ct, x.ajaxTransport(function(a) {
        var s;
        return v.cors || Ct && !a.crossDomain ? {
            send: function(e, t) {
                var n, i = a.xhr(),
                    o = ++xt;
                if (i.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (n in a.xhrFields) i[n] = a.xhrFields[n];
                for (n in a.mimeType && i.overrideMimeType && i.overrideMimeType(a.mimeType), a.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                s = function(e) {
                    return function() {
                        s && (delete St[o], s = i.onload = i.onerror = null, "abort" === e ? i.abort() : "error" === e ? t(i.status, i.statusText) : t(_t[i.status] || i.status, i.statusText, "string" == typeof i.responseText ? {
                            text: i.responseText
                        } : void 0, i.getAllResponseHeaders()))
                    }
                }, i.onload = s(), i.onerror = s("error"), s = St[o] = s("abort");
                try {
                    i.send(a.hasContent && a.data || null)
                } catch (e) {
                    if (s) throw e
                }
            },
            abort: function() {
                s && s()
            }
        } : void 0
    }), x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), x.ajaxTransport("script", function(n) {
        var i, o;
        if (n.crossDomain) return {
            send: function(e, t) {
                i = x("<script>").prop({
                    async: !0,
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", o = function(e) {
                    i.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), b.head.appendChild(i[0])
            },
            abort: function() {
                o && o()
            }
        }
    });
    var Dt = [],
        Ot = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Dt.pop() || x.expando + "_" + tt++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, o, a, s = !1 !== e.jsonp && (Ot.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = x.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ot, "$1" + i) : !1 !== e.jsonp && (e.url += (nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return a || x.error(i + " was not called"), a[0]
        }, e.dataTypes[0] = "json", o = f[i], f[i] = function() {
            a = arguments
        }, n.always(function() {
            f[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Dt.push(i)), a && x.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), x.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || b;
        var i = w.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = x.buildFragment([e], t, o), o && o.length && x(o).remove(), x.merge([], i.childNodes))
    };
    var It = x.fn.load;
    x.fn.load = function(e, t, n) {
        if ("string" != typeof e && It) return It.apply(this, arguments);
        var i, o, a, s = this,
            r = e.indexOf(" ");
        return 0 <= r && (i = x.trim(e.slice(r)), e = e.slice(0, r)), x.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && x.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            s.each(n, a || [e.responseText, t, e])
        }), this
    }, x.expr.filters.animated = function(t) {
        return x.grep(x.timers, function(e) {
            return t === e.elem
        }).length
    };
    var Mt = f.document.documentElement;

    function Et(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    x.offset = {
        setOffset: function(e, t, n) {
            var i, o, a, s, r, l, c = x.css(e, "position"),
                u = x(e),
                d = {};
            "static" === c && (e.style.position = "relative"), r = u.offset(), a = x.css(e, "top"), l = x.css(e, "left"), o = ("absolute" === c || "fixed" === c) && -1 < (a + l).indexOf("auto") ? (s = (i = u.position()).top, i.left) : (s = parseFloat(a) || 0, parseFloat(l) || 0), x.isFunction(t) && (t = t.call(e, n, r)), null != t.top && (d.top = t.top - r.top + s), null != t.left && (d.left = t.left - r.left + o), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, x.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                x.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                a = i && i.ownerDocument;
            return a ? (e = a.documentElement, x.contains(e, i) ? (typeof i.getBoundingClientRect != z && (o = i.getBoundingClientRect()), n = Et(a), {
                top: o.top + n.pageYOffset - e.clientTop,
                left: o.left + n.pageXOffset - e.clientLeft
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === x.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (i = e.offset()), i.top += x.css(e[0], "borderTopWidth", !0), i.left += x.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - x.css(n, "marginTop", !0),
                    left: t.left - i.left - x.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Mt; e && !x.nodeName(e, "html") && "static" === x.css(e, "position");) e = e.offsetParent;
                return e || Mt
            })
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var a = "pageYOffset" === o;
        x.fn[t] = function(e) {
            return j(this, function(e, t, n) {
                var i = Et(e);
                return void 0 === n ? i ? i[o] : e[t] : void(i ? i.scrollTo(a ? f.pageXOffset : n, a ? n : f.pageYOffset) : e[t] = n)
            }, t, e, arguments.length, null)
        }
    }), x.each(["top", "left"], function(e, n) {
        x.cssHooks[n] = xe(v.pixelPosition, function(e, t) {
            return t ? (t = Te(e, n), we.test(t) ? x(e).position()[n] + "px" : t) : void 0
        })
    }), x.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        x.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(i, e) {
            x.fn[e] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    o = i || (!0 === e || !0 === t ? "margin" : "border");
                return j(this, function(e, t, n) {
                    var i;
                    return x.isWindow(e) ? e.document.documentElement["client" + a] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + a], i["scroll" + a], e.body["offset" + a], i["offset" + a], i["client" + a])) : void 0 === n ? x.css(e, t, o) : x.style(e, t, n, o)
                }, s, n ? e : void 0, n, null)
            }
        })
    }), x.fn.size = function() {
        return this.length
    }, x.fn.andSelf = x.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    });
    var At = f.jQuery,
        jt = f.$;
    return x.noConflict = function(e) {
        return f.$ === x && (f.$ = jt), e && f.jQuery === x && (f.jQuery = At), x
    }, typeof e == z && (f.jQuery = f.$ = x), x
});
var curr183, currIp, currPrefix, currAuth, currPass, currAuthUser, currAuthPass, currLocal, currLang, language, deviceip, errorTimeout, weather, openPanel, DEFAULT_WEATHER_SERVER_URL = "https://weather.opensprinkler.com",
    WEATHER_SERVER_URL = DEFAULT_WEATHER_SERVER_URL,
    isIEMobile = /IEMobile/.test(navigator.userAgent),
    isAndroid = /Android|\bSilk\b/.test(navigator.userAgent),
    isiOS = /iP(ad|hone|od)/.test(navigator.userAgent),
    isFireFox = /Firefox/.test(navigator.userAgent),
    isWinApp = /MSAppHost/.test(navigator.userAgent),
    isOSXApp = isOSXApp || !1,
    isChromeApp = "object" == typeof chrome && "object" == typeof chrome.storage,
    isFileCapable = !isiOS && !isAndroid && !isIEMobile && !isOSXApp && !isWinApp && window.FileReader,
    isTouchCapable = "ontouchstart" in window || "onmsgesturechange" in window,
    isMetric = -1 === ["US", "BM", "PW"].indexOf(navigator.languages[0].split("-")[1]),
    storage = {
        get: function(e, t) {
            if (t = t || function() {}, isChromeApp) chrome.storage.local.get(e, t);
            else {
                var n, i = {};
                for (n in "string" == typeof e && (e = [e]), e) e.hasOwnProperty(n) && (i[e[n]] = localStorage.getItem(e[n]));
                t(i)
            }
        },
        set: function(e, t) {
            if (t = t || function() {}, isChromeApp) chrome.storage.local.set(e, t);
            else {
                var n;
                if ("object" == typeof e)
                    for (n in e) e.hasOwnProperty(n) && localStorage.setItem(n, e[n]);
                t(!0)
            }
        },
        remove: function(e, t) {
            if (t = t || function() {}, isChromeApp) chrome.storage.local.remove(e, t);
            else {
                var n;
                for (n in "string" == typeof e && (e = [e]), e) e.hasOwnProperty(n) && localStorage.removeItem(e[n]);
                t(!0)
            }
        }
    },
    regex = {
        gps: /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/
    },
    statusBarPrimary = isAndroid ? "#121212" : "#1D1D1D",
    statusBarOverlay = isAndroid ? "#151515" : "#202020",
    retryCount = 2,
    controller = {},
    switching = !1,
    currentCoordinates = [0, 0],
    pageHistoryCount = -1,
    goingBack = !1,
    keyIndex = {
        tz: 1,
        ntp: 2,
        dhcp: 3,
        ip1: 4,
        ip2: 5,
        ip3: 6,
        ip4: 7,
        gw1: 8,
        gw2: 9,
        gw3: 10,
        gw4: 11,
        hp0: 12,
        hp1: 13,
        ar: 14,
        ext: 15,
        seq: 16,
        sdt: 17,
        mas: 18,
        mton: 19,
        mtof: 20,
        urs: 21,
        rso: 22,
        wl: 23,
        den: 24,
        ipas: 25,
        devid: 26,
        con: 27,
        lit: 28,
        dim: 29,
        bst: 30,
        uwt: 31,
        ntp1: 32,
        ntp2: 33,
        ntp3: 34,
        ntp4: 35,
        lg: 36,
        mas2: 37,
        mton2: 38,
        mtof2: 39,
        fpr0: 41,
        fpr1: 42,
        re: 43,
        dns1: 44,
        dns2: 45,
        dns3: 46,
        dns4: 47,
        sar: 48,
        ife: 49,
        sn1t: 50,
        sn1o: 51,
        sn2t: 52,
        sn2o: 53,
        sn1on: 54,
        sn1of: 55,
        sn2on: 56,
        sn2of: 57,
        subn1: 58,
        subn2: 59,
        subn3: 60,
        subn4: 61
    },
    notifications = [],
    timers = {};
if (isWinApp && $(window).on("error", function(e, t, n) {
        return window.console.log(e, t, n), !0
    }), window.MSApp) {
    if (window.Windows && Windows.UI && Windows.UI.ApplicationSettings && Windows.UI.ApplicationSettings.SettingsPane) {
        var settingsPane = Windows.UI.ApplicationSettings.SettingsPane.getForCurrentView();
        settingsPane.addEventListener("commandsrequested", function(e) {
            var t = e.request.applicationCommands,
                n = new Windows.UI.ApplicationSettings.SettingsCommand("privacy", "Privacy Policy", function() {
                    window.open("https://albahra.com/journal/privacy-policy")
                });
            t.append(n)
        })
    }
    MSApp.execUnsafeLocalFunction && ($.fn.oldDomManIp = $.fn.domManip, $.fn.domManip = function(e, t, n) {
        var i = this;
        return MSApp.execUnsafeLocalFunction(function() {
            return i.oldDomManIp(e, t, n)
        })
    })
}

function initApp() {
    updateLang(), currLocal || $.ajaxSetup({
        timeout: 1e4
    }), isIEMobile && insertStyle(".ui-toolbar-back-btn{display:none!important}ul{list-style:none!important;}"), isChromeApp && insertStyle("html,body{overflow-y:scroll}"), isAndroid ? (insertStyle(".ui-toolbar-back-btn{display:none!important}"), $(this).ajaxStart(function() {
        try {
            navigator.app.clearCache()
        } catch (e) {}
    })) : isFireFox ? $.ajaxSetup({
        xhr: function() {
            return new window.XMLHttpRequest({
                mozSystem: !0
            })
        }
    }) : $.ajaxSetup({
        cache: !1
    }), $.mobile.defaultPageTransition = isAndroid || isIEMobile ? "fade" : "slide", $.mobile.hoverDelay = 0, $.mobile.activeBtnClass = "activeButton", isOSXApp || $.mobile.document.on("click", ".iab", function() {
        var e = $(this),
            t = window.open(this.href, "_blank", "location=" + (isAndroid ? "yes" : "no") + ",enableViewportScale=" + (e.hasClass("iabNoScale") ? "no" : "yes") + ",toolbarposition=top,closebuttoncaption=" + (e.hasClass("iabNoScale") ? _("Back") : _("Done")));
        return isIEMobile && ($.mobile.document.data("iabOpen", !0), t.addEventListener("exit", function() {
            $.mobile.document.removeData("iabOpen")
        })), setTimeout(function() {
            e.removeClass("ui-btn-active")
        }, 100), !1
    }), $.mobile.document.on("click", ".ui-select .ui-btn", function() {
        var e = $(this),
            t = e.attr("id").replace("-button", "-listbox"),
            n = $("#" + t);
        return n.popup("destroy").detach().addClass("ui-page-theme-a"), $.mobile.pageContainer.append(n), n.popup({
            history: !1,
            positionTo: e,
            overlayTheme: "b"
        }).popup("open"), e.off("click").on("click", function() {
            n.popup("open")
        }), !1
    }), $.mobile.document.on("swiperight swipeleft", ".ui-page", function(e) {
        var t = $(".ui-page-active");
        "INPUT" === e.target.tagName || "TEXTAREA" === e.target.tagName || "open" === t.jqmData("panel") || t.find(".ui-popup-active").length || ("swiperight" === e.type ? openPanel() : showNotifications())
    }), $.widget("mobile.collapsible", $.mobile.collapsible, {
        _handleExpandCollapse: function(e) {
            this._trigger("before" + (e ? "collapse" : "expand")) && this._superApply(arguments)
        }
    }), $("#site-selector").on("change", function() {
        updateSite($(this).val())
    }), $("#footer-menu").on("click", function() {
        showHomeMenu(this)
    }), $("#header,#footer").toolbar(), FastClick.attach(document.body), updateTimers(), $.mobile.document.on("keydown", function(e) {
        var t = $(e.target).prop("tagName");
        if ("INPUT" !== t && "TEXTAREA" !== t) {
            var n = e.keyCode,
                i = e.altKey,
                o = $("#mainMenu-popup").hasClass("ui-popup-active");
            if (77 === n) 0 < $("#mainMenu").length ? $("#mainMenu").popup("close") : showHomeMenu();
            else(o || i) && 80 === n ? (e.preventDefault(), changePage("#programs")) : (o || i) && 79 === n ? (e.preventDefault(), changePage("#os-options")) : (o || i) && 86 === n ? (e.preventDefault(), changePage("#preview")) : (o || i) && 76 === n ? (e.preventDefault(), changePage("#logs")) : (o || i) && 82 === n ? (e.preventDefault(), changePage("#runonce")) : (o || i) && 68 === n && (e.preventDefault(), showRainDelay())
        }
    }), bindPanel(), currLocal || "undefined" != typeof cordova || updateDeviceIP(), cloudSync(), setTimeout(function() {
        checkConfigured(!0)
    }, 200)
}

function flipSwitched() {
    if (!switching) {
        var e, t = $(this),
            n = t.attr("id"),
            i = t.is(":checked"),
            o = "mmm" === n ? "mm" : n;
        e = sendToOS(i ? "/cv?pw=&" + o + "=1" : "/cv?pw=&" + o + "=0"), $.when(e).then(function() {
            refreshStatus(), "mmm" === n && $("#mm_list .green").removeClass("green"), checkStatus()
        }, function() {
            switching = !0, setTimeout(function() {
                switching = !1
            }, 200), t.prop("checked", !i).flipswitch("refresh")
        })
    }
}

function sendToOS(n, e) {
    n = n.replace("pw=", "pw=" + encodeURIComponent(currPass)), e = e || "text";
    var t = /\/(?:cv|cs|cr|cp|uwa|dp|co|cl|cu|up|cm)/.exec(n),
        i = t ? "change" : "default",
        o = t && checkOSVersion(300),
        a = {
            url: currPrefix + currIp + (o ? n.split("?")[0] : n),
            type: o ? "POST" : "GET",
            data: o ? getUrlVars(n) : null,
            dataType: e,
            shouldRetry: function(e, t) {
                return !(0 === e.status && "abort" === e.statusText || retryCount < t) || ($.ajaxq.abort(i), !1)
            }
        };
    return currAuth && $.extend(a, {
        beforeSend: function(e) {
            e.setRequestHeader("Authorization", "Basic " + btoa(currAuthUser + ":" + currAuthPass))
        }
    }), curr183 && $.extend(a, {
        cache: "true"
    }), $.ajaxq(i, a).then(function(t) {
        if ("string" == typeof t) try {
            t = $.parseJSON(t)
        } catch (e) {
            return t
        }
        return "object" != typeof t || "number" != typeof t.result ? t : 1 === t.result ? t : 2 === t.result ? (/\/(?:cv|cs|cr|cp|uwa|dp|co|cl|cu|up|cm)/.exec(n) && showerror(_("Check device password and try again.")), $.Deferred().reject({
            status: 401
        })) : 32 === t.result ? $.Deferred().reject({
            status: 404
        }) : /\/(?:cv|cs|cr|cp|uwa|dp|co|cl|cu|up|cm)/.exec(n) ? (48 === t.result ? showerror(_("The selected station is already running or is scheduled to run.")) : showerror(_("Please check input and try again.")), $.Deferred().reject(t)) : void 0
    }, function(e) {
        "timeout" !== e.statusText && 0 !== e.status || !/\/(?:cv|cs|cr|cp|uwa|dp|co|cl|cu|cm)/.exec(n) ? 401 === e.status && showerror(_("Check device password and try again.")) : showerror(_("Connection timed-out. Please try again."))
    })
}

function networkFail() {
    changeStatus(0, "red", "<p class='running-text center'>" + _("Network Error") + "</p>", function() {
        showLoading("#weather,#footer-running"), refreshStatus(), updateWeather()
    })
}

function newLoad() {
    var i = $("#site-selector").val(),
        e = "<div class='logo'></div><h1 style='padding-top:5px'>" + _("Connecting to") + " " + i + "</h1><p class='cancel tight center inline-icon'><span class='btn-no-border ui-btn ui-icon-delete ui-btn-icon-notext'></span>Cancel</p>";
    $.mobile.loading("show", {
        html: currLocal ? "<h1>" + _("Loading") + "</h1>" : e,
        textVisible: !0,
        theme: "b"
    }), $(".ui-loader").css({
        "box-shadow": "none",
        "margin-top": "-4em"
    }).find(".cancel").one("click", function() {
        $.ajaxq.abort("default"), changePage("#site-control", {
            transition: "none"
        })
    }), controller = {}, clearNotifications(), timers = {}, $.ajaxq.abort("default"), updateController(function() {
        var e = $(".weatherAdjust"),
            t = $(".changePassword");
        $.mobile.loading("hide"), checkURLandUpdateWeather(), checkOSVersion(210) ? e.css("display", "") : e.hide(), isOSPi() || checkOSVersion(208) ? t.css("display", "") : t.hide(), currLocal ? $("#info-list").find("li[data-role='list-divider']").text(_("Information")) : ($("#info-list").find("li[data-role='list-divider']").text(i), document.title = "OpenSprinkler - " + i), checkFirmwareUpdate(), detectUnusedExpansionBoards(), checkOSVersion(213) && 255 !== controller.options.hwv && fixPasswordHash(i), currLocal || "number" != typeof controller.settings.eip || checkPublicAccess(controller.settings.eip), updateLoginButtons(), isOSPi() && showUnifiedFirmwareNotification(), controller.options.firstRun ? showGuidedSetup() : goHome(!0)
    }, function(e) {
        $.ajaxq.abort("default"), controller = {}, $.mobile.loading("hide");

        function t() {
            currLocal ? storage.remove(["sites"], function() {
                window.location.reload()
            }) : "site-control" === $(".ui-page-active").attr("id") ? n() : ($.mobile.document.one("pageshow", n), changePage("#site-control", {
                transition: "none"
            }))
        }
        var n = function() {
            showerror(_("Unable to connect to") + " " + i, 3500)
        };
        "object" == typeof e && 401 === e.status ? ($(".ui-popup-active").find("[data-role='popup']").popup("close"), changePassword({
            fixIncorrect: !0,
            name: i,
            callback: newLoad,
            cancel: t
        })) : t()
    })
}

function updateController(e, n) {
    e = e || function() {}, n = n || function() {};

    function i() {
        $("html").trigger("datarefresh"), checkStatus(), e()
    }
    isControllerConnected() && checkOSVersion(216) ? sendToOS("/ja?pw=", "json").then(function(e) {
        if (void 0 === e || $.isEmptyObject(e)) n();
        else {
            var t = controller.special;
            (controller = e).special = t, controller.status = controller.status.sn, i()
        }
    }, n) : $.when(updateControllerPrograms(), updateControllerStations(), updateControllerOptions(), updateControllerStatus(), updateControllerSettings()).then(i, n)
}

function updateControllerPrograms(r) {
    return r = r || function() {}, !0 === curr183 ? sendToOS("/gp?d=0").done(function(e) {
        for (var t, n, i = e.match(/(nprogs|nboards|mnp)=[\w|\d|.\"]+/g), o = /pd=\[\];(.*);/.exec(e), a = {}, s = 0; s < i.length; s++) "" !== i[s] && (a[(t = i[s].split("="))[0]] = parseInt(t[1]));
        if (a.pd = [], null !== o)
            for (o = o[1].split(";"), s = 0; s < o.length; s++) n = (n = (n = o[s].split("="))[1].replace("[", "")).replace("]", ""), a.pd[s] = parseIntArray(n.split(","));
        controller.programs = a, r()
    }) : sendToOS("/jp?pw=", "json").done(function(e) {
        controller.programs = e, r()
    })
}

function updateControllerStations(o) {
    return o = o || function() {}, !0 === curr183 ? sendToOS("/vs").done(function(e) {
        var t = /snames=\[(.*?)\];/.exec(e),
            n = e.match(/(?:masop|mo)\s?[=|:]\s?\[(.*?)\]/);
        (t = t[1].split(",")).pop();
        for (var i = 0; i < t.length; i++) t[i] = t[i].replace(/'/g, "");
        n = parseIntArray(n[1].split(",")), controller.stations = {
            snames: t,
            masop: n,
            maxlen: t.length
        }, o()
    }) : sendToOS("/jn?pw=", "json").done(function(e) {
        controller.stations = e, o()
    })
}

function updateControllerOptions(r) {
    return r = r || function() {}, !0 === curr183 ? sendToOS("/vo").done(function(e) {
        var t, n, i, o = {};
        if (e.match(/var sd\s*=/)) {
            for (var a = /(tz|htp|htp2|nbrd|seq|sdt|mas|mton|mtoff|urs|rst|wl|ipas)\s?[=|:]\s?([\w|\d|.\"]+)/gm; null !== (t = a.exec(e));) o[t[1].replace("nbrd", "ext").replace("mtoff", "mtof")] = +t[2];
            o.ext--, o.fwv = "1.8.3-ospi"
        } else {
            var s = [1, 2, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26];
            for (t = (t = /var opts=\[(.*)\];/.exec(e))[1].replace(/"/g, "").split(","), n = 0; n < t.length - 1; n += 4) i = +t[n + 3], -1 !== $.inArray(i, s) && (o[keyIndex[i]] = +t[n + 2]);
            o.fwv = 183
        }
        controller.options = o, r()
    }) : sendToOS("/jo?pw=", "json").done(function(e) {
        controller.options = e, r()
    })
}

function updateControllerStatus(n) {
    return n = n || function() {}, !0 === curr183 ? sendToOS("/sn0").then(function(e) {
        var t = e.toString().match(/\d+/);
        t = parseIntArray(t[0].split("")), controller.status = t, n()
    }, function() {
        controller.status = []
    }) : sendToOS("/js?pw=", "json").then(function(e) {
        controller.status = e.sn, n()
    }, function() {
        controller.status = []
    })
}

function updateControllerSettings(o) {
    return o = o || function() {}, !0 === curr183 ? sendToOS("").then(function(e) {
        var t, n, i = /(ver|devt|nbrd|tz|en|rd|rs|mm|rdst|urs)\s?[=|:]\s?([\w|\d|.\"]+)/gm,
            o = e.match(/loc\s?[=|:]\s?[\"|'](.*)[\"|']/),
            a = e.match(/lrun=\[(.*)\]/),
            s = e.match(/ps=\[(.*)\];/),
            r = {};
        for (n = (s = s[1].split("],[")).length - 1; 0 <= n; n--) s[n] = parseIntArray(s[n].replace(/\[|\]/g, "").split(","));
        for (; null !== (t = i.exec(e));) r[t[1]] = +t[2];
        r.loc = o[1], r.ps = s, r.lrun = parseIntArray(a[1].split(",")), controller.settings = r
    }, function() {
        if (controller.settings && controller.stations) {
            var e, t = [];
            for (e = 0; e < controller.stations.maxlen; e++) t.push([0, 0]);
            controller.settings.ps = t
        }
    }) : sendToOS("/jc?pw=").then(function(t) {
        if ("object" != typeof t) try {
            t = JSON.parse(t)
        } catch (e) {
            var n = /,"wto":\{.*?\}/,
                i = t.match(n);
            t = t.replace(n, "");
            try {
                t = JSON.parse(t), handleCorruptedWeatherOptions(i)
            } catch (e) {
                return !1
            }
        }
        if (void 0 === t.lrun && (t.lrun = [0, 0, 0, 0]), t.loc.match(regex.gps)) {
            var e = t.loc.split(",");
            currentCoordinates = [parseFloat(e[0]), parseFloat(e[1])]
        }
        controller.settings = t, o()
    }, function() {
        if (controller.settings && controller.stations) {
            var e, t = [];
            for (e = 0; e < controller.stations.maxlen; e++) t.push([0, 0]);
            controller.settings.ps = t
        }
    })
}

function updateControllerStationSpecial(t) {
    return t = t || function() {}, sendToOS("/je?pw=", "json").then(function(e) {
        controller.special = e, t()
    }, function() {
        controller.special = {}
    })
}

function checkConfigured(o) {
    storage.get(["sites", "current_site", "cloudToken"], function(e) {
        var t, n = e.sites,
            i = e.current_site;
        if (n = parseSites(n), (t = Object.keys(n)).length) {
            if (null === i || !(i in n)) return $.mobile.loading("hide"), void changePage("#site-control", {
                transition: o ? "none" : void 0
            });
            updateSiteList(t, i), currIp = n[i].os_ip, currPass = n[i].os_pw, currPrefix = void 0 !== n[i].ssl && "1" === n[i].ssl ? "https://" : "http://", void 0 !== n[i].auth_user && void 0 !== n[i].auth_pw ? (currAuth = !0, currAuthUser = n[i].auth_user, currAuthPass = n[i].auth_pw) : currAuth = !1, curr183 = !!n[i].is183, newLoad()
        } else o && (void 0 === e.cloudToken || null === e.cloudToken ? changePage("#start", {
            transition: "none"
        }) : changePage("#site-control", {
            transition: "none"
        }))
    })
}

function fixPasswordHash(o) {
    storage.get(["sites"], function(e) {
        var n = parseSites(e.sites);
        if (!isMD5(currPass)) {
            var i = md5(currPass);
            sendToOS("/sp?pw=&npw=" + encodeURIComponent(i) + "&cpw=" + encodeURIComponent(i), "json").done(function(e) {
                var t = e.result;
                if (!t || 1 < t) return !1;
                n[o].os_pw = currPass = i, storage.set({
                    sites: JSON.stringify(n)
                }, cloudSaveSites)
            })
        }
    })
}

function submitNewUser(s, r) {
    document.activeElement.blur(), $.mobile.loading("show");

    function i(e, t) {
        var n;
        if ($.mobile.loading("hide"), ("string" == typeof e && e.match(/var (en|sd)\s*=/) || "number" == typeof e.fwv && 203 === e.fwv) && (n = !0), void 0 !== e.fwv || !0 === n) {
            var i = $("#os_name").val(),
                o = $("#os_pw").val(),
                a = $("#save_pw").is(":checked");
            "" === i && (i = "Site " + (Object.keys(t).length + 1)), t[i] = {}, t[i].os_ip = currIp = l, "number" == typeof e.fwv && 213 <= e.fwv && "number" == typeof e.wl && (o = md5(o)), t[i].os_pw = a ? o : "", currPass = o, currPrefix = s ? (t[i].ssl = "1", "https://") : "http://", r ? (t[i].auth_user = $("#os_auth_user").val(), t[i].auth_pw = $("#os_auth_pw").val(), currAuth = !0, currAuthUser = t[i].auth_user, currAuthPass = t[i].auth_pw) : currAuth = !1, !0 === n && (t[i].is183 = "1", curr183 = !0), $("#os_name,#os_ip,#os_pw,#os_auth_user,#os_auth_pw").val(""), storage.set({
                sites: JSON.stringify(t),
                current_site: i
            }, function() {
                cloudSaveSites(), updateSiteList(Object.keys(t), i), newLoad()
            })
        } else showerror(_("Check IP/Port and try again."))
    }

    function t(e) {
        r || 401 !== e.status ? s ? ($.mobile.loading("hide"), showerror(_("Check IP/Port and try again."))) : submitNewUser(!0) : a()
    }

    function n() {
        return btoa($("#os_auth_user").val() + ":" + $("#os_auth_pw").val())
    }
    var o, l = $.mobile.path.parseUrl($("#os_ip").val()).hrefNoHash.replace(/https?:\/\//, ""),
        a = function() {
            $("#addnew-auth").length ? submitNewUser(s, !0) : e()
        },
        e = function() {
            $.mobile.loading("hide");
            var e = $("<div class='ui-content' id='addnew-auth'><form method='post' novalidate><p class='center smaller'>" + _("Authorization Required") + "</p><label for='os_auth_user'>" + _("Username:") + "</label><input autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' type='text' name='os_auth_user' id='os_auth_user'><label for='os_auth_pw'>" + _("Password:") + "</label><input type='password' name='os_auth_pw' id='os_auth_pw'><input type='submit' value='" + _("Submit") + "'></form></div>").enhanceWithin();
            e.on("submit", "form", function() {
                return submitNewUser(s, !0), !1
            }), $("#addnew-content").hide(), $("#addnew").append(e).popup("reposition", {
                positionTo: "window"
            })
        };
    l ? !0 !== r && $("#os_useauth").is(":checked") ? a() : (!0 === $("#os_usessl").is(":checked") && (s = !0), o = s ? "https://" : "http://", r && ($("#addnew-auth").hide(), $("#addnew-content").show(), $("#addnew").popup("reposition", {
        positionTo: "window"
    })), $.ajax({
        url: o + l + "/jo?pw=" + md5($("#os_pw").val()),
        type: "GET",
        dataType: "json",
        timeout: 1e4,
        global: !1,
        beforeSend: function(e) {
            r && e.setRequestHeader("Authorization", "Basic " + n())
        },
        error: function(e) {
            r || 401 !== e.status ? $.ajax({
                url: o + l,
                type: "GET",
                dataType: "text",
                timeout: 1e4,
                global: !1,
                cache: !0,
                beforeSend: function(e) {
                    r && e.setRequestHeader("Authorization", "Basic " + n())
                },
                success: function(n) {
                    storage.get("sites", function(e) {
                        var t = parseSites(e.sites);
                        i(n, t)
                    })
                },
                error: t
            }) : a()
        },
        success: function(n) {
            storage.get("sites", function(e) {
                var t = parseSites(e.sites);
                i(n, t)
            })
        }
    })) : showerror(_("An IP address is required to continue."))
}

function parseSites(e) {
    return null == e ? {} : JSON.parse(e)
}

function showSiteSelect(e) {
    $("#site-select").popup("destroy").remove();
    var t = $("<div data-role='popup' id='site-select' data-theme='a' data-overlay-theme='b'><div data-role='header' data-theme='b'><h1>" + _("Select Site") + "</h1></div><div class='ui-content'><ul data-role='none' class='ui-listview ui-corner-all ui-shadow'></ul></div></div>");
    e && t.find("ul").html(e), t.one("popupafterclose", function() {
        $(this).popup("destroy").remove()
    }).popup({
        history: !1,
        positionTo: "window"
    }).enhanceWithin().popup("open")
}

function showAddNew(e, t) {
    $("#addnew").popup("destroy").remove();
    var n = !!e,
        i = $("<div data-role='popup' id='addnew' data-theme='a' data-overlay-theme='b'><div data-role='header' data-theme='b'><h1>" + _("New Device") + "</h1></div><div class='ui-content' id='addnew-content'><form method='post' novalidate>" + (n ? "" : "<p class='center smaller'>" + _("Note: The name is used to identify the OpenSprinkler within the app. OpenSprinkler IP can be either an IP or hostname. You can also specify a port by using IP:Port") + "</p>") + "<label for='os_name'>" + _("Open Sprinkler Name:") + "</label><input autocorrect='off' spellcheck='false' type='text' name='os_name' id='os_name' placeholder='Home'>" + (n ? "" : "<label for='os_ip'>" + _("Open Sprinkler IP:") + "</label>") + "<input " + (n ? "data-role='none' style='display:none' " : "") + "autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' type='url' pattern='' name='os_ip' id='os_ip' value='" + (n ? e : "") + "' placeholder='home.dyndns.org'><label for='os_pw'>" + _("Open Sprinkler Password:") + "</label><input type='password' name='os_pw' id='os_pw' value=''><label for='save_pw'>" + _("Save Password") + "</label><input type='checkbox' data-wrapper-class='save_pw' name='save_pw' id='save_pw' data-mini='true' checked='checked'>" + (n ? "" : "<div data-theme='a' data-mini='true' data-role='collapsible'><h4>" + _("Advanced") + "</h4><fieldset data-role='controlgroup' data-type='horizontal' data-mini='true' class='center'><input type='checkbox' name='os_usessl' id='os_usessl'><label for='os_usessl'>" + _("Use SSL") + "</label><input type='checkbox' name='os_useauth' id='os_useauth'><label for='os_useauth'>" + _("Use Auth") + "</label></fieldset></div>") + "<input type='submit' data-theme='b' value='" + _("Submit") + "'></form></div></div>");
    return i.find("form").on("submit", function() {
        return submitNewUser(), !1
    }), i.one("popupafterclose", function() {
        $(this).popup("destroy").remove()
    }).popup({
        history: !1,
        positionTo: "window"
    }).enhanceWithin(), t ? $(".ui-popup-active").children().first().one("popupafterclose", function() {
        i.popup("open")
    }).popup("close") : i.popup("open"), fixInputClick(i), i.find(".ui-collapsible-heading-toggle").on("click", function() {
        var e = $(this).parents(".ui-collapsible").hasClass("ui-collapsible-collapsed"),
            t = $(".ui-page-active"),
            n = parseInt(t.css("min-height"));
        e ? t.css("min-height", n + 65 + "px") : t.css("min-height", n - 65 + "px"), i.popup("reposition", {
            positionTo: "window"
        })
    }), !1
}
$(document).one("deviceready", function() {
    try {
        StatusBar.overlaysWebView(!1), StatusBar.styleLightContent(), StatusBar.backgroundColorByHexString(statusBarPrimary), $.mobile.window.on("statusTap", function() {
            $("body, html").animate({
                scrollTop: 0
            }, 700)
        })
    } catch (e) {}
    setTimeout(function() {
        try {
            navigator.splashscreen.hide()
        } catch (e) {}
    }, 500), $.mobile.document.on("backbutton", function() {
        return isIEMobile && $.mobile.document.data("iabOpen") || checkChangesBeforeBack(), !1
    }), updateDeviceIP(), isiOS && ThreeDeeTouch.isAvailable(function(e) {
        e && (ThreeDeeTouch.enableLinkPreview(), ThreeDeeTouch.configureQuickActions([{
            type: "sites",
            title: _("Manage Sites"),
            iconType: "Location"
        }, {
            type: "addprogram",
            title: _("Add Program"),
            iconType: "Add"
        }, {
            type: "stopall",
            title: _("Stop All Stations"),
            iconType: "Pause"
        }]), ThreeDeeTouch.onHomeIconPressed = function(e) {
            "sites" === e.type ? changePage("#site-control") : "addprogram" === e.type ? changePage("#addprogram") : "stopall" === e.type && stopAllStations()
        })
    })
}).one("mobileinit", function() {
    !isChromeApp && "file:" !== window.location.protocol || ($.mobile.hashListeningEnabled = !1), $.support.cors = !0, $.mobile.allowCrossDomainPages = !0, loadUnitSetting()
}).on("pagebeforechange", function(e, t) {
    var n, i = t.toPage,
        o = $(".ui-page-active");
    "string" == typeof t.toPage && (n = $.mobile.path.parseUrl(i).hash, 0 < o.length && n === "#" + o.attr("id") || ("popup" === t.options.role || $(".ui-popup-active").length || $.mobile.silentScroll(0), "#programs" === n ? getPrograms(t.options.programToExpand) : "#addprogram" === n ? addProgram(t.options.copyID) : "#manual" === n ? getManual() : "#about" === n ? showAbout() : "#runonce" === n ? getRunonce() : "#os-options" === n ? showOptions(t.options.expandItem) : "#preview" === n ? getPreview() : "#logs" === n ? getLogs() : "#forecast" === n ? showForecast() : "#loadingPage" === n ? checkConfigured(!0) : "#start" === n ? showStart() : "#site-control" === n ? showSites() : "#sprinklers" === n && (0 === $(n).length ? showHome(t.options.firstLoad) : $(n).one("pageshow", refreshStatus))))
}).on("resume", function() {
    void 0 !== currIp && (cloudSync(), showLoading("#weather,#footer-running"), updateController(updateWeather, networkFail))
}).on("pause", function() {}).on("pagebeforeshow", function(e) {
    var t = "#" + e.target.id;
    "#start" == t || "#loadingPage" == t ? $("#header,#footer,#footer-menu").hide() : $("#header,#footer,#footer-menu").show(), storage.get("showDisabled", function(e) {
        e.showDisabled && "true" === e.showDisabled && $(t).addClass("show-hidden").find(".station-hidden").show()
    })
}).on("pageshow", function(e) {
    var t = "#" + e.target.id,
        n = $(t);
    if (goingBack ? goingBack = !1 : pageHistoryCount++, fixInputClick(n), isControllerConnected() && "#site-control" != t && "#start" != t && "#loadingPage" != t) {
        var i, o = setInterval(refreshStatus, 5e3);
        checkOSVersion(216) || (i = setInterval(refreshData, 2e4)), n.one("pagehide", function() {
            clearInterval(o), clearInterval(i)
        })
    }
}).on("popupafteropen", function() {
    if ($(".ui-overlay-b:not(.ui-screen-hidden)").length) try {
        StatusBar.backgroundColorByHexString(statusBarOverlay)
    } catch (e) {}
}).on("popupafterclose", function() {
    $(".ui-page-active").children().add("#sprinklers-settings").removeClass("blur-filter");
    try {
        StatusBar.backgroundColorByHexString(statusBarPrimary)
    } catch (e) {}
}).on("popupbeforeposition", function() {
    $(".ui-page-active").children().add("#sprinklers-settings").addClass("blur-filter")
}).on("popupbeforeposition", "#localization", checkCurrLang).one("pagebeforeshow", "#loadingPage", initApp);
var showSites = function() {
    var g, e, i, o = $("<div data-role='page' id='site-control'><div class='ui-content'></div></div>"),
        t = function() {
            function t() {
                e.eq(0).hide(), $("#header").show(), $("#footer, #footer-menu").hide()
            }
            o.hasClass("ui-page-active") ? t() : o.one("pagebeforeshow", function(e) {
                e.stopImmediatePropagation(), t()
            }), o.on("swiperight swipeleft", function(e) {
                e.stopImmediatePropagation()
            }), document.title = "OpenSprinkler"
        },
        n = $("<div data-role='popup' id='addsite' data-theme='b'><ul data-role='listview'><li data-icon='false'><a href='#' id='site-add-scan'>" + _("Scan For Device") + "</a></li><li data-icon='false'><a href='#' id='site-add-manual'>" + _("Manually Add Device") + "</a></li></ul></div>");

    function v() {
        storage.get(["sites", "current_site", "cloudToken"], function(h) {
            if (g = parseSites(h.sites), $.isEmptyObject(g)) {
                if ("string" != typeof h.cloudToken) return void changePage("#start");
                t(), o.find(".ui-content").html("<p class='center'>" + _("Please add a site by tapping the 'Add' button in the top right corner.") + "</p>")
            } else {
                var f = "<div data-role='collapsible-set'>",
                    m = [],
                    n = 0;
                i = Object.keys(g).length, isControllerConnected() && i && h.current_site in g || t(), g = sortObj(g), $.each(g, function(e, t) {
                    m.push(e), e = htmlEscape(e), f += "<fieldset " + (1 === i ? "data-collapsed='false'" : "") + " id='site-" + n + "' data-role='collapsible'><h3><a class='ui-btn ui-btn-corner-all connectnow yellow' data-site='" + n + "' href='#'>" + _("connect") + "</a>" + e + "</h3><form data-site='" + n + "' novalidate><div class='ui-field-contain'><label for='cnm-" + n + "'>" + _("Change Name") + "</label><input id='cnm-" + n + "' type='text' value='" + e + "'></div><div class='ui-field-contain'><label for='cip-" + n + "'>" + _("Change IP") + "</label><input id='cip-" + n + "' type='url' value='" + t.os_ip + "' autocomplete='off' autocorrect='off' autocapitalize='off' pattern='' spellcheck='false'></div><div class='ui-field-contain'><label for='cpw-" + n + "'>" + _("Change Password") + "</label><input id='cpw-" + n + "' type='password'></div><fieldset data-mini='true' data-role='collapsible'><h3><span style='line-height:23px'>" + _("Advanced") + "</span><button data-helptext='" + _("These options are only for an OpenSprinkler behind a proxy capable of SSL and/or Basic Authentication.") + "' class='collapsible-button-right help-icon btn-no-border ui-btn ui-icon-info ui-btn-icon-notext'></button></h3><label for='usessl-" + n + "'><input data-mini='true' type='checkbox' id='usessl-" + n + "' name='usessl-" + n + "'" + (void 0 !== t.ssl && "1" === t.ssl ? " checked='checked'" : "") + ">" + _("Use SSL") + "</label><label for='useauth-" + n + "'><input class='useauth' data-user='" + t.auth_user + "' data-pw='" + t.auth_pw + "' data-mini='true' type='checkbox' id='useauth-" + n + "' name='useauth-" + n + "'" + (void 0 !== t.auth_user && void 0 !== t.auth_pw ? " checked='checked'" : "") + ">" + _("Use Auth") + "</label></fieldset><input class='submit' type='submit' value='" + _("Save Changes to") + " " + e + "'><a data-role='button' class='deletesite' data-site='" + n + "' href='#' data-theme='b'>" + _("Delete") + " " + e + "</a></form></fieldset>", testSite(t, n, function(e, t) {
                        o.find("#site-" + e + " .connectnow").removeClass("yellow").addClass(t ? "green" : "red")
                    }), n++
                }), (f = $(f + "</div>")).find("form").one("change input", function() {
                    $(this).find(".submit").addClass("hasChanges")
                }), f.find(".connectnow").on("click", function() {
                    return updateSite(m[$(this).data("site")]), !1
                }), f.find(".help-icon").on("click", showHelpText), f.find(".useauth").on("change", function() {
                    var e = $(this);
                    if (e.is(":checked")) {
                        var t = $("<div data-role='popup' data-theme='a'><form method='post' class='ui-content' novalidate><label for='auth_user'>" + _("Username:") + "</label><input autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' type='text' name='auth_user' id='auth_user'><label for='auth_pw'>" + _("Password:") + "</label><input type='password' name='auth_pw' id='auth_pw'><input type='submit' class='submit' value='" + _("Submit") + "'></form></div>").enhanceWithin(),
                            n = !1;
                        t.find(".submit").on("click", function() {
                            return e.data({
                                user: t.find("#auth_user").val(),
                                pw: t.find("#auth_pw").val()
                            }), n = !0, t.popup("close"), !1
                        }), t.one("popupafterclose", function() {
                            n || e.attr("checked", !1).checkboxradio("refresh")
                        }), openPopup(t)
                    } else e.data({
                        user: "",
                        pw: ""
                    })
                }), f.find("form").on("submit", function() {
                    var e = $(this),
                        t = e.data("site"),
                        n = m[t],
                        i = f.find("#cip-" + t).val(),
                        o = f.find("#cpw-" + t).val(),
                        a = f.find("#cnm-" + t).val(),
                        s = f.find("#useauth-" + t).is(":checked"),
                        r = f.find("#usessl-" + t).is(":checked") ? "1" : void 0,
                        l = f.find("#useauth-" + t).data("user"),
                        c = f.find("#useauth-" + t).data("pw"),
                        u = "" !== i && i !== g[n].os_ip || r !== g[n].ssl || l !== g[n].auth_user || c !== g[n].auth_pw,
                        d = n === h.current_site,
                        p = "" !== a && a !== n;
                    return e.find(".submit").removeClass("hasChanges"), s ? (g[n].auth_user = l, g[n].auth_pw = c) : (delete g[n].auth_user, delete g[n].auth_pw), "1" === r ? g[n].ssl = r : delete g[n].ssl, "" !== i && i !== g[n].os_ip && (g[n].os_ip = i), "" !== o && o !== g[n].os_pw && (isMD5(g[n].os_pw) && (o = md5(o)), g[n].os_pw = o), p && (g[a] = g[n], delete g[n], n = a, d && (storage.set({
                        current_site: n
                    }), h.current_site = n), updateSiteList(Object.keys(g), h.current_site)), storage.set({
                        sites: JSON.stringify(g)
                    }, cloudSaveSites), showerror(_("Site updated successfully")), n === h.current_site && ("" !== o && (currPass = o), u && checkConfigured()), p && !e.find(".submit").hasClass("preventUpdate") && v(), !1
                }), f.find(".deletesite").on("click", function() {
                    var e = m[$(this).data("site")];
                    return $("#site-selector").val() === e && t(), delete g[e], storage.set({
                        sites: JSON.stringify(g)
                    }, function() {
                        return cloudSaveSites(), updateSiteList(Object.keys(g), h.current_site), $.isEmptyObject(g) ? storage.get("cloudToken", function() {
                            if (null === h.cloudToken || void 0 === h.cloudToken) return currPass = currIp = "", void changePage("#start")
                        }) : (v(), showerror(_("Site deleted successfully"))), !1
                    }), !1
                }), o.find(".ui-content").html(f.enhanceWithin())
            }
            "string" == typeof h.cloudToken && o.find(".ui-content").prepend(addSyncStatus(h.cloudToken))
        })
    }
    return n.find("#site-add-scan").on("click", function() {
            return n.popup("close"), startScan(), !1
        }), n.find("#site-add-manual").on("click", function() {
            return showAddNew(!1, !0), !1
        }), o.on("pagehide", function() {
            n.popup("destroy").detach(), o.detach()
        }), $("html").on("siterefresh", function() {
            o.hasClass("ui-page-active") && v()
        }),
        function() {
            e = changeHeader({
                title: _("Manage Sites"),
                animate: !!isControllerConnected(),
                leftBtn: {
                    icon: "carat-l",
                    text: _("Back"),
                    class: "ui-toolbar-back-btn",
                    on: function() {
                        o.find(".hasChanges").addClass("preventUpdate"), checkChangesBeforeBack()
                    }
                },
                rightBtn: {
                    icon: "plus",
                    text: _("Add"),
                    on: function() {
                        void 0 === deviceip ? showAddNew() : n.popup("open").popup("reposition", {
                            positionTo: e.eq(2)
                        })
                    }
                }
            }), v(), $.mobile.pageContainer.append(n), n.popup({
                history: !1,
                positionTo: e.eq(2)
            }).enhanceWithin(), $("#site-control").remove(), $.mobile.pageContainer.append(o)
        }
}();

function addSyncStatus(e) {
    var t = $("<div class='ui-bar smaller ui-bar-a ui-corner-all logged-in-alert'><div class='inline ui-btn ui-icon-recycle btn-no-border ui-btn-icon-notext ui-mini'></div><div class='inline syncStatus'>" + _("Synced with OpenSprinkler.com") + " (" + getTokenUser(e) + ")</div><div class='inline ui-btn ui-icon-delete btn-no-border ui-btn-icon-notext ui-mini logout'></div></div>");
    return t.find(".logout").on("click", logout), t.find(".ui-icon-recycle").on("click", function() {
        var e = $(this);
        e.addClass("spin"), cloudSync(function() {
            e.removeClass("spin")
        })
    }), t
}

function testSite(t, e, n) {
    $.ajax({
        url: ("1" === t.ssl ? "https://" : "http://") + t.os_ip + "/jo?pw=" + encodeURIComponent(t.os_pw),
        type: "GET",
        dataType: "json",
        beforeSend: function(e) {
            void 0 !== t.auth_user && void 0 !== t.auth_pw && e.setRequestHeader("Authorization", "Basic " + btoa(t.auth_user + ":" + t.auth_pw))
        }
    }).then(function() {
        n(e, !0)
    }, function() {
        n(e, !1)
    })
}

function updateSiteList(e, t) {
    var n = "",
        i = $("#site-selector");
    $.each(e, function() {
        n += "<option " + (this.toString() === t ? "selected " : "") + "value='" + htmlEscape(this) + "'>" + this + "</option>"
    }), $("#info-list").find("li[data-role='list-divider']").text(t), i.html(n), i.parent().parent().hasClass("ui-select") && i.selectmenu("refresh")
}

function updateSite(n) {
    storage.get("sites", function(e) {
        var t = parseSites(e.sites);
        n in t && closePanel(function() {
            storage.set({
                current_site: n
            }, checkConfigured)
        })
    })
}

function findLocalSiteName(e, t) {
    for (var n in e)
        if (e.hasOwnProperty(n) && -1 !== currIp.indexOf(e[n].os_ip)) return void t(n);
    t(!1)
}

function updateDeviceIP(t) {
    function n(e) {
        deviceip = e, "function" == typeof t && t(e)
    }
    var i;
    if (isChromeApp) chrome.system.network.getNetworkInterfaces(function(e) {
        var t;
        for (t in e) e.hasOwnProperty(t) && /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/.test(e[t].address) && (i = e[t].address);
        n(i)
    });
    else try {
        networkinterface.getWiFiIPAddress(function(e) {
            i = e.ip, n(i)
        })
    } catch (e) {
        findRouter(function(e, t) {
            n(e ? t : void 0)
        })
    }
}

function isLocalIP(e) {
    var t = parseIntArray(e.split("."));
    return 10 === t[0] || 127 === t[0] || 172 === t[0] && 17 < t[1] && t[1] < 32 || 192 === t[0] && 168 === t[1]
}

function startScan(e, t) {
    var n, i, o, a, s, r, l, c, u, d = deviceip.split("."),
        p = 1,
        h = 0,
        f = "",
        m = "",
        g = [],
        v = !1;
    for (t = t || 0, e = "number" == typeof e ? e : 80, storage.get("sites", function(e) {
            var t, n = parseSites(e.sites);
            for (t in n) n.hasOwnProperty(t) && g.push(n[t].os_ip)
        }), o = function() {
            p++
        }, a = function(e) {
            p++;
            var t, n, i = $.mobile.path.parseUrl(this.url).authority;
            if (-1 === $.inArray(i, g)) {
                if ("text" === this.dataType) {
                    if (!(n = e.match(/var\s*ver=(\d+)/))) return;
                    t = n[1]
                } else {
                    if (!e.hasOwnProperty("fwv")) return;
                    t = e.fwv
                }
                h++, f += "<li><a class='ui-btn ui-btn-icon-right ui-icon-carat-r' href='#' data-ip='" + i + "'>" + i + "<p>" + _("Firmware") + ": " + getOSVersion(t) + "</p></a></li>"
            }
        }, r = function() {
            if (!0 === v) return $.mobile.loading("hide"), clearInterval(l), !1;
            245 === p && ($.mobile.loading("hide"), clearInterval(l), h ? ((f = $(f)).find("a").on("click", function() {
                return addFound($(this).data("ip")), !1
            }), showSiteSelect(f)) : 0 === t ? startScan(8080, 1) : 1 === t ? startScan(80, 2) : 2 === t ? startScan(8080, 3) : showerror(_("No new devices were detected on your network")))
        }, d.pop(), s = d.join("."), 0 === t ? u = _("Scanning for OpenSprinkler") : 1 === t ? u = _("Scanning for OpenSprinkler Pi") : 2 === t ? u = _("Scanning for OpenSprinkler (1.8.3)") : 3 === t && (u = _("Scanning for OpenSprinkler Pi (1.8.3)")), $.mobile.loading("show", {
            html: "<h1>" + u + "</h1><p class='cancel tight center inline-icon'><span class='btn-no-border ui-btn ui-icon-delete ui-btn-icon-notext'></span>" + _("Cancel") + "</p>",
            textVisible: !0,
            theme: "b"
        }), $(".ui-loader").find(".cancel").one("click", function() {
            v = !0
        }), n = 1; n <= 244; n++) c = t < 2 ? (m = "/jo", "json") : "text", i = "http://" + (d = s + "." + n) + (e && 80 !== e ? ":" + e : "") + m, $.ajax({
        url: i,
        type: "GET",
        dataType: c,
        timeout: 6e3,
        global: !1,
        error: o,
        success: a
    });
    l = setInterval(r, 200)
}

function findRouter(e) {
    e = e || function() {};

    function t(e, t) {
        r++, !0 === e && (i = t)
    }
    var n, i, o, a = ["192.168.1.1", "10.0.1.1", "192.168.1.220", "192.168.2.1", "10.1.1.1", "192.168.11.1", "192.168.0.1", "192.168.0.30", "192.168.0.50", "192.168.10.1", "192.168.20.1", "192.168.30.1", "192.168.62.1", "192.168.102.1", "192.168.1.254", "192.168.0.227", "10.0.0.138", "192.168.123.254", "192.168.4.1", "10.0.0.2", "10.0.2.1", "10.0.3.1", "10.0.4.1", "10.0.5.1"],
        s = a.length,
        r = 0;
    for (o = 0; o < s; o++) "string" != typeof i && ping(a[o], t);
    n = setInterval(function() {
        r !== s && "string" != typeof i || (clearInterval(n), "string" == typeof i ? e(!0, i) : e(!1))
    }, 50)
}

function ping(t, n) {
    n = n || function() {}, t && "" !== t || n(!1), $.ajax({
        url: "http://" + t,
        type: "GET",
        timeout: 6e3,
        global: !1
    }).then(function() {
        n(!0, t)
    }, function(e) {
        "timeout" === e.statusText ? n(!1) : n(!0, t)
    })
}

function addFound(e) {
    $("#site-select").one("popupafterclose", function() {
        showAddNew(e)
    }).popup("close")
}

function showZimmermanAdjustmentOptions(t, n) {
    $(".ui-popup-active").find("[data-role='popup']").popup("close");
    var e = $.extend({}, {
            h: 100,
            t: 100,
            r: 100,
            bh: 30,
            bt: 70,
            br: 0
        }, unescapeJSON(t.value)),
        i = checkOSVersion(2162);
    isMetric && (e.bt = Math.round(5 * (e.bt - 32) / 9 * 10) / 10, e.br = Math.round(25.4 * e.br * 10) / 10);

    function o(e, t) {
        var n = a.find(".inputs input").eq(e),
            i = parseInt(n.val()); - 1 === t && 0 === i || 1 === t && 100 === i || n.val(i + t)
    }
    var a = $("<div data-role='popup' data-theme='a' id='adjustmentOptions'><div data-role='header' data-theme='b'><h1>" + _("Weather Adjustment Options") + "</h1></div><div class='ui-content'><p class='rain-desc center smaller'>" + _("Set the baseline weather conditions for your location. ") + _("The Zimmerman method will adjust the watering duration based on differences from this reference point.") + "</p><div class='ui-grid-b'><div class='ui-block-a'><label class='center'>" + _("Temp") + (isMetric ? " &#176;C" : " &#176;F") + "</label><input data-wrapper-class='pad_buttons' class='bt' type='number' " + (isMetric ? "min='-20' max='50'" : "min='0' max='120'") + " value='" + e.bt + (i ? "'>" : "' disabled='disabled'>") + "</div><div class='ui-block-b'><label class='center'>" + _("Rain") + (isMetric ? " mm" : ' "') + "</label><input data-wrapper-class='pad_buttons' class='br' type='number' " + (isMetric ? "min='0' max='25' step='0.1'" : "min='0' max='1' step='0.01'") + " value='" + e.br + (i ? "'>" : "' disabled='disabled'>") + "</div><div class='ui-block-c'><label class='center'>" + _("Humidity") + " %</label><input data-wrapper-class='pad_buttons' class='bh' type='number'  min='0' max='100' value='" + e.bh + (i ? "'>" : "' disabled='disabled'>") + "</div></div><p class='rain-desc center smaller'>" + _("Set the sensitivity of the watering adjustment to changes in each of the above weather conditions.") + "</p><span><fieldset class='ui-grid-b incr'><div class='ui-block-a'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a></div><div class='ui-block-b'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a></div><div class='ui-block-c'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a></div></fieldset><div class='ui-grid-b inputs'><div class='ui-block-a'><input data-wrapper-class='pad_buttons' class='t' type='number' min='0' max='100' value='" + e.t + "'></div><div class='ui-block-b'><input data-wrapper-class='pad_buttons' class='r' type='number'  min='0' max='100' value='" + e.r + "'></div><div class='ui-block-c'><input data-wrapper-class='pad_buttons' class='h' type='number'  min='0' max='100' value='" + e.h + "'></div></div><fieldset class='ui-grid-b decr'><div class='ui-block-a'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a></div><div class='ui-block-b'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a></div><div class='ui-block-c'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a></div></fieldset></span><button class='submit' data-theme='b'>" + _("Submit") + "</button></div></div>");
    a.find(".submit").on("click", function() {
        var e = {
            h: parseInt(a.find(".h").val()),
            t: parseInt(a.find(".t").val()),
            r: parseInt(a.find(".r").val())
        };
        return i && ($.extend(e, {
            bh: parseInt(a.find(".bh").val()),
            bt: parseFloat(a.find(".bt").val()),
            br: parseFloat(a.find(".br").val())
        }), isMetric && (e.bt = Math.round(100 * (9 * e.bt / 5 + 32)) / 100, e.br = Math.round(e.br / 25.4 * 1e3) / 1e3)), t && (t.value = escapeJSON(e)), n(), a.popup("close"), !1
    }), a.on("focus", "input[type='number']", function() {
        this.value = ""
    }).on("blur", "input[type='number']", function() {
        var e = parseFloat(this.min),
            t = parseFloat(this.max);
        "" === this.value && (this.value = "0"), (this.value < e || this.value > t) && (this.value = this.value < e ? e : t)
    }), holdButton(a.find(".incr").children(), function(e) {
        var t = $(e.currentTarget).index();
        return o(t, 1), !1
    }), holdButton(a.find(".decr").children(), function(e) {
        var t = $(e.currentTarget).index();
        return o(t, -1), !1
    }), $("#adjustmentOptions").remove(), a.css("max-width", "380px"), openPopup(a, {
        positionTo: "window"
    })
}

function showAutoRainDelayAdjustmentOptions(e, t) {
    $(".ui-popup-active").find("[data-role='popup']").popup("close");

    function n(e) {
        var t = o.find("#delay_duration"),
            n = parseInt(t.val()); - 1 === e && 0 === n || 1 === e && 8760 === n || t.val(n + e)
    }
    var i = $.extend({}, {
            d: 24
        }, unescapeJSON(e.value)),
        o = $("<div data-role='popup' data-theme='a' id='adjustmentOptions'><div data-role='header' data-theme='b'><h1>" + _("Weather Adjustment Options") + "</h1></div><div class='ui-content'><p class='rain-desc center smaller'>" + _("If the weather reports any condition suggesting rain, a rain delay is automatically issued using the below set delay duration.") + "</p><label class='center' for='delay_duration'>" + _("Delay Duration (hours)") + "</label><div class='input_with_buttons'><button class='decr ui-btn ui-btn-icon-notext ui-icon-carat-l btn-no-border'></button><input id='delay_duration' type='number' pattern='[0-9]*' value='" + i.d + "'><button class='incr ui-btn ui-btn-icon-notext ui-icon-carat-r btn-no-border'></button></div><button class='submit' data-theme='b'>" + _("Submit") + "</button></div></div>");
    o.find(".submit").on("click", function() {
        return i = {
            d: parseInt(o.find("#delay_duration").val())
        }, e && (e.value = escapeJSON(i)), t(), o.popup("close"), !1
    }), o.on("focus", "input[type='number']", function() {
        this.value = ""
    }).on("blur", "input[type='number']", function() {
        ("" === this.value || parseInt(this.value) < 0) && (this.value = "0")
    }), holdButton(o.find(".incr"), function() {
        return n(1), !1
    }), holdButton(o.find(".decr"), function() {
        return n(-1), !1
    }), $("#adjustmentOptions").remove(), o.css("max-width", "380px"), openPopup(o, {
        positionTo: "window"
    })
}

function validateWULocation(e, t) {
    controller.settings.wto && "string" == typeof controller.settings.wto.key && "" !== controller.settings.wto.key || t(!1), $.ajax({
        url: "https://api.weather.com/v2/pws/observations/hourly/7day?stationId=" + e + "&format=json&units=e&apiKey=" + controller.settings.wto.key,
        cache: !0
    }).done(function(e) {
        e && !e.errors ? t(!0) : t(!1)
    }).fail(function() {
        t(!1)
    })
}

function showEToAdjustmentOptions(e, t) {
    $(".ui-popup-active").find("[data-role='popup']").popup("close");
    var n = $.extend({}, {
        baseETo: 0,
        elevation: 600
    }, controller.settings.wto);
    isMetric && (n.baseETo = Math.round(25.4 * n.baseETo * 10) / 10, n.elevation = Math.round(n.elevation / 3.28));
    var i = $("<div data-role='popup' data-theme='a' id='adjustmentOptions'><div data-role='header' data-theme='b'><h1>" + _("Weather Adjustment Options") + "</h1></div><div class='ui-content'><p class='rain-desc center smaller'>" + _("Set the baseline potential evapotranspiration (ETo) and elevation for your location. ") + _("The ETo adjustment method will adjust the watering duration based on the difference between the baseline ETo and the current ETo.") + "</p><div class='ui-grid-a'><div class='ui-block-a'><label class='center'>" + _("Baseline ETo") + (isMetric ? " (mm" : "(in") + "/day)</label><input data-wrapper-class='pad_buttons' class='baseline-ETo' type='number' min='0' " + (isMetric ? "max='25' step='0.1'" : "max='1' step='0.01'") + " value='" + n.baseETo + "'></div><div class='ui-block-b'><label class='center'>" + _("Elevation") + (isMetric ? " (m)" : " (ft)") + "</label><input data-wrapper-class='pad_buttons' class='elevation' type='number' step='1'" + (isMetric ? "min='-400' max='9000'" : "min='-1400' max='30000'") + " value='" + n.elevation + "'></div></div><button class='detect-baseline-eto'>" + _("Detect baseline ETo") + "</button><button class='submit' data-theme='b'>" + _("Submit") + "</button></div></div>");
    i.find(".submit").on("click", function() {
        return n = {
            baseETo: parseFloat(i.find(".baseline-ETo").val()),
            elevation: parseInt(i.find(".elevation").val())
        }, isMetric && (n.baseETo = Math.round(n.baseETo / 25.4 * 100) / 100, n.elevation = Math.round(3.28 * n.elevation)), e && (e.value = escapeJSON(n)), t(), i.popup("close"), !1
    }), i.find(".detect-baseline-eto").on("click", function() {
        var e = $(".detect-baseline-eto").html();
        return showLoading(".detect-baseline-eto"), $.ajax({
            url: WEATHER_SERVER_URL + "/baselineETo?loc=" + encodeURIComponent(controller.settings.loc),
            contentType: "application/json; charset=utf-8",
            success: function(e) {
                var t = e.eto;
                isMetric && (t = Math.round(25.4 * t * 100) / 100), $(".baseline-ETo").val(t), window.alert("Detected baseline ETo for configured location is " + t + (isMetric ? "mm" : "in") + "/day")
            },
            error: function(e, t) {
                var n = "Unable to detect baseline ETo: " + (e.status ? e.responseText + "(" + e.status + ")" : t);
                window.alert(n), window.console.error(n)
            },
            complete: function() {
                $(".detect-baseline-eto").html(e)
            }
        }), !1
    }), i.on("focus", "input[type='number']", function() {
        this.value = ""
    }).on("blur", "input[type='number']", function() {
        var e = parseFloat(this.min),
            t = parseFloat(this.max);
        "" === this.value && (this.value = "0"), (this.value < e || this.value > t) && (this.value = this.value < e ? e : t)
    }), $("#adjustmentOptions").remove(), i.css("max-width", "380px"), openPopup(i, {
        positionTo: "window"
    })
}

function formatTemp(e) {
    return e = isMetric ? Math.round(5 / 9 * (e - 32) * 10) / 10 + " &#176;C" : Math.round(10 * e) / 10 + " &#176;F"
}

function formatPrecip(e) {
    return e = isMetric ? Math.round(25.4 * e * 10) / 10 + " mm" : Math.round(100 * e) / 100 + " in"
}

function formatHumidity(e) {
    return Math.round(e) + " %"
}

function formatSpeed(e) {
    return e = isMetric ? Math.round(1.6 * e * 10) / 10 + " km/h" : Math.round(10 * e) / 10 + " mph"
}

function hideWeather() {
    $("#weather").empty().parents(".info-card").addClass("noweather")
}

function finishWeatherUpdate() {
    updateWeatherBox(), $.mobile.document.trigger("weatherUpdateComplete")
}

function updateWeather() {
    var e = (new Date).getTime();
    if (weather && weather.providedLocation === controller.settings.loc && e - weather.lastUpdated < 36e4) finishWeatherUpdate();
    else {
        if (localStorage.weatherData) try {
            var t = JSON.parse(localStorage.weatherData);
            if (t.providedLocation === controller.settings.loc && e - t.lastUpdated < 36e4) return weather = t, void finishWeatherUpdate()
        } catch (e) {}
        weather = void 0, "" !== controller.settings.loc ? (showLoading("#weather"), $.ajax({
            url: WEATHER_SERVER_URL + "/weatherData?loc=" + encodeURIComponent(controller.settings.loc),
            contentType: "application/json; charset=utf-8",
            success: function(e) {
                "object" == typeof e ? (currentCoordinates = e.location, (weather = e).lastUpdated = (new Date).getTime(), e.providedLocation = controller.settings.loc, localStorage.weatherData = JSON.stringify(e), finishWeatherUpdate()) : hideWeather()
            }
        })) : hideWeather()
    }
}

function checkURLandUpdateWeather() {
    function n(e) {
        WEATHER_SERVER_URL = e ? currPrefix + e : DEFAULT_WEATHER_SERVER_URL, updateWeather()
    }
    return controller.settings.wsp ? "weather.opensprinkler.com" === controller.settings.wsp ? void n() : void n(controller.settings.wsp) : $.get(currPrefix + currIp + "/su").then(function(e) {
        var t = e.match(/value="([\w|:|/|.]+)" name=wsp/);
        n(t ? t[1] : void 0)
    })
}

function updateWeatherBox() {
    $("#weather").html("<div title='" + weather.description + "' class='wicon'><img src='http://openweathermap.org/img/w/" + weather.icon + ".png'></div><div class='inline tight'>" + formatTemp(weather.temp) + "</div><br><div class='inline location tight'>" + _("Current Weather") + "</div>" + ("object" == typeof weather.alert ? "<div><button class='tight help-icon btn-no-border ui-btn ui-icon-alert ui-btn-icon-notext ui-corner-all'></button>" + weather.alert.type + "</div>" : "")).off("click").on("click", function() {
        return changePage("#forecast"), !1
    }).parents(".info-card").removeClass("noweather")
}

function coordsToLocation(e, t, a, s) {
    s = s || e + "," + t, $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + e + "," + t + "&key=AIzaSyDaT_HTZwFojXmvYIhwWudK00vFXzMmOKc&result_type=locality|sublocality|administrative_area_level_1|country", function(e) {
        if (0 !== e.results.length) {
            e = e.results, s = e[0].formatted_address;
            var t = !1;
            for (var n in e)
                if (e.hasOwnProperty(n) && (-1 < $.inArray("locality", e[n].types) || -1 < $.inArray("sublocality", e[n].types) || -1 < $.inArray("postal_code", e[n].types) || -1 < $.inArray("street_address", e[n].types))) {
                    t = !0;
                    break
                } if (!1 !== t) {
                e = e[n].address_components;
                var i = "",
                    o = "";
                for (n in t = !1, e) e.hasOwnProperty(n) && !t && ("" === i && -1 < $.inArray("locality", e[n].types) && (i = e[n].long_name + ", " + i), "" === i && -1 < $.inArray("sublocality", e[n].types) && (i = e[n].long_name + ", " + i), -1 < $.inArray("administrative_area_level_1", e[n].types) && (i += e[n].long_name, t = !0), -1 < $.inArray("country", e[n].types) && (o = e[n].long_name));
                t || (i += o), a(i)
            } else a(s)
        } else a(s)
    })
}

function getSunTimes(e) {
    e = e || new Date(1e3 * controller.settings.devt);
    var t = SunCalc.getTimes(e, currentCoordinates[0], currentCoordinates[1]),
        n = t.sunrise,
        i = t.sunset,
        o = getTimezoneOffset();
    return n.setUTCMinutes(n.getUTCMinutes() + o), i.setUTCMinutes(i.getUTCMinutes() + o), [n = 60 * n.getUTCHours() + n.getUTCMinutes(), i = 60 * i.getUTCHours() + i.getUTCMinutes()]
}

function makeAttribution(e) {
    if ("string" != typeof e) return "";
    var t = "<div class='weatherAttribution'>";
    switch (e) {
        case "DarkSky":
            t += "<a href='https://darksky.net/poweredby/' target='_blank'>" + _("Powered by Dark Sky") + "</a>";
            break;
        case "OWM":
            t += "<a href='https://openweathermap.org/' target='_blank'>" + _("Powered by OpenWeather") + "</a>";
            break;
        case "WUnderground":
            t += "<a href='https://wunderground.com/' target='_blank'>" + _("Powered by Weather Underground") + "</a>";
            break;
        case "local":
            t += _("Powered by your Local PWS");
            break;
        case "Manual":
            t += _("Using manual watering");
            break;
        default:
            t += _("Unrecognised weather provider")
    }
    return t + "</div>"
}

function showForecast() {
    var e = $("<div data-role='page' id='forecast'><div class='ui-content' role='main'><ul data-role='listview' data-inset='true'>" + makeForecast() + "</ul>" + makeAttribution(weather.weatherProvider) + "</div></div>");
    changeHeader({
        title: _("Forecast"),
        leftBtn: {
            icon: "carat-l",
            text: _("Back"),
            class: "ui-toolbar-back-btn",
            on: goBack
        },
        rightBtn: {
            icon: "refresh",
            text: _("Refresh"),
            on: function() {
                $.mobile.loading("show"), $.mobile.document.one("weatherUpdateComplete", function() {
                    $.mobile.loading("hide")
                }), updateWeather()
            }
        }
    }), e.one("pagehide", function() {
        e.remove()
    }), e.find(".alert").on("click", function() {
        openPopup($("<div data-role='popup' data-theme='a'><div data-role='header' data-theme='b'><h1>" + weather.alert.name + "</h1></div><div class='ui-content'><span style='white-space: pre-wrap'>" + $.trim(weather.alert.message) + "</span></div></div>"))
    }), $("#forecast").remove(), $.mobile.pageContainer.append(e)
}

function makeForecast() {
    var e, t, n, i = "",
        o = controller.settings.sunrise ? controller.settings.sunrise : getSunTimes()[0],
        a = controller.settings.sunset ? controller.settings.sunset : getSunTimes()[1],
        s = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (i += "<li data-icon='false' class='center'><div>" + _("Now") + "</div><br><div title='" + weather.description + "' class='wicon'><img src='http://openweathermap.org/img/w/" + weather.icon + ".png'></div><span>" + formatTemp(weather.temp) + "</span><br><span>" + _("Sunrise") + "</span><span>: " + pad(parseInt(o / 60) % 24) + ":" + pad(o % 60) + "</span> <span>" + _("Sunset") + "</span><span>: " + pad(parseInt(a / 60) % 24) + ":" + pad(a % 60) + "</span></li>", e = 1; e < weather.forecast.length; e++) o = (n = getSunTimes(t = new Date(1e3 * weather.forecast[e].date)))[0], a = n[1], i += "<li data-icon='false' class='center'><div>" + t.toLocaleDateString() + "</div><br><div title='" + weather.forecast[e].description + "' class='wicon'><img src='http://openweathermap.org/img/w/" + weather.forecast[e].icon + ".png'></div><span>" + _(s[t.getDay()]) + "</span><br><span>" + _("Low") + "</span><span>: " + formatTemp(weather.forecast[e].temp_min) + "  </span><span>" + _("High") + "</span><span>: " + formatTemp(weather.forecast[e].temp_max) + "</span><br><span>" + _("Sunrise") + "</span><span>: " + pad(parseInt(o / 60) % 24) + ":" + pad(o % 60) + "</span> <span>" + _("Sunset") + "</span><span>: " + pad(parseInt(a / 60) % 24) + ":" + pad(a % 60) + "</span></li>";
    return i
}

function overlayMap(i) {
    $("#location-list").popup("destroy").remove(), $.mobile.loading("show"), i = i || function() {};

    function o(t) {
        function n(e) {
            clearTimeout(i), $.mobile.loading("hide"), e || showerror(_("Unable to retrieve your current location")), t(e)
        }
        var i;
        t = t || function(e) {
            e && r.get(0).contentWindow.postMessage({
                type: "currentLocation",
                payload: {
                    lat: e.coords.latitude,
                    lon: e.coords.longitude
                }
            }, "*")
        };
        try {
            i = setTimeout(function() {
                $.mobile.loading("show", {
                    html: "<div class='logo'></div><h1 style='padding-top:5px'>" + _("Attempting to retrieve your current location") + "</h1></p>",
                    textVisible: !0,
                    theme: "b"
                })
            }, 100), navigator.geolocation.getCurrentPosition(function(e) {
                clearTimeout(i), n(e)
            }, function() {
                n(!1)
            }, {
                timeout: 1e4
            })
        } catch (e) {
            n(!1)
        }
    }

    function a(e, t) {
        var n = $("#wtkey").val();
        "" !== n && $.ajax({
            url: "https://api.weather.com/v3/location/near?format=json&product=pws&apiKey=" + n + "&geocode=" + encodeURIComponent(e) + "," + encodeURIComponent(t),
            cache: !0
        }).done(function(n) {
            var i = [];
            n.location.stationId.forEach(function(e, t) {
                i.push({
                    id: e,
                    lat: n.location.latitude[t],
                    lon: n.location.longitude[t],
                    message: n.location.stationId[t]
                })
            }), 0 < i.length && (i = encodeURIComponent(JSON.stringify(i)), r.get(0).contentWindow.postMessage({
                type: "pwsData",
                payload: i
            }, "*"))
        })
    }
    var s = $("<div data-role='popup' id='location-list' data-theme='a' style='background-color:rgb(229, 227, 223);'><a href='#' data-rel='back' class='ui-btn ui-corner-all ui-shadow ui-btn-b ui-icon-delete ui-btn-icon-notext ui-btn-right'>" + _("Close") + "</a><iframe style='border:none' src='" + getAppURLPath() + "map.html' width='100%' height='100%' seamless=''></iframe></div>"),
        r = s.find("iframe"),
        e = $("#loc").val(),
        t = {
            lat: e.match(regex.gps) ? e.split(",")[0] : currentCoordinates[0],
            lon: e.match(regex.gps) ? e.split(",")[1] : currentCoordinates[1]
        },
        l = !1;
    $.mobile.window.off("message onmessage").on("message onmessage", function(e) {
        var t = e.originalEvent.data;
        if (void 0 !== t.WS) {
            var n = t.WS.split(",");
            i(1 < n.length ? n : t.WS, t.station), l = !0, s.popup("destroy").remove()
        } else !0 === t.loaded ? $.mobile.loading("hide") : "object" == typeof t.location ? a(t.location[0], t.location[1]) : !0 === t.dismissKeyboard ? document.activeElement.blur() : !0 === t.getLocation && o()
    }), r.one("load", function() {
        0 === t.lat && 0 === t.lon && o(), this.contentWindow.postMessage({
            type: "startLocation",
            payload: {
                start: t
            }
        }, "*")
    }), s.one("popupafterclose", function() {
        !1 === l && i(!1)
    }), openPopup(s, {
        beforeposition: function() {
            s.css({
                width: window.innerWidth - 36,
                height: window.innerHeight - 28
            })
        },
        x: 0,
        y: 0
    }), a(t.lat, t.lon)
}
var rebootReasons = {
        0: _("None"),
        1: _("Factory Reset"),
        2: _("Reset Button"),
        3: _("WiFi Change"),
        4: _("Web Request"),
        5: _("Web Request"),
        6: _("WiFi Configure"),
        7: _("Firmware Update"),
        8: _("Weather Failure"),
        9: _("Network Failure"),
        10: _("Clock Update"),
        99: _("Power On")
    },
    weatherErrors = {
        "-4": _("Empty Response"),
        "-3": _("Timed Out"),
        "-2": _("Connection Failed"),
        "-1": _("No Response"),
        0: _("Success"),
        1: _("Weather Data Error"),
        10: _("Building Weather History"),
        11: _("Weather Provider Respnse Incomplete"),
        12: _("Weather Provider Request Failed"),
        2: _("Location Error"),
        20: _("Location Request Error"),
        21: _("Location Not Found"),
        22: _("Invalid Location Format"),
        3: _("PWS Error"),
        30: _("Invalid WUnderground PWS"),
        31: _("Invalid WUnderground Key"),
        32: _("WUnderground Authentication Error"),
        33: _("Unsupported WUnderground Method"),
        34: _("No WUnderground PWS Provided"),
        4: _("Adjustment Method Error"),
        40: _("Unsupported Adjustment Method"),
        41: _("No Adjustment Method Provided"),
        5: _("Adjustment Options Error"),
        50: _("Corrupt Adjustment Options"),
        51: _("Missing Adjustment Option"),
        99: _("Unexpected Error")
    };

function getRebootReason(e) {
    return e in rebootReasons ? rebootReasons[e] : _("Unrecognised") + " (" + e + ")"
}

function getWeatherError(e) {
    var t = Math.floor(e / 10);
    return e in weatherErrors ? weatherErrors[e] : e <= 59 && 10 <= e && t in weatherErrors ? weatherErrors[t] : _("Unrecognised") + " (" + e + ")"
}

function getWeatherStatus(e) {
    return e < 0 ? "<font class='debugWUError'>" + _("Offline") + "</font>" : 0 < e ? "<font class='debugWUError'>" + _("Error") + "</font>" : "<font class='debugWUOK'>" + _("Online") + "</font>"
}

function getWiFiRating(e) {
    return _(e < -80 ? "Unuseable" : e < -70 ? "Poor" : e < -60 ? "Fair" : e < -50 ? "Good" : "Excellent")
}

function debugWU() {
    var e = "<div data-role='popup' id='debugWU' class='ui-content ui-page-theme-a'>";
    return e += "<div class='debugWUHeading'>System Status</div><table class='debugWUTable'>" + ("number" == typeof controller.settings.lupt ? "<tr><td>" + _("Last Reboot") + "</td><td>" + (controller.settings.lupt < 1e3 ? "--" : dateToString(new Date(1e3 * controller.settings.lupt), null, 2)) + "</td></tr>" : "") + ("number" == typeof controller.settings.lrbtc ? "<tr><td>" + _("Reboot Reason") + "</td><td>" + getRebootReason(controller.settings.lrbtc) + "</td></tr>" : "") + ("number" == typeof controller.settings.RSSI ? "<tr><td>" + _("WiFi Strength") + "</td><td>" + getWiFiRating(controller.settings.RSSI) + "</td></tr>" : "") + ("number" == typeof controller.settings.wterr ? "<tr><td>" + _("Weather Service") + "</td><td>" + getWeatherStatus(controller.settings.wterr) + "</td></tr>" : "") + "</table><div class='debugWUHeading'>Watering Level</div><table class='debugWUTable'>" + (void 0 !== controller.options.uwt ? "<tr><td>" + _("Method") + "</td><td>" + getAdjustmentMethod(controller.options.uwt).name + "</td></tr>" : "") + (void 0 !== controller.options.wl ? "<tr><td>" + _("Watering Level") + "</td><td>" + controller.options.wl + " %</td></tr>" : "") + ("number" == typeof controller.settings.lswc ? "<tr><td>" + _("Last Updated") + "</td><td>" + (0 === controller.settings.lswc ? _("Never") : humaniseDuration(1e3 * controller.settings.devt, 1e3 * controller.settings.lswc)) + "</td></tr>" : "") + "</table><div class='debugWUHeading'>Weather Service Details</div><div class='debugWUScrollable'><table class='debugWUTable'>", "object" == typeof controller.settings.wtdata && 0 < Object.keys(controller.settings.wtdata).length && (e += (void 0 !== controller.settings.wtdata.h ? "<tr><td>" + _("Mean Humidity") + "</td><td>" + formatHumidity(controller.settings.wtdata.h) + "</td></tr>" : "") + (void 0 !== controller.settings.wtdata.t ? "<tr><td>" + _("Mean Temp") + "</td><td>" + formatTemp(controller.settings.wtdata.t) + "</td></tr>" : "") + (void 0 !== controller.settings.wtdata.p ? "<tr><td>" + _("Total Rain") + "</td><td>" + formatPrecip(controller.settings.wtdata.p) + "</td></tr>" : "") + (void 0 !== controller.settings.wtdata.eto ? "<tr><td>" + _("ETo") + "</td><td>" + formatPrecip(controller.settings.wtdata.eto) + "</td></tr>" : "") + (void 0 !== controller.settings.wtdata.radiation ? "<tr><td>" + _("Mean Radiation") + "</td><td>" + controller.settings.wtdata.radiation + " kWh/m2</td></tr>" : "") + (void 0 !== controller.settings.wtdata.minT ? "<tr><td>" + _("Min Temp") + "</td><td>" + formatTemp(controller.settings.wtdata.minT) + "</td></tr>" : "") + (void 0 !== controller.settings.wtdata.maxT ? "<tr><td>" + _("Max Temp") + "</td><td>" + formatTemp(controller.settings.wtdata.maxT) + "</td></tr>" : "") + (void 0 !== controller.settings.wtdata.minH ? "<tr><td>" + _("Min Humidity") + "</td><td>" + formatHumidity(controller.settings.wtdata.minH) + "</td></tr>" : "") + (void 0 !== controller.settings.wtdata.maxH ? "<tr><td>" + _("Max Humidity") + "</td><td>" + formatHumidity(controller.settings.wtdata.maxH) + "</td></tr>" : "") + (void 0 !== controller.settings.wtdata.wind ? "<tr><td>" + _("Mean Wind") + "</td><td>" + formatSpeed(controller.settings.wtdata.wind) + "</td></tr>" : "")), e += "number" == typeof controller.settings.lwc ? "<tr><td>" + _("Last Request") + "</td><td>" + dateToString(new Date(1e3 * controller.settings.lwc), null, 2) + "</td></tr>" : "", e += "number" == typeof controller.settings.wterr ? "<tr><td>" + _("Last Response") + "</td><td>" + getWeatherError(controller.settings.wterr) + "</td></tr>" : "", e += "</table></div>", "string" == typeof controller.settings.wtdata.weatherProvider && (e += "<hr>", e += makeAttribution(controller.settings.wtdata.weatherProvider)), e += "</div>", openPopup($(e)), !1
}

function showRainDelay() {
    $(".ui-popup-active").find("[data-role='popup']").popup("close"), showDurationBox({
        title: _("Change Rain Delay"),
        callback: raindelay,
        label: _("Duration"),
        maximum: 31536e3,
        granularity: 2,
        preventCompression: !0,
        incrementalUpdate: !1,
        updateOnChange: !1,
        helptext: _("Enable manual rain delay by entering a value into the input below. To turn off a currently enabled rain delay use a value of 0.")
    })
}

function getAdjustmentMethod(e) {
    var t = [{
        name: _("Manual"),
        id: 0
    }, {
        name: "Zimmerman",
        id: 1
    }, {
        name: _("Auto Rain Delay"),
        id: 2,
        minVersion: 216
    }, {
        name: "ETo",
        id: 3,
        minVersion: 216
    }];
    return void 0 === e ? t : t[-129 & e]
}

function getCurrentAdjustmentMethodId() {
    return -129 & controller.options.uwt
}

function getRestriction(e) {
    return [{
        isCurrent: 0,
        name: _("None")
    }, {
        isCurrent: !!(controller.options.uwt >> 7 & 1),
        name: _("California Restriction")
    }][e]
}

function setRestriction(e, t) {
    return t = t || -129 & controller.options.uwt, 1 === e && (t |= 128), t
}

function testAPIKey(e, t) {
    $.ajax({
        url: "https://api.weather.com/v2/pws/observations/current?stationId=KMAHANOV10&format=json&units=m&apiKey=" + e,
        cache: !0
    }).done(function(e) {
        e.errors ? t(!1) : t(!0)
    }).fail(function() {
        t(!1)
    })
}

function bindPanel() {
    function n() {
        return controller && controller.settings && controller.settings.en && 1 === controller.settings.en ? _("Disable") : _("Enable")
    }
    var t, e = $("#sprinklers-settings");

    function i() {
        var e = controller && controller.settings && controller.settings.en && 1 === controller.settings.en ? _("Disable") : _("Enable");
        t.find(".toggleOperation span:first").html(e).attr("data-translate", e)
    }
    e.enhanceWithin().panel().removeClass("hidden").panel("option", "classes.modal", "needsclick ui-panel-dismiss"), e.find("a[href='#site-control']").on("click", function() {
        return changePage("#site-control"), !1
    }), e.find("a[href='#about']").on("click", function() {
        return changePage("#about"), !1
    }), e.find(".cloud-login").on("click", function() {
        return requestCloudAuth(), !1
    }), e.find("a[href='#debugWU']").on("click", debugWU), e.find("a[href='#localization']").on("click", languageSelect), e.find(".export_config").on("click", function() {
        return "object" != typeof controller.stations.stn_spe || "object" == typeof controller.special || controller.stations.stn_spe.every(function(e) {
            return 0 === e
        }) ? getExportMethod() : updateControllerStationSpecial(getExportMethod), !1
    }), e.find(".import_config").on("click", function() {
        return storage.get("backup", function(e) {
            getImportMethod(e.backup)
        }), !1
    }), e.find(".toggleOperation").on("click", function() {
        var e = $(this),
            t = 1 - controller.settings.en;
        return areYouSure(_("Are you sure you want to") + " " + n().toLowerCase() + " " + _("operation?"), "", function() {
            sendToOS("/cv?pw=&en=" + t).done(function() {
                $.when(updateControllerSettings(), updateControllerStatus()).done(function() {
                    checkStatus(), e.find("span:first").html(n()).attr("data-translate", n())
                })
            })
        }), !1
    }).find("span:first").html(n()).attr("data-translate", n()), e.find(".reboot-os").on("click", function() {
        return areYouSure(_("Are you sure you want to reboot OpenSprinkler?"), "", function() {
            $.mobile.loading("show"), sendToOS("/cv?pw=&rbt=1").done(function() {
                $.mobile.loading("hide"), showerror(_("OpenSprinkler is rebooting now"))
            })
        }), !1
    }), e.find(".changePassword > a").on("click", changePassword), e.find("#downgradeui").on("click", function() {
        return areYouSure(_("Are you sure you want to downgrade the UI?"), "", function() {
            var e = "http://rayshobby.net/scripts/java/svc" + getOSVersion();
            sendToOS("/cu?jsp=" + encodeURIComponent(e) + "&pw=").done(function() {
                storage.remove(["sites", "current_site", "lang", "provider", "wapikey", "runonce"]), location.reload()
            })
        }), !1
    }), e.find("#logout").on("click", function() {
        return logout(), !1
    }), t = $("#sprinklers-settings"), $("html").on("datarefresh", i), openPanel = function() {
        var e = $(".ui-page-active").attr("id");
        "start" !== e && "loadingPage" !== e && isControllerConnected() && 1 === $(".ui-page-active").length && (i(), t.panel("open"))
    }
}

function showOptions(e) {
    function t(e, t, n) {
        return "<div class='ui-field-contain'><fieldset data-role='controlgroup' class='ui-mini center sensor-options' data-type='horizontal'><legend class='left'>" + _("Sensor") + (n ? " " + n + " " : " ") + _("Type") + "</legend><input class='noselect' type='radio' name='o" + e + "' id='o" + e + "-none' value='0'" + (0 === t ? " checked='checked'" : "") + "><label for='o" + e + "-none'>" + _("None") + "</label><input class='noselect' type='radio' name='o" + e + "' id='o" + e + "-rain' value='1'" + (1 === t ? " checked='checked'" : "") + "><label for='o" + e + "-rain'>" + _("Rain") + "</label>" + (52 === e ? "" : "<input class='noselect' type='radio' name='o" + e + "' id='o" + e + "-flow' value='2'" + (2 === t ? " checked='checked'" : "") + "><label for='o" + e + "-flow'>" + _("Flow") + "</label>") + (checkOSVersion(219) ? "<input class='noselect' type='radio' name='o" + e + "' id='o" + e + "-soil' value='3'" + (3 === t ? " checked='checked'" : "") + "><label for='o" + e + "-soil'>" + _("Soil") + "</label>" : "") + (checkOSVersion(217) ? "<input class='noselect' type='radio' name='o" + e + "' id='o" + e + "-program' value='240'" + (240 === t ? " checked='checked'" : "") + "><label for='o" + e + "-program'>" + _("Program Switch") + "</label>" : "") + "</fieldset></div>"
    }

    function n() {
        var r, l = {},
            c = !1,
            u = isOSPi(),
            e = p.eq(2);
        if (e.prop("disabled", !0), d.find(".submit").removeClass("hasChanges"), d.find("#os-options-list").find(":input,button").filter(":not(.noselect)").each(function() {
                var e, t = $(this),
                    n = t.attr("id"),
                    i = t.val();
                if (!n || !i && "" !== i) return !0;
                switch (n) {
                    case "o1":
                        var o = i.split(":");
                        o[0] = parseInt(o[0], 10), o[1] = parseInt(o[1], 10), o[1] = (o[1] / 15 >> 0) / 4, o[0] = o[0] + (0 <= o[0] ? o[1] : -o[1]), i = 4 * (o[0] + 12) >> 0;
                        break;
                    case "datetime":
                        var a = new Date(1e3 * i);
                        return l.tyy = a.getUTCFullYear(), l.tmm = a.getUTCMonth(), l.tdd = a.getUTCDate(), l.thh = a.getUTCHours(), l.tmi = a.getUTCMinutes(), l.ttt = Math.round(a.getTime() / 1e3), !0;
                    case "ip_addr":
                        return "0.0.0.0" === (e = i.split(".")) ? (showerror(_("A valid IP address is required when DHCP is not used")), !(c = !0)) : (l.o4 = e[0], l.o5 = e[1], l.o6 = e[2], l.o7 = e[3], !0);
                    case "subnet":
                        return "0.0.0.0" === (e = i.split(".")) ? (showerror(_("A valid subnet address is required when DHCP is not used")), !(c = !0)) : (l.o58 = e[0], l.o59 = e[1], l.o60 = e[2], l.o61 = e[3], !0);
                    case "gateway":
                        return "0.0.0.0" === (e = i.split(".")) ? (showerror(_("A valid gateway address is required when DHCP is not used")), !(c = !0)) : (l.o8 = e[0], l.o9 = e[1], l.o10 = e[2], l.o11 = e[3], !0);
                    case "dns":
                        return "0.0.0.0" === (e = i.split(".")) ? (showerror(_("A valid DNS address is required when DHCP is not used")), !(c = !0)) : (l.o44 = e[0], l.o45 = e[1], l.o46 = e[2], l.o47 = e[3], !0);
                    case "ntp_addr":
                        return e = i.split("."), l.o32 = e[0], l.o33 = e[1], l.o34 = e[2], l.o35 = e[3], !0;
                    case "wtkey":
                        return !0;
                    case "wto":
                        if (i = escapeJSON($.extend({}, unescapeJSON(i), {
                                key: d.find("#wtkey").val()
                            })), escapeJSON(controller.settings.wto) === i) return !0;
                        break;
                    case "isMetric":
                        return isMetric = t.is(":checked"), storage.set({
                            isMetric: isMetric
                        }), !0;
                    case "o12":
                        return u || (l.o12 = 255 & i, l.o13 = i >> 8 & 255), !0;
                    case "o31":
                        if (3 === parseInt(i) && !unescapeJSON($("#wto")[0].value).baseETo) return showerror(_("You must specify a baseline ETo adjustment method option to use the ET adjustment method.")), !(c = !0);
                        var s = d.find("#weatherRestriction");
                        s.length && (i = setRestriction(parseInt(s.val()), i));
                        break;
                    case "o18":
                    case "o37":
                        parseInt(i) > 8 * (parseInt(d.find("#o15").val()) + 1) && (i = 0);
                        break;
                    case "o41":
                        return "gallon" === o.find("#o41-units").val() ? l *= 3.78541 : "milliliter" === o.find("#o41-units").val() && (l /= 1e3), e.o41 = 100 * l & 255, e.o42 = 100 * l >> 8 & 255, !0;
                    case "o2":
                    case "o3":
                    case "o14":
                    case "o16":
                    case "o21":
                    case "o22":
                    case "o25":
                    case "o36":
                    case "o48":
                    case "o50":
                    case "o51":
                    case "o52":
                    case "o53":
                        if (i = t.is(":checked") ? 1 : 0, !checkOSVersion(219) && !i) return !0
                }
                u && (n = "loc" === n || "lg" === n ? "o" + n : (r = /\d+/.exec(n), "o" + Object.keys(keyIndex).find(function(e) {
                    return keyIndex[e] === r
                }))), !0 === checkOSVersion(208) && "loc" === n && (i = i.replace(/\s/g, "_")), l[n] = i
            }), c) return e.prop("disabled", !1), void d.find(".submit").addClass("hasChanges");
        void 0 !== controller.options.fpr0 && (void 0 !== controller.options.urs ? l.o21 = d.find("input[name='o21'][type='radio']:checked").val() : (void 0 !== controller.options.sn1t && (l.o50 = d.find("input[name='o50'][type='radio']:checked").val()), void 0 !== controller.options.sn2t && (l.o52 = d.find("input[name='o52'][type='radio']:checked").val()))), l = transformKeys(l), $.mobile.loading("show"), sendToOS("/co?pw=&" + $.param(l)).done(function() {
            $.mobile.document.one("pageshow", function() {
                showerror(_("Settings have been saved"))
            }), goBack(), updateController(updateWeather)
        }).fail(function() {
            e.prop("disabled", !1), d.find(".submit").addClass("hasChanges")
        })
    }
    var i, o, a, s = "",
        d = $("<div data-role='page' id='os-options'><div class='ui-content' role='main'><div data-role='collapsibleset' id='os-options-list'></div><a class='submit preventBack' style='display:none'></a></div></div>"),
        p = changeHeader({
            title: _("Edit Options"),
            leftBtn: {
                icon: "carat-l",
                text: _("Back"),
                class: "ui-toolbar-back-btn",
                on: checkChangesBeforeBack
            },
            rightBtn: {
                icon: "check",
                text: _("Submit"),
                class: "submit",
                on: n
            }
        });
    if (d.find(".submit").on("click", n), s = "<fieldset data-role='collapsible'" + ("string" != typeof e || "system" === e ? " data-collapsed='false'" : "") + "><legend>" + _("System") + "</legend>", void 0 !== controller.options.ntp && (s += "<div class='ui-field-contain datetime-input'><label for='datetime'>" + _("Device Time") + "</label><button " + (controller.options.ntp ? "disabled " : "") + "data-mini='true' id='datetime' value='" + (controller.settings.devt + 60 * new Date(1e3 * controller.settings.devt).getTimezoneOffset()) + "'>" + dateToString(new Date(1e3 * controller.settings.devt)).slice(0, -3) + "</button></div>"), !isOSPi() && void 0 !== controller.options.tz) {
        for (i = ["-12:00", "-11:30", "-11:00", "-10:00", "-09:30", "-09:00", "-08:30", "-08:00", "-07:00", "-06:00", "-05:00", "-04:30", "-04:00", "-03:30", "-03:00", "-02:30", "-02:00", "+00:00", "+01:00", "+02:00", "+03:00", "+03:30", "+04:00", "+04:30", "+05:00", "+05:30", "+05:45", "+06:00", "+06:30", "+07:00", "+08:00", "+08:45", "+09:00", "+09:30", "+10:00", "+10:30", "+11:00", "+11:30", "+12:00", "+12:45", "+13:00", "+13:45", "+14:00"], o = (0 <= (o = controller.options.tz - 48) ? "+" : "-") + pad(Math.abs(o) / 4 >> 0) + ":" + (Math.abs(o) % 4 * 15 / 10 >> 0) + Math.abs(o) % 4 * 15 % 10, s += "<div class='ui-field-contain'><label for='o1' class='select'>" + _("Timezone") + "</label><select " + (checkOSVersion(210) && "object" == typeof weather ? "disabled='disabled' " : "") + "data-mini='true' id='o1'>", a = 0; a < i.length; a++) s += "<option " + (i[a] === o ? "selected" : "") + " value='" + i[a] + "'>" + i[a] + "</option>";
        s += "</select></div>"
    }
    if (s += "<div class='ui-field-contain'><label for='loc'>" + _("Location") + "</label><button data-mini='true' id='loc' value='" + ("''" === controller.settings.loc.trim() ? _("Not specified") : controller.settings.loc) + "'><span>" + controller.settings.loc + "</span><a class='ui-btn btn-no-border ui-btn-icon-notext ui-icon-delete ui-btn-corner-all clear-loc'></a></button></div>", void 0 !== controller.options.lg && (s += "<label for='o36'><input data-mini='true' id='o36' type='checkbox' " + (1 === controller.options.lg ? "checked='checked'" : "") + ">" + _("Enable Logging") + "</label>"), s += "<label for='isMetric'><input data-mini='true' id='isMetric' type='checkbox' " + (isMetric ? "checked='checked'" : "") + ">" + _("Use Metric") + "</label>", s += "</fieldset><fieldset data-role='collapsible'" + ("string" == typeof e && "master" === e ? " data-collapsed='false'" : "") + "><legend>" + _("Configure Master") + "</legend>", void 0 !== controller.options.mas) {
        for (s += "<div class='ui-field-contain ui-field-no-border'><label for='o18' class='select'>" + _("Master Station") + " " + (void 0 !== controller.options.mas2 ? "1" : "") + "</label><select data-mini='true' id='o18'><option value='0'>" + _("None") + "</option>", a = 0; a < controller.stations.snames.length && (s += "<option " + (1 === isStationMaster(a) ? "selected" : "") + " value='" + (a + 1) + "'>" + controller.stations.snames[a] + "</option>", checkOSVersion(214) || 7 !== a); a++);
        s += "</select></div>", void 0 !== controller.options.mton && (s += "<div " + (0 === controller.options.mas ? "style='display:none' " : "") + "class='ui-field-no-border ui-field-contain duration-field'><label for='o19'>" + _("Master On Adjustment") + "</label><button data-mini='true' id='o19' value='" + controller.options.mton + "'>" + controller.options.mton + "s</button></div>"), void 0 !== controller.options.mtof && (s += "<div " + (0 === controller.options.mas ? "style='display:none' " : "") + "class='ui-field-no-border ui-field-contain duration-field'><label for='o20'>" + _("Master Off Adjustment") + "</label><button data-mini='true' id='o20' value='" + controller.options.mtof + "'>" + controller.options.mtof + "s</button></div>")
    }
    if (void 0 !== controller.options.mas2) {
        for (s += "<hr style='width:95%' class='content-divider'>", s += "<div class='ui-field-contain ui-field-no-border'><label for='o37' class='select'>" + _("Master Station") + " 2</label><select data-mini='true' id='o37'><option value='0'>" + _("None") + "</option>", a = 0; a < controller.stations.snames.length && (s += "<option " + (2 === isStationMaster(a) ? "selected" : "") + " value='" + (a + 1) + "'>" + controller.stations.snames[a] + "</option>", checkOSVersion(214) || 7 !== a); a++);
        s += "</select></div>", void 0 !== controller.options.mton2 && (s += "<div " + (0 === controller.options.mas2 ? "style='display:none' " : "") + "class='ui-field-no-border ui-field-contain duration-field'><label for='o38'>" + _("Master On Delay") + "</label><button data-mini='true' id='o38' value='" + controller.options.mton2 + "'>" + controller.options.mton2 + "s</button></div>"), void 0 !== controller.options.mtof2 && (s += "<div " + (0 === controller.options.mas2 ? "style='display:none' " : "") + "class='ui-field-no-border ui-field-contain duration-field'><label for='o39'>" + _("Master Off Delay") + "</label><button data-mini='true' id='o39' value='" + controller.options.mtof2 + "'>" + controller.options.mtof2 + "s</button></div>")
    }
    if (s += "</fieldset><fieldset data-role='collapsible'" + ("string" == typeof e && "station" === e ? " data-collapsed='false'" : "") + "><legend>" + _("Station Handling") + "</legend>", void 0 !== controller.options.ext) {
        for (s += "<div class='ui-field-contain'><label for='o15' class='select'>" + _("Number of Stations") + ("number" == typeof controller.options.dexp && controller.options.dexp < 255 && 0 <= controller.options.dexp ? " <span class='nobr'>(" + (8 * controller.options.dexp + 8) + " " + _("available") + ")</span>" : "") + "</label><select data-mini='true' id='o15'>", a = 0; a <= (controller.options.mexp || 5); a++) s += "<option " + (controller.options.ext === a ? "selected" : "") + " value='" + a + "'>" + (8 * a + 8) + " " + _("stations") + "</option>";
        s += "</select></div>"
    }
    if (void 0 !== controller.options.sdt && (s += "<div class='ui-field-contain duration-field'><label for='o17'>" + _("Station Delay") + "</label><button data-mini='true' id='o17' value='" + controller.options.sdt + "'>" + dhms2str(sec2dhms(controller.options.sdt)) + "</button></div>"), s += "<label for='showDisabled'><input data-mini='true' class='noselect' id='showDisabled' type='checkbox' " + ("true" === localStorage.showDisabled ? "checked='checked'" : "") + ">" + _("Show Disabled") + " " + _("(Changes Auto-Saved)") + "</label>", void 0 !== controller.options.seq && (s += "<label for='o16'><input data-mini='true' id='o16' type='checkbox' " + (1 === controller.options.seq ? "checked='checked'" : "") + ">" + _("Sequential") + "</label>"), s += "</fieldset><fieldset data-role='collapsible'" + ("string" == typeof e && "weather" === e ? " data-collapsed='false'" : "") + "><legend>" + _("Weather and Sensors") + "</legend>", void 0 !== controller.options.uwt) {
        for (s += "<div class='ui-field-contain'><label for='o31' class='select'>" + _("Weather Adjustment Method") + "<button data-helptext='" + _("Weather adjustment uses OpenWeatherMaps data in conjunction with the selected method to adjust the watering percentage.") + "' class='help-icon btn-no-border ui-btn ui-icon-info ui-btn-icon-notext'></button></label><select data-mini='true' id='o31'>", a = 0; a < getAdjustmentMethod().length; a++) {
            var r = getAdjustmentMethod()[a];
            r.minVersion && !checkOSVersion(r.minVersion) || (s += "<option " + (r.id === getCurrentAdjustmentMethodId() ? "selected" : "") + " value='" + a + "'>" + r.name + "</option>")
        }
        if (s += "</select></div>", "object" == typeof controller.settings.wto && (s += "<div class='ui-field-contain" + (0 === getCurrentAdjustmentMethodId() ? " hidden" : "") + "'><label for='wto'>" + _("Adjustment Method Options") + "</label><button data-mini='true' id='wto' value='" + escapeJSON(controller.settings.wto) + "'>" + _("Tap to Configure") + "</button></div>"), checkOSVersion(214)) {
            for (s += "<div class='ui-field-contain'><label for='weatherRestriction' class='select'>" + _("Weather-Based Restrictions") + "<button data-helptext='" + _("Prevents watering when the selected restriction is met.") + "' class='help-icon btn-no-border ui-btn ui-icon-info ui-btn-icon-notext'></button></label><select data-mini='true' class='noselect' id='weatherRestriction'>", a = 0; a < 2; a++) {
                var l = getRestriction(a);
                s += "<option " + (!0 === l.isCurrent ? "selected" : "") + " value='" + a + "'>" + l.name + "</option>"
            }
            s += "</select></div>"
        }
    }
    if (void 0 !== controller.options.wl && (s += "<div class='ui-field-contain duration-field'><label for='o23'>" + _("% Watering") + "<button data-helptext='" + _("The watering percentage scales station run times by the set value. When weather adjustment is used the watering percentage is automatically adjusted.") + "' class='help-icon btn-no-border ui-btn ui-icon-info ui-btn-icon-notext'></button></label><button " + (controller.options.uwt && 0 < getCurrentAdjustmentMethodId() ? "disabled='disabled' " : "") + "data-mini='true' id='o23' value='" + controller.options.wl + "'>" + controller.options.wl + "%</button></div>"), void 0 === controller.options.urs && void 0 === controller.options.sn1t || (void 0 !== controller.options.fpr0 ? s += void 0 !== controller.options.urs ? t(keyIndex.urs, controller.options.urs) : void 0 !== controller.options.sn1t ? t(keyIndex.sn1t, controller.options.sn1t, 1) : "" : s += "<label for='o21'><input data-mini='true' id='o21' type='checkbox' " + (1 === controller.options.urs ? "checked='checked'" : "") + ">" + _("Use Rain Sensor") + "</label>"), void 0 !== controller.options.rso && (s += "<label for='o22'><input " + (1 === controller.options.urs || 240 === controller.options.urs ? "" : "data-wrapper-class='hidden' ") + "data-mini='true' id='o22' type='checkbox' " + (1 === controller.options.rso ? "checked='checked'" : "") + ">" + _("Normally Open") + "</label>"), void 0 !== controller.options.sn1o && (s += "<label for='o51'><input " + (1 === controller.options.sn1t || 3 === controller.options.sn1t || 240 === controller.options.sn1t ? "" : "data-wrapper-class='hidden' ") + "data-mini='true' id='o51' type='checkbox' " + (1 === controller.options.sn1o ? "checked='checked'" : "") + ">" + _("Normally Open") + "</label>"), void 0 !== controller.options.fpr0 && (s += "<div class='ui-field-contain" + (2 === controller.options.urs || 2 === controller.options.sn1t ? "" : " hidden") + "'><label for='o41'>" + _("Flow Pulse Rate") + "</label><table><tr style='width:100%;vertical-align: top;'><td style='width:100%'><div class='ui-input-text controlgroup-textinput ui-btn ui-body-inherit ui-corner-all ui-mini ui-shadow-inset ui-input-has-clear'><input data-role='none' data-mini='true' type='number' pattern='^[-+]?[0-9]*.?[0-9]*$' id='o41' value='" + (256 * controller.options.fpr1 + controller.options.fpr0) / 100 + "'></div></td><td class='tight-select'><select id='o41-units' class='noselect' data-mini='true'><option selected='selected' value='liter'>L/pulse</option><option value='milliliter'>mL/pulse</option><option value='gallon'>Gal/pulse</option></select></td></tr></table></div>"), void 0 !== controller.options.sn1on && (s += "<div class='" + (1 === controller.options.sn1t || 3 === controller.options.sn1t ? "" : "hidden ") + "ui-field-no-border ui-field-contain duration-field'><label for='o54'>" + _("Sensor 1 Delayed On Time") + "</label><button data-mini='true' id='o54' value='" + controller.options.sn1on + "'>" + controller.options.sn1on + "m</button></div>"), void 0 !== controller.options.sn1of && (s += "<div class='" + (1 === controller.options.sn1t || 3 === controller.options.sn1t ? "" : "hidden ") + "ui-field-no-border ui-field-contain duration-field'><label for='o55'>" + _("Sensor 1 Delayed Off Time") + "</label><button data-mini='true' id='o55' value='" + controller.options.sn1of + "'>" + controller.options.sn1of + "m</button></div>"), checkOSVersion(217) && (s += "<label id='prgswitch' class='center smaller" + (240 === controller.options.urs || 240 === controller.options.sn1t || 240 === controller.options.sn2t ? "" : " hidden") + "'>" + _("When using program switch, a switch is connected to the sensor port to trigger Program 1 every time the switch is pressed for at least 1 second.") + "</label>"), void 0 !== controller.options.sn2t && checkOSVersion(219) && (s += t(keyIndex.sn2t, controller.options.sn2t, 2)), void 0 !== controller.options.sn2o && (s += "<label for='o53'><input " + (1 === controller.options.sn2t || 3 === controller.options.sn2t || 240 === controller.options.sn2t ? "" : "data-wrapper-class='hidden' ") + "data-mini='true' id='o53' type='checkbox' " + (1 === controller.options.sn2o ? "checked='checked'" : "") + ">" + _("Normally Open") + "</label>"), void 0 !== controller.options.sn2on && (s += "<div class='" + (1 === controller.options.sn2t || 3 === controller.options.sn2t ? "" : "hidden ") + "ui-field-no-border ui-field-contain duration-field'><label for='o56'>" + _("Sensor 2 Delayed On Time") + "</label><button data-mini='true' id='o56' value='" + controller.options.sn2on + "'>" + controller.options.sn2on + "m</button></div>"), void 0 !== controller.options.sn2of && (s += "<div class='" + (1 === controller.options.sn2t || 3 === controller.options.sn2t ? "" : "hidden ") + "ui-field-no-border ui-field-contain duration-field'><label for='o57'>" + _("Sensor 2 Delayed Off Time") + "</label><button data-mini='true' id='o57' value='" + controller.options.sn2of + "'>" + controller.options.sn2of + "m</button></div>"), void 0 !== controller.options.sn2t && (s += "<label id='prgswitch-2' class='center smaller" + (240 === controller.options.urs || 240 === controller.options.sn1t || 240 === controller.options.sn2t ? "" : " hidden") + "'>" + _("When using program switch, a switch is connected to the sensor port to trigger Program 2 every time the switch is pressed for at least 1 second.") + "</label>"), void 0 !== controller.settings.ifkey && (s += "</fieldset><fieldset data-role='collapsible'" + ("string" == typeof e && "integrations" === e ? " data-collapsed='false'" : "") + "><legend>" + _("Integrations") + "</legend>", s += "<div class='ui-field-contain'><label for='ifkey'>" + _("IFTTT Key") + "<button data-helptext='" + _("To enable IFTTT, a Maker channel key is required which can be obtained from https://ifttt.com") + "' class='help-icon btn-no-border ui-btn ui-icon-info ui-btn-icon-notext'></button></label><input autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' data-mini='true' type='text' id='ifkey' value='" + controller.settings.ifkey + "'></div>", s += "<div class='ui-field-contain'><label for='o49'>" + _("IFTTT Events") + "<button data-helptext='" + _("Select which events to send to IFTTT for use in recipes.") + "' class='help-icon btn-no-border ui-btn ui-icon-info ui-btn-icon-notext'></button></label><button data-mini='true' id='o49' value='" + controller.options.ife + "'>Configure Events</button></div>"), s += "</fieldset><fieldset class='full-width-slider' data-role='collapsible'" + ("string" == typeof e && "lcd" === e ? " data-collapsed='false'" : "") + "><legend>" + _("LCD Screen") + "</legend>", void 0 !== controller.options.con && (s += "<div class='ui-field-contain'><label for='o27'>" + _("Contrast") + "</label><input type='range' id='o27' min='0' max='255' step='10' data-highlight='true' value='" + controller.options.con + "'></div>"), void 0 !== controller.options.lit && (s += "<div class='ui-field-contain'><label for='o28'>" + _("Brightness") + "</label><input type='range' id='o28' min='0' max='255' step='10' data-highlight='true' value='" + controller.options.lit + "'></div>"), void 0 !== controller.options.dim && (s += "<div class='ui-field-contain'><label for='o29'>" + _("Idle Brightness") + "</label><input type='range' id='o29' min='0' max='255' step='10' data-highlight='true' value='" + controller.options.dim + "'></div>"), s += "</fieldset><fieldset data-role='collapsible' data-theme='b'" + ("string" == typeof e && "advanced" === e ? " data-collapsed='false'" : "") + "><legend>" + _("Advanced") + "</legend>", checkOSVersion(219) && void 0 !== controller.options.uwt && "object" == typeof controller.settings.wto && (s += "<div class='ui-field-contain'><label for='wtkey'>" + _("Wunderground Key").replace("Wunderground", "Wunder&shy;ground") + "<button data-helptext='" + _("We use OpenWeatherMap normally however with a user provided API key the weather source will switch to Weather Underground.") + "' class='help-icon btn-no-border ui-btn ui-icon-info ui-btn-icon-notext'></button></label><table><tr style='width:100%;vertical-align: top;'><td style='width:100%'><div class='" + (controller.settings.wto.key && "" !== controller.settings.wto.key ? "green " : "") + "ui-input-text controlgroup-textinput ui-btn ui-body-inherit ui-corner-all ui-mini ui-shadow-inset ui-input-has-clear'><input data-role='none' data-mini='true' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' type='text' id='wtkey' value='" + (controller.settings.wto.key || "") + "'><a href='#' tabindex='-1' aria-hidden='true' data-helptext='" + _("An invalid API key has been detected.") + "' class='hidden help-icon ui-input-clear ui-btn ui-icon-alert ui-btn-icon-notext ui-corner-all'></a></div></td><td><button class='noselect' data-mini='true' id='verify-api'>" + _("Verify") + "</button></td></tr></table></div>"), void 0 !== controller.options.hp0 && (s += "<div class='ui-field-contain'><label for='o12'>" + _("HTTP Port (restart required)") + "</label><input data-mini='true' type='number' pattern='[0-9]*' id='o12' value='" + (256 * controller.options.hp1 + controller.options.hp0) + "'></div>"), void 0 !== controller.options.devid && (s += "<div class='ui-field-contain'><label for='o26'>" + _("Device ID (restart required)") + "<button data-helptext='" + _("Device ID modifies the last byte of the MAC address.") + "' class='help-icon btn-no-border ui-btn ui-icon-info ui-btn-icon-notext'></button></label><input data-mini='true' type='number' pattern='[0-9]*' max='255' id='o26' value='" + controller.options.devid + "'></div>"), void 0 !== controller.options.rlp ? s += "<div class='ui-field-contain duration-field'><label for='o30'>" + _("Relay Pulse") + "<button data-helptext='" + _("Relay pulsing is used for special situations where rapid pulsing is needed in the output with a range from 1 to 2000 milliseconds. A zero value disables the pulsing option.") + "' class='help-icon btn-no-border ui-btn ui-icon-info ui-btn-icon-notext'></button></label><button data-mini='true' id='o30' value='" + controller.options.rlp + "'>" + controller.options.rlp + "ms</button></div>" : !0 !== checkOSVersion(215) && void 0 !== controller.options.bst && (s += "<div class='ui-field-contain duration-field'><label for='o30'>" + _("Boost Time") + "<button data-helptext='" + _("Boost time changes how long the boost converter is activated with a range from 0 to 1000 milliseconds.") + "' class='help-icon btn-no-border ui-btn ui-icon-info ui-btn-icon-notext'></button></label><button data-mini='true' id='o30' value='" + controller.options.bst + "'>" + controller.options.bst + "ms</button></div>"), void 0 !== controller.options.ntp && checkOSVersion(210)) {
        var c = [controller.options.ntp1, controller.options.ntp2, controller.options.ntp3, controller.options.ntp4].join(".");
        s += "<div class='" + (1 === controller.options.ntp ? "" : "hidden ") + "ui-field-contain duration-field'><label for='ntp_addr'>" + _("NTP IP Address") + "</label><button data-mini='true' id='ntp_addr' value='" + c + "'>" + c + "</button></div>"
    }
    if (void 0 !== controller.options.dhcp && checkOSVersion(210)) {
        var u = [controller.options.ip1, controller.options.ip2, controller.options.ip3, controller.options.ip4].join("."),
            h = [controller.options.gw1, controller.options.gw2, controller.options.gw3, controller.options.gw4].join(".");
        if (s += "<div class='" + (1 === controller.options.dhcp ? "hidden " : "") + "ui-field-contain duration-field'><label for='ip_addr'>" + _("IP Address") + "</label><button data-mini='true' id='ip_addr' value='" + u + "'>" + u + "</button></div>", s += "<div class='" + (1 === controller.options.dhcp ? "hidden " : "") + "ui-field-contain duration-field'><label for='gateway'>" + _("Gateway Address") + "</label><button data-mini='true' id='gateway' value='" + h + "'>" + h + "</button></div>", void 0 !== controller.options.subn1) {
            var f = [controller.options.subn1, controller.options.subn2, controller.options.subn3, controller.options.subn4].join(".");
            s += "<div class='" + (1 === controller.options.dhcp ? "hidden " : "") + "ui-field-contain duration-field'><label for='subnet'>" + _("Subnet Mask") + "</label><button data-mini='true' id='subnet' value='" + f + "'>" + f + "</button></div>"
        }
        if (void 0 !== controller.options.dns1) {
            var m = [controller.options.dns1, controller.options.dns2, controller.options.dns3, controller.options.dns4].join(".");
            s += "<div class='" + (1 === controller.options.dhcp ? "hidden " : "") + "ui-field-contain duration-field'><label for='dns'>" + _("DNS Address") + "</label><button data-mini='true' id='dns' value='" + m + "'>" + m + "</button></div>"
        }
        s += "<label for='o3'><input data-mini='true' id='o3' type='checkbox' " + (1 === controller.options.dhcp ? "checked='checked'" : "") + ">" + _("Use DHCP (restart required)") + "</label>"
    }
    void 0 !== controller.options.ntp && (s += "<label for='o2'><input data-mini='true' id='o2' type='checkbox' " + (1 === controller.options.ntp ? "checked='checked'" : "") + ">" + _("NTP Sync") + "</label>"), void 0 !== controller.options.ar && (s += "<label for='o14'><input data-mini='true' id='o14' type='checkbox' " + (1 === controller.options.ar ? "checked='checked'" : "") + ">" + _("Auto Reconnect") + "</label>"), void 0 !== controller.options.ipas && (s += "<label for='o25'><input data-mini='true' id='o25' type='checkbox' " + (1 === controller.options.ipas ? "checked='checked'" : "") + ">" + _("Ignore Password") + "</label>"), void 0 !== controller.options.sar && (s += "<label for='o48'><input data-mini='true' id='o48' type='checkbox' " + (1 === controller.options.sar ? "checked='checked'" : "") + ">" + _("Special Station Auto-Refresh") + "</label>"), s += "</fieldset><fieldset data-role='collapsible' data-theme='b'" + ("string" == typeof e && "reset" === e ? " data-collapsed='false'" : "") + "><legend>" + _("Reset") + "</legend>", s += "<button data-mini='true' class='center-div reset-log'>" + _("Clear Log Data") + "</button>", s += "<button data-mini='true' class='center-div reset-options'>" + _("Reset All Options") + "</button>", s += "<button data-mini='true' class='center-div reset-stations'>" + _("Reset All Station Data") + "</button>", 30 <= controller.options.hwv && controller.options.hwv < 40 && (s += "<hr class='divider'><button data-mini='true' class='center-div reset-wireless'>" + _("Reset Wireless Settings") + "</button>"), s += "</fieldset>", d.find("#os-options-list").html(s).one("change input", ":not(.noselect)", function() {
        p.eq(2).prop("disabled", !1), d.find(".submit").addClass("hasChanges")
    }).find("fieldset").each(function() {
        var e = $(this);
        1 === e.children().length && e.remove()
    }), d.find(".clear-loc").on("click", function(e) {
        e.stopImmediatePropagation(), areYouSure(_("Are you sure you want to clear the current location?"), "", function() {
            d.find("#loc").val("''").removeClass("green").find("span").text(_("Not specified")), d.find("#o1").selectmenu("enable"), p.eq(2).prop("disabled", !1), d.find(".submit").addClass("hasChanges")
        })
    }), d.find("#showDisabled").on("change", function() {
        return storage.set({
            showDisabled: this.checked
        }), !1
    }), d.find("#loc").on("click", function() {
        var i = $(this);
        i.prop("disabled", !0), overlayMap(function(e, t) {
            if (!1 === e) "" === i.val() && (i.removeClass("green"), d.find("#o1").selectmenu("enable"));
            else {
                if (checkOSVersion(210) && d.find("#o1").selectmenu("disable"), "string" == typeof e) i.val(e).find("span").text(e);
                else {
                    e[0] = parseFloat(e[0]).toFixed(5), e[1] = parseFloat(e[1]).toFixed(5), "string" == typeof t && validateWULocation(t, function(e) {
                        e ? i.addClass("green") : e || i.removeClass("green")
                    });
                    var n = d.find("#wto");
                    n && void 0 !== n.val() && n.val(escapeJSON($.extend({}, unescapeJSON(n.val()), {
                        pws: t || ""
                    }))), i.val(e), coordsToLocation(e[0], e[1], function(e) {
                        i.find("span").text(e)
                    })
                }
                p.eq(2).prop("disabled", !1), d.find(".submit").addClass("hasChanges")
            }
            i.prop("disabled", !1)
        })
    }), d.find("#wto").on("click", function() {
        function e() {
            t.value = escapeJSON($.extend({}, unescapeJSON(t.value), i)), p.eq(2).prop("disabled", !1), d.find(".submit").addClass("hasChanges")
        }
        var t = this,
            n = unescapeJSON(this.value),
            i = {
                pws: n.pws,
                key: n.key
            },
            o = parseInt(d.find("#o31").val());
        1 === o ? showZimmermanAdjustmentOptions(this, e) : 2 === o ? showAutoRainDelayAdjustmentOptions(this, e) : 3 === o && showEToAdjustmentOptions(this, e)
    }), d.find(".reset-log").on("click", clearLogs), d.find(".reset-options").on("click", function() {
        resetAllOptions(function() {
            $.mobile.document.one("pageshow", function() {
                showerror(_("Settings have been saved"))
            }), goBack()
        })
    }), d.find(".reset-stations").on("click", function() {
        for (var e = "", t = 0; t < controller.stations.snames.length; t++) e += "s" + t + "=S" + pad(t + 1) + "&";
        if (controller.options.mas)
            for (t = 0; t < controller.settings.nbrd; t++) e += "m" + t + "=255&";
        if ("object" == typeof controller.stations.ignore_rain)
            for (t = 0; t < controller.settings.nbrd; t++) e += "i" + t + "=0&";
        if ("object" == typeof controller.stations.ignore_sn1)
            for (t = 0; t < controller.settings.nbrd; t++) e += "j" + t + "=0&";
        if ("object" == typeof controller.stations.ignore_sn2)
            for (t = 0; t < controller.settings.nbrd; t++) e += "k" + t + "=0&";
        if ("object" == typeof controller.stations.act_relay)
            for (t = 0; t < controller.settings.nbrd; t++) e += "a" + t + "=0&";
        if ("object" == typeof controller.stations.stn_dis)
            for (t = 0; t < controller.settings.nbrd; t++) e += "d" + t + "=0&";
        if ("object" == typeof controller.stations.stn_seq)
            for (t = 0; t < controller.settings.nbrd; t++) e += "q" + t + "=255&";
        areYouSure(_("Are you sure you want to reset all stations?"), _("This will reset all station names and attributes"), function() {
            $.mobile.loading("show"), storage.get(["sites", "current_site"], function(e) {
                var t = parseSites(e.sites);
                t[e.current_site].notes = {}, t[e.current_site].images = {}, t[e.current_site].lastRunTime = {}, storage.set({
                    sites: JSON.stringify(t)
                }, cloudSaveSites)
            }), sendToOS("/cs?pw=&" + e).done(function() {
                showerror(_("Stations have been updated")), updateController()
            })
        })
    }), d.find(".reset-wireless").on("click", function() {
        areYouSure(_("Are you sure you want to reset the wireless settings?"), _("This will delete the stored SSID/password for your wireless network and return the device to access point mode"), function() {
            sendToOS("/cv?pw=&ap=1").done(function() {
                $.mobile.document.one("pageshow", function() {
                    showerror(_("Wireless settings have been reset. Please follow the OpenSprinkler user manual on restoring connectivity."))
                }), goBack()
            })
        })
    }), d.find("#o3").on("change", function() {
        var e = $(this).is(":checked"),
            t = d.find("#ip_addr,#gateway,#dns,#subnet").parents(".ui-field-contain");
        e ? t.addClass("hidden") : t.removeClass("hidden")
    }), d.find(".sensor-options input[type='radio']").on("change", function() {
        var e = this.value,
            t = parseInt(this.id.match(/o(\d+)/)[1], 10);
        "2" === e ? d.find("#o41").parents(".ui-field-contain").removeClass("hidden") : 21 !== t && 50 !== t || d.find("#o41").parents(".ui-field-contain").addClass("hidden"), "1" === e || "3" === e || "240" === e ? d.find("#o" + (t + 1)).parent().removeClass("hidden") : d.find("#o" + (t + 1)).parent().addClass("hidden"), "240" === $("input[name='o21'][type='radio']:checked").val() || "240" === $("input[name='o50'][type='radio']:checked").val() ? d.find("#prgswitch").removeClass("hidden") : d.find("#prgswitch").addClass("hidden"), "240" === $("input[name='o52'][type='radio']:checked").val() ? d.find("#prgswitch-2").removeClass("hidden") : d.find("#prgswitch-2").addClass("hidden"), "1" === e || "3" === e ? d.find("#o" + (t + 4) + ",#o" + (t + 5)).parent().removeClass("hidden") : d.find("#o" + (t + 4) + ",#o" + (t + 5)).parent().addClass("hidden")
    }), d.find("#o21").on("change", function() {
        d.find("#o22").parent().toggleClass("hidden", $(this).is(":checked"))
    }), d.find("#verify-api").on("click", function() {
        var t = d.find("#wtkey"),
            n = $(this);
        n.prop("disabled", !0), testAPIKey(t.val(), function(e) {
            !0 === e ? (t.parent().find(".ui-icon-alert").hide(), t.parent().removeClass("red").addClass("green")) : (t.parent().find(".ui-icon-alert").removeClass("hidden").show(), t.parent().removeClass("green").addClass("red")), n.prop("disabled", !1)
        })
    }), d.find(".help-icon").on("click", showHelpText), d.find(".duration-field button:not(.help-icon)").on("click", function() {
        var t = $(this),
            e = t.attr("id"),
            n = d.find("label[for='" + e + "']").text(),
            i = t.parent().find(".help-icon").data("helptext"),
            o = 240;
        if (p.eq(2).prop("disabled", !1), d.find(".submit").addClass("hasChanges"), "ip_addr" === e || "gateway" === e || "dns" === e || "ntp_addr" === e || "subnet" === e) showIPRequest({
            title: n,
            ip: t.val().split("."),
            callback: function(e) {
                t.val(e.join(".")).text(e.join("."))
            }
        });
        else if ("o19" === e || "o38" === e) showSingleDurationInput({
            data: t.val(),
            title: n,
            callback: function(e) {
                t.val(e).text(e + "s")
            },
            label: _("Seconds"),
            maximum: 60,
            helptext: i
        });
        else if ("o30" === e) showSingleDurationInput({
            data: t.val(),
            title: n,
            callback: function(e) {
                t.val(e).text(e + "ms")
            },
            label: _("Milliseconds"),
            maximum: 2e3,
            helptext: i
        });
        else if ("o20" === e || "o39" === e) showSingleDurationInput({
            data: t.val(),
            title: n,
            callback: function(e) {
                t.val(e).text(e + "s")
            },
            label: _("Seconds"),
            maximum: checkOSVersion(217) ? 0 : 60,
            minimum: -60,
            helptext: i
        });
        else if ("o23" === e) showSingleDurationInput({
            data: t.val(),
            title: n,
            callback: function(e) {
                t.val(e).text(e + "%")
            },
            label: _("% Watering"),
            maximum: 250,
            helptext: i
        });
        else if ("o17" === e) {
            var a = 0;
            checkOSVersion(210) && (o = checkOSVersion(214) ? 57600 : 64800), checkOSVersion(211) && (a = -3540, o = 3540), checkOSVersion(217) && (a = -600, o = 600), showSingleDurationInput({
                data: t.val(),
                title: n,
                label: _("Seconds"),
                callback: function(e) {
                    t.val(e), t.text(dhms2str(sec2dhms(e)))
                },
                maximum: o,
                minimum: a
            })
        } else "o54" !== e && "o55" !== e && "o56" !== e && "o57" !== e || showSingleDurationInput({
            data: t.val(),
            title: n,
            callback: function(e) {
                t.val(e).text(e + "m")
            },
            label: _("Minutes"),
            maximum: 240,
            minimum: 0,
            helptext: i
        });
        return !1
    }), d.find("#o2").on("change", function() {
        var e = $(this).is(":checked");
        d.find(".datetime-input button").prop("disabled", e), d.find("#ntp_addr").parents(".ui-field-contain").toggleClass("hidden", !e)
    }), d.find("#o18,#o37").on("change", function() {
        d.find("#o19,#o20").parents(".ui-field-contain").toggle(0 !== parseInt(d.find("#o18").val())), void 0 !== controller.options.mas2 && d.find("#o38,#o39").parents(".ui-field-contain").toggle(0 !== parseInt(d.find("#o37").val()))
    }), d.find("#o31").on("change", function() {
        d.find("#o23").prop("disabled", 0 !== parseInt(this.value)), d.find("#wto").click().parents(".ui-field-contain").toggleClass("hidden", 0 === parseInt(this.value))
    }), d.find("#wtkey").on("change input", function() {
        d.find("#wtkey").siblings(".help-icon").hide(), d.find("#wtkey").parent().removeClass("red green")
    }), d.find("#o49").on("click", function() {
        var e = {
                program: _("Program Start"),
                sensor1: _("Sensor 1 Update"),
                flow: _("Flow Sensor Update"),
                weather: _("Weather Adjustment Update"),
                reboot: _("Controller Reboot"),
                run: _("Station Run"),
                sensor2: _("Sensor 2 Update"),
                rain: _("Rain Delay Update")
            },
            t = this,
            n = parseInt(t.value),
            i = "",
            o = 0,
            a = 0;
        $.each(e, function(e, t) {
            i += "<label for='ifttt-" + e + "'><input class='needsclick' data-iconpos='right' id='ifttt-" + e + "' type='checkbox' " + (getBitFromByte(n, o) ? "checked='checked'" : "") + ">" + t + "</label>", o++
        });
        var s = $("<div data-role='popup' data-theme='a'><div data-role='controlgroup' data-mini='true' class='tight'><div class='ui-bar ui-bar-a'>" + _("Select IFTTT Events") + "</div>" + i + "<input data-wrapper-class='attrib-submit' class='submit' data-theme='b' type='submit' value='" + _("Submit") + "' /></div></div>");
        s.find(".submit").on("click", function() {
            o = 0, $.each(e, function(e) {
                a |= s.find("#ifttt-" + e).is(":checked") << o, o++
            }), s.popup("close"), n !== a && (t.value = a, p.eq(2).prop("disabled", !1), d.find(".submit").addClass("hasChanges"))
        }), openPopup(s)
    }), d.find(".datetime-input").on("click", function() {
        var t = $(this).find("button");
        if (!t.prop("disabled")) return p.eq(2).prop("disabled", !1), d.find(".submit").addClass("hasChanges"), showDateTimeInput(t.val(), function(e) {
            t.text(dateToString(e).slice(0, -3)).val(Math.round(e.getTime() / 1e3))
        }), !1
    }), d.one("pagehide", function() {
        d.remove()
    }), p.eq(2).prop("disabled", !0), $("#os-options").remove(), $.mobile.pageContainer.append(d)
}
var showHomeMenu = function() {
        var t, n, i, o;
        return function(e) {
            e = e instanceof $ ? e : $(e), $(".ui-popup-active").find("[data-role='popup']").popup("close"), t = $(".ui-page-active"), n = t.attr("id"), i = t.hasClass("show-hidden"), (o = $("<div data-role='popup' data-theme='a' id='mainMenu'><ul data-role='listview' data-inset='true' data-corners='false'><li data-role='list-divider'>" + _("Information") + "</li><li><a href='#preview' class='squeeze'>" + _("Preview Programs") + "</a></li>" + (checkOSVersion(206) || checkOSPiVersion("1.9") ? "<li><a href='#logs'>" + _("View Logs") + "</a></li>" : "") + "<li data-role='list-divider'>" + _("Programs and Settings") + "</li><li><a href='#raindelay'>" + _("Change Rain Delay") + "</a></li><li><a href='#runonce'>" + _("Run-Once Program") + "</a></li><li><a href='#programs'>" + _("Edit Programs") + "</a></li><li><a href='#os-options'>" + _("Edit Options") + "</a></li>" + (checkOSVersion(210) ? "" : "<li><a href='#manual'>" + _("Manual Control") + "</a></li>") + ("sprinklers" === n || "runonce" === n || "programs" === n || "manual" === n || "addprogram" === n ? "</ul><div class='ui-grid-a ui-mini tight'><div class='ui-block-a'><a class='ui-btn tight' href='#show-hidden'>" + _(i ? "Hide" : "Show") + " " + _("Disabled") + "</a></div><div class='ui-block-b'><a class='ui-btn red tight' href='#stop-all'>" + _("Stop All Stations") + "</a></div></div>" : "<li><a class='ui-btn red' href='#stop-all'>" + _("Stop All Stations") + "</a></li></ul>") + "</div>")).on("click", "a", function() {
                var e = $(this).attr("href");
                return o.popup("close"), "#stop-all" === e ? stopAllStations() : "#show-hidden" === e ? i ? ($(".station-hidden").hide(), t.removeClass("show-hidden")) : ($(".station-hidden").show(), t.addClass("show-hidden")) : "#raindelay" === e ? showRainDelay() : checkChanges(function() {
                    changePage(e)
                }), !1
            }), $("#mainMenu").remove(), o.one("popupafterclose", function() {
                e.show()
            }), openPopup(o, {
                positionTo: e
            }), e.hide()
        }
    }(),
    showHome = function() {
        function d(e, t) {
            timers["station-" + e] = {
                val: t,
                station: e,
                update: function() {
                    I.find("#countdown-" + e).text("(" + sec2hms(this.val) + " " + _("remaining") + ")")
                },
                done: function() {
                    I.find("#countdown-" + e).parent("p").empty().siblings(".station-status").removeClass("on").addClass("off")
                }
            }
        }

        function p(e) {
            var t = controller.stations.snames[e],
                n = 0 < controller.settings.ps[e][0],
                i = 0 < controller.status[e],
                o = n ? pidname(controller.settings.ps[e][0]) : "",
                a = controller.settings.ps[e][1],
                s = !!O[D].images[e];
            controller.status[e] && 0 < a && d(e, a), m += "<div data-station='" + e + "' class='ui-corner-all card" + (isStationDisabled(e) ? " station-hidden' style='display:none" : "") + "'>", m += "<div class='ui-body ui-body-a center'>", m += "<img src='" + (s ? "data:image/jpeg;base64," + O[D].images[e] : getAppURLPath() + "img/placeholder.png") + "' />", m += "<p class='station-name center inline-icon' id='station_" + e + "'>" + t + "</p>", m += "<span class='btn-no-border ui-btn ui-btn-icon-notext ui-corner-all card-icon station-status " + (i ? "on" : n ? "wait" : "off") + "'></span>", m += "<span class='btn-no-border ui-btn ui-btn-icon-notext ui-icon-wifi card-icon special-station " + (isStationSpecial(e) ? "" : "hidden") + "'></span>", m += "<span class='btn-no-border ui-btn " + (isStationMaster(e) ? "ui-icon-master" : "ui-icon-gear") + " card-icon ui-btn-icon-notext station-settings' data-station='" + e + "' id='attrib-" + e + "' " + (g ? "data-um='" + (controller.stations.masop[parseInt(e / 8)] & 1 << e % 8 ? 1 : 0) + "' " : "") + (v ? "data-um2='" + (controller.stations.masop2[parseInt(e / 8)] & 1 << e % 8 ? 1 : 0) + "' " : "") + (b ? "data-ir='" + (controller.stations.ignore_rain[parseInt(e / 8)] & 1 << e % 8 ? 1 : 0) + "' " : "") + (y ? "data-sn1='" + (controller.stations.ignore_sn1[parseInt(e / 8)] & 1 << e % 8 ? 1 : 0) + "' " : "") + (w ? "data-sn2='" + (controller.stations.ignore_sn2[parseInt(e / 8)] & 1 << e % 8 ? 1 : 0) + "' " : "") + (k ? "data-ar='" + (controller.stations.act_relay[parseInt(e / 8)] & 1 << e % 8 ? 1 : 0) + "' " : "") + (T ? "data-sd='" + (controller.stations.stn_dis[parseInt(e / 8)] & 1 << e % 8 ? 1 : 0) + "' " : "") + (x ? "data-us='" + (controller.stations.stn_seq[parseInt(e / 8)] & 1 << e % 8 ? 1 : 0) + "' " : "") + (S ? "data-hs='" + (controller.stations.stn_spe[parseInt(e / 8)] & 1 << e % 8 ? 1 : 0) + "' " : "") + "></span>", isStationMaster(e) || (n || i) && (m += "<p class='rem center'>" + (i ? _("Running") + " " + o : _("Scheduled") + " " + (controller.settings.ps[e][2] ? _("for") + " " + dateToString(new Date(1e3 * controller.settings.ps[e][2])) : o)), 0 < a && (m += " <span id='countdown-" + e + "' class='nobr'>(" + sec2hms(a) + " " + _("remaining") + ")</span>"), m += "</p>"), m += "</div></div>"
        }

        function e() {
            $("#stn_attrib").popup("destroy").remove();
            var c = $(this),
                u = c.data("station"),
                d = c.siblings("[id='station_" + u + "']"),
                p = function() {
                    var e = f.find("#http-server").val() + "," + f.find("#http-port").val() + "," + f.find("#http-on").val() + "," + f.find("#http-off").val(),
                        t = encodeURIComponent(e).length;
                    f.find("#character-count").text(240 - t), 240 < t ? (f.find(".attrib-submit").addClass("ui-disabled"), f.find("#character-tracking").addClass("red-text bold")) : (f.find(".attrib-submit").removeClass("ui-disabled"), f.find("#character-tracking").removeClass("red-text bold"))
                },
                h = function(e) {
                    var t = parseInt(f.find("#hs").val());
                    if (c.data("hs", t), 1 === t) c.data("specialData", f.find("#rf-code").val());
                    else if (2 === t) {
                        for (var n = f.find("#remote-address").val().split("."), i = parseInt(f.find("#remote-port").val()) || 80, o = (f.find("#remote-station").val() || 1) - 1, a = "", s = 0; s < 4; s++) a += pad(parseInt(n[s]).toString(16));
                        if (a += (i < 256 ? "00" : "") + pad(i.toString(16)), a += pad(o.toString(16)), !0 !== e) return $.mobile.loading("show"), f.find(".attrib-submit").addClass("ui-disabled"), void verifyRemoteStation(a, function(e) {
                            var t;
                            if (!0 !== e) {
                                !1 === e || -1 === e ? t = _("Unable to reach the remote station.") : -2 === e ? t = _("Password on remote controller does not match the password on this controller.") : -3 === e && (t = _("Remote controller is not configured as an extender. Would you like to do this now?")), f.one("popupafterclose", function() {
                                    $.mobile.loading("hide"), n.css("opacity", "")
                                }), $.mobile.loading("show", {
                                    html: "<h1>" + t + "</h1><button class='ui-btn cancel'>" + _("Cancel") + "</button><button class='ui-btn continue'>" + _("Continue") + "</button>",
                                    textVisible: !0,
                                    theme: "b"
                                });
                                var n = $(".ui-loader");
                                n.css("opacity", ".96"), n.find(".cancel").one("click", function() {
                                    $.mobile.loading("hide"), n.css("opacity", "")
                                }), n.find(".continue").one("click", function() {
                                    $.mobile.loading("hide"), n.css("opacity", ""), -3 === e && convertRemoteToExtender(a), h(!0)
                                }), f.find(".attrib-submit").removeClass("ui-disabled")
                            } else h(!0)
                        });
                        c.data("specialData", a)
                    } else if (3 === t) {
                        var r = pad(f.find("#gpio-pin").val() || "05");
                        r += f.find("#active-state").val() || "1", c.data("specialData", r)
                    } else if (4 === t) {
                        var l = f.find("#http-server").val();
                        l += "," + f.find("#http-port").val(), l += "," + f.find("#http-on").val(), l += "," + f.find("#http-off").val(), c.data("specialData", l)
                    }
                    c.data("um", f.find("#um").is(":checked") ? 1 : 0), c.data("um2", f.find("#um2").is(":checked") ? 1 : 0), c.data("ir", f.find("#ir").is(":checked") ? 1 : 0), c.data("sn1", f.find("#sn1").is(":checked") ? 1 : 0), c.data("sn2", f.find("#sn2").is(":checked") ? 1 : 0), c.data("ar", f.find("#ar").is(":checked") ? 1 : 0), c.data("sd", f.find("#sd").is(":checked") ? 1 : 0), c.data("us", f.find("#us").is(":checked") ? 1 : 0), d.html(f.find("#stn-name").val()), O[D].notes[u] = f.find("#stn-notes").val(), storage.set({
                        sites: JSON.stringify(O)
                    }, cloudSaveSites), M(u), f.popup("destroy").remove()
                },
                f = "<div data-overlay-theme='b' data-role='popup' data-theme='a' id='stn_attrib'><fieldset style='margin:0' data-mini='true' data-corners='false' data-role='controlgroup'><form><div id='station-tabs'>";
            if ("number" != typeof u) return !1;
            S && (f += "<ul class='tabs'><li class='current' data-tab='tab-basic'>Basic</li><li data-tab='tab-advanced'>Advanced</li></ul>"), f += "<div id='tab-basic' class='tab-content current'>", f += "<div class='ui-bar-a ui-bar'>" + _("Station Name") + ":</div><input class='bold center' data-corners='false' data-wrapper-class='tight stn-name ui-btn' id='stn-name' type='text' value='" + d.text() + "'>", void 0 !== navigator.camera && "function" == typeof navigator.camera.getPicture && (f += "<button class='changeBackground'>" + ("string" != typeof O[D].images[u] ? _("Add") : _("Change")) + " " + _("Image") + "</button>"), isStationMaster(u) || (g && (f += "<label for='um'><input class='needsclick' data-iconpos='right' id='um' type='checkbox' " + (1 === c.data("um") ? "checked='checked'" : "") + ">" + _("Use Master") + " " + (v ? "1" : "") + "</label>"), v && (f += "<label for='um2'><input class='needsclick' data-iconpos='right' id='um2' type='checkbox' " + (1 === c.data("um2") ? "checked='checked'" : "") + ">" + _("Use Master") + " 2</label>"), b && (f += "<label for='ir'><input class='needsclick' data-iconpos='right' id='ir' type='checkbox' " + (1 === c.data("ir") ? "checked='checked'" : "") + ">" + _("Ignore Rain") + "</label>"), y && (f += "<label for='sn1'><input class='needsclick' data-iconpos='right' id='sn1' type='checkbox' " + (1 === c.data("sn1") ? "checked='checked'" : "") + ">" + _("Ignore Sensor 1") + "</label>"), w && (f += "<label for='sn2'><input class='needsclick' data-iconpos='right' id='sn2' type='checkbox' " + (1 === c.data("sn2") ? "checked='checked'" : "") + ">" + _("Ignore Sensor 2") + "</label>"), k && (f += "<label for='ar'><input class='needsclick' data-iconpos='right' id='ar' type='checkbox' " + (1 === c.data("ar") ? "checked='checked'" : "") + ">" + _("Activate Relay") + "</label>"), T && (f += "<label for='sd'><input class='needsclick' data-iconpos='right' id='sd' type='checkbox' " + (1 === c.data("sd") ? "checked='checked'" : "") + ">" + _("Disable") + "</label>"), x && (f += "<label for='us'><input class='needsclick' data-iconpos='right' id='us' type='checkbox' " + (1 === c.data("us") ? "checked='checked'" : "") + ">" + _("Sequential") + "</label>")), f += "<div class='ui-bar-a ui-bar'>" + _("Station Notes") + ":</div><textarea data-corners='false' class='tight stn-notes' id='stn-notes'>" + (O[D].notes[u] ? O[D].notes[u] : "") + "</textarea>", f += "</div>", S && (f += "<div id='tab-advanced' class='tab-content'><div class='ui-bar-a ui-bar'>" + _("Station Type") + ":</div><select data-mini='true' id='hs'" + (isStationSpecial(u) ? " class='ui-disabled'" : "") + "><option data-hs='0' value='0'" + (isStationSpecial(u) ? "" : "selected") + ">" + _("Standard") + "</option><option data-hs='1' value='1'>" + _("RF") + "</option><option data-hs='2' value='2'>" + _("Remote") + "</option><option data-hs='3' value='3'" + (checkOSVersion(217) ? ">" : " disabled>") + _("GPIO") + "</option><option data-hs='4' value='4'" + (checkOSVersion(217) ? ">" : " disabled>") + _("HTTP") + "</option></select><div id='specialOpts'></div></div></div>"), f += "<input data-wrapper-class='attrib-submit' data-theme='b' type='submit' value='" + _("Submit") + "' /></form></fieldset></div>", (f = $(f).enhanceWithin().on("submit", "form", function() {
                return h(u), !1
            })).find("ul.tabs li").click(function() {
                var e = $(this).attr("data-tab");
                $("ul.tabs li").removeClass("current"), $(".tab-content").removeClass("current"), $(this).addClass("current"), $("#" + e).addClass("current")
            }), f.find("#hs").on("change", function() {
                return function(e) {
                    var t = f.find("#specialOpts"),
                        n = controller.special && controller.special.hasOwnProperty(u) ? controller.special[u].sd : "",
                        i = controller.special && controller.special.hasOwnProperty(u) ? controller.special[u].st : 0;
                    if (t.empty(), 0 === e) t.append("<p class='special-desc center small'>" + _("Select the station type using the dropdown selector above and configure the station properties.") + "</p>").enhanceWithin();
                    else if (1 === e) n = i === e ? n : "0000000000000000", t.append("<div class='ui-bar-a ui-bar'>" + _("RF Code") + ":</div><input class='center' data-corners='false' data-wrapper-class='tight ui-btn stn-name' id='rf-code' required='true' type='text' value='" + n + "'>").enhanceWithin();
                    else if (2 === e) n = parseRemoteStationData(i === e ? n : "00000000005000"), t.append("<div class='ui-bar-a ui-bar'>" + _("Remote Address") + ":</div><input class='center' data-corners='false' data-wrapper-class='tight ui-btn stn-name' id='remote-address' required='true' type='text' pattern='^(?:[0-9]{1,3}.){3}[0-9]{1,3}$' value='" + n.ip + "'><div class='ui-bar-a ui-bar'>" + _("Remote Port") + ":</div><input class='center' data-corners='false' data-wrapper-class='tight ui-btn stn-name' id='remote-port' required='true' type='number' placeholder='80' min='0' max='65535' value='" + n.port + "'><div class='ui-bar-a ui-bar'>" + _("Remote Station (index)") + ":</div><input class='center' data-corners='false' data-wrapper-class='tight ui-btn stn-name' id='remote-station' required='true' type='number' min='1' max='48' placeholder='1' value='" + (n.station + 1) + "'>").enhanceWithin();
                    else if (3 === e) {
                        var o, a, s = 5,
                            r = 1;
                        "OSPi" === getHWVersion() ? o = [5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 18, 19, 20, 21, 23, 24, 25, 26] : "2.3" === getHWVersion() && (o = [2, 10, 12, 13, 14, 15, 18, 19]), i === e && (n = n.split(""), s = parseInt(n[0] + n[1]), r = parseInt(n[2])), a = "<div class='ui-bar-a ui-bar'>" + _("GPIO Pin") + ":</div><select class='center' data-corners='false' data-wrapper-class='tight ui-btn stn-name' id='gpio-pin'>";
                        for (var l = 0; l < o.length; l++) a += "<option value='" + o[l] + "' " + (o[l] === s ? "selected='selected'" : "") + ">" + o[l];
                        a += "</select>", a += "<div class='ui-bar-a ui-bar'>" + _("Active State") + ":</div><select class='center' data-corners='false' data-wrapper-class='tight ui-btn stn-name' id='active-state'><option value='1' " + (1 === r ? "selected='selected'" : "") + ">" + _("HIGH") + "<option value='0' " + (0 === r ? "selected='selected'" : "") + ">" + _("LOW") + "</select>", t.append(a).enhanceWithin()
                    } else 4 === e && (n = i === e ? n.split(",") : ["server", "80", "On", "Off"], t.append("<div class='ui-bar-a ui-bar'>" + _("Server Name") + ":</div><input class='center  validate-length' data-corners='false' data-wrapper-class='tight ui-btn stn-name' id='http-server' required='true' type='text' value='" + n[0] + "'><div class='ui-bar-a ui-bar'>" + _("Server Port") + ":</div><input class='center  validate-length' data-corners='false' data-wrapper-class='tight ui-btn stn-name' id='http-port' required='true' type='number' min='0' max='65535' value='" + parseInt(n[1]) + "'><div class='ui-bar-a ui-bar'>" + _("On Command") + ":</div><input class='center validate-length' data-corners='false' data-wrapper-class='tight ui-btn stn-name' id='http-on' required='true' type='text' value='" + n[2] + "'><div class='ui-bar-a ui-bar'>" + _("Off Command") + ":</div><input class='center validate-length' data-corners='false' data-wrapper-class='tight ui-btn stn-name' id='http-off' required='true' type='text' value='" + n[3] + "'><div class='center smaller' id='character-tracking' style='color:#999;'><p>" + _("Note: There is a limit on the number of character used to configure this station type.") + "</p><span>" + _("Characters remaining") + ": </span><span id='character-count'>placeholder</span></div>").enhanceWithin(), p(), $(".validate-length").on("input", p))
                }(parseInt($(this).val())), !1
            }), isStationSpecial(u) ? updateControllerStationSpecial(function() {
                f.find("#hs").removeClass("ui-disabled").find("option[data-hs='" + controller.special[u].st + "']").prop("selected", !0), f.find("#hs").change()
            }) : (f.find("#hs").removeClass("ui-disabled"), f.find("option[data-hs='0']").prop("selected", !0), f.find("#hs").change()), f.find(".changeBackground").on("click", function(e) {
                e.preventDefault();
                var t = this;
                takePicture(function(e) {
                    O[D].images[u] = e, storage.set({
                        sites: JSON.stringify(O)
                    }, cloudSaveSites), n(), t.innerHTML = _("Change") + " " + _("Image")
                })
            }), $.mobile.pageContainer.append(f);
            var e = {
                history: !1
            };
            if (isiOS) {
                var t = getPageTop();
                e.x = t.x, e.y = t.y
            } else e.positionTo = "window";
            f.popup(e).popup("open")
        }

        function h() {
            timers.clock = {
                val: controller.settings.devt,
                update: function() {
                    I.find("#clock-s").text(dateToString(new Date(1e3 * this.val), null, 1))
                }
            }
        }

        function f() {
            function e(e, t) {
                return (e = $(e).data("station")) < (t = $(t).data("station")) ? -1 : t < e ? 1 : 0
            }
            var t = I.find("#os-stations-list"),
                n = I.find("#os-running-stations"),
                i = I.find(".content-divider");
            t.find(".station-status.on").parents(".card").appendTo(n), n.find(".station-status.off").parents(".card").appendTo(t), t.children().sort(e).detach().appendTo(t), n.children().sort(e).detach().appendTo(n), 0 === n.children().length ? i.hide() : i.show()
        }
        var g, v, b, y, w, k, T, x, S, m, C, D, a, O, I = $("<div data-role='page' id='sprinklers'><div class='ui-panel-wrapper'><div class='ui-content' role='main'><div class='ui-grid-a ui-body ui-corner-all info-card noweather'><div class='ui-block-a'><div id='weather' class='pointer'></div></div><div class='ui-block-b center home-info pointer'><div class='sitename bold'></div><div id='clock-s' class='nobr'></div>" + _("Water Level") + ": <span class='waterlevel'></span>%</div></div><div id='os-running-stations'></div><hr style='display:none' class='content-divider'><div id='os-stations-list' class='card-group center'></div></div></div></div>"),
            M = function(e) {
                var t, n, i, o, a = !0 === checkOSVersion(208),
                    s = {},
                    r = {},
                    l = {},
                    c = {},
                    u = {},
                    d = {},
                    p = {},
                    h = {},
                    f = {},
                    m = {};
                for (n = 0; n < controller.settings.nbrd; n++)
                    for (g && (s["m" + n] = 0), v && (r["n" + n] = 0), x && (l["q" + n] = 0), S && (c["p" + n] = 0), b && (u["i" + n] = 0), y && (d["j" + n] = 0), w && (p["k" + n] = 0), k && (h["a" + n] = 0), T && (f["d" + n] = 0), o = 0; o < 8; o++) i = 8 * n + o, t = I.find("#attrib-" + i), g && (s["m" + n] = s["m" + n] + (t.data("um") << o)), v && (r["n" + n] = r["n" + n] + (t.data("um2") << o)), x && (l["q" + n] = l["q" + n] + (t.data("us") << o)), S && (c["p" + n] = c["p" + n] + ((t.data("hs") ? 1 : 0) << o)), b && (u["i" + n] = u["i" + n] + (t.data("ir") << o)), y && (d["j" + n] = d["j" + n] + (t.data("sn1") << o)), w && (p["k" + n] = p["k" + n] + (t.data("sn2") << o)), k && (h["a" + n] = h["a" + n] + (t.data("ar") << o)), T && (f["d" + n] = f["d" + n] + (t.data("sd") << o)), i === e && (m["s" + i] = a ? I.find("#station_" + i).text().replace(/\s/g, "_") : I.find("#station_" + i).text(), S && t.data("hs") && (c.st = t.data("hs"), c.sd = t.data("specialData"), c.sid = e));
                $.mobile.loading("show"), sendToOS("/cs?pw=&" + $.param(m) + (g ? "&" + $.param(s) : "") + (v ? "&" + $.param(r) : "") + (x ? "&" + $.param(l) : "") + (S ? "&" + $.param(c) : "") + (b ? "&" + $.param(u) : "") + (y ? "&" + $.param(d) : "") + (w ? "&" + $.param(p) : "") + (k ? "&" + $.param(h) : "") + (T ? "&" + $.param(f) : "")).done(function() {
                    showerror(_("Stations have been updated")), updateController(function() {
                        $("html").trigger("datarefresh")
                    })
                })
            },
            n = function() {
                var e, t, n, i, o, a, s, r = I.find("#os-stations-list"),
                    l = r.children(),
                    c = I.find("#os-running-stations").children();
                if (I.hasClass("ui-page-active")) {
                    h(), E(), l.length + c.length > controller.stations.snames.length && (c.detach().appendTo(r), (l = r.children()).each(function() {
                        var e = $(this);
                        e.data("station") >= controller.stations.snames.length && e.remove()
                    })), I.find(".waterlevel").text(controller.options.wl), I.find(".sitename").text(C.val()), g = !!controller.options.mas, v = !!controller.options.mas2, b = "object" == typeof controller.stations.ignore_rain, y = "object" == typeof controller.stations.ignore_sn1, w = "object" == typeof controller.stations.ignore_sn2, k = "object" == typeof controller.stations.act_relay, T = "object" == typeof controller.stations.stn_dis, x = "object" == typeof controller.stations.stn_seq, S = "object" == typeof controller.stations.stn_spe;
                    for (var u = 0; u < controller.stations.snames.length; u++) e = 0 < controller.settings.ps[u][0], t = 0 < controller.status[u], n = e ? pidname(controller.settings.ps[u][0]) : "", i = controller.settings.ps[u][1], s = !!O[D].images[u], 0 === (o = l.filter("[data-station='" + u + "']")).length && (o = c.filter("[data-station='" + u + "']")), 0 === o.length ? (m = "", p(u), r.append(m)) : (o.find(".ui-body > img").attr("src", s ? "data:image/jpeg;base64," + O[D].images[u] : getAppURLPath() + "img/placeholder.png"), isStationDisabled(u) ? (I.hasClass("show-hidden") || o.hide(), o.addClass("station-hidden")) : o.show().removeClass("station-hidden"), o.find("#station_" + u).text(controller.stations.snames[u]), o.find(".special-station").removeClass("hidden").addClass(isStationSpecial(u) ? "" : "hidden"), o.find(".station-status").removeClass("on off wait").addClass(t ? "on" : e ? "wait" : "off"), isStationMaster(u) ? o.find(".station-settings").removeClass("ui-icon-gear").addClass("ui-icon-master") : o.find(".station-settings").removeClass("ui-icon-master").addClass("ui-icon-gear"), o.find(".station-settings").data({
                        um: g ? controller.stations.masop[parseInt(u / 8)] & 1 << u % 8 ? 1 : 0 : void 0,
                        um2: v ? controller.stations.masop2[parseInt(u / 8)] & 1 << u % 8 ? 1 : 0 : void 0,
                        ir: b ? controller.stations.ignore_rain[parseInt(u / 8)] & 1 << u % 8 ? 1 : 0 : void 0,
                        sn1: y ? controller.stations.ignore_sn1[parseInt(u / 8)] & 1 << u % 8 ? 1 : 0 : void 0,
                        sn2: w ? controller.stations.ignore_sn2[parseInt(u / 8)] & 1 << u % 8 ? 1 : 0 : void 0,
                        ar: k ? controller.stations.act_relay[parseInt(u / 8)] & 1 << u % 8 ? 1 : 0 : void 0,
                        sd: T ? controller.stations.stn_dis[parseInt(u / 8)] & 1 << u % 8 ? 1 : 0 : void 0,
                        us: x ? controller.stations.stn_seq[parseInt(u / 8)] & 1 << u % 8 ? 1 : 0 : void 0,
                        hs: S ? controller.stations.stn_spe[parseInt(u / 8)] & 1 << u % 8 ? 1 : 0 : void 0
                    }), isStationMaster(u) || !e && !t ? o.find(".rem").remove() : (a = t ? _("Running") + " " + n : _("Scheduled") + " " + (controller.settings.ps[u][2] ? _("for") + " " + dateToString(new Date(1e3 * controller.settings.ps[u][2])) : n), 0 < i && (a += " <span id='countdown-" + u + "' class='nobr'>(" + sec2hms(i) + " " + _("remaining") + ")</span>", controller.status[u] && d(u, i)), 0 === o.find(".rem").length ? o.find(".ui-body").append("<p class='rem center'>" + a + "</p>") : o.find(".rem").html(a)));
                    f()
                }
            },
            E = function(t) {
                t = t || function() {}, D = C.val(), storage.get("sites", function(e) {
                    "object" != typeof(O = parseSites(e.sites))[D].images || $.isEmptyObject(O[D].images) ? (O[D].images = {}, I.removeClass("has-images")) : I.addClass("has-images"), "object" != typeof O[D].notes && (O[D].notes = {}), "object" != typeof O[D].lastRunTime && (O[D].lastRunTime = {}), t()
                })
            };
        return I.one("pageshow", function() {
                $("html").on("datarefresh", n)
            }),
            function(t) {
                if (!isControllerConnected()) return !1;
                g = !!controller.options.mas, v = !!controller.options.mas2, b = "object" == typeof controller.stations.ignore_rain, y = "object" == typeof controller.stations.ignore_sn1, w = "object" == typeof controller.stations.ignore_sn2, k = "object" == typeof controller.stations.act_relay, T = "object" == typeof controller.stations.stn_dis, x = "object" == typeof controller.stations.stn_seq, S = "object" == typeof controller.stations.stn_spe, m = "", C = $("#site-selector"), E(function() {
                    for (a = 0; a < controller.stations.snames.length; a++) p(a);
                    I.find("#os-stations-list").html(m), f()
                }), I.find(".sitename").toggleClass("hidden", !!currLocal).text(C.val()), I.find(".waterlevel").text(controller.options.wl), h(), I.on("click", ".station-settings", e), I.on("click", ".home-info", function() {
                    return changePage("#os-options", {
                        expandItem: "weather"
                    }), !1
                }), I.on("click", ".card", function() {
                    if (!checkOSVersion(210)) return !1;
                    var e, t = $(this),
                        n = t.data("station"),
                        i = controller.status[n],
                        o = controller.stations.snames[n];
                    if (isStationMaster(n)) return !1;
                    if (i) e = _("Do you want to stop the selected station?");
                    else {
                        if (!t.find("span.nobr").length) return void showDurationBox({
                            title: o,
                            incrementalUpdate: !1,
                            maximum: 65535,
                            seconds: 0 < O[D].lastRunTime[n] ? O[D].lastRunTime[n] : 0,
                            helptext: _("Enter a duration to manually run " + o),
                            callback: function(e) {
                                sendToOS("/cm?sid=" + n + "&en=1&t=" + e + "&pw=", "json").done(function() {
                                    controller.settings.ps[n][0] = 99, controller.settings.ps[n][1] = e, refreshStatus(), showerror(_("Station has been queued")), O[D].lastRunTime[n] = e, storage.set({
                                        sites: JSON.stringify(O)
                                    }, cloudSaveSites)
                                })
                            }
                        });
                        e = _("Do you want to unschedule the selected station?")
                    }
                    areYouSure(e, controller.stations.snames[n], function() {
                        sendToOS("/cm?sid=" + n + "&en=0&pw=").done(function() {
                            controller.settings.ps[n][0] = 0, controller.settings.ps[n][1] = 0, controller.status[a] = 0, delete timers["station-" + n], refreshStatus(), showerror(_("Station has been stopped"))
                        })
                    })
                }).on("click", "img", function() {
                    var e = $(this),
                        t = e.parents(".card").data("station");
                    return -1 !== e.attr("src").indexOf("data:image/jpeg;base64") ? areYouSure(_("Do you want to delete the current image?"), "", function() {
                        delete O[D].images[t], storage.set({
                            sites: JSON.stringify(O)
                        }, cloudSaveSites), n()
                    }) : takePicture(function(e) {
                        O[D].images[t] = e, storage.set({
                            sites: JSON.stringify(O)
                        }, cloudSaveSites), n()
                    }), !1
                }).on({
                    pagebeforeshow: function() {
                        var e = changeHeader({
                            class: "logo",
                            leftBtn: {
                                icon: "bullets",
                                on: function() {
                                    return openPanel(), !1
                                }
                            },
                            rightBtn: {
                                icon: "bell",
                                class: "notifications",
                                text: "<span class='notificationCount ui-li-count ui-btn-corner-all'>" + notifications.length + "</span>",
                                on: function() {
                                    return showNotifications(), !1
                                }
                            },
                            animate: !t
                        });
                        0 === notifications.length && $(e[2]).hide()
                    }
                }), $("#sprinklers").remove(), $.mobile.pageContainer.append(I), $.isEmptyObject(weather) || updateWeatherBox()
            }
    }(),
    showStart = function() {
        var e = $("<div data-role='page' id='start'><ul data-role='none' id='welcome_list' class='ui-listview ui-listview-inset ui-corner-all'><li><div class='logo' id='welcome_logo'></div></li><li class='ui-li-static ui-body-inherit ui-first-child ui-last-child ui-li-separate'><p class='rain-desc'>" + _("Welcome to the OpenSprinkler application. This app only works with the OpenSprinkler controller which must be installed and setup on your home network.") + "</p><a class='iab iabNoScale ui-btn ui-mini center' target='_blank' href='https://opensprinkler.com/product/opensprinkler/'>" + _("Purchase OpenSprinkler") + "</a></li><li class='ui-first-child ui-last-child'><a href='#' class='ui-btn center cloud-login'>" + _("OpenSprinkler.com Login") + "</a></li><hr class='content-divider'><li id='auto-scan' class='ui-first-child'><a href='#' class='ui-btn ui-btn-icon-right ui-icon-carat-r'>" + _("Scan For Device") + "</a></li><li class='ui-first-child ui-last-child'><a class='ui-btn ui-btn-icon-right ui-icon-carat-r' data-rel='popup' href='#addnew'>" + _("Add Controller") + "</a></li></ul></div>"),
            t = function() {
                i.addClass("ui-first-child").find("a.ui-btn").text(_("Add Controller")), n.hide()
            },
            n = e.find("#auto-scan"),
            i = n.next();
        return e.find("#auto-scan").find("a").on("click", function() {
                return startScan(), !1
            }), e.find("a[href='#addnew']").on("click", function() {
                showAddNew()
            }), e.find(".cloud-login").on("click", function() {
                return requestCloudAuth(), !1
            }), e.on("pagehide", function() {
                e.detach()
            }),
            function() {
                if (isControllerConnected()) return !1;
                $("#start").remove(), $.mobile.pageContainer.append(e), updateDeviceIP(function(e) {
                    void 0 !== e && isLocalIP(e) ? (i.removeClass("ui-first-child").find("a.ui-btn").text(_("Manually Add Device")), n.show()) : t()
                })
            }
    }();

function showGuidedSetup() {}

function isStationMaster(e) {
    var t = "number" == typeof controller.options.mas ? controller.options.mas : 0,
        n = "number" == typeof controller.options.mas2 ? controller.options.mas2 : 0;
    return t === ++e ? 1 : n === e ? 2 : 0
}

function isStationDisabled(e) {
    return "object" == typeof controller.stations.stn_dis && 0 < (controller.stations.stn_dis[parseInt(e / 8)] & 1 << e % 8)
}

function isStationSpecial(e) {
    return "object" == typeof controller.stations.stn_spe && 0 < (controller.stations.stn_spe[parseInt(e / 8)] & 1 << e % 8)
}

function isStationSequential(e) {
    return "object" == typeof controller.stations.stn_seq ? 0 < (controller.stations.stn_seq[parseInt(e / 8)] & 1 << e % 8) : controller.options.seq
}

function parseRemoteStationData(e) {
    e = e.split("");
    for (var t, n = [], i = {}, o = 0; o < 8; o++) t = parseInt(e[o] + e[o + 1], 16) || 0, n.push(t), o++;
    return i.ip = n.join("."), i.port = parseInt(e[8] + e[9] + e[10] + e[11], 16), i.station = parseInt(e[12] + e[13], 16), i
}

function verifyRemoteStation(e, t) {
    e = parseRemoteStationData(e), $.ajax({
        url: "http://" + e.ip + ":" + e.port + "/jo?pw=" + encodeURIComponent(currPass),
        type: "GET",
        dataType: "json"
    }).then(function(e) {
        "object" == typeof e && e.hasOwnProperty("fwv") ? 1 === Object.keys(e).length ? t(-2) : e.hasOwnProperty("re") && 0 !== e.re ? t(!0) : t(-3) : t(-1)
    }, function() {
        t(!1)
    })
}

function convertRemoteToExtender(e) {
    e = parseRemoteStationData(e), $.ajax({
        url: "http://" + e.ip + ":" + e.port + "/cv?re=1&pw=" + encodeURIComponent(currPass),
        type: "GET",
        dataType: "json"
    })
}

function refreshStatus() {
    if (isControllerConnected()) {
        function e() {
            $("html").trigger("datarefresh"), checkStatus()
        }
        checkOSVersion(216) ? updateController(e, networkFail) : $.when(updateControllerStatus(), updateControllerSettings(), updateControllerOptions()).then(e, networkFail)
    }
}

function refreshData() {
    isControllerConnected() && (checkOSVersion(216) ? updateController(null, networkFail) : $.when(updateControllerPrograms(), updateControllerStations()).fail(networkFail))
}

function changeStatus(e, t, n, i) {
    var o = $("#footer-running"),
        a = "";
    i = i || function() {}, 1 < e && (timers.statusbar = {
        val: e,
        type: "statusbar",
        update: function() {
            $("#countdown").text("(" + sec2hms(this.val) + " " + _("remaining") + ")")
        }
    }), isControllerConnected() && void 0 !== controller.settings.curr && (a += _("Current") + ": " + controller.settings.curr + " mA "), !isControllerConnected() || 2 !== controller.options.urs && 2 !== controller.options.sn1t || void 0 === controller.settings.flcrt || void 0 === controller.settings.flwrt || (a += "<span style='padding-left:5px'>" + _("Flow") + ": " + (flowCountToVolume(controller.settings.flcrt) / (controller.settings.flwrt / 60)).toFixed(2) + " L/min</span>"), a = "" !== a ? n + "<p class='running-text smaller center'>" + a + "</p>" : n, o.removeClass().addClass(t).html(a).off("click").on("click", i)
}

function checkStatus() {
    var e, t, n, i, o, a, s;
    if (isControllerConnected())
        if (1 !== controller.options.re)
            if (controller.settings.en) {
                for (e = {}, s = 0; s < controller.status.length; s++) controller.status[s] && !isStationMaster(s) && (e[s] = controller.status[s]);
                if (2 <= Object.keys(e).length) {
                    for (s in t = 0, e) e.hasOwnProperty(s) && t < (a = controller.settings.ps[s][1]) && (t = a);
                    return n = Object.keys(e)[0], i = "<div><div class='running-icon'></div><div class='running-text pointer'>", i += pidname(controller.settings.ps[n][0]) + " " + _("is running on") + " " + Object.keys(e).length + " " + _("stations") + " ", 0 < t && (i += "<span id='countdown' class='nobr'>(" + sec2hms(t) + " " + _("remaining") + ")</span>"), void changeStatus(t, "green", i += "</div></div>", goHome)
                }
                for (o = !1, s = 0; s < controller.stations.snames.length; s++)
                    if (controller.settings.ps[s] && controller.settings.ps[s][0] && controller.status[s] && !isStationMaster(s)) {
                        o = !0, i = "<div><div class='running-icon'></div><div class='running-text pointer'>", i += pidname(controller.settings.ps[s][0]) + " " + _("is running on station") + " <span class='nobr'>" + controller.stations.snames[s] + "</span> ", 0 < controller.settings.ps[s][1] && (i += "<span id='countdown' class='nobr'>(" + sec2hms(controller.settings.ps[s][1]) + " " + _("remaining") + ")</span>"), i += "</div></div>";
                        break
                    } if (o) changeStatus(controller.settings.ps[s][1], "green", i, goHome);
                else if (controller.settings.rd) changeStatus(0, "red", "<p class='running-text center pointer'>" + _("Rain delay until") + " " + dateToString(new Date(1e3 * controller.settings.rdst)) + "</p>", function() {
                    areYouSure(_("Do you want to turn off rain delay?"), "", function() {
                        showLoading("#footer-running"), sendToOS("/cv?pw=&rd=0").done(function() {
                            updateController()
                        })
                    })
                });
                else if (1 !== controller.options.urs || 1 !== controller.settings.rs)
                    if (1 !== controller.settings.sn1)
                        if (1 !== controller.settings.sn2)
                            if (1 !== controller.settings.mm) {
                                var r = controller.settings.lrun[2];
                                if (0 === r) changeStatus(0, "transparent", "<p class='running-text smaller center pointer'>" + _("System Idle") + "</p>", goHome);
                                else changeStatus(0, "transparent", "<p class='running-text smaller center pointer'>" + pidname(controller.settings.lrun[1]) + " " + _("last ran station") + " " + controller.stations.snames[controller.settings.lrun[0]] + " " + _("for") + " " + (r / 60 >> 0) + "m " + r % 60 + "s " + _("on") + " " + dateToString(new Date(1e3 * (controller.settings.lrun[3] - r))) + "</p>", goHome)
                            } else changeStatus(0, "red", "<p class='running-text center pointer'>" + _("Manual mode enabled") + "</p>", function() {
                                areYouSure(_("Do you want to turn off manual mode?"), "", function() {
                                    showLoading("#footer-running"), sendToOS("/cv?pw=&mm=0").done(function() {
                                        updateController()
                                    })
                                })
                            });
                else changeStatus(0, "red", "<p class='running-text center'>Sensor 2 (" + (3 === controller.options.sn2t ? _("Soil") : _("Rain")) + _(") Activated") + "</p>");
                else changeStatus(0, "red", "<p class='running-text center'>Sensor 1 (" + (3 === controller.options.sn1t ? _("Soil") : _("Rain")) + _(") Activated") + "</p>");
                else changeStatus(0, "red", "<p class='running-text center'>" + _("Rain detected") + "</p>")
            } else changeStatus(0, "red", "<p class='running-text center pointer'>" + _("System Disabled") + "</p>", function() {
                areYouSure(_("Do you want to re-enable system operation?"), "", function() {
                    showLoading("#footer-running"), sendToOS("/cv?pw=&en=1").done(function() {
                        updateController()
                    })
                })
            });
    else changeStatus(0, "red", "<p class='running-text center pointer'>" + _("Configured as Extender") + "</p>", function() {
        areYouSure(_("Do you wish to disable extender mode?"), "", function() {
            showLoading("#footer-running"), sendToOS("/cv?pw=&re=0").done(function() {
                updateController()
            })
        })
    });
    else changeStatus(0, "transparent", "<p class='running-text smaller'></p>")
}

function calculateTotalRunningTime(n) {
    var i = 0,
        o = 0;
    return $.each(controller.stations.snames, function(e) {
        var t = n[e];
        isStationSequential(e) ? i += t : o < t && (o = t)
    }), Math.max(i, o)
}

function updateTimers() {
    var n = (new Date).getTime();
    setInterval(function() {
        if (!isControllerConnected()) return !1;
        var e = (new Date).getTime();
        if (2e3 < e - n && (checkStatus(), refreshStatus()), n = e, !$.isEmptyObject(timers))
            for (var t in timers) timers.hasOwnProperty(t) && (timers[t].val <= 0 ? ("statusbar" === t && (showLoading("#footer-running"), refreshStatus()), "function" == typeof timers[t].done && timers[t].done(), delete timers[t]) : "clock" === t ? (++timers[t].val, timers[t].update()) : "statusbar" !== t && "number" != typeof timers[t].station || (--timers[t].val, timers[t].update()))
    }, 1e3)
}

function removeStationTimers() {
    for (var e in timers) timers.hasOwnProperty(e) && "clock" !== e && delete timers[e]
}
var getManual = function() {
        function a(t) {
            updateControllerStatus().done(function() {
                var e = r.eq(t).find("a");
                controller.options.mas && (controller.status[controller.options.mas - 1] ? r.eq(controller.options.mas - 1).addClass("green") : r.eq(controller.options.mas - 1).removeClass("green")), e.text(controller.stations.snames[t]), controller.status[t] ? e.removeClass("yellow").addClass("green") : e.removeClass("green yellow")
            })
        }

        function e() {
            if (!controller.settings.mm) return showerror(_("Manual mode is not enabled. Please enable manual mode then try again.")), !1;
            var e = $(this),
                t = e.closest("li"),
                n = r.index(t),
                i = n + 1,
                o = l.val();
            return e.hasClass("yellow") || (s = controller.status[n] ? checkOSPiVersion("2.1") ? "/sn?sid=" + i + "&set_to=0&pw=" : "/sn" + i + "=0" : checkOSPiVersion("2.1") ? "/sn?sid=" + i + "&set_to=1&set_time=" + o + "&pw=" : "/sn" + i + "=1&t=" + o, e.removeClass("green").addClass("yellow"), e.html("<p class='ui-icon ui-icon-loading mini-load'></p>"), sendToOS(s).always(function() {
                setTimeout(a, 1e3, n)
            })), !1
        }
        var s, t, r, i = $("<div data-role='page' id='manual'><div class='ui-content' role='main'><p class='center'>" + _("With manual mode turned on, tap a station to toggle it.") + "</p><fieldset data-role='collapsible' data-collapsed='false' data-mini='true'><legend>" + _("Options") + "</legend><div class='ui-field-contain'><label for='mmm'><b>" + _("Manual Mode") + "</b></label><input type='checkbox' data-on-text='On' data-off-text='Off' data-role='flipswitch' name='mmm' id='mmm'></div><p class='rain-desc smaller center' style='padding-top:5px'>" + _("Station timer prevents a station from running indefinitely and will automatically turn it off after the set duration (or when toggled off)") + "</p><div class='ui-field-contain duration-input'><label for='auto-off'><b>" + _("Station Timer") + "</b></label><button data-mini='true' name='auto-off' id='auto-off' value='3600'>1h</button></div></fieldset><div id='manual-station-list'></div></div></div>"),
            l = i.find("#auto-off");
        return i.on("pagehide", function() {
                i.detach()
            }), storage.get("autoOff", function(e) {
                e.autoOff && (l.val(e.autoOff), l.text(dhms2str(sec2dhms(e.autoOff))))
            }), l.on("click", function() {
                var t = $(this),
                    e = i.find("label[for='" + t.attr("id") + "']").text();
                return showDurationBox({
                    seconds: t.val(),
                    title: e,
                    callback: function(e) {
                        t.val(e), t.text(dhms2str(sec2dhms(e))), storage.set({
                            autoOff: e
                        })
                    },
                    maximum: 32768
                }), !1
            }), i.find("#mmm").on("change", flipSwitched),
            function() {
                var n = "<li data-role='list-divider' data-theme='a'>" + _("Sprinkler Stations") + "</li>";
                i.find("#mmm").prop("checked", !!controller.settings.mm), $.each(controller.stations.snames, function(e, t) {
                    isStationMaster(e) ? n += "<li data-icon='false' class='center" + (controller.status[e] ? " green" : "") + (isStationDisabled(e) ? " station-hidden' style='display:none" : "") + "'>" + t + " (" + _("Master") + ")</li>" : n += "<li data-icon='false'><a class='mm_station center" + (controller.status[e] ? " green" : "") + (isStationDisabled(e) ? " station-hidden' style='display:none" : "") + "'>" + t + "</a></li>"
                }), t = $("<ul data-role='listview' data-inset='true' id='mm_list'>" + n + "</ul>"), r = t.children("li").slice(1), t.find(".mm_station").on("vclick", e), i.find("#manual-station-list").html(t).enhanceWithin(), changeHeader({
                    title: _("Manual Control"),
                    leftBtn: {
                        icon: "carat-l",
                        text: _("Back"),
                        class: "ui-toolbar-back-btn",
                        on: goBack
                    }
                }), $("#manual").remove(), $.mobile.pageContainer.append(i)
            }
    }(),
    getRunonce = function() {
        function i(e) {
            c.l = e, $("<option value='l' selected='selected'>" + _("Last Used Program") + "</option>").insertAfter(h.find("#rprog").find("option[value='t']")), f(e)
        }

        function o() {
            return h.find("[id^='zone-']").val(0).text("0s").removeClass("green"), !1
        }
        var a, s, r, l, c, u, d, p, h = $("<div data-role='page' id='runonce'><div class='ui-content' role='main' id='runonce_list'></div></div>"),
            f = function(i) {
                h.find("[id^='zone-']").each(function(e, t) {
                    if (!isStationMaster(e)) {
                        var n = $(t);
                        n.val(i[e]).text(getDurationText(i[e])), 0 < i[e] ? n.addClass("green") : n.removeClass("green")
                    }
                })
            };
        return h.on("pagehide", function() {
                h.detach()
            }),
            function() {
                if (s = "<p class='center'>" + _("Zero value excludes the station from the run-once program.") + "</p>", l = [], controller.programs.pd.length)
                    for (u = 0; u < controller.programs.pd.length; u++) {
                        d = readProgram(controller.programs.pd[u]);
                        var e = [];
                        if (checkOSVersion(210)) e = d.stations;
                        else {
                            var t = d.stations.split("");
                            for (a = 0; a < controller.stations.snames.length; a++) e.push(parseInt(t[a]) ? d.duration : 0)
                        }
                        l.push(e)
                    }
                for (c = l, r = "<select data-mini='true' name='rprog' id='rprog'><option value='t'>" + _("Test All Stations") + "</option><option value='s' selected='selected'>" + _("Quick Programs") + "</option>", a = 0; a < l.length; a++) p = checkOSVersion(210) ? controller.programs.pd[a][5] : _("Program") + " " + (a + 1), r += "<option value='" + a + "'>" + p + "</option>";
                if (s += (r += "</select>") + "<form>", $.each(controller.stations.snames, function(e, t) {
                        isStationMaster(e) ? s += "<div class='ui-field-contain duration-input" + (isStationDisabled(e) ? " station-hidden' style='display:none" : "") + "'><label for='zone-" + e + "'>" + t + ":</label><button disabled='true' data-mini='true' name='zone-" + e + "' id='zone-" + e + "' value='0'>Master</button></div>" : s += "<div class='ui-field-contain duration-input" + (isStationDisabled(e) ? " station-hidden' style='display:none" : "") + "'><label for='zone-" + e + "'>" + t + ":</label><button data-mini='true' name='zone-" + e + "' id='zone-" + e + "' value='0'>0s</button></div>"
                    }), s += "</form><a class='ui-btn ui-corner-all ui-shadow rsubmit' href='#'>" + _("Submit") + "</a><a class='ui-btn ui-btn-b ui-corner-all ui-shadow rreset' href='#'>" + _("Reset") + "</a>", h.find(".ui-content").html(s).enhanceWithin(), "object" == typeof controller.settings.rodur) {
                    var n = 0;
                    for (a = 0; a < controller.settings.rodur.length; a++) n += controller.settings.rodur[a];
                    0 !== n && i(controller.settings.rodur)
                } else storage.get("runonce", function(e) {
                    (e = e.runonce) && (e = JSON.parse(e), i(e))
                });
                h.find("#rprog").on("change", function() {
                    var e = $(this).val();
                    "s" !== e ? "t" !== e ? void 0 !== c[e] && f(c[e]) : f(Array.apply(null, Array(controller.stations.snames.length)).map(function() {
                        return 60
                    })) : o()
                }), h.on("click", ".rsubmit", submitRunonce).on("click", ".rreset", o), h.find("[id^='zone-']").on("click", function() {
                    var t = $(this),
                        e = h.find("label[for='" + t.attr("id") + "']").text().slice(0, -1);
                    return showDurationBox({
                        seconds: t.val(),
                        title: e,
                        callback: function(e) {
                            t.val(e), t.text(getDurationText(e)), 0 < e ? t.addClass("green") : t.removeClass("green")
                        },
                        maximum: 65535,
                        showSun: !!checkOSVersion(214)
                    }), !1
                }), changeHeader({
                    title: _("Run-Once"),
                    leftBtn: {
                        icon: "carat-l",
                        text: _("Back"),
                        class: "ui-toolbar-back-btn",
                        on: goBack
                    },
                    rightBtn: {
                        icon: "check",
                        text: _("Submit"),
                        on: submitRunonce
                    }
                }), $("#runonce").remove(), $.mobile.pageContainer.append(h)
            }
    }();

function submitRunonce(e) {
    e instanceof Array || (e = [], $("#runonce").find("[id^='zone-']").each(function() {
        e.push(parseInt(this.value) || 0)
    }), e.push(0));

    function t() {
        $.mobile.loading("show"), storage.set({
            runonce: JSON.stringify(e)
        }), sendToOS("/cr?pw=&t=" + JSON.stringify(e)).done(function() {
            $.mobile.loading("hide"), $.mobile.document.one("pageshow", function() {
                showerror(_("Run-once program has been scheduled"))
            }), refreshStatus(), goBack()
        })
    }
    var n = isRunning(); - 1 !== n ? areYouSure(_("Do you want to stop the currently running program?"), pidname(controller.settings.ps[n][0]), function() {
        $.mobile.loading("show"), stopStations(t)
    }) : t()
}
var getPreview = function() {
    var L, s, N, a, r, f, l, P, R, d, e, o, c, u, p, W, H, B, h = $("<div data-role='page' id='preview'><div class='ui-content' role='main'><div id='preview_header' class='input_with_buttons'><button class='preview-minus ui-btn ui-btn-icon-notext ui-icon-carat-l btn-no-border'></button><input class='center' type='date' name='preview_date' id='preview_date'><button class='preview-plus ui-btn ui-btn-icon-notext ui-icon-carat-r btn-no-border'></button></div><div id='timeline'></div><div data-role='controlgroup' data-type='horizontal' id='timeline-navigation'><a class='ui-btn ui-corner-all ui-icon-plus ui-btn-icon-notext btn-no-border' title='" + _("Zoom in") + "'></a><a class='ui-btn ui-corner-all ui-icon-minus ui-btn-icon-notext btn-no-border' title='" + _("Zoom out") + "'></a><a class='ui-btn ui-corner-all ui-icon-carat-l ui-btn-icon-notext btn-no-border' title='" + _("Move left") + "'></a><a class='ui-btn ui-corner-all ui-icon-carat-r ui-btn-icon-notext btn-no-border' title='" + _("Move right") + "'></a></div></div></div>"),
        m = h.find("#timeline"),
        g = h.find("#timeline-navigation");
    return h.find("#preview_date").on("change", function() {
            c = this.value.split("-"), u = new Date(c[0], c[1] - 1, c[2]), o()
        }), h.one("pagebeforeshow", function() {
            holdButton(h.find(".preview-plus"), function() {
                e(1)
            }), holdButton(h.find(".preview-minus"), function() {
                e(-1)
            })
        }), h.on({
            pagehide: function() {
                h.detach()
            },
            pageshow: function() {
                o()
            }
        }), s = function(e, t, n) {
            L = [];
            var i, o, a, s, r, l, c, u, d, p, h, f = Math.floor(controller.settings.devt / 86400),
                m = 0,
                g = Date.UTC(n, e - 1, t, 0, 0, 0, 0),
                v = g / 1e3 / 3600 / 24 >> 0,
                b = 8 * controller.settings.nbrd,
                y = new Array(b),
                w = new Array(b),
                k = new Array(b),
                T = new Array(b),
                x = [],
                S = new Array(b),
                _ = 0,
                C = 0;
            for (s = 0; s < b; s++) y[s] = -1, w[s] = 0, k[s] = 0, T[s] = 0, S[s] = 255;
            do {
                for (var D = o = i = 0; D < controller.programs.pd.length; D++)
                    if (a = controller.programs.pd[D], N(a, m, g, v, f))
                        for (s = 0; s < b; s++)
                            if (u = s >> 3, p = s % 8, !isStationMaster(s))
                                if (W) {
                                    if (controller.stations.stn_dis[u] & 1 << p) continue;
                                    if (a[4][s] && 0 === k[s]) {
                                        var O = 0;
                                        0 < (O = 2 & a[0] && (0 < controller.options.uwt && v === f || 0 === controller.options.uwt) ? getStationDuration(a[4][s], g) * controller.options.wl / 100 >> 0 : getStationDuration(a[4][s], g)) && (B ? x.length < b && x.push({
                                            st: -1,
                                            dur: O,
                                            sid: s,
                                            pid: D + 1,
                                            pl: 1
                                        }) : (k[s] = O, w[s] = D + 1), o = 1)
                                    }
                                } else a[7 + u] & 1 << p && (k[s] = a[6] * controller.options.wl / 100 >> 0, w[s] = D + 1, o = 1);
                if (o) {
                    var I = 60 * m,
                        M = I;
                    if (H)
                        if (I < C && (M = C + controller.options.sdt), B)
                            for (r = 0; r < x.length; r++) 0 <= (l = x[r]).st || 0 === l.dur || (d = (s = l.sid) >> 3, h = 7 & s, controller.stations.stn_seq[d] & 1 << h ? (l.st = M, M += l.dur, M += controller.options.sdt) : (l.st = I, I++), i = 1);
                        else
                            for (s = 0; s < b; s++) d = s >> 3, h = 7 & s, 0 === k[s] || 0 <= y[s] || (controller.stations.stn_seq[d] & 1 << h ? (y[s] = M, M += k[s], k[s] = M, M += controller.options.sdt) : (y[s] = I, k[s] = I + k[s]), i = T[s] = 1);
                    else if (W && controller.options.seq && I < _ && (I = _ + controller.options.sdt), controller.options.seq)
                        for (s = 0; s < 8 * controller.settings.nbrd; s++) 0 !== k[s] && 0 !== w[s] && (y[s] = I, I += k[s], k[s] = I, I += controller.options.sdt, i = 1);
                    else
                        for (s = 0; s < 8 * controller.settings.nbrd; s++) 0 !== k[s] && 0 !== w[s] && (y[s] = I, k[s] = I + k[s], i = 1)
                }
                if (B) {
                    for (r = 0; r < x.length; r++)(c = S[s = (l = x[r]).sid]) < 255 && x[c].st < l.st || (S[s] = r);
                    for (R(60 * m, x, S, g), m++, s = 0; s < 8 * controller.settings.nbrd; s++)
                        if (255 !== (c = S[s]) && 0 <= (l = x[c]).st && 60 * m >= l.st + l.dur) {
                            var E = x.length;
                            c < E - 1 && (x[c] = x[E - 1], S[x[c].sid] === E - 1 && (S[x[c].sid] = c)), x.pop(), S[s] = 255
                        } for (r = C = 0; r < x.length; r++) {
                        d = (s = (l = x[r]).sid) >> 3, h = 7 & s;
                        var A = l.st + l.dur;
                        controller.stations.stn_seq[d] & 1 << h && C < A && (C = A)
                    }
                } else if (i)
                    if (H)
                        for (C = P(60 * m, y, w, k, T, g), m++, s = 0; s < 8 * controller.settings.nbrd; s++) 0 < w[s] && 60 * m >= k[s] && (y[s] = -1, w[s] = 0, k[s] = 0, T[s] = 0);
                    else if (W)
                    for (_ = P(60 * m, y, w, k, T, g), m++, s = 0; s < 8 * controller.settings.nbrd; s++) y[s] = -1, w[s] = 0, k[s] = 0;
                else {
                    var j = P(60 * m, y, w, k, T, g) / 60 >> 0;
                    for (controller.options.seq && m !== j ? m = j : m++, s = 0; s < 8 * controller.settings.nbrd; s++) y[s] = -1, w[s] = 0, k[s] = 0
                } else if (m++, H)
                    for (s = 0; s < 8 * controller.settings.nbrd; s++) 0 < w[s] && 60 * m >= k[s] && (y[s] = -1, w[s] = 0, k[s] = 0, T[s] = 0)
            } while (m < 1440)
        }, R = function(e, t, n, i) {
            for (var o = 0; o < 8 * controller.settings.nbrd; o++) {
                var a = n[o];
                if (255 !== a) {
                    var s = t[a];
                    if (s.pl) {
                        var r = void 0 !== controller.options.mas2,
                            l = controller.stations.masop[o >> 3] & 1 << o % 8,
                            c = r && controller.stations.masop2[o >> 3] & 1 << o % 8;
                        isStationMaster(o) || (0 < controller.options.mas && l && L.push({
                            start: s.st + controller.options.mton,
                            end: s.st + s.dur + controller.options.mtof,
                            content: "",
                            className: "master",
                            shortname: "M" + (r ? "1" : ""),
                            group: "Master",
                            station: o
                        }), r && 0 < controller.options.mas2 && c && L.push({
                            start: s.st + controller.options.mton2,
                            end: s.st + s.dur + controller.options.mtof2,
                            content: "",
                            className: "master",
                            shortname: "M2",
                            group: "Master 2",
                            station: o
                        })), d(o, s.st, s.pid, s.st + s.dur, i), s.pl = 0
                    }
                }
            }
        }, P = function(e, t, n, i, o, a) {
            for (var s = e, r = 0; r < 8 * controller.settings.nbrd; r++)
                if (n[r])
                    if (H) {
                        if (o[r]) {
                            var l = void 0 !== controller.options.mas2,
                                c = controller.stations.masop[r >> 3] & 1 << r % 8,
                                u = l && controller.stations.masop2[r >> 3] & 1 << r % 8;
                            isStationMaster(r) || (0 < controller.options.mas && c && L.push({
                                start: t[r] + controller.options.mton,
                                end: i[r] + controller.options.mtof,
                                content: "",
                                className: "master",
                                shortname: "M" + (l ? "1" : ""),
                                group: "Master",
                                station: r
                            }), l && 0 < controller.options.mas2 && u && L.push({
                                start: t[r] + controller.options.mton2,
                                end: i[r] + controller.options.mtof2,
                                content: "",
                                className: "master",
                                shortname: "M2",
                                group: "Master 2",
                                station: r
                            })), d(r, t[r], n[r], i[r], a), o[r] = 0, controller.stations.stn_seq[r >> 3] & 1 << (7 & r) && (s = s > i[r] ? s : i[r])
                        }
                    } else 1 === controller.options.seq ? (isStationMaster(r) && controller.stations.masop[r >> 3] & 1 << r % 8 && L.push({
                        start: t[r] + controller.options.mton,
                        end: i[r] + controller.options.mtof,
                        content: "",
                        className: "master",
                        shortname: "M",
                        group: "Master",
                        station: r
                    }), d(r, t[r], n[r], i[r], a), s = i[r]) : (d(r, e, n[r], i[r], a), isStationMaster(r) && controller.stations.masop[r >> 3] & 1 << r % 8 && (s = s > i[r] ? s : i[r]));
            return H || 0 === controller.options.seq && 0 < controller.options.mas && L.push({
                start: e,
                end: s,
                content: "",
                className: "master",
                shortname: "M",
                group: "Master",
                station: r
            }), s
        }, d = function(e, t, n, i, o) {
            var a = "program-" + (n + 3) % 4,
                s = "P" + n;
            (0 !== controller.settings.rd && o + t + 900 * (controller.options.tz - 48) <= 1e3 * controller.settings.rdst || 1 === controller.options.urs && 1 === controller.settings.rs) && "object" == typeof controller.stations.ignore_rain && 0 == (controller.stations.ignore_rain[parseInt(e / 8)] & 1 << e % 8) && (a = "delayed"), checkOSVersion(210) && (s = controller.programs.pd[n - 1][5]), L.push({
                start: t,
                end: i,
                className: a,
                content: s,
                pid: n - 1,
                shortname: "S" + (e + 1),
                group: controller.stations.snames[e],
                station: e
            })
        }, N = function(e, t, n, i, o) {
            return B ? l(e, t, n, i, o) : W ? r(e, t, n, i, o) : a(e, t, n, i, o)
        }, a = function(e, t, n, i, o) {
            if (0 === e[0]) return 0;
            if (128 & e[1] && 1 < e[2]) {
                var a = e[2];
                if (i % a != (o + (127 & e[1])) % a) return 0
            } else {
                var s = new Date(n),
                    r = (s.getUTCDay() + 6) % 7;
                if (0 == (e[1] & 1 << r)) return 0;
                var l = s.getUTCDate();
                if (128 & e[1] && 0 === e[2] && l % 2 != 0) return 0;
                if (128 & e[1] && 1 === e[2] && (31 === l || 29 === l && 1 === s.getUTCMonth() || l % 2 != 1)) return 0
            }
            return t < e[3] || t > e[4] || isOSPi() && t >= e[4] ? 0 : 0 === e[5] ? 0 : ((t - e[3]) / e[5] >> 0) * e[5] == t - e[3] ? 1 : 0
        }, f = function(e, t, n, i) {
            var o = e[0] >> 2 & 3,
                a = e[0] >> 4 & 3,
                s = new Date(t);
            if (3 == a) {
                var r = e[2];
                if (n % r != (i + e[1]) % r) return 0
            } else {
                if (0 != a) return 0;
                var l = (s.getUTCDay() + 6) % 7;
                if (0 == (e[1] & 1 << l)) return 0
            }
            var c = s.getUTCDate();
            if (2 == o) {
                if (c % 2 != 0) return 0
            } else if (1 == o && (31 === c || 29 === c && 1 === s.getUTCMonth() || c % 2 != 1)) return 0;
            return 1
        }, r = function(e, t, n, i, o) {
            var a = 1 & e[0],
                s = e[0] >> 6 & 1,
                r = new Date(n);
            if (0 == a) return 0;
            if (!f(e, n, i, o)) return 0;
            if (0 == s) {
                var l = getStartTime(e[3][0], r),
                    c = e[3][1],
                    u = e[3][2];
                if (t < l) return 0;
                if (0 === c) return t === l ? 1 : 0;
                if (0 === u) return 0;
                var d = Math.round((t - l) / u);
                if (d * u == t - l && d <= c) return 1
            } else
                for (var p = e[3], h = 0; h < 4; h++)
                    if (t === getStartTime(p[h], r)) return 1;
            return 0
        }, l = function(e, t, n, i, o) {
            var a = 1 & e[0],
                s = e[0] >> 6 & 1,
                r = new Date(n);
            if (0 == a) return 0;
            var l, c = getStartTime(e[3][0], r),
                u = e[3][1],
                d = e[3][2];
            if (f(e, n, i, o)) {
                if (0 != s) {
                    for (var p = e[3], h = 0; h < 4; h++)
                        if (t === getStartTime(p[h], r)) return 1;
                    return 0
                }
                if (t === c) return 1;
                if (c < t && d && (l = Math.round((t - c) / d)) * d == t - c && l <= u) return 1
            }
            return s || !d ? 0 : f(e, n - 864e5, i - 1, o) && (l = Math.round((t - c + 1440) / d)) * d == t - c + 1440 && l <= u ? 1 : 0
        }, e = function(e) {
            u.setDate(u.getDate() + e);
            var t = pad(u.getMonth() + 1),
                n = pad(u.getDate()),
                i = u.getFullYear();
            c = [i, t, n], h.find("#preview_date").val(c.join("-")), o()
        }, o = function() {
            if (s(c[1], c[2], c[0]), g.hide(), L.length) {
                L.sort(sortByStation);
                var n = [],
                    i = new Date(c[0], c[1] - 1, c[2], 24);
                $.each(L, function() {
                    var e = this.start + this.end;
                    if (this.start = new Date(c[0], c[1] - 1, c[2], 0, 0, this.start), 86400 < e) {
                        var t = Math.floor(this.end / 86400);
                        this.end = new Date(c[0], c[1] - 1, parseInt(c[2]) + t, 0, 0, this.end % 86400), i = i > this.end ? i : this.end
                    } else this.end = new Date(c[0], c[1] - 1, c[2], 0, 0, this.end);
                    n[this.group] = this.shortname
                });

                function e() {
                    o.redraw()
                }
                var t = {
                        width: "100%",
                        editable: !1,
                        axisOnTop: !0,
                        eventMargin: 10,
                        eventMarginAxis: 0,
                        min: new Date(c[0], c[1] - 1, c[2], 0),
                        max: i,
                        selectable: !0,
                        showMajorLabels: !1,
                        zoomMax: 864e5,
                        zoomMin: 36e5,
                        groupsChangeable: !1,
                        showNavigation: !1,
                        groupsOrder: "none",
                        groupMinHeight: 20
                    },
                    o = new links.Timeline(m[0], t),
                    a = new Date(p);
                a.setMinutes(a.getMinutes() + a.getTimezoneOffset()), o.setCurrentTime(a), links.events.addListener(o, "select", function() {
                    var e = o.getSelection();
                    e.length && void 0 !== e[0].row && changePage("#programs", {
                        programToExpand: parseInt(o.getItem(e[0].row).pid)
                    })
                }), $.mobile.window.on("resize", e), h.one("pagehide", function() {
                    $.mobile.window.off("resize", e)
                }), o.draw(L), h.find(".timeline-groups-text").each(function() {
                    var e = $(this),
                        t = n[e.text()];
                    e.attr("data-shortname", t)
                }), h.find(".timeline-groups-axis").children().first().html("<div class='timeline-axis-text center dayofweek' data-shortname='" + getDayName(u, "short") + "'>" + getDayName(u) + "</div>"), isAndroid ? (g.find(".ui-icon-plus").off("click").on("click", function() {
                    return o.zoom(.4), !1
                }), g.find(".ui-icon-minus").off("click").on("click", function() {
                    return o.zoom(-.4), !1
                }), g.find(".ui-icon-carat-l").off("click").on("click", function() {
                    return o.move(-.2), !1
                }), g.find(".ui-icon-carat-r").off("click").on("click", function() {
                    return o.move(.2), !1
                }), g.show()) : g.hide(), m.on("swiperight swipeleft", function(e) {
                    e.stopImmediatePropagation()
                })
            } else h.find("#timeline").html("<p align='center'>" + _("No stations set to run on this day.") + "</p>")
        },
        function() {
            W = checkOSVersion(210), H = checkOSVersion(211), B = checkOSVersion(216), "" === h.find("#preview_date").val() && (p = new Date(1e3 * controller.settings.devt), c = p.toISOString().slice(0, 10).split("-"), u = new Date(c[0], c[1] - 1, c[2]), h.find("#preview_date").val(c.join("-"))), changeHeader({
                title: _("Program Preview"),
                leftBtn: {
                    icon: "carat-l",
                    text: _("Back"),
                    class: "ui-toolbar-back-btn",
                    on: goBack
                }
            }), $("#preview").remove(), $.mobile.pageContainer.append(h)
        }
}();

function getStationDuration(e, t) {
    if (checkOSVersion(214)) {
        var n = getSunTimes(t);
        65535 === e ? e = 60 * (n[0] + 1440 - n[1]) : 65534 === e && (e = 60 * (n[1] - n[0]))
    }
    return e
}
var getLogs = function() {
    function m(d, p) {
        var h = [],
            f = {
                totalRuntime: 0,
                totalCount: 0
            };
        if ("table" === d && "station" === p)
            for (t = 0; t < v.length; t++) h[t] = [];
        return $.each(T, function() {
            var e = this[1],
                t = parseInt(this[2]);
            t < 0 && (t += 65536);
            var n = new Date(parseInt(1e3 * this[3]) - 1e3 * t),
                i = new Date(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), n.getUTCHours(), n.getUTCMinutes(), n.getUTCSeconds());
            if ("string" == typeof e)
                if ("rd" === e) e = v.length - 1;
                else if ("s1" === e) e = v.length - 3;
            else if ("s2" === e) e = v.length - 2;
            else {
                if ("rs" !== e) return;
                e = v.length - 2
            } else if ("number" == typeof e) {
                if (e > v.length - 2 || isStationMaster(e)) return;
                f.totalRuntime += t, f.totalCount++
            }
            if ("table" === d) switch (p) {
                case "station":
                    h[e].push([i, dhms2str(sec2dhms(t))]);
                    break;
                case "day":
                    var o = Math.floor(n.getTime() / 1e3 / 60 / 60 / 24),
                        a = [i, dhms2str(sec2dhms(t)), e];
                    "object" != typeof h[o] ? h[o] = [a] : h[o].push(a)
            } else if ("timeline" === d) {
                var s, r, l, c, u = parseInt(this[0]);
                if ("rs" === this[1]) s = "delayed", l = r = _("Rain Sensor"), c = _("RS");
                else if ("rd" === this[1]) s = "delayed", l = r = _("Rain Delay"), c = _("RD");
                else if ("s1" === this[1]) s = "delayed", l = r = 3 === controller.options.sn1t ? _("Soil Sensor") : _("Rain Sensor"), c = _("SEN1");
                else if ("s2" === this[1]) s = "delayed", l = r = 3 === controller.options.sn2t ? _("Soil Sensor") : _("Rain Sensor"), c = _("SEN2");
                else {
                    if (0 === u) return;
                    s = "program-" + (u + 3) % 4, r = pidname(u), l = controller.stations.snames[e], c = "S" + (e + 1)
                }
                h.push({
                    start: i,
                    end: new Date(i.getTime() + 1e3 * t),
                    className: s,
                    content: r,
                    pid: u - 1,
                    shortname: c,
                    group: l,
                    station: e
                })
            }
        }), "timeline" === d && h.sort(sortByStation), [h, f]
    }

    function g(o, a) {
        var e = [],
            s = [];
        return i.length && (o.avgWaterLevel = 0, $.each(i, function() {
            e[Math.floor(this[3] / 60 / 60 / 24)] = this[2], o.avgWaterLevel += this[2]
        }), o.avgWaterLevel = parseFloat((o.avgWaterLevel / i.length).toFixed(2))), c.length && (o.totalVolume = 0, $.each(c, function() {
            var e = flowCountToVolume(this[0]);
            if ("timeline" === a) {
                var t = new Date(parseInt(1e3 * this[3])),
                    n = new Date(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds());
                s.push({
                    start: new Date(n.getTime() - parseInt(1e3 * this[2])),
                    end: n,
                    className: "",
                    content: e + " L",
                    shortname: _("FS"),
                    group: _("Flow Sensor")
                })
            } else {
                var i = Math.floor(this[3] / 60 / 60 / 24);
                s[i] = s[i] ? s[i] + e : e
            }
            o.totalVolume += e
        })), [e, s, o]
    }

    function s(e, t, n) {
        if ("object" != typeof e || e.length < 1 || e.result && 32 === e.result) return $.mobile.loading("hide"), void S();
        try {
            c = JSON.parse(c.replace(/,\s*inf/g, ""))
        } catch (e) {
            c = []
        }
        T = e, i = $.isEmptyObject(t) ? [] : t, c = $.isEmptyObject(n) ? [] : n, o(), exportObj(".export_logs", T), $.mobile.loading("hide")
    }

    function r() {
        $.mobile.loading("hide"), w.empty().hide(), y.show().html(_("Error retrieving log data. Please refresh to try again."))
    }

    function l() {
        return "start=" + u().start.getTime() / 1e3 + "&end=" + (u().end.getTime() / 1e3 + 86340)
    }
    var v, e, t, b = $("<div data-role='page' id='logs'><div class='ui-content' role='main'><fieldset data-role='controlgroup' data-type='horizontal' data-mini='true' class='log_type'><input data-mini='true' type='radio' name='log_type' id='log_timeline' value='timeline'><label for='log_timeline'>" + _("Timeline") + "</label><input data-mini='true' type='radio' name='log_type' id='log_table' value='table'><label for='log_table'>" + _("Table") + "</label></fieldset><fieldset data-role='collapsible' data-mini='true' id='log_options' class='center'><legend>" + _("Options") + "</legend><fieldset data-role='controlgroup' data-type='horizontal' id='table_sort'><p class='tight'>" + _("Grouping:") + "</p><input data-mini='true' type='radio' name='table-group' id='table-sort-day' value='day' checked='checked'><label for='table-sort-day'>" + _("Day") + "</label><input data-mini='true' type='radio' name='table-group' id='table-sort-station' value='station'><label for='table-sort-station'>" + _("Station") + "</label></fieldset><div class='ui-field-contain'><label for='log_start'>" + _("Start:") + "</label><input data-mini='true' type='date' id='log_start'><label for='log_end'>" + _("End:") + "</label><input data-mini='true' type='date' id='log_end'></div><a data-role='button' data-icon='action' class='export_logs' href='#' data-mini='true'>" + _("Export") + "</a><a data-role='button' class='red clear_logs' href='#' data-mini='true' data-icon='alert'>" + _("Clear Logs") + "</a></fieldset><div id='logs_list' class='center'></div></div></div>"),
        y = b.find("#logs_list"),
        w = b.find("#table_sort"),
        k = b.find("#log_options"),
        T = [],
        i = [],
        c = [],
        o = function() {
            b.find("#log_table").prop("checked") ? a() : b.find("#log_timeline").prop("checked") && n()
        },
        n = function() {
            if (T.length < 1) S();
            else {
                w.hide(), y.show(), k.collapsible("collapse");

                function e() {
                    l.redraw()
                }

                function t() {
                    $.mobile.window.off("resize", e)
                }
                var n = m("timeline"),
                    i = g(n[1], "timeline"),
                    o = n[0].concat(i[1]),
                    a = i[2],
                    s = {
                        width: "100%",
                        editable: !1,
                        axisOnTop: !0,
                        eventMargin: 10,
                        eventMarginAxis: 0,
                        min: u().start,
                        max: new Date(u().end.getTime() + 8634e4),
                        selectable: !1,
                        showMajorLabels: !1,
                        groupsChangeable: !1,
                        showNavigation: !1,
                        groupsOrder: "none",
                        groupMinHeight: 20,
                        zoomMin: 6e4
                    },
                    r = [];
                y.on("swiperight swipeleft", function(e) {
                    e.stopImmediatePropagation()
                }), $.each(o, function() {
                    r[this.group] = this.shortname
                });
                var l = new links.Timeline(y.get(0), s);
                $.mobile.window.on("resize", e), b.one("pagehide", t), b.find("input:radio[name='log_type']").one("change", t), l.draw(o), y.find(".timeline-groups-text").each(function() {
                    this.setAttribute("data-shortname", r[this.textContent])
                }), y.prepend(x(a))
            }
        },
        a = function() {
            if (T.length < 1) S();
            else {
                w.show(), y.show();
                var e, t, n, i = b.find("input:radio[name='table-group']:checked").val(),
                    o = m("table", i),
                    a = o[0],
                    s = g(o[1]),
                    r = [],
                    l = s[0],
                    c = s[1],
                    u = s[2],
                    d = "<table><thead><tr><th data-priority='1'>" + _("Runtime") + "</th><th data-priority='2'>" + ("station" === i ? _("Date/Time") : _("Time") + "</th><th>" + _("Station")) + "</th></tr></thead><tbody>",
                    p = x(u) + "<div data-role='collapsible-set' data-inset='true' data-theme='b' data-collapsed-icon='arrow-d' data-expanded-icon='arrow-u'>",
                    h = 0;
                for (e in a)
                    if (a.hasOwnProperty(e)) {
                        if (0 === (t = a[e].length)) continue;
                        for (r[h] = "<div data-role='collapsible' data-collapsed='true'><h2>" + (checkOSVersion(210) && "day" === i ? "<a class='ui-btn red ui-btn-corner-all delete-day day-" + e + "'>" + _("delete") + "</a>" : "") + "<div class='ui-btn-up-c ui-btn-corner-all custom-count-pos'>" + t + " " + _(1 === t ? "run" : "runs") + "</div>" + ("station" === i ? v[e] : dateToString(new Date(1e3 * e * 60 * 60 * 24)).slice(0, -9)) + "</h2>", l[e] && (r[h] += "<span style='border:none' class='" + (100 !== l[e] ? l[e] < 100 ? "green " : "red " : "") + "ui-body ui-body-a'>" + _("Average") + " " + _("Water Level") + ": " + l[e] + "%</span>"), c[e] && (r[h] += "<span style='border:none' class='ui-body ui-body-a'>" + _("Total Water Used") + ": " + c[e] + " L</span>"), r[h] += d, n = 0; n < a[e].length; n++) {
                            var f = new Date(a[e][n][0]);
                            r[h] += "<tr><td>" + a[e][n][1] + "</td><td>" + ("station" === i ? dateToString(f, !1) : pad(f.getHours()) + ":" + pad(f.getMinutes()) + ":" + pad(f.getSeconds()) + "</td><td>" + v[a[e][n][2]]) + "</td></tr>"
                        }
                        r[h] += "</tbody></table></div>", h++
                    }
                "day" === i && r.reverse(), k.collapsible("collapse"), y.html(p + r.join("") + "</div>").enhanceWithin(), y.find(".delete-day").on("click", function() {
                    var e, t;
                    return $.each(this.className.split(" "), function() {
                        if (0 === this.indexOf("day-")) return e = this.split("day-")[1], !1
                    }), t = dateToString(new Date(1e3 * e * 60 * 60 * 24)).slice(0, -9), areYouSure(_("Are you sure you want to ") + _("delete") + " " + t + "?", "", function() {
                        $.mobile.loading("show"), sendToOS("/dl?pw=&day=" + e).done(function() {
                            C(), showerror(t + " " + _("deleted"))
                        })
                    }), !1
                }), fixInputClick(y)
            }
        },
        x = function(e) {
            if (0 === e.totalCount || 0 === e.totalRuntime) return "";
            var t = void 0 !== e.avgWaterLevel;
            return "<div class='ui-body-a smaller' id='logs_summary'><div><span class='bold'>" + _("Total Station Events") + "</span>: " + e.totalCount + "</div><div><span class='bold'>" + _("Total Runtime") + "</span>: " + dhms2str(sec2dhms(e.totalRuntime)) + "</div>" + (t ? "<div><span class='bold'>" + _("Average") + " " + _("Water Level") + "</span>: <span class='" + (100 !== e.avgWaterLevel ? e.avgWaterLevel < 100 ? "green-text" : "red-text" : "") + "'>" + e.avgWaterLevel + "%</span></div>" : "") + (void 0 !== e.totalVolume && 0 < e.totalVolume ? "<div><span class='bold'>" + _("Total Water Used") + "</span>: " + e.totalVolume + " L" + (t && e.avgWaterLevel < 100 ? " (<span class='green-text'>" + (e.totalVolume - e.totalVolume * (e.avgWaterLevel / 100)).toFixed(2) + "L saved</span>)" : "") + "</div>" : "") + "</div>"
        },
        S = function() {
            T = [], k.collapsible("expand"), w.hide(), y.show().html(_("No entries found in the selected date range"))
        },
        u = function() {
            var e = p.val().split("-"),
                t = h.val().split("-");
            return {
                start: new Date(e[0], e[1] - 1, e[2]),
                end: new Date(t[0], t[1] - 1, t[2])
            }
        },
        C = function() {
            var e = u().end.getTime() / 1e3,
                t = u().start.getTime() / 1e3;
            if (e < t) return S(), void showerror(_("Start time cannot be greater than end time"));
            var n = 0;
            if ($.mobile.loading("show"), 3154e4 < e - t) {
                showerror(_("The requested time span exceeds the maxiumum of 1 year and has been adjusted"), 3500);
                var i = u().start;
                i.setFullYear(i.getFullYear() + 1), $("#log_end").val(i.getFullYear() + "-" + pad(i.getMonth() + 1) + "-" + pad(i.getDate())), n = 500
            }
            var o = $.Deferred().resolve(),
                a = $.Deferred().resolve();
            checkOSVersion(211) && (o = sendToOS("/jl?pw=&type=wl&" + l(), "json")), checkOSVersion(216) && (a = sendToOS("/jl?pw=&type=fl&" + l())), setTimeout(function() {
                $.when(sendToOS("/jl?pw=&" + l(), "json"), o, a).then(s, r)
            }, n)
        },
        d = window.innerWidth < 640,
        p = b.find("#log_start"),
        h = b.find("#log_end");
    return b.find(".clear_logs").on("click", function() {
            return clearLogs(C), !1
        }), isiOS ? p.add(h).on("blur", function() {
            b.hasClass("ui-page-active") && C()
        }) : p.add(h).change(function() {
            clearTimeout(e), e = setTimeout(C, 1e3)
        }), w.find("input[name='table-group']").change(function() {
            a()
        }), b.find("input:radio[name='log_type']").change(o), b.on({
            pagehide: function() {
                b.detach()
            },
            pageshow: C
        }), b.find("#log_timeline").prop("checked", !d), b.find("#log_table").prop("checked", d),
        function() {
            var e = checkOSVersion(219) ? [3 === controller.options.sn1t ? _("Soil Sensor") : _("Rain Sensor"), 3 === controller.options.sn2t ? _("Soil Sensor") : _("Rain Sensor"), _("Rain Delay")] : [_("Rain Sensor"), _("Rain Delay")];
            if (v = $.merge($.merge([], controller.stations.snames), e), b.find(".clear_logs").toggleClass("hidden", !isOSPi() && !checkOSVersion(210)), "" === p.val() || "" === h.val()) {
                var t = new Date(1e3 * controller.settings.devt);
                p.val(new Date(t.getTime() - 6048e5).toISOString().slice(0, 10)), h.val(t.toISOString().slice(0, 10))
            }
            changeHeader({
                title: _("Logs"),
                leftBtn: {
                    icon: "carat-l",
                    text: _("Back"),
                    class: "ui-toolbar-back-btn",
                    on: goBack
                },
                rightBtn: {
                    icon: "refresh",
                    text: _("Refresh"),
                    on: C
                }
            }), $("#logs").remove(), $.mobile.pageContainer.append(b)
        }
}();

function clearLogs(t) {
    areYouSure(_("Are you sure you want to clear ALL your log data?"), "", function() {
        var e = isOSPi() ? "/cl?pw=" : "/dl?pw=&day=all";
        $.mobile.loading("show"), sendToOS(e).done(function() {
            "function" == typeof t && t(), showerror(_("Logs have been cleared"))
        })
    })
}

function resetAllOptions(t) {
    areYouSure(_("Are you sure you want to delete all settings and return to the default settings?"), "", function() {
        var e;
        isOSPi() ? e = "otz=32&ontp=1&onbrd=0&osdt=0&omas=0&omton=0&omtoff=0&orst=1&owl=100&orlp=0&ouwt=0&olg=1&oloc=Boston,MA" : transformKeysinString(e = "o1=32&o2=1&o3=1&o12=80&o13=0&o15=0&o17=0&o18=0&o19=0&o20=0&o22=1&o23=100&o26=0&o27=110&o28=100&o29=15&o30=0&o31=0&o32=50&o33=97&o34=210&o35=169&o36=1&o37=0&o38=0&o39=0&loc=Boston,MA&wto=%22key%22%3A%22%22"), sendToOS("/co?pw=&" + e).done(function() {
            "function" == typeof t && t(), updateController(updateWeather)
        })
    })
}
var getPrograms = function() {
    var t, n = $("<div data-role='page' id='programs'><div class='ui-content' role='main' id='programs_list'></div></div>");

    function i() {
        var e = $(makeAllPrograms());
        e.find("[id^=program-]").on({
            collapsiblecollapse: function() {
                $(this).find(".ui-collapsible-content").empty()
            },
            collapsiblebeforecollapse: function(e) {
                var t = $(this),
                    n = t.find(".hasChanges");
                n.length && (areYouSure(_("Do you want to save your changes?"), "", function() {
                    n.removeClass("hasChanges").click(), t.collapsible("collapse")
                }, function() {
                    n.removeClass("hasChanges"), t.collapsible("collapse")
                }), e.preventDefault())
            },
            collapsibleexpand: function() {
                expandProgram($(this))
            }
        }), checkOSVersion(210) && e.find(".move-up").removeClass("hidden").on("click", function() {
            var e = $(this).parents("fieldset"),
                t = parseInt(e.attr("id").split("-")[1]);
            return $.mobile.loading("show"), sendToOS("/up?pw=&pid=" + t).done(function() {
                updateControllerPrograms(function() {
                    $.mobile.loading("hide"), n.trigger("programrefresh")
                })
            }), !1
        }), e.find(".program-copy").on("click", function() {
            return changePage("#addprogram", {
                copyID: parseInt($(this).parents("fieldset").attr("id").split("-")[1])
            }), !1
        }), n.find("#programs_list").html(e.enhanceWithin())
    }
    return n.on("programrefresh", i).on("pagehide", function() {
            n.detach()
        }).on("pagebeforeshow", function() {
            updateProgramHeader(), "number" != typeof t && 1 === controller.programs.pd.length && (t = 0), "number" == typeof t && (n.find("fieldset[data-collapsed='false']").collapsible("collapse"), $("#program-" + t).collapsible("expand"))
        }),
        function(e) {
            t = e, changeHeader({
                title: _("Programs"),
                leftBtn: {
                    icon: "carat-l",
                    text: _("Back"),
                    class: "ui-toolbar-back-btn",
                    on: checkChangesBeforeBack
                },
                rightBtn: {
                    icon: "plus",
                    text: _("Add"),
                    on: function() {
                        checkChanges(function() {
                            changePage("#addprogram")
                        })
                    }
                }
            }), i(), $("#programs").remove(), $.mobile.pageContainer.append(n)
        }
}();

function expandProgram(t) {
    var o = parseInt(t.attr("id").split("-")[1]);
    t.find(".ui-collapsible-content").html(makeProgram(o)).enhanceWithin().on("change input click", function(e) {
        "click" === e.type && "BUTTON" !== e.target.tagName || ($(this).off("change input click"), t.find("[id^='submit-']").addClass("hasChanges"))
    }), t.find("[id^='submit-']").on("click", function() {
        return submitProgram(o), !1
    }), t.find("[id^='delete-']").on("click", function() {
        return deleteProgram(o), !1
    }), t.find("[id^='run-']").on("click", function() {
        return areYouSure(_("Are you sure you want to start " + (checkOSVersion(210) ? controller.programs.pd[o][5] : "Program " + o) + " now?"), "", function() {
            function t() {
                n.push(0), submitRunonce(n)
            }
            var n = [];
            if (checkOSVersion(210)) {
                if (n = controller.programs.pd[o][4], controller.programs.pd[o][0] >> 1 & 1) return areYouSure(_("Do you wish to apply the current watering level?"), "", function() {
                    for (var e = n.length - 1; 0 <= e; e--) n[e] = parseInt(n[e] * (controller.options.wl / 100));
                    t()
                }, t), !1
            } else {
                var e = parseInt($("#duration-" + o).val()),
                    i = $("[id^='station_'][id$='-" + o + "']");
                $.each(i, function() {
                    $(this).is(":checked") ? n.push(e) : n.push(0)
                })
            }
            t()
        }), !1
    })
}

function readProgram(e) {
    return checkOSVersion(210) ? readProgram21(e) : readProgram183(e)
}

function readProgram183(e) {
    var t = e[1],
        n = e[2],
        i = !1,
        o = !1,
        a = !1,
        s = "",
        r = "",
        l = {};
    l.en = e[0];
    for (var c = 0; c < controller.programs.nboards; c++)
        for (var u = e[7 + c], d = 0; d < 8; d++) r += u & 1 << d ? "1" : "0";
    if (l.stations = r, l.duration = e[6], l.start = e[3], l.end = e[4], l.interval = e[5], 128 & t && 1 < n) s = [n, 127 & t], a = !0;
    else {
        for (var p = 0; p < 7; p++) s += t & 1 << p ? "1" : "0";
        128 & t && 0 === n && (i = !0), 128 & t && 1 === n && (o = !0)
    }
    return l.days = s, l.is_even = i, l.is_odd = o, l.is_interval = a, l
}

function readProgram21(e) {
    var t = e[1],
        n = e[2],
        i = e[0] >> 2 & 3,
        o = e[0] >> 4 & 3,
        a = e[0] >> 6 & 1,
        s = "",
        r = {
            repeat: 0,
            interval: 0
        };
    if (r.en = e[0] >> 0 & 1, r.weather = e[0] >> 1 & 1, r.is_even = 2 == i, r.is_odd = 1 == i, r.is_interval = 3 == o, r.stations = e[4], r.name = e[5], 0 == a ? (r.start = e[3][0], r.repeat = e[3][1], r.interval = e[3][2]) : 1 == a && (r.start = e[3]), 3 == o) s = [n, t];
    else if (0 == o)
        for (var l = 0; l < 7; l++) s += t & 1 << l ? "1" : "0";
    return r.days = s, r
}

function getStartTime(e, t) {
    var n = 2047 & e,
        i = 0,
        o = getSunTimes(t);
    if (e < 0) return e;
    if (e >> 13 & 1) i = 1;
    else if (1 & !(e >> 14)) return e;
    return e >> 12 & 1 && (n = -n), e = o[i], (e += n) < 0 ? e = 0 : 1440 < e && (e = 1440), e
}

function readStartTime(e) {
    var t = 2047 & e,
        n = _("Sunrise");
    if (e >> 13 & 1) n = _("Sunset");
    else if (1 & !(e >> 14)) return minutesToTime(e);
    return e >> 12 & 1 && (t = -t), n + (0 !== t ? (0 < t ? "+" : "") + dhms2str(sec2dhms(60 * t)) : "")
}

function pidname(e) {
    var t = _("Program") + " " + e;
    return 255 === e || 99 === e ? t = _("Manual program") : 254 === e || 98 === e ? t = _("Run-once program") : checkOSVersion(210) && e <= controller.programs.pd.length && (t = controller.programs.pd[e - 1][5]), t
}

function updateProgramHeader() {
    $("#programs_list").find("[id^=program-]").each(function(e, t) {
        var n = $(t).find(".ui-collapsible-heading-toggle");
        (checkOSVersion(210) ? 1 & controller.programs.pd[e][0] : controller.programs.pd[e][0]) ? n.removeClass("red"): n.addClass("red")
    })
}

function makeAllPrograms() {
    if (0 === controller.programs.pd.length) return "<p class='center'>" + _("You have no programs currently added. Tap the Add button on the top right corner to get started.") + "</p>";
    for (var e, t = "<p class='center'>" + _("Click any program below to expand/edit. Be sure to save changes.") + "</p><div data-role='collapsible-set'>", n = 0; n < controller.programs.pd.length; n++) e = _("Program") + " " + (n + 1), checkOSVersion(210) && (e = controller.programs.pd[n][5]), t += "<fieldset id='program-" + n + "' data-role='collapsible'><h3><a " + (0 < n ? "" : "style='visibility:hidden' ") + "class='hidden ui-btn ui-btn-icon-notext ui-icon-arrow-u ui-btn-corner-all move-up'></a><a class='ui-btn ui-btn-corner-all program-copy'>" + _("copy") + "</a><span class='program-name'>" + e + "</span></h3>", t += "</fieldset>";
    return t + "</div>"
}

function makeProgram(e, t) {
    return checkOSVersion(210) ? makeProgram21(e, t) : makeProgram183(e, t)
}

function makeProgram183(e, t) {
    var n, i, o, a, s, r, l = [_("Monday"), _("Tuesday"), _("Wednesday"), _("Thursday"), _("Friday"), _("Saturday"), _("Sunday")],
        c = "",
        u = t ? "new" : e;
    if ("string" == typeof(s = "new" === e ? {
            en: 0,
            weather: 0,
            is_interval: 0,
            is_even: 0,
            is_odd: 0,
            duration: 0,
            interval: 0,
            start: 0,
            end: 0,
            days: [0, 0]
        } : readProgram(controller.programs.pd[e])).days)
        for (i = (n = s.days.split("")).length; i--;) n[i] = 0 | n[i];
    else n = [0, 0, 0, 0, 0, 0, 0];
    if (void 0 !== s.stations)
        for (i = (a = s.stations.split("")).length - 1; 0 <= i; i--) a[i] = 0 | a[i];
    for (c += "<label for='en-" + u + "'><input data-mini='true' type='checkbox' " + (s.en || "new" === e ? "checked='checked'" : "") + " name='en-" + u + "' id='en-" + u + "'>" + _("Enabled") + "</label>", c += "<fieldset data-role='controlgroup' data-type='horizontal' class='center'>", c += "<input data-mini='true' type='radio' name='rad_days-" + u + "' id='days_week-" + u + "' value='days_week-" + u + "' " + (s.is_interval ? "" : "checked='checked'") + "><label for='days_week-" + u + "'>" + _("Weekly") + "</label>", c += "<input data-mini='true' type='radio' name='rad_days-" + u + "' id='days_n-" + u + "' value='days_n-" + u + "' " + (s.is_interval ? "checked='checked'" : "") + "><label for='days_n-" + u + "'>" + _("Interval") + "</label>", c += "</fieldset><div id='input_days_week-" + u + "' " + (s.is_interval ? "style='display:none'" : "") + ">", c += "<div class='center'><p class='tight'>" + _("Restrictions") + "</p><select data-inline='true' data-iconpos='left' data-mini='true' id='days_rst-" + u + "'>", c += "<option value='none' " + (s.is_even || s.is_odd ? "" : "selected='selected'") + ">" + _("None") + "</option>", c += "<option value='odd' " + (!s.is_even && s.is_odd ? "selected='selected'" : "") + ">" + _("Odd Days Only") + "</option>", c += "<option value='even' " + (!s.is_odd && s.is_even ? "selected='selected'" : "") + ">" + _("Even Days Only") + "</option>", c += "</select></div>", c += "<div class='center'><p class='tight'>" + _("Days of the Week") + "</p><select " + (560 < $.mobile.window.width() ? "data-inline='true' " : "") + "data-iconpos='left' data-mini='true' multiple='multiple' data-native-menu='false' id='d-" + u + "'><option>" + _("Choose day(s)") + "</option>", o = 0; o < l.length; o++) c += "<option " + (!s.is_interval && n[o] ? "selected='selected'" : "") + " value='" + o + "'>" + l[o] + "</option>";
    for (c += "</select></div></div>", c += "<div " + (s.is_interval ? "" : "style='display:none'") + " id='input_days_n-" + u + "' class='ui-grid-a'>", c += "<div class='ui-block-a'><label class='center' for='every-" + u + "'>" + _("Interval (Days)") + "</label><input data-wrapper-class='pad_buttons' data-mini='true' type='number' name='every-" + u + "' pattern='[0-9]*' id='every-" + u + "' value='" + s.days[0] + "'></div>", c += "<div class='ui-block-b'><label class='center' for='starting-" + u + "'>" + _("Starting In") + "</label><input data-wrapper-class='pad_buttons' data-mini='true' type='number' name='starting-" + u + "' pattern='[0-9]*' id='starting-" + u + "' value='" + s.days[1] + "'></div>", c += "</div>", c += "<fieldset data-role='controlgroup'><legend>" + _("Stations:") + "</legend>", o = 0; o < controller.stations.snames.length; o++) c += "<label for='station_" + o + "-" + u + "'><input " + (isStationDisabled(o) ? "data-wrapper-class='station-hidden hidden' " : "") + "data-mini='true' type='checkbox' " + (void 0 !== a && a[o] ? "checked='checked'" : "") + " name='station_" + o + "-" + u + "' id='station_" + o + "-" + u + "'>" + controller.stations.snames[o] + "</label>";
    return c += "</fieldset>", c += "<fieldset data-role='controlgroup' data-type='horizontal' class='center'>", c += "<button class='ui-btn ui-mini' name='s_checkall-" + u + "' id='s_checkall-" + u + "'>" + _("Check All") + "</button>", c += "<button class='ui-btn ui-mini' name='s_uncheckall-" + u + "' id='s_uncheckall-" + u + "'>" + _("Uncheck All") + "</button>", c += "</fieldset>", c += "<div class='ui-grid-a'>", c += "<div class='ui-block-a'><label class='center' for='start-" + u + "'>" + _("Start Time") + "</label><button class='timefield pad_buttons' data-mini='true' id='start-" + u + "' value='" + s.start + "'>" + minutesToTime(s.start) + "</button></div>", c += "<div class='ui-block-b'><label class='center' for='end-" + u + "'>" + _("End Time") + "</label><button class='timefield pad_buttons' data-mini='true' id='end-" + u + "' value='" + s.end + "'>" + minutesToTime(s.end) + "</button></div>", c += "</div>", c += "<div class='ui-grid-a'>", c += "<div class='ui-block-a'><label class='pad_buttons center' for='duration-" + u + "'>" + _("Station Duration") + "</label><button class='pad_buttons' data-mini='true' name='duration-" + u + "' id='duration-" + u + "' value='" + s.duration + "'>" + dhms2str(sec2dhms(s.duration)) + "</button></div>", c += "<div class='ui-block-b'><label class='pad_buttons center' for='interval-" + u + "'>" + _("Program Interval") + "</label><button class='pad_buttons' data-mini='true' name='interval-" + u + "' id='interval-" + u + "' value='" + 60 * s.interval + "'>" + dhms2str(sec2dhms(60 * s.interval)) + "</button></div>", c += "</div>", !0 === t || "new" === e ? c += "<input data-mini='true' data-icon='check' type='submit' data-theme='b' name='submit-" + u + "' id='submit-" + u + "' value='" + _("Save New Program") + "'>" : (c += "<button data-mini='true' data-icon='check' data-theme='b' name='submit-" + u + "' id='submit-" + u + "'>" + _("Save Changes to Program") + " " + (e + 1) + "</button>", c += "<button data-mini='true' data-icon='arrow-r' name='run-" + u + "' id='run-" + u + "'>" + _("Run Program") + " " + (e + 1) + "</button>", c += "<button data-mini='true' data-icon='delete' class='red bold' data-theme='b' name='delete-" + u + "' id='delete-" + u + "'>" + _("Delete Program") + " " + (e + 1) + "</button>"), (r = $(c)).find("input[name^='rad_days']").on("change", function() {
        var e, t = $(this).val().split("-")[0];
        e = "n" === (t = t.split("_")[1]) ? "week" : "n", $("#input_days_" + t + "-" + u).show(), $("#input_days_" + e + "-" + u).hide()
    }), r.find("[id^='duration-'],[id^='interval-']").on("click", function() {
        var t = $(this),
            e = t.attr("id").match("interval") ? 1 : 0,
            n = r.find("label[for='" + t.attr("id") + "']").text();
        showDurationBox({
            seconds: t.val(),
            title: n,
            callback: function(e) {
                t.val(e), t.text(dhms2str(sec2dhms(e)))
            },
            maximum: e ? 86340 : 65535,
            granularity: e
        })
    }), r.find(".timefield").on("click", function() {
        var t = $(this),
            e = r.find("label[for='" + t.attr("id") + "']").text();
        showTimeInput({
            minutes: t.val(),
            title: e,
            callback: function(e) {
                t.val(e), t.text(minutesToTime(e))
            }
        })
    }), r.find("[id^='s_checkall-']").on("click", function() {
        return r.find("[id^='station_'][id$='-" + u + "']").prop("checked", !0).checkboxradio("refresh"), !1
    }), r.find("[id^='s_uncheckall-']").on("click", function() {
        return r.find("[id^='station_'][id$='-" + u + "']").prop("checked", !1).checkboxradio("refresh"), !1
    }), fixInputClick(r), r
}

function makeProgram21(e, t) {
    var n, i, o, a, s, r, l, c, u = [_("Monday"), _("Tuesday"), _("Wednesday"), _("Thursday"), _("Friday"), _("Saturday"), _("Sunday")],
        d = "",
        p = t ? "new" : e;
    if ("string" == typeof(a = "new" === e ? {
            name: "",
            en: 0,
            weather: 0,
            is_interval: 0,
            is_even: 0,
            is_odd: 0,
            interval: 0,
            start: 0,
            days: [0, 0],
            repeat: 0,
            stations: []
        } : readProgram(controller.programs.pd[e])).days)
        for (i = (n = a.days.split("")).length; i--;) n[i] = 0 | n[i];
    else n = [0, 0, 0, 0, 0, 0, 0];
    for (r = "object" == typeof a.start ? a.start : [a.start, -1, -1, -1], d += "<div style='margin-top:5px' class='ui-corner-all'>", d += "<div class='ui-bar ui-bar-a'><h3>" + _("Basic Settings") + "</h3></div>", d += "<div class='ui-body ui-body-a center'>", d += "<label for='name-" + p + "'>" + _("Program Name") + "</label><input data-mini='true' type='text' name='name-" + p + "' id='name-" + p + "' maxlength='" + controller.programs.pnsize + "' placeholder='" + _("Program") + " " + (controller.programs.pd.length + 1) + "' value='" + a.name + "'>", d += "<label for='en-" + p + "'><input data-mini='true' type='checkbox' " + (a.en || "new" === e ? "checked='checked'" : "") + " name='en-" + p + "' id='en-" + p + "'>" + _("Enabled") + "</label>", d += "<label for='uwt-" + p + "'><input data-mini='true' type='checkbox' " + (a.weather ? "checked='checked'" : "") + " name='uwt-" + p + "' id='uwt-" + p + "'>" + _("Use Weather Adjustment") + "</label>", d += "<label class='center' for='start_1-" + p + "'>" + _("Start Time") + "</label><button class='timefield' data-mini='true' id='start_1-" + p + "' value='" + r[0] + "'>" + readStartTime(r[0]) + "</button>", d += "</div></div></div></div>", d += "<div style='margin-top:10px' class='ui-corner-all'>", d += "<div class='ui-bar ui-bar-a'><h3>" + _("Program Type") + "</h3></div>", d += "<div class='ui-body ui-body-a'>", d += "<fieldset data-role='controlgroup' data-type='horizontal' class='center'>", d += "<input data-mini='true' type='radio' name='rad_days-" + p + "' id='days_week-" + p + "' value='days_week-" + p + "' " + (a.is_interval ? "" : "checked='checked'") + "><label for='days_week-" + p + "'>" + _("Weekly") + "</label>", d += "<input data-mini='true' type='radio' name='rad_days-" + p + "' id='days_n-" + p + "' value='days_n-" + p + "' " + (a.is_interval ? "checked='checked'" : "") + "><label for='days_n-" + p + "'>" + _("Interval") + "</label>", d += "</fieldset>", d += "<div id='input_days_week-" + p + "' " + (a.is_interval ? "style='display:none'" : "") + ">", d += "<div class='center'><p class='tight'>" + _("Days of the Week") + "</p><select " + (560 < $.mobile.window.width() ? "data-inline='true' " : "") + "data-iconpos='left' data-mini='true' multiple='multiple' data-native-menu='false' id='d-" + p + "'><option>" + _("Choose day(s)") + "</option>", o = 0; o < u.length; o++) d += "<option " + (!a.is_interval && n[o] ? "selected='selected'" : "") + " value='" + o + "'>" + u[o] + "</option>";
    d += "</select></div></div>", d += "<div " + (a.is_interval ? "" : "style='display:none'") + " id='input_days_n-" + p + "' class='ui-grid-a'>", d += "<div class='ui-block-a'><label class='center' for='every-" + p + "'>" + _("Interval (Days)") + "</label><input data-wrapper-class='pad_buttons' data-mini='true' type='number' name='every-" + p + "' pattern='[0-9]*' id='every-" + p + "' value='" + a.days[0] + "'></div>", d += "<div class='ui-block-b'><label class='center' for='starting-" + p + "'>" + _("Starting In") + "</label><input data-wrapper-class='pad_buttons' data-mini='true' type='number' name='starting-" + p + "' pattern='[0-9]*' id='starting-" + p + "' value='" + a.days[1] + "'></div>", d += "</div>", d += "<div class='center'><p class='tight'>" + _("Restrictions") + "</p><select data-inline='true' data-iconpos='left' data-mini='true' id='days_rst-" + p + "'>", d += "<option value='none' " + (a.is_even || a.is_odd ? "" : "selected='selected'") + ">" + _("None") + "</option>", d += "<option value='odd' " + (!a.is_even && a.is_odd ? "selected='selected'" : "") + ">" + _("Odd Days Only") + "</option>", d += "<option value='even' " + (!a.is_odd && a.is_even ? "selected='selected'" : "") + ">" + _("Even Days Only") + "</option>", d += "</select></div>", d += "</div></div>", d += "<div style='margin-top:10px' class='ui-corner-all'>", d += "<div class='ui-bar ui-bar-a'><h3>" + _("Stations") + "</h3></div>", d += "<div class='ui-body ui-body-a'>";
    var h = $("#programs").hasClass("show-hidden") ? "" : "' style='display:none";
    for (o = 0; o < controller.stations.snames.length; o++) isStationMaster(o) ? d += "<div class='ui-field-contain duration-input" + (isStationDisabled(o) ? " station-hidden" + h : "") + "'><label for='station_" + o + "-" + p + "'>" + controller.stations.snames[o] + ":</label><button disabled='true' data-mini='true' name='station_" + o + "-" + p + "' id='station_" + o + "-" + p + "' value='0'>" + _("Master") + "</button></div>" : (l = a.stations[o] || 0, d += "<div class='ui-field-contain duration-input" + (isStationDisabled(o) ? " station-hidden" + h : "") + "'><label for='station_" + o + "-" + p + "'>" + controller.stations.snames[o] + ":</label><button " + (0 < l ? "class='green' " : "") + "data-mini='true' name='station_" + o + "-" + p + "' id='station_" + o + "-" + p + "' value='" + l + "'>" + getDurationText(l) + "</button></div>");
    for (d += "</div></div>", d += "<div style='margin-top:10px' class='ui-corner-all'>", d += "<div class='ui-bar ui-bar-a'><h3>" + _("Additional Start Times") + "</h3></div>", d += "<div class='ui-body ui-body-a'>", d += "<fieldset data-role='controlgroup' data-type='horizontal' class='center'>", d += "<input data-mini='true' type='radio' name='stype-" + p + "' id='stype_repeat-" + p + "' value='stype_repeat-" + p + "' " + ("object" == typeof a.start ? "" : "checked='checked'") + "><label for='stype_repeat-" + p + "'>" + _("Repeating") + "</label>", d += "<input data-mini='true' type='radio' name='stype-" + p + "' id='stype_set-" + p + "' value='stype_set-" + p + "' " + ("object" == typeof a.start ? "checked='checked'" : "") + "><label for='stype_set-" + p + "'>" + _("Fixed") + "</label>", d += "</fieldset>", d += "<div " + ("object" == typeof a.start ? "style='display:none'" : "") + " id='input_stype_repeat-" + p + "'>", d += "<div class='ui-grid-a'>", d += "<div class='ui-block-a'><label class='pad_buttons center' for='interval-" + p + "'>" + _("Repeat Every") + "</label><button class='pad_buttons' data-mini='true' name='interval-" + p + "' id='interval-" + p + "' value='" + 60 * a.interval + "'>" + dhms2str(sec2dhms(60 * a.interval)) + "</button></div>", d += "<div class='ui-block-b'><label class='pad_buttons center' for='repeat-" + p + "'>" + _("Repeat Count") + "</label><button class='pad_buttons' data-mini='true' name='repeat-" + p + "' id='repeat-" + p + "' value='" + a.repeat + "'>" + a.repeat + "</button></div>", d += "</div></div>", d += "<table style='width:100%;" + ("object" == typeof a.start ? "" : "display:none") + "' id='input_stype_set-" + p + "'><tr><th class='center'>" + _("Enable") + "</th><th>" + _("Start Time") + "</th></tr>", o = 1; o < 4; o++) d += "<tr><td data-role='controlgroup' data-type='horizontal' class='use_master center'><label for='ust_" + (o + 1) + "'><input id='ust_" + (o + 1) + "' type='checkbox' " + ((c = -1 === r[o]) ? "" : "checked='checked'") + "></label></td>", d += "<td><button class='timefield' data-mini='true' type='time' id='start_" + (o + 1) + "-" + p + "' value='" + (c ? 0 : r[o]) + "'>" + readStartTime(c ? 0 : r[o]) + "</button></td></tr>";
    return d += "</table>", d += "</div></div>", !0 === t || "new" === e ? d += "<button data-mini='true' data-icon='check' data-theme='b' id='submit-" + p + "'>" + _("Save New Program") + "</button>" : (d += "<button data-mini='true' data-icon='check' data-theme='b' id='submit-" + p + "'>" + _("Save Changes to") + " <span class='program-name'>" + a.name + "</span></button>", d += "<button data-mini='true' data-icon='arrow-r' id='run-" + p + "'>" + _("Run") + " <span class='program-name'>" + a.name + "</span></button>", d += "<button data-mini='true' data-icon='delete' class='bold red' data-theme='b' id='delete-" + p + "'>" + _("Delete") + " <span class='program-name'>" + a.name + "</span></button>"), (s = $(d)).find("input[name^='rad_days'],input[name^='stype']").on("change", function() {
        var e = $(this).val().split("-")[0].split("_");
        $("[id^='input_" + e[0] + "_']").hide(), $("#input_" + e[0] + "_" + e[1] + "-" + p).show()
    }), s.find("[id^='interval-']").on("click", function() {
        var t = $(this),
            e = s.find("label[for='" + t.attr("id") + "']").text();
        showDurationBox({
            seconds: t.val(),
            title: e,
            callback: function(e) {
                t.val(e), t.text(dhms2str(sec2dhms(e)))
            },
            maximum: 86340,
            granularity: 1,
            preventCompression: !0
        })
    }), s.find(".timefield").on("click", function() {
        var t = $(this);
        showTimeInput({
            minutes: t.val(),
            title: _("Start Time"),
            showSun: !!checkOSVersion(213),
            callback: function(e) {
                t.val(e), t.text(readStartTime(e))
            }
        })
    }), s.find("[id^='repeat-']").on("click", function() {
        var t = $(this),
            e = s.find("label[for='" + t.attr("id") + "']").text();
        showSingleDurationInput({
            data: t.val(),
            title: e,
            label: _("Repeat Count"),
            callback: function(e) {
                t.val(e).text(e)
            },
            maximum: 1440
        })
    }), s.find("[id^=station_]").on("click", function() {
        var t = $(this),
            e = controller.stations.snames[t.attr("id").split("_")[1].split("-")[0]];
        showDurationBox({
            seconds: t.val(),
            title: e,
            callback: function(e) {
                t.val(e).addClass("green"), t.text(getDurationText(e)), 0 === e && t.removeClass("green")
            },
            maximum: 65535,
            showSun: !!checkOSVersion(214)
        })
    }), fixInputClick(s), s
}

function addProgram(e) {
    e = 0 <= e ? e : "new";
    var t = $("<div data-role='page' id='addprogram'><div class='ui-content' role='main' id='newprogram'><fieldset id='program-new'></fieldset></div></div>"),
        n = changeHeader({
            title: _("Add Program"),
            leftBtn: {
                icon: "carat-l",
                text: _("Back"),
                class: "ui-toolbar-back-btn",
                on: checkChangesBeforeBack
            },
            rightBtn: {
                icon: "check",
                text: _("Submit"),
                on: function() {
                    return submitProgram("new"), !1
                }
            }
        });
    t.find("#program-new").html(makeProgram(e, !0)).one("change input", function() {
        n.eq(2).prop("disabled", !1).addClass("hasChanges")
    }), t.find("[id^='submit-']").on("click", function() {
        return submitProgram("new"), !1
    }), t.one("pagehide", function() {
        t.remove()
    }), "string" == typeof e && n.eq(2).prop("disabled", !0), $("#addprogram").remove(), $.mobile.pageContainer.append(t)
}

function deleteProgram(e) {
    var t = pidname(parseInt(e) + 1);
    areYouSure(_("Are you sure you want to delete program") + " " + t + "?", "", function() {
        $.mobile.loading("show"), sendToOS("/dp?pw=&pid=" + e).done(function() {
            $.mobile.loading("hide"), updateControllerPrograms(function() {
                $("#programs").trigger("programrefresh"), showerror(_("Program") + " " + t + " " + _("deleted"))
            })
        })
    })
}

function submitProgram(e) {
    $("#program-" + e).find(".hasChanges").removeClass("hasChanges"), checkOSVersion(210) ? submitProgram21(e) : submitProgram183(e)
}

function submitProgram183(e) {
    var t, n, i, o = [],
        a = [0, 0],
        s = 0,
        r = $("#en-" + e).is(":checked") ? 1 : 0;
    if (o[0] = r, $("#days_week-" + e).is(":checked")) {
        for (t = null === (t = $("#d-" + e).val()) ? [] : parseIntArray(t), n = 0; n < 7; n++) - 1 !== $.inArray(n, t) && (a[0] |= 1 << n);
        if (0 === a[0]) return void showerror(_("Error: You have not selected any days of the week."));
        "odd" === $("#days_rst-" + e).val() ? (a[0] |= 128, a[1] = 1) : "even" === $("#days_rst-" + e).val() && (a[0] |= 128, a[1] = 0)
    } else if ($("#days_n-" + e).is(":checked")) {
        if (a[1] = parseInt($("#every-" + e).val(), 10), !(2 <= a[1] && a[1] <= 128)) return void showerror(_("Error: Interval days must be between 2 and 128."));
        if (a[0] = parseInt($("#starting-" + e).val(), 10), !(0 <= a[0] && a[0] < a[1])) return void showerror(_("Error: Starting in days wrong."));
        a[0] |= 128
    }
    if (o[1] = a[0], o[2] = a[1], o[3] = parseInt($("#start-" + e).val()), o[4] = parseInt($("#end-" + e).val()), o[3] > o[4]) showerror(_("Error: Start time must be prior to end time."));
    else {
        o[5] = parseInt($("#interval-" + e).val() / 60);
        var l = $("[id^=station_][id$=-" + e + "]").length / 8;
        o[6] = parseInt($("#duration-" + e).val());
        var c, u = [0];
        for (c = 0; c < l; c++)
            for (i = u[c] = 0; i < 8; i++) $("#station_" + (8 * c + i) + "-" + e).is(":checked") && (u[c] |= 1 << i, s = 1);
        o = JSON.stringify(o.concat(u)), 0 !== s ? ($.mobile.loading("show"), "new" === e ? sendToOS("/cp?pw=&pid=-1&v=" + o).done(function() {
            $.mobile.loading("hide"), updateControllerPrograms(function() {
                $.mobile.document.one("pageshow", function() {
                    showerror(_("Program added successfully"))
                }), goBack()
            })
        }) : sendToOS("/cp?pw=&pid=" + e + "&v=" + o).done(function() {
            $.mobile.loading("hide"), updateControllerPrograms(function() {
                updateProgramHeader()
            }), showerror(_("Program has been updated"))
        })) : showerror(_("Error: You have not selected any stations."))
    }
}

function submitProgram21(e, t) {
    var n, i, o, a, s = [],
        r = [0, 0],
        l = [0, 0, 0, 0],
        c = 0,
        u = 0;
    if (u |= ($("#en-" + e).is(":checked") ? 1 : 0) << 0, u |= ($("#uwt-" + e).is(":checked") ? 1 : 0) << 1, "odd" === $("#days_rst-" + e).val() ? u |= 4 : "even" === $("#days_rst-" + e).val() && (u |= 8), $("#days_n-" + e).is(":checked")) {
        if (u |= 48, r[1] = parseInt($("#every-" + e).val(), 10), !(2 <= r[1] && r[1] <= 128)) return void showerror(_("Error: Interval days must be between 2 and 128."));
        if (r[0] = parseInt($("#starting-" + e).val(), 10), !(0 <= r[0] && r[0] < r[1])) return void showerror(_("Error: Starting in days wrong."))
    } else if ($("#days_week-" + e).is(":checked")) {
        for (u |= 0, n = null === (n = $("#d-" + e).val()) ? [] : parseIntArray(n), i = 0; i < 7; i++) - 1 !== $.inArray(i, n) && (r[0] |= 1 << i);
        if (0 === r[0]) return void showerror(_("Error: You have not selected any days of the week."))
    }
    if ($("#stype_repeat-" + e).is(":checked")) u |= 0, l[0] = parseInt($("#start_1-" + e).val()), l[1] = parseInt($("#repeat-" + e).val()), l[2] = parseInt($("#interval-" + e).val() / 60);
    else if ($("#stype_set-" + e).is(":checked")) {
        u |= 64, $("[id^='start_'][id$='-" + e + "']").each(function(e, t) {
            var n = parseInt(t.value);
            ("number" != typeof n || 0 < e && !$("#ust_" + (e + 1)).is(":checked")) && (n = -1), l[e] = n
        })
    }
    var d = $("[id^=station_][id$=-" + e + "]"),
        p = [];
    d.each(function() {
        var e = parseInt(this.value);
        0 < parseInt(e) && (c = 1), p.push(e)
    }), s[0] = u, s[1] = r[0], s[2] = r[1], s[3] = l, s[4] = p, o = $("#name-" + e).val(), a = "&v=" + JSON.stringify(s) + "&name=" + encodeURIComponent(o), 0 !== c ? !t && $("#stype_repeat-" + e).is(":checked") && 0 < l[1] && calculateTotalRunningTime(p) > 60 * l[2] ? areYouSure(_("Warning: The repeat interval is less than the program run time."), _("Do you want to continue?"), function() {
        submitProgram21(e, !0)
    }) : t || 3 != (u >> 4 & 3) || 1 & r[1] || !(0 < (u >> 2 & 3)) ? ($.mobile.loading("show"), "new" === e ? sendToOS("/cp?pw=&pid=-1" + a).done(function() {
        $.mobile.loading("hide"), updateControllerPrograms(function() {
            $.mobile.document.one("pageshow", function() {
                showerror(_("Program added successfully"))
            }), goBack()
        })
    }) : sendToOS("/cp?pw=&pid=" + e + a).done(function() {
        $.mobile.loading("hide"), updateControllerPrograms(function() {
            updateProgramHeader(), $("#program-" + e).find(".program-name").text(o)
        }), showerror(_("Program has been updated"))
    })) : areYouSure(_("Warning: The use of odd/even restrictions with the selected interval day may result in the program not running at all."), _("Do you want to continue?"), function() {
        submitProgram21(e, !0)
    }) : showerror(_("Error: You have not selected any stations."))
}

function raindelay(e) {
    return $.mobile.loading("show"), sendToOS("/cv?pw=&rd=" + e / 3600).done(function() {
        $.mobile.loading("hide"), showLoading("#footer-running"), refreshStatus(), showerror(_("Rain delay has been successfully set"))
    }), !1
}

function getExportMethod() {
    var e = $("<div data-role='popup' data-theme='a'><div class='ui-bar ui-bar-a'>" + _("Select Export Method") + "</div><div data-role='controlgroup' class='tight'><a class='ui-btn hidden fileMethod'>" + _("File") + "</a><a class='ui-btn pasteMethod'>" + _("Email") + "</a><a class='ui-btn localMethod'>" + _("Internal (within app)") + "</a></div></div>"),
        t = encodeURIComponent(JSON.stringify(controller)),
        n = "OpenSprinkler Data Export on " + dateToString(new Date);
    isFileCapable && e.find(".fileMethod").removeClass("hidden").attr({
        href: "data:text/json;charset=utf-8," + t,
        download: "backup-" + (new Date).toLocaleDateString().replace(/\//g, "-") + ".json"
    }).on("click", function() {
        e.popup("close")
    });
    var i = "mailto:?subject=" + encodeURIComponent(n) + "&body=" + t;
    e.find(".pasteMethod").attr("href", i).on("click", function() {
        window.open(i), e.popup("close")
    }), e.find(".localMethod").on("click", function() {
        e.popup("close"), storage.set({
            backup: JSON.stringify(controller)
        }, function() {
            showerror(_("Backup saved on this device"))
        })
    }), openPopup(e, {
        positionTo: $("#sprinklers-settings").find(".export_config")
    })
}

function getImportMethod(e) {
    function t() {
        var t = $("<div data-role='popup' data-theme='a' id='paste_config'><p class='ui-bar'><textarea class='textarea' rows='10' placeholder='" + _("Paste your backup here") + "'></textarea><button data-mini='true' data-theme='b'>" + _("Import") + "</button></p></div>"),
            e = $.mobile.window.width();
        return t.find("button").on("click", function() {
            var e = t.find("textarea").val();
            if ("" !== e) try {
                e = JSON.parse($.trim(e).replace(/“|”|″/g, '"')), t.popup("close"), importConfig(e)
            } catch (e) {
                t.find("textarea").val(""), showerror(_("Unable to read the configuration file. Please check the file and try again."))
            }
        }), t.css("width", 600 < e ? .4 * e + "px" : "100%"), openPopup(t), !1
    }
    var n = $("<div data-role='popup' data-theme='a'><div class='ui-bar ui-bar-a'>" + _("Select Import Method") + "</div><div data-role='controlgroup' class='tight'><button class='hidden fileMethod'>" + _("File") + "</button><button class='pasteMethod'>" + _("Email (copy/paste)") + "</button><button class='hidden localMethod'>" + _("Internal (within app)") + "</button></div></div>");
    if (isFileCapable) n.find(".fileMethod").removeClass("hidden").on("click", function() {
        n.popup("close");
        var e = $("<input type='file' id='configInput' data-role='none' style='visibility:hidden;position:absolute;top:-50px;left:-50px'/>").on("change", function() {
            var e = this.files[0],
                t = new FileReader;
            "object" == typeof e && (t.onload = function(e) {
                try {
                    importConfig(JSON.parse($.trim(e.target.result)))
                } catch (e) {
                    showerror(_("Unable to read the configuration file. Please check the file and try again."))
                }
            }, t.readAsText(e))
        });
        return e.appendTo("#sprinklers-settings"), e.click(), !1
    });
    else if (!e) return void t();
    n.find(".pasteMethod").on("click", function() {
        return n.popup("close"), t(), !1
    }), e && n.find(".localMethod").removeClass("hidden").on("click", function() {
        return n.popup("close"), importConfig(JSON.parse(e)), !1
    }), openPopup(n, {
        positionTo: $("#sprinklers-settings").find(".import_config")
    })
}

function importConfig(d) {
    var e = "";
    "object" == typeof d && d.settings ? ((!checkOSVersion(210) || "object" != typeof d.options || d.options.hp0 === controller.options.hp0 && d.options.hp1 === controller.options.hp1) && d.options.dhcp === controller.options.dhcp && d.options.devid === controller.options.devid || (e = _("Warning: Network changes will be made and the device may no longer be accessible from this address.")), areYouSure(_("Are you sure you want to restore the configuration?"), e, function() {
        $.mobile.loading("show");

        function e(e) {
            return keyIndex[e] === n
        }
        var t, n, i, o, a = "/cs?pw=",
            s = "/co?pw=",
            u = isOSPi();
        for (t in d.options)
            if (d.options.hasOwnProperty(t) && keyIndex.hasOwnProperty(t)) {
                if (n = keyIndex[t], -1 !== $.inArray(n, [2, 14, 16, 21, 22, 25, 36]) && 0 === d.options[t]) continue;
                if (3 === n) {
                    checkOSVersion(210) && 1 === controller.options.dhcp && (s += "&o3=1");
                    continue
                }
                if (u && void 0 === (n = Object.keys(keyIndex).find(e))) continue;
                i = !0 === checkOSVersion(208) && "string" == typeof d.options[t] ? d.options[t].replace(/\s/g, "_") : d.options[t], s += "&o" + n + "=" + i
            } for (!u && "number" == typeof d.options.fwv && d.options.fwv < 211 && checkOSVersion(211) && (s += "&o36=1"), "object" == typeof d.settings.wto && checkOSVersion(215) && (s += "&wto=" + escapeJSON(d.settings.wto)), "string" == typeof d.settings.ifkey && checkOSVersion(217) && (s += "&ifkey=" + d.settings.ifkey), s += "&" + (u ? "o" : "") + "loc=" + d.settings.loc, t = 0; t < d.stations.snames.length; t++) o = !0 === checkOSVersion(208) ? d.stations.snames[t].replace(/\s/g, "_") : d.stations.snames[t], a += "&s" + t + "=" + encodeURIComponent(o);
        for (t = 0; t < d.stations.masop.length; t++) a += "&m" + t + "=" + d.stations.masop[t];
        if ("object" == typeof d.stations.masop2)
            for (t = 0; t < d.stations.masop2.length; t++) a += "&n" + t + "=" + d.stations.masop2[t];
        if ("object" == typeof d.stations.ignore_rain)
            for (t = 0; t < d.stations.ignore_rain.length; t++) a += "&i" + t + "=" + d.stations.ignore_rain[t];
        if ("object" == typeof d.stations.ignore_sn1)
            for (t = 0; t < d.stations.ignore_sn1.length; t++) a += "&j" + t + "=" + d.stations.ignore_sn1[t];
        if ("object" == typeof d.stations.ignore_sn2)
            for (t = 0; t < d.stations.ignore_sn2.length; t++) a += "&k" + t + "=" + d.stations.ignore_sn2[t];
        if ("object" == typeof d.stations.stn_dis)
            for (t = 0; t < d.stations.stn_dis.length; t++) a += "&d" + t + "=" + d.stations.stn_dis[t];
        if ("object" == typeof d.stations.stn_spe)
            for (t = 0; t < d.stations.stn_spe.length; t++) a += "&p" + t + "=" + d.stations.stn_spe[t];
        if ("object" == typeof d.stations.stn_seq)
            for (t = 0; t < d.stations.stn_seq.length; t++) a += "&q" + t + "=" + d.stations.stn_seq[t];
        else if (!u && "number" == typeof d.options.fwv && d.options.fwv < 211 && !checkOSVersion(211)) {
            var r;
            for (r = 0; r < d.settings.nbrd; r++) a += "&q" + r + "=" + (1 === d.options.seq ? 255 : 0)
        }
        if ("object" == typeof d.stations.act_relay)
            for (t = 0; t < d.stations.act_relay.length; t++) a += "&a" + t + "=" + d.stations.act_relay[t];
        d.special = d.special || {}, $.when(sendToOS(transformKeysinString(s)), sendToOS(a), sendToOS("/dp?pw=&pid=-1"), $.each(d.programs.pd, function(e, t) {
            var n = "";
            if (u && "number" == typeof d.options.fwv && 210 <= d.options.fwv) return showerror(_("Program data is newer than the device firmware and cannot be imported")), !1;
            if (!u && "number" == typeof d.options.fwv && 210 <= d.options.fwv && !checkOSVersion(210)) return showerror(_("Program data is newer than the device firmware and cannot be imported")), !1;
            if (!u && "number" == typeof d.options.fwv && 210 <= d.options.fwv && checkOSVersion(210) && (n = "&name=" + t[5], t = t.slice(0, 5)), !u && "number" == typeof d.options.fwv && d.options.fwv < 210 && checkOSVersion(210)) {
                var i, o, a, s = readProgram183(t),
                    r = t.length - 7,
                    l = [],
                    c = 0;
                for (c |= s.en << 0, s.is_even ? c |= 8 : s.is_odd ? c |= 4 : c |= 0, s.is_interval ? c |= 48 : c |= 0, c |= 0, t[0] = c, o = 0; o < r; o++)
                    for (i = t[7 + o], a = 0; a < 8; a++) l.push(i & 1 << a ? s.duration : 0);
                t[3] = [s.start, parseInt((s.end - s.start) / s.interval), s.interval, 0], t[4] = l, t = t.slice(0, 5), n = "&name=" + _("Program") + " " + (e + 1)
            }
            sendToOS("/cp?pw=&pid=-1&v=" + JSON.stringify(t) + n)
        }), $.each(d.special, function(e, t) {
            checkOSVersion(216) && sendToOS("/cs?pw=&sid=" + e + "&st=" + t.st + "&sd=" + encodeURIComponent(t.sd))
        })).then(function() {
            setTimeout(function() {
                updateController(function() {
                    $.mobile.loading("hide"), showerror(_("Backup restored to your device")), updateWeather(), goHome(!0)
                }, function() {
                    $.mobile.loading("hide"), networkFail()
                })
            }, 1500)
        }, function() {
            $.mobile.loading("hide"), showerror(_("Unable to import configuration."))
        })
    })) : showerror(_("Invalid configuration"))
}
var showAbout = function() {
    var e, t = $("<div data-role='page' id='about'><div class='ui-content' role='main'><ul data-role='listview' data-inset='true'><li><p>" + _("User manual for OpenSprinkler is available at") + " <a class='iab' target='_blank' href='https://openthings.freshdesk.com/support/solutions/folders/5000147083'>https://support.openthings.io</a></p></li></ul><ul data-role='listview' data-inset='true'><li><p>" + _("This is open source software: source code and changelog for this application can be found at") + " <a class='iab squeeze' target='_blank' href='https://github.com/OpenSprinkler/OpenSprinkler-App/'>https://github.com/OpenSprinkler/OpenSprinkler-App/</a></p><p>" + _("Open source attributions") + ": <a class='iab iabNoScale squeeze' target='_blank' href='https://github.com/OpenSprinkler/OpenSprinkler-App/wiki/List-of-Integrated-Libraries'>https://github.com/OpenSprinkler/OpenSprinkler-App/wiki/List-of-Integrated-Libraries</a></p></li></ul><p class='smaller'>" + _("App Version") + ": 2.1.7<br>" + _("Firmware") + ": <span class='firmware'></span><br><span class='hardwareLabel'>" + _("Hardware Version") + ":</span> <span class='hardware'></span></p></div></div>");
    return function() {
        e = void 0 === controller.options.hwv, t.find(".hardware").toggleClass("hidden", e).text(getHWVersion() + getHWType()), t.find(".hardwareLabel").toggleClass("hidden", e), t.find(".firmware").text(getOSVersion() + getOSMinorVersion()), t.one("pagehide", function() {
            t.detach()
        }), changeHeader({
            title: _("About"),
            leftBtn: {
                icon: "carat-l",
                text: _("Back"),
                class: "ui-toolbar-back-btn",
                on: goBack
            }
        }), $("#about").remove(), $.mobile.pageContainer.append(t)
    }
}();

function isRunning() {
    for (var e = 0; e < controller.status.length; e++)
        if (0 < controller.status[e] && 0 < controller.settings.ps[e][0]) return e;
    return -1
}

function stopStations(e) {
    $.mobile.loading("show"), sendToOS("/cv?pw=&rsn=1").done(function() {
        setTimeout(function() {
            $.mobile.loading("hide"), e()
        }, 1e3)
    })
}

function flowCountToVolume(e) {
    return parseFloat((e * ((controller.options.fpr1 << 8) + controller.options.fpr0) / 100).toFixed(2))
}

function isOSPi() {
    return !(!controller || "object" != typeof controller.options || "string" != typeof controller.options.fwv || -1 === controller.options.fwv.search(/ospi/i))
}

function checkPW(e, n) {
    $.ajax({
        url: currPrefix + currIp + "/sp?pw=" + encodeURIComponent(e) + "&npw=" + encodeURIComponent(e) + "&cpw=" + encodeURIComponent(e),
        cache: !1,
        crossDomain: !0,
        type: "GET"
    }).then(function(e) {
        var t = e.result;
        n(!(void 0 === t || 1 < t))
    }, function() {
        n(!1)
    })
}

function changePassword(o) {
    o = $.extend({}, {
        fixIncorrect: !1,
        name: "",
        callback: function() {},
        cancel: function() {}
    }, o);
    var t = isOSPi(),
        n = !1,
        a = $("<div data-role='popup' class='modal' id='changePassword' data-theme='a' data-overlay-theme='b'><ul data-role='listview' data-inset='true'>" + (!0 === o.fixIncorrect ? "" : "<li data-role='list-divider'>" + _("Change Password") + "</li>") + "<li>" + (!0 === o.fixIncorrect ? "<p class='rain-desc red-text bold'>" + _("Incorrect password for ") + o.name + ". " + _("Please re-enter password to try again.") + "</p>" : "") + "<form method='post' novalidate><label for='npw'>" + (!0 === o.fixIncorrect ? _("Password:") : _("New Password") + ":") + "</label><input type='password' name='npw' id='npw' value=''" + (t ? "" : " maxlength='32'") + ">" + (!0 === o.fixIncorrect ? "" : "<label for='cpw'>" + _("Confirm New Password") + ":</label><input type='password' name='cpw' id='cpw' value=''" + (t ? "" : " maxlength='32'") + ">") + (!0 === o.fixIncorrect ? "<label for='save_pw'>" + _("Save Password") + "</label><input type='checkbox' data-wrapper-class='save_pw' name='save_pw' id='save_pw' data-mini='true'>" : "") + "<input type='submit' value='" + _("Submit") + "'></form></li></ul></div>");
    a.find("form").on("submit", function() {
        var i = a.find("#npw").val(),
            e = a.find("#cpw").val();
        return !0 === o.fixIncorrect ? (n = !0, storage.get(["sites"], function(e) {
            function t(e) {
                currPass = e, n[o.name].os_pw = a.find("#save_pw").is(":checked") ? e : "", storage.set({
                    sites: JSON.stringify(n)
                }, cloudSaveSites), a.popup("close"), o.callback()
            }
            var n = parseSites(e.sites);
            checkPW(md5(i), function(e) {
                t(!0 === e ? md5(i) : i)
            })
        })) : i !== e ? showerror(_("The passwords don't match. Please try again.")) : "" === i ? showerror(_("Password cannot be empty")) : (!t && 32 < i.length && showerror(_("Password cannot be longer than 32 characters")), checkOSVersion(213) && (i = md5(i), e = md5(e)), $.mobile.loading("show"), sendToOS("/sp?pw=&npw=" + encodeURIComponent(i) + "&cpw=" + encodeURIComponent(e), "json").done(function(e) {
            var t = e.result;
            !t || 1 < t ? showerror(_(2 === t ? "Please check the current device password is correct then try again" : "Unable to change password. Please try again.")) : (storage.get(["sites", "current_site"], function(e) {
                var t = parseSites(e.sites);
                t[e.current_site].os_pw = i, currPass = i, storage.set({
                    sites: JSON.stringify(t)
                }, cloudSaveSites)
            }), $.mobile.loading("hide"), a.popup("close"), showerror(_("Password changed successfully")))
        })), !1
    }), a.one("popupafterclose", function() {
        document.activeElement.blur(), a.remove(), o.fixIncorrect && !n && o.cancel()
    }).popup().enhanceWithin(), o.fixIncorrect ? storage.get(["sites", "current_site"], function(e) {
        var t = parseSites(e.sites),
            n = e.current_site,
            i = md5(t[n].os_pw);
        isMD5(t[n].os_pw) ? a.popup("open") : $.ajax({
            url: currPrefix + currIp + "/jc?pw=" + i,
            type: "GET",
            dataType: "json"
        }).then(function() {
            t[n].os_pw = currPass = i, storage.set({
                sites: JSON.stringify(t)
            }, cloudSaveSites), o.callback()
        }, function() {
            a.popup("open")
        })
    }) : a.popup("open")
}

function requestCloudAuth(e) {
    e = e || function() {};
    var t = $("<div data-role='popup' class='modal' id='requestCloudAuth' data-theme='a'><ul data-role='listview' data-inset='true'><li data-role='list-divider'>" + _("OpenSprinkler.com Login") + "</li><li><p class='rain-desc tight'>" + _("Use your OpenSprinkler.com login and password to securely sync sites between all your devices.") + "<br><br>" + _("Don't have an account?") + " <a href='https://opensprinkler.com/wp-login.php?action=register' class='iab'>" + _("Register here") + "</a></p></li><li><form method='post' novalidate><label for='cloudUser'>" + _("Username:") + "</label><input type='text' name='cloudUser' id='cloudUser' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false'><label for='cloudPass'>" + _("Password:") + "</label><input type='password' name='cloudPass' id='cloudPass'><input type='submit' value='" + _("Submit") + "'></form></li></ul></div>"),
        n = !1;
    t.find("form").on("submit", function() {
        return $.mobile.loading("show"), cloudLogin(t.find("#cloudUser").val(), t.find("#cloudPass").val(), function(e) {
            !1 !== e ? ($.mobile.loading("hide"), n = !0, t.popup("close")) : showerror(_("Invalid username/password combination. Please try again."))
        }), !1
    }), t.one("popupafterclose", function() {
        e(n), n && cloudSyncStart()
    }), openPopup(t)
}

function cloudLogin(e, t, n) {
    n = n || function() {}, $.ajax({
        type: "POST",
        dataType: "json",
        url: "https://opensprinkler.com/wp-admin/admin-ajax.php",
        data: {
            action: "ajaxLogin",
            username: e,
            password: t
        },
        success: function(e) {
            "string" == typeof e.token && storage.set({
                cloudToken: e.token,
                cloudDataToken: sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(t))
            }), n(e.loggedin)
        },
        fail: function() {
            n(!1)
        }
    })
}

function cloudSaveSites(t) {
    "function" != typeof t && (t = function() {}), storage.get(["cloudToken", "cloudDataToken", "sites"], function(e) {
        null !== e.cloudToken && void 0 !== e.cloudToken ? $.ajax({
            type: "POST",
            dataType: "json",
            url: "https://opensprinkler.com/wp-admin/admin-ajax.php",
            data: {
                action: "saveSites",
                token: e.cloudToken,
                sites: encodeURIComponent(JSON.stringify(sjcl.encrypt(e.cloudDataToken, e.sites)))
            },
            success: function(e) {
                !1 === e.success ? ("BAD_TOKEN" === e.message && handleExpiredLogin(), t(!1, e.message)) : (storage.set({
                    cloudToken: e.token
                }), t(e.success))
            },
            fail: function() {
                t(!1)
            }
        }) : t(!1)
    })
}

function cloudGetSites(i) {
    i = i || function() {}, storage.get(["cloudToken", "cloudDataToken"], function(n) {
        if (void 0 !== n.cloudToken && null !== n.cloudToken) return void 0 === n.cloudDataToken || null === n.cloudDataToken ? (handleInvalidDataToken(), void i(!1)) : void $.ajax({
            type: "POST",
            dataType: "json",
            url: "https://opensprinkler.com/wp-admin/admin-ajax.php",
            data: {
                action: "getSites",
                token: n.cloudToken
            },
            success: function(e) {
                if (!1 === e.success || "" === e.sites) "BAD_TOKEN" === e.message && handleExpiredLogin(), i(!1, e.message);
                else {
                    var t;
                    storage.set({
                        cloudToken: e.token
                    });
                    try {
                        t = sjcl.decrypt(n.cloudDataToken, e.sites)
                    } catch (e) {
                        "ccm: tag doesn't match" === e.message && handleInvalidDataToken(), i(!1)
                    }
                    try {
                        i(JSON.parse(t))
                    } catch (e) {
                        i(!1)
                    }
                }
            },
            fail: function() {
                i(!1)
            }
        });
        i(!1)
    })
}

function cloudSyncStart() {
    cloudGetSites(function(i) {
        var o = $(".ui-page-active").attr("id");
        "start" === o ? (0 < Object.keys(i).length && storage.set({
            sites: JSON.stringify(i)
        }), changePage("#site-control")) : (updateLoginButtons(), storage.get("sites", function(t) {
            if (JSON.stringify(i) !== t.sites)
                if (t.sites = parseSites(t.sites), currLocal) findLocalSiteName(i, function(e) {
                    !1 === e ? areYouSure(_("Do you wish to add this location to your cloud synced site list?"), _("This site is not found in the currently synced site list but may be added now."), function() {
                        i[currIp] = t.sites.Local, storage.set({
                            sites: JSON.stringify(i)
                        }, cloudSaveSites), storage.set({
                            current_site: currIp
                        }), updateSiteList(Object.keys(i), currIp)
                    }, function() {
                        storage.remove("cloudToken", updateLoginButtons)
                    }) : (storage.set({
                        sites: JSON.stringify(i)
                    }, cloudSaveSites), storage.set({
                        current_site: e
                    }), updateSiteList(Object.keys(i), e))
                });
                else if (0 < Object.keys(i).length) {
                function e() {
                    storage.set({
                        sites: JSON.stringify(i)
                    }, cloudSaveSites), n.popup("close"), "site-control" === o && changePage("#site-control")
                }
                var n = $("<div data-role='popup' data-theme='a' data-overlay-theme='b'><div class='ui-bar ui-bar-a'>" + _("Select Merge Method") + "</div><div data-role='controlgroup' class='tight'><button class='merge'>" + _("Merge") + "</button><button class='replaceLocal'>" + _("Replace local with cloud") + "</button><button class='replaceCloud'>" + _("Replace cloud with local") + "</button></div></div>");
                n.find(".merge").on("click", function() {
                    i = $.extend({}, t.sites, i), e()
                }), n.find(".replaceLocal").on("click", function() {
                    e()
                }), n.find(".replaceCloud").on("click", function() {
                    i = t.sites, e()
                }), n.one("popupafterclose", function() {
                    n.popup("destroy").remove()
                }).popup({
                    history: !1,
                    positionTo: "window"
                }).enhanceWithin().popup("open")
            } else cloudSaveSites()
        }))
    })
}

function cloudSync(n) {
    "function" != typeof n && (n = function() {}), storage.get(["cloudToken", "current_site"], function(t) {
        "string" == typeof t.cloudToken && cloudGetSites(function(e) {
            !1 !== e && storage.set({
                sites: JSON.stringify(e)
            }, function() {
                updateSiteList(Object.keys(e), t.current_site), n(), $("html").trigger("siterefresh")
            })
        })
    })
}
var corruptionNotificationShown = !1;

function handleCorruptedWeatherOptions(n) {
    corruptionNotificationShown || (addNotification({
        title: _("Weather Options have Corrupted"),
        desc: _("Click here to retrieve the partial weather option data"),
        on: function() {
            var e = $(this).parent(),
                t = $("<div data-role='popup' data-theme='a' class='modal ui-content' id='weatherOptionCorruption'><h3 class='center'>" + _("Weather option data has corrupted") + "</h3><h5 class='center'>" + _("Please note this may indicate other data corruption as well, please verify all settings.") + "</h5><h6 class='center'>" + _("Below is the corrupt data which could not be parsed but may be useful for restoration.") + "</h6><code>" + n[0].substr(7) + "</code><a class='ui-btn ui-corner-all ui-shadow red reset-options' style='width:80%;margin:5px auto;' href='#'>" + _("Reset All Options") + "</a><a class='ui-btn ui-corner-all ui-shadow submit' style='width:80%;margin:5px auto;' href='#'>" + _("Dismiss") + "</a></div>");
            return t.find(".submit").on("click", function() {
                return removeNotification(e), t.popup("close"), !1
            }), t.find(".reset-options").on("click", function() {
                return removeNotification(e), t.popup("close"), resetAllOptions(function() {
                    showerror(_("Settings have been saved"))
                }), !1
            }), openPopup(t), !1
        }
    }), corruptionNotificationShown = !0)
}

function handleExpiredLogin() {
    storage.remove(["cloudToken"], updateLoginButtons), addNotification({
        title: _("OpenSprinkler.com Login Expired"),
        desc: _("Click here to re-login to OpenSprinkler.com"),
        on: function() {
            var t = $(this).parent();
            return requestCloudAuth(function(e) {
                removeNotification(t), !0 === e && (updateLoginButtons(), cloudSync())
            }), !1
        }
    })
}

function handleInvalidDataToken() {
    storage.remove(["cloudDataToken"]), addNotification({
        title: _("Unable to read cloud data"),
        desc: _("Click here to enter a valid password to decrypt the data"),
        on: function() {
            var e = $(this).parent(),
                t = $("<div data-role='popup' data-theme='a' class='modal ui-content' id='dataPassword'><p class='tight rain-desc'>" + _("Please enter your OpenSprinkler.com password. If you have recently changed your password, you may need to enter your previous password to decrypt the data.") + "</p><form><input type='password' id='dataPasswordInput' name='dataPasswordInput' placeholder='" + _("Password") + "' /><input type='submit' data-theme='b' value='" + _("Submit") + "' /></form></div>"),
                n = !1;
            return t.find("form").on("submit", function() {
                return removeNotification(e), n = !0, storage.set({
                    cloudDataToken: sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(t.find("#dataPasswordInput").val()))
                }, function() {
                    t.popup("close")
                }), !1
            }), t.one("popupafterclose", function() {
                !0 === n && cloudSync()
            }), openPopup(t), !1
        }
    })
}

function getTokenUser(e) {
    return atob(e).split("|")[0]
}

function detectUnusedExpansionBoards() {
    "number" == typeof controller.options.dexp && controller.options.dexp < 255 && 0 <= controller.options.dexp && controller.options.ext < controller.options.dexp && addNotification({
        title: _("Unused Expanders Detected"),
        desc: _("Click here to enable all connected stations."),
        on: function() {
            return removeNotification($(this).parent()), changePage("#os-options", {
                expandItem: "station"
            }), !1
        }
    })
}

function showUnifiedFirmwareNotification() {
    isOSPi() && storage.get("ignoreUnifiedFirmware", function(e) {
        "1" !== e.ignoreUnifiedFirmware && addNotification({
            title: _("Unified firmware is now avaialble"),
            desc: _("Click here for more details"),
            on: function() {
                var e = window.open("https://openthings.freshdesk.com/support/solutions/articles/5000631599", "_blank", "location=" + (isAndroid ? "yes" : "no") + ",enableViewportScale=yes,toolbarposition=top,closebuttoncaption=" + _("Back"));
                return isIEMobile && ($.mobile.document.data("iabOpen", !0), e.addEventListener("exit", function() {
                    $.mobile.document.removeData("iabOpen")
                })), !1
            },
            off: function() {
                return storage.set({
                    ignoreUnifiedFirmware: "1"
                }), !0
            }
        })
    })
}

function intToIP(e) {
    return (e >> 24 & 255) + "." + (e >> 16 & 255) + "." + (e >> 8 & 255) + "." + (255 & e)
}

function checkPublicAccess(e) {
    if (0 !== e) {
        function t() {
            storage.get("ignoreRemoteFailed", function(e) {
                "1" !== e.ignoreRemoteFailed && addNotification({
                    title: _("Remote access is not enabled"),
                    desc: _("Click here to troubleshoot remote access issues"),
                    on: function() {
                        var e = window.open("https://openthings.freshdesk.com/support/solutions/articles/5000569763", "_blank", "location=" + (isAndroid ? "yes" : "no") + ",enableViewportScale=yes,toolbarposition=top,closebuttoncaption=" + _("Back"));
                        return isIEMobile && ($.mobile.document.data("iabOpen", !0), e.addEventListener("exit", function() {
                            $.mobile.document.removeData("iabOpen")
                        })), !1
                    },
                    off: function() {
                        return storage.set({
                            ignoreRemoteFailed: "1"
                        }), !0
                    }
                })
            })
        }
        var n = intToIP(e),
            i = currIp.match(/.*:(\d+)/);
        n !== currIp && !isLocalIP(n) && isLocalIP(currIp) && (i = i ? parseInt(i[1]) : 80, $.ajax({
            url: currPrefix + n + ":" + i + "/jo?pw=" + currPass,
            global: !1,
            dataType: "json",
            type: "GET"
        }).then(function(e) {
            "object" != typeof e || !e.hasOwnProperty("fwv") || e.fwv !== controller.options.fwv || checkOSVersion(214) && controller.options.ip4 !== e.ip4 ? t() : storage.get(["sites", "current_site"], function(e) {
                var t = parseSites(e.sites);
                t[e.current_site].os_ip = n + (80 === i ? "" : ":" + i), storage.set({
                    sites: JSON.stringify(t)
                }, cloudSaveSites)
            })
        }, t))
    }
}

function logout(e) {
    "function" != typeof e && (e = function() {}), areYouSure(_("Are you sure you want to logout?"), "", function() {
        currLocal ? storage.remove(["sites", "current_site", "lang", "provider", "wapikey", "runonce", "cloudToken"], function() {
            location.reload()
        }) : storage.remove(["cloudToken"], function() {
            updateLoginButtons(), e()
        })
    })
}

function updateLoginButtons() {
    var i = $(".ui-page-active");
    storage.get("cloudToken", function(e) {
        var t = $(".login-button"),
            n = $(".logout-button");
        null === e.cloudToken || void 0 === e.cloudToken ? (t.removeClass("hidden"), currLocal || n.addClass("hidden"), n.find("a").text(_("Logout")), "site-control" === i.attr("id") && i.find(".logged-in-alert").remove()) : (n.removeClass("hidden").find("a").text(_("Logout") + " (" + getTokenUser(e.cloudToken) + ")"), t.addClass("hidden"), "site-control" === i.attr("id") && 0 === i.find(".logged-in-alert").length && i.find(".ui-content").prepend(addSyncStatus(e.cloudToken)))
    })
}

function addNotification(e) {
    notifications.push(e), updateNotificationBadge();
    var t = $("#notificationPanel");
    t.hasClass("ui-panel-open") && t.find("ul").append(createNotificationItem(e)).listview("refresh")
}

function updateNotificationBadge() {
    var e = notifications.length,
        t = $("#header");
    0 === e ? t.find(".notifications").hide() : (t.find(".notifications").show(), t.find(".notificationCount").text(e))
}

function createNotificationItem(e) {
    var t = $("<li><a class='primary' href='#'><h2>" + e.title + "</h2>" + (e.desc ? "<p>" + e.desc + "</p>" : "") + "</a><a class='ui-btn ui-btn-icon-notext ui-icon-delete'></a></li>");
    return t.find(".primary").on("click", e.on), t.find(".ui-icon-delete").on("click", function() {
        removeNotification($(this).parent())
    }), t
}

function showNotifications() {
    if (0 !== notifications.length) {
        for (var e = $("#notificationPanel"), t = $("#footer-menu"), n = [$("<li data-role='list-divider'>" + _("Notifications") + "<button class='ui-btn ui-btn-icon-notext ui-icon-delete btn-no-border clear-all delete'></button></li>").on("click", ".clear-all", function() {
                var e = $(this);
                e.hasClass("clear") ? clearNotifications() : (e.removeClass("delete ui-btn-icon-notext ui-icon-delete").addClass("clear").text(_("Clear")), setTimeout(function() {
                    $.mobile.document.one("click", function() {
                        e.removeClass("clear").addClass("delete ui-btn-icon-notext ui-icon-delete").text("")
                    })
                }, 1))
            })], i = notifications.length - 1; 0 <= i; i--) n.push(createNotificationItem(notifications[i]));
        e.find("ul").replaceWith($("<ul/>").append(n).listview()), e.on("panelbeforeclose", function() {
            t.removeClass("moveLeft")
        }), e.panel().panel("option", "classes.modal", "needsclick ui-panel-dismiss"), t.addClass("moveLeft"), e.panel("open")
    }
}

function clearNotifications() {
    var e = $("#notificationPanel");
    notifications = [], updateNotificationBadge(), e.find("ul").empty(), e.hasClass("ui-panel-open") && e.panel("close")
}

function removeNotification(e) {
    var t = $("#notificationPanel"),
        n = notifications[e.index() - 1].off;
    "function" == typeof n && !n() || (notifications.remove(e.index() - 1), e.remove(), updateNotificationBadge(), 0 === notifications.length && t.hasClass("ui-panel-open") && t.panel("close"))
}

function checkFirmwareUpdate() {
    checkOSVersion(200) && ("3.0" === getHWVersion() || isOSPi()) && $.getJSON("https://api.github.com/repos/opensprinkler/opensprinkler-firmware/releases").done(function(o) {
        controller.options.fwv < o[0].tag_name && storage.get("updateDismiss", function(e) {
            (!e.updateDismiss || e.updateDismiss < o[0].tag_name) && addNotification({
                title: _("Firmware update available"),
                on: function() {
                    var e = $(this).parent(),
                        t = 30 === controller.options.hwv || 63 < controller.options.hwv && checkOSVersion(216),
                        n = o[0].html_url,
                        i = $("<div data-role='popup' class='modal' data-theme='a'><h3 class='center' style='margin-bottom:0'>" + _("Latest") + " " + _("Firmware") + ": " + o[0].name + "</h3><h5 class='center' style='margin:0'>" + _("This Controller") + ": " + getOSVersion() + getOSMinorVersion() + "</h5><a class='iab ui-btn ui-corner-all ui-shadow' style='width:80%;margin:5px auto;' target='_blank' href='" + n + "'>" + _("View Changelog") + "</a><a class='guide ui-btn ui-corner-all ui-shadow' style='width:80%;margin:5px auto;' href='#'>" + _("Update Guide") + "</a>" + (t ? "<a class='update ui-btn ui-corner-all ui-shadow' style='width:80%;margin:5px auto;' href='#'>" + _("Update Now") + "</a>" : "") + "<a class='dismiss ui-btn ui-btn-b ui-corner-all ui-shadow' style='width:80%;margin:5px auto;' href='#'>" + _("Dismiss") + "</a></div>");
                    i.find(".update").on("click", function() {
                        30 !== controller.options.hwv ? sendToOS("/cv?pw=&update=1", "json").then(function() {
                            showerror(_("Update successful")), i.find(".dismiss").click()
                        }, function() {
                            $.mobile.loading("show", {
                                html: "<div class='center'>" + _("Update did not complete.") + "<br><a class='iab ui-btn' href='https://openthings.freshdesk.com/support/solutions/articles/5000631599-installing-and-updating-the-unified-firmware#upgrade'>" + _("Update Guide") + "</a></div>",
                                textVisible: !0,
                                theme: "b"
                            }), setTimeout(function() {
                                $.mobile.loading("hide")
                            }, 3e3)
                        }) : $("<a class='hidden iab' href='" + currPrefix + currIp + "/update'></a>").appendTo(i).click()
                    }), i.find(".guide").on("click", function() {
                        var e = 63 < controller.options.hwv ? "https://openthings.freshdesk.com/support/solutions/articles/5000631599-installing-and-updating-the-unified-firmware#upgrade" : "https://openthings.freshdesk.com/support/solutions/articles/5000381694-opensprinkler-firmware-update-guide";
                        $("<a class='hidden iab' href='" + e + "'></a>").appendTo(i).click()
                    }), i.find(".dismiss").one("click", function() {
                        return storage.set({
                            updateDismiss: o[0].tag_name
                        }), i.popup("close"), removeNotification(e), !1
                    }), openPopup(i)
                }
            })
        })
    })
}

function stopAllStations() {
    if (!isControllerConnected()) return !1;
    areYouSure(_("Are you sure you want to stop all stations?"), "", function() {
        $.mobile.loading("show"), sendToOS("/cv?pw=&rsn=1").done(function() {
            $.mobile.loading("hide"), removeStationTimers(), refreshStatus(), showerror(_("All stations have been stopped"))
        })
    })
}

function checkOSPiVersion(e) {
    var t;
    return !!isOSPi() && ((t = controller.options.fwv.split("-")[0]) === e || versionCompare(t = t.split("."), e = e.split(".")))
}

function checkOSVersion(e) {
    var t = controller.options.fwv;
    return 1e3 <= e && (t = 10 * t + controller.options.fwm), !isOSPi() && (e === t || versionCompare(t.toString().split(""), e.toString().split("")))
}

function versionCompare(e, t) {
    for (var n, i = Math.max(e.length, t.length); e.length < i;) e.push(0);
    for (; t.length < i;) t.push(0);
    for (var o = 0; o < i && 0 === (n = Math.max(-1, Math.min(1, e[o] - t[o]))); o++);
    return -1 === n && (n = !1), n
}

function getOSVersion(e) {
    return e || "object" != typeof controller.options || (e = controller.options.fwv), "string" == typeof e && -1 !== e.search(/ospi/i) ? e : (e / 100 >> 0) + "." + (e / 10 >> 0) % 10 + "." + e % 10
}

function getOSMinorVersion() {
    return !isOSPi() && "object" == typeof controller.options && "number" == typeof controller.options.fwm && 0 < controller.options.fwm ? " (" + controller.options.fwm + ")" : ""
}

function getHWVersion(e) {
    if (!e) {
        if ("object" != typeof controller.options || void 0 === controller.options.hwv) return !1;
        e = controller.options.hwv
    }
    return "string" == typeof e ? e : 64 === e ? "OSPi" : 128 === e ? "OSBo" : 192 === e ? "Linux" : 255 === e ? "Demo" : (e / 10 >> 0) % 10 + "." + e % 10
}

function getHWType() {
    return isOSPi() || "number" != typeof controller.options.hwt || 0 === controller.options.hwt ? "" : 172 === controller.options.hwt ? " - AC" : 220 === controller.options.hwt ? " - DC" : 26 === controller.options.hwt ? " - Latching" : ""
}

function areYouSure(e, t, n, i) {
    $("#sure").popup("destroy").remove(), n = n || function() {}, i = i || function() {};
    var o = $("<div data-role='popup' data-theme='a' id='sure'><h3 class='sure-1 center'>" + e + "</h3><p class='sure-2 center'>" + t + "</p><a class='sure-do ui-btn ui-btn-b ui-corner-all ui-shadow' href='#'>" + _("Yes") + "</a><a class='sure-dont ui-btn ui-corner-all ui-shadow' href='#'>" + _("No") + "</a></div>");
    o.find(".sure-do").one("click.sure", function() {
        return o.popup("close"), n(), !1
    }), o.find(".sure-dont").one("click.sure", function() {
        return o.popup("close"), i(), !1
    }), openPopup(o)
}

function showIPRequest(o) {
    var e = {
        title: _("Enter IP Address"),
        ip: [0, 0, 0, 0],
        showBack: !0,
        callback: function() {}
    };
    o = $.extend({}, e, o), $("#ipInput").popup("destroy").remove();

    function n(e, t) {
        var n = a.find(".inputs input").eq(e),
            i = parseInt(n.val()); - 1 === t && 0 === i || 1 === t && 255 <= i || (n.val(i + t), o.callback(s()))
    }
    var a = $("<div data-role='popup' id='ipInput' data-theme='a'><div data-role='header' data-theme='b'><h1>" + o.title + "</h1></div><div class='ui-content'><span><fieldset class='ui-grid-c incr'><div class='ui-block-a'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a></div><div class='ui-block-b'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a></div><div class='ui-block-c'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a></div><div class='ui-block-d'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a></div></fieldset><div class='ui-grid-c inputs'><div class='ui-block-a'><input data-wrapper-class='pad_buttons' class='ip_addr' type='number' pattern='[0-9]*' max='255' value='" + o.ip[0] + "'></div><div class='ui-block-b'><input data-wrapper-class='pad_buttons' class='ip_addr' type='number' pattern='[0-9]*' max='255' value='" + o.ip[1] + "'></div><div class='ui-block-c'><input data-wrapper-class='pad_buttons' class='ip_addr' type='number' pattern='[0-9]*' max='255' value='" + o.ip[2] + "'></div><div class='ui-block-d'><input data-wrapper-class='pad_buttons' class='ip_addr' type='number' pattern='[0-9]*' max='255' value='" + o.ip[3] + "'></div></div><fieldset class='ui-grid-c decr'><div class='ui-block-a'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a></div><div class='ui-block-b'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a></div><div class='ui-block-c'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a></div><div class='ui-block-d'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a></div></fieldset></span>" + (o.showBack ? "<button class='submit' data-theme='b'>" + _("Submit") + "</button>" : "") + "</div></div>"),
        s = function() {
            return $.makeArray(a.find(".ip_addr").map(function() {
                return parseInt($(this).val())
            }))
        };
    a.find("button.submit").on("click", function() {
        o.callback(s()), a.popup("destroy").remove()
    }), a.on("focus", "input[type='number']", function() {
        this.value = ""
    }).on("blur", "input[type='number']", function() {
        "" === this.value && (this.value = "0")
    }), holdButton(a.find(".incr").children(), function(e) {
        var t = $(e.currentTarget).index();
        return n(t, 1), !1
    }), holdButton(a.find(".decr").children(), function(e) {
        var t = $(e.currentTarget).index();
        return n(t, -1), !1
    }), a.css("max-width", "350px").one("popupafterclose", function() {
        o.callback(s())
    }), openPopup(a)
}

function showDurationBox(s) {
    var e = {
            seconds: 0,
            title: _("Duration"),
            granularity: 0,
            preventCompression: !1,
            incrementalUpdate: !0,
            showBack: !0,
            showSun: !1,
            minimum: 0,
            callback: function() {}
        },
        t = 0;
    s = $.extend({}, e, s), $("#durationBox").popup("destroy").remove(), s.seconds = parseInt(s.seconds), 65535 === s.seconds ? (t = 1, s.seconds = 0) : 65534 === s.seconds && (t = 2, s.seconds = 0), checkOSVersion(217) && (s.preventCompression = !0);
    var n, i = ["days", "hours", "minutes", "seconds"],
        o = [_("Days"), _("Hours"), _("Minutes"), _("Seconds")],
        r = [86400, 3600, 60, 1],
        l = [0, 23, 59, 59],
        a = 4 - s.granularity,
        c = 0,
        u = sec2dhms(s.seconds);
    if (!s.preventCompression && checkOSVersion(210) && 64800 < s.maximum && (s.maximum = checkOSVersion(214) ? 57600 : 64800), s.maximum)
        for (n = r.length - 1; 0 <= n; n--)
            if (s.maximum < r[n]) {
                a = r.length - (c = n + 1) - s.granularity;
                break
            }
    function d(e, t) {
        var n = m.find(".inputs input").eq(e),
            i = e + c,
            o = parseInt(n.val());
        if (!n.prop("disabled") && !(-1 === t && (g() <= s.minimum || o <= 0) || 1 === t && g() + r[i] > s.maximum) && (0 !== l[i] && 0 !== e && Math.abs(o) >= l[i] && (n.val(0), n = m.find(".inputs input").eq(e - 1), o = parseInt(n.val())), n.val(o + t), s.incrementalUpdate && s.callback(g()), !s.preventCompression && checkOSVersion(210))) {
            var a = 1 === t;
            1 === t ? (60 <= g() && v("seconds", a), 10800 <= g() && v("minutes", a)) : -1 === t && (g() <= -60 ? v("seconds", !a) : g() <= -10800 ? v("minutes", !a) : g() < 60 ? v("seconds", a) : g() < 10800 && v("minutes", a))
        }
    }
    var p = "<fieldset class='ui-grid-" + String.fromCharCode(95 + a) + " incr'>",
        h = "<div class='ui-grid-" + String.fromCharCode(95 + a) + " inputs'>",
        f = "<fieldset class='ui-grid-" + String.fromCharCode(95 + a) + " decr'>",
        m = $("<div data-role='popup' id='durationBox' data-theme='a'><div data-role='header' data-theme='b'><h1>" + s.title + "</h1></div><div class='ui-content'>" + (s.helptext ? "<p class='rain-desc center smaller'>" + s.helptext + "</p>" : "") + "<span></span>" + (s.showSun ? "<div class='ui-grid-a useSun'><div class='ui-block-a'><button value='65534' class='ui-mini ui-btn rise " + (2 === t ? "ui-btn-active" : "") + "'>" + _("Sunrise to Sunset") + "</button></div><div class='ui-block-b'><button value='65535' class='ui-mini ui-btn set " + (1 === t ? "ui-btn-active" : "") + "'>" + _("Sunset to Sunrise") + "</button></div></div>" : "") + (s.showBack ? "<button class='submit' data-theme='b'>" + _("Submit") + "</button>" : "") + "</div></div>"),
        g = function() {
            var e = m.find(".useSun").find("button.ui-btn-active");
            return 1 === e.length ? parseInt(e.val()) : dhms2sec({
                days: parseInt(m.find(".days").val()) || 0,
                hours: parseInt(m.find(".hours").val()) || 0,
                minutes: parseInt(m.find(".minutes").val()) || 0,
                seconds: parseInt(m.find(".seconds").val()) || 0
            })
        },
        v = function(e, t) {
            m.find("." + e).toggleClass("ui-state-disabled", t).prop("disabled", t).val(function() {
                return t ? 0 : this.value
            }).parent(".ui-input-text").toggleClass("ui-state-disabled", t)
        };
    for (n = c; n < r.length - s.granularity; n++) p += "<div " + (1 < a ? "class='ui-block-" + String.fromCharCode(97 + n - c) + "'" : "") + "><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a></div>", h += "<div " + (1 < a ? "class='ui-block-" + String.fromCharCode(97 + n - c) + "'" : "") + "><label class='center'>" + _(o[n]) + "</label><input data-wrapper-class='pad_buttons' class='" + i[n] + "' type='number' pattern='[0-9]*' value='" + u[i[n]] + "'></div>", f += "<div " + (1 < a ? "class='ui-block-" + String.fromCharCode(97 + n - c) + "'" : "") + "><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a></div>";
    p += "</fieldset>", h += "</div>", f += "</fieldset>", m.find("span").prepend(p + h + f), m.find("button.submit").on("click", function() {
        s.callback(g()), m.popup("destroy").remove()
    }), !s.preventCompression && checkOSVersion(210) && (s.seconds <= -60 && v("seconds", !0), s.seconds <= -10800 && v("minutes", !0), 60 <= s.seconds && v("seconds", !0), 10800 <= s.seconds && v("minutes", !0)), m.on("focus", "input[type='number']", function() {
        this.value = ""
    }).on("blur", "input[type='number']", function() {
        "" === this.value && (this.value = "0")
    }), holdButton(m.find(".incr").children(), function(e) {
        var t = $(e.currentTarget).index();
        return d(t, 1), !1
    }), holdButton(m.find(".decr").children(), function(e) {
        var t = $(e.currentTarget).index();
        return d(t, -1), !1
    }), s.showSun && m.find(".useSun").on("click", "button", function() {
        var e = $(this),
            t = m.find(".useSun").find("button").not(e),
            n = m.find("span").find(".ui-btn,input");
        t.removeClass("ui-btn-active"), e.hasClass("ui-btn-active") ? (e.removeClass("ui-btn-active"), n.prop("disabled", !1).removeClass("ui-disabled")) : (e.addClass("ui-btn-active"), n.prop("disabled", !0).addClass("ui-disabled")), s.incrementalUpdate && s.callback(g())
    }), m.css("max-width", "350px").one("popupafteropen", function() {
        0 !== t && m.find("span").find(".ui-btn,input").prop("disabled", !0).addClass("ui-disabled")
    }).one("popupafterclose", function() {
        s.incrementalUpdate && s.callback(g())
    }), openPopup(m)
}

function showSingleDurationInput(n) {
    $("#singleDuration").popup("destroy").remove();
    var e = {
        data: 0,
        title: _("Duration"),
        minimum: 0,
        label: "",
        updateOnChange: !0,
        showBack: !0,
        callback: function() {}
    };
    n = $.extend({}, e, n);

    function i(e) {
        n.callback(parseInt(e).clamp(n.minimum, n.maximum))
    }

    function t(e) {
        var t = parseInt(a.val()); - 1 === e && t === n.minimum || 1 === e && t === n.maximum || (a.val(t + e), n.updateOnChange && i(t + e))
    }
    var o = $("<div data-role='popup' id='singleDuration' data-theme='a'><div data-role='header' data-theme='b'><h1>" + n.title + "</h1></div><div class='ui-content'>" + (n.helptext ? "<p class='rain-desc center smaller'>" + n.helptext + "</p>" : "") + "<label class='center'>" + n.label + "</label><div class='input_with_buttons'><button class='decr ui-btn ui-btn-icon-notext ui-icon-carat-l btn-no-border'></button><input type='number' pattern='[0-9]*' value='" + n.data + "'><button class='incr ui-btn ui-btn-icon-notext ui-icon-carat-r btn-no-border'></button></div>" + (n.updateOnChange && !n.showBack ? "" : "<input type='submit' data-theme='b' value='" + _("Submit") + "'>") + "</div></div>"),
        a = o.find("input");
    holdButton(o.find(".incr"), function() {
        return t(1), !1
    }), holdButton(o.find(".decr"), function() {
        return t(-1), !1
    }), o.find("input[type='number']").on("focus", function() {
        this.value = ""
    }).on("blur", function() {
        "" === this.value && (this.value = "0")
    }), o.find("input[type='submit']").on("click", function() {
        i(a.val()), o.popup("destroy").remove()
    }), o.one("popupafterclose", function() {
        n.updateOnChange && i(a.val())
    }), openPopup(o)
}

function showDateTimeInput(a, n) {
    $("#datetimeInput").popup("destroy").remove(), a instanceof Date || (a = new Date(1e3 * a)).setMinutes(a.getMinutes() - a.getTimezoneOffset()), n = n || function() {};

    function s(e, t) {
        a["setUTC" + e](a["getUTC" + e]() + t), n(new Date(a.getTime())), i()
    }
    var r = ["Month", "Date", "FullYear", "Hours", "Minutes"],
        l = [_("Jan"), _("Feb"), _("Mar"), _("Apr"), _("May"), _("Jun"), _("Jul"), _("Aug"), _("Sep"), _("Oct"), _("Nov"), _("Dec")],
        c = $("<div data-role='popup' id='datetimeInput' data-theme='a'><div data-role='header' data-theme='b'><h1>" + _("Enter Date/Time") + "</h1></div><div class='ui-content'></div></div>"),
        i = function() {
            var e, t, n = "<fieldset class='ui-grid-d incr'>",
                i = "<div class='ui-grid-d inputs'>",
                o = "<fieldset class='ui-grid-d decr'>";
            for (t = 0; t < 5; t++) e = a["getUTC" + r[t]](), "", e = "Month" === r[t] ? "<p class='center'>" + l[e] + "</p>" : "Date" === r[t] ? "<p class='center'>" + e + ",</p>" : "Hours" === r[t] ? "<p style='width:90%;display:inline-block' class='center'>" + e + "</p><p style='display:inline-block'>:</p>" : "<p class='center'>" + e + "</p>", n += "<div class='ui-block-" + String.fromCharCode(97 + t) + "'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a></div>", i += "<div id='" + r[t] + "' class='ui-block-" + String.fromCharCode(97 + t) + "'>" + e + "</div>", o += "<div class='ui-block-" + String.fromCharCode(97 + t) + "'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a></div>";
            n += "</fieldset>", i += "</div>", o += "</fieldset>", c.find(".ui-content").html("<span>" + n + i + o + "</span>").enhanceWithin(), c.find(".incr").children().on("vclick", function() {
                var e = $(this).index();
                return s(c.find(".inputs").children().eq(e).attr("id"), 1), !1
            }), c.find(".decr").children().on("vclick", function() {
                var e = $(this).index();
                return s(c.find(".inputs").children().eq(e).attr("id"), -1), !1
            })
        };
    i(), c.css("width", "280px").one("popupafterclose", function() {
        n(a)
    }), openPopup(c)
}

function showTimeInput(l) {
    var e = {
        minutes: 0,
        title: _("Time"),
        incrementalUpdate: !0,
        showBack: !0,
        showSun: !1,
        callback: function() {}
    };
    l = $.extend({}, e, l), $("#timeInput").popup("destroy").remove();
    var t = 2047 & l.minutes,
        n = 0;
    l.minutes >> 12 & 1 && (t = -t), l.minutes >> 14 & 1 ? n = 1 : l.minutes >> 13 & 1 && (n = 2);

    function c() {
        return _(u ? "PM" : "AM")
    }

    function i(e, t) {
        if (0 === e || 1 === e) {
            var n = p() + t * (0 === e ? 60 : 1),
                i = d.find(".inputs input").eq(e),
                o = i.hasClass("hour"),
                a = parseInt(i.val());
            if (1 === t) {
                if (o && 12 <= a && (a = 0), !o && 59 <= a) {
                    a = -1;
                    var s = d.find(".hour"),
                        r = parseInt(s.val());
                    12 === r && (r = 0), s.val(r + 1)
                }
            } else if (o && a <= 1) a = 13;
            else if (!o && a <= 0) return;
            (!u && 719 < n || u && n < 721 || u && 1439 < n || !u && -1 === t && n < 0) && (u = !u, d.find(".period").text(c())), a = o ? a + t : pad(a + t), i.val(a)
        } else 2 === e && (u = !u, d.find(".period").text(c()));
        l.incrementalUpdate && l.callback(p())
    }
    var u = 719 < l.minutes,
        d = $("<div data-role='popup' id='timeInput' data-theme='a'><div data-role='header' data-theme='b'><h1>" + l.title + "</h1></div><div class='ui-content'>" + (l.helptext ? "<p class='pad-top rain-desc center smaller'>" + l.helptext + "</p>" : "") + "<span><fieldset class='ui-grid-b incr'><div class='ui-block-a'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a></div><div class='ui-block-b'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a></div><div class='ui-block-c'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a></div></fieldset><div class='ui-grid-b inputs'><div class='ui-block-a'><input data-wrapper-class='pad_buttons' class='hour dontPad' type='number' pattern='[0-9]*' value='" + (parseInt(l.minutes / 60) % 12 == 0 ? 12 : parseInt(l.minutes / 60) % 12) + "'></div><div class='ui-block-b'><input data-wrapper-class='pad_buttons' class='minute' type='number' pattern='[0-9]*' value='" + pad(l.minutes % 60) + "'></div><div class='ui-block-c'><p class='center period'>" + c() + "</p></div></div><fieldset class='ui-grid-b decr'><div class='ui-block-a'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a></div><div class='ui-block-b'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a></div><div class='ui-block-c'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a></div></fieldset></span>" + (l.showSun ? "<div class='ui-grid-a useSun'><div class='ui-block-a'><button class='ui-mini ui-btn rise " + (1 === n ? "ui-btn-active" : "") + "'>" + _("Use Sunrise") + "</button></div><div class='ui-block-b'><button class='ui-mini ui-btn set " + (2 === n ? "ui-btn-active" : "") + "'>" + _("Use Sunset") + "</button></div></div><div class='offsetInput'" + (0 === n ? " style='display: none;'" : "") + "><h5 class='center tight'>" + _("Offset (minutes)") + "</h5><div class='input_with_buttons'><button class='decr ui-btn ui-btn-icon-notext ui-icon-carat-l btn-no-border'></button><input class='dontPad' type='number' pattern='[0-9]*' value='" + t + "'><button class='incr ui-btn ui-btn-icon-notext ui-icon-carat-r btn-no-border'></button></div></div>" : "") + (l.showBack ? "<button class='submit' data-theme='b'>" + _("Submit") + "</button>" : "") + "</div></div>"),
        p = function() {
            var e = d.find(".useSun").find("button.ui-btn-active");
            if (1 === e.length) {
                var t = 0,
                    n = parseInt(d.find(".offsetInput input").val());
                return e.hasClass("rise") ? (0 <= n ? t = n : (t = -n, t |= 4096), t |= 16384) : (0 <= n ? t = n : (t = -n, t |= 4096), t |= 8192), t
            }
            var i = parseInt(d.find(".hour").val());
            return u && 12 !== i && (i += 12), u || 12 !== i || (i = 0), 60 * i + parseInt(d.find(".minute").val())
        };
    if (d.find("button.submit").on("click", function() {
            l.callback(p()), d.popup("destroy").remove()
        }), d.on("focus", "input[type='number']", function(e) {
            e.target.value = ""
        }).on("blur", "input[type='number']", function(e) {
            var t = parseInt(e.target.value) || 0;
            e.target.value = $(e.target).hasClass("dontPad") ? t : pad(t)
        }), holdButton(d.find(".incr").children(), function(e) {
            var t = $(e.currentTarget),
                n = t.index();
            return 0 === t.find(".ui-disabled").length && i(n, 1), !1
        }), holdButton(d.find(".decr").children(), function(e) {
            var t = $(e.currentTarget),
                n = t.index();
            return 0 === t.find(".ui-disabled").length && i(n, -1), !1
        }), l.showSun) {
        d.find(".useSun").on("click", "button", function() {
            var e = $(this),
                t = d.find(".useSun").find("button").not(e),
                n = d.find(".offsetInput"),
                i = d.find("span").find(".ui-btn,input,p");
            t.removeClass("ui-btn-active"), e.hasClass("ui-btn-active") ? (e.removeClass("ui-btn-active"), n.slideUp(), i.prop("disabled", !1).removeClass("ui-disabled")) : (e.addClass("ui-btn-active"), n.slideDown(), i.prop("disabled", !0).addClass("ui-disabled")), l.incrementalUpdate && l.callback(p())
        });

        function o(e) {
            var t = parseInt(a.val()); - 1 === e && -240 === t || 1 === e && 240 === t || (a.val(t + e), l.incrementalUpdate && l.callback(p()))
        }
        var a = d.find(".offsetInput").find("input");
        a.on("focus", function() {
            this.value = ""
        }).on("blur", function() {
            "" === this.value ? this.value = "0" : 240 < this.value ? this.value = "240" : this.value < -240 && (this.value = "-240")
        }), holdButton(d.find(".offsetInput").find(".incr"), function() {
            return o(1), !1
        }), holdButton(d.find(".offsetInput").find(".decr"), function() {
            return o(-1), !1
        })
    }
    d.css("max-width", "350px").one("popupafteropen", function() {
        0 !== n && d.find("span").find(".ui-btn,input,p").prop("disabled", !0).addClass("ui-disabled")
    }).one("popupafterclose", function() {
        l.incrementalUpdate && l.callback(p())
    }), openPopup(d)
}

function showHelpText(e) {
    e.stopImmediatePropagation();
    var t = $(this),
        n = t.data("helptext");
    return openPopup($("<div data-role='popup' data-theme='a'><p>" + n + "</p></div>"), {
        positionTo: t
    }), !1
}

function changePage(e, t) {
    t = t || {}, 0 !== e.indexOf("#") && (e = "#" + e), closePanel(function() {
        $.mobile.pageContainer.pagecontainer("change", e, t)
    })
}

function openPopup(e, t) {
    t = $.extend({}, {
        history: !1,
        positionTo: "window",
        overlayTheme: "b"
    }, t), $.mobile.pageContainer.append(e), e.one("popupafterclose", function() {
        e.popup("destroy").remove()
    }).popup(t).enhanceWithin(), e.popup("open")
}

function closePanel(e) {
    var t = $(".ui-panel-open");
    if (0 < t.length) return t.one("panelclose", function() {
        e()
    }), void t.panel("close");
    e()
}

function changeHeader(e) {
    var t = $("#header");
    "" === (e = $.extend(!0, {}, {
        title: "",
        class: "",
        animate: !0,
        leftBtn: {
            icon: "",
            class: "",
            text: "",
            on: function() {}
        },
        rightBtn: {
            icon: "",
            class: "",
            text: "",
            on: function() {}
        }
    }, e)).title && "" === e.class && (e.class = "logo");
    var n = $("<button data-icon='" + e.leftBtn.icon + "' " + ("" === e.leftBtn.text ? "data-iconpos='notext' " : "") + "class='ui-btn-left " + e.leftBtn.class + "'>" + e.leftBtn.text + "</button><h3 class='" + e.class + "'>" + e.title + "</h3><button data-icon='" + e.rightBtn.icon + "' " + ("" === e.rightBtn.text ? "data-iconpos='notext' " : "") + "class='ui-btn-right " + e.rightBtn.class + "'>" + e.rightBtn.text + "</button>"),
        i = e.animate ? "fast" : 0;
    return t.children().stop().fadeOut(i, function() {
        t.html(n).toolbar(t.hasClass("ui-header") ? "refresh" : null), t.find(".ui-btn-left").on("click", e.leftBtn.on), t.find(".ui-btn-right").on("click", e.rightBtn.on)
    }).fadeIn(i), n
}

function getPageTop() {
    var e = $.mobile.window;
    return {
        x: (e[0].innerWidth || e.width()) / 2 + e.scrollLeft(),
        y: e.scrollTop() + 22.5
    }
}

function showLoading(e) {
    (e = "string" == typeof e ? $(e) : e).off("click").html("<p class='ui-icon ui-icon-loading mini-load'></p>");
    var t = e.filter("#footer-running");
    1 === t.length && t.find(".mini-load").addClass("bottom")
}

function takePicture(e) {
    "object" == typeof navigator.camera && "function" == typeof navigator.camera.getPicture && navigator.camera.getPicture(e, function() {}, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: !0,
        targetWidth: 200,
        targetHeight: 200
    })
}

function goHome(e) {
    if ("sprinklers" !== $(".ui-page-active").attr("id")) {
        $.mobile.document.one("pageshow", function() {
            delete $.mobile.navigate.history.getActive().transition
        });
        var t = {
            reverse: !0
        };
        !0 === e && (t = {
            firstLoad: !0,
            showLoading: !1,
            transition: "none"
        }), changePage("#sprinklers", t)
    }
}

function goBack() {
    var e = $(".ui-page-active");
    if (1 === e.length) {
        var t = "site-control" === (e = e.attr("id")) && !isControllerConnected(),
            n = $(".ui-popup-active");
        if (n.length) n.find("[data-role='popup']").popup("close");
        else if ("sprinklers" === e || "start" === e || t) try {
            navigator.app.exitApp()
        } catch (e) {} else if (isChromeApp || "file:" === window.location.protocol) {
            var i = $.mobile.navigate.history.getPrev().url;
            if ("#" !== i.slice(0, 1)) return;
            changePage(i, {
                reverse: !0
            }), $.mobile.document.one("pagehide", function() {
                $.mobile.navigate.history.activeIndex -= 2
            })
        } else 0 < pageHistoryCount && pageHistoryCount--, 0 === pageHistoryCount ? navigator.app.exitApp() : (goingBack = !0, $.mobile.back())
    }
}

function checkChangesBeforeBack() {
    checkChanges(goBack)
}

function checkChanges(e) {
    var t = $(".ui-page-active").find(".hasChanges");
    if (e = e || function() {}, 0 !== t.length) return areYouSure(_("Do you want to save your changes?"), "", function() {
        t.click(), t.hasClass("preventBack") || e()
    }, e), !1;
    e()
}

function showerror(e, t) {
    t = t || 2500, clearTimeout(errorTimeout), $.mobile.loading("show", {
        text: e,
        textVisible: !0,
        textonly: !0,
        theme: "b"
    }), errorTimeout = setTimeout(function() {
        $.mobile.loading("hide")
    }, t)
}

function loadUnitSetting() {
    storage.get("isMetric", function(e) {
        switch (e.isMetric) {
            case "true":
                isMetric = !0;
                break;
            case "false":
                isMetric = !1
        }
    })
}

function fixInputClick(e) {
    FastClick.notNeeded(document.body) || (e.find("input[type='checkbox']:not([data-role='flipswitch']),.ui-select > .ui-btn").addClass("needsclick"), e.find(".ui-collapsible-heading-toggle").on("click", function() {
        var e = $(this);
        setTimeout(function() {
            e.removeClass("ui-btn-active")
        }, 100)
    }))
}

function holdButton(e, t) {
    var n;
    e.on(isTouchCapable ? "tap" : "click", t).on("taphold", function(e) {
        n = setInterval(function() {
            t(e)
        }, 100)
    }).on("vmouseup vmouseout vmousecancel touchend", function() {
        clearInterval(n)
    }).on("touchmove", function(e) {
        e.preventDefault()
    })
}

function insertStyle(e) {
    var t = document.createElement("style");
    t.innerHTML = e, document.head.appendChild(t)
}

function parseIntArray(e) {
    for (var t = 0; t < e.length; t++) e[t] = +e[t];
    return e
}

function getDurationText(e) {
    return 65535 === e ? _("Sunset to Sunrise") : 65534 === e ? _("Sunrise to Sunset") : dhms2str(sec2dhms(e))
}

function sec2hms(e) {
    var t = "",
        n = Math.max(0, parseInt(e / 3600) % 24),
        i = Math.max(0, parseInt(e / 60) % 60),
        o = e % 60;
    return n && (t += pad(n) + ":"), t + pad(i) + ":" + pad(o)
}

function sec2dhms(e) {
    var t = e < 0 ? -1 : 1;
    return e = Math.abs(e), {
        days: Math.max(0, parseInt(e / 86400)) * t,
        hours: Math.max(0, parseInt(e % 86400 / 3600)) * t,
        minutes: Math.max(0, parseInt(e % 86400 % 3600 / 60)) * t,
        seconds: Math.max(0, parseInt(e % 86400 % 3600 % 60)) * t
    }
}

function dhms2str(e) {
    var t = "";
    return e.days && (t += e.days + _("d") + " "), e.hours && (t += e.hours + _("h") + " "), e.minutes && (t += e.minutes + _("m") + " "), e.seconds && (t += e.seconds + _("s") + " "), "" === t && (t = "0" + _("s")), t.trim()
}

function dhms2sec(e) {
    return parseInt(86400 * e.days + 3600 * e.hours + 60 * e.minutes + e.seconds)
}

function isControllerConnected() {
    return !("" === currIp || $.isEmptyObject(controller) || $.isEmptyObject(controller.options) || $.isEmptyObject(controller.programs) || $.isEmptyObject(controller.settings) || $.isEmptyObject(controller.status) || $.isEmptyObject(controller.stations))
}

function exportObj(e, t, n) {
    if (t = encodeURIComponent(JSON.stringify(t)), isFileCapable) $(e).attr({
        href: "data:text/json;charset=utf-8," + t,
        download: "backup-" + (new Date).toLocaleDateString().replace(/\//g, "-") + ".json"
    });
    else {
        n = n || "OpenSprinkler Data Export on " + dateToString(new Date);
        var i = "mailto:?subject=" + encodeURIComponent(n) + "&body=" + t;
        $(e).attr("href", i).on("click", function() {
            window.open(i)
        })
    }
}

function sortObj(o, e) {
    var t = [];
    for (var n in o) o.hasOwnProperty(n) && t.push(n);
    "function" == typeof e ? t.sort(e) : "value" === e ? t.sort(function(e, t) {
        var n = o[e],
            i = o[t];
        return n < i ? -1 : i < n ? 1 : 0
    }) : t.sort();
    for (var i = {}, a = 0; a < t.length; a++) i[t[a]] = o[t[a]];
    return i
}

function getDayName(e, t) {
    var n = [_("Sunday"), _("Monday"), _("Tuesday"), _("Wednesday"), _("Thursday"), _("Friday"), _("Saturday")],
        i = [_("Sun"), _("Mon"), _("Tue"), _("Wed"), _("Thu"), _("Fri"), _("Sat")];
    return "short" === t ? i[e.getDay()] : n[e.getDay()]
}

function pad(e) {
    var t = String(e);
    return 1 === t.length && (t = "0" + t), t
}

function htmlEscape(e) {
    return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

function _(e) {
    if ("object" == typeof language && language.hasOwnProperty(e)) {
        var t = language[e];
        return t || e
    }
    return e
}

function setLang() {
    $("[data-translate]").text(function() {
        var e = $(this),
            t = e.data("translate");
        if (!e.is("input[type='submit']")) return _(t);
        e.val(_(t)), 0 < e.parent("div.ui-btn").length && e.button("refresh")
    }), $(".ui-toolbar-back-btn").text(_("Back")), checkCurrLang()
}

function updateLang(e) {
    language = {}, void 0 !== e ? (storage.set({
        lang: e
    }), "en" !== (currLang = e) ? $.getJSON(getAppURLPath() + "locale/" + e + ".js", function(e) {
        language = e.messages, setLang()
    }).fail(setLang) : setLang()) : storage.get("lang", function(e) {
        updateLang((e.lang || navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "en").substring(0, 2))
    })
}

function languageSelect() {
    $("#localization").popup("destroy").remove();
    var n = "<div data-role='popup' data-theme='a' id='localization' data-corners='false'><ul data-inset='true' data-role='listview' id='lang' data-corners='false'><li data-role='list-divider' data-theme='b' class='center' data-translate='Localization'>" + _("Localization") + "</li>";
    return $.each({
        af: "Afrikaans",
        am: "Amharic",
        bg: "Bulgarian",
        zh: "Chinese",
        hr: "Croatian",
        cs: "Czech",
        nl: "Dutch",
        en: "English",
        et: "Estonian",
        pes: "Farsi",
        fr: "French",
        de: "German",
        el: "Greek",
        he: "Hebrew",
        hu: "Hungarian",
        is: "Icelandic",
        it: "Italian",
        lv: "Latvian",
        mn: "Mongolian",
        no: "Norwegian",
        pl: "Polish",
        pt: "Portuguese",
        ru: "Russian",
        sk: "Slovak",
        sl: "Slovenian",
        es: "Spanish",
        ta: "Tamil",
        th: "Thai",
        tr: "Turkish",
        sv: "Swedish",
        ro: "Romanian"
    }, function(e, t) {
        n += "<li><a href='#' data-translate='" + t + "' data-lang-code='" + e + "'>" + _(t) + "</a></li>"
    }), n += "</ul></div>", (n = $(n)).find("a").on("click", function() {
        updateLang($(this).data("lang-code"))
    }), openPopup(n), !1
}

function checkCurrLang() {
    storage.get("lang", function(t) {
        var e = $("#localization");
        e.find("a").each(function() {
            var e = $(this);
            e.data("lang-code") === t.lang ? e.removeClass("ui-icon-carat-r").addClass("ui-icon-check") : e.removeClass("ui-icon-check").addClass("ui-icon-carat-r")
        }), e.find("li.ui-last-child").removeClass("ui-last-child")
    })
}

function getAppURLPath() {
    return currLocal ? $.mobile.path.parseUrl($("head").find("script[src$='app.js']").attr("src")).hrefNoHash.slice(0, -9) : ""
}

function getUrlVars(e) {
    for (var t, n = {}, i = e.slice(e.indexOf("?") + 1).split("&"), o = 0; o < i.length; o++) n[(t = i[o].split("="))[0]] = decodeURIComponent(t[1].replace(/\+/g, "%20"));
    return n
}

function escapeJSON(e) {
    return JSON.stringify(e).replace(/\{|\}/g, "")
}

function unescapeJSON(e) {
    return JSON.parse("{" + e + "}")
}

function isMD5(e) {
    return /^[a-f0-9]{32}$/i.test(e)
}

function sortByStation(e, t) {
    return e.station < t.station ? -1 : e.station > t.station ? 1 : 0
}

function minutesToTime(e) {
    var t = 719 < e ? "PM" : "AM",
        n = parseInt(e / 60) % 12;
    return 0 === n && (n = 12), n + ":" + pad(e % 60) + " " + t
}

function getBitFromByte(e, t) {
    return 0 != (e & 1 << t)
}

function getTimezoneOffset() {
    var e = controller.options.tz - 48,
        t = 0 <= e ? 1 : -1;
    return (e = 60 * (Math.abs(e) / 4 >> 0) + (Math.abs(e) % 4 * 15 / 10 >> 0) + Math.abs(e) % 4 * 15 % 10) * t
}

function humaniseDuration(e, t) {
    var n, i = Math.floor((t - e) / 1e3),
        o = 0 < i;
    if ((i = Math.abs(i)) < 10) return _("Just Now");
    var a = Math.floor(i / 31536e3);
    return n = _(1 <= a ? 1 < a ? "years" : "year" : 1 <= (a = Math.floor(i / 2592e3)) ? 1 < a ? "months" : "month" : 1 <= (a = Math.floor(i / 86400)) ? 1 < a ? "days" : "day" : 1 <= (a = Math.floor(i / 3600)) ? 1 < a ? "hours" : "hour" : 1 <= (a = Math.floor(i / 60)) ? 1 < a ? "minutes" : "minute" : 1 < (a = i) ? "seconds" : "second"), o ? _("In") + " " + a + " " + n : a + " " + n + " " + _("ago")
}

function dateToString(e, t, n) {
    var i = [_("Sun"), _("Mon"), _("Tue"), _("Wed"), _("Thr"), _("Fri"), _("Sat")],
        o = [_("Jan"), _("Feb"), _("Mar"), _("Apr"), _("May"), _("Jun"), _("Jul"), _("Aug"), _("Sep"), _("Oct"), _("Nov"), _("Dec")];
    return 0 === e.getTime() ? "--" : (!1 !== t && e.setMinutes(e.getMinutes() + e.getTimezoneOffset()), "de" === currLang ? pad(e.getDate()) + "." + pad(e.getMonth() + 1) + "." + e.getFullYear() + " " + pad(e.getHours()) + ":" + pad(e.getMinutes()) + ":" + pad(e.getSeconds()) : 1 === n ? o[e.getMonth()] + " " + pad(e.getDate()) + ", " + e.getFullYear() + " " + pad(e.getHours()) + ":" + pad(e.getMinutes()) + ":" + pad(e.getSeconds()) : 2 === n ? o[e.getMonth()] + " " + pad(e.getDate()) + ", " + pad(e.getHours()) + ":" + pad(e.getMinutes()) + ":" + pad(e.getSeconds()) : i[e.getDay()] + ", " + pad(e.getDate()) + " " + o[e.getMonth()] + " " + e.getFullYear() + " " + pad(e.getHours()) + ":" + pad(e.getMinutes()) + ":" + pad(e.getSeconds()))
}

function transformKeys(n) {
    if (checkOSVersion(219)) {
        var i = {};
        return Object.keys(n).forEach(function(e) {
            var t = e.match(/^o(\d+)$/);
            t && t[1] ? i[Object.keys(keyIndex).find(function(e) {
                return keyIndex[e] === parseInt(t[1], 10)
            })] = n[e] : i[e] = n[e]
        }), i
    }
    return n
}

function transformKeysinString(e) {
    var t = {};
    e.split("&").forEach(function(e) {
        e = e.split("="), t[e[0]] = e[1]
    }), t = transformKeys(t);
    var n = [];
    return Object.keys(t).forEach(function(e) {
        n.push(e + "=" + t[e])
    }), e = n.join("&")
}

function q(e) {
    throw e
}
$.fn.focusInput = function() {
        if (this.get(0).setSelectionRange) this.focus(), this.get(0).setSelectionRange(0, this.val().length);
        else if (this.get(0).createTextRange) {
            var e = this.get(0).createTextRange();
            e.collapse(!0), e.moveEnd("character", this.val().length), e.moveStart("character", 0), e.select()
        }
        return this
    }, Number.prototype.clamp = function(e, t) {
        return Math.min(Math.max(this, e), t)
    },
    function(p) {
        "use strict";
        var t = "__RETRY__" + (new Date).getTime();
        p.ajaxPrefilter(function(s, e, i) {
            if (!s[t] && void 0 !== s.shouldRetry) {
                e[t] = !0;
                var r, l = p.Deferred(),
                    c = p.Deferred(),
                    u = {},
                    d = 0;
                (function o(a, t, n) {
                    (t ? function(e, t, n) {
                        var i, o = s.shouldRetry;
                        switch (typeof o) {
                            case "number":
                                i = t < o;
                                break;
                            case "boolean":
                                i = o;
                                break;
                            case "function":
                                i = o(e, t, n)
                        }
                        return "object" == typeof i && "function" == typeof i.then ? p.Deferred(function(e) {
                            i.then(e.resolve, function() {
                                e.resolve(!1)
                            })
                        }).promise() : p.when(i)
                    }(t, d++, a.type || "GET") : p.when(!0)).done(function(e) {
                        !0 === e ? (t ? p.ajax(a) : i).then(function(e, t, n) {
                            r = n.status, l.resolveWith(this, arguments), l.done(u[r]), c.resolveWith(this, [n, t])
                        }, function(e, t) {
                            var n = arguments,
                                i = this;
                            o(a, e, function() {
                                r = e.status, l.rejectWith(i, n), l.fail(u[r]), c.resolveWith(i, [e, t])
                            })
                        }) : n()
                    })
                })(p.extend({}, e, {
                    success: p.noop,
                    error: p.noop,
                    complete: p.noop,
                    statusCode: {}
                })), i.complete && (i.complete = c.done, i.success = l.done, i.error = l.fail), p.extend(i, l.promise()), i.statusCode = function(e) {
                    var t;
                    if (e)
                        if (function(e) {
                                return e.state ? "pending" !== e.state() : e.isResolved() || e.isRejected()
                            }(l)) l.then(e[r], e[r]);
                        else
                            for (t in e) u[t] = [u[t], e[t]];
                    return this
                }
            }
        })
    }(jQuery),
    function() {
        "use strict";

        function r(o, e) {
            var t;
            if (e = e || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = e.touchBoundary || 10, this.layer = o, this.tapDelay = e.tapDelay || 200, this.tapTimeout = e.tapTimeout || 700, !r.notNeeded(o)) {
                for (var n = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], i = 0, a = n.length; i < a; i++) this[n[i]] = s(this[n[i]], this);
                l && (o.addEventListener("mouseover", this.onMouse, !0), o.addEventListener("mousedown", this.onMouse, !0), o.addEventListener("mouseup", this.onMouse, !0)), o.addEventListener("click", this.onClick, !0), o.addEventListener("touchstart", this.onTouchStart, !1), o.addEventListener("touchmove", this.onTouchMove, !1), o.addEventListener("touchend", this.onTouchEnd, !1), o.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (o.removeEventListener = function(e, t, n) {
                    var i = Node.prototype.removeEventListener;
                    "click" === e ? i.call(o, e, t.hijacked || t, n) : i.call(o, e, t, n)
                }, o.addEventListener = function(e, t, n) {
                    var i = Node.prototype.addEventListener;
                    "click" === e ? i.call(o, e, t.hijacked || (t.hijacked = function(e) {
                        e.propagationStopped || t(e)
                    }), n) : i.call(o, e, t, n)
                }), "function" == typeof o.onclick && (t = o.onclick, o.addEventListener("click", function(e) {
                    t(e)
                }, !1), o.onclick = null)
            }

            function s(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            }
        }
        var e = 0 <= navigator.userAgent.indexOf("Windows Phone"),
            l = 0 < navigator.userAgent.indexOf("Android") && !e,
            c = /iP(ad|hone|od)/.test(navigator.userAgent) && !e,
            u = c && /OS 4_\d(_\d)?/.test(navigator.userAgent),
            d = c && /OS [6-7]_\d/.test(navigator.userAgent),
            o = 0 < navigator.userAgent.indexOf("BB10");
        r.prototype.needsClick = function(e) {
            switch (e.nodeName.toLowerCase()) {
                case "button":
                case "select":
                case "textarea":
                    if (e.disabled) return !0;
                    break;
                case "input":
                    if (c && "file" === e.type || e.disabled) return !0;
                    break;
                case "label":
                case "iframe":
                case "video":
                    return !0
            }
            return /\bneedsclick\b/.test(e.className)
        }, r.prototype.needsFocus = function(e) {
            switch (e.nodeName.toLowerCase()) {
                case "textarea":
                    return !0;
                case "select":
                    return !l;
                case "input":
                    switch (e.type) {
                        case "button":
                        case "checkbox":
                        case "file":
                        case "image":
                        case "radio":
                        case "submit":
                            return !1
                    }
                    return !e.disabled && !e.readOnly;
                default:
                    return /\bneedsfocus\b/.test(e.className)
            }
        }, r.prototype.sendClick = function(e, t) {
            var n, i;
            document.activeElement && document.activeElement !== e && document.activeElement.blur(), i = t.changedTouches[0], (n = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(e), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
        }, r.prototype.determineEventType = function(e) {
            return l && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
        }, r.prototype.focus = function(e) {
            var t;
            c && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type && "email" !== e.type ? (t = e.value.length, e.focus(), e.setSelectionRange(t, t)) : e.focus()
        }, r.prototype.updateScrollParent = function(e) {
            var t, n;
            if (!(t = e.fastClickScrollParent) || !t.contains(e)) {
                n = e;
                do {
                    if (n.scrollHeight > n.offsetHeight) {
                        t = n, e.fastClickScrollParent = n;
                        break
                    }
                    n = n.parentElement
                } while (n)
            }
            t && (t.fastClickLastScrollTop = t.scrollTop)
        }, r.prototype.getTargetElementFromEventTarget = function(e) {
            return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
        }, r.prototype.onTouchStart = function(e) {
            var t, n, i, o;
            if (e.timeStamp < 0 ? (o = (new Date).getTime(), this.isTrackingClickStartFromEvent = !1) : (o = e.timeStamp, this.isTrackingClickStartFromEvent = !0), 1 < e.targetTouches.length) return !0;
            if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], c) {
                if ((i = window.getSelection()).rangeCount && !i.isCollapsed) return !0;
                if (!u) {
                    if (n.identifier && n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
                    this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
                }
            }
            return this.trackingClick = !0, this.trackingClickStart = o, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, o - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
        }, r.prototype.touchHasMoved = function(e) {
            var t = e.changedTouches[0],
                n = this.touchBoundary;
            return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n
        }, r.prototype.onTouchMove = function(e) {
            return !this.trackingClick || (this.targetElement === this.getTargetElementFromEventTarget(e.target) && !this.touchHasMoved(e) || (this.trackingClick = !1, this.targetElement = null), !0)
        }, r.prototype.findControl = function(e) {
            return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        }, r.prototype.onTouchEnd = function(e) {
            var t, n, i, o, a, s, r = this.targetElement;
            if (s = this.isTrackingClickStartFromEvent ? e.timeStamp : (new Date).getTime(), !this.trackingClick) return !0;
            if (s - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0;
            if (s - this.trackingClickStart > this.tapTimeout) return !0;
            if (this.cancelNextClick = !1, this.lastClickTime = s, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, d && (a = e.changedTouches[0], (r = document.elementFromPoint(a.pageX - window.pageXOffset, a.pageY - window.pageYOffset) || r).fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (i = r.tagName.toLowerCase())) {
                if (t = this.findControl(r)) {
                    if (this.focus(r), l) return !1;
                    r = t
                }
            } else if (this.needsFocus(r)) return 100 < s - n || c && window.top !== window && "input" === i ? this.targetElement = null : (this.focus(r), this.sendClick(r, e), c && "select" === i || (this.targetElement = null, e.preventDefault())), !1;
            return !(!c || u || !(o = r.fastClickScrollParent) || o.fastClickLastScrollTop === o.scrollTop) || (this.needsClick(r) || (e.preventDefault(), this.sendClick(r, e)), !1)
        }, r.prototype.onTouchCancel = function() {
            this.trackingClick = !1, this.targetElement = null
        }, r.prototype.onMouse = function(e) {
            return !(this.targetElement && !e.forwardedTouchEvent && e.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) && (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), 1))
        }, r.prototype.onClick = function(e) {
            var t;
            return this.trackingClick ? (this.targetElement = null, !(this.trackingClick = !1)) : "submit" === e.target.type && 0 === e.detail || ((t = this.onMouse(e)) || (this.targetElement = null), t)
        }, r.prototype.destroy = function() {
            var e = this.layer;
            l && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
        }, r.notNeeded = function(e) {
            var t, n, i;
            if (void 0 === window.ontouchstart) return !0;
            if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!l) return !0;
                if (t = document.querySelector("meta[name=viewport]")) {
                    if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
                    if (31 < n && document.documentElement.scrollWidth <= window.outerWidth) return !0
                }
            }
            if (o && 10 <= (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] && 3 <= i[2] && (t = document.querySelector("meta[name=viewport]"))) {
                if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
                if (document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
            return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction || !!(27 <= +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] && (t = document.querySelector("meta[name=viewport]")) && (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || "none" === e.style.touchAction || "manipulation" === e.style.touchAction
        }, r.attach = function(e, t) {
            return new r(e, t)
        }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
            return r
        }) : "undefined" != typeof module && module.exports ? (module.exports = r.attach, module.exports.FastClick = r) : window.FastClick = r
    }(), "undefined" == typeof links && (links = {}), "undefined" == typeof google && (google = void 0), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
        for (var t = 0; t < this.length; t++)
            if (this[t] == e) return t;
        return -1
    }), Array.prototype.forEach || (Array.prototype.forEach = function(e, t) {
        for (var n = 0, i = this.length; n < i; ++n) e.call(t || this, this[n], n, this)
    }), links.Timeline = function(e, t) {
        if (e) {
            this.dom = {}, this.conversion = {}, this.eventParams = {}, this.groups = [], this.groupIndexes = {}, this.items = [], this.renderQueue = {
                show: [],
                hide: [],
                update: []
            }, this.renderedItems = [], this.clusterGenerator = new links.Timeline.ClusterGenerator(this), this.currentClusters = [], this.selection = void 0, this.listeners = {}, this.size = {
                actualHeight: 0,
                axis: {
                    characterMajorHeight: 0,
                    characterMajorWidth: 0,
                    characterMinorHeight: 0,
                    characterMinorWidth: 0,
                    height: 0,
                    labelMajorTop: 0,
                    labelMinorTop: 0,
                    line: 0,
                    lineMajorWidth: 0,
                    lineMinorHeight: 0,
                    lineMinorTop: 0,
                    lineMinorWidth: 0,
                    top: 0
                },
                contentHeight: 0,
                contentLeft: 0,
                contentWidth: 0,
                frameHeight: 0,
                frameWidth: 0,
                groupsLeft: 0,
                groupsWidth: 0,
                items: {
                    top: 0
                }
            }, this.dom.container = e, this.options = {
                width: "100%",
                height: "auto",
                minHeight: 0,
                groupMinHeight: 0,
                autoHeight: !0,
                eventMargin: 10,
                eventMarginAxis: 20,
                dragAreaWidth: 10,
                min: void 0,
                max: void 0,
                zoomMin: 10,
                zoomMax: 31536e10,
                moveable: !0,
                zoomable: !0,
                selectable: !0,
                unselectable: !0,
                editable: !1,
                snapEvents: !0,
                groupChangeable: !0,
                timeChangeable: !0,
                showCurrentTime: !0,
                showCustomTime: !1,
                showMajorLabels: !0,
                showMinorLabels: !0,
                showNavigation: !1,
                showButtonNew: !1,
                groupsOnRight: !1,
                groupsOrder: !0,
                axisOnTop: !1,
                stackEvents: !0,
                animate: !0,
                animateZoom: !0,
                cluster: !1,
                clusterMaxItems: 5,
                style: "box",
                customStackOrder: !1,
                locale: "en",
                MONTHS: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                MONTHS_SHORT: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                DAYS: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                DAYS_SHORT: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                ZOOM_IN: "Zoom in",
                ZOOM_OUT: "Zoom out",
                MOVE_LEFT: "Move left",
                MOVE_RIGHT: "Move right",
                NEW: "New",
                CREATE_NEW_EVENT: "Create new event"
            }, this.setOptions(t), this.clientTimeOffset = 0;
            for (var n = this.dom; n.container.hasChildNodes();) n.container.removeChild(n.container.firstChild);
            this.step = new links.Timeline.StepDate, this.itemTypes = {
                box: links.Timeline.ItemBox,
                range: links.Timeline.ItemRange,
                floatingRange: links.Timeline.ItemFloatingRange,
                dot: links.Timeline.ItemDot
            }, this.data = [], this.firstDraw = !0, this.setVisibleChartRange(void 0, void 0, !1), this.render();
            var i = this;
            setTimeout(function() {
                i.trigger("ready")
            }, 0)
        }
    }, links.Timeline.prototype.draw = function(e, t) {
        t && console.log("WARNING: Passing options in draw() is deprecated. Pass options to the constructur or use setOptions() instead!"), this.setOptions(t), this.options.selectable && links.Timeline.addClassName(this.dom.frame, "timeline-selectable"), this.setData(e), t && (t.start || t.end) ? this.setVisibleChartRange(t.start, t.end) : this.firstDraw && this.setVisibleChartRangeAuto(), this.firstDraw = !1
    }, links.Timeline.prototype.setOptions = function(e) {
        if (e) {
            for (var t in e) e.hasOwnProperty(t) && (this.options[t] = e[t]);
            if (void 0 !== links.locales && "en" !== this.options.locale) {
                var n = links.locales[this.options.locale];
                if (n)
                    for (var i in n) n.hasOwnProperty(i) && (this.options[i] = n[i])
            }
            null != e.showButtonAdd && (this.options.showButtonNew = e.showButtonAdd, console.log("WARNING: Option showButtonAdd is deprecated. Use showButtonNew instead")), null != e.intervalMin && (this.options.zoomMin = e.intervalMin, console.log("WARNING: Option intervalMin is deprecated. Use zoomMin instead")), null != e.intervalMax && (this.options.zoomMax = e.intervalMax, console.log("WARNING: Option intervalMax is deprecated. Use zoomMax instead")), e.scale && e.step && this.step.setScale(e.scale, e.step)
        }
        this.options.autoHeight = "auto" === this.options.height
    }, links.Timeline.prototype.getOptions = function() {
        return this.options
    }, links.Timeline.prototype.addItemType = function(e, t) {
        this.itemTypes[e] = t
    }, links.Timeline.mapColumnIds = function(e) {
        for (var t = {}, n = e.getNumberOfColumns(), i = !0, o = 0; o < n; o++) {
            var a = e.getColumnId(o) || e.getColumnLabel(o);
            t[a] = o, "start" != a && "end" != a && "content" != a && "group" != a && "className" != a && "editable" != a && "type" != a || (i = !1)
        }
        return i && (t.start = 0, t.end = 1, t.content = 2, 3 < n && (t.group = 3), 4 < n && (t.className = 4), 5 < n && (t.editable = 5), 6 < n && (t.type = 6)), t
    }, links.Timeline.prototype.setData = function(e) {
        this.unselectItem(), e = e || [], this.stackCancelAnimation(), this.clearItems(), this.data = e;
        var t = this.items;
        if (this.deleteGroups(), google && google.visualization && e instanceof google.visualization.DataTable)
            for (var n = links.Timeline.mapColumnIds(e), i = 0, o = e.getNumberOfRows(); i < o; i++) t.push(this.createItem({
                start: null != n.start ? e.getValue(i, n.start) : void 0,
                end: null != n.end ? e.getValue(i, n.end) : void 0,
                content: null != n.content ? e.getValue(i, n.content) : void 0,
                group: null != n.group ? e.getValue(i, n.group) : void 0,
                className: null != n.className ? e.getValue(i, n.className) : void 0,
                editable: null != n.editable ? e.getValue(i, n.editable) : void 0,
                type: null != n.type ? e.getValue(i, n.type) : void 0
            }));
        else {
            if (!links.Timeline.isArray(e)) throw "Unknown data type. DataTable or Array expected.";
            for (i = 0, o = e.length; i < o; i++) {
                var a = e[i],
                    s = this.createItem(a);
                t.push(s)
            }
        }
        this.options.cluster && this.clusterGenerator.setData(this.items), this.render({
            animate: !1
        })
    }, links.Timeline.prototype.getData = function() {
        return this.data
    }, links.Timeline.prototype.updateData = function(e, t) {
        var n, i = this.data;
        if (google && google.visualization && i instanceof google.visualization.DataTable) {
            var o = e + 1 - i.getNumberOfRows();
            0 < o && i.addRows(o);
            var a = links.Timeline.mapColumnIds(i);
            for (n in t)
                if (t.hasOwnProperty(n)) {
                    var s = a[n];
                    if (null == s) {
                        var r = t[n],
                            l = "string";
                        "number" == typeof r ? l = "number" : "boolean" == typeof r ? l = "boolean" : r instanceof Date && (l = "datetime"), s = i.addColumn(l, n)
                    }
                    i.setValue(e, s, t[n])
                }
        } else {
            if (!links.Timeline.isArray(i)) throw "Cannot update data, unknown type of data";
            var c = i[e];
            for (n in null == c && (c = {}, i[e] = c), t) t.hasOwnProperty(n) && (c[n] = t[n])
        }
    }, links.Timeline.prototype.getItemIndex = function(e) {
        for (var t = e, n = this.dom.items.frame, i = this.items, o = void 0; t.parentNode && t.parentNode !== n;) t = t.parentNode;
        if (t.parentNode === n)
            for (var a = 0, s = i.length; a < s; a++)
                if (i[a].dom === t) {
                    o = a;
                    break
                } return o
    }, links.Timeline.prototype.getClusterIndex = function(e) {
        var t = e,
            n = this.dom.items.frame,
            i = this.clusters,
            o = void 0;
        if (this.clusters) {
            for (; t.parentNode && t.parentNode !== n;) t = t.parentNode;
            if (t.parentNode === n)
                for (var a = 0, s = i.length; a < s; a++)
                    if (i[a].dom === t) {
                        o = a;
                        break
                    }
        }
        return o
    }, links.Timeline.prototype.getVisibleItems = function(e, t) {
        var n = this.items,
            i = [];
        if (n)
            for (var o = 0, a = n.length; o < a; o++) {
                var s = n[o];
                s.end ? e <= s.start && s.end <= t && i.push({
                    row: o
                }) : e <= s.start && s.start <= t && i.push({
                    row: o
                })
            }
        return i
    }, links.Timeline.prototype.setSize = function(e, t) {
        e && (this.options.width = e, this.dom.frame.style.width = e), t && (this.options.height = t, this.options.autoHeight = "auto" === this.options.height, "auto" !== t && (this.dom.frame.style.height = t)), this.render({
            animate: !1
        })
    }, links.Timeline.prototype.setVisibleChartRange = function(e, t, n) {
        var i = {};
        e && t || (i = this.getDataRange(!0)), e || (t ? i.min && i.min.valueOf() < t.valueOf() ? e = i.min : (e = new Date(t.valueOf())).setDate(e.getDate() - 7) : (e = new Date).setDate(e.getDate() - 3)), t || (i.max ? t = i.max : (t = new Date(e.valueOf())).setDate(t.getDate() + 7)), t <= e && (t = new Date(e.valueOf())).setDate(t.getDate() + 7);
        var o = this.options.min ? this.options.min : void 0;
        null != o && e.valueOf() < o.valueOf() && (e = new Date(o.valueOf()));
        var a = this.options.max ? this.options.max : void 0;
        null != a && t.valueOf() > a.valueOf() && (t = new Date(a.valueOf())), this.applyRange(e, t), null == n || 1 == n ? this.render({
            animate: !1
        }) : this.recalcConversion()
    }, links.Timeline.prototype.setVisibleChartRangeAuto = function() {
        var e = this.getDataRange(!0);
        this.setVisibleChartRange(e.min, e.max)
    }, links.Timeline.prototype.setVisibleChartRangeNow = function() {
        var e = new Date,
            t = this.end.valueOf() - this.start.valueOf(),
            n = new Date(e.valueOf() - t / 2),
            i = new Date(n.valueOf() + t);
        this.setVisibleChartRange(n, i)
    }, links.Timeline.prototype.getVisibleChartRange = function() {
        return {
            start: new Date(this.start.valueOf()),
            end: new Date(this.end.valueOf())
        }
    }, links.Timeline.prototype.getDataRange = function(e) {
        var t = this.items,
            n = void 0,
            i = void 0;
        if (t)
            for (var o = 0, a = t.length; o < a; o++) {
                var s = t[o],
                    r = null != s.start ? s.start.valueOf() : void 0,
                    l = null != s.end ? s.end.valueOf() : r;
                null != r && (n = null != n ? Math.min(n.valueOf(), r.valueOf()) : r), null != l && (i = null != i ? Math.max(i.valueOf(), l.valueOf()) : l)
            }
        if (n && i && e) {
            var c = i - n;
            n -= .05 * c, i += .05 * c
        }
        return {
            min: null != n ? new Date(n) : void 0,
            max: null != i ? new Date(i) : void 0
        }
    }, links.Timeline.prototype.render = function(e) {
        var t = (this.reflowFrame(), this.reflowAxis(), this.reflowGroups(), this.reflowItems(), this.options.animate);
        if (e && null != e.animate && (t = e.animate), this.recalcConversion(), this.clusterItems(), this.filterItems(), this.stackItems(t), this.recalcItems(), this.repaint()) {
            var n = e ? e.renderTimesLeft : void 0;
            null == n && (n = 5), 0 < n && this.render({
                animate: e ? e.animate : void 0,
                renderTimesLeft: n - 1
            })
        }
    }, links.Timeline.prototype.repaint = function() {
        var e = this.repaintFrame(),
            t = this.repaintAxis(),
            n = this.repaintGroups(),
            i = this.repaintItems();
        return this.repaintCurrentTime(), this.repaintCustomTime(), e || t || n || i
    }, links.Timeline.prototype.reflowFrame = function() {
        var e = this.dom,
            t = (this.options, this.size),
            n = !1,
            i = e.frame ? e.frame.offsetWidth : 0,
            o = e.frame ? e.frame.clientHeight : 0;
        return n = (n = n || t.frameWidth !== i) || t.frameHeight !== o, t.frameWidth = i, t.frameHeight = o, n
    }, links.Timeline.prototype.repaintFrame = function() {
        var e = !1,
            t = this.dom,
            n = this.options,
            i = this.size;
        t.frame || (t.frame = document.createElement("DIV"), t.frame.className = "timeline-frame ui-widget ui-widget-content ui-corner-all", t.container.appendChild(t.frame), e = !0);
        var o = n.autoHeight ? i.actualHeight + "px" : n.height || "100%",
            a = n.width || "100%";
        if (e = (e = e || t.frame.style.height != o) || t.frame.style.width != a, t.frame.style.height = o, t.frame.style.width = a, !t.content) {
            t.content = document.createElement("DIV"), t.content.className = "timeline-content", t.frame.appendChild(t.content);
            var s = document.createElement("DIV");
            s.style.position = "absolute", s.style.left = "0px", s.style.top = "0px", s.style.height = "100%", s.style.width = "0px", t.content.appendChild(s), t.contentTimelines = s;
            var r = this.eventParams,
                l = this;
            r.onMouseDown || (r.onMouseDown = function(e) {
                l.onMouseDown(e)
            }, links.Timeline.addEventListener(t.content, "mousedown", r.onMouseDown)), r.onTouchStart || (r.onTouchStart = function(e) {
                l.onTouchStart(e)
            }, links.Timeline.addEventListener(t.content, "touchstart", r.onTouchStart)), r.onMouseWheel || (r.onMouseWheel = function(e) {
                l.onMouseWheel(e)
            }, links.Timeline.addEventListener(t.content, "mousewheel", r.onMouseWheel)), r.onDblClick || (r.onDblClick = function(e) {
                l.onDblClick(e)
            }, links.Timeline.addEventListener(t.content, "dblclick", r.onDblClick)), e = !0
        }
        return t.content.style.left = i.contentLeft + "px", t.content.style.top = "0px", t.content.style.width = i.contentWidth + "px", t.content.style.height = i.frameHeight + "px", this.repaintNavigation(), e
    }, links.Timeline.prototype.reflowAxis = function() {
        var e = !1,
            t = this.dom,
            n = this.options,
            i = this.size,
            o = t.axis,
            a = o && o.characterMinor ? o.characterMinor.clientWidth : 0,
            s = o && o.characterMinor ? o.characterMinor.clientHeight : 0,
            r = o && o.characterMajor ? o.characterMajor.clientWidth : 0,
            l = o && o.characterMajor ? o.characterMajor.clientHeight : 0,
            c = (n.showMinorLabels ? s : 0) + (n.showMajorLabels ? l : 0),
            u = n.axisOnTop ? 0 : i.frameHeight - c,
            d = n.axisOnTop ? c : u;
        e = (e = (e = e || i.axis.top !== u) || i.axis.line !== d) || i.axis.height !== c, i.axis.top = u, i.axis.line = d, i.axis.height = c, i.axis.labelMajorTop = n.axisOnTop ? 0 : d + (n.showMinorLabels ? s : 0), i.axis.labelMinorTop = n.axisOnTop ? n.showMajorLabels ? l : 0 : d, i.axis.lineMinorTop = n.axisOnTop ? i.axis.labelMinorTop : 0, i.axis.lineMinorHeight = n.showMajorLabels ? i.frameHeight - l : i.frameHeight, i.axis.lineMinorWidth = o && o.minorLines && o.minorLines.length ? o.minorLines[0].offsetWidth : 1, i.axis.lineMajorWidth = o && o.majorLines && o.majorLines.length ? o.majorLines[0].offsetWidth : 1, e = (e = (e = (e = e || i.axis.characterMinorWidth !== a) || i.axis.characterMinorHeight !== s) || i.axis.characterMajorWidth !== r) || i.axis.characterMajorHeight !== l, i.axis.characterMinorWidth = a, i.axis.characterMinorHeight = s, i.axis.characterMajorWidth = r, i.axis.characterMajorHeight = l;
        var p = Math.max(i.frameHeight - c, 0);
        return i.contentLeft = n.groupsOnRight ? 0 : i.groupsWidth, i.contentWidth = Math.max(i.frameWidth - i.groupsWidth, 0), i.contentHeight = p, e
    }, links.Timeline.prototype.repaintAxis = function() {
        var e = !1,
            t = this.dom,
            n = this.options,
            i = this.size,
            o = this.step,
            a = t.axis;
        a || (a = {}, t.axis = a), i.axis.properties || (i.axis.properties = {}), a.minorTexts || (a.minorTexts = []), a.minorLines || (a.minorLines = []), a.majorTexts || (a.majorTexts = []), a.majorLines || (a.majorLines = []), a.frame || (a.frame = document.createElement("DIV"), a.frame.style.position = "absolute", a.frame.style.left = "0px", a.frame.style.top = "0px", t.content.appendChild(a.frame)), t.content.removeChild(a.frame), a.frame.style.width = i.contentWidth + "px", a.frame.style.height = i.axis.height + "px";
        var s = this.screenToTime(0),
            r = this.screenToTime(i.contentWidth);
        i.axis.characterMinorWidth && (this.minimumStep = this.screenToTime(6 * i.axis.characterMinorWidth) - this.screenToTime(0), o.setRange(s, r, this.minimumStep));
        var l = this.repaintAxisCharacters();
        e = e || l, this.repaintAxisStartOverwriting(), o.start();
        for (var c = void 0, u = 0; !o.end() && u < 1e3;) {
            u++;
            var d = o.getCurrent(),
                p = this.timeToScreen(d),
                h = o.isMajor();
            n.showMinorLabels && this.repaintAxisMinorText(p, o.getLabelMinor(n)), h && n.showMajorLabels ? (0 < p && (null == c && (c = p), this.repaintAxisMajorText(p, o.getLabelMajor(n))), this.repaintAxisMajorLine(p)) : this.repaintAxisMinorLine(p), o.next()
        }
        if (n.showMajorLabels) {
            var f = this.screenToTime(0),
                m = this.step.getLabelMajor(n, f),
                g = m.length * i.axis.characterMajorWidth + 10;
            (null == c || g < c) && this.repaintAxisMajorText(0, m, f)
        }
        return this.repaintAxisEndOverwriting(), this.repaintAxisHorizontal(), t.content.insertBefore(a.frame, t.content.firstChild), e
    }, links.Timeline.prototype.repaintAxisCharacters = function() {
        var e, t = !1,
            n = this.dom.axis;
        if (!n.characterMinor) {
            e = document.createTextNode("0");
            var i = document.createElement("DIV");
            i.className = "timeline-axis-text timeline-axis-text-minor", i.appendChild(e), i.style.position = "absolute", i.style.visibility = "hidden", i.style.paddingLeft = "0px", i.style.paddingRight = "0px", n.frame.appendChild(i), n.characterMinor = i, t = !0
        }
        if (!n.characterMajor) {
            e = document.createTextNode("0");
            var o = document.createElement("DIV");
            o.className = "timeline-axis-text timeline-axis-text-major", o.appendChild(e), o.style.position = "absolute", o.style.visibility = "hidden", o.style.paddingLeft = "0px", o.style.paddingRight = "0px", n.frame.appendChild(o), n.characterMajor = o, t = !0
        }
        return t
    }, links.Timeline.prototype.repaintAxisStartOverwriting = function() {
        var e = this.size.axis.properties;
        e.minorTextNum = 0, e.minorLineNum = 0, e.majorTextNum = 0, e.majorLineNum = 0
    }, links.Timeline.prototype.repaintAxisEndOverwriting = function() {
        var e, t = this.dom,
            n = this.size.axis.properties,
            i = this.dom.axis.frame,
            o = t.axis.minorTexts;
        for (e = n.minorTextNum; o.length > e;) {
            var a = o[e];
            i.removeChild(a), o.splice(e, 1)
        }
        var s = t.axis.minorLines;
        for (e = n.minorLineNum; s.length > e;) {
            var r = s[e];
            i.removeChild(r), s.splice(e, 1)
        }
        var l = t.axis.majorTexts;
        for (e = n.majorTextNum; l.length > e;) {
            var c = l[e];
            i.removeChild(c), l.splice(e, 1)
        }
        var u = t.axis.majorLines;
        for (e = n.majorLineNum; u.length > e;) {
            var d = u[e];
            i.removeChild(d), u.splice(e, 1)
        }
    }, links.Timeline.prototype.repaintAxisHorizontal = function() {
        var e = this.dom.axis,
            t = this.size,
            n = this.options,
            i = n.showMinorLabels || n.showMajorLabels;
        if (i) {
            if (!e.backgroundLine) {
                var o = document.createElement("DIV");
                o.className = "timeline-axis", o.style.position = "absolute", o.style.left = "0px", o.style.width = "100%", o.style.border = "none", e.frame.insertBefore(o, e.frame.firstChild), e.backgroundLine = o
            }
            e.backgroundLine && (e.backgroundLine.style.top = t.axis.top + "px", e.backgroundLine.style.height = t.axis.height + "px")
        } else e.backgroundLine && (e.frame.removeChild(e.backgroundLine), delete e.backgroundLine);
        if (i) {
            if (e.line) {
                var a = e.frame.removeChild(e.line);
                e.frame.appendChild(a)
            } else {
                (a = document.createElement("DIV")).className = "timeline-axis", a.style.position = "absolute", a.style.left = "0px", a.style.width = "100%", a.style.height = "0px", e.frame.appendChild(a), e.line = a
            }
            e.line.style.top = t.axis.line + "px"
        } else e.line && e.line.parentElement && (e.frame.removeChild(e.line), delete e.line)
    }, links.Timeline.prototype.repaintAxisMinorText = function(e, t) {
        var n, i = this.size,
            o = this.dom,
            a = i.axis.properties,
            s = o.axis.frame,
            r = o.axis.minorTexts,
            l = a.minorTextNum;
        if (l < r.length) n = r[l];
        else {
            var c = document.createTextNode("");
            (n = document.createElement("DIV")).appendChild(c), n.className = "timeline-axis-text timeline-axis-text-minor", n.style.position = "absolute", s.appendChild(n), r.push(n)
        }
        n.childNodes[0].nodeValue = t, n.style.left = e + "px", n.style.top = i.axis.labelMinorTop + "px", a.minorTextNum++
    }, links.Timeline.prototype.repaintAxisMinorLine = function(e) {
        var t, n = this.size.axis,
            i = this.dom,
            o = n.properties,
            a = i.axis.frame,
            s = i.axis.minorLines,
            r = o.minorLineNum;
        r < s.length ? t = s[r] : ((t = document.createElement("DIV")).className = "timeline-axis-grid timeline-axis-grid-minor", t.style.position = "absolute", t.style.width = "0px", a.appendChild(t), s.push(t)), t.style.top = n.lineMinorTop + "px", t.style.height = n.lineMinorHeight + "px", t.style.left = e - n.lineMinorWidth / 2 + "px", o.minorLineNum++
    }, links.Timeline.prototype.repaintAxisMajorText = function(e, t) {
        var n, i = this.size,
            o = i.axis.properties,
            a = this.dom.axis.frame,
            s = this.dom.axis.majorTexts,
            r = o.majorTextNum;
        if (r < s.length) n = s[r];
        else {
            var l = document.createTextNode(t);
            (n = document.createElement("DIV")).className = "timeline-axis-text timeline-axis-text-major", n.appendChild(l), n.style.position = "absolute", n.style.top = "0px", a.appendChild(n), s.push(n)
        }
        n.childNodes[0].nodeValue = t, n.style.top = i.axis.labelMajorTop + "px", n.style.left = e + "px", o.majorTextNum++
    }, links.Timeline.prototype.repaintAxisMajorLine = function(e) {
        var t, n = this.size,
            i = n.axis.properties,
            o = this.size.axis,
            a = this.dom.axis.frame,
            s = this.dom.axis.majorLines,
            r = i.majorLineNum;
        r < s.length ? t = s[r] : ((t = document.createElement("DIV")).className = "timeline-axis-grid timeline-axis-grid-major", t.style.position = "absolute", t.style.top = "0px", t.style.width = "0px", a.appendChild(t), s.push(t)), t.style.left = e - o.lineMajorWidth / 2 + "px", t.style.height = n.frameHeight + "px", i.majorLineNum++
    }, links.Timeline.prototype.reflowItems = function() {
        var e, t, n, i = !1,
            o = this.groups,
            a = this.renderedItems;
        for (o && o.forEach(function(e) {
                e.itemsHeight = 0
            }), e = 0, t = a.length; e < t; e++) {
            var s = a[e],
                r = s.dom;
            if (n = s.group, r) {
                var l = r ? r.clientWidth : 0,
                    c = r ? r.clientHeight : 0;
                i = (i = i || s.width != l) || s.height != c, s.width = l, s.height = c, s.reflow()
            }
            n && (n.itemsHeight = Math.max(this.options.groupMinHeight, n.itemsHeight ? Math.max(n.itemsHeight, s.height) : s.height))
        }
        return i
    }, links.Timeline.prototype.recalcItems = function() {
        var e, t, n, i, o, a, s = !1,
            r = this.groups,
            l = this.size,
            c = this.options,
            u = this.renderedItems,
            d = 0;
        if (0 == r.length) {
            if (c.autoHeight || c.cluster) {
                var p = 0,
                    h = 0;
                if (this.stack && this.stack.finalItems)
                    for ((i = (o = this.stack.finalItems)[0]) && i.top && (p = i.top, h = i.top + i.height), e = 1, t = o.length; e < t; e++) i = o[e], p = Math.min(p, i.top), h = Math.max(h, i.top + i.height);
                else
                    for ((n = u[0]) && n.top && (p = n.top, h = n.top + n.height), e = 1, t = u.length; e < t; e++)(n = u[e]).top && (p = Math.min(p, n.top), h = Math.max(h, n.top + n.height));
                if ((d = h - p + 2 * c.eventMarginAxis + l.axis.height) < c.minHeight && (d = c.minHeight), l.actualHeight != d && c.autoHeight && !c.axisOnTop) {
                    var f = d - l.actualHeight;
                    if (this.stack && this.stack.finalItems)
                        for (e = 0, t = (o = this.stack.finalItems).length; e < t; e++) o[e].top += f, o[e].item.top += f;
                    else
                        for (e = 0, t = u.length; e < t; e++) u[e].top += f
                }
            }
        } else {
            for (d = l.axis.height + 2 * c.eventMarginAxis, e = 0, t = r.length; e < t; e++) {
                var m = (a = r[e]).itemsHeight;
                s = s || m != a.height, a.height = Math.max(m, c.groupMinHeight), d += r[e].height + c.eventMargin
            }
            var g = c.eventMargin,
                v = c.axisOnTop ? c.eventMarginAxis + g / 2 : l.contentHeight - c.eventMarginAxis + g / 2,
                b = l.axis.height;
            for (e = 0, t = r.length; e < t; e++) a = r[e], c.axisOnTop ? (a.top = v + b, a.labelTop = v + b + (a.height - a.labelHeight) / 2, a.lineTop = v + b + a.height + g / 2, v += a.height + g) : (v -= a.height + g, a.top = v, a.labelTop = v + (a.height - a.labelHeight) / 2, a.lineTop = v - g / 2);
            s = !0
        }
        return d < c.minHeight && (d = c.minHeight), s = s || d != l.actualHeight, l.actualHeight = d, s
    }, links.Timeline.prototype.clearItems = function() {
        var t = this.renderQueue.hide;
        this.renderedItems.forEach(function(e) {
            t.push(e)
        }), this.clusterGenerator.clear(), this.items = []
    }, links.Timeline.prototype.repaintItems = function() {
        var e, t, n = !1,
            i = this.dom,
            o = this.size,
            a = this,
            s = this.renderedItems;
        i.items || (i.items = {});
        var r = i.items.frame;
        r || ((r = document.createElement("DIV")).style.position = "relative", i.content.appendChild(r), i.items.frame = r), r.style.left = "0px", r.style.top = o.items.top + "px", r.style.height = "0px", i.content.removeChild(r);
        var l = this.renderQueue,
            c = [];
        for (n = n || 0 < l.show.length || 0 < l.update.length || 0 < l.hide.length; e = l.show.shift();) e.showDOM(r), e.getImageUrls(c), s.push(e);
        for (; e = l.update.shift();) e.updateDOM(r), e.getImageUrls(c), -1 == (t = this.renderedItems.indexOf(e)) && s.push(e);
        for (; e = l.hide.shift();) e.hideDOM(r), -1 != (t = this.renderedItems.indexOf(e)) && s.splice(t, 1);
        if (s.forEach(function(e) {
                e.updatePosition(a)
            }), this.repaintDeleteButton(), this.repaintDragAreas(), i.content.appendChild(r), c.length) {
            links.imageloader.loadAll(c, function() {
                a.render()
            }, !1)
        }
        return n
    }, links.Timeline.prototype.reflowGroups = function() {
        for (var e = !1, t = this.options, n = this.size, i = this.dom, o = 0, a = this.groups, s = this.dom.groups ? this.dom.groups.labels : [], r = 0, l = a.length; r < l; r++) {
            var c = a[r],
                u = s[r];
            c.labelWidth = u ? u.clientWidth : 0, c.labelHeight = u ? u.clientHeight : 0, c.width = c.labelWidth, o = Math.max(o, c.width)
        }
        void 0 !== t.groupsWidth && (o = i.groups.frame ? i.groups.frame.clientWidth : 0), o += 1;
        var d = t.groupsOnRight ? n.frameWidth - o : 0;
        return e = (e = e || n.groupsWidth !== o) || n.groupsLeft !== d, n.groupsWidth = o, n.groupsLeft = d, e
    }, links.Timeline.prototype.repaintGroups = function() {
        var e = this.dom,
            t = this,
            n = this.options,
            i = this.size,
            o = this.groups;
        void 0 === e.groups && (e.groups = {});
        var a = e.groups.labels;
        a || (a = [], e.groups.labels = a);
        var s = e.groups.labelLines;
        s || (s = [], e.groups.labelLines = s);
        var r = e.groups.itemLines;
        r || (r = [], e.groups.itemLines = r);
        var l = e.groups.frame;
        l || ((l = document.createElement("DIV")).className = "timeline-groups-axis", l.style.position = "absolute", l.style.overflow = "hidden", l.style.top = "0px", l.style.height = "100%", e.frame.appendChild(l), e.groups.frame = l), l.style.left = i.groupsLeft + "px", l.style.width = void 0 !== n.groupsWidth ? n.groupsWidth : i.groupsWidth + "px", l.style.display = 0 == o.length ? "none" : "";
        for (var c = a.length, u = o.length, d = 0, p = Math.min(c, u); d < p; d++) {
            var h = o[d];
            (f = a[d]).innerHTML = this.getGroupName(h), f.style.display = ""
        }
        for (d = c; d < u; d++) {
            h = o[d];
            (f = document.createElement("DIV")).className = "timeline-groups-text", f.style.position = "absolute", void 0 === n.groupsWidth && (f.style.whiteSpace = "nowrap"), f.innerHTML = this.getGroupName(h), l.appendChild(f), a[d] = f, (m = document.createElement("DIV")).className = "timeline-axis-grid timeline-axis-grid-minor", m.style.position = "absolute", m.style.left = "0px", m.style.width = "100%", m.style.height = "0px", m.style.borderTopStyle = "solid", l.appendChild(m), s[d] = m, (g = document.createElement("DIV")).className = "timeline-axis-grid timeline-axis-grid-minor", g.style.position = "absolute", g.style.left = "0px", g.style.width = "100%", g.style.height = "0px", g.style.borderTopStyle = "solid", e.content.insertBefore(g, e.content.firstChild), r[d] = g
        }
        for (d = u; d < c; d++) {
            var f = a[d],
                m = s[d],
                g = r[d];
            l.removeChild(f), l.removeChild(m), e.content.removeChild(g)
        }
        a.splice(u, c - u), s.splice(u, c - u), r.splice(u, c - u), links.Timeline.addClassName(l, n.groupsOnRight ? "timeline-groups-axis-onright" : "timeline-groups-axis-onleft");
        for (d = 0, p = o.length; d < p; d++) {
            h = o[d], f = a[d], m = s[d], g = r[d];
            f.style.top = h.labelTop + "px", m.style.top = h.lineTop + "px", g.style.top = h.lineTop + "px", g.style.width = i.contentWidth + "px"
        }
        if (!e.groups.background) {
            var v = document.createElement("DIV");
            v.className = "timeline-axis", v.style.position = "absolute", v.style.left = "0px", v.style.width = "100%", v.style.border = "none", l.appendChild(v), e.groups.background = v
        }
        if (e.groups.background.style.top = i.axis.top + "px", e.groups.background.style.height = i.axis.height + "px", !e.groups.line) {
            var b = document.createElement("DIV");
            b.className = "timeline-axis", b.style.position = "absolute", b.style.left = "0px", b.style.width = "100%", b.style.height = "0px", l.appendChild(b), e.groups.line = b
        }
        if (e.groups.line.style.top = i.axis.line + "px", e.groups.frame && o.length) {
            var y = [];
            if (links.imageloader.filterImageUrls(e.groups.frame, y), y.length) {
                links.imageloader.loadAll(y, function() {
                    t.render()
                }, !1)
            }
        }
    }, links.Timeline.prototype.repaintCurrentTime = function() {
        var e = this.options,
            t = this.dom,
            n = this.size;
        if (e.showCurrentTime) {
            if (!t.currentTime) {
                var i = document.createElement("DIV");
                i.className = "timeline-currenttime", i.style.position = "absolute", i.style.top = "0px", i.style.height = "100%", t.contentTimelines.appendChild(i), t.currentTime = i
            }
            var o = new Date,
                a = new Date(o.valueOf() + this.clientTimeOffset),
                s = this.timeToScreen(a),
                r = s > -n.contentWidth && s < 2 * n.contentWidth;
            t.currentTime.style.display = r ? "" : "none", t.currentTime.style.left = s + "px", t.currentTime.title = "Current time: " + a, null != this.currentTimeTimer && (clearTimeout(this.currentTimeTimer), delete this.currentTimeTimer);
            var l = this,
                c = 1 / this.conversion.factor / 2;
            c < 30 && (c = 30), this.currentTimeTimer = setTimeout(function() {
                l.repaintCurrentTime()
            }, c)
        } else t.currentTime && (t.contentTimelines.removeChild(t.currentTime), delete t.currentTime)
    }, links.Timeline.prototype.repaintCustomTime = function() {
        var e = this.options,
            t = this.dom,
            n = this.size;
        if (e.showCustomTime) {
            if (!t.customTime) {
                var i = document.createElement("DIV");
                i.className = "timeline-customtime", i.style.position = "absolute", i.style.top = "0px", i.style.height = "100%";
                var o = document.createElement("DIV");
                o.style.position = "relative", o.style.top = "0px", o.style.left = "-10px", o.style.height = "100%", o.style.width = "20px", i.appendChild(o), t.contentTimelines.appendChild(i), t.customTime = i, this.customTime = new Date
            }
            var a = this.timeToScreen(this.customTime),
                s = a > -n.contentWidth && a < 2 * n.contentWidth;
            t.customTime.style.display = s ? "" : "none", t.customTime.style.left = a + "px", t.customTime.title = "Time: " + this.customTime
        } else t.customTime && (t.contentTimelines.removeChild(t.customTime), delete t.customTime)
    }, links.Timeline.prototype.repaintDeleteButton = function() {
        var e = this.dom,
            t = e.items.frame,
            n = e.items.deleteButton;
        n || ((n = document.createElement("DIV")).className = "timeline-navigation-delete", n.style.position = "absolute", t.appendChild(n), e.items.deleteButton = n);
        var i = this.selection && void 0 !== this.selection.index ? this.selection.index : -1,
            o = this.selection && void 0 !== this.selection.index ? this.items[i] : void 0;
        if (o && o.rendered && this.isEditable(o)) {
            var a = o.getRight(this),
                s = o.top;
            n.style.left = a + "px", n.style.top = s + "px", n.style.display = "", t.removeChild(n), t.appendChild(n)
        } else n.style.display = "none"
    }, links.Timeline.prototype.repaintDragAreas = function() {
        var e = this.options,
            t = this.dom,
            n = this.dom.items.frame,
            i = t.items.dragLeft;
        i || ((i = document.createElement("DIV")).className = "timeline-event-range-drag-left", i.style.position = "absolute", n.appendChild(i), t.items.dragLeft = i);
        var o = t.items.dragRight;
        o || ((o = document.createElement("DIV")).className = "timeline-event-range-drag-right", o.style.position = "absolute", n.appendChild(o), t.items.dragRight = o);
        var a = this.selection && void 0 !== this.selection.index ? this.selection.index : -1,
            s = this.selection && void 0 !== this.selection.index ? this.items[a] : void 0;
        if (s && s.rendered && this.isEditable(s) && (s instanceof links.Timeline.ItemRange || s instanceof links.Timeline.ItemFloatingRange)) {
            var r = s.getLeft(this),
                l = s.getRight(this),
                c = s.top,
                u = s.height;
            i.style.left = r + "px", i.style.top = c + "px", i.style.width = e.dragAreaWidth + "px", i.style.height = u + "px", i.style.display = "", n.removeChild(i), n.appendChild(i), o.style.left = l - e.dragAreaWidth + "px", o.style.top = c + "px", o.style.width = e.dragAreaWidth + "px", o.style.height = u + "px", o.style.display = "", n.removeChild(o), n.appendChild(o)
        } else i.style.display = "none", o.style.display = "none"
    }, links.Timeline.prototype.repaintNavigation = function() {
        var s = this,
            r = this.options,
            e = this.dom,
            t = e.frame,
            n = e.navBar;
        if (!n) {
            var i = r.showButtonNew && r.editable,
                o = r.showNavigation && (r.zoomable || r.moveable);
            if ((o || i) && ((n = document.createElement("DIV")).style.position = "absolute", n.className = "timeline-navigation ui-widget ui-state-highlight ui-corner-all", r.groupsOnRight ? n.style.left = "10px" : n.style.right = "10px", r.axisOnTop ? n.style.bottom = "10px" : n.style.top = "10px", e.navBar = n, t.appendChild(n)), i) {
                n.addButton = document.createElement("DIV"), n.addButton.className = "timeline-navigation-new", n.addButton.title = r.CREATE_NEW_EVENT;
                var a = document.createElement("SPAN");
                a.className = "ui-icon ui-icon-circle-plus", n.addButton.appendChild(a);
                links.Timeline.addEventListener(n.addButton, "mousedown", function(e) {
                    links.Timeline.preventDefault(e), links.Timeline.stopPropagation(e);
                    var t = s.size.contentWidth / 2,
                        n = s.screenToTime(t);
                    r.snapEvents && s.step.snap(n);
                    var i = r.NEW,
                        o = s.groups.length ? s.groups[0].content : void 0;
                    s.addItem({
                        start: n,
                        content: i,
                        group: o
                    }, !0);
                    var a = s.items.length - 1;
                    s.selectItem(a), s.applyAdd = !0, s.trigger("add"), s.applyAdd ? (s.render({
                        animate: !1
                    }), s.selectItem(a)) : s.deleteItem(a)
                }), n.appendChild(n.addButton)
            }
            if (i && o && links.Timeline.addClassName(n.addButton, "timeline-navigation-new-line"), o) {
                if (r.zoomable) {
                    n.zoomInButton = document.createElement("DIV"), n.zoomInButton.className = "timeline-navigation-zoom-in", n.zoomInButton.title = this.options.ZOOM_IN;
                    var l = document.createElement("SPAN");
                    l.className = "ui-icon ui-icon-circle-zoomin", n.zoomInButton.appendChild(l);
                    links.Timeline.addEventListener(n.zoomInButton, "mousedown", function(e) {
                        links.Timeline.preventDefault(e), links.Timeline.stopPropagation(e), s.zoom(.4), s.trigger("rangechange"), s.trigger("rangechanged")
                    }), n.appendChild(n.zoomInButton), n.zoomOutButton = document.createElement("DIV"), n.zoomOutButton.className = "timeline-navigation-zoom-out", n.zoomOutButton.title = this.options.ZOOM_OUT;
                    var c = document.createElement("SPAN");
                    c.className = "ui-icon ui-icon-circle-zoomout", n.zoomOutButton.appendChild(c);
                    links.Timeline.addEventListener(n.zoomOutButton, "mousedown", function(e) {
                        links.Timeline.preventDefault(e), links.Timeline.stopPropagation(e), s.zoom(-.4), s.trigger("rangechange"), s.trigger("rangechanged")
                    }), n.appendChild(n.zoomOutButton)
                }
                if (r.moveable) {
                    n.moveLeftButton = document.createElement("DIV"), n.moveLeftButton.className = "timeline-navigation-move-left", n.moveLeftButton.title = this.options.MOVE_LEFT;
                    var u = document.createElement("SPAN");
                    u.className = "ui-icon ui-icon-circle-arrow-w", n.moveLeftButton.appendChild(u);
                    links.Timeline.addEventListener(n.moveLeftButton, "mousedown", function(e) {
                        links.Timeline.preventDefault(e), links.Timeline.stopPropagation(e), s.move(-.2), s.trigger("rangechange"), s.trigger("rangechanged")
                    }), n.appendChild(n.moveLeftButton), n.moveRightButton = document.createElement("DIV"), n.moveRightButton.className = "timeline-navigation-move-right", n.moveRightButton.title = this.options.MOVE_RIGHT;
                    var d = document.createElement("SPAN");
                    d.className = "ui-icon ui-icon-circle-arrow-e", n.moveRightButton.appendChild(d);
                    links.Timeline.addEventListener(n.moveRightButton, "mousedown", function(e) {
                        links.Timeline.preventDefault(e), links.Timeline.stopPropagation(e), s.move(.2), s.trigger("rangechange"), s.trigger("rangechanged")
                    }), n.appendChild(n.moveRightButton)
                }
            }
        }
    }, links.Timeline.prototype.setCurrentTime = function(e) {
        var t = new Date;
        this.clientTimeOffset = e.valueOf() - t.valueOf(), this.repaintCurrentTime()
    }, links.Timeline.prototype.getCurrentTime = function() {
        var e = new Date;
        return new Date(e.valueOf() + this.clientTimeOffset)
    }, links.Timeline.prototype.setCustomTime = function(e) {
        this.customTime = new Date(e.valueOf()), this.repaintCustomTime()
    }, links.Timeline.prototype.getCustomTime = function() {
        return new Date(this.customTime.valueOf())
    }, links.Timeline.prototype.setScale = function(e, t) {
        this.step.setScale(e, t), this.render()
    }, links.Timeline.prototype.setAutoScale = function(e) {
        this.step.setAutoScale(e), this.render()
    }, links.Timeline.prototype.redraw = function() {
        this.setData(this.data)
    }, links.Timeline.prototype.checkResize = function() {
        this.render()
    }, links.Timeline.prototype.isEditable = function(e) {
        return !!e && (null != e.editable ? e.editable : this.options.editable)
    }, links.Timeline.prototype.recalcConversion = function() {
        this.conversion.offset = this.start.valueOf(), this.conversion.factor = this.size.contentWidth / (this.end.valueOf() - this.start.valueOf())
    }, links.Timeline.prototype.screenToTime = function(e) {
        var t = this.conversion;
        return new Date(e / t.factor + t.offset)
    }, links.Timeline.prototype.timeToScreen = function(e) {
        var t = this.conversion;
        return (e.valueOf() - t.offset) * t.factor
    }, links.Timeline.prototype.onTouchStart = function(e) {
        var t = this.eventParams,
            n = this;
        if (!t.touchDown) {
            t.touchDown = !0, t.zoomed = !1, this.onMouseDown(e), t.onTouchMove || (t.onTouchMove = function(e) {
                n.onTouchMove(e)
            }, links.Timeline.addEventListener(document, "touchmove", t.onTouchMove)), t.onTouchEnd || (t.onTouchEnd = function(e) {
                n.onTouchEnd(e)
            }, links.Timeline.addEventListener(document, "touchend", t.onTouchEnd));
            var i = links.Timeline.getTarget(e),
                o = this.getItemIndex(i);
            t.doubleTapStartPrev = t.doubleTapStart, t.doubleTapStart = (new Date).valueOf(), t.doubleTapItemPrev = t.doubleTapItem, t.doubleTapItem = o, links.Timeline.preventDefault(e)
        }
    }, links.Timeline.prototype.onTouchMove = function(e) {
        var t = this.eventParams;
        if (e.scale && 1 !== e.scale && (t.zoomed = !0), t.zoomed) {
            if (this.options.zoomable) {
                t.zoomed = !0;
                var n = e.scale,
                    i = t.end.valueOf() - t.start.valueOf(),
                    o = i / n - i,
                    a = new Date(parseInt(t.start.valueOf() - o / 2)),
                    s = new Date(parseInt(t.end.valueOf() + o / 2));
                this.setVisibleChartRange(a, s), this.trigger("rangechange")
            }
        } else this.onMouseMove(e);
        links.Timeline.preventDefault(e)
    }, links.Timeline.prototype.onTouchEnd = function(e) {
        var t = this.eventParams;
        t.touchDown = !1, t.zoomed && this.trigger("rangechanged"), t.onTouchMove && (links.Timeline.removeEventListener(document, "touchmove", t.onTouchMove), delete t.onTouchMove), t.onTouchEnd && (links.Timeline.removeEventListener(document, "touchend", t.onTouchEnd), delete t.onTouchEnd), this.onMouseUp(e);
        var n = (new Date).valueOf(),
            i = links.Timeline.getTarget(e);
        this.getItemIndex(i), t.doubleTapStartPrev && n - t.doubleTapStartPrev < 500 && t.doubleTapItem == t.doubleTapItemPrev && (t.touchDown = !0, this.onDblClick(e), t.touchDown = !1), links.Timeline.preventDefault(e)
    }, links.Timeline.prototype.onMouseDown = function(e) {
        e = e || window.event;
        var t = this.eventParams,
            n = this.options,
            i = this.dom;
        if ((e.which ? 1 == e.which : 1 == e.button) || t.touchDown) {
            t.mouseX = links.Timeline.getPageX(e), t.mouseY = links.Timeline.getPageY(e), t.frameLeft = links.Timeline.getAbsoluteLeft(this.dom.content), t.frameTop = links.Timeline.getAbsoluteTop(this.dom.content), t.previousLeft = 0, t.previousOffset = 0, t.moved = !1, t.start = new Date(this.start.valueOf()), t.end = new Date(this.end.valueOf()), t.target = links.Timeline.getTarget(e);
            var o = i.items && i.items.dragLeft ? i.items.dragLeft : void 0,
                a = i.items && i.items.dragRight ? i.items.dragRight : void 0;
            if (t.itemDragLeft = t.target === o, t.itemDragRight = t.target === a, t.itemDragLeft || t.itemDragRight ? (t.itemIndex = this.selection && void 0 !== this.selection.index ? this.selection.index : void 0, delete t.clusterIndex) : (t.itemIndex = this.getItemIndex(t.target), t.clusterIndex = this.getClusterIndex(t.target)), t.customTime = t.target === i.customTime || t.target.parentNode === i.customTime ? this.customTime : void 0, t.addItem = n.editable && e.ctrlKey, t.addItem) {
                var s = t.mouseX - t.frameLeft,
                    r = t.mouseY - t.frameTop,
                    l = this.screenToTime(s);
                n.snapEvents && this.step.snap(l);
                var c = new Date(l.valueOf()),
                    u = n.NEW,
                    d = this.getGroupFromHeight(r);
                this.addItem({
                    start: l,
                    end: c,
                    content: u,
                    group: this.getGroupName(d)
                }), t.itemIndex = this.items.length - 1, delete t.clusterIndex, this.selectItem(t.itemIndex), t.itemDragRight = !0
            }
            var p = this.items[t.itemIndex],
                h = this.isSelected(t.itemIndex);
            if (t.editItem = h && this.isEditable(p), t.editItem ? (t.itemStart = p.start, t.itemEnd = p.end, t.itemGroup = p.group, t.itemLeft = p.getLeft(this), t.itemRight = p.getRight(this)) : this.dom.frame.style.cursor = "move", !t.touchDown) {
                var f = this;
                t.onMouseMove || (t.onMouseMove = function(e) {
                    f.onMouseMove(e)
                }, links.Timeline.addEventListener(document, "mousemove", t.onMouseMove)), t.onMouseUp || (t.onMouseUp = function(e) {
                    f.onMouseUp(e)
                }, links.Timeline.addEventListener(document, "mouseup", t.onMouseUp)), links.Timeline.preventDefault(e)
            }
        }
    }, links.Timeline.prototype.onMouseMove = function(e) {
        e = e || window.event;
        var t = this.eventParams,
            n = this.size,
            i = this.dom,
            o = this.options,
            a = links.Timeline.getPageX(e),
            s = links.Timeline.getPageY(e);
        null == t.mouseX && (t.mouseX = a), null == t.mouseY && (t.mouseY = s);
        var r = a - t.mouseX,
            l = s - t.mouseY;
        if (1 <= Math.abs(l) && (newy = $.mobile.window.scrollTop(), $.mobile.window.scrollTop(newy - l)), 1 <= Math.abs(r) && (t.moved = !0), t.customTime) {
            var c = this.timeToScreen(t.customTime) + r;
            this.customTime = this.screenToTime(c), this.repaintCustomTime(), this.trigger("timechange")
        } else if (t.editItem) {
            var u, d, p = this.items[t.itemIndex];
            t.itemDragLeft && o.timeChangeable ? (u = t.itemLeft + r, d = t.itemRight, p.start = this.screenToTime(u), o.snapEvents && (this.step.snap(p.start), u = this.timeToScreen(p.start)), d < u && (u = d, p.start = this.screenToTime(u)), this.trigger("change")) : t.itemDragRight && o.timeChangeable ? (u = t.itemLeft, d = t.itemRight + r, p.end = this.screenToTime(d), o.snapEvents && (this.step.snap(p.end), d = this.timeToScreen(p.end)), d < u && (d = u, p.end = this.screenToTime(d)), this.trigger("change")) : o.timeChangeable && (u = t.itemLeft + r, p.start = this.screenToTime(u), o.snapEvents && (this.step.snap(p.start), u = this.timeToScreen(p.start)), p.end && (d = u + (t.itemRight - t.itemLeft), p.end = this.screenToTime(d)), this.trigger("change")), p.setPosition(u, d);
            var h = t.itemDragLeft || t.itemDragRight;
            if (this.groups.length && !h) {
                var f = s - t.frameTop,
                    m = this.getGroupFromHeight(f);
                if (o.groupsChangeable && p.group !== m) {
                    var g = this.items.indexOf(p);
                    this.changeItem(g, {
                        group: this.getGroupName(m)
                    })
                } else this.repaintDeleteButton(), this.repaintDragAreas()
            } else this.render()
        } else if (o.moveable) {
            var v = t.end.valueOf() - t.start.valueOf(),
                b = Math.round(-r / n.contentWidth * v),
                y = new Date(t.start.valueOf() + b),
                w = new Date(t.end.valueOf() + b);
            this.applyRange(y, w);
            var k = this.start.valueOf() - y.valueOf();
            k && (b += k), this.recalcConversion();
            var T = t.previousLeft || 0,
                x = parseFloat(i.items.frame.style.left) || 0,
                S = (t.previousOffset || 0) + (x - T),
                _ = -b / v * n.contentWidth + S;
            i.items.frame.style.left = _ + "px", t.previousOffset = S, t.previousLeft = parseFloat(i.items.frame.style.left) || _, this.repaintCurrentTime(), this.repaintCustomTime(), this.repaintAxis(), this.trigger("rangechange")
        }
        links.Timeline.preventDefault(e)
    }, links.Timeline.prototype.onMouseUp = function(e) {
        var t = this.eventParams,
            n = this.options;
        if (e = e || window.event, this.dom.frame.style.cursor = "auto", t.onMouseMove && (links.Timeline.removeEventListener(document, "mousemove", t.onMouseMove), delete t.onMouseMove), t.onMouseUp && (links.Timeline.removeEventListener(document, "mouseup", t.onMouseUp), delete t.onMouseUp), t.customTime) this.trigger("timechanged");
        else if (t.editItem) {
            var i = this.items[t.itemIndex];
            if (t.moved || t.addItem) {
                if (this.applyChange = !0, this.applyAdd = !0, this.updateData(t.itemIndex, {
                        start: i.start,
                        end: i.end
                    }), this.trigger(t.addItem ? "add" : "changed"), i = this.items[t.itemIndex], t.addItem) this.applyAdd ? this.updateData(t.itemIndex, {
                    start: i.start,
                    end: i.end,
                    content: i.content,
                    group: this.getGroupName(i.group)
                }) : this.deleteItem(t.itemIndex);
                else if (this.applyChange) this.updateData(t.itemIndex, {
                    start: i.start,
                    end: i.end
                });
                else {
                    delete this.applyChange, delete this.applyAdd, (i = this.items[t.itemIndex]).dom, i.start = t.itemStart, i.end = t.itemEnd, i.group = t.itemGroup, i.setPosition(t.itemLeft, t.itemRight), this.updateData(t.itemIndex, {
                        start: t.itemStart,
                        end: t.itemEnd
                    })
                }
                this.options.cluster && this.clusterGenerator.updateData(), this.render()
            }
        } else t.moved || t.zoomed ? (this.render(), (t.moved && n.moveable || t.zoomed && n.zoomable) && this.trigger("rangechanged")) : t.target === this.dom.items.deleteButton ? this.selection && void 0 !== this.selection.index && this.confirmDeleteItem(this.selection.index) : n.selectable && (null != t.itemIndex ? this.isSelected(t.itemIndex) || (this.selectItem(t.itemIndex), this.trigger("select")) : null != t.clusterIndex ? (this.selectCluster(t.clusterIndex), this.trigger("select")) : n.unselectable && (this.unselectItem(), this.trigger("select")))
    }, links.Timeline.prototype.onDblClick = function(e) {
        var t = this.eventParams,
            n = this.options,
            i = this.dom;
        if (this.size, e = e || window.event, null != t.itemIndex) {
            var o = this.items[t.itemIndex];
            o && this.isEditable(o) && this.trigger("edit")
        } else if (n.editable) {
            t.mouseX = links.Timeline.getPageX(e), t.mouseY = links.Timeline.getPageY(e);
            var a = t.mouseX - links.Timeline.getAbsoluteLeft(i.content),
                s = t.mouseY - links.Timeline.getAbsoluteTop(i.content),
                r = this.screenToTime(a);
            n.snapEvents && this.step.snap(r);
            var l = n.NEW,
                c = this.getGroupFromHeight(s);
            this.addItem({
                start: r,
                content: l,
                group: this.getGroupName(c)
            }, !0), t.itemIndex = this.items.length - 1, this.selectItem(t.itemIndex), this.applyAdd = !0, this.trigger("add"), this.applyAdd ? (this.render({
                animate: !1
            }), this.selectItem(t.itemIndex)) : this.deleteItem(t.itemIndex)
        }
        links.Timeline.preventDefault(e)
    }, links.Timeline.prototype.onMouseWheel = function(e) {
        if (this.options.zoomable) {
            e = e || window.event;
            var t = 0;
            if (e.wheelDelta ? t = e.wheelDelta / 120 : e.detail && (t = -e.detail / 3), t) {
                var n = this;
                e.shiftKey ? n.move(-.2 * t) : (i = t / 5, o = links.Timeline.getAbsoluteLeft(n.dom.content), a = links.Timeline.getPageX(e), s = null != a && null != o ? n.screenToTime(a - o) : void 0, n.zoom(i, s)), n.trigger("rangechange"), n.trigger("rangechanged")
            }
            links.Timeline.preventDefault(e)
        }
        var i, o, a, s
    }, links.Timeline.prototype.zoom = function(e, t) {
        null == t && (t = new Date((this.start.valueOf() + this.end.valueOf()) / 2)), 1 <= e && (e = .9), e <= -1 && (e = -.9), e < 0 && (e /= 1 + e);
        var n = this.start.valueOf() - t,
            i = this.end.valueOf() - t,
            o = new Date(this.start.valueOf() - n * e),
            a = new Date(this.end.valueOf() - i * e),
            s = a.valueOf() - o.valueOf(),
            r = Number(this.options.zoomMin) || 10;
        r < 10 && (r = 10), r <= s && (this.applyRange(o, a, t), this.render({
            animate: this.options.animate && this.options.animateZoom
        }))
    }, links.Timeline.prototype.move = function(e) {
        var t = this.end.valueOf() - this.start.valueOf(),
            n = new Date(this.start.valueOf() + t * e),
            i = new Date(this.end.valueOf() + t * e);
        this.applyRange(n, i), this.render()
    }, links.Timeline.prototype.applyRange = function(e, t, n) {
        var i = e.valueOf(),
            o = t.valueOf(),
            a = o - i,
            s = this.options,
            r = Number(s.zoomMin) || 10;
        r < 10 && (r = 10);
        var l = Number(s.zoomMax) || 31536e10;
        31536e10 < l && (l = 31536e10), l < r && (l = r);
        var c = s.min ? s.min.valueOf() : void 0,
            u = s.max ? s.max.valueOf() : void 0;
        if (null != c && null != u) {
            if (u <= c) {
                u = c + 864e5
            }
            u - c < l && (l = u - c), u - c < r && (r = u - c)
        }
        if (o <= i && (o += 864e5), a < r) {
            var d = r - a,
                p = n ? (n.valueOf() - i) / a : .5;
            i -= Math.round(d * p), o += Math.round(d * (1 - p))
        }
        if (l < a) {
            var d = a - l;
            p = n ? (n.valueOf() - i) / a : .5;
            i += Math.round(d * p), o -= Math.round(d * (1 - p))
        }
        null != c && (d = i - c) < 0 && (i -= d, o -= d);
        null != u && (d = u - o) < 0 && (i += d, o += d);
        this.start = new Date(i), this.end = new Date(o)
    }, links.Timeline.prototype.confirmDeleteItem = function(e) {
        this.applyDelete = !0, this.isSelected(e) || this.selectItem(e), this.trigger("delete"), this.applyDelete && this.deleteItem(e), delete this.applyDelete
    }, links.Timeline.prototype.deleteItem = function(e, t) {
        if (e >= this.items.length) throw "Cannot delete row, index out of range";
        this.selection && void 0 !== this.selection.index && (this.selection.index == e ? this.unselectItem() : this.selection.index > e && this.selection.index--);
        var n = this.items.splice(e, 1)[0];
        if (this.renderQueue.hide.push(n), this.data)
            if (google && google.visualization && this.data instanceof google.visualization.DataTable) this.data.removeRow(e);
            else {
                if (!links.Timeline.isArray(this.data)) throw "Cannot delete row from data, unknown data type";
                this.data.splice(e, 1)
            } this.options.cluster && this.clusterGenerator.updateData(), t || this.render()
    }, links.Timeline.prototype.deleteAllItems = function() {
        if (this.unselectItem(), this.clearItems(), this.deleteGroups(), this.data)
            if (google && google.visualization && this.data instanceof google.visualization.DataTable) this.data.removeRows(0, this.data.getNumberOfRows());
            else {
                if (!links.Timeline.isArray(this.data)) throw "Cannot delete row from data, unknown data type";
                this.data.splice(0, this.data.length)
            } this.options.cluster && this.clusterGenerator.updateData(), this.render()
    }, links.Timeline.prototype.getGroupFromHeight = function(e) {
        var t, n, i = this.groups;
        if (i.length) {
            if (this.options.axisOnTop) {
                for (t = i.length - 1; 0 <= t; t--)
                    if (e > (n = i[t]).top) return n
            } else
                for (t = 0; t < i.length; t++)
                    if (e > (n = i[t]).top) return n;
            return n
        }
    }, links.Timeline.Item = function(e, t) {
        if (e && (this.start = e.start, this.end = e.end, this.content = e.content, this.className = e.className, this.editable = e.editable, this.group = e.group, this.type = e.type), this.top = 0, this.left = 0, this.width = 0, this.height = 0, this.lineWidth = 0, this.dotWidth = 0, this.dotHeight = 0, this.rendered = !1, t)
            for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n])
    }, links.Timeline.Item.prototype.reflow = function() {
        return !1
    }, links.Timeline.Item.prototype.getImageUrls = function(e) {
        this.dom && links.imageloader.filterImageUrls(this.dom, e)
    }, links.Timeline.Item.prototype.select = function() {}, links.Timeline.Item.prototype.unselect = function() {}, links.Timeline.Item.prototype.createDOM = function() {}, links.Timeline.Item.prototype.showDOM = function() {}, links.Timeline.Item.prototype.hideDOM = function() {}, links.Timeline.Item.prototype.updateDOM = function() {}, links.Timeline.Item.prototype.updatePosition = function() {}, links.Timeline.Item.prototype.isRendered = function() {
        return this.rendered
    }, links.Timeline.Item.prototype.isVisible = function() {
        return !1
    }, links.Timeline.Item.prototype.setPosition = function() {}, links.Timeline.Item.prototype.getLeft = function() {
        return 0
    }, links.Timeline.Item.prototype.getRight = function() {
        return 0
    }, links.Timeline.Item.prototype.getWidth = function() {
        return this.width || 0
    }, links.Timeline.ItemBox = function(e, t) {
        links.Timeline.Item.call(this, e, t)
    }, links.Timeline.ItemBox.prototype = new links.Timeline.Item, links.Timeline.ItemBox.prototype.reflow = function() {
        var e = this.dom,
            t = e.dot.offsetHeight,
            n = e.dot.offsetWidth,
            i = e.line.offsetWidth,
            o = this.dotHeight != t || this.dotWidth != n || this.lineWidth != i;
        return this.dotHeight = t, this.dotWidth = n, this.lineWidth = i, o
    }, links.Timeline.ItemBox.prototype.select = function() {
        var e = this.dom;
        links.Timeline.addClassName(e, "timeline-event-selected ui-state-active"), links.Timeline.addClassName(e.line, "timeline-event-selected ui-state-active"), links.Timeline.addClassName(e.dot, "timeline-event-selected ui-state-active")
    }, links.Timeline.ItemBox.prototype.unselect = function() {
        var e = this.dom;
        links.Timeline.removeClassName(e, "timeline-event-selected ui-state-active"), links.Timeline.removeClassName(e.line, "timeline-event-selected ui-state-active"), links.Timeline.removeClassName(e.dot, "timeline-event-selected ui-state-active")
    }, links.Timeline.ItemBox.prototype.createDOM = function() {
        var e = document.createElement("DIV");
        e.style.position = "absolute", e.style.left = this.left + "px", e.style.top = this.top + "px";
        var t = document.createElement("DIV");
        t.className = "timeline-event-content", t.innerHTML = this.content, e.appendChild(t);
        var n = document.createElement("DIV");
        n.style.position = "absolute", n.style.width = "0px", e.line = n;
        var i = document.createElement("DIV");
        return i.style.position = "absolute", i.style.width = "0px", i.style.height = "0px", e.dot = i, this.dom = e, this.updateDOM(), e
    }, links.Timeline.ItemBox.prototype.showDOM = function(e) {
        var t = this.dom;
        (t = t || this.createDOM()).parentNode != e && (t.parentNode && this.hideDOM(), e.appendChild(t), e.insertBefore(t.line, e.firstChild), e.appendChild(t.dot), this.rendered = !0)
    }, links.Timeline.ItemBox.prototype.hideDOM = function() {
        var e = this.dom;
        e && (e.parentNode && e.parentNode.removeChild(e), e.line && e.line.parentNode && e.line.parentNode.removeChild(e.line), e.dot && e.dot.parentNode && e.dot.parentNode.removeChild(e.dot), this.rendered = !1)
    }, links.Timeline.ItemBox.prototype.updateDOM = function() {
        var e = this.dom;
        if (e) {
            var t = e.line,
                n = e.dot;
            e.firstChild.innerHTML = this.content, e.className = "timeline-event timeline-event-box ui-widget ui-state-default", t.className = "timeline-event timeline-event-line ui-widget ui-state-default", n.className = "timeline-event timeline-event-dot ui-widget ui-state-default", this.isCluster && (links.Timeline.addClassName(e, "timeline-event-cluster ui-widget-header"), links.Timeline.addClassName(t, "timeline-event-cluster ui-widget-header"), links.Timeline.addClassName(n, "timeline-event-cluster ui-widget-header")), this.className && (links.Timeline.addClassName(e, this.className), links.Timeline.addClassName(t, this.className), links.Timeline.addClassName(n, this.className))
        }
    }, links.Timeline.ItemBox.prototype.updatePosition = function(e) {
        var t = this.dom;
        if (t) {
            var n = e.timeToScreen(this.start),
                i = e.options.axisOnTop,
                o = e.size.axis.top,
                a = e.size.axis.height,
                s = e.options.box && e.options.box.align ? e.options.box.align : void 0;
            t.style.top = this.top + "px", t.style.left = "right" == s ? n - this.width + "px" : "left" == s ? n + "px" : n - this.width / 2 + "px";
            var r = t.line,
                l = t.dot;
            r.style.left = n - this.lineWidth / 2 + "px", l.style.left = n - this.dotWidth / 2 + "px", i ? (r.style.top = a + "px", r.style.height = Math.max(this.top - a, 0) + "px", l.style.top = a - this.dotHeight / 2 + "px") : (r.style.top = this.top + this.height + "px", r.style.height = Math.max(o - this.top - this.height, 0) + "px", l.style.top = o - this.dotHeight / 2 + "px")
        }
    }, links.Timeline.ItemBox.prototype.isVisible = function(e, t) {
        return !this.cluster && (this.start > e && this.start < t)
    }, links.Timeline.ItemBox.prototype.setPosition = function(e) {
        var t = this.dom;
        t.style.left = e - this.width / 2 + "px", t.line.style.left = e - this.lineWidth / 2 + "px", t.dot.style.left = e - this.dotWidth / 2 + "px", this.group && (this.top = this.group.top, t.style.top = this.top + "px")
    }, links.Timeline.ItemBox.prototype.getLeft = function(e) {
        var t = e.options.box && e.options.box.align ? e.options.box.align : void 0;
        return e.timeToScreen(this.start) - ("right" == t ? width : this.width / 2)
    }, links.Timeline.ItemBox.prototype.getRight = function(e) {
        var t = e.options.box && e.options.box.align ? e.options.box.align : void 0,
            n = e.timeToScreen(this.start);
        return "right" == t ? n : "left" == t ? n + this.width : n + this.width / 2
    }, links.Timeline.ItemRange = function(e, t) {
        links.Timeline.Item.call(this, e, t)
    }, links.Timeline.ItemRange.prototype = new links.Timeline.Item, links.Timeline.ItemRange.prototype.select = function() {
        var e = this.dom;
        links.Timeline.addClassName(e, "timeline-event-selected ui-state-active")
    }, links.Timeline.ItemRange.prototype.unselect = function() {
        var e = this.dom;
        links.Timeline.removeClassName(e, "timeline-event-selected ui-state-active")
    }, links.Timeline.ItemRange.prototype.createDOM = function() {
        var e = document.createElement("DIV");
        e.style.position = "absolute";
        var t = document.createElement("DIV");
        return t.className = "timeline-event-content", e.appendChild(t), this.dom = e, this.updateDOM(), e
    }, links.Timeline.ItemRange.prototype.showDOM = function(e) {
        var t = this.dom;
        (t = t || this.createDOM()).parentNode != e && (t.parentNode && this.hideDOM(), e.appendChild(t), this.rendered = !0)
    }, links.Timeline.ItemRange.prototype.hideDOM = function() {
        var e = this.dom;
        e && (e.parentNode && e.parentNode.removeChild(e), this.rendered = !1)
    }, links.Timeline.ItemRange.prototype.updateDOM = function() {
        var e = this.dom;
        e && (e.firstChild.innerHTML = this.content, e.className = "timeline-event timeline-event-range ui-widget ui-state-default", this.isCluster && links.Timeline.addClassName(e, "timeline-event-cluster ui-widget-header"), this.className && links.Timeline.addClassName(e, this.className))
    }, links.Timeline.ItemRange.prototype.updatePosition = function(e) {
        var t = this.dom;
        if (t) {
            var n = e.size.contentWidth,
                i = e.timeToScreen(this.start),
                o = e.timeToScreen(this.end);
            i < -n && (i = -n), 2 * n < o && (o = 2 * n), t.style.top = this.top + "px", t.style.left = i + "px", t.style.width = Math.max(o - i, 1) + "px"
        }
    }, links.Timeline.ItemRange.prototype.isVisible = function(e, t) {
        return !this.cluster && (this.end > e && this.start < t)
    }, links.Timeline.ItemRange.prototype.setPosition = function(e, t) {
        var n = this.dom;
        n.style.left = e + "px", n.style.width = t - e + "px", this.group && (this.top = this.group.top, n.style.top = this.top + "px")
    }, links.Timeline.ItemRange.prototype.getLeft = function(e) {
        return e.timeToScreen(this.start)
    }, links.Timeline.ItemRange.prototype.getRight = function(e) {
        return e.timeToScreen(this.end)
    }, links.Timeline.ItemRange.prototype.getWidth = function(e) {
        return e.timeToScreen(this.end) - e.timeToScreen(this.start)
    }, links.Timeline.ItemFloatingRange = function(e, t) {
        links.Timeline.Item.call(this, e, t)
    }, links.Timeline.ItemFloatingRange.prototype = new links.Timeline.Item, links.Timeline.ItemFloatingRange.prototype.select = function() {
        var e = this.dom;
        links.Timeline.addClassName(e, "timeline-event-selected ui-state-active")
    }, links.Timeline.ItemFloatingRange.prototype.unselect = function() {
        var e = this.dom;
        links.Timeline.removeClassName(e, "timeline-event-selected ui-state-active")
    }, links.Timeline.ItemFloatingRange.prototype.createDOM = function() {
        var e = document.createElement("DIV");
        e.style.position = "absolute";
        var t = document.createElement("DIV");
        return t.className = "timeline-event-content", e.appendChild(t), this.dom = e, this.updateDOM(), e
    }, links.Timeline.ItemFloatingRange.prototype.showDOM = function(e) {
        var t = this.dom;
        (t = t || this.createDOM()).parentNode != e && (t.parentNode && this.hideDOM(), e.appendChild(t), this.rendered = !0)
    }, links.Timeline.ItemFloatingRange.prototype.hideDOM = function() {
        var e = this.dom;
        e && (e.parentNode && e.parentNode.removeChild(e), this.rendered = !1)
    }, links.Timeline.ItemFloatingRange.prototype.updateDOM = function() {
        var e = this.dom;
        e && (e.firstChild.innerHTML = this.content, e.className = "timeline-event timeline-event-range ui-widget ui-state-default", this.isCluster && links.Timeline.addClassName(e, "timeline-event-cluster ui-widget-header"), this.className && links.Timeline.addClassName(e, this.className))
    }, links.Timeline.ItemFloatingRange.prototype.updatePosition = function(e) {
        var t = this.dom;
        if (t) {
            var n = e.size.contentWidth,
                i = this.getLeft(e),
                o = this.getRight(e);
            i < -n && (i = -n), 2 * n < o && (o = 2 * n), t.style.top = this.top + "px", t.style.left = i + "px", t.style.width = Math.max(o - i, 1) + "px"
        }
    }, links.Timeline.ItemFloatingRange.prototype.isVisible = function(e, t) {
        return !this.cluster && (this.end && this.start ? this.end > e && this.start < t : this.start ? this.start < t : !this.end || this.end > e)
    }, links.Timeline.ItemFloatingRange.prototype.setPosition = function(e, t) {
        var n = this.dom;
        n.style.left = e + "px", n.style.width = t - e + "px", this.group && (this.top = this.group.top, n.style.top = this.top + "px")
    }, links.Timeline.ItemFloatingRange.prototype.getLeft = function(e) {
        return this.start ? e.timeToScreen(this.start) : 0
    }, links.Timeline.ItemFloatingRange.prototype.getRight = function(e) {
        return this.end ? e.timeToScreen(this.end) : e.size.contentWidth
    }, links.Timeline.ItemFloatingRange.prototype.getWidth = function(e) {
        return this.getRight(e) - this.getLeft(e)
    }, links.Timeline.ItemDot = function(e, t) {
        links.Timeline.Item.call(this, e, t)
    }, links.Timeline.ItemDot.prototype = new links.Timeline.Item, links.Timeline.ItemDot.prototype.reflow = function() {
        var e = this.dom,
            t = e.dot.offsetHeight,
            n = e.dot.offsetWidth,
            i = e.content.offsetHeight,
            o = this.dotHeight != t || this.dotWidth != n || this.contentHeight != i;
        return this.dotHeight = t, this.dotWidth = n, this.contentHeight = i, o
    }, links.Timeline.ItemDot.prototype.select = function() {
        var e = this.dom;
        links.Timeline.addClassName(e, "timeline-event-selected ui-state-active")
    }, links.Timeline.ItemDot.prototype.unselect = function() {
        var e = this.dom;
        links.Timeline.removeClassName(e, "timeline-event-selected ui-state-active")
    }, links.Timeline.ItemDot.prototype.createDOM = function() {
        var e = document.createElement("DIV");
        e.style.position = "absolute";
        var t = document.createElement("DIV");
        t.className = "timeline-event-content", e.appendChild(t);
        var n = document.createElement("DIV");
        return n.style.position = "absolute", n.style.width = "0px", n.style.height = "0px", e.appendChild(n), e.content = t, e.dot = n, this.dom = e, this.updateDOM(), e
    }, links.Timeline.ItemDot.prototype.showDOM = function(e) {
        var t = this.dom;
        (t = t || this.createDOM()).parentNode != e && (t.parentNode && this.hideDOM(), e.appendChild(t), this.rendered = !0)
    }, links.Timeline.ItemDot.prototype.hideDOM = function() {
        var e = this.dom;
        e && (e.parentNode && e.parentNode.removeChild(e), this.rendered = !1)
    }, links.Timeline.ItemDot.prototype.updateDOM = function() {
        if (this.dom) {
            var e = this.dom,
                t = e.dot;
            e.firstChild.innerHTML = this.content, e.className = "timeline-event-dot-container", t.className = "timeline-event timeline-event-dot ui-widget ui-state-default", this.isCluster && (links.Timeline.addClassName(e, "timeline-event-cluster ui-widget-header"), links.Timeline.addClassName(t, "timeline-event-cluster ui-widget-header")), this.className && (links.Timeline.addClassName(e, this.className), links.Timeline.addClassName(t, this.className))
        }
    }, links.Timeline.ItemDot.prototype.updatePosition = function(e) {
        var t = this.dom;
        if (t) {
            var n = e.timeToScreen(this.start);
            t.style.top = this.top + "px", t.style.left = n - this.dotWidth / 2 + "px", t.content.style.marginLeft = 1.5 * this.dotWidth + "px", t.dot.style.top = (this.height - this.dotHeight) / 2 + "px"
        }
    }, links.Timeline.ItemDot.prototype.isVisible = function(e, t) {
        return !this.cluster && (this.start > e && this.start < t)
    }, links.Timeline.ItemDot.prototype.setPosition = function(e) {
        var t = this.dom;
        t.style.left = e - this.dotWidth / 2 + "px", this.group && (this.top = this.group.top, t.style.top = this.top + "px")
    }, links.Timeline.ItemDot.prototype.getLeft = function(e) {
        return e.timeToScreen(this.start)
    }, links.Timeline.ItemDot.prototype.getRight = function(e) {
        return e.timeToScreen(this.start) + this.width
    }, links.Timeline.prototype.getItem = function(e) {
        if (e >= this.items.length) throw "Cannot get item, index out of range";
        var t, n = this.data;
        if (google && google.visualization && n instanceof google.visualization.DataTable) {
            var i = links.Timeline.mapColumnIds(n);
            for (var o in t = {}, i) i.hasOwnProperty(o) && (t[o] = this.data.getValue(e, i[o]))
        } else {
            if (!links.Timeline.isArray(this.data)) throw "Unknown data type. DataTable or Array expected.";
            t = links.Timeline.clone(this.data[e])
        }
        var a = this.items[e];
        return t.start = new Date(a.start.valueOf()), a.end && (t.end = new Date(a.end.valueOf())), t.content = a.content, a.group && (t.group = this.getGroupName(a.group)), a.className && (t.className = a.className), void 0 !== a.editable && (t.editable = a.editable), a.type && (t.type = a.type), t
    }, links.Timeline.prototype.getCluster = function(e) {
        if (e >= this.clusters.length) throw "Cannot get cluster, index out of range";
        var t = {},
            n = this.clusters[e],
            i = n.items;
        t.start = new Date(n.start.valueOf()), n.type && (t.type = n.type), t.items = [];
        for (var o = 0; o < i.length; o++)
            for (var a = 0; a < this.items.length; a++)
                if (this.items[a] == i[o]) {
                    t.items.push(this.getItem(a));
                    break
                } return t
    }, links.Timeline.prototype.addItem = function(e, t) {
        var n = [e];
        this.addItems(n, t)
    }, links.Timeline.prototype.addItems = function(e, t) {
        var n = this,
            i = this.items;
        e.forEach(function(e) {
            var t = i.length;
            i.push(n.createItem(e)), n.updateData(t, e)
        }), this.options.cluster && this.clusterGenerator.updateData(), t || this.render({
            animate: !1
        })
    }, links.Timeline.prototype.createItem = function(e) {
        var t = e.type || (e.end ? "range" : this.options.style),
            n = links.Timeline.clone(e);
        n.type = t, n.group = this.getGroup(e.group);
        var i, o = this.options;
        return i = o.axisOnTop ? this.size.axis.height + o.eventMarginAxis + o.eventMargin / 2 : this.size.contentHeight - o.eventMarginAxis - o.eventMargin / 2, t in this.itemTypes ? new this.itemTypes[t](n, {
            top: i
        }) : (console.log('ERROR: Unknown event type "' + t + '"'), new links.Timeline.Item(n, {
            top: i
        }))
    }, links.Timeline.prototype.changeItem = function(e, t, n) {
        var i = this.items[e];
        if (!i) throw "Cannot change item, index out of range";
        var o = this.createItem({
            start: t.hasOwnProperty("start") ? t.start : i.start,
            end: t.hasOwnProperty("end") ? t.end : i.end,
            content: t.hasOwnProperty("content") ? t.content : i.content,
            group: t.hasOwnProperty("group") ? t.group : this.getGroupName(i.group),
            className: t.hasOwnProperty("className") ? t.className : i.className,
            editable: t.hasOwnProperty("editable") ? t.editable : i.editable,
            type: t.hasOwnProperty("type") ? t.type : i.type
        });
        this.items[e] = o, this.renderQueue.hide.push(i), this.renderQueue.show.push(o), this.updateData(e, t), this.options.cluster && this.clusterGenerator.updateData(), n || (this.render({
            animate: !1
        }), this.selection && this.selection.index == e && o.select())
    }, links.Timeline.prototype.deleteGroups = function() {
        this.groups = [], this.groupIndexes = {}
    }, links.Timeline.prototype.getGroup = function(e) {
        var t = this.groups,
            n = this.groupIndexes,
            i = void 0,
            o = n[e];
        if (null == o && null != e) {
            i = {
                content: e,
                labelTop: 0,
                lineTop: 0
            }, t.push(i), 1 == this.options.groupsOrder ? t = t.sort(function(e, t) {
                return e.content > t.content ? 1 : e.content < t.content ? -1 : 0
            }) : "function" == typeof this.options.groupsOrder && (t = t.sort(this.options.groupsOrder));
            for (var a = 0, s = t.length; a < s; a++) n[t[a].content] = a
        } else i = t[o];
        return i
    }, links.Timeline.prototype.getGroupName = function(e) {
        return e ? e.content : void 0
    }, links.Timeline.prototype.cancelChange = function() {
        this.applyChange = !1
    }, links.Timeline.prototype.cancelDelete = function() {
        this.applyDelete = !1
    }, links.Timeline.prototype.cancelAdd = function() {
        this.applyAdd = !1
    }, links.Timeline.prototype.setSelection = function(e) {
        if (null != e && 0 < e.length) {
            if (null != e[0].row) {
                var t = e[0].row;
                if (this.items[t]) {
                    var n = this.items[t];
                    this.selectItem(t);
                    var i, o = n.start,
                        a = n.end;
                    i = null != a ? (a.valueOf() + o.valueOf()) / 2 : o.valueOf();
                    var s = this.end.valueOf() - this.start.valueOf(),
                        r = new Date(i - s / 2),
                        l = new Date(i + s / 2);
                    return this.setVisibleChartRange(r, l), !0
                }
            }
        } else this.unselectItem();
        return !1
    }, links.Timeline.prototype.getSelection = function() {
        var e = [];
        return this.selection && e.push(void 0 !== this.selection.index ? {
            row: this.selection.index
        } : {
            cluster: this.selection.cluster
        }), e
    }, links.Timeline.prototype.selectItem = function(e) {
        if (this.unselectItem(), this.selection = void 0, null != this.items[e]) {
            var t = this.items[e];
            t.dom, this.selection = {
                index: e
            }, t && t.dom && (this.isEditable(t) && (t.dom.style.cursor = "move"), t.select()), this.repaintDeleteButton(), this.repaintDragAreas()
        }
    }, links.Timeline.prototype.selectCluster = function(e) {
        this.unselectItem(), this.selection = void 0, null != this.clusters[e] && (this.selection = {
            cluster: e
        }, this.repaintDeleteButton(), this.repaintDragAreas())
    }, links.Timeline.prototype.isSelected = function(e) {
        return this.selection && this.selection.index == e
    }, links.Timeline.prototype.unselectItem = function() {
        if (this.selection && void 0 !== this.selection.index) {
            var e = this.items[this.selection.index];
            if (e && e.dom) e.dom.style.cursor = "", e.unselect();
            this.selection = void 0, this.repaintDeleteButton(), this.repaintDragAreas()
        }
    }, links.Timeline.prototype.stackItems = function(e) {
        null == e && (e = !1);
        var t = this.stack;
        if (t || (t = {}, this.stack = t), t.sortedItems = this.stackOrder(this.renderedItems), t.finalItems = this.stackCalculateFinal(t.sortedItems), e || t.timer) {
            var n = this,
                i = function() {
                    var e = n.stackMoveOneStep(t.sortedItems, t.finalItems);
                    n.repaint(), e ? delete t.timer : t.timer = setTimeout(i, 30)
                };
            t.timer || (t.timer = setTimeout(i, 30))
        } else this.stackMoveToFinal(t.sortedItems, t.finalItems)
    }, links.Timeline.prototype.stackCancelAnimation = function() {
        this.stack && this.stack.timer && (clearTimeout(this.stack.timer), delete this.stack.timer)
    }, links.Timeline.prototype.getItemsByGroup = function(e) {
        for (var t = {}, n = 0; n < e.length; ++n) {
            var i = e[n],
                o = "undefined";
            i.group && (o = i.group.content ? i.group.content : i.group), t[o] || (t[o] = []), t[o].push(i)
        }
        return t
    }, links.Timeline.prototype.stackOrder = function(e) {
        var t = e.concat([]),
            n = this.options.customStackOrder && "function" == typeof this.options.customStackOrder ? this.options.customStackOrder : function(e, t) {
                return (e instanceof links.Timeline.ItemRange || e instanceof links.Timeline.ItemFloatingRange) && !(t instanceof links.Timeline.ItemRange || t instanceof links.Timeline.ItemFloatingRange) ? -1 : e instanceof links.Timeline.ItemRange || e instanceof links.Timeline.ItemFloatingRange || !(t instanceof links.Timeline.ItemRange || t instanceof links.Timeline.ItemFloatingRange) ? e.left - t.left : 1
            };
        return t.sort(n), t
    }, links.Timeline.prototype.stackCalculateFinal = function(e) {
        var t, n = this.size,
            i = this.options,
            o = i.axisOnTop,
            a = i.eventMargin,
            s = i.eventMarginAxis,
            r = o ? n.axis.height + s + a / 2 : n.contentHeight - s - a / 2,
            l = [];
        for (t = this.getItemsByGroup(e), j = 0; j < this.groups.length; ++j) {
            var c = this.groups[j];
            t[c.content] ? (this.finalItemsPosition(t[c.content], r, c).forEach(function(e) {
                l.push(e)
            }), o ? r += c.itemsHeight + a : r -= c.itemsHeight + a) : o ? r += i.groupMinHeight + a : r -= i.groupMinHeight + a
        }
        return t.undefined && this.finalItemsPosition(t.undefined, r).forEach(function(e) {
            l.push(e)
        }), l
    }, links.Timeline.prototype.finalItemsPosition = function(e, t, n) {
        var i, o, a, s = this.options,
            r = s.axisOnTop,
            l = s.eventMargin;
        for (i = 0, o = (a = this.initialItemsPosition(e, t)).length; i < o; i++) {
            var c = a[i],
                u = null;
            if (this.options.stackEvents)
                for (; null != (u = this.stackItemsCheckOverlap(a, i, 0, i - 1)) && (c.top = r ? u.top + u.height + l : u.top - c.height - l, c.bottom = c.top + c.height), u;);
            n && (n.itemsHeight = r ? n.itemsHeight ? Math.max(n.itemsHeight, c.bottom - t) : c.height + l : n.itemsHeight ? Math.max(n.itemsHeight, t - c.top) : c.height + l)
        }
        return a
    }, links.Timeline.prototype.initialItemsPosition = function(e, t) {
        for (var n = this.options.axisOnTop, i = [], o = 0, a = e.length; o < a; ++o) {
            var s, r, l = e[o],
                c = l.height,
                u = l.getWidth(this),
                d = l.getRight(this),
                p = d - u;
            r = (s = n ? t : t - c) + c, i.push({
                left: p,
                top: s,
                right: d,
                bottom: r,
                height: c,
                item: l
            })
        }
        return i
    }, links.Timeline.prototype.stackMoveOneStep = function(e, t) {
        for (var n = !0, i = 0, o = t.length; i < o; i++) {
            var a = t[i],
                s = a.item,
                r = parseInt(s.top),
                l = parseInt(a.top),
                c = l - r;
            if (c) {
                var u = l == r ? 0 : r < l ? 1 : -1;
                4 < Math.abs(c) && (u = c / 4);
                var d = parseInt(r + u);
                d != l && (n = !1), s.top = d, s.bottom = s.top + s.height
            } else s.top = a.top, s.bottom = a.bottom;
            s.left = a.left, s.right = a.right
        }
        return n
    }, links.Timeline.prototype.stackMoveToFinal = function(e, t) {
        for (var n = 0, i = t.length; n < i; n++) {
            var o = t[n],
                a = o.item;
            a.left = o.left, a.top = o.top, a.right = o.right, a.bottom = o.bottom
        }
    }, links.Timeline.prototype.stackItemsCheckOverlap = function(e, t, n, i) {
        for (var o = this.options.eventMargin, a = this.collision, s = e[t], r = i; n <= r; r--) {
            var l = e[r];
            if (a(s, l, o) && r != t) return l
        }
    }, links.Timeline.prototype.collision = function(e, t, n) {
        return null == n && (n = 0), e.left - n < t.right && e.right + n > t.left && e.top - n < t.bottom && e.bottom + n > t.top
    }, links.Timeline.prototype.trigger = function(e) {
        var t = null;
        switch (e) {
            case "rangechange":
            case "rangechanged":
                t = {
                    start: new Date(this.start.valueOf()),
                    end: new Date(this.end.valueOf())
                };
                break;
            case "timechange":
            case "timechanged":
                t = {
                    time: new Date(this.customTime.valueOf())
                }
        }
        links.events.trigger(this, e, t), google && google.visualization && google.visualization.events.trigger(this, e, t)
    }, links.Timeline.prototype.clusterItems = function() {
        if (this.options.cluster) {
            var e = this.clusterGenerator.getClusters(this.conversion.factor, this.options.clusterMaxItems);
            if (this.clusters != e) {
                var t = this.renderQueue;
                this.clusters && this.clusters.forEach(function(e) {
                    t.hide.push(e), e.items.forEach(function(e) {
                        e.cluster = void 0
                    })
                }), e.forEach(function(t) {
                    t.items.forEach(function(e) {
                        e.cluster = t
                    })
                }), this.clusters = e
            }
        }
    }, links.Timeline.prototype.filterItems = function() {
        function e(e) {
            e.forEach(function(e) {
                var t = e.rendered,
                    n = e.isVisible(o, a);
                t != n && (t && i.hide.push(e), n && -1 == i.show.indexOf(e) && i.show.push(e))
            })
        }
        var i = this.renderQueue,
            t = this.end - this.start,
            o = new Date(this.start.valueOf() - t),
            a = new Date(this.end.valueOf() + t);
        e(this.items), this.clusters && e(this.clusters)
    }, links.Timeline.ClusterGenerator = function(e) {
        this.timeline = e, this.clear()
    }, links.Timeline.ClusterGenerator.prototype.clear = function() {
        this.items = [], this.groups = {}, this.clearCache()
    }, links.Timeline.ClusterGenerator.prototype.clearCache = function() {
        this.cache = {}, this.cacheLevel = -1, this.cache[this.cacheLevel] = []
    }, links.Timeline.ClusterGenerator.prototype.setData = function(e, t) {
        this.items = e || [], this.dataChanged = !0, this.applyOnChangedLevel = !0, t && t.applyOnChangedLevel && (this.applyOnChangedLevel = t.applyOnChangedLevel)
    }, links.Timeline.ClusterGenerator.prototype.updateData = function() {
        this.dataChanged = !0, this.applyOnChangedLevel = !1
    }, links.Timeline.ClusterGenerator.prototype.filterData = function() {
        var e = this.items || [],
            i = {};
        for (var t in this.groups = i, e.forEach(function(e) {
                var t = e.group ? e.group.content : "",
                    n = i[t];
                n || (n = [], i[t] = n), n.push(e), e.start && (e.center = e.end ? (e.start.valueOf() + e.end.valueOf()) / 2 : e.start.valueOf())
            }), i) i.hasOwnProperty(t) && i[t].sort(function(e, t) {
            return e.center - t.center
        });
        this.dataChanged = !1
    }, links.Timeline.ClusterGenerator.prototype.getClusters = function(e, t) {
        var n = -1,
            i = 0;
        if (0 < e && (n = Math.round(Math.log(100 / e) / Math.log(2)), i = Math.pow(2, n)), this.dataChanged) {
            var o = n != this.cacheLevel;
            (!this.applyOnChangedLevel || o) && (this.clearCache(), this.filterData())
        }
        this.cacheLevel = n;
        var a = this.cache[n];
        if (!a) {
            for (var s in a = [], this.groups)
                if (this.groups.hasOwnProperty(s))
                    for (var r = this.groups[s], l = r.length, c = 0; c < l;) {
                        for (var u = r[c], d = 1, p = c - 1; 0 <= p && u.center - r[p].center < i / 2;) r[p].cluster || d++, p--;
                        for (var h = c + 1; h < r.length && r[h].center - u.center < i / 2;) d++, h++;
                        for (var f = a.length - 1; 0 <= f && u.center - a[f].center < i / 2;) u.group == a[f].group && d++, f--;
                        if (t < d) {
                            for (var m = d - t + 1, g = [], v = void 0, b = void 0, y = void 0, w = !1, k = 0, T = c; g.length < m && T < r.length;) {
                                var x = r[T],
                                    S = x.start.valueOf(),
                                    _ = x.end ? x.end.valueOf() : x.start.valueOf();
                                g.push(x), v = k ? k / (k + 1) * v + 1 / (k + 1) * x.center : x.center, b = null != b ? Math.min(b, S) : S, y = null != y ? Math.max(y, _) : _, w = w || x instanceof links.Timeline.ItemRange || x instanceof links.Timeline.ItemFloatingRange, k++, T++
                            }
                            var C, D = '<div title="' + ("Cluster containing " + k + " events. Zoom in to see the individual events.") + '">' + k + " events</div>",
                                O = u.group ? u.group.content : void 0;
                            (C = this.timeline.createItem(w ? {
                                start: new Date(b),
                                end: new Date(y),
                                content: D,
                                group: O
                            } : {
                                start: new Date(v),
                                content: D,
                                group: O
                            })).isCluster = !0, C.items = g, C.items.forEach(function(e) {
                                e.cluster = C
                            }), a.push(C), c += m
                        } else delete u.cluster, c += 1
                    }
            this.cache[n] = a
        }
        return a
    }, links.events = links.events || {
        listeners: [],
        indexOf: function(e) {
            for (var t = this.listeners, n = 0, i = this.listeners.length; n < i; n++) {
                var o = t[n];
                if (o && o.object == e) return n
            }
            return -1
        },
        addListener: function(e, t, n) {
            var i = this.indexOf(e),
                o = this.listeners[i];
            o || (o = {
                object: e,
                events: {}
            }, this.listeners.push(o));
            var a = o.events[t];
            a || (a = [], o.events[t] = a), -1 == a.indexOf(n) && a.push(n)
        },
        removeListener: function(e, t, n) {
            var i = this.indexOf(e),
                o = this.listeners[i];
            if (o) {
                var a = o.events[t];
                if (a) - 1 != (i = a.indexOf(n)) && a.splice(i, 1), 0 == a.length && delete o.events[t];
                var s = 0,
                    r = o.events;
                for (var l in r) r.hasOwnProperty(l) && s++;
                0 == s && delete this.listeners[i]
            }
        },
        removeAllListeners: function() {
            this.listeners = []
        },
        trigger: function(e, t, n) {
            var i = this.indexOf(e),
                o = this.listeners[i];
            if (o) {
                var a = o.events[t];
                if (a)
                    for (var s = 0, r = a.length; s < r; s++) a[s](n)
            }
        }
    }, links.Timeline.StepDate = function(e, t, n) {
        this.current = new Date, this._start = new Date, this._end = new Date, this.autoScale = !0, this.scale = links.Timeline.StepDate.SCALE.DAY, this.step = 1, this.setRange(e, t, n)
    }, links.Timeline.StepDate.SCALE = {
        MILLISECOND: 1,
        SECOND: 2,
        MINUTE: 3,
        HOUR: 4,
        DAY: 5,
        WEEKDAY: 6,
        MONTH: 7,
        YEAR: 8
    }, links.Timeline.StepDate.prototype.setRange = function(e, t, n) {
        e instanceof Date && t instanceof Date && (this._start = null != e ? new Date(e.valueOf()) : new Date, this._end = null != t ? new Date(t.valueOf()) : new Date, this.autoScale && this.setMinimumStep(n))
    }, links.Timeline.StepDate.prototype.start = function() {
        this.current = new Date(this._start.valueOf()), this.roundToMinor()
    }, links.Timeline.StepDate.prototype.roundToMinor = function() {
        switch (this.scale) {
            case links.Timeline.StepDate.SCALE.YEAR:
                this.current.setFullYear(this.step * Math.floor(this.current.getFullYear() / this.step)), this.current.setMonth(0);
            case links.Timeline.StepDate.SCALE.MONTH:
                this.current.setDate(1);
            case links.Timeline.StepDate.SCALE.DAY:
            case links.Timeline.StepDate.SCALE.WEEKDAY:
                this.current.setHours(0);
            case links.Timeline.StepDate.SCALE.HOUR:
                this.current.setMinutes(0);
            case links.Timeline.StepDate.SCALE.MINUTE:
                this.current.setSeconds(0);
            case links.Timeline.StepDate.SCALE.SECOND:
                this.current.setMilliseconds(0)
        }
        if (1 != this.step) switch (this.scale) {
            case links.Timeline.StepDate.SCALE.MILLISECOND:
                this.current.setMilliseconds(this.current.getMilliseconds() - this.current.getMilliseconds() % this.step);
                break;
            case links.Timeline.StepDate.SCALE.SECOND:
                this.current.setSeconds(this.current.getSeconds() - this.current.getSeconds() % this.step);
                break;
            case links.Timeline.StepDate.SCALE.MINUTE:
                this.current.setMinutes(this.current.getMinutes() - this.current.getMinutes() % this.step);
                break;
            case links.Timeline.StepDate.SCALE.HOUR:
                this.current.setHours(this.current.getHours() - this.current.getHours() % this.step);
                break;
            case links.Timeline.StepDate.SCALE.WEEKDAY:
            case links.Timeline.StepDate.SCALE.DAY:
                this.current.setDate(this.current.getDate() - 1 - (this.current.getDate() - 1) % this.step + 1);
                break;
            case links.Timeline.StepDate.SCALE.MONTH:
                this.current.setMonth(this.current.getMonth() - this.current.getMonth() % this.step);
                break;
            case links.Timeline.StepDate.SCALE.YEAR:
                this.current.setFullYear(this.current.getFullYear() - this.current.getFullYear() % this.step)
        }
    }, links.Timeline.StepDate.prototype.end = function() {
        return this.current.valueOf() > this._end.valueOf()
    }, links.Timeline.StepDate.prototype.next = function() {
        var e = this.current.valueOf();
        if (this.current.getMonth() < 6) switch (this.scale) {
            case links.Timeline.StepDate.SCALE.MILLISECOND:
                this.current = new Date(this.current.valueOf() + this.step);
                break;
            case links.Timeline.StepDate.SCALE.SECOND:
                this.current = new Date(this.current.valueOf() + 1e3 * this.step);
                break;
            case links.Timeline.StepDate.SCALE.MINUTE:
                this.current = new Date(this.current.valueOf() + 1e3 * this.step * 60);
                break;
            case links.Timeline.StepDate.SCALE.HOUR:
                this.current = new Date(this.current.valueOf() + 1e3 * this.step * 60 * 60);
                var t = this.current.getHours();
                this.current.setHours(t - t % this.step);
                break;
            case links.Timeline.StepDate.SCALE.WEEKDAY:
            case links.Timeline.StepDate.SCALE.DAY:
                this.current.setDate(this.current.getDate() + this.step);
                break;
            case links.Timeline.StepDate.SCALE.MONTH:
                this.current.setMonth(this.current.getMonth() + this.step);
                break;
            case links.Timeline.StepDate.SCALE.YEAR:
                this.current.setFullYear(this.current.getFullYear() + this.step)
        } else switch (this.scale) {
            case links.Timeline.StepDate.SCALE.MILLISECOND:
                this.current = new Date(this.current.valueOf() + this.step);
                break;
            case links.Timeline.StepDate.SCALE.SECOND:
                this.current.setSeconds(this.current.getSeconds() + this.step);
                break;
            case links.Timeline.StepDate.SCALE.MINUTE:
                this.current.setMinutes(this.current.getMinutes() + this.step);
                break;
            case links.Timeline.StepDate.SCALE.HOUR:
                this.current.setHours(this.current.getHours() + this.step);
                break;
            case links.Timeline.StepDate.SCALE.WEEKDAY:
            case links.Timeline.StepDate.SCALE.DAY:
                this.current.setDate(this.current.getDate() + this.step);
                break;
            case links.Timeline.StepDate.SCALE.MONTH:
                this.current.setMonth(this.current.getMonth() + this.step);
                break;
            case links.Timeline.StepDate.SCALE.YEAR:
                this.current.setFullYear(this.current.getFullYear() + this.step)
        }
        if (1 != this.step) switch (this.scale) {
            case links.Timeline.StepDate.SCALE.MILLISECOND:
                this.current.getMilliseconds() < this.step && this.current.setMilliseconds(0);
                break;
            case links.Timeline.StepDate.SCALE.SECOND:
                this.current.getSeconds() < this.step && this.current.setSeconds(0);
                break;
            case links.Timeline.StepDate.SCALE.MINUTE:
                this.current.getMinutes() < this.step && this.current.setMinutes(0);
                break;
            case links.Timeline.StepDate.SCALE.HOUR:
                this.current.getHours() < this.step && this.current.setHours(0);
                break;
            case links.Timeline.StepDate.SCALE.WEEKDAY:
            case links.Timeline.StepDate.SCALE.DAY:
                this.current.getDate() < this.step + 1 && this.current.setDate(1);
                break;
            case links.Timeline.StepDate.SCALE.MONTH:
                this.current.getMonth() < this.step && this.current.setMonth(0);
                break;
            case links.Timeline.StepDate.SCALE.YEAR:
        }
        this.current.valueOf() == e && (this.current = new Date(this._end.valueOf()))
    }, links.Timeline.StepDate.prototype.getCurrent = function() {
        return this.current
    }, links.Timeline.StepDate.prototype.setScale = function(e, t) {
        this.scale = e, 0 < t && (this.step = t), this.autoScale = !1
    }, links.Timeline.StepDate.prototype.setAutoScale = function(e) {
        this.autoScale = e
    }, links.Timeline.StepDate.prototype.setMinimumStep = function(e) {
        if (null != e) {
            var t = 31104e6;
            e < 31104e9 && (this.scale = links.Timeline.StepDate.SCALE.YEAR, this.step = 1e3), e < 15552e9 && (this.scale = links.Timeline.StepDate.SCALE.YEAR, this.step = 500), e < 31104e8 && (this.scale = links.Timeline.StepDate.SCALE.YEAR, this.step = 100), e < 50 * t && (this.scale = links.Timeline.StepDate.SCALE.YEAR, this.step = 50), e < 10 * t && (this.scale = links.Timeline.StepDate.SCALE.YEAR, this.step = 10), e < 5 * t && (this.scale = links.Timeline.StepDate.SCALE.YEAR, this.step = 5), e < t && (this.scale = links.Timeline.StepDate.SCALE.YEAR, this.step = 1), e < 7776e6 && (this.scale = links.Timeline.StepDate.SCALE.MONTH, this.step = 3), e < 2592e6 && (this.scale = links.Timeline.StepDate.SCALE.MONTH, this.step = 1), e < 432e6 && (this.scale = links.Timeline.StepDate.SCALE.DAY, this.step = 5), e < 1728e5 && (this.scale = links.Timeline.StepDate.SCALE.DAY, this.step = 2), e < 864e5 && (this.scale = links.Timeline.StepDate.SCALE.DAY, this.step = 1), e < 432e5 && (this.scale = links.Timeline.StepDate.SCALE.WEEKDAY, this.step = 1), e < 144e5 && (this.scale = links.Timeline.StepDate.SCALE.HOUR, this.step = 4), e < 36e5 && (this.scale = links.Timeline.StepDate.SCALE.HOUR, this.step = 1), e < 9e5 && (this.scale = links.Timeline.StepDate.SCALE.MINUTE, this.step = 15), e < 6e5 && (this.scale = links.Timeline.StepDate.SCALE.MINUTE, this.step = 10), e < 3e5 && (this.scale = links.Timeline.StepDate.SCALE.MINUTE, this.step = 5), e < 6e4 && (this.scale = links.Timeline.StepDate.SCALE.MINUTE, this.step = 1), e < 15e3 && (this.scale = links.Timeline.StepDate.SCALE.SECOND, this.step = 15), e < 1e4 && (this.scale = links.Timeline.StepDate.SCALE.SECOND, this.step = 10), e < 5e3 && (this.scale = links.Timeline.StepDate.SCALE.SECOND, this.step = 5), e < 1e3 && (this.scale = links.Timeline.StepDate.SCALE.SECOND, this.step = 1), e < 200 && (this.scale = links.Timeline.StepDate.SCALE.MILLISECOND, this.step = 200), e < 100 && (this.scale = links.Timeline.StepDate.SCALE.MILLISECOND, this.step = 100), e < 50 && (this.scale = links.Timeline.StepDate.SCALE.MILLISECOND, this.step = 50), e < 10 && (this.scale = links.Timeline.StepDate.SCALE.MILLISECOND, this.step = 10), e < 5 && (this.scale = links.Timeline.StepDate.SCALE.MILLISECOND, this.step = 5), e < 1 && (this.scale = links.Timeline.StepDate.SCALE.MILLISECOND, this.step = 1)
        }
    }, links.Timeline.StepDate.prototype.snap = function(e) {
        if (this.scale == links.Timeline.StepDate.SCALE.YEAR) {
            var t = e.getFullYear() + Math.round(e.getMonth() / 12);
            e.setFullYear(Math.round(t / this.step) * this.step), e.setMonth(0), e.setDate(0), e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0)
        } else if (this.scale == links.Timeline.StepDate.SCALE.MONTH) 15 < e.getDate() ? (e.setDate(1), e.setMonth(e.getMonth() + 1)) : e.setDate(1), e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0);
        else if (this.scale == links.Timeline.StepDate.SCALE.DAY || this.scale == links.Timeline.StepDate.SCALE.WEEKDAY) {
            switch (this.step) {
                case 5:
                case 2:
                    e.setHours(24 * Math.round(e.getHours() / 24));
                    break;
                default:
                    e.setHours(12 * Math.round(e.getHours() / 12))
            }
            e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0)
        } else if (this.scale == links.Timeline.StepDate.SCALE.HOUR) {
            switch (this.step) {
                case 4:
                    e.setMinutes(60 * Math.round(e.getMinutes() / 60));
                    break;
                default:
                    e.setMinutes(30 * Math.round(e.getMinutes() / 30))
            }
            e.setSeconds(0), e.setMilliseconds(0)
        } else if (this.scale == links.Timeline.StepDate.SCALE.MINUTE) {
            switch (this.step) {
                case 15:
                case 10:
                    e.setMinutes(5 * Math.round(e.getMinutes() / 5)), e.setSeconds(0);
                    break;
                case 5:
                    e.setSeconds(60 * Math.round(e.getSeconds() / 60));
                    break;
                default:
                    e.setSeconds(30 * Math.round(e.getSeconds() / 30))
            }
            e.setMilliseconds(0)
        } else if (this.scale == links.Timeline.StepDate.SCALE.SECOND) switch (this.step) {
            case 15:
            case 10:
                e.setSeconds(5 * Math.round(e.getSeconds() / 5)), e.setMilliseconds(0);
                break;
            case 5:
                e.setMilliseconds(1e3 * Math.round(e.getMilliseconds() / 1e3));
                break;
            default:
                e.setMilliseconds(500 * Math.round(e.getMilliseconds() / 500))
        } else if (this.scale == links.Timeline.StepDate.SCALE.MILLISECOND) {
            var n = 5 < this.step ? this.step / 2 : 1;
            e.setMilliseconds(Math.round(e.getMilliseconds() / n) * n)
        }
    }, links.Timeline.StepDate.prototype.isMajor = function() {
        switch (this.scale) {
            case links.Timeline.StepDate.SCALE.MILLISECOND:
                return 0 == this.current.getMilliseconds();
            case links.Timeline.StepDate.SCALE.SECOND:
                return 0 == this.current.getSeconds();
            case links.Timeline.StepDate.SCALE.MINUTE:
                return 0 == this.current.getHours() && 0 == this.current.getMinutes();
            case links.Timeline.StepDate.SCALE.HOUR:
                return 0 == this.current.getHours();
            case links.Timeline.StepDate.SCALE.WEEKDAY:
            case links.Timeline.StepDate.SCALE.DAY:
                return 1 == this.current.getDate();
            case links.Timeline.StepDate.SCALE.MONTH:
                return 0 == this.current.getMonth();
            case links.Timeline.StepDate.SCALE.YEAR:
            default:
                return !1
        }
    }, links.Timeline.StepDate.prototype.getLabelMinor = function(e, t) {
        switch (null == t && (t = this.current), this.scale) {
            case links.Timeline.StepDate.SCALE.MILLISECOND:
                return String(t.getMilliseconds());
            case links.Timeline.StepDate.SCALE.SECOND:
                return String(t.getSeconds());
            case links.Timeline.StepDate.SCALE.MINUTE:
            case links.Timeline.StepDate.SCALE.HOUR:
                return this.addZeros(t.getHours(), 2) + ":" + this.addZeros(t.getMinutes(), 2);
            case links.Timeline.StepDate.SCALE.WEEKDAY:
                return e.DAYS_SHORT[t.getDay()] + " " + t.getDate();
            case links.Timeline.StepDate.SCALE.DAY:
                return String(t.getDate());
            case links.Timeline.StepDate.SCALE.MONTH:
                return e.MONTHS_SHORT[t.getMonth()];
            case links.Timeline.StepDate.SCALE.YEAR:
                return String(t.getFullYear());
            default:
                return ""
        }
    }, links.Timeline.StepDate.prototype.getLabelMajor = function(e, t) {
        switch (null == t && (t = this.current), this.scale) {
            case links.Timeline.StepDate.SCALE.MILLISECOND:
                return this.addZeros(t.getHours(), 2) + ":" + this.addZeros(t.getMinutes(), 2) + ":" + this.addZeros(t.getSeconds(), 2);
            case links.Timeline.StepDate.SCALE.SECOND:
                return t.getDate() + " " + e.MONTHS[t.getMonth()] + " " + this.addZeros(t.getHours(), 2) + ":" + this.addZeros(t.getMinutes(), 2);
            case links.Timeline.StepDate.SCALE.MINUTE:
            case links.Timeline.StepDate.SCALE.HOUR:
                return e.DAYS[t.getDay()] + " " + t.getDate() + " " + e.MONTHS[t.getMonth()] + " " + t.getFullYear();
            case links.Timeline.StepDate.SCALE.WEEKDAY:
            case links.Timeline.StepDate.SCALE.DAY:
                return e.MONTHS[t.getMonth()] + " " + t.getFullYear();
            case links.Timeline.StepDate.SCALE.MONTH:
                return String(t.getFullYear());
            default:
                return ""
        }
    }, links.Timeline.StepDate.prototype.addZeros = function(e, t) {
        for (var n = "" + e; n.length < t;) n = "0" + n;
        return n
    }, links.imageloader = function() {
        function a(e) {
            if (1 == l[e]) return !0;
            var t = new Image;
            return t.src = e, !!t.complete
        }

        function s(e) {
            return null != c[e]
        }

        function r(t, e, n) {
            if (null == n && (n = !0), a(t)) n && e(t);
            else if (!s(t) || n) {
                var i = c[t];
                if (!i) {
                    var o = new Image;
                    o.src = t, i = [], c[t] = i, o.onload = function() {
                        l[t] = !0, delete c[t];
                        for (var e = 0; e < i.length; e++) i[e](t)
                    }
                } - 1 == i.indexOf(e) && i.push(e)
            }
        }
        var l = {},
            c = {};
        return {
            isLoaded: a,
            isLoading: s,
            load: r,
            loadAll: function(e, t, n) {
                var i = [];
                if (e.forEach(function(e) {
                        a(e) || i.push(e)
                    }), i.length) {
                    var o = i.length;
                    i.forEach(function(e) {
                        r(e, function() {
                            0 == --o && t()
                        }, n)
                    })
                } else n && t()
            },
            filterImageUrls: function e(t, n) {
                for (var i = t.firstChild; i;) {
                    if ("IMG" == i.tagName) {
                        var o = i.src; - 1 == n.indexOf(o) && n.push(o)
                    }
                    e(i, n), i = i.nextSibling
                }
            }
        }
    }(), links.Timeline.addEventListener = function(e, t, n, i) {
        e.addEventListener ? (void 0 === i && (i = !1), "mousewheel" === t && 0 <= navigator.userAgent.indexOf("Firefox") && (t = "DOMMouseScroll"), e.addEventListener(t, n, i)) : e.attachEvent("on" + t, n)
    }, links.Timeline.removeEventListener = function(e, t, n, i) {
        e.removeEventListener ? (void 0 === i && (i = !1), "mousewheel" === t && 0 <= navigator.userAgent.indexOf("Firefox") && (t = "DOMMouseScroll"), e.removeEventListener(t, n, i)) : e.detachEvent("on" + t, n)
    }, links.Timeline.getTarget = function(e) {
        var t;
        return (e = e || window.event).target ? t = e.target : e.srcElement && (t = e.srcElement), null != t.nodeType && 3 == t.nodeType && (t = t.parentNode), t
    }, links.Timeline.stopPropagation = function(e) {
        (e = e || window.event).stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    }, links.Timeline.preventDefault = function(e) {
        (e = e || window.event).preventDefault ? e.preventDefault() : e.returnValue = !1
    }, links.Timeline.getAbsoluteLeft = function(e) {
        for (var t = document.documentElement, n = document.body, i = e.offsetLeft, o = e.offsetParent; null != o && o != n && o != t;) i += o.offsetLeft, i -= o.scrollLeft, o = o.offsetParent;
        return i
    }, links.Timeline.getAbsoluteTop = function(e) {
        for (var t = document.documentElement, n = document.body, i = e.offsetTop, o = e.offsetParent; null != o && o != n && o != t;) i += o.offsetTop, i -= o.scrollTop, o = o.offsetParent;
        return i
    }, links.Timeline.getPageY = function(e) {
        if ("targetTouches" in e && e.targetTouches.length && (e = e.targetTouches[0]), "pageY" in e) return e.pageY;
        var t = e.clientY,
            n = document.documentElement,
            i = document.body;
        return t + (n && n.scrollTop || i && i.scrollTop || 0) - (n && n.clientTop || i && i.clientTop || 0)
    }, links.Timeline.getPageX = function(e) {
        if ("targetTouches" in e && e.targetTouches.length && (e = e.targetTouches[0]), "pageX" in e) return e.pageX;
        var t = e.clientX,
            n = document.documentElement,
            i = document.body;
        return t + (n && n.scrollLeft || i && i.scrollLeft || 0) - (n && n.clientLeft || i && i.clientLeft || 0)
    }, links.Timeline.addClassName = function(e, t) {
        for (var n = e.className.split(" "), i = t.split(" "), o = !1, a = 0; a < i.length; a++) - 1 == n.indexOf(i[a]) && (n.push(i[a]), o = !0);
        o && (e.className = n.join(" "))
    }, links.Timeline.removeClassName = function(e, t) {
        for (var n = e.className.split(" "), i = t.split(" "), o = !1, a = 0; a < i.length; a++) {
            var s = n.indexOf(i[a]); - 1 != s && (n.splice(s, 1), o = !0)
        }
        o && (e.className = n.join(" "))
    }, links.Timeline.isArray = function(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }, links.Timeline.clone = function(e) {
        var t = {};
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }, links.Timeline.parseJSONDate = function(e) {
        if (null != e) {
            if (e instanceof Date) return e;
            var t = e.match(/\/Date\((-?\d+)([-\+]?\d{2})?(\d{2})?\)\//i);
            if (t) {
                var n = t[2] ? 36e5 * t[2] + 6e4 * t[3] * (t[2] / Math.abs(t[2])) : 0;
                return new Date(1 * t[1] + n)
            }
            return Date.parse(e)
        }
    },
    function(r) {
        var l = {},
            c = {};
        r.ajaxq = function(n, t) {
            function i() {
                if (l[n]) {
                    var e = l[n].shift();
                    if (e) {
                        var t = e();
                        c[n] = t
                    } else delete l[n], delete c[n]
                }
            }
            if (void 0 === t) throw "AjaxQ: queue name is not provided";
            var o = r.Deferred(),
                e = o.promise();
            e.success = e.done, e.error = e.fail, e.complete = e.always;
            var a = "function" == typeof t,
                s = a ? null : r.extend(!0, {}, t);
            return function(e) {
                if (l[n]) l[n].push(e);
                else {
                    l[n] = [];
                    var t = e();
                    c[n] = t
                }
            }(function() {
                var e = r.ajax.apply(window, [a ? t() : s]);
                return e.done(function() {
                    o.resolve.apply(this, arguments)
                }), e.fail(function() {
                    o.reject.apply(this, arguments)
                }), e.always(i), e
            }), e
        }, r.each(["getq", "postq"], function(e, a) {
            r[a] = function(e, t, n, i, o) {
                return r.isFunction(n) && (o = o || i, i = n, n = void 0), r.ajaxq(e, {
                    type: "postq" === a ? "post" : "get",
                    url: t,
                    data: n,
                    success: i,
                    dataType: o
                })
            }
        });

        function t(e) {
            return l.hasOwnProperty(e) && 0 < l[e].length
        }
        r.ajaxq.isRunning = function(e) {
            return e ? t(e) : function() {
                for (var e in l)
                    if (t(e)) return !0;
                return !1
            }()
        }, r.ajaxq.getActiveRequest = function(e) {
            if (!e) throw "AjaxQ: queue name is required";
            return c[e]
        }, r.ajaxq.abort = function(e) {
            if (!e) throw "AjaxQ: queue name is required";
            var t = r.ajaxq.getActiveRequest(e);
            delete l[e], delete c[e], t && t.abort()
        }, r.ajaxq.clear = function(e) {
            if (e) l[e] && (l[e] = []);
            else
                for (var t in l) l.hasOwnProperty(t) && (l[t] = [])
        }
    }(jQuery),
    function() {
        "use strict";

        function v(e) {
            return new Date((e + .5 - t) * n)
        }

        function b(e) {
            return function(e) {
                return e.valueOf() / n - .5 + t
            }(e) - o
        }

        function s(e, t) {
            return m(r(e) * h(a) - f(t) * r(a), h(e))
        }

        function y(e, t) {
            return i(r(t) * h(a) + h(t) * r(a) * r(e))
        }

        function c(e, t, n) {
            return m(r(e), h(e) * r(t) - f(n) * h(t))
        }

        function u(e, t, n) {
            return i(r(t) * r(n) + h(t) * h(n) * h(e))
        }

        function d(e, t) {
            return D * (280.16 + 360.9856235 * e) - t
        }

        function w(e) {
            return D * (357.5291 + .98560028 * e)
        }

        function k(e) {
            return e + D * (1.9148 * r(e) + .02 * r(2 * e) + 3e-4 * r(3 * e)) + 102.9372 * D + C
        }

        function l(e) {
            var t = k(w(e));
            return {
                dec: y(t, 0),
                ra: s(t, 0)
            }
        }

        function T(e, t, n) {
            return M + (e + t) / (2 * C) + n
        }

        function x(e, t, n) {
            return o + e + .0053 * r(t) - .0069 * r(2 * n)
        }

        function S(e, t, n, i, o, a, s) {
            return x(T(function(e, t, n) {
                return g((r(e) - r(t) * r(n)) / (h(t) * h(n)))
            }(e, n, i), t, o), a, s)
        }

        function p(e) {
            var t = D * (134.963 + 13.064993 * e),
                n = D * (93.272 + 13.22935 * e),
                i = D * (218.316 + 13.176396 * e) + 6.289 * D * r(t),
                o = 5.128 * D * r(n),
                a = 385001 - 20905 * h(t);
            return {
                ra: s(i, o),
                dec: y(i, o),
                dist: a
            }
        }

        function _(e, t) {
            return new Date(e.valueOf() + t * n / 24)
        }
        var C = Math.PI,
            r = Math.sin,
            h = Math.cos,
            f = Math.tan,
            i = Math.asin,
            m = Math.atan2,
            g = Math.acos,
            D = C / 180,
            n = 864e5,
            t = 2440588,
            o = 2451545,
            a = 23.4397 * D,
            O = {
                getPosition: function(e, t, n) {
                    var i = D * -n,
                        o = D * t,
                        a = b(e),
                        s = l(a),
                        r = d(a, i) - s.ra;
                    return {
                        azimuth: c(r, o, s.dec),
                        altitude: u(r, o, s.dec)
                    }
                }
            },
            I = O.times = [
                [-.833, "sunrise", "sunset"],
                [-.3, "sunriseEnd", "sunsetStart"],
                [-6, "dawn", "dusk"],
                [-12, "nauticalDawn", "nauticalDusk"],
                [-18, "nightEnd", "night"],
                [6, "goldenHourEnd", "goldenHour"]
            ];
        O.addTime = function(e, t, n) {
            I.push([e, t, n])
        };
        var M = 9e-4;
        O.getTimes = function(e, t, n) {
            var i, o, a, s, r, l = D * -n,
                c = D * t,
                u = function(e, t) {
                    return Math.round(e - M - t / (2 * C))
                }(b(e), l),
                d = T(0, l, u),
                p = w(d),
                h = k(p),
                f = y(h, 0),
                m = x(d, p, h),
                g = {
                    solarNoon: v(m),
                    nadir: v(m - .5)
                };
            for (i = 0, o = I.length; i < o; i += 1) r = m - ((s = S((a = I[i])[0] * D, l, c, f, u, p, h)) - m), g[a[1]] = v(r), g[a[2]] = v(s);
            return g
        }, O.getMoonPosition = function(e, t, n) {
            var i = D * -n,
                o = D * t,
                a = b(e),
                s = p(a),
                r = d(a, i) - s.ra,
                l = u(r, o, s.dec);
            return l += .017 * D / f(l + 10.26 * D / (l + 5.1 * D)), {
                azimuth: c(r, o, s.dec),
                altitude: l,
                distance: s.dist
            }
        }, O.getMoonIllumination = function(e) {
            var t = b(e),
                n = l(t),
                i = p(t),
                o = g(r(n.dec) * r(i.dec) + h(n.dec) * h(i.dec) * h(n.ra - i.ra)),
                a = m(149598e3 * r(o), i.dist - 149598e3 * h(o)),
                s = m(h(n.dec) * r(n.ra - i.ra), r(n.dec) * h(i.dec) - h(n.dec) * r(i.dec) * h(n.ra - i.ra));
            return {
                fraction: (1 + h(a)) / 2,
                phase: .5 + .5 * a * (s < 0 ? -1 : 1) / Math.PI,
                angle: s
            }
        }, O.getMoonTimes = function(e, t, n) {
            var i = new Date(e);
            i.setHours(0), i.setMinutes(0), i.setSeconds(0), i.setMilliseconds(0);
            for (var o, a, s, r, l, c, u, d, p, h, f, m, g, v = .133 * D, b = O.getMoonPosition(i, t, n).altitude - v, y = 1; y <= 24 && (o = O.getMoonPosition(_(i, y), t, n).altitude - v, d = ((l = (b + (a = O.getMoonPosition(_(i, y + 1), t, n).altitude - v)) / 2 - o) * (u = -(c = (a - b) / 2) / (2 * l)) + c) * u + o, (h = 0) <= (p = c * c - 4 * l * o) && (f = u - (g = Math.sqrt(p) / (2 * Math.abs(l))), m = u + g, Math.abs(f) <= 1 && h++, Math.abs(m) <= 1 && h++, f < -1 && (f = m)), 1 === h ? b < 0 ? s = y + f : r = y + f : 2 === h && (s = y + (d < 0 ? m : f), r = y + (d < 0 ? f : m)), !s || !r); y += 2) b = a;
            var w = {};
            return s && (w.rise = _(i, s)), r && (w.set = _(i, r)), s || r || (w[0 < d ? "alwaysUp" : "alwaysDown"] = !0), w
        }, "function" == typeof define && define.amd ? define(O) : "undefined" != typeof module ? module.exports = O : window.SunCalc = O
    }(),
    function(e) {
        "use strict";

        function d(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
        }

        function r(e, t, n, i, o, a) {
            return d(function(e, t) {
                return e << t | e >>> 32 - t
            }(d(d(t, e), d(i, a)), o), n)
        }

        function p(e, t, n, i, o, a, s) {
            return r(t & n | ~t & i, e, t, o, a, s)
        }

        function h(e, t, n, i, o, a, s) {
            return r(t & i | n & ~i, e, t, o, a, s)
        }

        function f(e, t, n, i, o, a, s) {
            return r(t ^ n ^ i, e, t, o, a, s)
        }

        function m(e, t, n, i, o, a, s) {
            return r(n ^ (t | ~i), e, t, o, a, s)
        }

        function l(e, t) {
            e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
            var n, i, o, a, s, r = 1732584193,
                l = -271733879,
                c = -1732584194,
                u = 271733878;
            for (n = 0; n < e.length; n += 16) l = m(l = m(l = m(l = m(l = f(l = f(l = f(l = f(l = h(l = h(l = h(l = h(l = p(l = p(l = p(l = p(o = l, c = p(a = c, u = p(s = u, r = p(i = r, l, c, u, e[n], 7, -680876936), l, c, e[n + 1], 12, -389564586), r, l, e[n + 2], 17, 606105819), u, r, e[n + 3], 22, -1044525330), c = p(c, u = p(u, r = p(r, l, c, u, e[n + 4], 7, -176418897), l, c, e[n + 5], 12, 1200080426), r, l, e[n + 6], 17, -1473231341), u, r, e[n + 7], 22, -45705983), c = p(c, u = p(u, r = p(r, l, c, u, e[n + 8], 7, 1770035416), l, c, e[n + 9], 12, -1958414417), r, l, e[n + 10], 17, -42063), u, r, e[n + 11], 22, -1990404162), c = p(c, u = p(u, r = p(r, l, c, u, e[n + 12], 7, 1804603682), l, c, e[n + 13], 12, -40341101), r, l, e[n + 14], 17, -1502002290), u, r, e[n + 15], 22, 1236535329), c = h(c, u = h(u, r = h(r, l, c, u, e[n + 1], 5, -165796510), l, c, e[n + 6], 9, -1069501632), r, l, e[n + 11], 14, 643717713), u, r, e[n], 20, -373897302), c = h(c, u = h(u, r = h(r, l, c, u, e[n + 5], 5, -701558691), l, c, e[n + 10], 9, 38016083), r, l, e[n + 15], 14, -660478335), u, r, e[n + 4], 20, -405537848), c = h(c, u = h(u, r = h(r, l, c, u, e[n + 9], 5, 568446438), l, c, e[n + 14], 9, -1019803690), r, l, e[n + 3], 14, -187363961), u, r, e[n + 8], 20, 1163531501), c = h(c, u = h(u, r = h(r, l, c, u, e[n + 13], 5, -1444681467), l, c, e[n + 2], 9, -51403784), r, l, e[n + 7], 14, 1735328473), u, r, e[n + 12], 20, -1926607734), c = f(c, u = f(u, r = f(r, l, c, u, e[n + 5], 4, -378558), l, c, e[n + 8], 11, -2022574463), r, l, e[n + 11], 16, 1839030562), u, r, e[n + 14], 23, -35309556), c = f(c, u = f(u, r = f(r, l, c, u, e[n + 1], 4, -1530992060), l, c, e[n + 4], 11, 1272893353), r, l, e[n + 7], 16, -155497632), u, r, e[n + 10], 23, -1094730640), c = f(c, u = f(u, r = f(r, l, c, u, e[n + 13], 4, 681279174), l, c, e[n], 11, -358537222), r, l, e[n + 3], 16, -722521979), u, r, e[n + 6], 23, 76029189), c = f(c, u = f(u, r = f(r, l, c, u, e[n + 9], 4, -640364487), l, c, e[n + 12], 11, -421815835), r, l, e[n + 15], 16, 530742520), u, r, e[n + 2], 23, -995338651), c = m(c, u = m(u, r = m(r, l, c, u, e[n], 6, -198630844), l, c, e[n + 7], 10, 1126891415), r, l, e[n + 14], 15, -1416354905), u, r, e[n + 5], 21, -57434055), c = m(c, u = m(u, r = m(r, l, c, u, e[n + 12], 6, 1700485571), l, c, e[n + 3], 10, -1894986606), r, l, e[n + 10], 15, -1051523), u, r, e[n + 1], 21, -2054922799), c = m(c, u = m(u, r = m(r, l, c, u, e[n + 8], 6, 1873313359), l, c, e[n + 15], 10, -30611744), r, l, e[n + 6], 15, -1560198380), u, r, e[n + 13], 21, 1309151649), c = m(c, u = m(u, r = m(r, l, c, u, e[n + 4], 6, -145523070), l, c, e[n + 11], 10, -1120210379), r, l, e[n + 2], 15, 718787259), u, r, e[n + 9], 21, -343485551), r = d(r, i), l = d(l, o), c = d(c, a), u = d(u, s);
            return [r, l, c, u]
        }

        function c(e) {
            var t, n = "";
            for (t = 0; t < 32 * e.length; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return n
        }

        function u(e) {
            var t, n = [];
            for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
            for (t = 0; t < 8 * e.length; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return n
        }

        function i(e) {
            var t, n, i = "0123456789abcdef",
                o = "";
            for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), o += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
            return o
        }

        function n(e) {
            return unescape(encodeURIComponent(e))
        }

        function o(e) {
            return function(e) {
                return c(l(u(e), 8 * e.length))
            }(n(e))
        }

        function a(e, t) {
            return function(e, t) {
                var n, i, o = u(e),
                    a = [],
                    s = [];
                for (a[15] = s[15] = void 0, 16 < o.length && (o = l(o, 8 * e.length)), n = 0; n < 16; n += 1) a[n] = 909522486 ^ o[n], s[n] = 1549556828 ^ o[n];
                return i = l(a.concat(u(t)), 512 + 8 * t.length), c(l(s.concat(i), 640))
            }(n(e), n(t))
        }

        function t(e, t, n) {
            return t ? n ? a(t, e) : function(e, t) {
                return i(a(e, t))
            }(t, e) : n ? o(e) : function(e) {
                return i(o(e))
            }(e)
        }
        "function" == typeof define && define.amd ? define(function() {
            return t
        }) : e.md5 = t
    }(this), Array.prototype.remove = function(e, t) {
        var n = this.slice((t || e) + 1 || this.length);
        return this.length = e < 0 ? this.length + e : e, this.push.apply(this, n)
    };
var s = void 0,
    u = !1,
    sjcl = {
        cipher: {},
        hash: {},
        keyexchange: {},
        mode: {},
        misc: {},
        codec: {},
        exception: {
            corrupt: function(e) {
                this.toString = function() {
                    return "CORRUPT: " + this.message
                }, this.message = e
            },
            invalid: function(e) {
                this.toString = function() {
                    return "INVALID: " + this.message
                }, this.message = e
            },
            bug: function(e) {
                this.toString = function() {
                    return "BUG: " + this.message
                }, this.message = e
            },
            notReady: function(e) {
                this.toString = function() {
                    return "NOT READY: " + this.message
                }, this.message = e
            }
        }
    };

function w(e, t, n) {
    4 !== t.length && q(new sjcl.exception.invalid("invalid aes block size"));
    var i = e.b[n],
        o = t[0] ^ i[0],
        a = t[n ? 3 : 1] ^ i[1],
        s = t[2] ^ i[2];
    t = t[n ? 1 : 3] ^ i[3];
    var r, l, c, u, d = i.length / 4 - 2,
        p = 4,
        h = [0, 0, 0, 0];
    e = (r = e.l[n])[0];
    var f = r[1],
        m = r[2],
        g = r[3],
        v = r[4];
    for (u = 0; u < d; u++) r = e[o >>> 24] ^ f[a >> 16 & 255] ^ m[s >> 8 & 255] ^ g[255 & t] ^ i[p], l = e[a >>> 24] ^ f[s >> 16 & 255] ^ m[t >> 8 & 255] ^ g[255 & o] ^ i[p + 1], c = e[s >>> 24] ^ f[t >> 16 & 255] ^ m[o >> 8 & 255] ^ g[255 & a] ^ i[p + 2], t = e[t >>> 24] ^ f[o >> 16 & 255] ^ m[a >> 8 & 255] ^ g[255 & s] ^ i[p + 3], p += 4, o = r, a = l, s = c;
    for (u = 0; u < 4; u++) h[n ? 3 & -u : u] = v[o >>> 24] << 24 ^ v[a >> 16 & 255] << 16 ^ v[s >> 8 & 255] << 8 ^ v[255 & t] ^ i[p++], r = o, o = a, a = s, s = t, t = r;
    return h
}

function x(e, t) {
    var n, i, o, a = t.slice(0),
        s = e.s,
        r = e.b,
        l = s[0],
        c = s[1],
        u = s[2],
        d = s[3],
        p = s[4],
        h = s[5],
        f = s[6],
        m = s[7];
    for (n = 0; n < 64; n++) i = (i = n < 16 ? a[n] : (i = a[n + 1 & 15], o = a[n + 14 & 15], a[15 & n] = (i >>> 7 ^ i >>> 18 ^ i >>> 3 ^ i << 25 ^ i << 14) + (o >>> 17 ^ o >>> 19 ^ o >>> 10 ^ o << 15 ^ o << 13) + a[15 & n] + a[n + 9 & 15] | 0)) + m + (p >>> 6 ^ p >>> 11 ^ p >>> 25 ^ p << 26 ^ p << 21 ^ p << 7) + (f ^ p & (h ^ f)) + r[n], m = f, f = h, h = p, p = d + i | 0, d = u, u = c, l = i + ((c = l) & u ^ d & (c ^ u)) + (c >>> 2 ^ c >>> 13 ^ c >>> 22 ^ c << 30 ^ c << 19 ^ c << 10) | 0;
    s[0] = s[0] + l | 0, s[1] = s[1] + c | 0, s[2] = s[2] + u | 0, s[3] = s[3] + d | 0, s[4] = s[4] + p | 0, s[5] = s[5] + h | 0, s[6] = s[6] + f | 0, s[7] = s[7] + m | 0
}

function C(e, t) {
    var n, i = sjcl.random.B[e],
        o = [];
    for (n in i) i.hasOwnProperty(n) && o.push(i[n]);
    for (n = 0; n < o.length; n++) o[n](t)
}

function E(e) {
    "undefined" != typeof window && window.performance && "function" == typeof window.performance.now ? sjcl.random.addEntropy(window.performance.now(), e, "loadtime") : sjcl.random.addEntropy((new Date).valueOf(), e, "loadtime")
}

function A(e) {
    e.b = B(e).concat(B(e)), e.C = new sjcl.cipher.aes(e.b)
}

function B(e) {
    for (var t = 0; t < 4 && (e.f[t] = e.f[t] + 1 | 0, !e.f[t]); t++);
    return e.C.encrypt(e.f)
}

function D(e, t) {
    return function() {
        t.apply(e, arguments)
    }
}
"undefined" != typeof module && module.exports && (module.exports = sjcl), "function" == typeof define && define([], function() {
    return sjcl
}), sjcl.cipher.aes = function(e) {
    this.l[0][0][0] || this.G();
    var t, n, i, o, a = this.l[0][4],
        s = this.l[1],
        r = 1;
    for (4 !== (t = e.length) && 6 !== t && 8 !== t && q(new sjcl.exception.invalid("invalid aes key size")), this.b = [i = e.slice(0), o = []], e = t; e < 4 * t + 28; e++) n = i[e - 1], (0 == e % t || 8 === t && 4 == e % t) && (n = a[n >>> 24] << 24 ^ a[n >> 16 & 255] << 16 ^ a[n >> 8 & 255] << 8 ^ a[255 & n], 0 == e % t && (n = n << 8 ^ n >>> 24 ^ r << 24, r = r << 1 ^ 283 * (r >> 7))), i[e] = i[e - t] ^ n;
    for (t = 0; e; t++, e--) n = i[3 & t ? e : e - 4], o[t] = e <= 4 || t < 4 ? n : s[0][a[n >>> 24]] ^ s[1][a[n >> 16 & 255]] ^ s[2][a[n >> 8 & 255]] ^ s[3][a[255 & n]]
}, sjcl.cipher.aes.prototype = {
    encrypt: function(e) {
        return w(this, e, 0)
    },
    decrypt: function(e) {
        return w(this, e, 1)
    },
    l: [
        [
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            [],
            []
        ]
    ],
    G: function() {
        var e, t, n, i, o, a, s, r = this.l[0],
            l = this.l[1],
            c = r[4],
            u = l[4],
            d = [],
            p = [];
        for (e = 0; e < 256; e++) p[(d[e] = e << 1 ^ 283 * (e >> 7)) ^ e] = e;
        for (t = n = 0; !c[t]; t ^= i || 1, n = p[n] || 1)
            for (a = (a = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4) >> 8 ^ 255 & a ^ 99, s = 16843009 * (o = d[e = d[i = d[u[c[t] = a] = t]]]) ^ 65537 * e ^ 257 * i ^ 16843008 * t, o = 257 * d[a] ^ 16843008 * a, e = 0; e < 4; e++) r[e][t] = o = o << 24 ^ o >>> 8, l[e][a] = s = s << 24 ^ s >>> 8;
        for (e = 0; e < 5; e++) r[e] = r[e].slice(0), l[e] = l[e].slice(0)
    }
}, sjcl.bitArray = {
    bitSlice: function(e, t, n) {
        return e = sjcl.bitArray.R(e.slice(t / 32), 32 - (31 & t)).slice(1), n === s ? e : sjcl.bitArray.clamp(e, n - t)
    },
    extract: function(e, t, n) {
        var i = Math.floor(-t - n & 31);
        return (-32 & (t + n - 1 ^ t) ? e[t / 32 | 0] << 32 - i ^ e[t / 32 + 1 | 0] >>> i : e[t / 32 | 0] >>> i) & (1 << n) - 1
    },
    concat: function(e, t) {
        if (0 === e.length || 0 === t.length) return e.concat(t);
        var n = e[e.length - 1],
            i = sjcl.bitArray.getPartial(n);
        return 32 === i ? e.concat(t) : sjcl.bitArray.R(t, i, 0 | n, e.slice(0, e.length - 1))
    },
    bitLength: function(e) {
        var t = e.length;
        return 0 === t ? 0 : 32 * (t - 1) + sjcl.bitArray.getPartial(e[t - 1])
    },
    clamp: function(e, t) {
        if (32 * e.length < t) return e;
        var n = (e = e.slice(0, Math.ceil(t / 32))).length;
        return t &= 31, 0 < n && t && (e[n - 1] = sjcl.bitArray.partial(t, e[n - 1] & 2147483648 >> t - 1, 1)), e
    },
    partial: function(e, t, n) {
        return 32 === e ? t : (n ? 0 | t : t << 32 - e) + 1099511627776 * e
    },
    getPartial: function(e) {
        return Math.round(e / 1099511627776) || 32
    },
    equal: function(e, t) {
        if (sjcl.bitArray.bitLength(e) !== sjcl.bitArray.bitLength(t)) return u;
        var n, i = 0;
        for (n = 0; n < e.length; n++) i |= e[n] ^ t[n];
        return 0 === i
    },
    R: function(e, t, n, i) {
        var o;
        for (o = 0, i === s && (i = []); 32 <= t; t -= 32) i.push(n), n = 0;
        if (0 === t) return i.concat(e);
        for (o = 0; o < e.length; o++) i.push(n | e[o] >>> t), n = e[o] << 32 - t;
        return o = e.length ? e[e.length - 1] : 0, e = sjcl.bitArray.getPartial(o), i.push(sjcl.bitArray.partial(t + e & 31, 32 < t + e ? n : i.pop(), 1)), i
    },
    g: function(e, t) {
        return [e[0] ^ t[0], e[1] ^ t[1], e[2] ^ t[2], e[3] ^ t[3]]
    },
    byteswapM: function(e) {
        var t, n;
        for (t = 0; t < e.length; ++t) n = e[t], e[t] = n >>> 24 | n >>> 8 & 65280 | (65280 & n) << 8 | n << 24;
        return e
    }
}, sjcl.codec.utf8String = {
    fromBits: function(e) {
        var t, n, i = "",
            o = sjcl.bitArray.bitLength(e);
        for (t = 0; t < o / 8; t++) 0 == (3 & t) && (n = e[t / 4]), i += String.fromCharCode(n >>> 24), n <<= 8;
        return decodeURIComponent(escape(i))
    },
    toBits: function(e) {
        e = unescape(encodeURIComponent(e));
        var t, n = [],
            i = 0;
        for (t = 0; t < e.length; t++) i = i << 8 | e.charCodeAt(t), 3 == (3 & t) && (n.push(i), i = 0);
        return 3 & t && n.push(sjcl.bitArray.partial(8 * (3 & t), i)), n
    }
}, sjcl.codec.hex = {
    fromBits: function(e) {
        var t, n = "";
        for (t = 0; t < e.length; t++) n += (0xf00000000000 + (0 | e[t])).toString(16).substr(4);
        return n.substr(0, sjcl.bitArray.bitLength(e) / 4)
    },
    toBits: function(e) {
        var t, n, i = [];
        for (n = (e = e.replace(/\s|0x/g, "")).length, e += "00000000", t = 0; t < e.length; t += 8) i.push(0 ^ parseInt(e.substr(t, 8), 16));
        return sjcl.bitArray.clamp(i, 4 * n)
    }
}, sjcl.codec.base32 = {
    p: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    O: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    BITS: 32,
    BASE: 5,
    REMAINING: 27,
    fromBits: function(e, t, n) {
        var i = sjcl.codec.base32.BASE,
            o = sjcl.codec.base32.REMAINING,
            a = "",
            s = 0,
            r = sjcl.codec.base32.p,
            l = 0,
            c = sjcl.bitArray.bitLength(e);
        for (n && (r = sjcl.codec.base32.O), n = 0; a.length * i < c;) a += r.charAt((l ^ e[n] >>> s) >>> o), s < i ? (l = e[n] << i - s, s += o, n++) : (l <<= i, s -= i);
        for (; 7 & a.length && !t;) a += "=";
        return a
    },
    toBits: function(e, t) {
        e = e.replace(/\s|=/g, "").toUpperCase();
        var n, i, o = sjcl.codec.base32.BITS,
            a = sjcl.codec.base32.BASE,
            s = sjcl.codec.base32.REMAINING,
            r = [],
            l = 0,
            c = sjcl.codec.base32.p,
            u = 0,
            d = "base32";
        for (t && (c = sjcl.codec.base32.O, d = "base32hex"), n = 0; n < e.length; n++) {
            if ((i = c.indexOf(e.charAt(n))) < 0) {
                if (!t) try {
                    return sjcl.codec.base32hex.toBits(e)
                } catch (e) {}
                q(new sjcl.exception.invalid("this isn't " + d + "!"))
            }
            s < l ? (l -= s, r.push(u ^ i >>> l), u = i << o - l) : u ^= i << o - (l += a)
        }
        return 56 & l && r.push(sjcl.bitArray.partial(56 & l, u, 1)), r
    }
}, sjcl.codec.base32hex = {
    fromBits: function(e, t) {
        return sjcl.codec.base32.fromBits(e, t, 1)
    },
    toBits: function(e) {
        return sjcl.codec.base32.toBits(e, 1)
    }
}, sjcl.codec.base64 = {
    p: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    fromBits: function(e, t, n) {
        var i = "",
            o = 0,
            a = sjcl.codec.base64.p,
            s = 0,
            r = sjcl.bitArray.bitLength(e);
        for (n && (a = a.substr(0, 62) + "-_"), n = 0; 6 * i.length < r;) i += a.charAt((s ^ e[n] >>> o) >>> 26), o < 6 ? (s = e[n] << 6 - o, o += 26, n++) : (s <<= 6, o -= 6);
        for (; 3 & i.length && !t;) i += "=";
        return i
    },
    toBits: function(e, t) {
        e = e.replace(/\s|=/g, "");
        var n, i, o = [],
            a = 0,
            s = sjcl.codec.base64.p,
            r = 0;
        for (t && (s = s.substr(0, 62) + "-_"), n = 0; n < e.length; n++)(i = s.indexOf(e.charAt(n))) < 0 && q(new sjcl.exception.invalid("this isn't base64!")), 26 < a ? (a -= 26, o.push(r ^ i >>> a), r = i << 32 - a) : r ^= i << 32 - (a += 6);
        return 56 & a && o.push(sjcl.bitArray.partial(56 & a, r, 1)), o
    }
}, sjcl.codec.base64url = {
    fromBits: function(e) {
        return sjcl.codec.base64.fromBits(e, 1, 1)
    },
    toBits: function(e) {
        return sjcl.codec.base64.toBits(e, 1)
    }
}, sjcl.hash.sha256 = function(e) {
    this.b[0] || this.G(), e ? (this.s = e.s.slice(0), this.o = e.o.slice(0), this.i = e.i) : this.reset()
}, sjcl.hash.sha256.hash = function(e) {
    return (new sjcl.hash.sha256).update(e).finalize()
}, sjcl.hash.sha256.prototype = {
    blockSize: 512,
    reset: function() {
        return this.s = this.P.slice(0), this.o = [], this.i = 0, this
    },
    update: function(e) {
        "string" == typeof e && (e = sjcl.codec.utf8String.toBits(e));
        var t, n = this.o = sjcl.bitArray.concat(this.o, e);
        for (t = this.i, e = this.i = t + sjcl.bitArray.bitLength(e), t = 512 + t & -512; t <= e; t += 512) x(this, n.splice(0, 16));
        return this
    },
    finalize: function() {
        var e, t = this.o,
            n = this.s;
        for (e = (t = sjcl.bitArray.concat(t, [sjcl.bitArray.partial(1, 1)])).length + 2; 15 & e; e++) t.push(0);
        for (t.push(Math.floor(this.i / 4294967296)), t.push(0 | this.i); t.length;) x(this, t.splice(0, 16));
        return this.reset(), n
    },
    P: [],
    b: [],
    G: function() {
        function e(e) {
            return 4294967296 * (e - Math.floor(e)) | 0
        }
        var t, n = 0,
            i = 2;
        e: for (; n < 64; i++) {
            for (t = 2; t * t <= i; t++)
                if (0 == i % t) continue e;
            n < 8 && (this.P[n] = e(Math.pow(i, .5))), this.b[n] = e(Math.pow(i, 1 / 3)), n++
        }
    }
}, sjcl.mode.ccm = {
    name: "ccm",
    t: [],
    listenProgress: function(e) {
        sjcl.mode.ccm.t.push(e)
    },
    unListenProgress: function(e) {
        -1 < (e = sjcl.mode.ccm.t.indexOf(e)) && sjcl.mode.ccm.t.splice(e, 1)
    },
    X: function(e) {
        var t, n = sjcl.mode.ccm.t.slice();
        for (t = 0; t < n.length; t += 1) n[t](e)
    },
    encrypt: function(e, t, n, i, o) {
        var a, s = t.slice(0),
            r = sjcl.bitArray,
            l = r.bitLength(n) / 8,
            c = r.bitLength(s) / 8;
        for (o = o || 64, i = i || [], l < 7 && q(new sjcl.exception.invalid("ccm: iv must be at least 7 bytes")), a = 2; a < 4 && c >>> 8 * a; a++);
        return a < 15 - l && (a = 15 - l), n = r.clamp(n, 8 * (15 - a)), t = sjcl.mode.ccm.M(e, t, n, i, o, a), s = sjcl.mode.ccm.q(e, s, n, t, o, a), r.concat(s.data, s.tag)
    },
    decrypt: function(e, t, n, i, o) {
        o = o || 64, i = i || [];
        var a = sjcl.bitArray,
            s = a.bitLength(n) / 8,
            r = a.bitLength(t),
            l = a.clamp(t, r - o),
            c = a.bitSlice(t, r - o);
        r = (r - o) / 8;
        for (s < 7 && q(new sjcl.exception.invalid("ccm: iv must be at least 7 bytes")), t = 2; t < 4 && r >>> 8 * t; t++);
        return t < 15 - s && (t = 15 - s), n = a.clamp(n, 8 * (15 - t)), l = sjcl.mode.ccm.q(e, l, n, c, o, t), e = sjcl.mode.ccm.M(e, l.data, n, i, o, t), a.equal(l.tag, e) || q(new sjcl.exception.corrupt("ccm: tag doesn't match")), l.data
    },
    ea: function(e, t, n, i, o, a) {
        var s = [],
            r = sjcl.bitArray,
            l = r.g;
        if (i = [r.partial(8, (t.length ? 64 : 0) | i - 2 << 2 | a - 1)], (i = r.concat(i, n))[3] |= o, i = e.encrypt(i), t.length)
            for ((n = r.bitLength(t) / 8) <= 65279 ? s = [r.partial(16, n)] : n <= 4294967295 && (s = r.concat([r.partial(16, 65534)], [n])), s = r.concat(s, t), t = 0; t < s.length; t += 4) i = e.encrypt(l(i, s.slice(t, t + 4).concat([0, 0, 0])));
        return i
    },
    M: function(e, t, n, i, o, a) {
        var s = sjcl.bitArray,
            r = s.g;
        for (((o /= 8) % 2 || o < 4 || 16 < o) && q(new sjcl.exception.invalid("ccm: invalid tag length")), (4294967295 < i.length || 4294967295 < t.length) && q(new sjcl.exception.bug("ccm: can't deal with 4GiB or more data")), n = sjcl.mode.ccm.ea(e, i, n, o, s.bitLength(t) / 8, a), i = 0; i < t.length; i += 4) n = e.encrypt(r(n, t.slice(i, i + 4).concat([0, 0, 0])));
        return s.clamp(n, 8 * o)
    },
    q: function(e, t, n, i, o, a) {
        var s, r = sjcl.bitArray;
        s = r.g;
        var l = t.length,
            c = r.bitLength(t),
            u = l / 50,
            d = u;
        if (n = r.concat([r.partial(8, a - 1)], n).concat([0, 0, 0]).slice(0, 4), i = r.bitSlice(s(i, e.encrypt(n)), 0, o), !l) return {
            tag: i,
            data: []
        };
        for (s = 0; s < l; s += 4) u < s && (sjcl.mode.ccm.X(s / l), u += d), n[3]++, o = e.encrypt(n), t[s] ^= o[0], t[s + 1] ^= o[1], t[s + 2] ^= o[2], t[s + 3] ^= o[3];
        return {
            tag: i,
            data: r.clamp(t, c)
        }
    }
}, sjcl.mode.ocb2 = {
    name: "ocb2",
    encrypt: function(e, t, n, i, o, a) {
        128 !== sjcl.bitArray.bitLength(n) && q(new sjcl.exception.invalid("ocb iv must be 128 bits"));
        var s, r = sjcl.mode.ocb2.J,
            l = sjcl.bitArray,
            c = l.g,
            u = [0, 0, 0, 0];
        n = r(e.encrypt(n));
        var d, p = [];
        for (i = i || [], o = o || 64, s = 0; s + 4 < t.length; s += 4) u = c(u, d = t.slice(s, s + 4)), p = p.concat(c(n, e.encrypt(c(n, d)))), n = r(n);
        return d = t.slice(s), t = l.bitLength(d), s = e.encrypt(c(n, [0, 0, 0, t])), u = c(u, c((d = l.clamp(c(d.concat([0, 0, 0]), s), t)).concat([0, 0, 0]), s)), u = e.encrypt(c(u, c(n, r(n)))), i.length && (u = c(u, a ? i : sjcl.mode.ocb2.pmac(e, i))), p.concat(l.concat(d, l.clamp(u, o)))
    },
    decrypt: function(e, t, n, i, o, a) {
        128 !== sjcl.bitArray.bitLength(n) && q(new sjcl.exception.invalid("ocb iv must be 128 bits")), o = o || 64;
        var s, r, l = sjcl.mode.ocb2.J,
            c = sjcl.bitArray,
            u = c.g,
            d = [0, 0, 0, 0],
            p = l(e.encrypt(n)),
            h = sjcl.bitArray.bitLength(t) - o,
            f = [];
        for (i = i || [], n = 0; n + 4 < h / 32; n += 4) d = u(d, s = u(p, e.decrypt(u(p, t.slice(n, n + 4))))), f = f.concat(s), p = l(p);
        return r = h - 32 * n, d = u(d, s = u(s = e.encrypt(u(p, [0, 0, 0, r])), c.clamp(t.slice(n), r).concat([0, 0, 0]))), d = e.encrypt(u(d, u(p, l(p)))), i.length && (d = u(d, a ? i : sjcl.mode.ocb2.pmac(e, i))), c.equal(c.clamp(d, o), c.bitSlice(t, h)) || q(new sjcl.exception.corrupt("ocb: tag doesn't match")), f.concat(c.clamp(s, r))
    },
    pmac: function(e, t) {
        var n, i = sjcl.mode.ocb2.J,
            o = sjcl.bitArray,
            a = o.g,
            s = [0, 0, 0, 0],
            r = a(r = e.encrypt([0, 0, 0, 0]), i(i(r)));
        for (n = 0; n + 4 < t.length; n += 4) r = i(r), s = a(s, e.encrypt(a(r, t.slice(n, n + 4))));
        return n = t.slice(n), o.bitLength(n) < 128 && (r = a(r, i(r)), n = o.concat(n, [-2147483648, 0, 0, 0])), s = a(s, n), e.encrypt(a(i(a(r, i(r))), s))
    },
    J: function(e) {
        return [e[0] << 1 ^ e[1] >>> 31, e[1] << 1 ^ e[2] >>> 31, e[2] << 1 ^ e[3] >>> 31, e[3] << 1 ^ 135 * (e[0] >>> 31)]
    }
}, sjcl.mode.gcm = {
    name: "gcm",
    encrypt: function(e, t, n, i, o) {
        var a = t.slice(0);
        return t = sjcl.bitArray, i = i || [], e = sjcl.mode.gcm.q(!0, e, a, i, n, o || 128), t.concat(e.data, e.tag)
    },
    decrypt: function(e, t, n, i, o) {
        var a = t.slice(0),
            s = sjcl.bitArray,
            r = s.bitLength(a);
        return i = i || [], a = (o = o || 128) <= r ? (t = s.bitSlice(a, r - o), s.bitSlice(a, 0, r - o)) : (t = a, []), e = sjcl.mode.gcm.q(u, e, a, i, n, o), s.equal(e.tag, t) || q(new sjcl.exception.corrupt("gcm: tag doesn't match")), e.data
    },
    ba: function(e, t) {
        var n, i, o, a, s, r = sjcl.bitArray.g;
        for (o = [0, 0, 0, 0], a = t.slice(0), n = 0; n < 128; n++) {
            for ((i = 0 != (e[Math.floor(n / 32)] & 1 << 31 - n % 32)) && (o = r(o, a)), s = 0 != (1 & a[3]), i = 3; 0 < i; i--) a[i] = a[i] >>> 1 | (1 & a[i - 1]) << 31;
            a[0] >>>= 1, s && (a[0] ^= -520093696)
        }
        return o
    },
    h: function(e, t, n) {
        var i, o = n.length;
        for (t = t.slice(0), i = 0; i < o; i += 4) t[0] ^= 4294967295 & n[i], t[1] ^= 4294967295 & n[i + 1], t[2] ^= 4294967295 & n[i + 2], t[3] ^= 4294967295 & n[i + 3], t = sjcl.mode.gcm.ba(t, e);
        return t
    },
    q: function(e, t, n, i, o, a) {
        var s, r, l, c, u, d, p, h, f = sjcl.bitArray;
        for (d = n.length, p = f.bitLength(n), h = f.bitLength(i), r = f.bitLength(o), s = t.encrypt([0, 0, 0, 0]), o = 96 === r ? (o = o.slice(0), f.concat(o, [1])) : (o = sjcl.mode.gcm.h(s, [0, 0, 0, 0], o), sjcl.mode.gcm.h(s, o, [0, 0, Math.floor(r / 4294967296), 4294967295 & r])), r = sjcl.mode.gcm.h(s, [0, 0, 0, 0], i), u = o.slice(0), i = r.slice(0), e || (i = sjcl.mode.gcm.h(s, r, n)), c = 0; c < d; c += 4) u[3]++, l = t.encrypt(u), n[c] ^= l[0], n[c + 1] ^= l[1], n[c + 2] ^= l[2], n[c + 3] ^= l[3];
        return n = f.clamp(n, p), e && (i = sjcl.mode.gcm.h(s, r, n)), e = [Math.floor(h / 4294967296), 4294967295 & h, Math.floor(p / 4294967296), 4294967295 & p], i = sjcl.mode.gcm.h(s, i, e), l = t.encrypt(o), i[0] ^= l[0], i[1] ^= l[1], i[2] ^= l[2], i[3] ^= l[3], {
            tag: f.bitSlice(i, 0, a),
            data: n
        }
    }
}, sjcl.misc.hmac = function(e, t) {
    this.N = t = t || sjcl.hash.sha256;
    var n, i = [
            [],
            []
        ],
        o = t.prototype.blockSize / 32;
    for (this.n = [new t, new t], e.length > o && (e = t.hash(e)), n = 0; n < o; n++) i[0][n] = 909522486 ^ e[n], i[1][n] = 1549556828 ^ e[n];
    this.n[0].update(i[0]), this.n[1].update(i[1]), this.I = new t(this.n[0])
}, sjcl.misc.hmac.prototype.encrypt = sjcl.misc.hmac.prototype.mac = function(e) {
    return this.S && q(new sjcl.exception.invalid("encrypt on already updated hmac called!")), this.update(e), this.digest(e)
}, sjcl.misc.hmac.prototype.reset = function() {
    this.I = new this.N(this.n[0]), this.S = u
}, sjcl.misc.hmac.prototype.update = function(e) {
    this.S = !0, this.I.update(e)
}, sjcl.misc.hmac.prototype.digest = function() {
    var e = this.I.finalize();
    e = new this.N(this.n[1]).update(e).finalize();
    return this.reset(), e
}, sjcl.misc.pbkdf2 = function(e, t, n, i, o) {
    n = n || 1e3, (i < 0 || n < 0) && q(sjcl.exception.invalid("invalid params to pbkdf2")), "string" == typeof e && (e = sjcl.codec.utf8String.toBits(e)), "string" == typeof t && (t = sjcl.codec.utf8String.toBits(t)), e = new(o = o || sjcl.misc.hmac)(e);
    var a, s, r, l, c = [],
        u = sjcl.bitArray;
    for (l = 1; 32 * c.length < (i || 1); l++) {
        for (o = a = e.encrypt(u.concat(t, [l])), s = 1; s < n; s++)
            for (a = e.encrypt(a), r = 0; r < a.length; r++) o[r] ^= a[r];
        c = c.concat(o)
    }
    return i && (c = u.clamp(c, i)), c
}, sjcl.prng = function(e) {
    this.c = [new sjcl.hash.sha256], this.j = [0], this.H = 0, this.u = {}, this.F = 0, this.L = {}, this.Q = this.d = this.k = this.Z = 0, this.b = [0, 0, 0, 0, 0, 0, 0, 0], this.f = [0, 0, 0, 0], this.C = s, this.D = e, this.r = u, this.B = {
        progress: {},
        seeded: {}
    }, this.m = this.Y = 0, this.w = 1, this.A = 2, this.U = 65536, this.K = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024], this.V = 3e4, this.T = 80
}, sjcl.prng.prototype = {
    randomWords: function(e, t) {
        var n, i, o = [];
        if ((n = this.isReady(t)) === this.m && q(new sjcl.exception.notReady("generator isn't seeded")), n & this.A) {
            n = !(n & this.w), i = [];
            var a, s = 0;
            for (this.Q = i[0] = (new Date).valueOf() + this.V, a = 0; a < 16; a++) i.push(4294967296 * Math.random() | 0);
            for (a = 0; a < this.c.length && (i = i.concat(this.c[a].finalize()), s += this.j[a], this.j[a] = 0, n || !(this.H & 1 << a)); a++);
            for (this.H >= 1 << this.c.length && (this.c.push(new sjcl.hash.sha256), this.j.push(0)), this.d -= s, s > this.k && (this.k = s), this.H++, this.b = sjcl.hash.sha256.hash(this.b.concat(i)), this.C = new sjcl.cipher.aes(this.b), n = 0; n < 4 && (this.f[n] = this.f[n] + 1 | 0, !this.f[n]); n++);
        }
        for (n = 0; n < e; n += 4) 0 == (n + 1) % this.U && A(this), i = B(this), o.push(i[0], i[1], i[2], i[3]);
        return A(this), o.slice(0, e)
    },
    setDefaultParanoia: function(e, t) {
        0 === e && "Setting paranoia=0 will ruin your security; use it only for testing" !== t && q("Setting paranoia=0 will ruin your security; use it only for testing"), this.D = e
    },
    addEntropy: function(e, t, n) {
        n = n || "user";
        var i, o, a = (new Date).valueOf(),
            r = this.u[n],
            l = this.isReady(),
            c = 0;
        switch ((i = this.L[n]) === s && (i = this.L[n] = this.Z++), r === s && (r = this.u[n] = 0), this.u[n] = (this.u[n] + 1) % this.c.length, typeof e) {
            case "number":
                t === s && (t = 1), this.c[r].update([i, this.F++, 1, t, a, 1, 0 | e]);
                break;
            case "object":
                if ("[object Uint32Array]" === (n = Object.prototype.toString.call(e))) {
                    for (o = [], n = 0; n < e.length; n++) o.push(e[n]);
                    e = o
                } else
                    for ("[object Array]" !== n && (c = 1), n = 0; n < e.length && !c; n++) "number" != typeof e[n] && (c = 1);
                if (!c) {
                    if (t === s)
                        for (n = t = 0; n < e.length; n++)
                            for (o = e[n]; 0 < o;) t++, o >>>= 1;
                    this.c[r].update([i, this.F++, 2, t, a, e.length].concat(e))
                }
                break;
            case "string":
                t === s && (t = e.length), this.c[r].update([i, this.F++, 3, t, a, e.length]), this.c[r].update(e);
                break;
            default:
                c = 1
        }
        c && q(new sjcl.exception.bug("random: addEntropy only supports number, array of numbers or string")), this.j[r] += t, this.d += t, l === this.m && (this.isReady() !== this.m && C("seeded", Math.max(this.k, this.d)), C("progress", this.getProgress()))
    },
    isReady: function(e) {
        return e = this.K[e !== s ? e : this.D], this.k && this.k >= e ? this.j[0] > this.T && (new Date).valueOf() > this.Q ? this.A | this.w : this.w : this.d >= e ? this.A | this.m : this.m
    },
    getProgress: function(e) {
        return e = this.K[e || this.D], this.k >= e ? 1 : this.d > e ? 1 : this.d / e
    },
    startCollectors: function() {
        this.r || (this.a = {
            loadTimeCollector: D(this, this.da),
            mouseCollector: D(this, this.fa),
            keyboardCollector: D(this, this.ca),
            accelerometerCollector: D(this, this.W),
            touchCollector: D(this, this.ha)
        }, window.addEventListener ? (window.addEventListener("load", this.a.loadTimeCollector, u), window.addEventListener("mousemove", this.a.mouseCollector, u), window.addEventListener("keypress", this.a.keyboardCollector, u), window.addEventListener("devicemotion", this.a.accelerometerCollector, u), window.addEventListener("touchmove", this.a.touchCollector, u)) : document.attachEvent ? (document.attachEvent("onload", this.a.loadTimeCollector), document.attachEvent("onmousemove", this.a.mouseCollector), document.attachEvent("keypress", this.a.keyboardCollector)) : q(new sjcl.exception.bug("can't attach event")), this.r = !0)
    },
    stopCollectors: function() {
        this.r && (window.removeEventListener ? (window.removeEventListener("load", this.a.loadTimeCollector, u), window.removeEventListener("mousemove", this.a.mouseCollector, u), window.removeEventListener("keypress", this.a.keyboardCollector, u), window.removeEventListener("devicemotion", this.a.accelerometerCollector, u), window.removeEventListener("touchmove", this.a.touchCollector, u)) : document.detachEvent && (document.detachEvent("onload", this.a.loadTimeCollector), document.detachEvent("onmousemove", this.a.mouseCollector), document.detachEvent("keypress", this.a.keyboardCollector)), this.r = u)
    },
    addEventListener: function(e, t) {
        this.B[e][this.Y++] = t
    },
    removeEventListener: function(e, t) {
        var n, i, o = this.B[e],
            a = [];
        for (i in o) o.hasOwnProperty(i) && o[i] === t && a.push(i);
        for (n = 0; n < a.length; n++) delete o[i = a[n]]
    },
    ca: function() {
        E(1)
    },
    fa: function(e) {
        var t, n;
        try {
            t = e.x || e.clientX || e.offsetX || 0, n = e.y || e.clientY || e.offsetY || 0
        } catch (e) {
            n = t = 0
        }
        0 != t && 0 != n && sjcl.random.addEntropy([t, n], 2, "mouse"), E(0)
    },
    ha: function(e) {
        e = e.touches[0] || e.changedTouches[0], sjcl.random.addEntropy([e.pageX || e.clientX, e.pageY || e.clientY], 1, "touch"), E(0)
    },
    da: function() {
        E(2)
    },
    W: function(e) {
        if (e = e.accelerationIncludingGravity.x || e.accelerationIncludingGravity.y || e.accelerationIncludingGravity.z, window.orientation) {
            var t = window.orientation;
            "number" == typeof t && sjcl.random.addEntropy(t, 1, "accelerometer")
        }
        e && sjcl.random.addEntropy(e, 2, "accelerometer"), E(0)
    }
}, sjcl.random = new sjcl.prng(6);
e: try {
    var F, G, H, I;
    if (I = "undefined" != typeof module) {
        var J;
        if (J = module.exports) {
            var K;
            try {
                K = require("crypto")
            } catch (e) {
                K = null
            }
            J = (G = K) && G.randomBytes
        }
        I = J
    }
    if (I) F = G.randomBytes(128), F = new Uint32Array(new Uint8Array(F).buffer), sjcl.random.addEntropy(F, 1024, "crypto['randomBytes']");
    else if ("undefined" != typeof window && "undefined" != typeof Uint32Array) {
        if (H = new Uint32Array(32), window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(H);
        else {
            if (!window.msCrypto || !window.msCrypto.getRandomValues) break e;
            window.msCrypto.getRandomValues(H)
        }
        sjcl.random.addEntropy(H, 1024, "crypto['getRandomValues']")
    }
} catch (e) {
    "undefined" != typeof window && window.console && (console.log("There was an error collecting entropy from the browser:"), console.log(e))
}
sjcl.json = {
    defaults: {
        v: 1,
        iter: 1e3,
        ks: 128,
        ts: 64,
        mode: "ccm",
        adata: "",
        cipher: "aes"
    },
    aa: function(e, t, n, i) {
        n = n || {}, i = i || {};
        var o, a = sjcl.json,
            s = a.e({
                iv: sjcl.random.randomWords(4, 0)
            }, a.defaults);
        return a.e(s, n), n = s.adata, "string" == typeof s.salt && (s.salt = sjcl.codec.base64.toBits(s.salt)), "string" == typeof s.iv && (s.iv = sjcl.codec.base64.toBits(s.iv)), (!sjcl.mode[s.mode] || !sjcl.cipher[s.cipher] || "string" == typeof e && s.iter <= 100 || 64 !== s.ts && 96 !== s.ts && 128 !== s.ts || 128 !== s.ks && 192 !== s.ks && 256 !== s.ks || s.iv.length < 2 || 4 < s.iv.length) && q(new sjcl.exception.invalid("json encrypt: invalid parameters")), "string" == typeof e ? (e = (o = sjcl.misc.cachedPbkdf2(e, s)).key.slice(0, s.ks / 32), s.salt = o.salt) : sjcl.ecc && e instanceof sjcl.ecc.elGamal.publicKey && (o = e.kem(), s.kemtag = o.tag, e = o.key.slice(0, s.ks / 32)), "string" == typeof t && (t = sjcl.codec.utf8String.toBits(t)), "string" == typeof n && (s.adata = n = sjcl.codec.utf8String.toBits(n)), o = new sjcl.cipher[s.cipher](e), a.e(i, s), i.key = e, s.ct = "ccm" === s.mode && sjcl.arrayBuffer && sjcl.arrayBuffer.ccm && t instanceof ArrayBuffer ? sjcl.arrayBuffer.ccm.encrypt(o, t, s.iv, n, s.ts) : sjcl.mode[s.mode].encrypt(o, t, s.iv, n, s.ts), s
    },
    encrypt: function(e, t, n, i) {
        var o = sjcl.json,
            a = o.aa.apply(o, arguments);
        return o.encode(a)
    },
    $: function(e, t, n, i) {
        n = n || {}, i = i || {};
        var o, a, s = sjcl.json;
        return o = (t = s.e(s.e(s.e({}, s.defaults), t), n, !0)).adata, "string" == typeof t.salt && (t.salt = sjcl.codec.base64.toBits(t.salt)), "string" == typeof t.iv && (t.iv = sjcl.codec.base64.toBits(t.iv)), (!sjcl.mode[t.mode] || !sjcl.cipher[t.cipher] || "string" == typeof e && t.iter <= 100 || 64 !== t.ts && 96 !== t.ts && 128 !== t.ts || 128 !== t.ks && 192 !== t.ks && 256 !== t.ks || !t.iv || t.iv.length < 2 || 4 < t.iv.length) && q(new sjcl.exception.invalid("json decrypt: invalid parameters")), "string" == typeof e ? (e = (a = sjcl.misc.cachedPbkdf2(e, t)).key.slice(0, t.ks / 32), t.salt = a.salt) : sjcl.ecc && e instanceof sjcl.ecc.elGamal.secretKey && (e = e.unkem(sjcl.codec.base64.toBits(t.kemtag)).slice(0, t.ks / 32)), "string" == typeof o && (o = sjcl.codec.utf8String.toBits(o)), a = new sjcl.cipher[t.cipher](e), o = "ccm" === t.mode && sjcl.arrayBuffer && sjcl.arrayBuffer.ccm && t.ct instanceof ArrayBuffer ? sjcl.arrayBuffer.ccm.decrypt(a, t.ct, t.iv, t.tag, o, t.ts) : sjcl.mode[t.mode].decrypt(a, t.ct, t.iv, o, t.ts), s.e(i, t), i.key = e, 1 === n.raw ? o : sjcl.codec.utf8String.fromBits(o)
    },
    decrypt: function(e, t, n, i) {
        var o = sjcl.json;
        return o.$(e, o.decode(t), n, i)
    },
    encode: function(e) {
        var t, n = "{",
            i = "";
        for (t in e)
            if (e.hasOwnProperty(t)) switch (t.match(/^[a-z0-9]+$/i) || q(new sjcl.exception.invalid("json encode: invalid property name")), n += i + '"' + t + '":', i = ",", typeof e[t]) {
                case "number":
                case "boolean":
                    n += e[t];
                    break;
                case "string":
                    n += '"' + escape(e[t]) + '"';
                    break;
                case "object":
                    n += '"' + sjcl.codec.base64.fromBits(e[t], 0) + '"';
                    break;
                default:
                    q(new sjcl.exception.bug("json encode: unsupported type"))
            }
        return n + "}"
    },
    decode: function(e) {
        (e = e.replace(/\s/g, "")).match(/^\{.*\}$/) || q(new sjcl.exception.invalid("json decode: this isn't json!")), e = e.replace(/^\{|\}$/g, "").split(/,/);
        var t, n, i = {};
        for (t = 0; t < e.length; t++)(n = e[t].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i)) || q(new sjcl.exception.invalid("json decode: this isn't json!")), null != n[3] ? i[n[2]] = parseInt(n[3], 10) : null != n[4] ? i[n[2]] = n[2].match(/^(ct|adata|salt|iv)$/) ? sjcl.codec.base64.toBits(n[4]) : unescape(n[4]) : null != n[5] && (i[n[2]] = "true" === n[5]);
        return i
    },
    e: function(e, t, n) {
        if (e === s && (e = {}), t === s) return e;
        for (var i in t) t.hasOwnProperty(i) && (n && e[i] !== s && e[i] !== t[i] && q(new sjcl.exception.invalid("required parameter overridden")), e[i] = t[i]);
        return e
    },
    ja: function(e, t) {
        var n, i = {};
        for (n in e) e.hasOwnProperty(n) && e[n] !== t[n] && (i[n] = e[n]);
        return i
    },
    ia: function(e, t) {
        var n, i = {};
        for (n = 0; n < t.length; n++) e[t[n]] !== s && (i[t[n]] = e[t[n]]);
        return i
    }
}, sjcl.encrypt = sjcl.json.encrypt, sjcl.decrypt = sjcl.json.decrypt, sjcl.misc.ga = {}, sjcl.misc.cachedPbkdf2 = function(e, t) {
    var n, i = sjcl.misc.ga;
    return n = (t = t || {}).iter || 1e3, (n = (i = i[e] = i[e] || {})[n] = i[n] || {
        firstSalt: t.salt && t.salt.length ? t.salt.slice(0) : sjcl.random.randomWords(2, 0)
    })[i = t.salt === s ? n.firstSalt : t.salt] = n[i] || sjcl.misc.pbkdf2(e, i, t.iter), {
        key: n[i].slice(0),
        salt: i.slice(0)
    }
};
