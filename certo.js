! function(e) {
    function t(t) {
        for (var n, i, s = t[0], c = t[1], u = t[3] || [], p = 0, d = []; p < s.length; p++) i = s[p], Object.prototype.hasOwnProperty.call(o, i) && o[i] && d.push(o[i][0]), o[i] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
        for (l && l(t), u.forEach((function(e) {
                if (void 0 === o[e]) {
                    o[e] = null;
                    var t = document.createElement("link");
                    a.nc && t.setAttribute("nonce", a.nc), t.rel = "prefetch", t.as = "script", t.href = r(e), document.head.appendChild(t)
                }
            })); d.length;) d.shift()()
    }
    var n = {},
        o = { 8: 0 };

    function r(e) { return a.p + "js/" + ({ 0: "components-article-table", 1: "components-mapa-brasil", 2: "components-multiple-choice", 3: "components-roman-numerals", 4: "components-simulado", 5: "components-tabela-periodica", 9: "oembed" }[e] || e) + ".chunk." + e + "." + { 0: "2095f7f82be33a7eac30", 1: "eccb98e8302b84ba2b8b", 2: "8fe76f0a5c500dc73dac", 3: "fdce59a36bfe9bf8c2a4", 4: "fead2df2b3b3d6665be8", 5: "1322b7c951e31d2b5330", 9: "d4efa880b5e3ba6bb813" }[e] + ".js" }

    function a(t) { if (n[t]) return n[t].exports; var o = n[t] = { i: t, l: !1, exports: {} }; return e[t].call(o.exports, o, o.exports, a), o.l = !0, o.exports }
    a.e = function(e) {
        var t = [],
            n = o[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var i = new Promise((function(t, r) { n = o[e] = [t, r] }));
                t.push(n[2] = i);
                var s, c = document.createElement("script");
                c.charset = "utf-8", c.timeout = 120, a.nc && c.setAttribute("nonce", a.nc), c.src = r(e);
                var l = new Error;
                s = function(t) {
                    c.onerror = c.onload = null, clearTimeout(u);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                a = t && t.target && t.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")", l.name = "ChunkLoadError", l.type = r, l.request = a, n[1](l)
                        }
                        o[e] = void 0
                    }
                };
                var u = setTimeout((function() { s({ type: "timeout", target: c }) }), 12e4);
                c.onerror = c.onload = s, document.head.appendChild(c)
            }
        return Promise.all(t)
    }, a.m = e, a.c = n, a.d = function(e, t, n) { a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, a.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, a.t = function(e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var o in e) a.d(n, o, function(t) { return e[t] }.bind(null, o));
        return n
    }, a.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return a.d(t, "a", t), t }, a.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, a.p = "https://static.todamateria.com.br/layout/assets/dist/", a.oe = function(e) { throw e };
    var i = window.webpackJsonp = window.webpackJsonp || [],
        s = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var c = 0; c < i.length; c++) t(i[c]);
    var l = s,
        u = a(a.s = 13);
    t([
        [], {},
        0, [0, 1, 2, 3, 4, 5, 9]
    ])
}([function(e, t, n) {
    "use strict";

    function o(e) {
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (e = function(e, t) { if (!e) return; if ("string" == typeof e) return r(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(n); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t) }(e))) {
                var t = 0,
                    n = function() {};
                return { s: n, n: function() { return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] } }, e: function(e) { throw e }, f: n }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a, i = !0,
            s = !1;
        return { s: function() { o = e[Symbol.iterator]() }, n: function() { var e = o.next(); return i = e.done, e }, e: function(e) { s = !0, a = e }, f: function() { try { i || null == o.return || o.return() } finally { if (s) throw a } } }
    }

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o
    }

    function a(e) {
        return new Promise((function(t, n) {
            var o = document.querySelector(e);
            o ? t(o) : new MutationObserver((function(n, o) { n.forEach((function(n) { for (var r = 0, a = Array.from(n.addedNodes); r < a.length; r++) { var i = a[r]; if (i.matches && i.matches(e)) return o.disconnect(), void t(i) } })) })).observe(document.documentElement, { childList: !0, subtree: !0 })
        }))
    }

    function i(e) { return n(14)("".concat(e)).then((function(e) { e.default() })) }

    function s(e, t) {
        return new Promise((function(n, o) {
            var r = document.getElementsByTagName("head")[0],
                a = document.createElement("script");
            a.type = "text/javascript", a.onload = n, a.onerror = o, a.src = e, a.async = t, r.appendChild(a)
        }))
    }

    function c(e, t) { var n, r = o(e); try { for (r.s(); !(n = r.n()).done;) each = n.value, window.dataLayer.push({ event: "performanceUserTiming", DLVperformanceCat: "User Centric Performance - Array", DLVperformanceVar: t, DLVperformanceLab: each.label, DLVperformanceVal: each.value }) } catch (e) { r.e(e) } finally { r.f() } }

    function l(e, t, n) { window.dataLayer.push({ event: "performanceUserTiming", DLVperformanceCat: "User Centric Performance - Important", DLVperformanceVar: e, DLVperformanceLab: n, DLVperformanceVal: t }) }
    n.r(t), n.d(t, "elementDomReady", (function() { return a })), n.d(t, "getComponent", (function() { return i })), n.d(t, "loadScript", (function() { return s })), n.d(t, "sendAnaliticsPerformanceUserTimingArray", (function() { return c })), n.d(t, "sendAnaliticsPerformanceUserTiming", (function() { return l }))
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(0),
        r = (n(15), n(2));
    document.querySelector(".box-social") && r.Sg_Social.init(), document.querySelector(".sg-oembed") && n.e(9).then(n.t.bind(null, 19, 7)), document.querySelector("#roman-numerals-widget") && Object(o.getComponent)("./components/roman-numerals"), document.querySelector("#tabela-periodica") && Object(o.getComponent)("./components/tabela-periodica"), document.querySelector("#article table") && Object(o.getComponent)("./components/article-table"), document.querySelector("#headerMapaBrasil") && Object(o.getComponent)("./components/mapa-brasil"), document.querySelector(".simulado-wrapper") && Object(o.getComponent)("./components/simulado"), document.querySelector(".multiple-choice") && Object(o.getComponent)("./components/multiple-choice");
    var a = "".concat(-1 === location.hostname.indexOf(".test") ? "https://7gra.us" : "//resources.test", "/bhof.js");
    Object(o.loadScript)(a, !0)
}, function(e, t) {
    var n = n || {};
    n = function() {
        "use strict";
        var e = function() { try { return window.self !== window.top } catch (e) { return !0 } };
        return {
            recaptchaLoaded: !1,
            recaptchasToLoad: [],
            options: { sg_share_baseurl: window.location.origin, sg_redirect_uri: window.location.href, fb_app_id: "", twitter_username: "", lang: "br", share_email_endpoint: "/share_email/", campaign: { enabled: !0 } },
            blocks: [],
            init: function(e) { window.recaptchaloaded = function() { n.recaptchaloaded() }, this.initOptions(e), this.fetchAllBlocks(), this.fetchAllButtonsFromBlocks() },
            initOptions: function(e) { this.options = Object.assign(this.options, e) },
            initButtons: function(t, o) {
                var r = this;
                for (var a in t) {
                    var i = t[a];
                    if (Sg_Utils.hasClass(i, "sg-facebook-btn")) i.sg_type = "facebook";
                    else if (Sg_Utils.hasClass(i, "sg-twitter-btn")) i.sg_type = "twitter";
                    else if (Sg_Utils.hasClass(i, "sg-email-btn")) i.sg_type = "email";
                    else if (Sg_Utils.hasClass(i, "sg-whatsapp-btn")) i.sg_type = "whatsapp";
                    else if (Sg_Utils.hasClass(i, "sg-print-btn")) i.sg_type = "print";
                    else if (Sg_Utils.hasClass(i, "sg-linkedin-btn")) i.sg_type = "linkedin";
                    else if (Sg_Utils.hasClass(i, "sg-sms-btn")) i.sg_type = "sms";
                    else if (Sg_Utils.hasClass(i, "sg-pinterest-btn")) i.sg_type = "pinterest";
                    else if (Sg_Utils.hasClass(i, "sg-fbmessenger-btn")) i.sg_type = "fbmessenger";
                    else if (Sg_Utils.hasClass(i, "sg-vkontakte-btn")) i.sg_type = "vkontakte";
                    else if (Sg_Utils.hasClass(i, "sg-odnoklassniki-btn")) i.sg_type = "odnoklassniki";
                    else {
                        if (!Sg_Utils.hasClass(i, "sg-telegram-btn")) continue;
                        i.sg_type = "telegram"
                    }
                    if (!/iP(ad|hone|od)/.test(navigator.userAgent) || window.MSStream || "sms" !== i.sg_type) Sg_Utils.addListener(i, "click", (function(t) {
                        var a = this.sg_type,
                            i = [],
                            s = [],
                            c = "",
                            l = { enabled: !1, width: 1, height: 1, timeout: 0 },
                            u = o.url;
                        u && "" !== u && null != u || !o.urlCallback || "function" == typeof window[o.urlCallback] && "string" == typeof(u = (0, window[o.urlCallback])()) && "" !== u && "/" === u.charAt(0) && (u = r.options.sg_share_baseurl + u);
                        var p = u;
                        r.options.campaign.enabled && (p += (p.indexOf("?") > -1 ? "&" : "?") + "utm_source=" + a + "&utm_medium=referral");
                        var d = p;
                        p = encodeURIComponent(p);
                        var m = "";
                        switch (o.text && (m += o.text), d && (m += (o.text ? "\n\n" : "") + d), a) {
                            case "pinterest":
                                l.enabled = !0, l.width = 750, l.height = 600, c = "https://www.pinterest.com/pin/create/button/?";
                                var f = encodeURIComponent(o.text.substring(0, 485 - u.length)) + " (...) " + u;
                                " (...) " === f && (f = ""), i.push("description=" + f), i.push("url=" + p), i.push("media=" + encodeURIComponent(o.media));
                                break;
                            case "email":
                                c = "mailto:?", o.title && i.push("subject=" + o.title), i.push("body=" + encodeURIComponent(m));
                                break;
                            case "facebook":
                                c = "https://www.facebook.com/sharer/sharer.php?", l.enabled = !0, l.width = 556, l.height = 600, i.push("u=" + p);
                                break;
                            case "fbmessenger":
                                c = "https://www.facebook.com/dialog/send?", l.enabled = !0, l.width = 750, l.height = 520, i.push("app_id=" + n.options.fb_app_id), i.push("display=popup"), i.push("link=" + p), i.push("redirect_uri=" + encodeURIComponent(n.options.sg_redirect_uri));
                                break;
                            case "googleplus":
                                c = "https://plus.google.com/share?", l.width = 750, l.height = 520, i.push("url=" + p);
                                break;
                            case "print":
                                window.print();
                                break;
                            case "sms":
                                c += "sms:?", i.push("body=" + encodeURIComponent(m));
                                break;
                            case "twitter":
                                c = "https://twitter.com/intent/tweet?", l.enabled = !0, l.width = 535, l.height = 461;
                                var h;
                                " (...)" === (h = o.twittercopy ? o.twittercopy : o.text.substring(0, 110) + " (...)") && (h = ""), i.push("url=" + p), i.push("text=" + encodeURIComponent(h)), n.options.twitter_username && i.push("via=" + n.options.twitter_username);
                                break;
                            case "linkedin":
                                c = "https://www.linkedin.com/shareArticle?", l.enabled = !0, l.width = 550, l.height = 560, i.push("mini=true"), i.push("url=" + p);
                                break;
                            case "whatsapp":
                                l.enabled = !0, l.width = 550, l.height = 400, m = "", o.title && (m += o.title), d && (m += (o.title ? "\n" : "") + d), c = "https://api.whatsapp.com/send?", i.push("text=" + encodeURIComponent(m));
                                break;
                            case "telegram":
                                l.enabled = !0, l.width = 550, l.height = 400, c = "https://telegram.me/share/url?", i.push("url=" + p), i.push("text=" + encodeURIComponent(o.title || ""));
                                break;
                            case "vkontakte":
                                l.enabled = !0, c = "http://vk.com/share.php?", i.push("url=" + encodeURIComponent(u));
                                break;
                            case "odnoklassniki":
                                l.enabled = !0, l.width = 550, c = "https://connect.ok.ru/offer?", i.push("url=" + encodeURIComponent(u)), i.push("text=" + encodeURIComponent(o.title || "")), o.media && i.push("imageUrl=" + encodeURIComponent(o.media));
                                break;
                            default:
                                return
                        }
                        if (i) {
                            if (s.push("width=" + l.width), s.push("height=" + l.height), s = s.join(), p = c + i.join("&"), !0 !== l.enabled || Sg_Utils.userAgentIsMobile()) {
                                var g = l.enabled ? "_blank" : "_self";
                                e() && (g = "_parent"), window.open(p, g)
                            } else window.open(p, "", 0 === s.length ? "" : s);
                            "undefined" != typeof gtag ? gtag("event", a, { event_category: "Sg_Social", event_label: u }) : "undefined" != typeof ga && ga("send", "event", "Sg_Social", a, u, !0)
                        }
                    }));
                    else {
                        var s = i.parentNode;
                        s.parentNode.removeChild(s)
                    }
                }
            },
            fetchAllButtonsFromBlocks: function() {
                for (var e in this.blocks) {
                    var t = this.blocks[e],
                        n = t.element.querySelectorAll(".sg-social button");
                    this.initButtons(n, t), t.element.className = t.element.className.replace(/\bsg-social-hidden\b/, "")
                }
            },
            fetchAllBlocks: function() {
                var e = this;
                Sg_Utils.forEachElement(".sg-social", (function(t, n) {
                    var o = t.getAttribute("data-title"),
                        r = t.getAttribute("data-url");
                    if (!r) {
                        var a = t.getAttribute("data-url-selector-id");
                        if (a) {
                            var i = document.getElementById(a).querySelectorAll("a");
                            1 == i.length && (r = i[0].getAttribute("href"), o || (o = i[0].textContent))
                        }
                    }
                    "string" == typeof r && "" !== r && "/" === r.charAt(0) && (r = e.options.sg_share_baseurl + r);
                    var s = t.getAttribute("data-url-callback"),
                        c = t.getAttribute("data-twitter-copy"),
                        l = t.getAttribute("data-text");
                    if (!l) {
                        var u = t.getAttribute("data-text-selector-id");
                        if (u) {
                            var p = document.getElementById(u);
                            p && p.innerText && (l = p.innerText)
                        } else l = ""
                    }
                    var d = t.getAttribute("data-media");
                    e.blocks[n] = { element: t, title: o, url: r, urlCallback: s, twittercopy: c, text: l, media: d }
                }))
            }
        }
    }();
    t.Sg_Social = n
}, , , , , , , , , , , function(e, t, n) { n(1), e.exports = n(16) }, function(e, t, n) {
    var o = { "./app": [1], "./app.js": [1], "./components/article-table": [3, 0], "./components/article-table.js": [3, 0], "./components/mapa-brasil": [4, 1], "./components/mapa-brasil.js": [4, 1], "./components/multiple-choice": [5, 2], "./components/multiple-choice.js": [5, 2], "./components/roman-numerals": [6, 3], "./components/roman-numerals.js": [6, 3], "./components/simulado": [7, 4], "./components/simulado.js": [7, 4], "./components/tabela-periodica": [8, 5], "./components/tabela-periodica.js": [8, 5], "./utils": [0], "./utils.js": [0] };

    function r(e) {
        if (!n.o(o, e)) return Promise.resolve().then((function() { var t = new Error("Cannot find module '" + e + "'"); throw t.code = "MODULE_NOT_FOUND", t }));
        var t = o[e],
            r = t[0];
        return Promise.all(t.slice(1).map(n.e)).then((function() { return n(r) }))
    }
    r.keys = function() { return Object.keys(o) }, r.id = 14, e.exports = r
}, function(e, t) {
    function n(e) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
    Object.keys || (Object.keys = function() {
            "use strict";
            var e = Object.prototype.hasOwnProperty,
                t = !{ toString: null }.propertyIsEnumerable("toString"),
                o = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                r = o.length;
            return function(a) {
                if ("function" != typeof a && ("object" !== n(a) || null === a)) throw new TypeError("Object.keys called on non-object");
                var i, s, c = [];
                for (i in a) e.call(a, i) && c.push(i);
                if (t)
                    for (s = 0; s < r; s++) e.call(a, o[s]) && c.push(o[s]);
                return c
            }
        }()), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(e, t) {
                "use strict";
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                for (var n = Object(e), o = 1; o < arguments.length; o++) {
                    var r = arguments[o];
                    if (null != r)
                        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a])
                }
                return n
            },
            writable: !0,
            configurable: !0
        }),
        function(e) {
            if (0 !== e.length && !document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"))
                for (var t = 0, n = e.length; t < n; t++) {
                    var o = e[t].getAttribute("data-fallback");
                    e[t].getAttribute("src").match(/svgz?$/) && o && e[t].setAttribute("src", o)
                }
        }(document.getElementsByTagName("img")), window.sg_passive = !1;
    try {
        var o = Object.defineProperty({}, "passive", { get: function() { window.sg_passive = !0 } });
        window.addEventListener("test", null, o)
    } catch (e) {}
    var r = {
        forEach: function(e, t) { for (var n = 0, o = e.length; n < o; n++) t(e[n], n) },
        forEachElement: function(e, t) {
            var n = document.querySelectorAll(e);
            n && this.forEach(n, t)
        },
        addListener: function(e, t, n, o) { var r; return e.addEventListener ? (r = 1, e.addEventListener(t, n, !(!window.sg_passive || !o) && { passive: !0 })) : e.attachEvent ? (r = 2, n = function() { return n.call(e, window.event) }, e.attachEvent("on" + t, n)) : (r = 3, e["on" + t] = n), { method: r, element: e, type: t, callback: n, passive: o } },
        removeListener: function(e) {
            switch (e.method) {
                case 1:
                    e.element.removeEventListener(e.type, e.callback, !(!window.sg_supportsPassive || !e.passive) && { passive: !0 });
                    break;
                case 2:
                    e.element.detachEvent("on" + e.type, e.callback);
                    break;
                case 3:
                    e.element["on" + e.type] = function() {}
            }
        },
        extend: function(e, t) { var n, o = {}; for (n in e) o[n] = e[n]; for (n in t) t[n] && t[n].constructor && t[n].constructor === Object ? o[n] = this.extend(e[n] || {}, t[n]) : o[n] = t[n]; return o },
        hasClass: function(e, t) { return new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className) },
        addClass: function(e, t) { e.classList ? e.classList.add(t) : e.className += " " + t },
        toggleClass: function(e, t) { this.hasClass(e, t) ? this.removeClass(e, t) : this.addClass(e, t) },
        removeClass: function(e, t) { e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ") },
        userAgentIsMobile: function() { var e = navigator.userAgent || navigator.vendor || window.opera; return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4)) },
        request: function(e, t, n, o, a) {
            var i, s = !1;
            "function" != typeof o && (o = function() {}), t = "string" != typeof t ? "GET" : t.toUpperCase();
            var c = function(e) {
                    try { if ("{" === e.charAt(0) || "[" === e.charAt(0)) return o(JSON.parse(e)), !0 } catch (e) {}
                    o(e)
                },
                l = "";
            for (var u in n) "" !== l && (l += "&"), l += u + "=" + encodeURIComponent(n[u]);
            try {
                if ("XMLHttpRequest" in window) i = new XMLHttpRequest;
                else try { i = new ActiveXObject("MSXML2.XMLHTTP.6.0") } catch (e) { i = ActiveXObject("MSXML2.XMLHTTP.3.0") }
                i = Object.assign(i, a), "GET" === t ? (l.length > 0 && (l = "?" + l), i.open(t, e + l, !0), l = "") : (i.open(t, e, !0), "POST" !== t && i.setRequestHeader("Method", "POST " + e + " HTTP/1.1"), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")), i.onreadystatechange = function() { 4 !== i.readyState || s || (s = !0, c(i.responseText)) }, i.send(l)
            } catch (o) { r.getScript("//code.jquery.com/jquery-3.3.1.slim.min.js", (function() { $.ajax({ url: e, method: t, data: n, xhrFields: a, beforeSend: function(e) { i = e } }).done(c).always((function() { s = !0 })) })) }
            return i
        },
        setCookie: function(e, t, o) {
            var r = encodeURIComponent(e) + "=" + encodeURIComponent(t);
            o && o instanceof Date && (o = { expires: o }), o && "object" === n(o) && (o.expires && (r += "; expires=" + o.expires.toGMTString()), o.path && (r += "; path=" + o.path.toString()), o.domain && (r += "; domain=" + o.domain.toString()), o.secure && (r += "; secure")), document.cookie = r
        },
        getCookie: function(e) {
            for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                var o = t[n].split("="),
                    r = decodeURIComponent(o[0].trim()),
                    a = o.length > 1 ? o[1] : "";
                if (r == e) return decodeURIComponent(a)
            }
            return !1
        },
        createElement: function() { return "function" != typeof document.createElement ? document.createElement(arguments[0]) : "svg" === document.documentElement.nodeName.toLowerCase() ? document.createElementNS.call(document, "http://www.w3.org/2000/svg", arguments[0]) : document.createElement.apply(document, arguments) },
        supportCanvas: function() { var e = this.createElement("canvas"); return !(!e.getContext || !e.getContext("2d")) },
        supportCanvastext: function() { return !1 !== this.supportCanvas && "function" == typeof this.createElement("canvas").getContext("2d").fillText },
        supportLocalstorage: function() { var e = "sg_utils"; try { return localStorage.setItem(e, e), localStorage.removeItem(e), !0 } catch (e) { return !1 } },
        getScript: function(e, t) {
            "/" === e.charAt(0) && "/" === e.charAt(1) && (e = document.location.protocol + e);
            var n = window.document.getElementsByTagName("script")[0],
                o = window.document.createElement("script");
            return o.src = e, o.async = !0, n.parentNode.insertBefore(o, n), t && "function" == typeof t && (o.onload = t), o
        },
        getStyles: function(e, t) {
            if (!document.getElementById(e)) {
                var n = document.getElementsByTagName("head")[0],
                    o = document.createElement("link");
                return o.id = e, o.rel = "stylesheet", o.type = "text/css", o.href = t, o.media = "all", n.appendChild(o), o
            }
            return !1
        },
        parents: function(e, t) { for (var n = [], o = void 0 !== t; null !== (e = e.parentElement);) e.nodeType === Node.ELEMENT_NODE && (o && !e.matches(t) || n.push(e)); return n },
        debounce: function(e, t, n) {
            var o;
            return function() {
                var r = this,
                    a = arguments,
                    i = function() { o = null, n || e.apply(r, a) },
                    s = n && !o;
                clearTimeout(o), o = setTimeout(i, t), s && e.apply(r, a)
            }
        },
        getOffset: function(e) { for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - e.scrollLeft, n += e.offsetTop - e.scrollTop, e = e.offsetParent; return { top: n, left: t } },
        getWindowScrollCoordinates: function() {
            var e = 0,
                t = 0;
            if (isNaN(window.pageYOffset)) {
                var n = document,
                    o = n.documentElement,
                    r = n.body;
                e = o.scrollLeft || r.scrollLeft || 0, t = o.scrollTop || r.scrollTop || 0
            } else e = window.pageXOffset, t = window.pageYOffset;
            return { top: t, left: e }
        },
        urlAddParam: function(e, t, n) {
            var o = {},
                r = document.createElement("a");
            r.href = e;
            for (var a = r.search.split(/[?&]/), i = 0; i < a.length; i++)
                if (a[i]) {
                    var s = a[i].split("=");
                    o[s[0]] = s[1]
                }
            o[t] = n;
            var c = [];
            return Object.keys(o).forEach((function(e) { c.push(e + "=" + o[e]) })), r.search = "?" + c.join("&"), r.href
        },
        fadeOut: function(e) {
            e.style.opacity = 1,
                function t() {
                    (e.style.opacity -= .1) < 0 ? e.style.visibility = "hidden" : requestAnimationFrame(t)
                }()
        },
        fadeIn: function(e, t) {
            e.style.opacity = 0, e.style.visibility = t || "",
                function t() {
                    var n = parseFloat(e.style.opacity);
                    (n += .1) <= 1 && (e.style.opacity = n, requestAnimationFrame(t))
                }()
        },
        onReadyStateComplete: function(e) { "complete" !== document.readyState ? r.addListener(document, "readystatechange", (function(t) { "complete" === t.target.readyState && e() })) : e() }
    };
    window.Sg_Utils = r
}, function(e, t, n) {}]);