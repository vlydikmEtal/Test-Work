document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

  const tlLoader = gsap.timeline()

  tlLoader.set('.loader__item', {
    yPercent: -100,
  })
  .set('.loader__title', { opacity: 0 })
  .to('.loader__item', {
    yPercent: 0,
    duration: .5,
    stagger: .25,
  })
  .to('.loader__item', {
    yPercent: 100,
    duration: .5,
    stagger: .25,
  })
  .to('.loader__title', {
    opacity: 1,
    duration: 1,
    scale: 1.2,
  })
  .set('.loader__item', {
    yPercent: -100,
  })
  .to('.loader__title', {
    opacity: 0,
    duration: 1,
    scale: .8,
  })
  .to('.loader', {
    yPercent: -100,
    duration: 1,
  }, '-=0.2')

  const laptopScreen = window.matchMedia('(min-width: 992px)')

  if(laptopScreen.matches) {


    gsap.from('.experience__title-box', {
      scrollTrigger: {
        trigger: '.experience__content-title',
        start: '-800 0',
      },
      y: -100,
      autoAlpha: 0,
      duration: 1.2,
    })

    gsap.from('.experience__content-card', {
      scrollTrigger: {
        trigger: '.experience__wrapp',
        start: '-800 0',
      },
      y:- 100,
      x: -150,
      autoAlpha: 0,
      duration: 1.2,
    })

    gsap.from('.contact__image', {
      scrollTrigger: {
        trigger: '.contact__form',
        start: '-900 0',
      },
      y:- 100,
      x: -150,
      autoAlpha: 0,
      duration: 1.2,
    })

    gsap.from('.contact__form', {
      scrollTrigger: {
        trigger: '.contact__image',
        start: '-900 0',
      },
      y:- 100,
      x: 150,
      autoAlpha: 0,
      duration: 1.2,
    })

  }

  const mobileScreen = window.matchMedia('(max-width: 880px)')

  if(mobileScreen.matches) {
    
    gsap.from('.experience__title-box', {
      scrollTrigger: {
        trigger: '.experience__content-title',
        start: '-700 0',
      },
      y: -100,
      autoAlpha: 0,
      duration: 1.2,
    })

    gsap.from('.experience__content-card', {
      scrollTrigger: {
        trigger: '.experience__wrapp',
        start: '-450 0',
      },
      y:- 100,
      x: -150,
      autoAlpha: 0,
      duration: 1.2,
    })

    gsap.from('.contact__form', {
      scrollTrigger: {
        trigger: '.contact__image',
        start: '-650 0',
      },
      y:- 100,
      x: 150,
      autoAlpha: 0,
      duration: 1.2,
    })

  }

})