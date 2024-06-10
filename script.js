const showMenu = document.querySelector('.showMenu')
const listMenu = document.querySelector('.menu-list')
const closeMenu = document.querySelector('.close-menu--list')



const showMenuToogle = ()=>{
    
    !listMenu.classList.contains('showMenu') ? listMenu.classList.add('showMenu') : listMenu.classList.remove('showMenu')
    console.log('click');
}

showMenu.addEventListener('click',showMenuToogle)
closeMenu.addEventListener('click',showMenuToogle)