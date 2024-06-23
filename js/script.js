document.addEventListener('DOMContentLoaded', function () {
  const burgers = document.querySelectorAll('.burger')
  const menus = document.querySelectorAll('.header__menu-nav')
  const header = document.querySelector('.header')
  const closeBtns = document.querySelectorAll('.close-btn')

  function updateHeaderBackground() {
    const isOpen = Array.from(menus).some((menu) =>
      menu.classList.contains('header__menu--open'),
    )

    if (isOpen) {
      header.classList.add('with-background')
    } else {
      header.classList.remove('with-background')
    }
  }

  burgers.forEach((burger) => {
    burger.addEventListener('click', () => {
      burger.classList.toggle('burger__active')

      menus.forEach((menu) => {
        menu.classList.toggle('header__menu--open')
      })

      updateHeaderBackground()
    })
  })

  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
      menus.forEach((menu) => {
        menu.classList.remove('header__menu--open')
      })

      burgers.forEach((burger) => {
        burger.classList.remove('burger__active')
      })
      updateHeaderBackground()
    })
  })

  menus.forEach((menu) => {
    menu.addEventListener('click', () => {
      burgers.forEach((burger) => {
        burger.classList.remove('burger__active')
      })

      menus.forEach((menu) => {
        menu.classList.remove('header__menu--open')
      })
      updateHeaderBackground()
    })
  })

  const form = document.querySelector('.contact__form')
  const successModal = document.querySelector('#successModal')
  const closeModal = successModal.querySelector('.close')

  form.addEventListener('submit', function (event) {
    event.preventDefault()

    clearErrors()

    let isValid = true

    const nameInput = form.querySelector('#name')
    if (nameInput.value.trim() === '') {
      isValid = false
      showError(nameInput, 'Введите ваше имя.')
    }

    const emailInput = form.querySelector('#email')
    if (emailInput.value.trim() === '') {
      isValid = false
      showError(emailInput, 'Введите ваш email.')
    } else if (!isValidEmail(emailInput.value)) {
      isValid = false
      showError(emailInput, 'Введите корректный email.')
    }

    const messageInput = form.querySelector('#message')
    if (messageInput.value.trim() === '') {
      isValid = false
      showError(messageInput, 'Введите ваше сообщение.')
    }

    if (isValid) {
      const formData = new FormData(form)

      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Успешно отправлено:', data)
          showModal()
          form.reset()
        })
        .catch((error) => {
          console.error('Ошибка:', error)
          alert('Произошла ошибка при отправке формы.')
        })
    }
  })

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
  }

  function showError(input, message) {
    const errorMessage = input.parentNode.querySelector('.error-message')
    errorMessage.textContent = message
    errorMessage.classList.add('active')
  }

  function clearErrors() {
    const errorMessages = form.querySelectorAll('.error-message')
    errorMessages.forEach((errorMessage) => {
      errorMessage.textContent = ''
      errorMessage.classList.remove('active')
    })
  }

  function showModal() {
    successModal.style.display = 'block'
  }

  closeModal.addEventListener('click', function () {
    successModal.style.display = 'none'
  })

  window.addEventListener('click', function (event) {
    if (event.target === successModal) {
      successModal.style.display = 'none'
    }
  })
})
