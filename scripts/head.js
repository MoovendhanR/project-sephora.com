function dropDown(a) {

    var show1 = document.querySelector("#main-content")
    var show = document.querySelector(`.${a}-content`)
    show1.style.display = "block";
    // show.style.display="block";
    show.style.height = "400px"

    var rem = document.getElementsByClassName("navEle")

    for (var i = 0; i < rem.length; i++) {
        if (rem[i].textContent != a) {
            var remo = document.querySelector(`.${rem[i].textContent}-content`)
            remo.style.height = "0px";

            rem[i].style.color = "rgba(0, 0, 0, 0.3)"
            rem[i].style.textDecoration = "none"
        } else {
            rem[i].style.color = "#393939"
            rem[i].style.textDecoration = "underline"
        }
    }
}

function searchBar() {
    var bar = document.querySelector("#inputBox")
    bar.style.height = "70px";
}

function removeBar() {
    var bar = document.querySelector("#inputBox")
    bar.style.height = "0px";
}

function signBar() {
    var bar = document.querySelector("#signIN")
    bar.style.display = "block";
}

function removeSignBar() {
    var bar = document.querySelector("#signIN")
    bar.style.display = "none";
}

function removeDropdown() {
    var show = document.querySelector("#main-content")
    show.style.display = "none";

    var reset = document.getElementsByClassName("navEle")

    for (var i = 0; i < reset.length; i++) {
        if (reset[i].textContent != "Sale") {
            reset[i].style.color = "#393939"
        }
        reset[i].style.textDecoration = "none"
    }
}
let data=[];
data[0]="https://www.purpicks.com/wp-content/uploads/2018/06/Rejuva-Minerals-Multi-Purpose-Powder-Blush-_-Eye-1.jpg";
data[1]="https://www.purpicks.com/wp-content/uploads/2018/03/lotus-cosmetics-usa-creme-to-powder-blush.png";
data[2]="https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw87fb4a6b/ProductImages/2016/Face/Ombre_Blush/ombreblush_main.jpg?sw=390&sh=390&sm=fit";
data[3]="https://d3t32hsnjxo7q6.cloudfront.net/i/e4e4827631b874f898d41a90ab3de5a6_ra,w158,h184_pa,w158,h184.jpeg";
data[4]="https://d3t32hsnjxo7q6.cloudfront.net/i/7c674b3490001af91546b73c5fc45f94_ra,w158,h184_pa,w158,h184.jpg";


  console.log(data);
let slideimg=document.getElementById("slideshows");

 let i=0;
  setInterval(function(){
      if(i===4){
          i=0;
      }
      slideimg.src=data[i]
      i=i+1;
    //  console.log(i)
  },1000)


//2nd slide

let data2=[];
data2[0]="https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/986/original/open-uri20171224-4-14z5x4y?1514082775";
data2[1]="https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/981/original/open-uri20171224-4-1i8mko9?1514082770";
data2[2]="https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/949/original/data?1514082704";
data2[3]="https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/270/original/data?1514063288";
data2[4]="https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/697/original/open-uri20171223-4-1tgdgkb?1514062732";



let slideimg2=document.getElementById("slideshows2");

 let j=0;
  setInterval(function(){
      if(j===4){
          j=0;
      }
      slideimg2.src=data2[j]
      j=j+1;
    //  console.log(i)
  },2000)

// slide 3

let data3=[];
data3[0]="https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/374/original/open-uri20171223-4-dmlykh?1514063311";
data3[1]="https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/340/original/data?1514063302";
data3[2]="https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/988/original/open-uri20171224-4-1lbpgue?1514082777";
data3[3]="https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/607/original/open-uri20171223-4-rt97dn?1514061756";
data3[4]="https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/044/original/data?1514062253";



let slideimg3=document.getElementById("slideshows3");

 let k=0;
  setInterval(function(){
      if(k===4){
          k=0;
      }
      slideimg3.src=data3[k]
      k=k+1;
    //  console.log(i)
  },3000)

// slide 4

let data4=[];
data4[0]="https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/409/original/data?1514063319";
data4[1]="https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/395/original/data?1514063318";
data4[2]="https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/087/original/data?1514062258";
data4[3]="https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/098/original/data?1514062258";
data4[4]="https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/124/original/data?1514062263";



let slideimg4=document.getElementById("slideshows4");

 let m=0;
  setInterval(function(){
      if(m===4){
          m=0;
      }
      slideimg4.src=data4[m]
      m=m+1;
    //  console.log(i)
  },4000)






  //
  var arr = JSON.parse(localStorage.getItem("userData")) || []
  console.log(arr)
  //popup for sign-up

  document.getElementById("sign_up").addEventListener("click", function () {
      console.log("here")
      document.querySelector(".bg-modal2").style.display = "none"
      document.querySelector(".bg-modal").style.display = "flex"

  })

  document.querySelector(".close1").addEventListener("click", function () {
      document.querySelector(".bg-modal").style.display = "none"
  })


  //popup for login
  document.getElementById("login").addEventListener("click", function () {
      console.log("here")
      document.querySelector(".bg-modal").style.display = "none"
      document.querySelector(".bg-modal2").style.display = "flex"
  })

  document.querySelector(".close2").addEventListener("click", function () {
      document.querySelector(".bg-modal2").style.display = "none"
  })


  // sign up
  function Register(e) {

      e.preventDefault()
      var register_data = {
          name1: document.getElementById("name1").value,
          name2: document.getElementById("name2").value,

          region: document.getElementById("region").value,

          email: document.getElementById("email").value,
          password: document.getElementById("password").value,

          username: document.getElementById("username").value,
      };

      let user_record = JSON.parse(localStorage.getItem("userData")) || []
      if (user_record.some((v) => {
          return v.username == register_data.username
      })) {
          alert("User Already Exists")
      } else {
          arr.push(register_data)

          console.log(register_data)

          localStorage.setItem("userData", JSON.stringify(arr))

          alert("Registration Successful")
          window.location.href = "login.html"
      }


  }
//getting parsing username;

  let x = JSON.parse(localStorage.getItem("profile_name"))
  console.log(x)
  var show_name = (document.getElementById("show-name"))
  console.log("arr", arr)
  show_name.textContent = ` Hello ${x}`


  //new discussion login

  function Login(e) {
      e.preventDefault()
      // let login_data = {
      //     username: document.getElementById("username-login").value,

      //     password: document.getElementById("password-login").value,

      // }
      let username = document.getElementById("username-login").value;

      let password = document.getElementById("password-login").value;
          console.log("name " ,username)
     
      var arr1 = JSON.parse(localStorage.getItem("userData")) || []
      let flag = false;
      for (let i = 0; i < arr1.length; i++) {
          console.log(arr1[i])
          if (username == arr1[i].username && password == arr1[i].password) {

              alert("login successful")
              flag = true;

              //sending username to display in nav bar
              window.location.href = "login.html"
              localStorage.setItem("profile_name", JSON.stringify(username))
              // return;

          } 
          // if (!flag) {
          //     alert("Invalid Credentials ")
          //     return
          // }
            

      }
      if (!flag) {
              alert("Invalid Credentials ")
              // return
          }

  }



  