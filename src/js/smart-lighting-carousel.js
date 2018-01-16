$('.smart-lighting-carousel').owlCarousel({
  loop:false,
  margin:10,
  items: 1,
  dots: true,
  dotData: true,
  center: true,
  autoWidth: false,
  navText: ["<div class='smart-lighting-carousel-arrow-container'><img class='owl-nav-icon' src='img/icons/left-arrow.png'>", "<div class='smart-lighting-carousel-arrow-container'><img class='owl-nav-icon' src='img/icons/right-arrow.png'></div></div>"],
  nav: true,
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

$('.smart-lighting-benefits-carousel').owlCarousel({
  loop:true,
  margin:10,
  dots: false,
  center: true,
  autoWidth: true,
  nav: true,
  touchDrag: false,
  mouseDrag: false,
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
