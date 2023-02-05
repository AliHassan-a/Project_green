import {gsap, ScrollSmoother, ScrollTrigger, SplitText} from "gsap/all";

const initGsap = class {
    constructor(features, vueInstance) {
        this.sideScroller
        this.stickySection
        this.features = features
        this.isAlive = false
        this.vueInstance = vueInstance;
        if (!this.isAlive) this.init()
        this.killGsap = function(){
            if(this.sideScroller != undefined) this.sideScroller.kill();
            if(this.stickySection != undefined) this.stickySection.kill();
        }
    }
    init() {
        this.isAlive = true;
        //// HORIZONTAL ////
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        ScrollSmoother.create({
            smooth: 1,
            effects: true
        });

        ScrollTrigger.defaults({
            immediateRender: false,
            ease: "power1.inOut",
            scrub: false
        });

        ScrollTrigger.matchMedia({
            "(min-width: 1024px)": () => {
                /* footer */
                gsap.to(".footer-overlay", {
                    scale: 2.5,
                    ease: "none", // <-- IMPORTANT!
                    scrollTrigger: {
                        trigger: ".footer-overlay",
                        start: "top center",
                        end: "top end",
                        scrub: 1,
                    }
                });
                gsap.to(".footer", {
                    color: "#011713",
                    ease: "none", // <-- IMPORTANT!
                    scrollTrigger: {
                        trigger: ".footer-overlay",
                        start: "top center",
                        end: "top end",
                        scrub: 1,
                    }
                });
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
                    let projectContents = gsap.utils.toArray(".projectContentAnimation");
                    projectContents.forEach((projectContent, index)=>{
                        gsap.from(projectContent, {
                            scrollTrigger: {
                                trigger: index+1 == projectContents.length ? projectContents[projectContents.length-2] : projectContent,
                                containerAnimation: this.sideScroller,
                                start: "left center",
                                toggleActions: "play none none reverse"
                            },
                            duration: 1,
                            autoAlpha: 0,
                            ease: "circ.out",
                            y: 100,
                            stagger: 1,
                        });
                    })
                }

                /* STICKY SECTION /w images */
                if(this.features.stickyImages){
                    this.stickySection = gsap.to(".pinnedContainer", {
                        opacity: 0,
                        ease: "none", // <-- IMPORTANT!
                        scrollTrigger: {
                            trigger: ".pinnedContainer",
                            pin: true,
                            scrub: 1,
                            invalidateOnRefresh: true,
                        }
                    });

                    let whirlImages = gsap.utils.toArray(".whirlImage");
                    whirlImages.forEach((whirlImage) => {
                        gsap.to(whirlImage, {
                            opacity: 0,
                            scrollTrigger: {
                                trigger: whirlImage,
                                pin: true,
                                scrub: 1,
                            }
                        })
                    })
                }
            },
            "(max-width: 1024px)": () => {
            },
            "all": () => {
                /*HEADLINE REVEAL*/
                let headBlocks = document.querySelectorAll(".animateBlockHead");
                headBlocks.forEach(headBlock => {

                    headBlock.split = new SplitText(headBlock, {
                        type: "lines"
                    });

                    // Set up the anim
                    headBlock.anim = gsap.from(headBlock.split.lines, {
                        scrollTrigger: {
                            trigger: headBlock,
                            toggleActions: "restart pause resume reverse",
                            start: "50% 80%",
                        },
                        duration: 0.6,
                        autoAlpha: 0,
                        ease: "circ.out",
                        y: 100,
                        stagger: 0.2,
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
                            toggleActions: "restart pause resume reverse",
                            start: "50% 80%",
                        },
                        duration: 0.6,
                        autoAlpha: 0,
                        ease: "circ.out",
                        y: 40,
                        stagger: 0.2,
                    });
                });
                /*ITEM REVEAL*/
                let itemBlocks = document.querySelectorAll(".animateBlockItem");
                itemBlocks.forEach(itemBlock => {

                    // Set up the anim
                    itemBlock.anim = gsap.from(itemBlock, {
                        scrollTrigger: {
                            trigger: itemBlock,
                            toggleActions: "restart pause resume reverse",
                            start: "50% 80%",
                        },
                        duration: 0.6,
                        autoAlpha: 0,
                        ease: "circ.out",
                        y: 60,
                        stagger: 0.2,
                    });
                });
                /*ItemBlocks Sticky*/
                let itemBlocksSticky = document.querySelectorAll(".animateStickyBlockItem");
                itemBlocksSticky.forEach(itemBlockSticky => {

                    // Set up the anim
                    itemBlockSticky.anim = gsap.from(itemBlockSticky, {
                        scrollTrigger: {
                            trigger: itemBlockSticky,
                            toggleActions: "restart pause resume reverse",
                            start: "50% 100%",
                        },
                        duration: 0.6,
                        autoAlpha: 0,
                        ease: "circ.out",
                        y: 40,
                        stagger: 0.2,
                    });
                });
            }
        })
    }

}

export default initGsap;