


let butt = document.querySelector('button')
let inp = document.querySelectorAll ('input')    

butt.onclick = () => {
    let result = 0 
   if(inp[0].value == "tokyo" || inp[0].value == "Tokyo"  ){
    result = result+25
   }
   if(inp[1].value == 'washington' || inp[1].value == 'Washington'){
    result = result+25
   }
   if(inp[2].value == 'pekin' || inp[2].value == 'Pekin'){
    result = result+25
   }
   if(inp[3].value == 'seyl' || inp[3].value == 'Seyl'){
    result = result+25
   }

//    alert(result)
document.body.innerHTML = `<h1> ${result} </h1>`
}

const swit = document.querySelector('.swich')
var block = document.querySelector('.block')
swit.onclick = () =>{
document.body.classList.toggle('newClass')
swit.classList.toggle('swich2')
block.classList.toggle('block2')
}