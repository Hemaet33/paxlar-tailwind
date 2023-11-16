$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:1000,
    margin:10,
    responsiveClass:true,
    navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
  })
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click',()=>{
 if(nav.classList.contains('right-0')){
  nav.classList.remove('right-0');
  nav.classList.add('-right-full');
 }else{
  nav.classList.remove('-right-full');
  nav.classList.add('right-0');
 }
});