/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId)
  const nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach((n) => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')
    const activeLink = document.querySelector(
      '.nav__menu a[href*=' + sectionId + ']'
    )

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      activeLink.classList.add('active-link')
    } else if (activeLink != null) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*======================== SHOW SCROLL TOP ================*/
const scrollTop = () => {
  const scrollTop = document.getElementById('scroll-top')
  this.scrollY >= 200
    ? scrollTop.classList.add('show-scroll')
    : scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[
    selectedTheme === 'dark' ? 'add' : 'remove'
  ](darkTheme)
  themeButton.classList[
    selectedIcon === 'bx-moon' ? 'add' : 'remove'
  ](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================REDUCE THE SIZE AND PRINT ON AN a4 */
const scaleCv = () => {
  document.body.classList.add('scale-cv')
}

/*==================REMOVE THE SIZE WHEN THE CV IS DOWNLOADED======================= */
const removeScaleCv = () => {
  document.body.classList.remove('scale-cv')
}

/*================== GENERATE PDF ======================== */
let resumeButton = document.getElementById('resume-button')
let areaCv = document.getElementById('area-cv')

let opt = {
  margin: 0,
  filename: 'VBatsyk_CV.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 4 },
  jsPDF: { format: 'a4', orientation: 'portrait' }
}

function generateResume() {
  html2pdf().set(opt).from(areaCv).save()
}

resumeButton.addEventListener('click', () => {
  scaleCv()
  generateResume()
  setTimeout(removeScaleCv, 5000)
})
