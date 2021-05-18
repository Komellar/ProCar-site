document.addEventListener('DOMContentLoaded', function(){

    // NAVBAR - close navbar while option choosen (mobile phones)
    const navItems = document.querySelectorAll('.nav-item');
    const nav = document.querySelector('.navbar-collapse');

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', function(){
            nav.classList.remove('show');
        })
    }
      
})
