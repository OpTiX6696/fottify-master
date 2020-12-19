const menu = document.querySelector('.ham-menu'); 
        const nav = document.querySelector('.mobile-nav');
        const dashes = document.querySelectorAll('.dash');
        console.log(dashes);

        menu.addEventListener('click', () => {

            let navOpen = menu.classList.contains('nav-open')

            if (!navOpen) {
                nav.style.top = '0'
                nav.style.marginBottom = '0'
                menu.classList.remove('nav-close')
                menu.classList.add('nav-open')
                dashes[0].style.transform = 'rotate(34deg)'
                dashes[1].style.display = 'none'
                dashes[2].style.transform = 'rotate(-34deg)'

            } 
            
            if (navOpen) {
                nav.style.top = '-100px'
                nav.style.marginBottom = '-100px'
                menu.classList.add('nav-close')
                menu.classList.remove('nav-open')
                dashes[0].style.transform = 'rotate(0deg)'
                dashes[1].style.display = 'block'
                dashes[2].style.transform = 'rotate(-0deg)'

            }
            

            })