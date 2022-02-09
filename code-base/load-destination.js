import data from './data.json' assert {type: "json"};
const info = JSON.parse(JSON.stringify(data));
console.log(info);
const nav = document.getElementById("nav-bar");
const name = document.getElementById("name");
const img = document.getElementById("image");
const desc = document.getElementById("desc");
const km = document.getElementById("km");
const time = document.getElementById("time");

function create() {
    for (let i = 0; i < info.destinations.length; i++) {
        let node = document.createElement("button");
        node.innerText = info.destinations[i].name.toUpperCase();
        node.id = "b" + i;
        node.className = "nav-word";
        nav.appendChild(node);
        
    };
    const b0 = document.getElementById("b0");
    const b1 = document.getElementById("b1");
    const b2 = document.getElementById("b2");
    const b3 = document.getElementById("b3");
    b0.addEventListener("click", () => {setUp(0)})
    b1.addEventListener("click", () => {setUp(1)})
    b2.addEventListener("click", () => {setUp(2)})
    b3.addEventListener("click", () => {setUp(3)})
}
function setUp(x) {
    name.textContent = info.destinations[x].name.toUpperCase();
    img.src = info.destinations[x].images.webp;
    desc.textContent = info.destinations[x].description;
    km.textContent = info.destinations[x].distance;
    time.textContent = info.destinations[x].travel;

}
setUp(0)
create()