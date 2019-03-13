function setDefault(){
    res.innerHTML = "0";
    // op1.innerHTML = '';
    // op2.innerHTML = '';
    // op.innerHTML = '';
}

function realizeOperation(op1,op2, op){
    var result = 0;
    if (op.innerHTML == '+') {
        result = parseInt(op1.innerHTML) + parseInt(op2.innerHTML);
    } 
    else if (op.innerHTML == '-') {
        result = parseInt(op1.innerHTML) - parseInt(op2.innerHTML);
    }
    else if (op.innerHTML == '*') {
        result = parseInt(op1.innerHTML) * parseInt(op2.innerHTML);
    }
    else if (op.innerHTML == '/') {
        result = parseInt(op1.innerHTML) / parseInt(op2.innerHTML);
    }
    //  try {
    //     if(op2.innerHTML == '0'){

    //     }
           
    //    }
    //     catch (err) {
      
    //      result = 0;
      
    //    }
    return result;
}

function setOperation(key,op1,op2, op, operandSelectionFlag) {
    var result = 0;
    if (op.innerHTML != ''){
        result = realizeOperation(op1,op2, op);
        op1.innerHTML = result;
        op2.innerHTML = '';
    }
    operandSelectionFlag.innerHTML = 'true';
    op.innerHTML = key.innerHTML;
    return op.innerHTML;
}

function setOperand(operand, op1, op2, operandSelectionFlag) {
    var result = 0;
    if (operandSelectionFlag.innerHTML == 'false') {
        op1.innerHTML += operand.innerHTML;
        result = parseInt(op1.innerHTML);
    }
    else {
        op2.innerHTML += operand.innerHTML;
        result = parseInt(op2.innerHTML);
    }
    return result;
}

function calculate(op1, op2, op, operandSelectionFlag) {
    operandSelectionFlag.innerHTML = 'false';
    var result = realizeOperation(op1,op2, op);
    setDefault(op1,op2,op);
    return result;
}

