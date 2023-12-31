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

var swibtn = document.querySelector('#checkbox');

swibtn.addEventListener("click", () =>{
    document.querySelector(".details").classList.toggle("invisibled");
    document.querySelector("body").classList.toggle("overflow-y-hidden");
})

var mode = document.querySelector('#moon');
var i = true;

mode.addEventListener("click", () =>{
    if (i) {
        i = false;
        mode.textContent = "dark_mode";
        document.querySelectorAll(".text-wh-changed").forEach(element => {
            element.classList.add("text-black-changed");
            element.classList.remove("text-wh-changed");
        });
        document.querySelectorAll(".bg-black-changed").forEach(element => {
            element.classList.add("bg-wh-changed");
            element.classList.remove("bg-black-changed");
        });
    } else {
        i = true;
        mode.textContent = "sunny";
        document.querySelectorAll(".text-black-changed").forEach(element => {
            element.classList.add("text-wh-changed");
            element.classList.remove("text-black-changed");
        });
        document.querySelectorAll(".bg-wh-changed").forEach(element => {
            element.classList.add("bg-black-changed");
            element.classList.remove("bg-wh-changed");
        });
    }
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

gsap.from(".page3 h1, .page3 h6", {
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
},"anim31")

gsap.from(".page3 .accordion-button", {
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
},"anim31")

var tl32 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3 .progress",
        scroller: ".main",
        // markers:true,
        start: "top 30%",
        end: "top 20%",
        scrub: 3
    }
})

tl32.to(".page3 h1", {
    y: -100,
}, "anim32")
tl32.to(".page3 h6", {
    y: -100
}, "anim32")
tl32.to(".page3 .accordion-button", {
    y: -200,
    opacity: 0
}, "anim32")

// Page 4

gsap.from(".page4 h1, .page4 h6", {
    y: -100,
    duration: 0.7,
    delay: 0.3,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".page4 h1",
        scroller: ".main",
        // markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: 3
    }
},"anim31")

gsap.from(".page4 .qual-tag, .page4 .qual-data", {
    y: -200,
    duration: 1,
    delay: 0.7,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".page4 .qual-tag",
        scroller: ".main",
        // markers:true,
        start: "top 40%",
        end: "top 20%",
        scrub: 3
    }
},"anim31")

var tl32 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page5 h1",
        scroller: ".main",
        // markers:true,
        start: "top 30%",
        end: "top 20%",
        scrub: 3
    }
})

tl32.to(".page4 h1", {
    y: -100,
}, "anim32")
tl32.to(".page4 h6", {
    y: -100
}, "anim32")
tl32.to(".page4 .qual-tag", {
    y: -200,
    opacity: 0
}, "anim32")
tl32.to(".page4 .qual-data", {
    y: -200,
    opacity: 0
}, "anim32")

// Page 5

gsap.from(".page5 h1, .page5 h6", {
    y: -100,
    duration: 0.7,
    delay: 0.3,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".page5 h1",
        scroller: ".main",
        // markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: 3
    }
},"anim31")

gsap.from(".page5 .pro-detail", {
    x: -200,
    duration: 1,
    delay: 0.7,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".page5 h1",
        scroller: ".main",
        // markers:true,
        start: "top 40%",
        end: "top 20%",
        scrub: 3
    }
},"anim31")

var tl32 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page6 h1",
        scroller: ".main",
        // markers:true,
        start: "top 30%",
        end: "top 20%",
        scrub: 3
    }
})

tl32.to(".page5 h1", {
    y: -100,
}, "anim32")
tl32.to(".page5 h6", {
    y: -100
}, "anim32")
tl32.to(".page5 .pro-detail", {
    x: -200,
    opacity: 0
}, "anim32")

// Page 6

gsap.from(".page6 h1, .page6 h6", {
    y: -100,
    duration: 0.7,
    delay: 0.3,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".page6 h1",
        scroller: ".main",
        // markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: 3
    }
},"anim31")

gsap.from(".page6 .con-data", {
    x: -200,
    duration: 1,
    delay: 0.7,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".page6 h1",
        scroller: ".main",
        // markers:true,
        start: "top 40%",
        end: "top 20%",
        scrub: 3
    }
},"anim31")