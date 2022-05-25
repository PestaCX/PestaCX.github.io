function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[id='darab']");
    let showAmount = document.querySelector("span.showAmount");
    let összeg = parseInt(amountInput.value)*price;

    showAmount.innerHTML = összeg;

}