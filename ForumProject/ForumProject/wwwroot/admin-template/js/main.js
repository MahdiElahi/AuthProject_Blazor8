"use strict"; let isRtl = window.Helpers.isRtl(), isDarkStyle = window.Helpers.isDarkStyle(), menu, animate, isHorizontalLayout = !1; document.getElementById("layout-menu") && (isHorizontalLayout = document.getElementById("layout-menu").classList.contains("menu-horizontal")), function () { function e() { var e = document.querySelector(".layout-page"); e && (0 < window.pageYOffset ? e.classList.add("window-scrolled") : e.classList.remove("window-scrolled")) } "undefined" != typeof Waves && (Waves.init(), Waves.attach(".btn[class*='btn-']:not(.position-relative):not([class*='btn-outline-']):not([class*='btn-label-'])", ["waves-light"]), Waves.attach("[class*='btn-outline-']:not(.position-relative)"), Waves.attach("[class*='btn-label-']:not(.position-relative)"), Waves.attach(".pagination .page-item .page-link"), Waves.attach(".dropdown-menu .dropdown-item"), Waves.attach(".light-style .list-group .list-group-item-action"), Waves.attach(".dark-style .list-group .list-group-item-action", ["waves-light"]), Waves.attach(".nav-tabs:not(.nav-tabs-widget) .nav-item .nav-link"), Waves.attach(".nav-pills .nav-item .nav-link", ["waves-light"]), Waves.attach(".menu-vertical .menu-item .menu-link.menu-toggle")), setTimeout(() => { e() }, 200), window.onscroll = function () { e() }, setTimeout(function () { window.Helpers.initCustomOptionCheck() }, 1e3), document.querySelectorAll("#layout-menu").forEach(function (e) { menu = new Menu(e, { orientation: isHorizontalLayout ? "horizontal" : "vertical", closeChildren: !!isHorizontalLayout, showDropdownOnHover: localStorage.getItem("templateCustomizer-" + templateName + "--ShowDropdownOnHover") ? "true" === localStorage.getItem("templateCustomizer-" + templateName + "--ShowDropdownOnHover") : void 0 === window.templateCustomizer || window.templateCustomizer.settings.defaultShowDropdownOnHover }), window.Helpers.scrollToActive(animate = !1), window.Helpers.mainMenu = menu }), document.querySelectorAll(".layout-menu-toggle").forEach(e => { e.addEventListener("click", e => { if (e.preventDefault(), window.Helpers.toggleCollapsed(), config.enableMenuLocalStorage && !window.Helpers.isSmallScreen()) try { localStorage.setItem("templateCustomizer-" + templateName + "--LayoutCollapsed", String(window.Helpers.isCollapsed())); var t, a = document.querySelector(".template-customizer-layouts-options"); a && (t = window.Helpers.isCollapsed() ? "collapsed" : "expanded", a.querySelector(`input[value="${t}"]`).click()) } catch (s) { } }) }), window.Helpers.swipeIn(".drag-target", function (e) { window.Helpers.setCollapsed(!1) }), window.Helpers.swipeOut("#layout-menu", function (e) { window.Helpers.isSmallScreen() && window.Helpers.setCollapsed(!0) }); let t = document.getElementsByClassName("menu-inner"), a = document.getElementsByClassName("menu-inner-shadow")[0]; 0 < t.length && a && t[0].addEventListener("ps-scroll-y", function () { this.querySelector(".ps__thumb-y").offsetTop ? a.style.display = "block" : a.style.display = "none" }); var s, l = document.querySelector(".dropdown-style-switcher"), n = localStorage.getItem("templateCustomizer-" + templateName + "--Style") || (window.templateCustomizer?.settings?.defaultStyle ?? "light"), l = (window.templateCustomizer && l && ([].slice.call(l.children[1].querySelectorAll(".dropdown-item")).forEach(function (e) { e.addEventListener("click", function () { var e = this.getAttribute("data-theme"); "light" === e ? window.templateCustomizer.setStyle("light") : "dark" === e ? window.templateCustomizer.setStyle("dark") : window.templateCustomizer.setStyle("system") }) }), l = l.querySelector("i"), "light" === n ? (l.classList.add("mdi-weather-sunny"), new bootstrap.Tooltip(l, { title: "Light Mode", fallbackPlacements: ["bottom"] })) : "dark" === n ? (l.classList.add("mdi-weather-night"), new bootstrap.Tooltip(l, { title: "Dark Mode", fallbackPlacements: ["bottom"] })) : (l.classList.add("mdi-monitor"), new bootstrap.Tooltip(l, { title: "System Mode", fallbackPlacements: ["bottom"] }))), "system" === (s = n) && (s = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), [].slice.call(document.querySelectorAll("[data-app-" + s + "-img]")).map(function (e) { var t = e.getAttribute("data-app-" + s + "-img"); e.src = assetsPath + "img/" + t }), "undefined" != typeof i18next && "undefined" != typeof i18NextHttpBackend && i18next.use(i18NextHttpBackend).init({ lng: window.templateCustomizer ? window.templateCustomizer.settings.lang : "en", debug: !1, fallbackLng: "en", backend: { loadPath: assetsPath + "json/locales/{{lng}}.json" }, returnObjects: !0 }).then(function (e) { r() }), document.getElementsByClassName("dropdown-language")); if (l.length) { var i = l[0].querySelectorAll(".dropdown-item"); for (let o = 0; o < i.length; o++)i[o].addEventListener("click", function () { let e = this.getAttribute("data-language"), t = this.getAttribute("data-text-direction"); for (var a of this.parentNode.children) for (var s = a.parentElement.parentNode.firstChild; s;)1 === s.nodeType && s !== s.parentElement && s.querySelector(".dropdown-item").classList.remove("active"), s = s.nextSibling; this.classList.add("active"), i18next.changeLanguage(e, (a, s) => { if (window.templateCustomizer && window.templateCustomizer.setLang(e), "rtl" === t ? "true" !== localStorage.getItem("templateCustomizer-" + templateName + "--Rtl") && window.templateCustomizer && window.templateCustomizer.setRtl(!0) : "true" === localStorage.getItem("templateCustomizer-" + templateName + "--Rtl") && window.templateCustomizer && window.templateCustomizer.setRtl(!1), a) return console.log("something went wrong loading", a); r() }) }) } function r() { var e = document.querySelectorAll("[data-i18n]"), t = document.querySelector('.dropdown-item[data-language="' + i18next.language + '"]'); t && t.click(), e.forEach(function (e) { e.innerHTML = i18next.t(e.dataset.i18n) }) } function c(e) { "show.bs.collapse" == e.type || "show.bs.collapse" == e.type ? e.target.closest(".accordion-item").classList.add("active") : e.target.closest(".accordion-item").classList.remove("active") } n = document.querySelector(".dropdown-notifications-all"); let d = document.querySelectorAll(".dropdown-notifications-read"); n && n.addEventListener("click", e => { d.forEach(e => { e.closest(".dropdown-notifications-item").classList.add("marked-as-read") }) }), d && d.forEach(e => { e.addEventListener("click", t => { e.closest(".dropdown-notifications-item").classList.toggle("marked-as-read") }) }), document.querySelectorAll(".dropdown-notifications-archive").forEach(e => { e.addEventListener("click", t => { e.closest(".dropdown-notifications-item").remove() }) }), [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (e) { return new bootstrap.Tooltip(e) }), [].slice.call(document.querySelectorAll(".accordion")).map(function (e) { e.addEventListener("show.bs.collapse", c), e.addEventListener("hide.bs.collapse", c) }), window.Helpers.setAutoUpdate(!0), window.Helpers.initPasswordToggle(), window.Helpers.initSpeechToText(), window.Helpers.navTabsAnimation(), window.Helpers.initNavbarDropdownScrollbar(); let u = document.querySelector("[data-template^='horizontal-menu']"); if (u && (window.innerWidth < window.Helpers.LAYOUT_BREAKPOINT ? window.Helpers.setNavbarFixed("fixed") : window.Helpers.setNavbarFixed("")), window.addEventListener("resize", function (e) { window.innerWidth >= window.Helpers.LAYOUT_BREAKPOINT && document.querySelector(".search-input-wrapper") && (document.querySelector(".search-input-wrapper").classList.add("d-none"), document.querySelector(".search-input").value = ""), u && (window.innerWidth < window.Helpers.LAYOUT_BREAKPOINT ? window.Helpers.setNavbarFixed("fixed") : window.Helpers.setNavbarFixed(""), setTimeout(function () { window.innerWidth < window.Helpers.LAYOUT_BREAKPOINT ? document.getElementById("layout-menu") && document.getElementById("layout-menu").classList.contains("menu-horizontal") && menu.switchMenu("vertical") : document.getElementById("layout-menu") && document.getElementById("layout-menu").classList.contains("menu-vertical") && menu.switchMenu("horizontal") }, 100)), window.Helpers.navTabsAnimation() }, !0), !isHorizontalLayout && !window.Helpers.isSmallScreen() && ("undefined" != typeof TemplateCustomizer && (window.templateCustomizer.settings.defaultMenuCollapsed ? window.Helpers.setCollapsed(!0, !1) : window.Helpers.setCollapsed(!1, !1)), "undefined" != typeof config) && config.enableMenuLocalStorage) try { null !== localStorage.getItem("templateCustomizer-" + templateName + "--LayoutCollapsed") && window.Helpers.setCollapsed("true" === localStorage.getItem("templateCustomizer-" + templateName + "--LayoutCollapsed"), !1) } catch (m) { } }(), "undefined" != typeof $ && $(function () { window.Helpers.initSidebarToggle(); var e, t, a, s = $(".search-toggler"), l = $(".search-input-wrapper"), n = $(".search-input"), i = $(".content-backdrop"); s.length && s.on("click", function () { l.length && (l.toggleClass("d-none"), n.focus()) }), $(document).on("keydown", function (e) { var t = e.ctrlKey, e = 191 === e.which; t && e && l.length && (l.toggleClass("d-none"), n.focus()) }), setTimeout(function () { var e = $(".twitter-typeahead"); n.on("focus", function () { l.hasClass("container-xxl") ? (l.find(e).addClass("container-xxl"), e.removeClass("container-fluid")) : l.hasClass("container-fluid") && (l.find(e).addClass("container-fluid"), e.removeClass("container-xxl")) }) }, 10), n.length && (e = function (e) { return function (t, a) { let s; s = [], e.filter(function (e) { if (e.name.toLowerCase().startsWith(t.toLowerCase())) s.push(e); else { if (e.name.toLowerCase().startsWith(t.toLowerCase()) || !e.name.toLowerCase().includes(t.toLowerCase())) return []; s.push(e), s.sort(function (e, t) { return t.name < e.name ? 1 : -1 }) } }), a(s) } }, s = "search-vertical.json", $("#layout-menu").hasClass("menu-horizontal") && (s = "search-horizontal.json"), t = $.ajax({ url: assetsPath + "json/" + s, dataType: "json", async: !1 }).responseJSON, n.each(function () { var a = $(this); n.typeahead({ hint: !1, classNames: { menu: "tt-menu navbar-search-suggestion", cursor: "active", suggestion: "suggestion d-flex justify-content-between px-3 py-2 w-100" } }, { name: "pages", display: "name", limit: 5, source: e(t.pages), templates: { header: '<h6 class="suggestions-header text-primary mb-0 mx-3 mt-3 pb-2">Pages</h6>', suggestion: function ({ url: e, icon: t, name: a }) { return '<a href="' + e + '"><div><i class="mdi ' + t + ' me-2"></i><span class="align-middle">' + a + "</span></div></a>" }, notFound: '<div class="not-found px-3 py-2"><h6 class="suggestions-header text-primary mb-2">Pages</h6><p class="py-2 mb-0"><i class="mdi mdi-alert-circle-outline me-2 mdi-14px"></i> No Results Found</p></div>' } }, { name: "files", display: "name", limit: 4, source: e(t.files), templates: { header: '<h6 class="suggestions-header text-primary mb-0 mx-3 mt-3 pb-2">Files</h6>', suggestion: function ({ src: e, name: t, subtitle: a, meta: s }) { return '<a href="javascript:;"><div class="d-flex w-50"><img class="me-3" src="' + assetsPath + e + '" alt="' + t + '" height="32"><div class="w-75"><h6 class="mb-0">' + t + '</h6><small class="text-muted">' + a + '</small></div></div><small class="text-muted">' + s + "</small></a>" }, notFound: '<div class="not-found px-3 py-2"><h6 class="suggestions-header text-primary mb-2">Files</h6><p class="py-2 mb-0"><i class="mdi mdi-alert-circle-outline me-2 mdi-14px"></i> No Results Found</p></div>' } }, { name: "members", display: "name", limit: 4, source: e(t.members), templates: { header: '<h6 class="suggestions-header text-primary mb-0 mx-3 mt-3 pb-2">Members</h6>', suggestion: function ({ name: e, src: t, subtitle: a }) { return '<a href="app-user-view-account.html"><div class="d-flex align-items-center"><img class="rounded-circle me-3" src="' + assetsPath + t + '" alt="' + e + '" height="32"><div class="user-info"><h6 class="mb-0">' + e + '</h6><small class="text-muted">' + a + "</small></div></div></a>" }, notFound: '<div class="not-found px-3 py-2"><h6 class="suggestions-header text-primary mb-2">Members</h6><p class="py-2 mb-0"><i class="mdi mdi-alert-circle-outline me-2 mdi-14px"></i> No Results Found</p></div>' } }).bind("typeahead:render", function () { i.addClass("show").removeClass("fade") }).bind("typeahead:select", function (e, t) { t.url && (window.location = t.url) }).bind("typeahead:close", function () { n.val(""), a.typeahead("val", ""), l.addClass("d-none"), i.addClass("fade").removeClass("show") }), n.on("keyup", function () { "" == n.val() && i.addClass("fade").removeClass("show") }) }), $(".navbar-search-suggestion").each(function () { a = new PerfectScrollbar($(this)[0], { wheelPropagation: !1, suppressScrollX: !0 }) }), n.on("keyup", function () { a.update() })) });