
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

 (function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
