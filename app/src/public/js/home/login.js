"use strict";

const id = document.querySelector("#id");
const password = document.querySelector('#password');
const button = document.querySelector('#button');

const loginFn = () => {
    const req = {
        id : id.value,
        password : password.value
    };

    fetch("/login",{
        method : "POST",
        header : {
            "Content-Type" : "applicaton/json"
        },
        body : JSON.stringify(req),
    });
}

button.addEventListener('click',loginFn);

