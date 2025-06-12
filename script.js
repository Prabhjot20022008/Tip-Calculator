let billAmt = document.querySelector("#bill-amt");
let billTip = document.querySelector("#bill-tip");
let btn = document.querySelector("#btn");
let btnOutput = document.querySelector("#btn-output");


const btnCallBack = () =>{
    let amtVal = billAmt.value;
    let tipVal = billTip.value;
    let finalOutput = amtVal * (1 + tipVal/100);
    btnOutput.innerText = finalOutput.toFixed(2);
};

btn.addEventListener("click",btnCallBack);