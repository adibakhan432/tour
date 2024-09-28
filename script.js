var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  });


var disPart = document.querySelector(".part-2-dis");
var imgPart = document.querySelector(".part-2-img");
var contentPart = document.querySelector(".part-2-content");

disPart.addEventListener("mousemove", function(){
  imgPart.style.borderRadius = "50px";
  contentPart.style.borderRadius = "50px";
})

disPart.addEventListener("mouseleave", function(){
  imgPart.style.borderRadius = "15px";
  contentPart.style.borderRadius = "15px";
})


var partThree = document.querySelector(".part-3-dis");
var partThreeImgOne = document.querySelector("#img-1");
var partThreeContent = document.querySelector(".part-3-content-1");

partThree.addEventListener("mousemove",function(){
  partThreeImgOne.style.borderRadius = "60px 60px 60px 60px";
  partThreeContent.style.borderRadius = "60px 60px 60px 60px";
})

partThree.addEventListener("mouseleave",function(){
  partThreeImgOne.style.borderRadius = "20px 20px 0 0";
  partThreeContent.style.borderRadius = " 0px 0px 20px 20px";
})

var twoDis = document.querySelector("#dis-2");
var imgTwo = document.querySelector("#img-2");
var contentTextTwo = document.querySelector("#content-2");

twoDis.addEventListener("mousemove",function(){
  imgTwo.style.borderRadius = "60px 60px 60px 60px";
  contentTextTwo.style.borderRadius = "60px 60px 60px 60px";
})

twoDis.addEventListener("mouseleave",function(){
  imgTwo.style.borderRadius = "20px 20px 0 0";
  contentTextTwo.style.borderRadius = " 0px 0px 20px 20px";
})

var threeDis = document.querySelector("#dis-3");
var imgThree = document.querySelector("#img-3");
var contentTextThree = document.querySelector("#content-3");

threeDis.addEventListener("mousemove",function(){
  imgThree.style.borderRadius = "60px 60px 60px 60px";
  contentTextThree.style.borderRadius = "60px 60px 60px 60px";
})

threeDis.addEventListener("mouseleave",function(){
  imgThree.style.borderRadius = "20px 20px 0 0";
  contentTextThree.style.borderRadius = " 0px 0px 20px 20px";
})



document.querySelector(".float-1").addEventListener("mousemove",function(){
  document.querySelector(".float-1-img").style.borderRadius = "50px";
  document.querySelector(".float-1-text").style.top = "100%";
  document.querySelector(".float-1-text").style.borderRadius = "50px";
  document.querySelector(".float-1").style.zIndex = "99";
})

document.querySelector(".float-1").addEventListener("mouseleave",function(){
  document.querySelector(".float-1-img").style.borderRadius = "20px";
  document.querySelector(".float-1-text").style.top = "50%";
  document.querySelector(".float-1-text").style.borderRadius = "20px";
  document.querySelector(".float-1").style.zIndex = "initial";
})

document.querySelector(".float-2").addEventListener("mousemove",function(){
  document.querySelector(".float-2 .float-1-img").style.borderRadius = "50px";
  document.querySelector(".float-2 .float-1-text").style.top = "100%";
  document.querySelector(".float-2 .float-1-text").style.borderRadius = "50px";
  document.querySelector(".float-2").style.zIndex = "99";
})

document.querySelector(".float-2").addEventListener("mouseleave",function(){
  document.querySelector(".float-2 .float-1-img").style.borderRadius = "20px";
  document.querySelector(".float-2 .float-1-text").style.top = "50%";
  document.querySelector(".float-2 .float-1-text").style.borderRadius = "20px";
  document.querySelector(".float-2").style.zIndex = "initial";
})

document.querySelector(".float-3").addEventListener("mousemove",function(){
  document.querySelector(".float-3 .float-1-img").style.borderRadius = "50px";
  document.querySelector(".float-3 .float-1-text").style.top = "100%";
  document.querySelector(".float-3 .float-1-text").style.borderRadius = "50px";
  document.querySelector(".float-3").style.zIndex = "99";
})

document.querySelector(".float-3").addEventListener("mouseleave",function(){
  document.querySelector(".float-3 .float-1-img").style.borderRadius = "20px";
  document.querySelector(".float-3 .float-1-text").style.top = "50%";
  document.querySelector(".float-3 .float-1-text").style.borderRadius = "20px";
  
})

document.querySelector(".float-4").addEventListener("mousemove",function(){
  document.querySelector(".float-4 .float-1-img").style.borderRadius = "50px";
  document.querySelector(".float-4 .float-1-text").style.top = "100%";
  document.querySelector(".float-4 .float-1-text").style.borderRadius = "50px";
  document.querySelector(".float-5").style.zIndex = "99";
})

document.querySelector(".float-4").addEventListener("mouseleave",function(){
  document.querySelector(".float-4 .float-1-img").style.borderRadius = "20px";
  document.querySelector(".float-4 .float-1-text").style.top = "50%";
  document.querySelector(".float-4 .float-1-text").style.borderRadius = "20px";
  document.querySelector(".float-5").style.zIndex = "initial";
})

document.querySelector(".float-5").addEventListener("mousemove",function(){
  document.querySelector(".float-5 .float-1-img").style.borderRadius = "50px";
  document.querySelector(".float-5 .float-1-text").style.top = "100%";
  document.querySelector(".float-5 .float-1-text").style.borderRadius = "50px";
  document.querySelector(".float-5").style.zIndex = "99";
})

document.querySelector(".float-5").addEventListener("mouseleave",function(){
  document.querySelector(".float-5 .float-1-img").style.borderRadius = "20px";
  document.querySelector(".float-5 .float-1-text").style.top = "50%";
  document.querySelector(".float-5 .float-1-text").style.borderRadius = "20px";
  document.querySelector(".float-5").style.zIndex = "initial";
})

document.querySelector(".float-6").addEventListener("mousemove",function(){
  document.querySelector(".float-6 .float-1-img").style.borderRadius = "50px";
  document.querySelector(".float-6 .float-1-text").style.top = "100%";
  document.querySelector(".float-6 .float-1-text").style.borderRadius = "50px";

})

document.querySelector(".float-6").addEventListener("mouseleave",function(){
  document.querySelector(".float-6 .float-1-img").style.borderRadius = "20px";
  document.querySelector(".float-6 .float-1-text").style.top = "50%";
  document.querySelector(".float-6 .float-1-text").style.borderRadius = "20px";
})

document.querySelector(".float-7").addEventListener("mousemove",function(){
  document.querySelector(".float-7 .float-1-img").style.borderRadius = "50px";
  document.querySelector(".float-7 .float-1-text").style.top = "100%";
  document.querySelector(".float-7 .float-1-text").style.borderRadius = "50px";

})

document.querySelector(".float-7").addEventListener("mouseleave",function(){
  document.querySelector(".float-7 .float-1-img").style.borderRadius = "20px";
  document.querySelector(".float-7 .float-1-text").style.top = "50%";
  document.querySelector(".float-7 .float-1-text").style.borderRadius = "20px";
})


document.addEventListener("mousemove",function(details){
  document.querySelectorAll(".mouse").forEach((elem) => {
    const position = elem.getAttribute("value");
    const x = (window.innerWidth - details.clientX * position)/ 90;
    const y = (window.innerHeight - details.clientY * position)/ 90;

    elem.style.transform = `translateX(${x}px)translateX(${y}px)`
  })
});















