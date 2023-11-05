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

//Navbar
window.addEventListener('scroll',function(){
    let navbar = document.getElementById("navbar");
    //Toggles fixed in navbar on scrolling
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})
document.addEventListener('DOMContentLoaded', function() {
    // Find the menu button element by its ID
    var menuButton = document.getElementById('menu-btn');

    // Add a click event listener to the menu button
    menuButton.addEventListener('click', function() {
      // Redirect to DashBoardMenu.html
      window.location.href = 'DashBoardmenu.html';
    });
  });
