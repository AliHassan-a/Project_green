import {gsap, ScrollSmoother, ScrollTrigger, SplitText} from "gsap/all";

const initGsap = class {
    constructor(features, vueInstance) {
        this.sideScroller
        this.stepsSideScroller
        this.stickySection
        this.features = features
        this.isAlive = false
        this.vueInstance = vueInstance;
        if (!this.isAlive) this.init()
        this.killGsap = function(){
            if(this.sideScroller != undefined) this.sideScroller.kill();
            if(this.stepsSideScroller != undefined) this.sideScroller.kill();
            if(this.stickySection != undefined) this.stickySection.kill();
        }
    }
    init() {
        this.isAlive = true;
        //// HORIZONTAL ////
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        ScrollSmoother.create({
            smooth: 2,
            effects: true,
        });

        ScrollTrigger.defaults({
            immediateRender: false,
            ease: "power1.inOut",
            scrub: false
        });

        ScrollTrigger.matchMedia({
            "(min-width: 1024px)": () => {
                /* footerani here */
                gsap.to('.footer-overlay', {
                    clipPath: "ellipse(70% 50% at 50% 50%)",
                    ease: 'power2.in',
                    scrollTrigger: {
                        trigger: ".footer-overlay",
                        start: "center bottom+=400",
                        end: "center center-=300",
                        scrub: 1,
                    }
                })
                if(this.features.sideScroller){
                    let sections = gsap.utils.toArray(".panel");
                    this.sideScroller = gsap.to(sections, {
                        xPercent: -100 * (sections.length - 1),
                        ease: "none", // <-- IMPORTANT!
                        scrollTrigger: {
                            trigger: ".container",
                            pin: true,
                            scrub: 0.1,
                            end: "+=" + sections.length * 1000,
                            invalidateOnRefresh: true,
                            onEnter: () => this.vueInstance.$root.$emit("repaint-bg", 150),
                            onLeave: () => this.vueInstance.$root.$emit("repaint-bg", 0),
                            onLeaveBack: () => this.vueInstance.$root.$emit("repaint-bg", 0),
                            onEnterBack: () => this.vueInstance.$root.$emit("repaint-bg", 100),
                        }
                    });
                    sections.forEach((section, index)=>{
                        gsap.from(section, {
                            scrollTrigger: {
                                trigger: section,
                                containerAnimation: this.sideScroller,
                                start: "left center",
                                toggleActions: "play none none reverse",
                                invalidateOnRefresh: true,
                                onEnter: () => {
                                    switch (index) {
                                        case 1:
                                            this.vueInstance.$root.$emit("repaint-bg", 280);
                                            break;
                                        case 2:
                                            this.vueInstance.$root.$emit("repaint-bg", 100);
                                            break;
                                        case 3:
                                            this.vueInstance.$root.$emit("repaint-bg", 100);
                                            break;
                                        default:
                                            this.vueInstance.$root.$emit("repaint-bg", 0);
                                            break;
                                    }
                                },
                                onLeaveBack: () => {
                                    switch (index) {
                                        case 1:
                                            this.vueInstance.$root.$emit("repaint-bg", 280);
                                            break;
                                        case 2:
                                            this.vueInstance.$root.$emit("repaint-bg", 100);
                                            break;
                                        case 3:
                                            this.vueInstance.$root.$emit("repaint-bg", 100);
                                            break;
                                        default:
                                            this.vueInstance.$root.$emit("repaint-bg", 0);
                                            break;
                                    }
                                }
                            },
                        });
                    })
                    let boxes = document.querySelectorAll(".box")
                    boxes.forEach((box) => {
                        gsap.from(box, {
                            scrollTrigger: {
                                trigger: box,
                                toggleActions: "restart resume resume reverse",
                                start: "50% 100%",
                                end: "50% 70%%",
                                scrub: true,
                            },
                            y: 100,
                            opacity: 0,
                            ease: "power1.inOut",
                        });
                    })
                }
                if(this.features.stepsSideScroller){
                    let sections = gsap.utils.toArray(".panel");
                    this.sideScroller = gsap.to(sections, {
                        xPercent: -100 * (sections.length - 1) - 100,
                        ease: "none", // <-- IMPORTANT!
                        scrollTrigger: {
                            trigger: ".container",
                            pin: true,
                            scrub: 0.1,
                            end: "+=" + sections.length * 1000,
                            invalidateOnRefresh: true,
                        }
                    });
                    let stepsContents = gsap.utils.toArray(".stepContentAnimation");
                    stepsContents.forEach((stepsContent, index)=>{
                        gsap.to(stepsContent, {
                            scrollTrigger: {
                                trigger: stepsContent,
                                containerAnimation: this.sideScroller,
                                start: "center center",
                                scrub: true,
                            },
                            x: window.innerWidth * 0.65,
                        });
                    })
                    let stepsDescriptions = gsap.utils.toArray(".stepDescriptionAnimation");
                    stepsDescriptions.forEach((stepsDescription, index)=>{
                        gsap.from(stepsDescription, {
                            scrollTrigger: {
                                trigger: stepsDescription,
                                containerAnimation: this.sideScroller,
                                start: "left center",
                                scrub: true,
                            },
                            duration: 0.6,
                            opacity: 0,
                            filter: 'blur(20px)',
                            ease: "power1.inOut",
                            stagger: { each: 0.05, from: 'random'},
                        });
                    })
                    let stepsIntro = document.querySelector(".stepsIntroAnimation");
                    gsap.to(stepsIntro, {
                        scrollTrigger: {
                            trigger: stepsIntro,
                            containerAnimation: this.sideScroller,
                            start: "center center",
                            scrub: true,
                            pin: true,
                        },
                        x: window.innerWidth * 0.6,
                        scaleX: 0.9,
                        opacity: 0,
                    });
                }
                if(this.features.quote){
                    let quotes = gsap.utils.toArray(".quote");
                    let stickDistance = 400;
                    let lastCardStack = ScrollTrigger.create({
                        trigger: quotes[quotes.length-1],
                        start: "center center"
                    });

                    quotes.forEach((quote, i) => {
                        gsap.to(quote, {
                            ease: "none", // <-- IMPORTANT!
                            scale: () => { return 0.9 + i / 100},
                            y: i * 20,
                            scrollTrigger: {
                                trigger: quote,
                                start: () => {return "center center+=" + i*10 },
                                end: () => lastCardStack.start + 500,
                                pin: true,
                                scrub: true,
                                pinSpacing: false,
                                invalidateOnRefresh: true,
                            }
                        })
                    });
                }
                /* STICKY SECTION /w images */
                if(this.features.stickyImages){
                    this.stickySection = gsap.to(".pinnedContainer", {
                        ease: "none", // <-- IMPORTANT!
                        scrollTrigger: {
                            trigger: ".pinnedContainer",
                            pin: true,
                            scrub: 1,
                            invalidateOnRefresh: true,
                        }
                    });
                    /* Image Reveal Sticky */
                    let revealContainers = document.querySelectorAll(".reveal");
                    revealContainers.forEach((container) => {
                        let image = container.querySelector("img");
                        let tl = gsap.timeline({
                            scrollTrigger: {
                                trigger: container,
                                toggleActions: "restart none none reset"
                            }
                        });

                        tl.set(container, { autoAlpha: 1 });
                        tl.from(container, 1.5, {
                            x: -image.clientWidth,
                        });
                        tl.from(image, 1.5, {
                            x: image.clientWidth,
                            scale: 1.3,
                            delay: -1.5,
                        });
                    });
                }
            },
            "(max-width: 1024px)": () => {
            },
            "all": () => {
                /*LOGO SCROLL HIDE*/
                const showAnim = gsap.from('.greensteinLogoFont', {
                    yPercent: -250,
                    paused: true,
                    duration: 0.4,
                    ease: "power1.inOut",
                }).progress(1);

                ScrollTrigger.create({
                    start: "top top",
                    end: 99999,
                    onUpdate: (self) => {
                        self.direction === -1 ? showAnim.play() : showAnim.reverse()
                    }
                });
                /*HERO ANIMATION*/
                if(this.features.heroAnimation){
                    let heroBlock = document.querySelector(".animateBlockHero");
                    heroBlock.split = new SplitText(heroBlock, {
                        type: "words"
                    });
                    heroBlock.anim = gsap.from(heroBlock.split.words, {
                        delay: 1.0,
                        duration: 1,
                        opacity: 0,
                        filter: 'blur(20px)',
                        ease: "power1.inOut",
                        stagger: { each: 0.05, from: 'random'},
                    });
                    let heroArrow = document.querySelector(".animateBlockHeroArrow");
                    heroArrow.anim = gsap.from(heroArrow, {
                        delay: 1.2,
                        duration: 1,
                        opacity: 0,
                        filter: 'blur(20px)',
                        ease: "power1.inOut",
                        stagger: { each: 0.05, from: 'random'},
                    });
                }
                /*LOGOGLIDER ANIMATION*/
                if(this.features.logosGlider){
                    let logosSection = document.querySelector(".logosSectionWrapper");
                    logosSection.anim = gsap.from(logosSection, {
                        delay: 0.5,
                        duration: 0.8,
                        y: 200,
                        opacity: 0,
                        ease: "power1.inOut",
                    });
                }

                /*HEADLINE REVEAL*/
                let headBlocks = document.querySelectorAll(".animateBlockHead");
                headBlocks.forEach(headBlock => {
                    headBlock.split = new SplitText(headBlock, {
                        type: "words"
                    });
                    headBlock.anim = gsap.from(headBlock.split.words, {
                        scrollTrigger: {
                            trigger: headBlock,
                            toggleActions: "restart resume resume reverse",
                            start: "50% 80%",
                        },
                        opacity: 0,
                        filter: 'blur(20px)',
                        ease: "power1.inOut",
                        stagger: { each: 0.05, from: 'random'},
                    });
                });
                /*TEXT REVEAL*/
                let textBlocks = document.querySelectorAll(".animateBlockText");
                textBlocks.forEach(textBlock => {

                    textBlock.split = new SplitText(textBlock, {
                        type: "lines"
                    });

                    // Set up the anim
                    textBlock.anim = gsap.from(textBlock.split.lines, {
                        scrollTrigger: {
                            trigger: textBlock,
                            toggleActions: "restart resume resume reverse",
                            start: "50% 80%",
                        },
                        duration: 0.6,
                        opacity: 0,
                        filter: 'blur(20px)',
                        ease: "power1.inOut",
                        stagger: { each: 0.1, from: 'start'},
                    });
                });
                /*ITEM REVEAL*/
                let itemBlocks = document.querySelectorAll(".animateBlockItem");
                itemBlocks.forEach(itemBlock => {

                    // Set up the anim
                    itemBlock.anim = gsap.from(itemBlock, {
                        scrollTrigger: {
                            trigger: itemBlock,
                            toggleActions: "restart resume resume reverse",
                            start: "0% 80%",
                        },
                        duration: 0.6,
                        opacity: 0,
                        filter: 'blur(20px)',
                        ease: "power1.inOut",
                        stagger: { each: 0.05, from: 'random'},
                    });
                });
                /*ItemBlocks Sticky*/
                let itemBlocksSticky = document.querySelectorAll(".animateStickyBlockItem");
                itemBlocksSticky.forEach(itemBlockSticky => {

                    // Set up the anim
                    itemBlockSticky.anim = gsap.from(itemBlockSticky, {
                        scrollTrigger: {
                            trigger: itemBlockSticky,
                            toggleActions: "restart resume resume reverse",
                            start: "50% 100%",
                        },
                        duration: 0.6,
                        opacity: 0,
                        filter: 'blur(20px)',
                        ease: "power1.inOut",
                        stagger: { each: 0.05, from: 'random'},
                    });
                });
            }
        })
    }

}

export default initGsap;