$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    nav:false,
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
})


//slider
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var PopularSlider = new Swiper('.popular-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

//Navbar
window.addEventListener('scroll',function(){
    let navbar = document.getElementById("navbar");
    //Toggles fixed in navbar on scrolling
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})

let menuBtn = document.querySelector('.menu-btn');
let searchBtn = document.querySelector('.searchbtn');
let cartBtn = document.querySelector('.cartbtn');
let darkBtn = document.querySelector('.darkbtn');


searchBtn.onclick = function(){
    document.getElementById("search-form").classList.toggle('active');

    if(document.getElementById("search-form").classList.contains('active')){
        searchBtn.classList.remove("bx-search-alt-2");
        searchBtn.classList.add("bx-x");
    }
    else{
        searchBtn.classList.remove("bx-x");
        searchBtn.classList.add("bx-search-alt-2");
    }

    }
cartBtn.onclick = function(){
        document.getElementById("cart").classList.toggle('active');
    
        if(document.getElementById("cart").classList.contains('active')){
            cartBtn.classList.remove("bx-cart");
            cartBtn.classList.add("bx-x");
        }
        else{
            cartBtn.classList.remove("bx-x");
            cartBtn.classList.add("bx-cart");
        }
    
        }

 darkBtn.onclick = function(){
            document.body.classList.toggle('dark-mode');
        
            if(document.body.classList.contains('dark-mode')){
                darkBtn.classList.remove("bx-moon");
                darkBtn.classList.add("bx-sun");

                
            }
            else{
                darkBtn.classList.remove("bx-sun");
                darkBtn.classList.add("bx-moon");
            }
        
            }
    
    