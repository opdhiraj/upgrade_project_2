console.log("detail Js Page")

let today = new Date().toISOString().split("T")[0];
document.getElementById("fromDate").setAttribute("min", today);
console.log(today);
document.getElementById("todate").setAttribute("min", today);

// function diff() {

   

// }


function totalCost(){
    const price=1000;
    let noAdult=document.getElementById("totalAdults").value;
    
    const oneday = 1000 * 60 * 60 * 24;
    
    let date1 = new Date(document.getElementById("fromDate").value);
    let date2 = new Date(document.getElementById("todate").value);
    console.log(`${date1}-------${date2}`);
    let noDays = (date2 - date1) / oneday;
    console.log(noDays);

    let totalBill=price*noAdult*noDays;
    console.log(totalBill);
    document.getElementById("totalPrice").value=`Rs ${totalBill}`;
}