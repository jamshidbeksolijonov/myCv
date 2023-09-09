window.addEventListener('DOMContentLoaded', function () {
    this.window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0)
    })

    const scrollBtn = document.querySelector('.scrolltotop')
    window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('active', window.screenY > 500)
    })
    window.addEventListener('scroll', () => {
        let reveals = document.querySelectorAll('.reveal')
    
        for(let i = 0; i< reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let revealTop = reveals[i].getBoundingClientRect().top;
          let revealPoint = 50;
    
          if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active')
          }
        }
      })    
})