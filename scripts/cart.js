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



// cart function is started ...args



let cart=localStorage.getItem("cart");
if (!cart) {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    cart = JSON.parse(cart);
  }
 console.log(cart.length);
  let total = cart.reduce(function (acc, curr) {
    return acc + +curr.price*50;
  }, 0);
  console.log(total)
  

//   let create a table 

let appendcont=document.getElementById("cartcontainer123");

let table = document.createElement("table");
let thead= document.createElement("thead");
let theadRow= document.createElement("tr");
let th1 = document.createElement("th");
th1.textContent="image";
let th2 = document.createElement("th");
th2.textContent = "Title";
let th3 = document.createElement("th");
th3.textContent = "Price";
let th4 = document.createElement("th");
th4.textContent ="Delete"

theadRow.append(th1, th2, th3,th4);
thead.append(theadRow);

let tbody = document.createElement("tbody");

cart.forEach(function(prod){
   // console.log(prod.price)

     //  go through each of the item in the cart and append it to table one in each row;
     let tr = document.createElement("tr");

     let td1 = document.createElement("td");

     let prodImg = document.createElement("img");
     prodImg.src = prod.image_link;
     td1.append(prodImg);
     let td2 = document.createElement("td");
     td2.textContent = prod.name;
     let td3 = document.createElement("td");
     td3.textContent = prod.price*50;
     let td4 = document.createElement("td");
     td4.textContent = "removeItem";
     td4.onclick = function(event){
       console.log(prod)
       tr.innerHTML="";
       let total1=total-prod.price*50;
       totalDisplay(total1)
     }
     tr.append(td1, td2, td3 ,td4);
     tbody.append(tr);
})
table.append(thead,tbody);
appendcont.append(table);

function totalDisplay(total) {
    // 280.6 ,150.6
    let totaldisplay = document.getElementById("totalDisplay");  // get totalDisplay element
    totaldisplay.textContent = "INR: " + total; // updated it's value with card total that has been passed as param;

    let subTotaling=document.getElementById("subTotal");
    subTotaling.textContent ="INR: " + total;

    let estimatedTotal=document.getElementById("estimatedtotal");
       estimatedTotal.textContent ="INR: " + total;
  }
  totalDisplay(total);
 






///   add this products
let cartcontainerlast=document.getElementById("cartcontainer14")



async function middlefunctioncalling10(){


    //  let res=await fetch(`https://makeup-api.herokuapp.com/api/v1/products?product_category=lip_gloss&product_type=lipstick`)
      try{
        
          let res=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Natural&product_type=mascara`)
          let data=await res.json();
         console.log(data);
          appendData10(data);
        }catch(err){
            console.log(err);
        }
  }
  middlefunctioncalling10();



         
function appendData10(data){
         
  
    cartcontainerlast.innerHTML="";
       data.forEach(function(el){
      //   console.log(el)
      let id=Math.floor(Math.random()*3)+2
             let div = document.createElement("div");
             div.id="cartcontainer140"
             let h3=document.createElement("h5");
             let img = document.createElement("img");
             let p=document.createElement("p");
             let desc = document.createElement("p");
             
             let addToCartButton = document.createElement("button");
             addToCartButton.textContent = "Add to Cart";
             addToCartButton.onclick = function (event) {
               // add to cart --> items should get added to cart --> cart count should change in navbar;
              // console.log("yes")
               addToCart(el);
             };
             h3.innerHTML=`B:${el.brand}`;
             img.src=el.image_link;
             p.innerHTML=`INR:${(el.price*50).toFixed(2)}`;
             desc.innerHTML=`Rating:${el.rating}`;
   
             div.append(h3,img,p,desc,addToCartButton);
         
             cartcontainerlast.append(div);
       });
       function addToCart(prod) {
         // input format : {id:1, title: "Mens Casual Premium Slim Fit T-Shirts",.....}
         // we need to add this product to the cart ( cart is in local storage)
         let cart = JSON.parse(localStorage.getItem("cart")); // get cart data from local storage;
   
         cart.push(prod); // add new item to the cart;
   
         localStorage.setItem("cart", JSON.stringify(cart)); // save the data to local storage;
       //  refreshCartCount(cart); // refreshCartCount function gets invoked which will refresh cart count on navbar so it gets the latest data
       }
    }



    
    function applyCoupon() {
      console.log("yes")
      let couponInput = document.getElementById("couponInput").value; // get coupoun inputted by user
      if (couponInput === "masai30") {
        // check if matches;
        // total = prev total - 30% total;
        total = total - 0.3 * total; // give discount by reducing total;
        totalDisplay(total); // update dom
      }else{
        alert("Something went wrong!");
      }
    }
    
   // var userdata=JSON.parse(localStorage.getItem("userbase"))||[];
    function callingfunc(){
      window.location.href="checkout.html"
      localStorage.setItem("addition",JSON.stringify(total))
    }