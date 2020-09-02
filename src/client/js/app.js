

export const init = function() {

  const closeNav = document.querySelector('.close-btn')
  const openNav = document.querySelector('.open-nav') 
  const mobileNav = document.querySelector('.mobile-nav')

  closeNav.addEventListener('click', () => {
    mobileNav.classList.remove('open')
  })

  openNav.addEventListener('click', () => {
   mobileNav.classList.add('open')
  })
}
