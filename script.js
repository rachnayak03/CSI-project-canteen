var TrandingSlider = new Swiper('.tranding-slider', {
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

  //navbar

  window.addEventListener('scroll',function(){
    let navbar = document.getElementById("navbar");
    //Toggles fixed in navbar on scrolling
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})
let darkBtn = document.querySelector('.darkbtn');
let menuBtn = document.querySelector('.menu-btn');


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
    document.addEventListener('DOMContentLoaded',function(){
      var menuBtn=document.getElementById('menu-btn');
      menuBtn.addEventListener('click',function(){
        window.location.href='DashBoardmenu.html';
      });
     });
        