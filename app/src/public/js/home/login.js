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
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    }).then((res) => res.json()
    ).then((res) => {
      if(res.success == true){
        location.href = '/';
      }else{
        alert(res.msg);
      }
    });
    
    /* ).then((res) => {
      if(res.success == true){
        location.href = '/';
      }else{
        alert(res.msg);
      }
    })
 */    /* .catch((err) => {
        console.error(new Error('로그인 중 에러 발생'));
    }) */
}

button.addEventListener('click',loginFn);

