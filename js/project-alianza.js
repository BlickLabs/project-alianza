function doSomething(e){"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-alianza/index.html"!==window.location.pathname&&"/project-alianza/"!==window.location.pathname||(e>30?(siteNavbar.classList.add("nav-white-bg"),siteNavbar.classList.remove("nav-transparent-bg")):(siteNavbar.classList.add("nav-transparent-bg"),siteNavbar.classList.remove("nav-white-bg")))}function showMenu(){document.querySelector("#menuContainer").style.width="85%",document.querySelector("#hamburgerMenu").style.display="none"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline"}!function(){$.validator.setDefaults({invalidHandler:function(e,n){var t=$(this);t.find(".form-message").removeClass(t.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var n=$(e).serialize(),t=$(e).find("select, input, textarea, button").not("[disabled]"),a=$(e).find(".form-message"),r=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),s=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),i=function(e){var n=e?r:s;t.removeAttr("disabled"),a.removeClass(e?"error":"success"),a.addClass(e?"success":"error"),a.html(n)};t.attr("disabled","disabled"),a.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:n}).done(function(n){i(1===parseInt(n)),e.reset()}).fail(function(){i(!1)}).always(function(){t.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}();var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".site-navbar");doSomething(),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(e){e.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");hideHamburger.addEventListener("touchstart",function(e){e.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(e){e.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(e){e.preventDefault(),hideMenu()}),function(){function e(e){$(e.target).is(".site-navbar__menu-trigger")||$(e.target).is(".site-navbar__menu-container")||$(e.target).closest(".site-navbar__menu-container").length||!$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")||(e.preventDefault(),$(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll"))}function n(){$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")?($(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll")):($(".site-navbar__menu-container").addClass("site-navbar__menu-container--show-menu"),$("body").addClass("noscroll"))}var t=window.matchMedia("(max-width: 876px)");t.matches?($("body")[0].addEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").click(n)):($("body")[0].removeEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll")),$(window).resize(function(){$("body")[0].removeEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll"),$(".site-navbar__menu-container").removeClass("show-menu"),t.matches&&($("body")[0].addEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").click(n))})}();