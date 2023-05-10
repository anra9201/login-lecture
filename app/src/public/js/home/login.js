"use strict";

const id = document.querySelector("#id");
const password = document.querySelector('#password');
const button = document.querySelector('#button');

const loginFn = () => {
    const returnObj = {
        id : id.value,
        password : password.value
    };
    console.log(returnObj);
}

button.addEventListener('click',loginFn);

