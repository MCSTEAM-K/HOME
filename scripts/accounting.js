var income_amount_collected = document.getElementById("income_amount_collected");
var income_cf_rate = document.getElementById("income_cf_rate");
var income_collectin_fee = document.getElementById("income_collectin_fee");

income_amount_collected.addEventListener("keyup", income_function);
income_cf_rate.addEventListener("keyup", income_function);

function income_function(){
    var result1 = income_amount_collected.value * income_cf_rate.value;
    income_collectin_fee.value = result1.toFixed(2);
}

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

const income = document.getElementById("income");
const incomeTabBtn = document.getElementById("incomeTabBtn");
const expense = document.getElementById("expense");
const expenseTabBtn = document.getElementById("expenseTabBtn");
const tableIncomeConso = document.getElementById("tableIncomeConso");
const incomeConsoTabBtn = document.getElementById("incomeConsoTabBtn");
const tableExpenseConso = document.getElementById("tableExpenseConso");
const expenseConsoTabBtn = document.getElementById("expenseConsoTabBtn");


function showIncomeTab(){
    income.setAttribute("style", "display : block");
    incomeTabBtn.setAttribute("style", "color : #ffbf00");
    expense.setAttribute("style", "display : none");
    expenseTabBtn.setAttribute("style", "color : white");
    tableIncomeConso.setAttribute("style", "display : none");
    incomeConsoTabBtn.setAttribute("style", "color : white");
    tableExpenseConso.setAttribute("style", "display : none");
    expenseConsoTabBtn.setAttribute("style", "color : white");
}


function showExpenseTab(){
    income.setAttribute("style", "display : none");
    incomeTabBtn.setAttribute("style", "color : white");
    expense.setAttribute("style", "display : block");
    expenseTabBtn.setAttribute("style", "color : #ffbf00");
    tableIncomeConso.setAttribute("style", "display : none");
    incomeConsoTabBtn.setAttribute("style", "color : white");
    tableExpenseConso.setAttribute("style", "display : none");
    expenseConsoTabBtn.setAttribute("style", "color : white");
}

function showIncomeConsoTab(){
    income.setAttribute("style", "display : none");
    incomeTabBtn.setAttribute("style", "color : white");
    expense.setAttribute("style", "display : none");
    expenseTabBtn.setAttribute("style", "color : white");
    tableIncomeConso.setAttribute("style", "display : block");
    incomeConsoTabBtn.setAttribute("style", "color : #ffbf00");
    tableExpenseConso.setAttribute("style", "display : none");
    expenseConsoTabBtn.setAttribute("style", "color : white");
}

function showExpenseConsoTab(){
    income.setAttribute("style", "display : none");
    incomeTabBtn.setAttribute("style", "color : white");
    expense.setAttribute("style", "display : none");
    expenseTabBtn.setAttribute("style", "color : white");
    tableIncomeConso.setAttribute("style", "display : none");
    incomeConsoTabBtn.setAttribute("style", "color : white");
    tableExpenseConso.setAttribute("style", "display : block");
    expenseConsoTabBtn.setAttribute("style", "color : #ffbf00");    
}