const boton = document.getElementById("boton")
const password= document.getElementById("password")
const copyText = document.getElementById("copy")

let letras = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$()//%||=?¡"



function contraGen(passLen = 10){


    let contra = "";

    for (let i = 0; i < passLen; i++) {
  
        let randomNum=Math.floor(Math.random() * letras.length);
        contra += letras.substring(randomNum,randomNum +1);
    
    }
    return contra;


}


boton.addEventListener("click",()=>{
    const pass=contraGen()
    password.value=pass
    

    
})

copyText.addEventListener("click",()=>{
    const text = copy()
    copyText.value=text
})

function copy(){
    let coyptext = document.getElementById("password")
    coyptext.select();
    document.execCommand("copy")
}