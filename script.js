const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const telInput = document.getElementById('phoneNumber');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const inputs = document.querySelectorAll('input');
const submitBtn = document.getElementById('submitBtn');
const passwordMessage1 = document.getElementById('passwordMessage1');
const passwordMessage2 = document.getElementById('passwordMessage2');
const firstNameSpan = document.getElementById('firstNameValidity');
const lastNameSpan = document.getElementById('lastNameValidity');


passwordMessage1.classList.remove('password1-input');
passwordMessage2.classList.remove('password2-input');
firstNameSpan.classList.remove('first-name-input')
lastNameSpan.classList.remove('last-name-input')

inputs.forEach(function(input){
    input.addEventListener('blur', ()=>{
        if(input.validity.valid){
            input.classList.add('input-valid')
        }
        else{
            input.classList.remove('input-valid')
        }
    })
})

firstNameInput.addEventListener('input', ()=>{
    let firstName = firstNameInput.value;
    let containsNumbers = /\d/.test(firstName);
    if(containsNumbers){
        firstNameSpan.classList.add('first-name-input')
        firstNameInput.classList.add('error')
    }
    else{
        firstNameSpan.classList.remove('first-name-input')
        firstNameInput.classList.remove('error')
    }
})


lastNameInput.addEventListener('input', ()=>{
        let lastName = lastNameInput.value;
        let containsNumbers = /\d/.test(lastName);
        if(containsNumbers){
            lastNameSpan.classList.add('last-name-input')
            lastNameInput.classList.add('error')
        }
        else{
            lastNameSpan.classList.remove('last-name-input')
            lastNameInput.classList.remove('error')
        }
})


emailInput.addEventListener('blur', () =>{
    if(emailInput.value===""){
       
    }
    else{
        if(!emailInput.value.includes('@')){
            emailInput.setCustomValidity('Please enter a valid email.')
        }
        else{
            emailInput.setCustomValidity('');
        }
        emailInput.reportValidity();
    }
    
})

telInput.addEventListener('blur', () =>{
    if(telInput.value===""){
        
    }
    else{
        if(isNaN(parseInt(telInput.value))){
            telInput.setCustomValidity('Please enter a valid phone number')
        }
        else{
            telInput.setCustomValidity('');
        }
        telInput.reportValidity();
    }
})

password1.addEventListener('input', ()=>{
    if(password1.value.length<8){
        password1.classList.add('error')
        passwordMessage1.classList.add('password1-input');
    }
    else{
        password1.classList.remove('error')
        passwordMessage1.classList.remove('password1-input');
    }
})

password2.addEventListener('input', ()=>{
    if(password1.value!==password2.value){
        password2.classList.add('error')
        passwordMessage2.classList.add('password2-input');
    }
    else{
        password2.blur();
        password2.classList.remove('error')
        passwordMessage2.classList.remove('password2-input');
    }
})

submitBtn.addEventListener('click', ()=>{
    checkFirstName();
    checkLastName();
})

function checkFirstName(){
    let firstName = firstNameInput.value;
    let containsNumbers = /\d/.test(firstName);
    if(containsNumbers){
        firstNameInput.setCustomValidity('Please enter a valid name(Without 1,2,3,+,*,-...)')
    }
    else{
        firstNameInput.setCustomValidity('')
    }
    firstNameInput.reportValidity();
}

function checkLastName(){
    let lastName = lastNameInput.value;
    let containsNumbers = /\d/.test(lastName);
    if(containsNumbers){
        lastNameInput.setCustomValidity('Please enter a valid last name(Without 1,2,3,+,*,-...)')
    }
    else{
        lastNameInput.setCustomValidity('')
    }
    lastNameInput.reportValidity();
}

