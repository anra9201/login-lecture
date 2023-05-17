'use strict';

const User = require('../../modules/User');
console.log(User);
const output = {
    home : (req,res) => {
        res.render('home/index');
    },
    login : (req,res) => {
        res.render('home/login');
    },
};

const process = {
    login : (req,res) => {
        console.log(req);
        const user = new User(req.body);
        console.log(user);
        const response = user.login();
        console.log(response);
    },
}
// ket,value 형식에서 value가 key와 명칭이 같으면 key만 입력해도 사용 가능
module.exports = {
    output,
    process,
}