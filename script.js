// 1. Write a function isArmstrongNumber(n) that takes a positive integer n as input and

// returns true if n is an Armstrong number, and false otherwise. An Armstrong number is a
// number that is equal to the sum of its own digits each raised to the power of the number
// of digits.
// Example:
// isArmstrongNumber(123); // false (1^3 + 2^3 + 3^3 = 36, not equal to 123)
function isArmstrongNumber(n) {
  const numStr = String(n);
  const numCount = numStr.length;

  let armstrongSum = 0;
  for (let i = 0; i < numCount; i++) {
    const count = Number(numStr[i]);
    armstrongSum += Math.pow(count, numCount);
  }

  return armstrongSum === n;
}

console.log(isArmstrongNumber(123));

// 2. Write a function sortByLength(arr) that takes an array of strings as input and returns a
// new array with the strings sorted by their lengths in ascending order.
// Example:
// isArmstrongNumber(123); // false (1^3 + 2^3 + 3^3 = 36, not equal to 123)
// sortByLength([&quot;apple&quot;, &quot;banana&quot;, &quot;cherry&quot;, &quot;date&quot;]); // [&quot;date&quot;, &quot;apple&quot;, &quot;banana&quot;, &quot;cherry&quot;]

function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}
const result = sortByLength(["apple", "banana", "cherry", "date"]);
console.log(result);
// 3. Write a function sumDigits(n) that takes a positive integer n as input and returns the sum
// of its digits.
// Example:
// sumDigits(456); // 15 (4 + 5 + 6 = 15)

function sumDigits(n) {
  var numStr = n.toString();

  var digitSum = 0;

  for (var i = 0; i < numStr.length; i++) {
    digitSum += parseInt(numStr[i]);
  }

  return digitSum;
}
console.log(sumDigits(456));

// 4. Write a function capitalizeLastLetters(str) that takes a string as input and returns a new
// string where the last letter of each word is capitalized, and all other letters are in
// lowercase.
// Example:
// capitalizeLastLetters(&quot;javascript is AWESOME&quot;); // &quot;javascripT iS AWESOMe&quot;
function capitalizeLastLetters(str) {
  var words = str.split(" ");

  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    if (word.length > 1) {
      var capitalizedWord =
        word.slice(0, -1).toLowerCase() + word.slice(-1).toUpperCase();

      words[i] = capitalizedWord;
    }
  }

  var result = words.join(" ");

  return result;
}

console.log(capitalizeLastLetters("javascript is AWESOME"));

// 5. Write a function findLargestNumber(arr) that takes an array of numbers as input and
// returns the largest number in the array.
// Example:
// findLargestNumber([1, 5, 3, 9, 2]); // 9
function findLargestNumber(arr) {
  var largestNumber = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }

  return largestNumber;
}

console.log(findLargestNumber([1, 5, 3, 9, 2]));

// 6. Write JavaScript code that dynamically fetches data from an API and updates the content
// of a specific HTML element with the retrieved data.

// 7. Create a form validation script using JavaScript and the DOM. The script should validate
// the input fields before submitting the form and display error messages for invalid fields.

// 8. Implement a function that allows users to drag and drop HTML elements within a web
// page using JavaScript and the DOM.

var dragElement = document.getElementById("dragElement");
var dropZone = document.getElementById("dropZone");

dragElement.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("text/plain", "Dragged Element");
});

dropZone.addEventListener("dragover", function (event) {
  event.preventDefault();
});

dropZone.addEventListener("drop", function (event) {
  event.preventDefault();

  var draggedData = event.dataTransfer.getData("text/plain");

  dropZone.appendChild(dragElement);
});

// 9. Write a script that dynamically loads external content (such as HTML, CSS, or
// JavaScript files) into a webpage based on user interactions, using JavaScript and the
// DOM.

var loadContentButton = document.getElementById("loadContentButton");
var contentContainer = document.getElementById("contentContainer");

loadContentButton.addEventListener("click", function () {
  var scriptElement = document.createElement("script");
  scriptElement.src = "path/to/script.js";
  document.head.appendChild(scriptElement);

  var linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = "path/to/styles.css";
  document.head.appendChild(linkElement);

  fetch("path/to/content.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (htmlContent) {
      contentContainer.innerHTML = htmlContent;
    })
    .catch(function (error) {
      console.log(" error occurred while loading HTML content:", error);
    });
});

// 10. Implement a function that creates a modal window (popup) with customizable content
// and controls to close the modal, using JavaScript and the DOM.
function openModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
  loadModalContent();
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

function loadModalContent() {
  var modalContent = document.getElementById("modalContent");

  modalContent.innerHTML =
    "<h4>Modal Content</h4><span>This is a sample modal window.</span>";
}
