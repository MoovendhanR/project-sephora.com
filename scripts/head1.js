
console.log("yes")

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


//document.querySelector("button").addEventListener("click",signup)
var userdata=JSON.parse(localStorage.getItem("userbase"))||[];
  function signup(){
      console.log("yes")
      var email=document.querySelector("#email").value;
      var pasword=document.querySelector("#pasword").value;
      var user=document.querySelector("#user").value;
      var mobile=document.querySelector("#mobile").value;
      console.log(email,pasword,user,mobile)

      var usercred={
          email:email,
          pasword:pasword,
          user:user,
          mobile:mobile,
      };
      userdata.push(usercred);
     localStorage.setItem("userbase",JSON.stringify(userdata))
     
if(email!="" && pasword!="" && user!=""&&mobile!="")
{
// window.location.href="testing.html";
alert("account created successful MR."+user)
window.location.href="login.html";
}

else
{
alert("Enter your Detailes and creat password")

}
  }


let userapend=document.getElementById("username")

  //login   document.querySelector("button").addEventListener("click",signin);
    var regusers=JSON.parse(localStorage.getItem("userbase"))
    console.log(regusers)
      function  signin() {
      var email=document.querySelector("#email").value;
      var pasword=document.querySelector("#pasword").value;
         
  //    if(email=="admin"&&pasword=="admin"){
  //        window.location.href="admin11.html"
  //    }
  //    else{
         for(var i=0;i<regusers.length;i++){
        if(regusers[i].email==email&&regusers[i].pasword==pasword){
           alert("login successful")
            window.location.href="testing.html";
            userapend.textContent=regusers[i].user;
        }else{
           // console.log("not registered")
           alert("not registered")
        }
      }
    // }
   }
  