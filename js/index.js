// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span');  
  // Product instead of DOcuemnt so it works for all of them 
  let quantity = product.querySelector('.quantity input');

  let priceVal = price.innerHTML;
  let quantityVal = quantity.valueAsNumber;  // no innerHTML but attribute
  // value only: as String; or valueAsNumber
  //console.log(priceVal*quantityVal);

  let subValue = priceVal * quantityVal;
  let subtotal = product.querySelector('.subtotal span'); 
  subtotal.innerHTML = `${subValue}`;    
  
  return subValue;
}

// ITERATION 2
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  let cartProducts = document.getElementsByClassName('product');
  let cartProductsArray = [...cartProducts];

  let totalValue = document.querySelector('#total-value span');
  let total = 0;
  //console.log(total);
  
  cartProductsArray.forEach((item) => {
    // ITERATION 2 & 3
    total += updateSubtotal(item); 
    // No need to repeat the call twice within teh same fuction scope
    // O RETURN de uma function é o mesmo que chamar a function

    return totalValue.innerHTML = total;
});

}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  
  //... your code goes here
  //let parentClass = document.querySelector('tbody');
  //let targetProduct = document.querySelector('.product'); //target; 
  // don know hot to reference the specific product 
  //parentClass.removeChild(targetProduct);  // removes the first!! 
  
  target.parentNode.parentNode.remove();          
  
  calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeBtn = document.querySelectorAll('.btn-remove');
  let removeBtnArray = [...removeBtn];

  removeBtnArray.forEach((item) => {
    item.addEventListener('click', removeProduct);
  });

});



// ITERATION 5

function createProduct() {
  //... your code goes here
}
