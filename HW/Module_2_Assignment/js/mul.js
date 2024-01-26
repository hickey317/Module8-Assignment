document.getElementById("calculateButton").addEventListener("click",function(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let sum = num1*num2;
    document.getElementById("result").textContent = sum;
});

function back(){
    location.href = "index.html";
};

function toAdd(){
    location.href = "add.html"
}