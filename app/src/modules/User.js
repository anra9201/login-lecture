"use strict";

const UserVO = require('./UserVO');

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const clint = this.body;
        const { userId , userPw } = UserVO.getUserVOInfo(clint.id);

        if(userId){
            if( userId === clint.id && userPw === clint.password) {
                return { success : true};
            }
            return { success : false , msg : '비밀번호가 틀렸습니다.' };
        }
        return { success : false , msg : '존재하지 않는 아이디 입니다.'};
    }

    save(){
        const clint = this.body
        const res = UserVO.setUserVOInfo(clint);
        return { success : true};
    }

}

module.exports = User;