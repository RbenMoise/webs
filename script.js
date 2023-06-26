let menu = document.querySelector('#menubar')
let mynav = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}