"use strict";


// 변수명 앞에 #를 붙이면 은닉화 
class userVO {
    static #user = {
        userId : ['아이디1','아이디2','아이디3'],
        userPw : ['1234','1234','1245'],
        userNm : ['이름1','이름2','이름3']
    }; 

    // ...변수명 하면 전달 받은 파라미터 배열형식으로 메소드에서 받을 수 있음
    static getUserInfo(...fields){ 
        const user = this.#user;
        
        // 배열 reduce 변수 2개 ()
    //     const newUserVO = fields.reduce((newUserVO,field) => {
    //         if(user.hasOwnProperty(field)){
    //             newUserVO[field] = user[field];
    //         }
    //         return newUserVO;
    //    // }, {});

        const newUserVO = fields.reduce((newUserVO,field) => {
            if(user.hasOwnProperty(field)){
                newUserVO[field] = user[field];
            }
            return newUserVO;
        } , {});

        // console.log('1');
        // console.log(newUserVO);
        return newUserVO;

        // hasOwnProperty object 있는지 검증 하는 함수 true/false
        // Array.reduce()

        // console.log(fields);
        return 'sss';
    }
}



module.exports = userVO;