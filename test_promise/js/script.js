const container = document.querySelector(".main") 

function showCards() {
    for(let i = 0; i < 8; i++) {
    
        container.innerHTML += `
            <div class="element">
                <div class="element__img"></div>
                <div class="element__title">Title</div>
            </div>
        `
    }
}

showCards();

function checkPosition() {
    // Высота документа и экрана
    const height = document.body.offsetHeight
    const screenHeight = window.innerHeight
  
    // Сколько пикселей уже проскроллили
    const scrolled = window.scrollY
  
    // Порог
    const threshold = height - screenHeight / 4
  
    // Низ экрана относительно страницы
    const position = scrolled + screenHeight
  
    if (position >= threshold) {
        showCards();
    }
}

function throttle(callee, timeout) {
    let timer = null
  
    return function perform(...args) {
      if (timer) return
  
      timer = setTimeout(() => {
        callee(...args)
  
        clearTimeout(timer)
        timer = null
      }, timeout)
    }
}
  

(() => {
    window.addEventListener('scroll', throttle(checkPosition, 500))
    window.addEventListener('resize', throttle(checkPosition, 500))
  })()
  
  
  