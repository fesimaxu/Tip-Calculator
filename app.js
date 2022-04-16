
function tipCalculate(){
     let billamount = document.getElementById("billamount").value;
     console.log(billamount)

     let billpercentage = document.getElementById("btn").value;
     console.log(billpercentage)

     let nPeople = document.getElementById("nPeople").value;
     console.log(nPeople)


    let percentageAmount = (billamount * nPeople)/billpercentage;
    console.log(percentageAmount)
    
    let total = parseInt(billamount) + parseInt(tipAmount);
    console.log(total)

    document.getElementById("tipAmount").innerHTML = percentageAmount;
    document.getElementById("totalBill").innerHTML = total;
}

tipCalculate()

function btnclick(){
    document.getElementById('btn').style.display = "block";
}
function resetClick(){

    if(reset === total){
        document.getElementById("reset") = tipCalculate();
        return 0;
    }
}

