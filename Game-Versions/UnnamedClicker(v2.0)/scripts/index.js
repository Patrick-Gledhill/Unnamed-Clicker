const btn = document.getElementById("btn");
const counter = document.getElementById("counter");
let count = 0;
let upgrades = 0;
const upg1 = document.getElementById("upg1");
const upg2 = document.getElementById("upg2");
const upg3 = document.getElementById("upg3");
const upg4 = document.getElementById("upg4");
const upg5 = document.getElementById("upg5");
const upg6 = document.getElementById("upg6");
const upg7 = document.getElementById("upg7");
const btnred = document.getElementById("btnred");
const btngreen = document.getElementById("btngreen");
const btnblue = document.getElementById("btnblue");
const btnblank = document.getElementById("btnblank");
const closeach = document.getElementById("closeach");
const openach = document.getElementById("openach");
const achmenu = document.getElementById("achmenu");
const darktheme = document.getElementById("darktheme");
const lighttheme = document.getElementById("lighttheme");
const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const a4 = document.getElementById("a4");
const a5 = document.getElementById("a5");
const a6 = document.getElementById("a6");
const a7 = document.getElementById("a7");
const a8 = document.getElementById("a8");
const a9 = document.getElementById("a9");
let beginning = 0;

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
        a2.style.display = "inline-block";
        counter.innerText = count;
    }
}

upg2.onclick = function() {
    if (count >= 250) {
        count -= 250;
        upgrades = 2;
        upg2.style.display = "none";
        upg3.style.display = "block";
        a3.style.display = "inline-block";
        counter.innerText = count;
    }
}

upg3.onclick = function() {
    if (count >= 500) {
        count -= 500;
        upgrades = 3;
        upg3.style.display = "none";
        upg4.style.display = "block";
        a4.style.display = "inline-block";
        counter.innerText = count;
    }
}

upg4.onclick = function() {
    if (count >= 1000) {
        count -= 1000;
        upgrades = 4;
        upg4.style.display = "none";
        upg5.style.display = "block";
        a5.style.display = "inline-block";
        counter.innerText = count;
    }
}

upg5.onclick = function() {
    if (count >= 2500) {
        count -= 2500;
        upgrades = 5;
        upg5.style.display = "none";
        upg6.style.display = "block";
        a6.style.display = "inline-block";
        counter.innerText = count;
    }
}

upg6.onclick = function() {
    if (count >= 5000) {
        count -= 5000;
        upgrades = 6;
        upg6.style.display = "none";
        upg7.style.display = "block";
        a7.style.display = "inline-block";
        counter.innerText = count;
    }
}

upg7.onclick = function() {
    if (count >= 10000) {
        count -= 10000;
        upgrades = 7;
        upg7.style.display = "none";
        a8.style.display = "inline-block";
        counter.innerText = count;
    }
}

btn.onclick = function() {
    if (beginning === 0) {
        beginning = 1;
        a1.style.display = "inline-block";
    }

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
    } else if (upgrades === 4) {
        count += 16;
        counter.innerText = count;
    } else if (upgrades === 5) {
        count += 32;
        counter.innerText = count;
    } else if (upgrades === 6) {
        count += 64;
        counter.innerText = count;
    } else if (upgrades === 7) {
        count += 128;
        counter.innerText = count;
    }
}

btn.addEventListener("keypress", (e) => {
    if (e.key = "Enter") {
        e.preventDefault();
    }
});

closeach.onclick = function() {
    achmenu.style.opacity = "0";
    setTimeout(() => {
        achmenu.style.display = "none";
    }, 333);
}

openach.onclick = function() {
    achmenu.style.display = "block";
    setTimeout(() => {
        achmenu.style.opacity = "1";
    }, 1);
}

lighttheme.onclick = function() {
    lighttheme.style.display = "none";
    darktheme.style.display = "inline-block";
    document.documentElement.style.setProperty("--background", "#ffffff");
    document.documentElement.style.setProperty("--light-bg", "#000000");
    document.documentElement.style.setProperty("--text", "#000000");
    document.documentElement.style.setProperty("--dark-bg", "#ffffff");
    a9.style.display = "inline-block";
}

darktheme.onclick = function() {
    darktheme.style.display = "none";
    lighttheme.style.display = "inline-block";
    document.documentElement.style.setProperty("--background", "#202020");
    document.documentElement.style.setProperty("--light-bg", "#404040");
    document.documentElement.style.setProperty("--text", "#ffffff");
    document.documentElement.style.setProperty("--dark-bg", "#101010");
}
