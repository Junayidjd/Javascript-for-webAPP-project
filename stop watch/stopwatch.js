const countDownElement = document.getElementById("countDown");
const resetValueElement = document.querySelector(".resetValue");
let startTime = 0;
let elapsedTime = 0;
let intervalId;

// Function to start the timer
const startTimer = () => {
  // Clear any existing interval before starting a new one
  clearInterval(intervalId);
  
  if (elapsedTime === 0) {
    startTime = Date.now();
  } else {
    // Calculate start time based on previous elapsed time
    startTime = Date.now() - elapsedTime;
  }
  
  intervalId = setInterval(() => {
    const now = Date.now();
    elapsedTime = now - startTime;
    updateTimerDisplay(elapsedTime);
  }, 10); // Update every 10 milliseconds
};

// Function to stop the timer
const stopTimer = () => {
  clearInterval(intervalId);
};

// Function to reset the timer
const resetTimer = () => {
  clearInterval(intervalId);
  elapsedTime = 0;
  updateTimerDisplay(elapsedTime);
};

// Function to update timer display with hours, minutes, seconds, and milliseconds
const updateTimerDisplay = (elapsedTime) => {
  const milliseconds = elapsedTime % 1000;
  let seconds = Math.floor(elapsedTime / 1000);
  let minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  seconds %= 60;
  minutes %= 60;

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(3, "0")}`;
  countDownElement.innerText = formattedTime;
};

// Function to show stop value
const showStopValue = () => {
  const newPara = document.createElement("p");
  newPara.innerText = `The stop time is ${countDownElement.innerText}`;
  resetValueElement.append(newPara);
};

// Function to clear stop time display
const clearTimeValue = () => {
  resetValueElement.innerHTML = "";
};

// Event listeners
document.querySelector(".start_btn").addEventListener("click", startTimer);
document.querySelector(".reset_btn").addEventListener("click", resetTimer);
document.querySelector(".stop_btn").addEventListener("click", stopTimer);
document.querySelector(".time_btn").addEventListener("click", showStopValue);
document.querySelector(".clear_btn").addEventListener("click", clearTimeValue);
