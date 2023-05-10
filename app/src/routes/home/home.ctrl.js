'use strict';

const home = (req,res) => {
    res.render('home/index');
};

const login = (req,res) => {
  
    res.render('home/login');
};

// ket,value 형식에서 value가 key와 명칭이 같으면 key만 입력해도 사용 가능
module.exports = {
    home,
    login
}