!(function(t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e(require("jquery")))
    : "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof exports
    ? (exports.AdminPlus = e(require("jquery")))
    : (t.AdminPlus = e(t.$));
})(this, function(t) {
  return (function(t) {
    function e(i) {
      if (n[i]) return n[i].exports;
      var r = (n[i] = { exports: {}, id: i, loaded: !1 });
      return t[i].call(r.exports, r, r.exports, e), (r.loaded = !0), r.exports;
    }
    var n = {};
    return (e.m = t), (e.c = n), (e.p = ""), e(0);
  })([
    function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), n(1);
      var i = n(2),
        r = { Sidebar: i.Sidebar, Scrollable: i.Scrollable };
      (e["default"] = r), (t.exports = e["default"]);
    },
    function(t, e) {},
    function(t, e, n) {
      !(function(e, i) {
        t.exports = i(n(3));
      })(this, function(t) {
        return (function(t) {
          function e(i) {
            if (n[i]) return n[i].exports;
            var r = (n[i] = { exports: {}, id: i, loaded: !1 });
            return (
              t[i].call(r.exports, r, r.exports, e), (r.loaded = !0), r.exports
            );
          }
          var n = {};
          return (e.m = t), (e.c = n), (e.p = ""), e(0);
        })([
          function(t, e, n) {
            "use strict";
            function i(t) {
              return t && t.__esModule ? t : { default: t };
            }
            Object.defineProperty(e, "__esModule", { value: !0 }), n(23);
            var r = n(5),
              o = i(r),
              s = n(4),
              a = i(s),
              l = { Sidebar: new o["default"](), Scrollable: a["default"] };
            (e["default"] = l), (t.exports = e["default"]);
          },
          function(t, e) {
            var n = (t.exports = { version: "1.2.6" });
            "number" == typeof __e && (__e = n);
          },
          function(t, e, n) {
            function i(t, e, n) {
              o(t, function(i, o) {
                return r(t, o) ? e.call(n, t[o], o, t) : void 0;
              });
            }
            var r = n(3),
              o = n(33);
            t.exports = i;
          },
          function(t, e) {
            function n(t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }
            t.exports = n;
          },
          function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e["default"] = function() {
                ($.fn.blScrollable = function() {
                  if (this.length) {
                    if (this.length > 1)
                      return void this.each(function() {
                        $(this).blScrollable();
                      });
                    var t = this;
                    t.addClass("simplebar"),
                      t.data("horizontal") && t.addClass("horizontal"),
                      t.simplebar(),
                      t.simplebar().on("scroll", function() {
                        var t = $(this),
                          e = t.simplebar("getScrollElement").scrollTop();
                        $("body").trigger("scrolling.bl.scrollable", [e]),
                          clearTimeout(this.scrollTimer),
                          (this.scrollTimer = setTimeout(function() {
                            var e = t.simplebar("getScrollElement").scrollTop();
                            $("body").trigger("end-scrolling.bl.scrollable", [
                              e
                            ]);
                          }, 100));
                      }),
                      t.on("scroll-to.bl.scrollable", function(e) {
                        var n = document.querySelector(e);
                        n &&
                          t
                            .simplebar("getScrollElement")
                            .animate({ scrollTop: n.offsetTop });
                      });
                  }
                }),
                  $("[data-scrollable]").blScrollable();
              }),
              n(34),
              (t.exports = e["default"]);
          },
          function(t, e, n) {
            "use strict";
            function i(t) {
              return t && t.__esModule ? t : { default: t };
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = n(7),
              o = i(r),
              s = n(8),
              a = i(s),
              l = n(9),
              u = i(l),
              c = n(2),
              f = i(c),
              h = n(25),
              p = i(h);
            n(10);
            var d = (function() {
              function t() {
                (0, a["default"])(this, t),
                  (this.SCREEN_SIZE = null),
                  (this.SCREEN_MD_UP = null),
                  (this.UPDATE_SCREEN_DEBOUNCE = 30),
                  (this.BREAKPOINTS = {
                    320: ["xs", "xs-up"],
                    480: ["xs", "xs-up"],
                    544: ["sm", "sm-up"],
                    768: ["md", "md-up"],
                    992: ["lg", "lg-up"],
                    1200: ["xl", "xl-up"],
                    1600: ["xl", "xl-up"]
                  }),
                  (this.VISIBLE_CLASS = "sidebar-visible"),
                  (this.EVENTS_CONTAINER = "body"),
                  (this.LAYOUT_CONTAINER_SELECTOR = ".layout-container"),
                  (this.SELECTOR = ".sidebar"),
                  (this.TOGGLE_SELECTOR = "[data-toggle=sidebar]"),
                  (this.NAV_SELECTOR = ".sidebar-menu"),
                  (this.NAV_ITEM_SELECTOR = ".sidebar-menu-item"),
                  (this.NAV_BUTTON_SELECTOR = ".sidebar-menu-button"),
                  (this._updateScreenDebounce = null);
              }
              return (
                (0, u["default"])(t, [
                  {
                    key: "_options",
                    value: function(t) {
                      t = this._sidebar(t);
                      var e = t.data("position") || "left",
                        n = (t.data("size") || 3) + "",
                        i = e.charAt(0),
                        r = t.data("visible") || "md-up",
                        o = t.attr("id");
                      return {
                        id: o,
                        position: e,
                        direction: i,
                        size: n,
                        visible: r
                      };
                    }
                  },
                  {
                    key: "_visibleBreakpoints",
                    value: function(t) {
                      var e = this,
                        n = [];
                      return (
                        this._visibleOptions(t).map(function(t) {
                          (0, f["default"])(e.BREAKPOINTS, function(e, i) {
                            -1 !== e.indexOf(t) && n.push(parseInt(i, 10));
                          });
                        }),
                        n
                      );
                    }
                  },
                  {
                    key: "_breakpoint",
                    value: function(t, e, n) {
                      $(window)[t ? "off" : "on"](
                        "enterBreakpoint" + e,
                        n.bind(this)
                      );
                    }
                  },
                  {
                    key: "_breakpoints",
                    value: function(t) {
                      var e = this,
                        n = (0, o["default"])(this.BREAKPOINTS).map(function(
                          t
                        ) {
                          return parseInt(t, 10);
                        });
                      "undefined" != typeof $.fn.setBreakpoints &&
                        $(window).setBreakpoints({ breakpoints: n }),
                        this._each(function(i) {
                          var r = e._visibleBreakpoints(i);
                          (0, f["default"])(e.BREAKPOINTS, function(o, s, a) {
                            e._visibleOptions(i).forEach(function(a) {
                              if (-1 !== o.indexOf(a)) {
                                var l = -1 !== a.indexOf("up"),
                                  u = n.filter(function(t) {
                                    return t > s;
                                  }),
                                  c = parseInt(s, 10);
                                if (c === Math.max.apply(null, r)) {
                                  var f = n.filter(function(t) {
                                    return s > t;
                                  });
                                  f.filter(function(t) {
                                    return -1 === r.indexOf(t);
                                  }).forEach(function(n) {
                                    e._breakpoint(t, n, function() {
                                      return e.hide(i);
                                    });
                                  });
                                }
                                l
                                  ? (u.unshift(s),
                                    u
                                      .filter(function(t) {
                                        return -1 === r.indexOf(t);
                                      })
                                      .forEach(function(n) {
                                        e._breakpoint(t, n, function() {
                                          return e.show(i, !1);
                                        });
                                      }))
                                  : (e._breakpoint(t, s, function() {
                                      return e.show(i, !1);
                                    }),
                                    u
                                      .filter(function(t) {
                                        return -1 === r.indexOf(t);
                                      })
                                      .forEach(function(n) {
                                        e._breakpoint(t, n, function() {
                                          return e.hide(i);
                                        });
                                      }));
                              }
                            });
                          });
                        });
                    }
                  },
                  {
                    key: "_classString",
                    value: function(t) {
                      return t.join(" ");
                    }
                  },
                  {
                    key: "_layoutClasses",
                    value: function(t) {
                      var e = this,
                        n = this._options(t),
                        i = [];
                      return (
                        this._visibleOptions(t).map(function(r) {
                          e._sizeOptions(t).map(function(t) {
                            var e = "si-" + n.direction + t,
                              o = t.match(/([a-zA-Z-]+)/gi);
                            o && (o = o.pop().replace(/^\-/, "")),
                              -1 !== t.indexOf(r) || o
                                ? o && -1 === r.indexOf(o)
                                : (e = e + "-" + r),
                              i.push(e);
                          });
                        }),
                        (0, p["default"])(i)
                      );
                    }
                  },
                  {
                    key: "_sidebarClasses",
                    value: function(t) {
                      var e = this._options(t),
                        n = ["sidebar-" + e.position],
                        i = this._sizeOptions(t).map(function(t) {
                          return "si-si-" + t;
                        });
                      return n.concat(i);
                    }
                  },
                  {
                    key: "_sizeOptions",
                    value: function(t) {
                      var e = this._options(t);
                      return e.size.split(" ");
                    }
                  },
                  {
                    key: "_visibleOptions",
                    value: function(t) {
                      var e = this._options(t);
                      return "none" === e.visible ? [] : e.visible.split(" ");
                    }
                  },
                  {
                    key: "_emit",
                    value: function(t, e) {
                      $(this.EVENTS_CONTAINER).trigger(t + ".bl.sidebar", [e]);
                    }
                  },
                  {
                    key: "_layout",
                    value: function(t) {
                      return (
                        (t = this._sidebar(t)),
                        t.closest(this.LAYOUT_CONTAINER_SELECTOR)
                      );
                    }
                  },
                  {
                    key: "toggle",
                    value: function(t) {
                      (t = this._sidebar(t)),
                        t.hasClass(this.VISIBLE_CLASS)
                          ? this.hide(t)
                          : this.show(t);
                    }
                  },
                  {
                    key: "show",
                    value: function(t) {
                      var e = this,
                        n =
                          arguments.length <= 1 || void 0 === arguments[1]
                            ? !0
                            : arguments[1];
                      t = this._sidebar(t);
                      var i = this.VISIBLE_CLASS,
                        r = this._options(t);
                      if (
                        (this._emit("show", r),
                        this._layout(t).addClass(
                          this._classString(this._layoutClasses(t))
                        ),
                        !t.hasClass(i))
                      ) {
                        if (n)
                          return (
                            t.addClass("sidebar-transition"),
                            setTimeout(function() {
                              t.addClass(i), e._emit("shown", r);
                            }, 10)
                          );
                        t.addClass(i), this._emit("shown", r);
                      }
                    }
                  },
                  {
                    key: "hide",
                    value: function(t) {
                      var e = this;
                      t = this._sidebar(t);
                      var n = this.VISIBLE_CLASS,
                        i = t
                          .attr("class")
                          .match(new RegExp(n + "([a-z-]+)?", "ig")),
                        r = this._options(t);
                      this._layout(t).removeClass(
                        this._classString(this._layoutClasses(t))
                      ),
                        t.hasClass(n) &&
                          (this._emit("hide", r),
                          t.removeClass(this._classString(i)),
                          t.hasClass("sidebar-transition")
                            ? setTimeout(function() {
                                t.removeClass("sidebar-transition"),
                                  e._emit("hidden", r);
                              }, 450)
                            : this._emit("hidden", r));
                    }
                  },
                  {
                    key: "_sidebar",
                    value: function(t) {
                      return t instanceof jQuery == 1 ? t : $(t);
                    }
                  },
                  {
                    key: "_each",
                    value: function(t) {
                      var e = this;
                      $(this.SELECTOR).each(function(n, i) {
                        return t.call(e, $(i));
                      });
                    }
                  },
                  {
                    key: "_updateScreen",
                    value: function() {
                      var t = this;
                      clearTimeout(this._updateScreenDebounce),
                        (this._updateScreenDebounce = setTimeout(function() {
                          (t.SCREEN_SIZE = $(window).width()),
                            (t.SCREEN_MD_UP = $(window).width() >= 768);
                        }, this.UPDATE_SCREEN_DEBOUNCE));
                    }
                  },
                  {
                    key: "init",
                    value: function() {
                      var t = this;
                      this._breakpoints(),
                        $(this.EVENTS_CONTAINER)
                          .on("show.bl.sidebar", function(e, n) {
                            if (n) {
                              var i = $(
                                t.TOGGLE_SELECTOR +
                                  '[data-target="#' +
                                  n.id +
                                  '"]'
                              );
                              i.addClass("active");
                            }
                          })
                          .on("hide.bl.sidebar", function(e, n) {
                            if (n) {
                              var i = $(
                                t.TOGGLE_SELECTOR +
                                  '[data-target="#' +
                                  n.id +
                                  '"]'
                              );
                              i.removeClass("active");
                            }
                          }),
                        this._each(function(e) {
                          e.addClass(t._classString(t._sidebarClasses(e)));
                        }),
                        this._updateScreen(),
                        $(window).resize(this._updateScreen.bind(this)),
                        $(this.NAV_BUTTON_SELECTOR).on("click", function(e) {
                          var n = $(e.currentTarget);
                          if (n.next("ul").html()) {
                            e.preventDefault();
                            var i = n.parent();
                            if (i.hasClass("open")) i.removeClass("open");
                            else {
                              var r = n.closest(t.NAV_SELECTOR),
                                o = r.find(t.NAV_ITEM_SELECTOR + ".open");
                              o.removeClass("open"), i.addClass("open");
                            }
                          }
                        }),
                        $(this.TOGGLE_SELECTOR).on("click", function(e) {
                          e.stopPropagation();
                          var n = $($(e.currentTarget).data("target"));
                          n && t.toggle(n);
                        }),
                        $("body").on("click touchstart", function(e) {
                          t._each(function(n) {
                            ((n.hasClass(t.VISIBLE_CLASS) && !t.SCREEN_MD_UP) ||
                              n.hasClass("closable-desktop")) &&
                              (n.is(e.target) ||
                                0 !== n.has(e.target).length ||
                                t.hide(n));
                          });
                        });
                    }
                  }
                ]),
                t
              );
            })();
            (e["default"] = d), (t.exports = e["default"]);
          },
          function(t, e, n) {
            t.exports = { default: n(11), __esModule: !0 };
          },
          function(t, e, n) {
            t.exports = { default: n(12), __esModule: !0 };
          },
          function(t, e) {
            "use strict";
            (e.__esModule = !0),
              (e["default"] = function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              });
          },
          function(t, e, n) {
            "use strict";
            function i(t) {
              return t && t.__esModule ? t : { default: t };
            }
            e.__esModule = !0;
            var r = n(6),
              o = i(r);
            e["default"] = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var i = e[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    (0, o["default"])(t, i.key, i);
                }
              }
              return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e;
              };
            })();
          },
          function(t, e) {
            !(function(t) {
              var e = 0,
                n = null;
              (t.fn.resetBreakpoints = function() {
                t(window).unbind("resize"), n && clearInterval(n), (e = 0);
              }),
                (t.fn.setBreakpoints = function(i) {
                  var r = jQuery.extend(
                    {
                      distinct: !0,
                      breakpoints: new Array(320, 480, 768, 1024)
                    },
                    i
                  );
                  n = setInterval(function() {
                    var n = t(window).width(),
                      i = !1;
                    for (var o in r.breakpoints.sort(function(t, e) {
                      return e - t;
                    })) {
                      if (!i && n >= r.breakpoints[o] && e < r.breakpoints[o]) {
                        if (r.distinct) {
                          for (var s in r.breakpoints.sort(function(t, e) {
                            return e - t;
                          }))
                            t("body").hasClass(
                              "breakpoint-" + r.breakpoints[s]
                            ) &&
                              (t("body").removeClass(
                                "breakpoint-" + r.breakpoints[s]
                              ),
                              t(window).trigger(
                                "exitBreakpoint" + r.breakpoints[s]
                              ));
                          i = !0;
                        }
                        t("body").addClass("breakpoint-" + r.breakpoints[o]),
                          t(window).trigger(
                            "enterBreakpoint" + r.breakpoints[o]
                          );
                      }
                      n < r.breakpoints[o] &&
                        e >= r.breakpoints[o] &&
                        (t("body").removeClass(
                          "breakpoint-" + r.breakpoints[o]
                        ),
                        t(window).trigger("exitBreakpoint" + r.breakpoints[o])),
                        r.distinct &&
                          n >= r.breakpoints[o] &&
                          n < r.breakpoints[o - 1] &&
                          e > n &&
                          e > 0 &&
                          !t("body").hasClass(
                            "breakpoint-" + r.breakpoints[o]
                          ) &&
                          (t("body").addClass("breakpoint-" + r.breakpoints[o]),
                          t(window).trigger(
                            "enterBreakpoint" + r.breakpoints[o]
                          ));
                    }
                    e != n && (e = n);
                  }, 250);
                });
            })(jQuery);
          },
          function(t, e, n) {
            var i = n(19);
            t.exports = function(t, e, n) {
              return i.setDesc(t, e, n);
            };
          },
          function(t, e, n) {
            n(22), (t.exports = n(1).Object.keys);
          },
          function(t, e) {
            t.exports = function(t) {
              if ("function" != typeof t)
                throw TypeError(t + " is not a function!");
              return t;
            };
          },
          function(t, e, n) {
            var i = n(13);
            t.exports = function(t, e, n) {
              if ((i(t), void 0 === e)) return t;
              switch (n) {
                case 1:
                  return function(n) {
                    return t.call(e, n);
                  };
                case 2:
                  return function(n, i) {
                    return t.call(e, n, i);
                  };
                case 3:
                  return function(n, i, r) {
                    return t.call(e, n, i, r);
                  };
              }
              return function() {
                return t.apply(e, arguments);
              };
            };
          },
          function(t, e) {
            t.exports = function(t) {
              if (void 0 == t) throw TypeError("Can't call method on  " + t);
              return t;
            };
          },
          function(t, e, n) {
            var i = n(18),
              r = n(1),
              o = n(14),
              s = "prototype",
              a = function(t, e, n) {
                var l,
                  u,
                  c,
                  f = t & a.F,
                  h = t & a.G,
                  p = t & a.S,
                  d = t & a.P,
                  b = t & a.B,
                  v = t & a.W,
                  y = h ? r : r[e] || (r[e] = {}),
                  m = h ? i : p ? i[e] : (i[e] || {})[s];
                h && (n = e);
                for (l in n)
                  (u = !f && m && l in m),
                    (u && l in y) ||
                      ((c = u ? m[l] : n[l]),
                      (y[l] =
                        h && "function" != typeof m[l]
                          ? n[l]
                          : b && u
                          ? o(c, i)
                          : v && m[l] == c
                          ? (function(t) {
                              var e = function(e) {
                                return this instanceof t ? new t(e) : t(e);
                              };
                              return (e[s] = t[s]), e;
                            })(c)
                          : d && "function" == typeof c
                          ? o(Function.call, c)
                          : c),
                      d && ((y[s] || (y[s] = {}))[l] = c));
              };
            (a.F = 1),
              (a.G = 2),
              (a.S = 4),
              (a.P = 8),
              (a.B = 16),
              (a.W = 32),
              (t.exports = a);
          },
          function(t, e) {
            t.exports = function(t) {
              try {
                return !!t();
              } catch (e) {
                return !0;
              }
            };
          },
          function(t, e) {
            var n = (t.exports =
              "undefined" != typeof window && window.Math == Math
                ? window
                : "undefined" != typeof self && self.Math == Math
                ? self
                : Function("return this")());
            "number" == typeof __g && (__g = n);
          },
          function(t, e) {
            var n = Object;
            t.exports = {
              create: n.create,
              getProto: n.getPrototypeOf,
              isEnum: {}.propertyIsEnumerable,
              getDesc: n.getOwnPropertyDescriptor,
              setDesc: n.defineProperty,
              setDescs: n.defineProperties,
              getKeys: n.keys,
              getNames: n.getOwnPropertyNames,
              getSymbols: n.getOwnPropertySymbols,
              each: [].forEach
            };
          },
          function(t, e, n) {
            var i = n(16),
              r = n(1),
              o = n(17);
            t.exports = function(t, e) {
              var n = (r.Object || {})[t] || Object[t],
                s = {};
              (s[t] = e(n)),
                i(
                  i.S +
                    i.F *
                      o(function() {
                        n(1);
                      }),
                  "Object",
                  s
                );
            };
          },
          function(t, e, n) {
            var i = n(15);
            t.exports = function(t) {
              return Object(i(t));
            };
          },
          function(t, e, n) {
            var i = n(21);
            n(20)("keys", function(t) {
              return function(e) {
                return t(i(e));
              };
            });
          },
          function(t, e) {},
          function(t, e, n) {
            function i(t, e, n) {
              e = r(e, n);
              var i = [];
              if (null == t) return i;
              for (var o, s = -1, a = t.length; ++s < a; )
                (o = t[s]), e(o, s, t) && i.push(o);
              return i;
            }
            var r = n(27);
            t.exports = i;
          },
          function(t, e, n) {
            function i(t, e) {
              return (
                (e = e || r),
                o(t, function(t, n, i) {
                  for (var r = i.length; ++n < r; ) if (e(t, i[n])) return !1;
                  return !0;
                })
              );
            }
            function r(t, e) {
              return t === e;
            }
            var o = n(24);
            t.exports = i;
          },
          function(t, e) {
            function n(t) {
              return t;
            }
            t.exports = n;
          },
          function(t, e, n) {
            function i(t, e) {
              if (null == t) return r;
              switch (typeof t) {
                case "function":
                  return "undefined" != typeof e
                    ? function(n, i, r) {
                        return t.call(e, n, i, r);
                      }
                    : t;
                case "object":
                  return function(e) {
                    return s(e, t);
                  };
                case "string":
                case "number":
                  return o(t);
              }
            }
            var r = n(26),
              o = n(28),
              s = n(32);
            t.exports = i;
          },
          function(t, e) {
            function n(t) {
              return function(e) {
                return e[t];
              };
            }
            t.exports = n;
          },
          function(t, e, n) {
            var i = n(30),
              r =
                Array.isArray ||
                function(t) {
                  return i(t, "Array");
                };
            t.exports = r;
          },
          function(t, e, n) {
            function i(t, e) {
              return r(t) === e;
            }
            var r = n(31);
            t.exports = i;
          },
          function(t, e) {
            function n(t) {
              return null === t
                ? "Null"
                : t === i
                ? "Undefined"
                : r.exec(o.call(t))[1];
            }
            var i,
              r = /^\[object (.*)\]$/,
              o = Object.prototype.toString;
            t.exports = n;
          },
          function(t, e, n) {
            function i(t, e) {
              for (var n = -1, i = t.length; ++n < i; )
                if (s(t[n], e)) return !0;
              return !1;
            }
            function r(t, e) {
              for (var n = -1, r = e.length; ++n < r; )
                if (!i(t, e[n])) return !1;
              return !0;
            }
            function o(t, e) {
              var n = !0;
              return (
                a(e, function(e, i) {
                  return s(t[i], e) ? void 0 : (n = !1);
                }),
                n
              );
            }
            function s(t, e) {
              return t && "object" == typeof t
                ? l(t) && l(e)
                  ? r(t, e)
                  : o(t, e)
                : t === e;
            }
            var a = n(2),
              l = n(29);
            t.exports = s;
          },
          function(t, e, n) {
            function i() {
              (a = [
                "toString",
                "toLocaleString",
                "valueOf",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "constructor"
              ]),
                (s = !0);
              for (var t in { toString: null }) s = !1;
            }
            function r(t, e, n) {
              var r,
                u = 0;
              null == s && i();
              for (r in t) if (o(e, t, r, n) === !1) break;
              if (s)
                for (
                  var c = t.constructor, f = !!c && t === c.prototype;
                  (r = a[u++]) &&
                  (("constructor" === r && (f || !l(t, r))) ||
                    t[r] === Object.prototype[r] ||
                    o(e, t, r, n) !== !1);

                );
            }
            function o(t, e, n, i) {
              return t.call(i, e[n], n, e);
            }
            var s,
              a,
              l = n(3);
            t.exports = r;
          },
          function(t, e, n) {
            !(function(e) {
              "object" == typeof t && "object" == typeof t.exports
                ? e(n(35), window, document)
                : e(window.jQuery, window, document);
            })(function(t, e, n, i) {
              function r() {
                var e = t(
                    '<div class="scrollbar-width-tester" style="width:50px;height:50px;overflow-y:scroll;top:-200px;left:-200px;"><div style="height:100px;"></div>'
                  ),
                  n = 0,
                  i = 0;
                return (
                  t("body").append(e),
                  (n = t(e).innerWidth()),
                  (i = t("div", e).innerWidth()),
                  e.remove(),
                  n - i
                );
              }
              function o(e, n) {
                (this.el = e),
                  (this.$el = t(e)),
                  this.$track,
                  this.$scrollbar,
                  this.dragOffset,
                  this.flashTimeout,
                  (this.$contentEl = this.$el),
                  (this.$scrollContentEl = this.$el),
                  (this.scrollDirection = "vert"),
                  (this.scrollOffsetAttr = "scrollTop"),
                  (this.sizeAttr = "height"),
                  (this.scrollSizeAttr = "scrollHeight"),
                  (this.offsetAttr = "top"),
                  (this.options = t.extend({}, o.DEFAULTS, n)),
                  (this.theme = this.options.css),
                  this.init();
              }
              var s,
                a = "WebkitAppearance" in n.documentElement.style;
              (o.DEFAULTS = {
                wrapContent: !0,
                autoHide: !0,
                css: {
                  container: "simplebar",
                  content: "simplebar-content",
                  scrollContent: "simplebar-scroll-content",
                  scrollbar: "simplebar-scrollbar",
                  scrollbarTrack: "simplebar-track"
                }
              }),
                (o.prototype.init = function() {
                  return (
                    "undefined" == typeof s && (s = r()),
                    0 === s
                      ? void this.$el.css("overflow", "auto")
                      : (("horizontal" ===
                          this.$el.data("simplebar-direction") ||
                          this.$el.hasClass(
                            this.theme.container + " horizontal"
                          )) &&
                          ((this.scrollDirection = "horiz"),
                          (this.scrollOffsetAttr = "scrollLeft"),
                          (this.sizeAttr = "width"),
                          (this.scrollSizeAttr = "scrollWidth"),
                          (this.offsetAttr = "left")),
                        this.options.wrapContent &&
                          this.$el.wrapInner(
                            '<div class="' +
                              this.theme.scrollContent +
                              '"><div class="' +
                              this.theme.content +
                              '"></div></div>'
                          ),
                        (this.$contentEl = this.$el.find(
                          "." + this.theme.content
                        )),
                        this.$el.prepend(
                          '<div class="' +
                            this.theme.scrollbarTrack +
                            '"><div class="' +
                            this.theme.scrollbar +
                            '"></div></div>'
                        ),
                        (this.$track = this.$el.find(
                          "." + this.theme.scrollbarTrack
                        )),
                        (this.$scrollbar = this.$el.find(
                          "." + this.theme.scrollbar
                        )),
                        (this.$scrollContentEl = this.$el.find(
                          "." + this.theme.scrollContent
                        )),
                        this.resizeScrollContent(),
                        this.options.autoHide &&
                          this.$el.on(
                            "mouseenter",
                            t.proxy(this.flashScrollbar, this)
                          ),
                        this.$scrollbar.on(
                          "mousedown",
                          t.proxy(this.startDrag, this)
                        ),
                        this.$scrollContentEl.on(
                          "scroll",
                          t.proxy(this.startScroll, this)
                        ),
                        this.resizeScrollbar(),
                        void (this.options.autoHide || this.showScrollbar()))
                  );
                }),
                (o.prototype.startDrag = function(e) {
                  e.preventDefault();
                  var i = e.pageY;
                  "horiz" === this.scrollDirection && (i = e.pageX),
                    (this.dragOffset =
                      i - this.$scrollbar.offset()[this.offsetAttr]),
                    t(n).on("mousemove", t.proxy(this.drag, this)),
                    t(n).on("mouseup", t.proxy(this.endDrag, this));
                }),
                (o.prototype.drag = function(t) {
                  t.preventDefault();
                  var e = t.pageY,
                    n = null,
                    i = null,
                    r = null;
                  "horiz" === this.scrollDirection && (e = t.pageX),
                    (n =
                      e -
                      this.$track.offset()[this.offsetAttr] -
                      this.dragOffset),
                    (i = n / this.$track[this.sizeAttr]()),
                    (r = i * this.$contentEl[0][this.scrollSizeAttr]),
                    this.$scrollContentEl[this.scrollOffsetAttr](r);
                }),
                (o.prototype.endDrag = function() {
                  t(n).off("mousemove", this.drag),
                    t(n).off("mouseup", this.endDrag);
                }),
                (o.prototype.resizeScrollbar = function() {
                  if (0 !== s) {
                    var t = this.$contentEl[0][this.scrollSizeAttr],
                      e = this.$scrollContentEl[this.scrollOffsetAttr](),
                      n = this.$track[this.sizeAttr](),
                      i = n / t,
                      r = Math.round(i * e) + 2,
                      o = Math.floor(i * (n - 2)) - 2;
                    t > n
                      ? ("vert" === this.scrollDirection
                          ? this.$scrollbar.css({ top: r, height: o })
                          : this.$scrollbar.css({ left: r, width: o }),
                        this.$track.show())
                      : this.$track.hide();
                  }
                }),
                (o.prototype.startScroll = function(t) {
                  this.$el.trigger(t), this.flashScrollbar();
                }),
                (o.prototype.flashScrollbar = function() {
                  this.resizeScrollbar(), this.showScrollbar();
                }),
                (o.prototype.showScrollbar = function() {
                  this.$scrollbar.addClass("visible"),
                    this.options.autoHide &&
                      ("number" == typeof this.flashTimeout &&
                        e.clearTimeout(this.flashTimeout),
                      (this.flashTimeout = e.setTimeout(
                        t.proxy(this.hideScrollbar, this),
                        1e3
                      )));
                }),
                (o.prototype.hideScrollbar = function() {
                  this.$scrollbar.removeClass("visible"),
                    "number" == typeof this.flashTimeout &&
                      e.clearTimeout(this.flashTimeout);
                }),
                (o.prototype.resizeScrollContent = function() {
                  a ||
                    ("vert" === this.scrollDirection
                      ? (this.$scrollContentEl.width(this.$el.width() + s),
                        this.$scrollContentEl.height(this.$el.height()))
                      : (this.$scrollContentEl.width(this.$el.width()),
                        this.$scrollContentEl.height(this.$el.height() + s)));
                }),
                (o.prototype.recalculate = function() {
                  this.resizeScrollContent(), this.resizeScrollbar();
                }),
                (o.prototype.getScrollElement = function() {
                  return this.$scrollContentEl;
                }),
                (o.prototype.getContentElement = function() {
                  return this.$contentEl;
                }),
                t(e).on("load", function() {
                  t("[data-simplebar-direction]").each(function() {
                    t(this).simplebar();
                  });
                });
              var l = t.fn.simplebar;
              (t.fn.simplebar = function(e) {
                var n,
                  r = arguments;
                return "undefined" == typeof e || "object" == typeof e
                  ? this.each(function() {
                      t.data(this, "simplebar") ||
                        t.data(this, "simplebar", new o(this, e));
                    })
                  : "string" == typeof e
                  ? (this.each(function() {
                      var i = t.data(this, "simplebar");
                      i instanceof o &&
                        "function" == typeof i[e] &&
                        (n = i[e].apply(i, Array.prototype.slice.call(r, 1))),
                        "destroy" === e && t.data(this, "simplebar", null);
                    }),
                    n !== i ? n : this)
                  : void 0;
              }),
                (t.fn.simplebar.Constructor = o),
                (t.fn.simplebar.noConflict = function() {
                  return (t.fn.simplebar = l), this;
                });
            });
          },
          function(e, n) {
            e.exports = t;
          }
        ]);
      });
    },
    function(e, n) {
      e.exports = t;
    }
  ]);
});
