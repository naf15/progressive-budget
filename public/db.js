let db;
// create a new db request for a "BudgetDB" database.
const request = indexedDB.open('BudgetDB', 1);

request.onupgradeneeded = function (event) {
  // create object store called "BudgetStore" and set autoIncrement to true
  db = event.target.result;
  const budgetStore = db.createObjectStore('BudgetStore', { autoIncrement: true })
};

request.onsuccess = function (event) {
  db = event.target.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  // log error here
  console.log(event)
};
