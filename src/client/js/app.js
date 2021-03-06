import $ from 'jquery'
import Aos from 'aos'
import { gsap } from "gsap";
import Sticky from 'sticky-js'

export const init = function () {

  var element1 = document.getElementsByClassName('chart')[0];
  var element2 = document.getElementsByClassName('chart')[1];
  var element3 = document.getElementsByClassName('chart')[2];
  var element4 = document.getElementsByClassName('chart')[3];
  var toggleButton = document.querySelector('.toggle-menu-wrapper');
  var navBar = document.querySelector('.navbar');
  var mobileNav = document.querySelector('.nav-bar');
  toggleButton.addEventListener('click', function () {
    navBar.classList.toggle('toggle');
    mobileNav.classList.toggle('toggle');
  });

  
  

  

  function isInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }

  function checkIfSectionInView() {
    let initial = true;
    window.addEventListener('scroll', function (event) {
      if (isInViewport(element1) && initial) {
        new EasyPieChart(element1, {
          barColor: '#00AEFF',
          lineWidth: 7,
          size: 150,
          scaleColor: false,
          trackColor: '#373737',
          animate: { enabled: true, duration: 2000 }
        })

        new EasyPieChart(element2, {
          barColor: '#F26C4F',
          lineWidth: 7,
          size: 150,
          scaleColor: false,
          trackColor: '#373737',
          animate: { enabled: true, duration: 2000 }
        });

        new EasyPieChart(element3, {
          barColor: '#00FFBB',
          lineWidth: 7,
          size: 150,
          scaleColor: false,
          trackColor: '#373737',
          animate: { enabled: true, duration: 2000 }
        });

        new EasyPieChart(element4, {
          barColor: '#FFE240',
          lineWidth: 7,
          size: 150,
          scaleColor: false,
          trackColor: '#373737',
          animate: { enabled: true, duration: 2000 }
        });

        initial = false

      } else {

      }
    })
  }

  gsap.to('.layer-1', { y: '-100%', delay: .2 })
  gsap.to('.layer-2', { y: '-100%', delay: .4 })
  gsap.to('.layer-3', { y: '-100%', delay: .5 })
  gsap.to('.page-overlay', { y: '-100%', delay: 1.0 })
  gsap.from('.nav-index', { delay: 1, opacity: 0, duration: 2 })
  gsap.from('.hero-text-wrapper .hi', 0.5, { delay: 1.6, opacity: 0, y: '10rem', ease: 'power1.out' })
  gsap.from('.hero-text-wrapper h1', 0.5, { delay: 1.8, opacity: 0, y: '10rem', ease: 'power1.out' })
  gsap.from('.hero-text-wrapper h3', 0.5, { delay: 2, opacity: 0, y: '10rem', ease: 'power1.out' })
  gsap.from('.hero-text-wrapper .info', 0.5, { delay: 2.2, opacity: 0, y: '10rem', ease: 'power1.out' })
  gsap.from('.hero-text-wrapper a', 0.5, { delay: 2.4, opacity: 0, y: '10rem', ease: 'power1.out' })
  gsap.fromTo('.hero-image-wrapper img', 0.5, {
    x: '30rem',
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    ease: 'power1.out',
    delay: 2
  })

  $(document).ready(
    Aos.init({
      offset: 200,
      delay: 100,
      duration: 600,
      mirror: true,
      once: true
    })
  )

  $(document).ready(function () {
    animateDiv('.a');
    animateDiv('.b');
    
  });

  $(document).ready(function () {
    animateTopDiv('.c');
    animateTopDiv('.e');
    animateTopDiv('.f');
    animateTopDiv('.g');
    animateTopDiv('.i');
    animateTopDiv('.j');
    animateTopDiv('.k');
  });

  function makeNewPosition() {
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh, nw];
  }
  

  function makeNewPositionForTopAnimation() {
    var h = $(document).height() - 50;
    var w = $(window).width() - 50;   
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh,nw];    
  }

  function animateDiv(myclass) {
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 9000, function () {
      animateDiv(myclass);
    });
  };

  function animateTopDiv(myclass) {
    var topAnim = makeNewPositionForTopAnimation();
    $(myclass).animate({ top: topAnim[0], left: topAnim[1] }, 9000, function () {
      animateTopDiv(myclass);
    });
  }

  var sticky = new Sticky('.sticky');

  checkIfSectionInView()
}


