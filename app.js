let interruptor = document.getElementById('header__interruptor')
let root = document.documentElement

interruptor.addEventListener('click', () =>{
    root.classList.toggle('tema-claro')
})