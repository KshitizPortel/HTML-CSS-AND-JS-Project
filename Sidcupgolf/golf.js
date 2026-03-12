// gsap.to("#nav",{
//     backgroundColor:"#000",
//     duration:0.6,
//     height:"110px",
//     scrollTrigger:{
//         trigger:"#nav",
//         scroller:"body",
//         markers:true,
//         start:"top -10%",
//         end:"top -11%",
//         scrub:2
//     }
// })

let cursor=document.querySelector("#cursor");
let cursorblur=document.querySelector("#cursor-blur");
let h4all=document.querySelectorAll("#nav h4");
// h4all.forEach(function(elem)
// {
//     elem.addEventListener("mouseenter",function()
// {
//     cursor.style.color="transparent";
// })
//     elem.addEventListener("mouseleave",function()
// {
//     cursor.style.border="0px";
// })
// })
document.addEventListener("mousemove",function(dets)
{
    // console.log(dets.screenX);
    cursor.style.left=dets.x+"px";
    cursor.style.top=dets.y+"px";
    cursorblur.style.left=dets.x+"px";
    cursorblur.style.top=dets.y+"px";
})
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.6,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
})
gsap.to("#body",{
    backgroundColor:"#000",
    duration:0.8,
    scrollTrigger:{
        trigger:"#body",
        scroller:"body",
        start:"top -40%",
        end:"top -100%",
        scrub:2,
        markers:true
    }
})
gsap.from("#about-us img,#middle",{
    y:100,
    // starting 100 px below the normal web positions
    opacity:0,
    duration:10,
    stagger:3,
    scrollTrigger:{
        scroller:"body",
        trigger:"#about-us",
        start:"top 80%",
        // starts when top of about us touches 70% from top
        end:"top 50%",
        scrub:4
        // scrub adds the delay in the animation
    }
})
gsap.from(".card",{
    y:50,
    opacity:0,
    duration:3,
    stagger:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        scrub:3
    }
})
gsap.from("#page3 #col1",{
    opacity:0,
    x:-100,
    y:-100,
    duration:2,
    scrollTrigger:
    {
        trigger:"#page3",
        scroller:"body",
        start:"top 100%",
        end:"top 40%",
        scrub:3
    }
})
gsap.from("#page3 #col2",{
    opacity:0,
    x:100,
    y:100,
    duration:2,
    scrollTrigger:
    {
        trigger:"#page3",
        scroller:"body",
        start:"top 100%",
        end:"top 10%",
        scrub:3
    }
})
gsap.from(".info",{
    opacity:0,
    y:50,
    stagger:2,
    duration:2,
    scrollTrigger:
    {
        trigger:".info",
        scroller:"body",
        start:"top 70%",
        end:"top 40%",
        scrub:3
    }
})