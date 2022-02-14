import data from './data.json' assert {type: "json"};
const info = JSON.parse(JSON.stringify(data));
console.log(info.crew);
const nav = document.getElementById("nav-bar");
const name = document.getElementById("name");
const img = document.getElementById("image");
const desc = document.getElementById("desc");


function create() {
    for (let i = 0; i < info.technology.length; i++) {
        let node = document.createElement("button");
        node.innerText = i + 1;
        node.id = "b" + i;
        node.className = "sel-button";
        nav.appendChild(node);
    };
    const b0 = document.getElementById("b0");
    const b1 = document.getElementById("b1");
    const b2 = document.getElementById("b2");
    b0.className = "sel-button active"
    b0.addEventListener("click", () => {setUp(0)});
    b1.addEventListener("click", () => {setUp(1)});
    b2.addEventListener("click", () => {setUp(2)});
    
}
function setUp(x) {
    const arr = [b0, b1, b2];
    for (let i of arr) {
        if (i.className === "sel-button active") {
            i.className = "sel-button";
        }
    }
    arr[x].className += " active";
    name.textContent = info.technology[x].name.toUpperCase();
    if (screen.width < 860) {
        img.src = info.technology[x].images.landscape;
    }else {
        img.src = info.technology[x].images.portrait;
    }
    
    desc.textContent = info.technology[x].description;
    
}
create()
setUp(0)