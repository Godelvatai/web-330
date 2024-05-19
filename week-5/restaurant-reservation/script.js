/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author:    Dustin Craven
  Date:      4/21/24
  Filename:  restaurant table reservation system
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
  {"tableNumber": 1, "capacity": 4, "isReserved": false},
  {"tableNumber": 2, "capacity": 4, "isReserved": true},
  {"tableNumber": 3, "capacity": 4, "isReserved": true},
  {"tableNumber": 4, "capacity": 4, "isReserved": false},
  {"tableNumber": 5, "capacity": 2, "isReserved": true},
  {"tableNumber": 6, "capacity": 2, "isReserved": false},
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Add your code here
  let selectedTable = tables.find((table) => table.tableNumber === parseInt(tableNumber));

  //Check if table is not reserved
  if(!selectedTable.isReserved) {
    //Set table to be reserved
    selectedTable.isReserved = true;

    setTimeout(function() { callback(`Table ${selectedTable.tableNumber} has been reserved.`) }, time);
  } else {
    callback(`Table ${selectedTable.tableNumber} is not available.`);
  }
}

//Callback function message that updates the message HTML id
function message(text) {
  document.getElementById("message").textContent = text;
}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    //Stop form submission
    e.preventDefault();

    //Get entered table number from HTML input
    let tableNumber = document.getElementById("tableNumber").value;

    //Error message if entered table number is not valid
    if(tableNumber <= 0 || tableNumber > tables.length) {
      message("Table Number entered is not a valid table number. Please enter a valid table number.")
    } else {
      reserveTable(tableNumber, message, 10000);
    }
  });
