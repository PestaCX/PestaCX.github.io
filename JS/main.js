function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[id='darab']");
    let showAmount = document.querySelector("span.showAmount");
    let összeg = parseInt(amountInput.value)*price;

    showAmount.innerHTML = összeg;

}

/*
* Ezzel (itt lenn) további elemeket adhatok egy meglevő select-list (options)-hoz
*/

let zoldsegek = ["uborka",
"paprika",
"paradicsom",
"zöldborsó",
"hagyma",
"krumpli",
"fokhagyma"];
/* ezeket próbálom majd hozzáadni */

/* Ide próbálom hozzáadni: */

let addZoldseg = document.querySelector("#Termeknev");
let index = 0;
while (index < zoldsegek.length) {
let option = document.createElement("option");
option.value = index;
option.innerHTML = zoldsegek[index]+"B+!";
addZoldseg.appendChild(option);
index++;
}

