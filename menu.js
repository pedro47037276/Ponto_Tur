
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let btnFechar = document.getElementById('fechar')

btnMenu.addEventListener('click', ()=>{
      menu.classList.add('abrir-menu')
})
btnFechar.addEventListener('click', ()=>{
      menu.classList.remove('abrir-menu')
})