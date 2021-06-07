
function placeOrder() {
    document.getElementById("myForm").submit();
 }

 var quantity = document.getElementById("selectQuantity")
 var price = document.getElementById("price");
 price.innerHTML = "$";
 quantity.onchange = function () {
     price.innerHTML = "$" + (value * quantity.value);
 }

 var addItem = document.getElementById('addCart');
 var items = document.getElementById('cartItems');
 var count = parseInt(items.innerHTML);
 addItem.addEventListener("click", function (event) {
     count = parseInt(items.innerHTML);
     items.innerHTML = count + parseInt(quantity.value);
 });
