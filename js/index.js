

let allItems = []
let totalPrice = 0;
let totalQuantity = 0;


// cart function
    function cartItems(id , name , price) {

        // adding values on cart
        let number = parseInt(document.getElementById("count").innerHTML);
        number = number+1;
        document.getElementById('count').innerHTML = number;

        data = {
            id: id,
            name :  name,
            price : price,
            quantity : 1
        };
    

        for ( let i = 0 ;  i < allItems.length ; i++) {
            if (allItems[i].id == data.id) {
                let productData = {
                    id : data.id,
                    name : data.name,
                    price: allItems[i].price += price,
                    quantity : +allItems[i].quantity + 1
                };
                allItems[i] = productData;
                let productInfo = document.getElementById("content");
                productInfo.innerHTML =
                        `<div class = "d-flex justify-content-around> 
                            <div class ="flex-item"> ${productData.name} </div>
                            <div class ="flex-item"> ${data.price} </div>
                            <div class ="flex-item"> ${data.quantity} </div>
                      </div>    `
                return;
            }
        }

        allItems.push(data);
    
    } 

    function showItem() {
        let item = document.getElementById("checkout");
        let action =  item.style.display = 'block';
    
        if (action = true) {
            document.getElementById("banner").style.display = 'none';
            document.getElementById("hide").style.display = 'none';
        } else {
            console.log("i cannot hide") 
        };

        for ( let i = 0 ;  i < allItems.length ; i++) {

            totalPrice +=  +allItems[i].price
            totalQuantity += +allItems[i].quantity;

            // to display price
            let priceContainer = document.getElementById("totalPrice");
            priceContainer.innerHTML = totalPrice;

            // to display quantity
            let quantContainer = document.getElementById("totalQuantity");
            quantContainer.innerHTML = totalQuantity;

            return;
        }
      
    }



