function tcc() {
  var jmw = document.getElementById("jmw").value;
  if (jmw === "") {
    alert("Please enter a todo!");
    return;
  }

  var li = document.createElement("li");
  li.textContent = jmw;

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "deleteButton";
  
  deleteButton.onclick = function() {
    li.parentNode.removeChild(li);
  };

  li.appendChild(deleteButton);

  var todoList = document.getElementById("elestyn");
  todoList.appendChild(li);

  document.getElementById("jmw").value = "";
  
}

