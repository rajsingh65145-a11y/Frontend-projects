const form = document.getElementById("transaction-form")

const textInput = document.getElementById("text")

const amountInput = document.getElementById("amount")

const transactionList = document.getElementById("transaction-list")

const balanceElement = document.getElementById("balance")

let transactions = []

// ADD TRANSACTION
form.addEventListener("submit", (e) => {

  e.preventDefault()

  const text = textInput.value

  const amount = +amountInput.value

  const transaction = {
    id: Date.now(),
    text,
    amount
  }

  transactions.push(transaction)

  addTransactionDOM(transaction)

  updateBalance()

  form.reset()

})

// ADD TO DOM
function addTransactionDOM(transaction){

  const li = document.createElement("li")

  li.classList.add(
    transaction.amount > 0
    ? "income"
    : "expense"
  )

  li.innerHTML = `
    ${transaction.text}
    <span>
      ₹${transaction.amount}

      <button
        class="delete-btn"
        onclick="removeTransaction(${transaction.id})"
      >
        X
      </button>
    </span>
  `

  transactionList.appendChild(li)

}

// UPDATE BALANCE
function updateBalance(){

  const amounts = transactions.map(
    transaction => transaction.amount
  )

  const total = amounts.reduce(
    (acc, item) => acc + item,
    0
  )

  balanceElement.innerText = `₹${total}`

}

// REMOVE TRANSACTION
function removeTransaction(id){

  transactions = transactions.filter(
    transaction => transaction.id !== id
  )

  init()

}

// INITIALIZE
function init(){

  transactionList.innerHTML = ""

  transactions.forEach(addTransactionDOM)

  updateBalance()

}