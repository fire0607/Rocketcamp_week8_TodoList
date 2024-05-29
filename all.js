// 測試用帳密
// let obj =  {
//     "user": {
//       "email": "abc123@gmail.com",
//       "nickname": "tom",
//       "password": "abc123"
//     }
//   }

//註冊頁面
let registerUrl = 'https://todoo.5xcamp.us/users';
let obj = {};

axios.post(registerUrl, obj)

  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error.response);
  });

const email = document.querySelector('#register-email');
const nickName = document.querySelector('#nick-name');
const password = document.querySelector('#password');

//註冊資料驗證
function registerUser(){
    
}