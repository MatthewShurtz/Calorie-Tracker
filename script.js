const addBtn = document.getElementById("add-btn");
const sumBtn = document.getElementById("sum-btn");

// Adds both food item and number of calories to list then clears the field.
addBtn.addEventListener("click", addItem);
addBtn.addEventListener("click", clearField);
sumBtn.addEventListener("click", calSum);

function clearField() {
  document.getElementById("food-input").value = "";
  document.getElementById("calorie-input").value = "";
}

function addItem() {
  let newFoodItem = document.createElement("li");
  let newCalNum = document.createElement("li");
  newCalNum.className = "calories";
  let food = document.getElementById("food-input").value;
  let cal = document.getElementById("calorie-input").value;
  let addedFood = document.createTextNode(food);
  let addedCal = document.createTextNode(cal);
  newFoodItem.appendChild(addedFood);
  newCalNum.appendChild(addedCal);
  let foodList = document.getElementById("food-item-list");
  let calList = document.getElementById("calorie-number-list");
  foodList.appendChild(newFoodItem);
  calList.appendChild(newCalNum);
}

function calSum() {
  let calories = document.getElementsByClassName("calories");
  calNum = 0;
  for (var i = 0; i < calories.length; i++) {
    calNum += parseInt(calories[i].textContent);
  }
  document.getElementById("total-calories").innerHTML = calNum;
}
