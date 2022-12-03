const btn = document.getElementById("btn");
const counter = document.getElementById("counter");
let count = 0;
let upgrades = 0;
const upg1 = document.getElementById("upg1");
const upg2 = document.getElementById("upg2");
const upg3 = document.getElementById("upg3");
const btnred = document.getElementById("btnred");
const btngreen = document.getElementById("btngreen");
const btnblue = document.getElementById("btnblue");
const btnblank = document.getElementById("btnblank");

btnred.onclick = function() {
    document.documentElement.style.setProperty("--accent-color", "#ff0000");
}

btngreen.onclick = function() {
    document.documentElement.style.setProperty("--accent-color", "#00ff00");
}

btnblue.onclick = function() {
    document.documentElement.style.setProperty("--accent-color", "#0000ff");
}

btnblank.onclick = function() {
    let customcolor = prompt("Enter Custom Color (HEX Codes Allowed) Attention: If You Enter Invalid Color, The Button Will Disappear!");
    if (customcolor !== null) {
        document.documentElement.style.setProperty("--accent-color", customcolor);   
    }
}

upg1.onclick = function() {
    if (count >= 100) {
        count -= 100;
        upgrades = 1;
        upg1.style.display = "none";
        upg2.style.display = "block";
        counter.innerText = count;
    }
}

upg2.onclick = function() {
    if (count >= 250) {
        count -= 250;
        upgrades = 2;
        upg2.style.display = "none";
        upg3.style.display = "block";
        counter.innerText = count;
    }
}

upg3.onclick = function() {
    if (count >= 500) {
        count -= 500;
        upgrades = 3;
        upg3.style.display = "none";
        counter.innerText = count;
    }
}

btn.onclick = function() {
    if (upgrades === 0) {
        count += 1;
        counter.innerText = count;
    } else if (upgrades === 1) {
        count += 2;
        counter.innerText = count;
    } else if (upgrades === 2) {
        count += 4;
        counter.innerText = count;
    } else if (upgrades === 3) {
        count += 8;
        counter.innerText = count;
    }
}

btn.addEventListener("keypress", (e) => {
    if (e.key = "Enter") {
        e.preventDefault();
    }
});
