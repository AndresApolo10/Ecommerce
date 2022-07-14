const sol = document.querySelector("#sol");
const luna = document.querySelector("#luna");
const body = document.querySelector("body");

console.log(sol, luna, body);

let dark = luna.addEventListener("click", function switchDarMode() {
        luna.classList.toggle("hidden");
        if(luna.classList.contains("hidden")){
            sol.classList.remove("hidden");
            body.classList.add("dark")
        }
});

let light = sol.addEventListener("click", function switchLightMode() {
        sol.classList.toggle("hidden");
        if(sol.classList.contains("hidden")){
            luna.classList.remove("hidden");
            body.classList.remove("dark");
        }
});


