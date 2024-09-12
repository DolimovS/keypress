

// contextmenu  mishkaning omg tomoni bosilganda ishlaydi
// keypress 



const body=document.getElementById("body")
console.log(body);

body.addEventListener("keypress",(e)=>{
    // console.log(e);
    code.textContent=e.code
    key.textContent=e.key
    type.textContent=e.type
    if(e.code==="Space"){ key.textContent="Space"}
    // console.log(code_e,key_e,type_e);

})