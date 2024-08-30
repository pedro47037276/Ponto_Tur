
let btnMenu1 = document.getElementById('btn-menu1')
let menu1 = document.getElementById('menu-mobile1')
let btnFechar1 = document.getElementById('fechar1')

let btnMenu2 = document.getElementById('btn-menu2')
let menu2 = document.getElementById('menu-mobile2')
let btnFechar2 = document.getElementById('fechar2')

btnMenu1.addEventListener('click', ()=>{
      menu1.classList.add('abrir-menu')
})
btnFechar1.addEventListener('click', ()=>{
      menu1.classList.remove('abrir-menu')
})



btnMenu2.addEventListener('click', ()=>{
      menu2.classList.add('abrir-menu2')
})
btnFechar2.addEventListener('click', ()=>{
      menu2.classList.remove('abrir-menu2')
})