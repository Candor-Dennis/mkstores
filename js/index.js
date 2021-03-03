

let allItems = []
let totalPrice = 0;
let totalQuantity = 0;
const errorMessage = document.getElementById('error');
const paymentForm = document.getElementById('paymentForm');

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
            document.getElementById("hide-all").style.display = 'none'
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
        }
        
        for (const item of allItems) {
            
            let container = document.createElement("p");
            // container.style.border = "1px solid maroon"
            container.style.margin = "10px"
            container.style.padding = "10px"
            let productContent = document.createTextNode(`
               Product Name :${item.name}, Product Price :${item.price}, Product Quantity : ${item.quantity} 
            `);
            container.appendChild(productContent);
            var display = document.getElementById("content");
            display.appendChild(container);
      
            return;
         }

    }


    




    

    paymentForm.addEventListener("submit", payWithPaystack, false);

    function payWithPaystack(e) {
        const userForm = document.forms[0];
        const Fname =document.getElementById("checkoutFname").value;
        const Lname =document.getElementById("checkoutLname").value;
        const address = document.getElementById("checkoutAddress").value;

        let nameCheck = /^[a-zA-Z\s]+$/;
        let addressCheck = /^[a-zA-Z0-9\s]+$/;

        if (Fname.trim() == '' || Fname.search(nameCheck) == -1) {
            errorMessage.classList.remove('d-none');
            errorMessage.innerHTML = 'Please enter a valid name';
        
        } else  if (Lname.trim() == '' || Lname.search(nameCheck) == -1) {
            errorMessage.classList.remove('d-none');
            errorMessage.innerHTML = 'Please enter a valid name';
        }
            
        else if (address.trim() == '' || address.search(addressCheck) == -1) {
            errorMessage.classList.remove('d-none');
            errorMessage.innerHTML = 'Please enter a valid address';
        } else {
                errorMessage.classList.add('d-none');
        }
        // form validation

        e.preventDefault();
        let handler = PaystackPop.setup({
        key: 'pk_test_xxxxxxxxxx', // Replace with your public key
        email: document.getElementById("email-address").value,
        amount: document.getElementById("amount").value * 100,
        ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you

        // label: "Optional string that replaces customer email"

        onClose: function(){
        alert('Window closed.');
            },
            callback: function(response){
            let message = 'Payment complete! Reference: ' + response.reference;
            alert(message);
            }

        });

        handler.openIframe();

        }

  