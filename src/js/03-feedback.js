// 1. Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('form'),
}

const LOCAL_STORAGE = "feedback-form-state";

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormIput, 500));

initInput();

function onFormIput(event) {
    function onFormIput(event) {
    let savedData = localStorage.getItem(LOCAL_STORAGE);
    if (savedData) {
        savedData = JSON.parse(savedData);
    }else{
    savedData = {}
    }
    savedData[event.target.name] = event.target.value;
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(savedData));

    console.log(savedData);
}
}
// 3. Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями
function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(LOCAL_STORAGE);
}
// 2. Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.

function initInput() {
    let savedData = localStorage.getItem(LOCAL_STORAGE);
    if (savedData) {
        savedData = JSON.parse(savedData);
    }
    Object.entries(savedData).forEach(([name, value]) => {
    refs.form.elements[name].value = value;
    
    
    console.log(savedData.email);
    console.log(savedData.message);
    console.log(refs.form.email.value);
    console.log(refs.form.message.value);
    console.log(refs.form);
    }) 
 }



// const refs = {
//     form: document.querySelector('.feedback-form'),
//     textarea: document.querySelector('textarea'),
// }
// const KEY = 'feedback';
// populateTextarea();


// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000));

// function onFormSubmit(e) {
//     e.preventDefault();
//     e.currentTarget.reset();
//     localStorage.removeItem(KEY);

// }

// function onTextareaInput(e) {
//     const message = e.currentTarget.value;
//     localStorage.setItem(KEY, message);
// }

// function populateTextarea() {
//     const savedMessage = localStorage.getItem(KEY);

//     if (savedMessage) { 
//         refs.textarea.value = savedMessage;
//     }
// }




