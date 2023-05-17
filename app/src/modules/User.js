"use strict";

const UserVO = require('./UserVO');

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const body = this.body;
        const { userId , userPw } = UserVO.getUserVOInfo(body.id);

        if(userId){
            if( userId === body.id && userPw === body.password) {
                return { success : true};
            }
            return { success : false , msg : '비밀번호가 틀렸습니다.' };
        }
        return { success : false , msg : '존재하지 않는 아이디 입니다.'};
    }
}

module.exports = User;