function showproduct(){
    alert("view our products");
}
console.log(showproduct);

// products
const cartButtons = document.querySelectorAll(".add-to-cart");

// cartButtons.forEach(function(button) {
//     button.addEventListner("click",function(){
//         alert("product added to cart!");
//     });

// });
// console.log(cartButtons);


cartButtons.forEach(b => b.addEventListener('click', () => {
    alert('product added to cart');
}));
console.log(cartButtons);

//signup form

const form = document.querySelector('#signupForm');

form.addEventListener('submit',(e) =>{
    e.preventDefault();

    const inputs = form.querySelectorAll('input');

    const firstName = inputs[0].value;
    const lastName =inputs[1].value;
    const email =inputs[2].value;
    const password =inputs[3].value;

    alert("you have signed up successfully")

    console.log(firstName,lastName,email,password);

});

