let myLeads = [];

const inputEl = document.querySelector('#input-el');
const inputBtn = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el')
const deleteBtn = document.querySelector('#delete-btn')
const tabBtn = document.querySelector('#tab-btn')

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
};

tabBtn.addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs)=> {
  myLeads.push(tabs[0].url)
  localStorage.setItem('myLeads',JSON.stringify(myLeads));
  render(myLeads)
  })
 
});

function render(leads) {
  let listItems = ''  ;
  leads.forEach((index) => {
  listItems += (`<li><a href='${index}' target ='-blank'>${index}</a></li>`)
  });
  
  ulEl.innerHTML = listItems
 };


inputBtn.addEventListener('click', () => {
  myLeads.push(inputEl.value);
  inputEl.value = '';
  localStorage.setItem('myLeads',JSON.stringify(myLeads));
  render(myLeads)
})

deleteBtn.addEventListener('dblclick', () => {
  localStorage.clear();
  myLeads = []
  render(myLeads)
})

