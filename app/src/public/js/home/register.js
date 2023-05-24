"use strict";

const id = document.querySelector("#id")
    , name = document.querySelector('#name')
    , password = document.querySelector('#password')
    , confirmPassword = document.querySelector('#confirm-password')
    , button = document.querySelector('#button')

    
const registerFn = () => {

  if(id.value === ''){
    alert('아이디가 없습니다.');
    return ;
  }

  if(password.value !== confirmPassword.value){
    alert('비밀번호가 맞지 않습니다.');
    return ;
  }

  const req = {
    id : id.value,
    name : name.value,
    password : password.value,
  };
  console.log(req);
  fetch("/register",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    }).then((res) => res.json()
    ).then((res) => {
      console.log('aaaaa');
      console.log(res);
      if(res.success == true){
        location.href = '/login';
      }else{
        alert(res.msg);
      }
    }).catch((err) => {
        console.error(new Error('회원가입 중 에러 발생'));
    })
}

button.addEventListener('click',registerFn);

