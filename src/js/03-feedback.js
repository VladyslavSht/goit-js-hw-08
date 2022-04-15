import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');
const submit = document.querySelector('button');

form.addEventListener("input", throttle(handleInput, 500));

submit.addEventListener('click', handleSubmit);

const savedForm = localStorage.getItem("feedback-form-state");
const parsedForm = JSON.parse(savedForm);
let objForShow;

function isEmptyEmail() {
    if(parsedForm.email === undefined){
        return input.value = "";   
    }
    input.value = parsedForm.email;
}

function isEmptyMessage() {
    if(parsedForm.message === undefined) {
        return textArea.value = "";
    }
    textArea.value = parsedForm.message;
}

function getForm() {
    if(savedForm) {
    isEmptyEmail();
    isEmptyMessage();
    }
}

function handleInput(e) {
    
    let email = form.elements.email.value;
    let message = form.elements.message.value;

    const formData = {
        email,
        message
    }

    objForShow = formData;

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function handleSubmit(e) {
    e.preventDefault();

     if(localStorage.getItem("feedback-form-state")){
    
        if((JSON.parse(localStorage.getItem("feedback-form-state")).email !== "" & JSON.parse(localStorage.getItem("feedback-form-state")).message !== "")){
    console.log(localStorage.getItem("feedback-form-state"));
    localStorage.removeItem("feedback-form-state");
    form.reset();
     }   
}
}

getForm();






