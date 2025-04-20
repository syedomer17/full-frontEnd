// console.log(document.body.childNodes);
// console.log(document.body.children);
// console.log(document.URL);
// console.log(document.head);
// console.log(document.body)
// console.log(document.title)

//by id
const title = document.getElementById("mainTitle");
console.log(title)

//by className
const texts = document.getElementsByClassName("text");
console.log(texts);

//Grab all paragraphs by tag Name
const allP = document.getElementsByTagName("p");
console.log(allP);

// Grab the first button
const bgn = document.querySelector("button");
console.log(bgn);

// Grab all class="text"
const allText = document.querySelectorAll(".text");
console.log(allText);

document.getElementById("example").innerHTML = "<b>Hello from innerHTML</b>";

document.getElementById("example").textContent = "New Text";

document.getElementById("example").innerText = "This is an innerText DOM";

document.getElementById("greeting").textContent = "Welcome to the site!";

document.getElementById("myImage").setAttribute("src","new-image.png")

const link = document.getElementById("link");
console.log(link.getAttribute("href"));  // Will print "https://example.com"

document.getElementById('box').style.backgroundColor = "blue";

document.getElementById("myButton").onclick = function (){
    alert("button clicked")
}

document.getElementById("box2").onmouseover = function (){
    this.style.backgroundColor = "green";
}

document.getElementById("box").onmouseout = function() {
    this.style.backgroundColor = "yellow";
  };

  document.getElementById("myInput").onchange = function() {
    alert("Input changed!");
  };
  document.getElementById("myInput").oninput = function() {
    console.log("You are typing: " + this.value);
  };