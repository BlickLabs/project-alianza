function doSomething(e){"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-alianza/index.html"!==window.location.pathname&&"/project-alianza/"!==window.location.pathname||(e>30?(siteNavbar.classList.add("nav-white-bg"),siteNavbar.classList.remove("nav-transparent-bg")):(siteNavbar.classList.add("nav-transparent-bg"),siteNavbar.classList.remove("nav-white-bg")))}function showMenu(){document.querySelector("#menuContainer").style.width="85%",document.querySelector("#hamburgerMenu").style.display="none"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline"}$('form[name="alianza-contact-form"]').validate({name:"required",phone:"required",email:"required",message:"required",messages:{name:"Por favor, introduce tu Nombre.",phone:"Por favor, introduce tu Teléfono.",email:"Por favor, introduce un Correo Electrónico.",message:"Por favor, introduce tu Mensaje"},submitHandler:function(e){var n=$('form[name="alianza-contact-form"]').serialize();console.log(n),$.ajax({url:"http://integrations.blick.mx/alianza/contact/",method:"POST",data:n}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Correo enviado, gracias por contactarte con nosotros."),$('form[name="alianza-contact-form"]')[0].reset())})},invalidHandler:function(e,n){var a=n.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica tu información tienes "+a+" errores.")}});var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".site-navbar");doSomething(),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(e){e.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");hideHamburger.addEventListener("touchstart",function(e){e.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(e){e.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(e){e.preventDefault(),hideMenu()}),$(".homepage-carousel-one").owlCarousel({loop:!0,margin:10,nav:!0,dots:!1,center:!0,autoWidth:!0,navText:["<img class='owl-nav-icon' src='img/icons/left-arrow.png'>","<img class='owl-nav-icon' src='img/icons/right-arrow.png'>"],responsive:{0:{items:1},600:{items:3},1e3:{items:5}}}),$(".homepage-carousel-two").owlCarousel({loop:!0,margin:10,nav:!0,dots:!1,center:!0,autoWidth:!0,navText:["<img class='owl-nav-icon' src='img/icons/left-arrow.png'>","<img class='owl-nav-icon' src='img/icons/right-arrow.png'>"],responsive:{0:{items:1},600:{items:3},1e3:{items:5}}}),function(){function e(e){$(e.target).is(".site-navbar__menu-trigger")||$(e.target).is(".site-navbar__menu-container")||$(e.target).closest(".site-navbar__menu-container").length||!$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")||(e.preventDefault(),$(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll"))}function n(){$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")?($(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll")):($(".site-navbar__menu-container").addClass("site-navbar__menu-container--show-menu"),$("body").addClass("noscroll"))}var a=window.matchMedia("(max-width: 876px)");a.matches?($("body")[0].addEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").click(n)):($("body")[0].removeEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll")),$(window).resize(function(){$("body")[0].removeEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll"),$(".site-navbar__menu-container").removeClass("show-menu"),a.matches&&($("body")[0].addEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").click(n))})}(),$(".safe-cities-carousel").owlCarousel({loop:!0,margin:10,nav:!0,dots:!1,center:!0,autoWidth:!0,navText:["<img class='owl-nav-icon' src='img/icons/left-arrow.png'>","<img class='owl-nav-icon' src='img/icons/right-arrow.png'>"],responsive:{0:{items:1},600:{items:3},1e3:{items:5}}}),$(".smart-lighting-carousel").owlCarousel({loop:!0,margin:10,items:1,dots:!0,dotData:!0,center:!0,autoWidth:!1,navText:["<img class='owl-nav-icon' src='img/icons/left-arrow.png'>","<img class='owl-nav-icon' src='img/icons/right-arrow.png'>"],responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(".smart-spaces-carousel").owlCarousel({loop:!0,margin:10,nav:!0,dots:!1,center:!0,autoWidth:!1,navText:["<img class='owl-nav-icon' src='img/icons/left-arrow.png'>","<img class='owl-nav-icon' src='img/icons/right-arrow.png'>"],responsive:{0:{items:1},600:{items:3},1e3:{items:5}}}),$(".urban-mobility-carousel").owlCarousel({loop:!0,margin:10,nav:!0,dots:!1,center:!0,autoWidth:!0,navText:["<img class='owl-nav-icon' src='img/icons/left-arrow.png'>","<img class='owl-nav-icon' src='img/icons/right-arrow.png'>"],responsive:{0:{items:1},600:{items:3},1e3:{items:5}}});