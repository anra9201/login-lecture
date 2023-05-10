"use strict";

const id = document.querySelector("#id");
const password = document.querySelector('#password');
const button = document.querySelector('#button');

const loginFn = () => {
    const req = {
        id : id.value,
        password : password.value
    };
    console.log(req);
    fetch("/login",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    }).then((res) => res.json()
    ).then(console.log);
}

button.addEventListener('click',loginFn);

