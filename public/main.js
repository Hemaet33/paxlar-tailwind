$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
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

const bottomNav=document.querySelector('.bottom-nav-section');
const buySell=document.querySelector('.buy-sell');
const counter = document.querySelector('.counter');
const count1 = document.querySelector('.count1');
const count2 = document.querySelector('.count2');
const count3 = document.querySelector('.count3');
const count4 = document.querySelector('.count4');
const number1 = parseInt(count1.innerText);
const number2 = parseInt(count2.innerText);
const number3 = parseInt(count3.innerText);
const number4 = parseInt(count4.innerText);
  
let counterOneIteration = 0;
let counterTwoIteration = 0;
let counterThreeIteration = 0;
let counterFourIteration = 0;

let flag = true;

const counter1 = ()=>{
 if(!flag){
  count1.innerHTML=counterOneIteration;
  if(counterOneIteration<number1){
    counterOneIteration+=100;
    setTimeout("counter1()",100);
  }else{
    clearTimeout("counter1()");
  }
 }else{
  count1.innerHTML=0;
  counterOneIteration=0;
 }
}
const counter2 = ()=>{
  if(!flag){
    count2.innerHTML=counterTwoIteration;
    if(counterTwoIteration<number2){
      counterTwoIteration+=100;
      setTimeout("counter2()",100);
    }else{
      clearTimeout("counter2()");
    }
   }else{
    count2.innerHTML=0;
    counterTwoIteration=0;
   }

}
const counter3 = ()=>{
  if(!flag){
    count3.innerHTML=counterThreeIteration;
  if(counterThreeIteration<number3){
    counterThreeIteration+=100;
    setTimeout("counter3()",100);
  }else{
    clearTimeout("counter3()");
  }
   }else{
    count3.innerHTML=0;
    counterThreeIteration=0;
   }
}
const counter4 = ()=>{
  if(!flag){
    count4.innerHTML=counterFourIteration;
    if(counterFourIteration<number4){
      counterFourIteration+=100;
      setTimeout("counter4()",100);
    }else{
      clearTimeout("counter4()");
    }
   }else{
    count4.innerHTML=0;
    counterFourIteration=0;
   }
}

window.addEventListener('scroll',()=>{
  if(scrollY>40){
    bottomNav.classList.add('scrollNav');
  }else{
    bottomNav.classList.remove('scrollNav');
  };

  
  let buySellHeight = buySell.getBoundingClientRect().height;
  let counted = counter.getBoundingClientRect();

  if(counted.top-buySellHeight+counted.height<0){
    counter1();
    counter2();
    counter3();
    counter4();
    flag=false;
  }else{
    flag = true;
  }
  
});


const bannerSlide = document.querySelectorAll('.banner-slide');

let i=0;
function slideshow(){
  if(i<1){
    bannerSlide[i].style.opacity=1;
    bannerSlide[i+bannerSlide.length-1].style.opacity=0;
  }else{
    bannerSlide[i].style.opacity=1;
    bannerSlide[i-1].style.opacity=0;
  }
  if(i<bannerSlide.length-1){
    i++;
  }else {
    i=0;
  }
  setTimeout("slideshow()",5000)
}

window.onload=slideshow;



