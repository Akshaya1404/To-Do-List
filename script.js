var ul = document.getElementById("task-list")
var input = document.getElementById("task-input")
function addTask() {
  var listitem = document.createElement("li")
  listitem.innerHTML = input.value + "<button id ='delete-btn' style = 'background-color: red' onclick = 'deleteItem(event)'> X </button>"
  ul.append(listitem)
}
function deleteItem() {
  event.target.parentElement.remove()
}