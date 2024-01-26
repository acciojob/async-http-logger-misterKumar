//your JS code here. If required.
function httpLogger(){
fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => response.json()).then(data => console.log(data)).catch(error => console.error("Error:", error));
}
httpLogger();