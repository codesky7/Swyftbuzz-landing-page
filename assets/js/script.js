

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



  gsap.from('#features .section-subtitle, #features .section-title', {
    opacity: 0,
    y: 50,
    duration: 1.2,
    scrollTrigger: {
      trigger: "#features",
      start: "top 80%",
      end: "bottom top",
      markers: false,
      scrub: true,
       
    }
  });
  gsap.from('#page-content > section.section-container > div > div.text-container', {
    opacity: 0,
    y: 150,
    stagger: 0.4,
    duration: 1.2,
    scrollTrigger: {
      trigger: "#page-content > section.section-container > div > div.text-container",
      start: "top 80%",
      end: "bottom top",
      markers: false,
      scrub: true,
       
    }
  });
  // Animate each step section within #extra-sec
// Register ScrollTrigger plugin


// Animate each step
gsap.utils.toArray('.step1, .step2, .step3, .step4, .step5, .step6, .step7').forEach((step, i) => {
  // Determine direction based on step index
  const direction = i % 2 === 0 ? 'left' : 'right';

  gsap.fromTo(
    step.querySelector('.step-img'), 
    {
      x: direction === 'left' ? -100 : 100, // Start position
      opacity: 0
    },
    {
      x: 0, // End position
      opacity: 1,
   
      scrollTrigger: {
        trigger: step,
        start: "top 80%", // Animation starts when the top of the element reaches 80% from the top of the viewport
        end: "bottom top",
        markers: false, // Optional: Add markers for debugging
        scrub: true, // Synchronize animation with scroll position
      }
    }
  );

  gsap.fromTo(
    step.querySelector('.step-text'),
    {
      x: direction === 'left' ? 100 : -100, // Start position
      opacity: 0
    },
    {
      x: 0, // End position
      opacity: 1,
 
      scrollTrigger: {
        trigger: step,
        start: "top 80%", // Animation starts when the top of the element reaches 80% from the top of the viewport
        end: "bottom top",
        markers: false, // Optional: Add markers for debugging
        scrub: true, // Synchronize animation with scroll position
      }
    }
  );
});

  
// gsap code 

gsap.from(".hero-text h1", {
  opacity: 0,
  y: 50,
  duration: 1.2,

});

gsap.from(".hero-text p", {
  opacity: 0,
  y: 30,
  delay: 0.3,
  duration: 1,
scrub: true,
});

gsap.from(".cta-buttons img", {
  opacity: 0,
  scale: 0.8,
  delay: 0.6,
  duration: 0.8,
  stagger: 0.2
});

gsap.from(".hero-image img", {
  opacity: 0,
  x: 100,
  delay: 0.9,
  duration: 1.2,

});

// map 

gsap.from('.map-left img', {
  x: 50,

  scrollTrigger: {
    trigger: '.map-left img',
    start: "top 80%",
    end: "bottom top",
    markers: false,
    scrub: true,
    
  }
});

gsap.from('.map-left img', {
  x: 0,
  opacity: 1,
  duration: 1.2,
  scrollTrigger: {
    trigger: '.map-left img',
    start: "top 80%",
    end: "bottom top",
    markers: false,
    scrub: true,
    
  }
});


gsap.from('.map-right img', {
  x: -50,

  scrollTrigger: {
    trigger: '.map-right img',
    start: "top 80%",
    end: "bottom top",
    markers: false,
    scrub: true,
  }
});

gsap.from('.map-right img', {
  x: 0,
  opacity: 1,
  duration: 1.2,
  scrollTrigger: {
    trigger: '.map-right img',
    start: "top 80%",
    end: "bottom top",
    markers: false,
    scrub: true,
  }
});
// Explore Our App

gsap.from('#page3-top h4 , #page3-top h2',{
 
  y: 50,
  duration: 1.2,
  stagger: 0.4,
  scrollTrigger:{
    trigger: '#section3',
    start: "top 80%",
    end: "bottom top",
    markers: false,
  
  }
})



