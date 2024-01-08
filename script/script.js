function ClickShowUnshow() {
  let clicks = document.querySelector('.menu-ph');
  clicks.classList.toggle("menu-ph-block");
}

let shift = document.querySelectorAll('.show')
for(let i = 0; i<= shift.length; i++){


  shift[i].addEventListener('click', ()=>{
    let hiu = document.querySelector('.menu-ph')
    hiu.classList.toggle("menu-ph-block");
  });
  
}






