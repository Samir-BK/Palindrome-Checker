const inputEl = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultEl = document.getElementById("result");

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

checkBtn.addEventListener("click", () => {
  if (inputEl.value === "") {
    alert("Please input a value");
  }
  isPalindrome(inputEl.value)
    ? (resultEl.textContent = `${inputEl.value} is a palindrome`)
    : (resultEl.textContent = `${inputEl.value} is not a palindrome.`);
  inputEl.value = "";
});
