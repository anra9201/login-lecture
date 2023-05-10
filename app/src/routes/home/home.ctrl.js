'use strict';

const output = {
    home : (req,res) => {
        res.render('home/index');
    },
    login : (req,res) => {
        res.render('home/login');
    },
};

const user = {
    userId : ['아이디1','아이디2','아이디3'],
    userPw : ['1234','1234','1245'],
};

const process = {
    login : (req,res) => {
        const id = req.body.id;
        const pw = req.body.password;

        if(user.userId.includes(id)){
            const idx = user.userId.indexOf(id);
            if(user.userPw[idx] === pw){
                return res.json({
                    success : true,
                })
            }
        }
        
        return res.json({
            success : false,
            msg : "로그인에 실패하였습니다.",
        });
    },
}
// ket,value 형식에서 value가 key와 명칭이 같으면 key만 입력해도 사용 가능
module.exports = {
    output,
    process,
}