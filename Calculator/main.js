function calc() {
    let Number1 =parseFloat(document.getElementById("Number1").value);
    let Number2 =parseFloat(document.getElementById("Number2").value);
    let operation =document.getElementById("operation").value;
    if(operation == "+"){
        document.getElementById("result").value = Number1+Number2;
    }else if(operation == "-"){
        document.getElementById("result").value = Number1-Number2;
    }else if(operation == "*"){
        document.getElementById("result").value = Number1*Number2;
    }else if(operation == "/"){
        document.getElementById("result").value = Number1/Number2;
    }else{
        alert("zero is not valid")
    }
    
}