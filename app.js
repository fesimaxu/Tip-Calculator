
 function calculate(){
     let billamount = document.getElementById("billamount").value;
     console.log(billamount)
     let billpercentage = document.getElementsById("btn").value;
     console.log(billpercentage)
     let nPeople = document.getElementById("nPeople").value;

     if(billamount === "" || billpercentage === 0){
         document.write("Please input the value ");
    }

    if(nPeople === "" || nPeople <= 0){
        document.write("Can't be zero or empty");
    }
    let percentageAmount = (billamount * nPeople)/billpercentage;
    console.log(percentageAmount)
    
    let total = parseInt(billamount) + parseInt(tipAmount);
    console.log(total)

    document.getElementById("tipAmount").value = percentageAmount;
    document.getElementById("totalBill").innerHTML = total;

}

document.getElementsByClassName("case-b").onclick = function(){
    calculate();
}
