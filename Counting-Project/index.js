//ctrl + k + c (to comment multiple items at once)
let count = 0;
const countEl = document.querySelector('.count-el');
const savedEl = document.querySelector('.saved-el')

function increase() {
  count += 1
  countEl.innerHTML = count;
}
  
   

function saveCount() {
  let countStr = count + ' - '
  savedEl.innerHTML += countStr;

  count = 0;
  document.querySelector('.count-el').innerHTML = count;
}
