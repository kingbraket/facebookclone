let balance = 500000;
let withAmt = parseInt(prompt("Enter withdrawal amount"));
let depAmt = parseInt(prompt("Enter deposit amount"));

function withdraw(balance, withAmt){
    return balance - withAmt;
}
alert(withdraw());
