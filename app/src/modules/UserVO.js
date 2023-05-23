"use strict";

const fs = require('fs').promises;
// proimses를 추가하면 proimses를 반환 함


class UserVO {
    // 변수명 앞에 #를 추가하면 은닉화 할 수 있음
    // static #user = {
    //     userId : ['아이디1','아이디2','아이디3'],
    //     userPw : ['1234','1234','1245'],
    //     userNm : ['이름1','이름2','이름3']
    // }; 
    static #getUserVOInfo(data,id){
        const tempUserIdArr = JSON.parse(data);
        const idx = tempUserIdArr.userId.indexOf(id);
        const keys = Object.keys(tempUserIdArr);
        const userInfo = keys.reduce((userInfo,field) => {
            if(tempUserIdArr.hasOwnProperty(field)){
                userInfo[field] = tempUserIdArr[field][idx];
            }
            return userInfo;
        } , {});

        console.log(userInfo);

        return userInfo;
    }
    // 파라미터를 ... + 변수명 형태로 받으면 전달 받은 파라미터를 배열 형식을 받음
    static getUserInfo(...fields){ 
        // const user = this.#user;
        // Array.reduce 배열 형태면 사용 가능 반복을 하는 기능 파라미터(함수에서 리턴한 변수 받음 , 배열을 변수) 
        // , 함수 , 초기화 선언)
        const newUserVO = fields.reduce((newUserVO,field) => {
            if(user.hasOwnProperty(field)){
                newUserVO[field] = user[field];
            }
            return newUserVO;
        } , {});

        return newUserVO;
    }

    static getUserVOInfo(id){
        // const tempUser = this.#user;
        return fs.readFile('./src/databases/users.json')
        .then((data) => {
            // 16진수로 출력하기 때문에 Json.parse 파싱
            console.log(id);
            return this.#getUserVOInfo(data,id);

        }).catch((err) => { console.error(err)});

    }
    
    static setUserVOInfo(userInfo) {
        // const setUserInfoArr = this.#user;
        setUserInfoArr.userId.push(userInfo.id)
        setUserInfoArr.userNm.push(userInfo.name);
        setUserInfoArr.userPw.push(userInfo.password);
        console.log(setUserInfoArr);
        return { success : true}
    }

}

module.exports = UserVO;