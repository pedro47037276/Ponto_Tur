
let btnMenu2 = document.getElementById('btn-menu2')
let menu2 = document.getElementById('menu-mobile2')
let btnFechar2 = document.getElementById('fechar2')

btnMenu2.addEventListener('click', ()=>{
    menu2.classList.add('abrir-menu2')
})
btnFechar2.addEventListener('click', ()=>{
    menu2.classList.remove('abrir-menu2')
})