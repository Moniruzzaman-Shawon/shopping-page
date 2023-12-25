function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1; // same as downline!
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1; //casenumber for updating the value otherwise clicked but taken the previous number in the multication of the case
    }
    productInput.value = productNumber; // for updating the case number 
    //update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;


    calculateTotal();
 /*    if(caseInput.value < 0){
        caseInput.value = 0;
        alert('Error Quantity');
    }*/
} 
/* function updatePhoneNumber(){
    updateCaseNumber('phone', true ) 

} */

function getInputValue(){
    const productInput = document.getElementById(product + '-number');
    const productnumber = parseInt(productInput.value);
    return productnumber;
}

function calculateTotal(){
    
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;

    console.log(subTotal);

    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;

}

//phone increase decrease events 
document.getElementById('phone-plus').addEventListener('click',function(){
    
    console.log('clicked');
    
})

document.getElementById('phone-minus').addEventListener('click',function(){
    console.log('Phone minus clicked!');
    
})

//handle case increase decrease events 
document.getElementById('case-plus').addEventListener('click',function(){
     updateProductNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case', 59,  false);
})