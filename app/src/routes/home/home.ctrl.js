'use strict';

const output = {
    home : (req,res) => {
        res.render('home/index');
    },
    login : (req,res) => {
        res.render('home/login');
    },
};

const user = require('../../modules/UserVO');

console.log(user);
console.log(user.getUserInfo('userPw'));


const process = {
    login : (req,res) => {
        const id = req.body.id;
        const pw = req.body.password;
        let response = {};
        if(user.userId.includes(id)){
            const idx = user.userId.indexOf(id);
            if(user.userPw[idx] === pw){
                response.success = true
                return res.json(response)
            }
        }
 
        response.success = false;
        response.msg = '로그인에 실패하였습니다.';
        return res.json(response);
    },
}
// ket,value 형식에서 value가 key와 명칭이 같으면 key만 입력해도 사용 가능
module.exports = {
    output,
    process,
}