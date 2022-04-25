function NewTodo(){
    var inputField = document.getElementById("myInput").value;
    var tNode = document.createTextNode(inputField);
    var newLI = document.createElement("li");

    newLI.appendChild(tNode);

    document.getElementById("myUL").appendChild(newLI);
}