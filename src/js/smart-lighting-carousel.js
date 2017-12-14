$('.smart-lighting-carousel').owlCarousel({
  loop:true,
  margin:10,
  items: 1,
  dots: true,
  dotData: true,
  center: true,
  autoWidth: false,
  navText: ["<img class='owl-nav-icon' src='img/icons/left-arrow.png'>", "<img class='owl-nav-icon' src='img/icons/right-arrow.png'>"],
  responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
  }
});
