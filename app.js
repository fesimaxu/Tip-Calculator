
function tipCalculator(){

    // getting the value of the bill amount
     let billamount = document.getElementById("billamount").value;
 
     // getting the value of the bill percentge
     let billpercentage = document.getElementById("billpercentage").value;

     // getting the value of the number of persons to split the tip
     let nPeople = document.getElementById  ("nPeople").value;

    // getting the value of the tipamount
    let tipAmount = (billamount * billpercentage)/nPeople;
    tipAmount.toFixed(2)
    
    // getting the value of the total amount
    let total = parseFloat(billamount) + parseFloat(tipAmount);
    total.toFixed(2)
    
    document.getElementById("tipAmount").innerHTML = parseFloat(tipAmount);
    document.getElementById("totalBill").innerHTML = total;
}

// Calculate function 
document.getElementById("calculate").onclick = function(){
    tipCalculator();
}


