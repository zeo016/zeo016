import "../colors/contact.css"

var inputs = document.getElementsByClassName('formulario__input')
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keyup',function(){
            if(this.value.length>=2) {
                this.nextElementSibling.classList.add('anclar')
            }else{
                this.nextElementSibling.classList.remove('anclar')
            }
        })
}

// const $form = document.querySelector("#form")
// $form.addEventListener("submit",(event)=>{
//     event.
// })