"use strict";

const UserVO = require('./UserVO');

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const clint = this.body;
        // const { userId , userPw } = UserVO.getUserVOInfo(clint.id);
        const { USER_ID, USER_PW } = await UserVO.getUserVOInfo(clint.id);
        const userId = USER_ID;
        const userPw = USER_PW;
        console.log(userId);
        console.log(userPw);
        if(userId){
            if( userId === clint.id && userPw === clint.password) {
                return { success : true};
            }
            return { success : false , msg : '비밀번호가 틀렸습니다.' };
        }
        return { success : false , msg : '존재하지 않는 아이디 입니다.'};
    }

    async save(){
        const clint = this.body
        try{
            const res = await UserVO.setUserVOInfo(clint);
            console.log(res);
            return res;
        }catch(err){
            console.log(err);
            return { success : false , msg : err};
        }
    }
}

module.exports = User;