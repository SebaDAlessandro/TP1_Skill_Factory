const inputName = document.querySelector('#inputName')
const inputEmail = document.querySelector('#inputEmail')
const formMensaggeId = document.querySelector('#formMensaggeId')

const formBtn = document.querySelector('#formBtn')

formBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log('Name: ', inputName.value)
    console.log('Email: ', inputEmail.value)
    console.log('Mensagge: ', formMensaggeId.value)
    inputName.value = '';
    inputEmail.value = '';
    formMensaggeId.value = '';
})