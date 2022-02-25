let middlecontainer2=document.getElementById("middlecontainer1")
let middlecontainer3=document.getElementById("middlecontainer3")
let middlecontainer4=document.getElementById("middlecontainer4")
async function middlefunctioncalling(){


  //  let res=await fetch(`https://makeup-api.herokuapp.com/api/v1/products?product_category=lip_gloss&product_type=lipstick`)
    try{
      
        let res=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Gluten+Free&product_type=blush`)
        let data=await res.json();
       console.log(data);
        appendData2(data);
      }catch(err){
          console.log(err);
      }
}
middlefunctioncalling()


async function middlefunctioncalling3(){


    //  let res=await fetch(`https://makeup-api.herokuapp.com/api/v1/products?product_category=lip_gloss&product_type=lipstick`)
      try{
        
          let res=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_category=concealer&product_type=foundation`)
          let data=await res.json();
         console.log(data);
          appendData3(data);
        }catch(err){
            console.log(err);
        }
  }
  middlefunctioncalling3()



  async function middlefunctioncalling4(){


    //  let res=await fetch(`https://makeup-api.herokuapp.com/api/v1/products?product_category=lip_gloss&product_type=lipstick`)
      try{
        
          let res=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Natural&product_type=mascara`)
          let data=await res.json();
         console.log(data);
          appendData4(data);
        }catch(err){
            console.log(err);
        }
  }
  middlefunctioncalling4()









let cart = localStorage.getItem("cart");
if (!cart) {
  // if cart is null/undefined;
  cart = []; // initialize it with empty array;
  localStorage.setItem("cart", JSON.stringify(cart));
//  refreshCartCount(cart);
} else {
  // if data exists in cart;
  cart = JSON.parse(cart); // get the data | data format [{id:1, title:1, ..},{},{}]
  //refreshCartCount(cart);
}







function appendData2(data){
         
  
    middlecontainer2.innerHTML="";
       data.forEach(function(el){
      //   console.log(el)
      let id=Math.floor(Math.random()*100)
             let div = document.createElement("div");
             div.id="middlecontainer1-small"
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
             desc.innerHTML=`Points:${id}`;
   
             div.append(h3,img,p,desc,addToCartButton);
         
             middlecontainer2.append(div);
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
    
function appendData3(data){
         
  
    middlecontainer3.innerHTML="";
       data.forEach(function(el){
      //   console.log(el)
      let id=Math.floor(Math.random()*3)+2
             let div = document.createElement("div");
             div.id="middlecontainer1-small1"
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
             desc.innerHTML=`Rating:${id}`;
   
             div.append(h3,img,p,desc,addToCartButton);
         
             middlecontainer3.append(div);
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

        
function appendData4(data){
         
  
    middlecontainer4.innerHTML="";
       data.forEach(function(el){
      //   console.log(el)
      let id=Math.floor(Math.random()*3)+2
             let div = document.createElement("div");
             div.id="middlecontainer1-small2"
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
         
             middlecontainer4.append(div);
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

    // middle start...
    function showdata2(){
      window.location.href = "datashow2.html";
    }
    function showdata3(){
      window.location.href = "datashow3.html";
    }
    function showdata4(){
      window.location.href = "datashow4.html";
    }
    function showdata5(){
      window.location.href = "datashow5.html";
    }
    function showdata6(){
      window.location.href = "datashow6.html";
    }
    function showdata7(){
      window.location.href = "datashow7.html";
    }
    function showdata8(){
      window.location.href = "datashow8.html";
    }
     function showdata9(){
      window.location.href = "datashow9.html";
    }
    function showdata10(){
      window.location.href = "datashow10.html";
    }
    function showdata11(){
      window.location.href = "datashow11.html";
    }