function validateForm() {
  let x = document.getElementsByClassName("checkbox").value;
  if (x === 0) {
    alert("Quantity must be filled out");
    return false;
  }
}

let button = document.getElementById("submit-type");
let result = document.getElementById("result");

button.addEventListener("click", function () {
  var options = document.getElementsByClassName("checkbox");
  var quantity;
  var calc = 0;

  for (var i = 0; i < options.length; i++) {
    if (i === 0) quantity = document.getElementById("quantity1").value;
    else if (i === 1) quantity = document.getElementById("quantity2").value;
    else quantity = document.getElementById("quantity3").value;
    if (options[i].checked) calc = calc + options[i].value * quantity;
  }

  result.innerHTML = calc;
});

validateForm();
