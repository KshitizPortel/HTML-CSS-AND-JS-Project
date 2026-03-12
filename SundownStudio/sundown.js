// const scroll=new LocomotiveScroll({
//     el:document.querySelector("#main"),
//     smooth:true
// });
// Explantion:
// const scroll:creates the scroll variable , which is the object of the class locmotive
// new locomotive:creates the object of the class locmotive, which is provided by the library
// e1: identifies on which element, scrollling us applied
// selector:selects the element
// smooth:true: it enables the scrolling

let elementcontainer=document.querySelector(".element-container");
let imgcontainer=document.querySelector(".image-container");
elementcontainer.addEventListener("mouseenter",function()
{
    imgcontainer.style.display="initial";
    console.log("enter;");
})
elementcontainer.addEventListener("mouseleave",function()
{
    imgcontainer.style.display="none";
    // console.log("enter;");
})
let elems=document.querySelectorAll(".elem");
elems.forEach(function(elem)
{
    // console.log("element");
    elem.addEventListener("mouseenter",function()
    {
        let src=elem.getAttribute("data-image");
        imgcontainer.style.backgroundImage=`url(${src})`;
        console.log(src); 
    })
})
function changeimage()
{
    let h2id=document.querySelectorAll("#h2-id");
    let img=document.querySelector("#right-image");
    h2id.forEach(function(elem)
    {
        elem.addEventListener("click",function()
        {
            h2id.forEach(function(e)
            {
                e.style.fontSize="";
                e.style.color="";
            })
            elem.style.fontSize="50px";
            elem.style.color="white";
            let source=elem.getAttribute("data-image");
            img.setAttribute("src",source);
        })
    })
}
changeimage();
// Swiper JS:
function swiperanimation()
{
    // here we are creating the instance of the class Swiper
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
    //   how many slides can be visible at a time
    //   centeredSlides: true,
    //   this centers the slide in the middle of the container, instead of 
    // starting from left
      spaceBetween: 50,
    //   adds the spaces between the container
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    //   adds the pagination to the swiper
    });
}
swiperanimation()

let menu=document.querySelector("#menu");
let navigation=document.querySelector(".navigation");
let flag=0;
menu.addEventListener("click",function()
{
    if(flag==0)
    {
         navigation.style.display="initial";
         flag=1;
    }
    else{
        flag=0;
        navigation.style.display="none";
    }
})

let loader=document.querySelector(".loader");
setTimeout(function()
{
    loader.style.top="-100%";
},2000)