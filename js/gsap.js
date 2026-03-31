document.addEventListener('DOMContentLoaded', (event) => {
    
    
        gsap.registerPlugin(ScrollTrigger);

    // matchMedia.add("()", () => {

            gsap.from("nav", {
            scrollTrigger: {
                trigger: "nav",     // element to watch
                start: "top 80%",      // when element hits 80% of viewport
                toggleActions: "play none none none" 
                // play | pause | reverse | reset
                },
                y: -50,       // move from below
                opacity: 1,   // start invisible
                duration: 1.0,
                ease: "power3.out",
            });
            gsap.from(".hero .first", {
            scrollTrigger: {
                trigger: ".hero",     // element to watch
                start: "top 80%",      // when element hits 80% of viewport
                toggleActions: "play none none none" 
                // play | pause | reverse | reset
                },
                x: -100,       // move from below
                opacity: 0,   // start invisible
                duration: 1.0,
                delay: 0.4,
                ease: "power3.out",
            });
        
            gsap.from(".hero .second", {
            scrollTrigger: {
                trigger: ".hero",     // element to watch
                start: "top 80%",      // when element hits 80% of viewport
                toggleActions: "play none none none" 
                // play | pause | reverse | reset
                },
                x: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 1.0,
                delay: 0.6,
                ease: "power3.out",
            });
            gsap.from(".hero .more", {
            scrollTrigger: {
                trigger: ".hero",     // element to watch
                start: "top 80%",      // when element hits 80% of viewport
                toggleActions: "play none none none"
                // play | pause | reverse | reset
                },
                y: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 1.0,
                delay: 0.4,
                ease: "power3.out",
            });
            gsap.from(".hero .more .image img", {
            scrollTrigger: {
                trigger: ".hero .more",     // element to watch
                start: "top 95%",
                end: "top 50%",
                scrub: true,
                // toggleActions: "play none none none"
                // play | pause | reverse | reset
                },
                scale: 2,       // move from below
                opacity: 0,   // start invisible
                duration: 2.0,
                ease: "power3.out",
            });
        
            gsap.from(".hero .third", {
            scrollTrigger: {
                trigger: ".hero .third",     // element to watch
                start: "top 75%",      // when element hits 80% of viewport
                toggleActions: "play none none none" 
                // play | pause | reverse | reset
                },
                y: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 1.0,
                ease: "power3.out",
            });
            gsap.from(".about-us .header h4,.about-us .header h2", {
            scrollTrigger: {
                trigger: ".about-us .header",     // element to watch
                start: "top 85%",      // when element hits 80% of viewport
                toggleActions: "play none none none" 
                // play | pause | reverse | reset
                },
                y: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 1.0,
                ease: "power3.out",
                stagger: 0.5,
            });
            gsap.from(".about-content .image", {
            scrollTrigger: {
                trigger: ".about-content",     // element to watch
                start: "top 90%",      // when element hits 80% of viewport
                toggleActions: "play none none none" 
                // play | pause | reverse | reset
                },
                x: -100,       // move from below
                opacity: 0,   // start invisible
                duration: 1.0,
                ease: "power3.out",
            });
            gsap.from(".about-content .content>p, .about-content .content .stats", {
            scrollTrigger: {
                trigger: ".about-content .content>p, .about-content .content .stats",     // element to watch
                start: "top 90%",      // when element hits 80% of viewport
                toggleActions: "play none none none" 
                // play | pause | reverse | reset
                },
                y: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 1.0,
                ease: "power3.out",
                stagger: 0.5,
            });
            gsap.from(".about-content .content .btn", {
            scrollTrigger: {
                trigger: ".about-content .content .btn",     // element to watch
                start: "top 95%",      // when element hits 80% of viewport
                toggleActions: "play none none none" 
                // play | pause | reverse | reset
                },
                y: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 1.0,
                ease: "power3.out",
            });
            gsap.from(".about-us .header2", {
            scrollTrigger: {
                trigger: ".about-us .header2",     // element to watch
                start: "top 95%",      // when element hits 80% of viewport
                toggleActions: "play none none none" 
                // play | pause | reverse | reset
                },
                y: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 1.0,
                ease: "power3.out",
                stagger: 0.5,
            });
        
            gsap.from(".about-us .more-content p", {
            scrollTrigger: {
                trigger: ".about-us .more-content",     // element to watch
                start: "top 80%",      // when element hits 80% of viewport
                toggleActions: "play none none none" 
                // play | pause | reverse | reset
                },
                scale: 0.5,       // move from below
                opacity: 0,   // start invisible
                duration: 1.0,
                ease: "power3.out",
            });
        
            // Video pin animation removed — section was reordered and the
            // scroll-pin caused the video to overlap subsequent sections.
        
            gsap.from(".services-section .header h3", {
                scrollTrigger: {
                    trigger: ".services-section .header",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 50,       // move from below
                opacity: 0,   // start invisible
                duration: 1.5,
                ease: "power3.out",
            });
            gsap.from(".services-section .header h2", {
                scrollTrigger: {
                    trigger: ".services-section .header",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 80,       // move from below
                opacity: 0,   // start invisible
                duration: 1.5,
                delay: 0.2,
                ease: "power3.out",
            });
            gsap.from(".services-section .header p", {
                scrollTrigger: {
                    trigger: ".services-section .header",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,       // move from below
                opacity: 0,
                delay: 0.4,   // start invisible
                duration: 1.5,
                ease: "power3.out",
            });

            gsap.from(".work-process .header h3, .work-process .header h2", {
                scrollTrigger: {
                    trigger: ".work-process .header",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,       // move from below
                opacity: 0,
                stagger: 0.4,   // start invisible
                duration: 1.5,
                ease: "power3.out",
            });

            gsap.from(".work-process .process .card", {
                scrollTrigger: {
                    trigger: ".work-process .process",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,       // move from below
                opacity: 0,
                stagger: 0.4,   // start invisible
                duration: 1.5,
                ease: "power3.out",
            });
            

            gsap.from(".projects .header h3, .projects .header h2, .projects .header p, .projects .filters", {
                scrollTrigger: {
                    trigger: ".projects .header, .projects",
                    start: "top 90%",
                    toggleActions: "play none none none"
                    },
                y: 100,
                opacity: 0,
                stagger: 0.3,
                duration: 1.5,
                ease: "power3.out",
            });

            gsap.from(".projects .project-grid .card", {
                scrollTrigger: {
                    trigger: ".projects .project-grid",
                    start: "top 95%",
                    toggleActions: "play none none none"
                    },
                y: 80,
                opacity: 0,
                stagger: 0.2,
                duration: 1.2,
                ease: "power3.out",
            });
        
            gsap.from(".testimonials .header h3, .testimonials .header h2, .testimonials .review", {
                scrollTrigger: {
                    trigger: ".testimonials .header",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,// move from below       
                opacity: 0,// start invisible
                stagger: 0.3,   
                duration: 1.5,
                ease: "power3.out",
            });
        
            gsap.from(".pricing .header", {
                scrollTrigger: {
                    trigger: ".pricing .header",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,// move from below       
                opacity: 0,// start invisible
                stagger: 0.5,   
                duration: 1.5,
                ease: "power3.out",
            });
        
            gsap.from(".pricing .header p", {
                scrollTrigger: {
                    trigger: ".pricing .header",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,// move from below       
                opacity: 0,// start invisible
                stagger: 0.5, 
                delay: 0.5,  
                duration: 1.5,
                ease: "power3.out",
            });
            gsap.from(".pricing .prices", {
                scrollTrigger: {
                    trigger: ".pricing .prices",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,// move from below       
                opacity: 0,// start invisible 
                stagger: 0.5,
                duration: 1.5,
                ease: "power3.out",
            });
        
            gsap.from(".pricing .prices .hmu", {
                scrollTrigger: {
                    trigger: ".pricing .prices",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,// move from below       
                opacity: 0,// start invisible 
                stagger: 0.5,
                delay: 0.5,
                duration: 1.5,
                ease: "power3.out",
            });
        
            gsap.from(".prev-clients h3, .prev-clients h2, .prev-clients .partners", {
                scrollTrigger: {
                    trigger: ".prev-clients .header",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,// move from below       
                opacity: 0,// start invisible 
                stagger: 0.5,
                duration: 1.5,
                ease: "power3.out",
            });
        
            gsap.from(".faq .header h3, .faq .header h2, .faq .header p", {
                scrollTrigger: {
                    trigger: ".faq .header",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,// move from below       
                opacity: 0,// start invisible 
                stagger: 0.5,
                duration: 1,
                ease: "power3.out",
            });
        
            gsap.from(".faq .accordion .question", {
                scrollTrigger: {
                    trigger: ".faq .accordion",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,// move from below       
                opacity: 0,// start invisible 
                stagger: 0.5,
                duration: 1,
                ease: "power3.out",
            });

            ScrollTrigger.matchMedia({
                // Only run this animation for desktop (screen width >= 1024px)
                "(min-width: 686px)": function () {
                    gsap.from("footer .header h2", {
                        scrollTrigger: {
                            trigger: "footer .header",     // element to watch
                            start: "top 95%",      // when element hits 80% of viewport
                            toggleActions: "play none none none" 
                            // play | pause | reverse | reset
                            },
                        x: -150,// move from below       
                        opacity: 0,// start invisible 
                        stagger: 0.5,
                        duration: 1.5,
                        ease: "power3.out",
                    });
                    gsap.from("footer .header .btn", {
                        scrollTrigger: {
                            trigger: "footer .header",     // element to watch
                            start: "top 95%",      // when element hits 80% of viewport
                            toggleActions: "play none none none" 
                            // play | pause | reverse | reset
                            },
                        x: 150,// move from below       
                        opacity: 0,// start invisible 
                        stagger: 0.5,
                        duration: 1.5,
                        ease: "power3.out",
                    });
                    gsap.from("footer .mid .left, footer .mid .right", {
                        scrollTrigger: {
                            trigger: "footer .mid",     // element to watch
                            start: "top 95%",      // when element hits 80% of viewport
                            toggleActions: "play none none none" 
                            // play | pause | reverse | reset
                            },
                        y: 100,// move from below       
                        opacity: 0,// start invisible 
                        stagger: 0.3,
                        duration: 1,
                        ease: "power3.out",
                    });
                    gsap.from("footer>.bottom", {
                        scrollTrigger: {
                            trigger: "footer>.bottom",     // element to watch
                            start: "top 98%",      // when element hits 80% of viewport
                            toggleActions: "play none none none" 
                            // play | pause | reverse | reset
                            },
                        y: 50,// move from below       
                        opacity: 0,// start invisible 
                        delay: 0.2,
                        duration: 1,
                        ease: "power3.out",
                    });

                },

                // When the screen width is less than 1024px, kill the animation
                "(max-width: 685px)": function () {
                    gsap.from("footer .header, footer .mid, footer .bottom", {
                        scrollTrigger: {
                            trigger: "footer .header",     // element to watch
                            start: "top 95%",      // when element hits 80% of viewport
                            toggleActions: "play none none none" 
                            // play | pause | reverse | reset
                            },
                        y: 100,// move from below       
                        opacity: 0,// start invisible 
                        stagger: 0.3,
                        duration: 1.5,
                        ease: "power3.out",
                    });
                }
            });
        
            gsap.from(".services-section .post.one", {
                scrollTrigger: {
                    trigger: ".services-section .post.one",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 50,       // move from below
                opacity: 0,   // start invisible
                duration: 1.5,
                ease: "power3.out",
            });
        
        
            gsap.from(".services-section .post.two", {
                scrollTrigger: {
                    trigger: ".services-section .post.two",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 50,       // move from below
                opacity: 0,   // start invisible
                duration: 1.5,
                ease: "power3.out",
            });
        
        
            gsap.from(".services-section .post.three", {
                scrollTrigger: {
                    trigger: ".services-section .post.three",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 50,       // move from below
                opacity: 0,   // start invisible
                duration: 1.5,
                ease: "power3.out",
            });
        
        
            gsap.from(".services-section .post.four", {
                scrollTrigger: {
                    trigger: ".services-section .post.four",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 50,       // move from below
                opacity: 0,   // start invisible
                duration: 1.5,
                ease: "power3.out",
            });

        


            gsap.from(".hero .header h1", {
                scrollTrigger: {
                    trigger: ".hero .header",     // element to watch
                    start: "top 50%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(".hero .header p", {
                scrollTrigger: {
                    trigger: ".hero .header",     // element to watch
                    start: "top 50%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 1,
                delay: 0.5,
                ease: "power3.out",
            });

            gsap.from(".about-section .header h4, .about-section .header h2", {
                scrollTrigger: {
                    trigger: ".about-section .header",     // element to watch
                    start: "top 80%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 1.5,
                stagger: 0.5,
                ease: "power3.out",
            });
            gsap.from(".about-section .images", {
                scrollTrigger: {
                    trigger: ".about-section .images",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 1.5,
                ease: "power3.out",
            });

            gsap.from(".awards .header h3, .awards .header h2, .awards .header p", {
                scrollTrigger: {
                    trigger: ".awards .header",     // element to watch
                    start: "top 80%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 1.5,
                stagger: 0.5,
                ease: "power3.out",
            });

            gsap.from(".awards .lineup .award", {
                scrollTrigger: {
                    trigger: ".awards .header",     // element to watch
                    start: "top 80%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 1,
                stagger: 0.5,
                ease: "power3.out",
            });

            gsap.from(".reasons .header h3, .reasons .header h2, .reasons .header p", {
                scrollTrigger: {
                    trigger: ".reasons .header",     // element to watch
                    start: "top 80%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 1,
                stagger: 0.5,
                ease: "power3.out",
            });

            gsap.from(".reasons .cards .post.one", {
                scrollTrigger: {
                    trigger: ".reasons .cards .post.one",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 1,
                ease: "power3.out",
            });
            gsap.from(".reasons .cards .post.two", {
                scrollTrigger: {
                    trigger: ".reasons .cards .post.two",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(".team .header h3, .team .header h2", {
                scrollTrigger: {
                    trigger: ".team .header",     // element to watch
                    start: "top 80%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 1,
                stagger: 0.5,
                ease: "power3.out",
            });

            gsap.from(".team .members-grid", {
                scrollTrigger: {
                    trigger: ".team .members-grid",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(".contact-form .header h3, .contact-form .header h2", {
                scrollTrigger: {
                    trigger: ".contact-form .header",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 1,
                stagger: 0.5,
                ease: "power3.out",
            });

            gsap.from(".contact-form form", {
                scrollTrigger: {
                    trigger: ".contact-form form",     // element to watch
                    start: "top 90%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 1,
                stagger: 0.5,
                ease: "power3.out",
            });
            gsap.from(".error h2, .error h3, .error>p, .error .btn", {
                scrollTrigger: {
                    trigger: ".error",     // element to watch
                    start: "top 50%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 1,
                stagger: 0.5,
                ease: "power3.out",
            });
            gsap.from(".project-details", {
                scrollTrigger: {
                    trigger: ".project-details",     // element to watch
                    start: "top 80%",      // when element hits 80% of viewport
                    toggleActions: "play none none none" 
                    // play | pause | reverse | reset
                    },
                y: 100,       // move from below
                opacity: 0,   // start invisible
                duration: 2,
                ease: "power3.out",
            });



    const menuBtn = document.getElementById('menubtn');
    const menuLinks = document.getElementById('menulinks');

    menuBtn.addEventListener('click', function() {
        menuLinks.classList.toggle('active');
    });

    const question = document.getElementById('quesTion');
    const answer = document.getElementById('answer')
    const question1 = document.getElementById('quesTion1');
    const answer1 = document.getElementById('answer1')
    const question2 = document.getElementById('quesTion2');
    const answer2 = document.getElementById('answer2')
    const question3 = document.getElementById('quesTion3');
    const answer3 = document.getElementById('answer3')
    const question4 = document.getElementById('quesTion4');
    const answer4 = document.getElementById('answer4')

    question.addEventListener('click', function() {
        question.classList.toggle('active')
        answer.classList.toggle('active');
    });
    question1.addEventListener('click', function() {
        question1.classList.toggle('active')
        answer1.classList.toggle('active');
    });
    question2.addEventListener('click', function() {
        question2.classList.toggle('active')
        answer2.classList.toggle('active');
    });
    question3.addEventListener('click', function() {
        question3.classList.toggle('active')
        answer3.classList.toggle('active');
    });
    question4.addEventListener('click', function() {
        question4.classList.toggle('active')
        answer4.classList.toggle('active');
    });



});
    // });




// const wrapper = document.querySelector(".clients");
// const clients = document.querySelectorAll(".review");
// const total = clients.length;

// let currentIndex = 0;
// const clientWidth = clients[0].offsetWidth + 27.5; // item width + gap

// function goToSlide(index) {
//   currentIndex = (index + total) % total; // wrap around
//   wrapper.style.transform = `translateX(-${currentIndex * clientWidth}px)`;
// }

// // autoplay
// let autoPlay = setInterval(() => goToSlide(currentIndex + 1), 5000);

// // controls
// document.getElementById("next").addEventListener("click", () => {
//   clearInterval(autoPlay);
//   goToSlide(currentIndex + 1);
//   autoPlay = setInterval(() => goToSlide(currentIndex + 1), 3000);
// });

// document.getElementById("prev").addEventListener("click", () => {
//   clearInterval(autoPlay);
//   goToSlide(currentIndex - 1);
//   autoPlay = setInterval(() => goToSlide(currentIndex + 1), 3000);
// });



const wrapper = document.querySelector(".clients");
const clients = document.querySelectorAll(".review");
const total = clients.length;

let currentIndex = 0;

// Function to get the correct gap based on screen size
function getGap() {
  return window.innerWidth <= 768 ? 22.5 : 27.5; // 👈 change breakpoint if needed
}

// Function to calculate clientWidth dynamically
function getClientWidth() {
  return clients[0].offsetWidth + getGap();
}

function goToSlide(index) {
  currentIndex = (index + total) % total; // wrap around
  wrapper.style.transform = `translateX(-${currentIndex * getClientWidth()}px)`;
}

// autoplay
let autoPlay = setInterval(() => goToSlide(currentIndex + 1), 5000);

// controls
document.getElementById("next").addEventListener("click", () => {
  clearInterval(autoPlay);
  goToSlide(currentIndex + 1);
  autoPlay = setInterval(() => goToSlide(currentIndex + 1), 3000);
});

document.getElementById("prev").addEventListener("click", () => {
  clearInterval(autoPlay);
  goToSlide(currentIndex - 1);
  autoPlay = setInterval(() => goToSlide(currentIndex + 1), 3000);
});

// Optional: update on window resize
window.addEventListener("resize", () => {
  goToSlide(currentIndex); // ensures slider doesn't misalign on resize
});
