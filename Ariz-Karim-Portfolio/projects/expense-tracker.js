const nameInput = document.querySelector("#name");
const amountInput = document.querySelector("#amount");
const typeInput = document.querySelector("#type");

const addBtn = document.querySelector("#addBtn");

const balance = document.querySelector("#balance");
const income = document.querySelector("#income");
const expense = document.querySelector("#expense");

const transactionList = document.querySelector("#transactionList");


let transactions = [];
function saveTransactions() {

    localStorage.setItem("transactions", JSON.stringify(transactions));

}
addBtn.addEventListener("click", () => {
    let name = nameInput.value.trim();
    let amount = Number(amountInput.value);
    let type = typeInput.value;

    if (name === "" || amount <= 0) {
        showToast("⚠ Please enter a valid name and amount.", "warning");
        return;
    }



    let totalIncome2 = 0;
    let totalExpense2 = 0;

    transactions.forEach((transaction) => {

        if (transaction.type === "Income") {
            totalIncome2 += transaction.amount;
        } else {
            totalExpense2 += transaction.amount;
        }

    });

    let currentBalance2 = totalIncome2 - totalExpense2;

    if (type === "Expense" && currentBalance2 <= 0) {
        showToast("❌ No balance available. Please add income first.", "error");
        return;
    }

    if (type === "Expense" && amount > currentBalance2) {
        showToast("❌ Insufficient Balance!", "error");
        return;
    }


    let transaction = {
        id: Date.now(),
        name: name,
        amount: amount,
        type: type
    }
    transactions.push(transaction);
    saveTransactions();
    displayTransactions();
    calculateTotal();
    nameInput.value = "";
    typeInput.value = "Income";
    amountInput.value = "";
});

let displayTransactions = () => {

    transactionList.innerHTML = "";
    transactions.forEach((transaction) => {
        let li = document.createElement("li");

        li.classList.add(transaction.type.toLowerCase());
        if (transaction.type === "Income") {
            li.innerHTML = `<strong>${transaction.name}</strong>
        <span>+Rs ${transaction.amount.toLocaleString("en-PK")}</span>
        <button onclick="deleteTransaction(${transaction.id})">Delete</button>`;
        } else {
            li.innerHTML = `<strong>${transaction.name}</strong>
        <span>-Rs ${transaction.amount.toLocaleString("en-PK")}</span>
        <button onclick="deleteTransaction(${transaction.id})">Delete</button>`



        }
        transactionList.appendChild(li);
    });
};



let calculateTotal = () => {
    let totalIncome = 0;
    let totalExpense = 0;
    transactions.reverse().forEach((transaction) => {
        if (transaction.type === "Income") {
            totalIncome += transaction.amount;
        } else {
            totalExpense += transaction.amount;
        }
    });
    income.textContent = `Rs ${totalIncome.toLocaleString("en-PK")}`;
    expense.textContent = `Rs ${totalExpense.toLocaleString("en-PK")}`;
    balance.textContent = `Rs ${(totalIncome - totalExpense).toLocaleString("en-PK")}`;
};

let deleteTransaction = (id) => {

    transactions = transactions.filter((transaction) => transaction.id !== id);
    saveTransactions();

    displayTransactions();
    calculateTotal();
}
function loadTransactions() {

    let savedTransactions = localStorage.getItem("transactions");

    if (savedTransactions) {

        transactions = JSON.parse(savedTransactions);

        displayTransactions();

        calculateTotal();

    }

}

loadTransactions();


const toast = document.querySelector("#toast");

function showToast(message, type) {

    toast.textContent = message;

    toast.className = "";

    toast.classList.add(type);

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}
