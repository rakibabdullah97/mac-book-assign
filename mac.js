function getProductPrice(priceId,price){
    const extraMemory = document.getElementById(priceId);
    extraMemory.innerText = price;
    totalPrice();
}

// total price 
function totalPrice(){
    const extraMemory = document.getElementById("extra-memory").innerText;
    const extraStorage = document.getElementById("extra-storage").innerText;
    const deliveryCharge = document.getElementById("delivery-charge").innerText;
    const bestPrice = document.getElementById("best-price").innerText;
    const totalPrice = document.getElementById("total-price");
    const totalOverall = document.getElementById("total-promo");
    totalPrice.innerText = parseInt(extraMemory) + parseInt(extraStorage) + parseInt(deliveryCharge) + parseInt(bestPrice);
    totalOverall.innerText = totalPrice.innerText;
}

// Memory event hadler starts here
document.getElementById("memory-8gb").addEventListener('click', function () {
   
    getProductPrice("extra-memory",0);

})
document.getElementById("memory-16gb").addEventListener('click', function () {
    
    getProductPrice("extra-memory",180);

})
// Memory event hadler ends here

//Storage Event Hndler Starts Here
document.getElementById("225Gb-storage").addEventListener('click', function () {
    
    getProductPrice("extra-storage",0);

})
document.getElementById("512Gb-storage").addEventListener('click', function () {
    
    getProductPrice("extra-storage",100);

})
document.getElementById("1TB-storage").addEventListener('click', function () {
    
    getProductPrice("extra-storage",180);

})
//Storage Event Hndler Ends Here


//Delivery Events Handlers Starts Here
document.getElementById("free-delivery").addEventListener('click', function () {
    
    getProductPrice("delivery-charge",0);

})

document.getElementById("paid-delivery").addEventListener('click', function () {
    
    getProductPrice("delivery-charge",20);

});


//Delivery Events Handlers Ends Here
// promo events strats here
document.getElementById("btn-promo").addEventListener('click',function(){
    const promoField = document.getElementById("input-promo");
    const totalPrice = document.getElementById("total-price");
    const totalOverall = document.getElementById("total-promo");
    const discount = parseInt(totalPrice.innerText)*0.2;
    if (promoField.value == 'stevekaku') {
        
        totalOverall.innerText = parseInt(totalPrice.innerText) - discount;
    }else{
        totalOverall.innerText = parseInt(totalPrice.innerText);
    }
    promoField.value = '';
})




