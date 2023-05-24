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

    static #getUserVOInfo(isAll,data,id){
        const tempUserIdArr = JSON.parse(data);
        if(isAll){
            return tempUserIdArr;
        }
        const idx = tempUserIdArr.userId.indexOf(id);
        const keys = Object.keys(tempUserIdArr);
        const userInfo = keys.reduce((userInfo,field) => {
            if(tempUserIdArr.hasOwnProperty(field)){
                userInfo[field] = tempUserIdArr[field][idx];
            }
            return userInfo;
        } , {});
        return userInfo;
    }

    static #getUserInfo(isAll,...fields){
        return fs.readFile('./src/databases/users.json')
        .then((data) => {
            // 16진수로 출력하기 때문에 Json.parse 파싱
            return this.#getUserVOInfo(isAll,data,fields);

        }).catch((err) => { console.error(err)});
    }

    // 파라미터를 ... + 변수명 형태로 받으면 전달 받은 파라미터를 배열 형식을 받음
    // static getUserInfo(...fields){ 
    //     // const user = this.#user;
    //     // Array.reduce 배열 형태면 사용 가능 반복을 하는 기능 파라미터(함수에서 리턴한 변수 받음 , 배열을 변수) 
    //     // , 함수 , 초기화 선언)
    //     const newUserVO = fields.reduce((newUserVO,field) => {
    //         if(user.hasOwnProperty(field)){
    //             newUserVO[field] = user[field];
    //         }
    //         return newUserVO;
    //     } , {});

    //     return newUserVO;
    // }

    static getUserVOInfo(id){
        // const tempUser = this.#user;
        return fs.readFile('./src/databases/users.json')
        .then((data) => {
            // 16진수로 출력하기 때문에 Json.parse 파싱
            return this.#getUserVOInfo(false,data,id);

        }).catch((err) => { console.error(err)});

    }
    
    static async setUserVOInfo(userInfo) {

        // users.json 파일 읽는 함수 
        // 아이디 검증 
        // 데이터 저장
        // const setUserInfoArr = this.#user;
        const data = await this.#getUserInfo(true);

        if(data.userId.includes(userInfo.id)){
            throw "아이디가 존재합니다.";
        }

        // const data = await fs.readFile('./src/databases/users.json');
        // const setUserInfoArr = JSON.parse(data);
        data.userId.push(userInfo.id)
        data.userNm.push(userInfo.name);
        data.userPw.push(userInfo.password)
        fs.writeFile('./src/databases/users.json',JSON.stringify(data));
        
        return { success : true}
    }
}

module.exports = UserVO;