// set up
let userInput = document.querySelector("#inpo");
let ul = document.querySelector(".ul-list");
let btn = document.querySelector("#btn");
let color = 0;

// add Events
btn.addEventListener("click", addFunc);
ul.addEventListener("click", delNote);
// add function
function addFunc() {
  let userValue = userInput.value;

  li = document.createElement("li");
  li.className = "list-group-item"; // this class from bootstrap 4 (li-style)
  li.style.margin = "10px";
  li.style.padding = "20px";
  li.style.borderRadius = "10px";
  //Generate color for li
  let colors = [
    "teal",
    "wheat",
    "gold",
    "skyblue",
    "rosybrown",
    "sienna",
    "cornflowerblue"
  ];
  switch (color) {
    case (color = 0):
      li.style.backgroundColor = colors[0];
      break;
    case (color = 1):
      li.style.backgroundColor = colors[1];
      break;
    case (color = 2):
      li.style.backgroundColor = colors[2];
      break;
    case (color = 3):
      li.style.backgroundColor = colors[3];
      break;
    case (color = 4):
      li.style.backgroundColor = colors[4];
      break;
    case (color = 5):
      li.style.backgroundColor = colors[5];
      break;
    case (color = 6):
      li.style.backgroundColor = colors[6];
      break;
  }
  color++;
  if (color == colors.length) {
    color = 0;
  }
  // delet btn
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger  btn-sm float-right deleteNote"; // this class from bootstrap 4
  deleteBtn.appendChild(document.createTextNode("X"));

  // append li
  li.appendChild(document.createTextNode(userValue));
  li.appendChild(deleteBtn);
  // append ul
  ul.appendChild(li);
}

function delNote(e) {
  if (e.target.classList.contains("deleteNote")) {
    let li = e.target.parentElement;
    ul.removeChild(li);
  }
}
