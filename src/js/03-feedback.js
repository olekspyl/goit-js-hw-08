const refs = {
    form: document.querySelector('form'),
}

const array = {};
const LOCAL_STORAGE = "feedback-form-state";

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormIput);

takeTextInput();

function onFormIput(event) {
    array[event.target.name] = event.target.value;
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(array));

    console.log(array);
}

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(LOCAL_STORAGE);
}
    
function takeTextInput() {
    const savedText = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
    refs.form.email.value = savedText.email;
    refs.form.message.value = savedText.message;
    
    console.log(savedText.email);
    console.log(savedText.message);
    console.log(refs.form.email.value);
    console.log(refs.form.message.value);
    console.log(refs.form);

 }
   







