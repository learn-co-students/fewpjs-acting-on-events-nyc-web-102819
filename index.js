// // Your code here
// let dodger = document.getElementById("dodger");
// dodger.style.backgroundColor = "#FF69B4";
// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//       let leftNumbers = dodger.style.left.replace("px", "");
//       let left = parseInt(leftNumbers, 10);
  
//       dodger.style.left = `${left - 1}px`;
//     }
//   })
let dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

const moveDodgerRight = function () {
    let rightNumbers = dodger.style.left
    let pureNumber = rightNumbers.replace("px", "")
    let right = parseInt(pureNumber, 10)
    if (right < 360) {
        dodger.style.left = `${right + 1}px`
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight()
    }
});