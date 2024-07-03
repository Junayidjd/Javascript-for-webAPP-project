const btnE1 = document.getElementById("btn");
const bmiInputE1 = document.getElementById("bmi-result");
const weightCondition = document.getElementById("weight-condition")

function calculateBMI() {
  const heightValue = document.getElementById("height").value / 100;

  const weightValue = document.getElementById("weight").value;

  const bmiValue = weightValue / (heightValue * heightValue);

  bmiInputE1.value = bmiValue;

  if(bmiValue < 18.5){
    weightCondition.innerHTML = "Underweight";
  }
  else if(bmiValue >= 18.5 && bmiValue <= 24.9){
    weightCondition.innerHTML = "Normal weight";
}
else if(bmiValue >= 25 && bmiValue <= 29.9){
    weightCondition.innerHTML = "Overweight";
}
else if(bmiValue >= 30){
    weightCondition.innerHTML = "Obesity";
}
}

btnE1.addEventListener("click", calculateBMI);
