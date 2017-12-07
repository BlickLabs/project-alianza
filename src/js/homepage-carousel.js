$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots: false,
  center: true,
  autoWidth: true,
  navText: ["<img class='owl-nav-icon' src='img/icons/left-arrow.png'>", "<img class='owl-nav-icon' src='img/icons/right-arrow.png'>"],
  responsive:{
    0:{
        items:1
    },
    600:{
        items:3
    },
    1000:{
        items:5
    }
  }
});