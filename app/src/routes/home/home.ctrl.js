'use strict';

const User = require('../../modules/User');

const output = {
    home : (req,res) => {
        res.render('home/index');
    },
    login : (req,res) => {
        res.render('home/login');
    },
    register : (req,res) => {
        res.render('home/register');
    }
};

const process = {
    login : async (req,res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    save : (req,res) => {
        const user = new User(req.body);
        const response = user.save();
        return res.json(response);
    }
}
// ket,value 형식에서 value가 key와 명칭이 같으면 key만 입력해도 사용 가능
module.exports = {
    output,
    process,
}