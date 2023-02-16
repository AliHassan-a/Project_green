import {gsap, ScrollSmoother, ScrollTrigger, SplitText, Draggable} from "gsap/all";

const initGsap = class {
    constructor(features, vueInstance) {
        this.features = features
        this.isAlive = false
        this.vueInstance = vueInstance;
        if (!this.isAlive) this.init()
        this.killGsap = function(){
            // kill not needed in production
        }
    }
    init() {
        this.isAlive = true;

        /* init Base */
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        ScrollSmoother.create({
            smooth: 2,
            effects: true,
            smoothTouch: 0.3,
        });

        ScrollTrigger.defaults({
            immediateRender: false,
            ease: "power1.inOut",
            scrub: false
        });

        /* declare Animations */
        function initLogoScroll(){
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
        }
        function initEntryAnimations() {
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
        function initEntryAnimationsMobile() {
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
                    ease: "power1.inOut",
                    stagger: { each: 0.05, from: 'random'},
                });
            });
        }


        function initHero(){
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
        function initHeroMobile(){
            let heroBlock = document.querySelector(".animateBlockHero");
            heroBlock.split = new SplitText(heroBlock, {
                type: "words"
            });
            heroBlock.anim = gsap.from(heroBlock.split.words, {
                delay: 1.0,
                duration: 1,
                opacity: 0,
                ease: "power1.inOut",
                stagger: { each: 0.05, from: 'random'},
            });
            let heroArrow = document.querySelector(".animateBlockHeroArrow");
            heroArrow.anim = gsap.from(heroArrow, {
                delay: 1.2,
                duration: 1,
                opacity: 0,
                ease: "power1.inOut",
                stagger: { each: 0.05, from: 'random'},
            });
        }

        function initSideScroller(context){
            let sections = gsap.utils.toArray(".panel");
            let sideScroller = gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none", // <-- IMPORTANT!
                scrollTrigger: {
                    trigger: ".container",
                    pin: true,
                    scrub: 0.1,
                    end: "+=" + sections.length * 1000,
                    invalidateOnRefresh: true,
                    onEnter: () => context.vueInstance.$root.$emit("repaint-bg", 150),
                    onLeave: () => context.vueInstance.$root.$emit("repaint-bg", 0),
                    onLeaveBack: () => context.vueInstance.$root.$emit("repaint-bg", 0),
                    onEnterBack: () => context.vueInstance.$root.$emit("repaint-bg", 280),
                }
            });
            sections.forEach((section, index)=>{
                gsap.from(section, {
                    scrollTrigger: {
                        trigger: section,
                        containerAnimation: sideScroller,
                        start: "left center",
                        toggleActions: "play none none reverse",
                        invalidateOnRefresh: true,
                        onEnter: () => {
                            switch (index) {
                                case 1:
                                    context.vueInstance.$root.$emit("repaint-bg", 333);
                                    break;
                                case 2:
                                    context.vueInstance.$root.$emit("repaint-bg", 100);
                                    break;
                                case 3:
                                    context.vueInstance.$root.$emit("repaint-bg", 280);
                                    break;
                                default:
                                    context.vueInstance.$root.$emit("repaint-bg", 0);
                                    break;
                            }
                        },
                        onLeaveBack: () => {
                            switch (index) {
                                case 1:
                                    context.vueInstance.$root.$emit("repaint-bg", 333);
                                    break;
                                case 2:
                                    context.vueInstance.$root.$emit("repaint-bg", 100);
                                    break;
                                case 3:
                                    context.vueInstance.$root.$emit("repaint-bg", 280);
                                    break;
                                default:
                                    context.vueInstance.$root.$emit("repaint-bg", 0);
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
        function initStepsSideScroller(){
            let sections = gsap.utils.toArray(".panel");
            let sideScroller = gsap.to(sections, {
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
                    ease: "none",
                    scrollTrigger: {
                        trigger: stepsContent,
                        containerAnimation: sideScroller,
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
                    start: "bottom bottom",
                    end: this.sideScroller.end,
                    scrub: true,
                    markers: true,
                    pin: true,
                },
                opacity: 0,
            });
        }

        function initLogoGlider(){
            let logosSection = document.querySelector(".logosSectionWrapper");
            logosSection.anim = gsap.from(logosSection, {
                delay: 0.5,
                duration: 0.8,
                y: 200,
                opacity: 0,
                ease: "power1.inOut",
            });
        }
        function initStickyImages(){
            gsap.to(".pinnedContainer", {
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
        function initMarquee() {
            const dur = 15;

            document.querySelectorAll('.js-ticker .wrapper').forEach(ticker => {
                // Get the initial size of the ticker
                const totalDistance = ticker.clientWidth;

                // Position the ticker
                gsap.set(ticker, {yPercent: -50});

                // Clone the first item and add it to the end
                ticker.querySelectorAll("li").forEach((tickerSingle) => {
                    ticker.append(tickerSingle.cloneNode(true))
                })

                // Get all of the items
                const items = ticker.querySelectorAll("li");

                const anim = gsap.to(ticker, {
                    duration: dur,
                    x: -totalDistance,
                    ease: "none",
                    repeat: -1,
                });
            });
        }
        function initQuote(isMobile) {
            let quotes = gsap.utils.toArray(".quote");
            //let stickDistance = isMobile ? 100 : 400;
            let lastCardStack = ScrollTrigger.create({
                trigger: quotes[quotes.length-1],
                start: "center center",
                markers: true,
            });
            quotes.forEach((quote, i) => {
                gsap.to(quote, {
                    ease: "none", // <-- IMPORTANT!
                    scale: () => { return 0.9 + i / 100},
                    y: i * 20,
                    scrollTrigger: {
                        trigger: quote,
                        start: () => {return "center center+=" + i*10 },
                        end: () => isMobile ? lastCardStack.start + 1000 : lastCardStack.start + 500,
                        pin: true,
                        scrub: true,
                        pinSpacing: false,
                        invalidateOnRefresh: true,
                    }
                })
            });
        }
        function initSingleQuote(){
            gsap.to(".quote", {
                ease: "none", // <-- IMPORTANT!
                scale: () => 0.95,
                scrollTrigger: {
                    trigger: ".quote",
                    start: () => "center center",
                    end: () => {return "center top"},
                    pin: true,
                    scrub: true,
                    pinSpacing: false,
                    invalidateOnRefresh: true,
                }
            })
        }

        function initFooter(isMobile){
            if(isMobile){
                gsap.to('.footer-overlay', {
                    clipPath: "ellipse(70% 20% at 50% 50%)",
                    ease: 'power2.in',
                    scrollTrigger: {
                        trigger: ".footer-overlay",
                        start: "center bottom",
                        end: "center center",
                        scrub: 1,
                    }
                })
            } else {
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
            }
        }

        /* set responsive Animations */
        ScrollTrigger.matchMedia({
            "(min-width: 1024px)": () => {
                initEntryAnimations()
                /*HERO ANIMATION*/
                if(this.features.heroAnimation){
                    initHero()
                }
                /*SIDE SCROLLER*/
                if(this.features.sideScroller){
                    initSideScroller(this)
                }
                if(this.features.stepsSideScroller){
                    initStepsSideScroller()
                }
                /* FOOTER */
                initFooter(false)
            },
            "(max-width: 1024px)": () => {
                initEntryAnimationsMobile()
                /*HERO ANIMATION*/
                if(this.features.heroAnimation){
                    initHeroMobile()
                }
                /* MARQUEE ONLY MOBILE */
                if(this.features.marquee){
                    initMarquee()
                }
                /* FOOTER */
                initFooter(true)
            },
            "all": () => {
                initLogoScroll()
                /*LOGOGLIDER ANIMATION*/
                if(this.features.logosGlider){
                    initLogoGlider()
                }
                /* STICKY SECTION /w images */
                if(this.features.stickyImages){
                    initStickyImages()
                }
                /*quotes*/
                if(this.features.quote){
                    initQuote()
                }
                if(this.features.singleQuote){
                    initSingleQuote()
                }
            }
        })
    }

}

export default initGsap;