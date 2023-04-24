fetch('https://script.google.com/macros/s/AKfycbznNwEju0P58aTDrdXtBMzF-D1ZnMKWvHpn99Hx3JS9unPdZJHUxqnroh-TAPqQobBmbQ/exec')
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

    // document.getElementById("tableExpenseConsoData").innerHTML = tr;
    // console.log(tr)
})

var income_amount_collected = document.getElementById("income_amount_collected");
var income_cf_rate = document.getElementById("income_cf_rate");
var income_collectin_fee = document.getElementById("income_collectin_fee");

income_amount_collected.addEventListener("keyup", income_function);
income_cf_rate.addEventListener("keyup", income_function);

function income_function(){
    var result1 = income_amount_collected.value * income_cf_rate.value;
    income_collectin_fee.value = result1.toFixed(2);
}

const expense = document.getElementById("expense");
const income = document.getElementById("income");
const incomeTabBtn = document.getElementById("incomeTabBtn");
const expenseTabBtn = document.getElementById("expenseTabBtn");


function showExpenseTab(){
    expense.setAttribute("style", "display : block");
    income.setAttribute("style", "display : none");
    incomeTabBtn.setAttribute("style", "color : white");
    expenseTabBtn.setAttribute("style", "color : #ffbf00");
}
