// ITERATION 1

function updateSubtotal(product) {
  
  console.log('Calculating subtotal, yey!');
 
  //... your code goes here

  let price = product.querySelector('.price span').innerHTML
  let quantity = product.querySelector('.quantity input').value

  let subTotal = price*quantity
  product.querySelector(".subtotal span").innerText = subTotal;
  return subTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // // const singleProduct = document.querySelector('.product');
  // // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let product = document.getElementsByClassName('product');

  let totalSum = 0;
	for (let i = 0; i < product.length; i++) {
		totalSum += updateSubtotal(product[i]);
  }
  // ITERATION 3
  //... your code goes here
  let total = document.querySelector('#total-value span')
  total.innerHTML=totalSum
}


// ITERATION 4

function removeProduct(event){
  let target = event.currentTarget
  console.log('The target in remove is:', target)
  //... your code goes here
target.parentElement.parentElement.remove()
calculateAll()

}



// ITERATION 5

function createProduct() {

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  const removeBtn = [...document.getElementsByClassName('btn btn-remove')];

removeBtn.forEach((button) => {
  button.addEventListener('click', removeProduct)
  })
 
})
