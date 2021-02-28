
function showItem() {

    let item = document.getElementById("checkout");
    let action =  item.style.display = 'block';

    if (action = true) {
        document.getElementById("banner").style.display = 'none'
    } else {
        console.log("i cannot hide")
    }
}


let allItems = []

function cartItems(id , name , price) {

    // adding values on cart
     let number = parseInt(document.getElementById("count").innerHTML);
     number = number+1;
     document.getElementById('count').innerHTML = number;


   data = {
       id:id,
       name :  name,
       price : price,
       quantity :1
   };


   if (allItems.length == 0) {
    allItems.push(data);
    console.log(allItems);

   } else {
      for ( let i = 0 ;  i < allItems.length ; i++) {
          if (allItems[i].id == data["id"]) {
              alert("clicked");
              let productData = {
                  id : data["id"],
                  name : data["name"],
                  price: data["price"],
                  quantity : parseInt(data["quantity"] +1 )
                };
                allItems[i] = productData;
                console.log(allItems);
          }else{
              alert("not clicked");
          }
          }
           
      } 
   }


