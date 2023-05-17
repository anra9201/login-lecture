"use strict";

const id = document.querySelector("#id")
    , name = document.querySelector('#name')
    , password = document.querySelector('#password')
    , confirmPassword = document.querySelector('#confirm-password')
    , button = document.querySelector('#button')

    
const registerFn = () => {
    const req = {
        id : id.value,
        name : name.value,
        password : password.value,
        confirmPassword : confirmPassword.value,
    };
    
    console.log(req);

    // fetch("/register",{
    //     method : "POST",
    //     headers : {
    //         "Content-Type" : "application/json",
    //     },
    //     body : JSON.stringify(req),
    // }).then((res) => res.json()
    // ).then((res) => {
    //    console.log(res);
    //   // if(res.success == true){
    //   //   location.href = '/';
    //   // }else{
    //   //   alert(res.msg);
    //   // }
    // }).catch((err) => {
    //     console.error(new Error('회원가입 중 에러 발생'));
    // })
}

button.addEventListener('click',registerFn);

