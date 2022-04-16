let billBtn = document.getElementById('btn')

billBtn.addEventListener("Click", function(){
     let billamount = document.getElementById("billamount").value;
     billamount = ""
     console.log(billamount)

     let billpercentage = document.getElementById("btn").value;


     let nPeople = document.getElementById("nPeople").value;
     nPeople = ""
     console.log(nPeople)


    let percentageAmount = (billamount * nPeople)/billpercentage;
    console.log(percentageAmount)
    
    let total = parseInt(billamount) + parseInt(tipAmount);
    console.log(total)

    document.getElementById("tipAmount").innerHTML = percentageAmount;
    document.getElementById("totalBill").innerHTML = total;
})


