let form = document.querySelector("form");
let firstname = document.querySelector(".firstname");
let correctmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let lastname = document.querySelector("#lastname");
let buttonbtn = document.querySelector("#submitbtn");
let password = document.querySelector("#password");
let username = document.querySelector("#username");
let Messageemail = document.querySelector("#messageEmail");
let MessageFirstName = document.querySelector("#messageFirst");
let messageUsername = document.querySelector("#messageUsername");
let messageLastname = document.querySelector("#messageLastname");
let messagepassword = document.querySelector("#messagepassword");
let email = document.querySelector("#email");

const baseUrl = "https://nft.urbandesignsco.com/api";

buttonbtn.addEventListener("click", function (e) {
  e.preventDefault();
  const registerForm = new FormData(form);

  fetch(baseUrl + "/register", {
    body: registerForm,
    method: "POST",
  })
    .then((res) => {
      res.json().then((_res) => {
        console.log("res", _res);
        if (_res.status == 400) {
          console.log(_res.message.first_name);
          let erroremail = _res.message.email;
          let errorfirst = _res.message.first_name;
          let errorusername = _res.message.username;
          let errorLastname = _res.message.last_name;
          let errorpassword = _res.message.password;
          Messageemail.innerHTML = erroremail;
          MessageFirstName.innerHTML = errorfirst;
          messageUsername.innerHTML = errorusername;
          messageLastname.innerHTML = errorLastname;
          messagepassword.innerHTML = errorpassword;
        }
      });
    })
    .catch((err) => {
      console.error("from catch:", err);
      If(err.message.email);
      {
        err.message.email = innerhtml(err);
      }
    });
  // register();
});

// async function register() {
//   try {
//     const registerForm = new FormData(form);

//     const fromServer = await fetch(baseUrl + "/register", {
//       body: registerForm,
//       method: "POST",
//     });

//     const data = await fromServer.json();

//     if(data.success){

//     }else{

//     }
//   } catch (error) {
//     console.log(error);
//   }
// function register() {
//   const registerForm = new FormData(form);

//   fetch(baseUrl + "/register", {
//     body: registerForm,
//     method: "POST",
//   })
//     .then((res) => {
//       res.json().then((_res) => {
//         console.log("res", _res);
//         if (_res.status == 400) {
//           alert(_res.message.email);
//          console.log(_res.message.first_name);

//           let erroremail = _res.message.email;
//           MessageFirstName.innerHTML(erroremail);
//         }
//       });
//     })
//     .catch((err) => {
//       console.error("from catch:", err);
//       If(err.message.email);
//       {
//         err.message.email = innerhtml(err);
//       }
//     });
// }
// }
