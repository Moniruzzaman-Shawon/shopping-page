function updateCaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if(isIncreasing){
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1; //casenumber for updating the value otherwise clicked but taken the previous number in the multication of the case
    }
    caseInput.value = caseNumber; // for updating the case number 
    //update case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
 /*    if(caseInput.value < 0){
        caseInput.value = 0;
        alert('Error Quantity');
    }*/
} 

document.getElementById('case-plus').addEventListener('click',function(){
     updateCaseNumber(true);
})
document.getElementById('case-minus').addEventListener('click',function(){
    updateCaseNumber(false);
})