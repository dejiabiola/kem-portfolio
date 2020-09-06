import $ from 'jquery'
import Aos from 'aos'
import { gsap } from "gsap";

export const init = function () {

  const closeNav = document.querySelector('.close-btn')
  const openNav = document.querySelector('.open-nav')
  const mobileNav = document.querySelector('.mobile-nav')

  closeNav.addEventListener('click', () => {
    mobileNav.classList.remove('open')
  })

  openNav.addEventListener('click', () => {
    mobileNav.classList.add('open')
  })


  var element1 = document.getElementsByClassName('chart')[0];
  var element2 = document.getElementsByClassName('chart')[1];
  var element3 = document.getElementsByClassName('chart')[2];
  var element4 = document.getElementsByClassName('chart')[3];



  function checkIfSectionInView() {
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

  gsap.to('.layer-1', { y: '-100%', delay: .5 })
  gsap.to('.layer-2', { y: '-100%', delay: .7 })
  gsap.to('.layer-3', { y: '-100%', delay: .9 })
  gsap.to('.page-overlay', { y: '-100%', delay: 1.5 })
  gsap.from('nav', { delay: 1.5, opacity: 0, duration: 2 })
  gsap.from('.hero-text-wrapper .hi', 0.5, { delay: 1.9, opacity: 0, y: '10rem', ease: 'power1.out' })
  gsap.from('.hero-text-wrapper h1', 0.5, { delay: 2, opacity: 0, y: '10rem', ease: 'power1.out' })
  gsap.from('.hero-text-wrapper h3', 0.5, { delay: 2.2, opacity: 0, y: '10rem', ease: 'power1.out' })
  gsap.from('.hero-text-wrapper .info', 0.5, { delay: 2.4, opacity: 0, y: '10rem', ease: 'power1.out' })
  gsap.from('.hero-text-wrapper a', 0.5, { delay: 2.6, opacity: 0, y: '10rem', ease: 'power1.out' })
  gsap.fromTo('.hero-image-wrapper img', 0.5, {
    x: '30rem',
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    ease: 'power1.out',
    delay: 2.3
  })

  $(document).ready(
    Aos.init({
      offset: 200,
      delay: 100,
      duration: 600,
      mirror: true
    })
  )

  $(document).ready(function () {
    animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
    animateDiv('.e');
    animateDiv('.f');
    animateDiv('.g');
    animateDiv('.h');
    animateDiv('.i');
    animateDiv('.j');
    animateDiv('.k');
    animateDiv('.l');
  });

  function makeNewPosition() {

    // Get viewport dimensions (remove the dimension of the div)
    // var h = $(window).height() - 50;
    var h = $(document).height()
    var w = $(window).width() - 50;


    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);


    return [nh, nw];

  }

  function animateDiv(myclass) {
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 9000, function () {
      animateDiv(myclass);
    });

  };

  checkIfSectionInView()
}


