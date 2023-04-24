fetch('https://script.google.com/macros/s/AKfycbx8A4Ij1bEGcmNkp1g6ufPq3OyR7_X7NrreKflKXqjlzuOHCN_zxlt819rH1bOA55i7pw/exec')
.then(res => res.json())
.then(data => {
    let tr = data.content.reduce((prev,cur)=>
    {
        let td = cur.map(e=>`<td>${e}</td>`)
        return prev + `<tr>${td.join("")}</tr>`
    }, "\r")

    const formatter = new Intl.NumberFormat('en',{
        style: 'currency',
        currency: 'PHP',
        useGrouping: 'true',
        notation: 'compact'

    });
    document.getElementById("tableIncomeConsoData").innerHTML = tr;

})

var expense_amount = document.getElementById("expense_amount");
var expense_purchases = document.getElementById("expense_purchases");
var expense_inputVat = document.getElementById("expense_inputVat");

expense_amount.addEventListener("keyup", expense_function);

function expense_function(){
    var result1 = expense_amount.value / 1.12;
    expense_purchases.value = result1.toFixed(2);
    var result2 = expense_amount.value - expense_purchases.value
    expense_inputVat.value = result2.toFixed(2);
}

const expense = document.getElementById("expense");
const income = document.getElementById("income");
const incomeTabBtn = document.getElementById("incomeTabBtn");
const expenseTabBtn = document.getElementById("expenseTabBtn");


function showIncomeTab(){
    expense.setAttribute("style", "display : none");
    income.setAttribute("style", "display : block");
    incomeTabBtn.setAttribute("style", "color : #ffbf00");
    expenseTabBtn.setAttribute("style", "color : white");
}