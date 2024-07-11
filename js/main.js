document.addEventListener('DOMContentLoaded', () => {
  const modal = () => {
    function openModal(modalSelector, openSelector, closeSelector) {
      const modal = document.querySelector(modalSelector),
        openBtn = document.querySelectorAll(openSelector),
        closeBtn = document.querySelector(closeSelector)

      openBtn.forEach((item) => {
        item.addEventListener('click', (e) => {
          if (e.target) {
            e.preventDefault()
          }

          modal.style.display = 'flex'
          setTimeout(() => {
            modal.classList.add('show')
          }, 10)
          document.body.style.overflow = 'hidden'
        })
      })

      closeBtn.addEventListener('click', () => {
        modal.classList.remove('show')
        document.body.style.overflow = ''
        setTimeout(() => {
          modal.style.display = 'none'
        }, 300)
      })

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('show')
          document.body.style.overflow = ''
          setTimeout(() => {
            modal.style.display = 'none'
          }, 300)
        }
      })
    }

    openModal('.modal', '.button--open', '.close')
  }

  modal()
})
