function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init();

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 2 +"px"
    crsr.style.top = dets.y + 2 +"px"
})

gsap.from("nav .logo, nav a, nav span", {
    y: -100,
    duration: 0.7,
    delay: 0.3,
    opacity: 0,
    stagger: 0.5
})

gsap.from(".page1 h1,.page1 h1", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})

// Page1

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".mouse",
        scroller: ".main",
        // markers:true,
        start: "top 40%",
        end: "top 20%",
        scrub: 3
    }
})

gsap.from(".intro h4, .intro p", {
    y: -100,
    duration: 0.7,
    delay: 0.3,
})

gsap.from(".intro img", {
    scale: 0,
    duration: 0.7,
    delay: 0.3,
})

gsap.from(".mouse", {
    y: -10,
    duration: 0.7,
    delay: 0.3,
    repeat: -1,
    yoyo: true
})

tl.to(".page1 h1, .page1 h4, .page1 p, .mouse", {
    y: -200,
    opacity: 0,
    duration: 0.7
}, "anim1")
tl.to(".page1 img", {
    x: 50,
    opacity: 0,
    duration: 0.7
}, "anim1")

// Page2

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2 .about-btn",
        scroller: ".main",
        // markers:true,
        start: "top 30%",
        end: "top 20%",
        scrub: 3
    }
})

gsap.from(".page2 h1, .page2 h6", {
    y: -100,
    duration: 0.7,
    delay: 0.3,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".page2 h1",
        scroller: ".main",
        // markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: 3
    }
})

gsap.from(".page2 img", {
    x: -100,
    duration: 0.7,
    delay: 0.3,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".page2 h1",
        scroller: ".main",
        // markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: 3
    }
})

gsap.from(".page2 .about-content", {
    x: 100,
    duration: 0.7,
    delay: 0.3,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".page2 h1",
        scroller: ".main",
        // markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: 3
    }
})

gsap.from(".page2 .about-btn", {
    screwX: -100,
    duration: 0.7,
    delay: 2,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".page2 h1",
        scroller: ".main",
        // markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: 3
    }
})

tl2.to(".page2 h1", {
    y: -100,
}, "anim2")
tl2.to(".page2 h6", {
    y: -100
}, "anim2")
tl2.to(".page2 .about-content", {
    x: 200,
    opacity: 0
}, "anim2")
tl2.to(".page2 img", {
    x: -50,
    opacity: 0
}, "anim2")


// Page3

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3 button",
        scroller: ".main",
        // markers:true,
        start: "top 30%",
        end: "top 20%",
        scrub: 3
    }
})

tl3.from(".page3 h1, .page3 h6", {
    y: -100,
    duration: 0.7,
    delay: 0.3,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".page3 h1",
        scroller: ".main",
        // markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: 3
    }
},".anim31")

tl3.from(".page3 .accordion-button", {
    y: -200,
    duration: 1,
    delay: 0.7,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".page3 h1",
        scroller: ".main",
        // markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: 3
    }
},".anim31")