let value=document.getElementById("inputBox");

 let keysearch = document.getElementById("inputBox");
 let search_term = document.getElementById("search").value;

  keysearch.addEventListener("keypress",(elem)=>{

    if(elem.key == "Enter"){
      apicalling()
    }
  });
  apicalling()
  async function apicalling(){
      try{
      
        let res=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Natural&product_type=mascara`)
        let data=await res.json();
      //  console.log(data);
        appendData(data);
      }catch(err){
          console.log(err);
      }
  }
  // to prevent unexpected error for the first time when we start application since there is no "cart" data in local storage initially;
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

async function sortProducts(){

  try{
      
    let res=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Natural&product_type=mascara`)
    let data=await res.json();
    //console.log(data);
    //appendData(data);
  let sortCriteria=document.getElementById('sortButton').value;
  let filterCriteria=document.getElementById("filterButton").value;
  console.log(sortCriteria);
     if(sortCriteria){
         let updatedProductsList= data
         .filter(filterFunction)
         .sort(function sortFunction(prodA,prodB){
           if(sortCriteria==="asc"){
             return prodA.price-prodB.price;
           }else if(sortCriteria==="dsc"){
             return prodB.price-prodA.price;
           }
         });
      //   console.log(updatedProductsList)
         appendData(updatedProductsList)
     }else{
        let updatedProductsList= data.filter(filterFunction);
         appendData(updatedProductsList)
     }

     function filterFunction(prod){

      if(filterCriteria==="0-5"){
         return prod.price <= 5;
      }else if(filterCriteria==="5-10"){
         return prod.price > 5 && prod.price<=10;
      }else if(filterCriteria===">10"){
         return prod.price > 10;
      }else{
        return true;
      }

    }
     

  }catch(err){
      console.log(err);
  }
}

async function filterProducts(){
  try{
         
    let res=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Natural&product_type=mascara`)
    let data=await res.json();
    //console.log(data);

    let filterCriteria=document.getElementById("filterButton").value;
    let sortCriteria=document.getElementById('sortButton').value;
    console.log(filterCriteria);
     if(sortCriteria){
    let updatedProductsList=data
    .filter(filterFunction)
    .sort(function sortFunction(prodA,prodB){
      if(sortCriteria==="asc"){
        return prodA.price-prodB.price;
      }else if(sortCriteria==="dsc"){
        return prodB.price-prodA.price;
      }
    });
    appendData(updatedProductsList);
  }else{
    let updatedProductsList=data.filter(filterFunction);
    appendData(updatedProductsList);
  }

    function filterFunction(prod){

      if(filterCriteria==="0-5"){
         return prod.price<=5;
      }else if(filterCriteria==="5-10"){
         return prod.price > 5 && prod.price<=10;
      }else if(filterCriteria===">10"){
         return prod.price > 10;
      }else{
        return true;
      }

    };
    //console.log(updatedProductsList)
    appendData(updatedProductsList)

  }catch(err){
    console.log(err);
  }
}
async function filterRating(){
     
   try{
    let res=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Natural&product_type=mascara`)
    let data=await res.json();
    let rateCriteria=document.getElementById("rateButton").value;
    console.log(rateCriteria);
    if(rateCriteria){
      let updatedProductsList= data.sort(function rateFunction(prodA,prodB){
        if(rateCriteria==="asc"){
          return prodA.rating-prodB.rating;
        }else if(rateCriteria==="dsc"){
          return prodB.rating-prodA.rating;
        }
      });
      appendData(updatedProductsList);
    }

   }catch(err){
     console.log(err);
   }

}




 // apicalling()

 function appendData(data){
         
 let appendingcont=document.querySelector(".landing-container2");
 appendingcont.innerHTML="";
    data.forEach(function(el){
      console.log(el)
          let div = document.createElement("div");
          div.id="landing-container2-small"
          let h3=document.createElement("h3");
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
          h3.innerHTML=el.name;
          img.src=el.image_link;
          p.innerHTML=`INR:${(el.price*50).toFixed(2)}`;
          desc.innerHTML=`Rating:${el.rating}`;

          div.append(h3,img,p,desc,addToCartButton);
      
         appendingcont.append(div);
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