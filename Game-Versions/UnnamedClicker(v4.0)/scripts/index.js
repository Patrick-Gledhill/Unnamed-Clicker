"use strict"

const btn = document.getElementById("btn");
const counter = document.getElementById("counter");
let count = 0;
let upgrades = 0;
let acupgrades = 0;
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
const btnyellow = document.getElementById("btnyellow");
const btnorange = document.getElementById("btnorange");
const btnpurple = document.getElementById("btnpurple");
const btnrgb = document.getElementById("btnrgb");
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
const a10 = document.getElementById("a10");
const a11 = document.getElementById("a11");
const a12 = document.getElementById("a12");
const a13 = document.getElementById("a13");
const a14 = document.getElementById("a14");
const a15 = document.getElementById("a15");
const a16 = document.getElementById("a16");
const a17 = document.getElementById("a17");
const a18 = document.getElementById("a18");
const a19 = document.getElementById("a19");
const a20 = document.getElementById("a20");
const cookiee = document.getElementById("cookiee");
const theLIE = document.getElementById("theLIE");
let beginning = 0;
const ac1 = document.getElementById("ac1");
const ac2 = document.getElementById("ac2");
const ac3 = document.getElementById("ac3");
const ac4 = document.getElementById("ac4");
const ac5 = document.getElementById("ac5");
const maxupg = document.getElementById("maxupg");
const maxac = document.getElementById("maxac");
const maxpg = document.getElementById("maxpg");
var countInterval;
var rgbswitch;
var rgbbtncolor;
const moreopt = document.getElementById("moreset");
const moremenu = document.getElementById("moremenu");
const closeopt = document.getElementById("closemoreopt");
const wipedata = document.getElementById("wipesave");
let ha1 = 0;
let ha2 = 0;
let ha3 = 0;
let ha4 = 0;
let ha5 = 0;
let ha6 = 0;
let ha7 = 0;
let ha8 = 0;
let ha9 = 0;
let ha10 = 0;
let ha11 = 0;
let ha12 = 0;
let ha13 = 0;
let ha14 = 0;
let ha15 = 0;
let ha16 = 0;
let ha20 = 0;
let hpg = 0;
const watermark = document.getElementById('watermarkc');
const noac = document.getElementById("noac");
const noupg = document.getElementById("noupg");
const nopg = document.getElementById("nopg");
const copyprog = document.getElementById("copyprog");
const pasteprog = document.getElementById("pasteprog");
const pg1 = document.getElementById("pg1");
const pg2 = document.getElementById("pg2");
const pg3 = document.getElementById("pg3");

const btnredbg = document.getElementById("btnredbg");
const btngreenbg = document.getElementById("btngreenbg");
const btnbluebg = document.getElementById("btnbluebg");
const btnyellowbg = document.getElementById("btnyellowbg");
const btnorangebg = document.getElementById("btnorangebg");
const btnpurplebg = document.getElementById("btnpurplebg");
const btnblankbg = document.getElementById("btnblankbg");

function changePropertyColor(switchProperty, switchToColor) {
    document.documentElement.style.setProperty(switchProperty, switchToColor);
    document.documentElement.style.setProperty("--text", "#ffffff");
}

btnredbg.onclick = function () {
    changePropertyColor("--background", "#400000");
    changePropertyColor("--light-bg", "#800000");
    changePropertyColor("--dark-bg", "#200000");
}

btngreenbg.onclick = function () {
    changePropertyColor("--background", "#004000");
    changePropertyColor("--light-bg", "#008000");
    changePropertyColor("--dark-bg", "#002000");
}

btnbluebg.onclick = function () {
    changePropertyColor("--background", "#000040");
    changePropertyColor("--light-bg", "#000080");
    changePropertyColor("--dark-bg", "#000020");
}

btnorangebg.onclick = function () {
    changePropertyColor("--background", "#402000");
    changePropertyColor("--light-bg", "#804000");
    changePropertyColor("--dark-bg", "#201000");
}

btnyellowbg.onclick = function () {
    changePropertyColor("--background", "#404000");
    changePropertyColor("--light-bg", "#808000");
    changePropertyColor("--dark-bg", "#202000");
}

btnpurplebg.onclick = function () {
    changePropertyColor("--background", "#200040");
    changePropertyColor("--light-bg", "#400080");
    changePropertyColor("--dark-bg", "#100020");
}

btnblankbg.onclick = function () {
    var bgColor = prompt("Enter Custom Color (HEX Codes Allowed) For Background Color.");
    changePropertyColor("--background", bgColor);
    var lightBgColor = prompt("Enter Custom Color (HEX Codes Allowed) For Light Background Color.");
    changePropertyColor("--light-bg", lightBgColor);
    var darkBgColor = prompt("Enter Custom Color (HEX Codes Allowed) For Dark Background Color.");
    changePropertyColor("--dark-bg", darkBgColor);
}

btnred.onclick = function () {
    clearInterval(rgbswitch);
    document.documentElement.style.setProperty("--accent-color", "#ff0000");
    btn.style.backgroundImage = "none";
}

btngreen.onclick = function () {
    clearInterval(rgbswitch);
    document.documentElement.style.setProperty("--accent-color", "#00ff00");
    btn.style.backgroundImage = "none";
}

btnblue.onclick = function () {
    clearInterval(rgbswitch);
    document.documentElement.style.setProperty("--accent-color", "#0000ff");
    btn.style.backgroundImage = "none";
}

btnyellow.onclick = function () {
    clearInterval(rgbswitch);
    document.documentElement.style.setProperty("--accent-color", "#ffff00");
    btn.style.backgroundImage = "none";
}

btnorange.onclick = function () {
    clearInterval(rgbswitch);
    document.documentElement.style.setProperty("--accent-color", "#ff8000");
    btn.style.backgroundImage = "none";
}

btnpurple.onclick = function () {
    clearInterval(rgbswitch);
    document.documentElement.style.setProperty("--accent-color", "#8000ff");
    btn.style.backgroundImage = "none";
}

btnrgb.onclick = function () {
    btn.style.backgroundImage = "none";
    rgbswitch = setInterval(() => {
        document.documentElement.style.setProperty("--accent-color", "#ff0000");
        setTimeout(() => {
            document.documentElement.style.setProperty("--accent-color", "#ff8000");
        }, 100);
        setTimeout(() => {
            document.documentElement.style.setProperty("--accent-color", "#ffff00");
        }, 200);
        setTimeout(() => {
            document.documentElement.style.setProperty("--accent-color", "#80ff00");
        }, 300);
        setTimeout(() => {
            document.documentElement.style.setProperty("--accent-color", "#00ff00");
        }, 400);
        setTimeout(() => {
            document.documentElement.style.setProperty("--accent-color", "#00ff80");
        }, 500);
        setTimeout(() => {
            document.documentElement.style.setProperty("--accent-color", "#0080ff");
        }, 600);
        setTimeout(() => {
            document.documentElement.style.setProperty("--accent-color", "#0000ff");
        }, 700);
        setTimeout(() => {
            document.documentElement.style.setProperty("--accent-color", "#8000ff");
        }, 800);
        setTimeout(() => {
            document.documentElement.style.setProperty("--accent-color", "#ff0080");
        }, 900);
    }, 1000);
}

btnblank.onclick = function () {
    clearInterval(rgbswitch);
    let customcolor = prompt("Enter Custom Color (HEX Codes Allowed) Attention: If You Enter Invalid Color, The Button Will Disappear!");
    if (customcolor !== null) {
        document.documentElement.style.setProperty("--accent-color", customcolor);
        btn.style.backgroundImage = "none";
    }
}

setInterval(() => {
    if (count >= 1000000) {
        a11.style.display = "inline-block";
        ha11 = 1;
    }
}, 100);

upg1.onclick = function () {
    if (count >= 100) {
        count -= 100;
        upgrades = 1;
        upg1.style.display = "none";
        upg2.style.display = "inline-block";
        a2.style.display = "inline-block";
        ha2 = 1;
        counter.innerText = count;
    }
}

upg2.onclick = function () {
    if (count >= 500) {
        count -= 500;
        upgrades = 2;
        upg2.style.display = "none";
        upg3.style.display = "inline-block";
        a3.style.display = "inline-block";
        ha3 = 1;
        counter.innerText = count;
    }
}

upg3.onclick = function () {
    if (count >= 1000) {
        count -= 1000;
        upgrades = 3;
        upg3.style.display = "none";
        upg4.style.display = "inline-block";
        a4.style.display = "inline-block";
        ha4 = 1;
        counter.innerText = count;
    }
}

upg4.onclick = function () {
    if (count >= 5000) {
        count -= 5000;
        upgrades = 4;
        upg4.style.display = "none";
        upg5.style.display = "inline-block";
        a5.style.display = "inline-block";
        ha5 = 1;
        counter.innerText = count;
    }
}

upg5.onclick = function () {
    if (count >= 10000) {
        count -= 10000;
        upgrades = 5;
        upg5.style.display = "none";
        upg6.style.display = "inline-block";
        a6.style.display = "inline-block";
        ha6 = 1;
        counter.innerText = count;
    }
}

upg6.onclick = function () {
    if (count >= 50000) {
        count -= 50000;
        upgrades = 6;
        upg6.style.display = "none";
        upg7.style.display = "inline-block";
        a7.style.display = "inline-block";
        ha7 = 1;
        counter.innerText = count;
    }
}

upg7.onclick = function () {
    if (count >= 100000) {
        count -= 100000;
        upgrades = 7;
        upg7.style.display = "none";
        a8.style.display = "inline-block";
        ha8 = 1;
        maxupg.style.display = "inline-block";
        counter.innerText = count;
    }
}

ac1.onclick = function () {
    if (count >= 1000) {
        count -= 1000;
        acupgrades = 1;
        counter.innerText = count;
        ac1.style.display = "none";
        ac2.style.display = "inline-block";
        a12.style.display = "inline-block";
        ha12 = 1;
        countInterval = setInterval(() => {
            count += 1;
            counter.innerText = count;
        }, 1000);
    }
}

ac2.onclick = function () {
    if (count >= 5000) {
        clearInterval(countInterval);
        count -= 5000;
        acupgrades = 2;
        counter.innerText = count;
        ac2.style.display = "none";
        ac3.style.display = "inline-block";
        a13.style.display = "inline-block";
        ha13 = 1;
        countInterval = setInterval(() => {
            count += 1;
            counter.innerText = count;
        }, 200);
    }
}

ac3.onclick = function () {
    if (count >= 10000) {
        clearInterval(countInterval);
        count -= 10000;
        acupgrades = 3;
        counter.innerText = count;
        ac3.style.display = "none";
        ac4.style.display = "inline-block";
        a14.style.display = "inline-block";
        ha14 = 1;
        countInterval = setInterval(() => {
            count += 1;
            counter.innerText = count;
        }, 100);
    }
}

ac4.onclick = function () {
    if (count >= 50000) {
        clearInterval(countInterval);
        count -= 50000;
        acupgrades = 4;
        counter.innerText = count;
        ac4.style.display = "none";
        ac5.style.display = "inline-block";
        a15.style.display = "inline-block";
        ha15 = 1;
        countInterval = setInterval(() => {
            count += 1;
            counter.innerText = count;
        }, 20);
    }
}

ac5.onclick = function () {
    if (count >= 100000) {
        clearInterval(countInterval);
        count -= 100000;
        acupgrades = 5;
        counter.innerText = count;
        ac5.style.display = "none";
        maxac.style.display = "inline-block";
        a16.style.display = "inline-block";
        ha16 = 1;
        countInterval = setInterval(() => {
            count += 1;
            counter.innerText = count;
        }, 10);
    }
}

pg1.onclick = function () {
    if (count >= 100000) {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?btncc=100000&pcu=2&acu=2&a1=1&a2=1&a3=1&a12=1&a13=1&pg=1";
        window.history.pushState({ path: newurl }, '', newurl);
        window.location.reload();
    }
}

pg2.onclick = function () {
    if (count >= 500000) {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?btncc=150000&pcu=4&acu=3&a1=1&a2=1&a3=1&a4=1&a5=1&a12=1&a13=1&a14=1&pg=2";
        window.history.pushState({ path: newurl }, '', newurl);
        window.location.reload();
    }
}

pg3.onclick = function () {
    if (count >= 1000000) {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?btncc=200000&pcu=6&acu=4&a1=1&a2=1&a3=1&a4=1&a5=1&a6=1&a7=1&a12=1&a13=1&a14=1&a15=1&pg=3";
        window.history.pushState({ path: newurl }, '', newurl);
        window.location.reload();
    }
}

btn.onclick = function () {
    if (beginning === 0) {
        beginning = 1;
        a1.style.display = "inline-block";
        ha1 = 1;
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

btn.addEventListener("keydown", (e) => {
    e.preventDefault();
});

closeach.onclick = function () {
    achmenu.style.opacity = "0";
    setTimeout(() => {
        achmenu.style.display = "none";
    }, 333);
}

openach.onclick = function () {
    achmenu.style.display = "block";
    setTimeout(() => {
        achmenu.style.opacity = "1";
    }, 1);
}

lighttheme.onclick = function () {
    lighttheme.style.display = "none";
    darktheme.style.display = "inline-block";
    document.documentElement.style.setProperty("--background", "#ffffff");
    document.documentElement.style.setProperty("--light-bg", "#cccccc");
    document.documentElement.style.setProperty("--text", "#000000");
    document.documentElement.style.setProperty("--dark-bg", "#ffffff");
    a9.style.display = "inline-block";
    ha9 = 1;
}

darktheme.onclick = function () {
    darktheme.style.display = "none";
    lighttheme.style.display = "inline-block";
    document.documentElement.style.setProperty("--background", "#202020");
    document.documentElement.style.setProperty("--light-bg", "#404040");
    document.documentElement.style.setProperty("--text", "#ffffff");
    document.documentElement.style.setProperty("--dark-bg", "#101010");
}

cookiee.onclick = function () {
    clearInterval(rgbswitch);
    a10.style.display = "inline-block";
    ha10 = 1;
    btn.style.backgroundImage = "url(./assets/cookieHR.png)"
    btn.style.backgroundPosition = "center";
    btn.style.backgroundSize = "135%";
    document.documentElement.style.setProperty("--accent-color", "#000000");
    setTimeout(() => {
        document.documentElement.style.setProperty("--accent-color", "#000000");
    }, 1000);
}

rgbbtncolor = setInterval(() => {
    btnrgb.style.color = "#ff0000";
    btnrgb.style.borderColor = "#ff0000";
    setTimeout(() => {
        btnrgb.style.color = "#ff8000";
        btnrgb.style.borderColor = "#ff8000";
    }, 200);
    setTimeout(() => {
        btnrgb.style.color = "#ffff00";
        btnrgb.style.borderColor = "#ffff00";
    }, 300);
    setTimeout(() => {
        btnrgb.style.color = "#80ff00";
        btnrgb.style.borderColor = "#80ff00";
    }, 400);
    setTimeout(() => {
        btnrgb.style.color = "#00ff00";
        btnrgb.style.borderColor = "#00ff00";
    }, 500);
    setTimeout(() => {
        btnrgb.style.color = "#0080ff";
        btnrgb.style.borderColor = "#0080ff";
    }, 600);
    setTimeout(() => {
        btnrgb.style.color = "#0000ff";
        btnrgb.style.borderColor = "#0000ff";
    }, 700);
    setTimeout(() => {
        btnrgb.style.color = "#8000ff";
        btnrgb.style.borderColor = "#8000ff";
    }, 800);
    setTimeout(() => {
        btnrgb.style.color = "#ff0080";
        btnrgb.style.borderColor = "#ff0080";
    }, 900);
}, 1000);

setInterval(() => {
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?a1=" + ha1 + "&a2=" + ha2 + "&a3=" + ha3 + "&a4=" + ha4 + "&a5=" + ha5 + "&a6=" + ha6 + "&a7=" + ha7 + "&a8=" + ha8 + "&a9=" + ha9 + "&a10=" + ha10 + "&a11=" + ha11 + "&a12=" + ha12 + "&a13=" + ha13 + "&a14=" + ha14 + "&a15=" + ha15 + "&a16=" + ha16 + "&a20=" + ha20 + "&btncc=" + count + "&pcu=" + upgrades + "&acu=" + acupgrades + "&pg=" + hpg;
    window.history.pushState({ path: newurl }, '', newurl);
}, 2500);

new URLSearchParams(window.location.search).forEach((value, name) => {
    if (name === "btncc") {
        count = +value;
    }

    if (name === "pcu") {
        upgrades = +value;
        if (upgrades === 1) {
            upg1.style.display = "none";
            upg2.style.display = "inline-block";
        } else if (upgrades === 2) {
            upg1.style.display = "none";
            upg2.style.display = "none";
            upg3.style.display = "inline-block";
        } else if (upgrades === 3) {
            upg1.style.display = "none";
            upg3.style.display = "none";
            upg4.style.display = "inline-block";
        } else if (upgrades === 4) {
            upg1.style.display = "none";
            upg4.style.display = "none";
            upg5.style.display = "inline-block";
        } else if (upgrades === 5) {
            upg1.style.display = "none";
            upg5.style.display = "none";
            upg6.style.display = "inline-block";
        } else if (upgrades === 6) {
            upg1.style.display = "none";
            upg6.style.display = "none";
            upg7.style.display = "inline-block";
        } else if (upgrades === 7) {
            upg1.style.display = "none";
            upg7.style.display = "none";
            maxupg.style.display = "inline-block";
        }
    }

    if (name === "acu") {
        acupgrades = +value;
        if (acupgrades === 1) {
            clearInterval(countInterval);
            ac1.style.display = "none";
            upg2.style.display = "inline-block";
            countInterval = setInterval(() => {
                count += 1;
                counter.innerText = count;
            }, 1000);
        } else if (acupgrades === 2) {
            clearInterval(countInterval);
            ac1.style.display = "none";
            ac2.style.display = "none";
            ac3.style.display = "inline-block";
            countInterval = setInterval(() => {
                count += 1;
                counter.innerText = count;
            }, 200);
        } else if (acupgrades === 3) {
            clearInterval(countInterval);
            ac1.style.display = "none";
            ac3.style.display = "none";
            ac4.style.display = "inline-block";
            countInterval = setInterval(() => {
                count += 1;
                counter.innerText = count;
            }, 100);
        } else if (acupgrades === 4) {
            clearInterval(countInterval);
            ac1.style.display = "none";
            ac4.style.display = "none";
            ac5.style.display = "inline-block";
            countInterval = setInterval(() => {
                count += 1;
                counter.innerText = count;
            }, 20);
        } else if (acupgrades === 5) {
            clearInterval(countInterval);
            maxac.style.display = "inline-block";
            ac1.style.display = "none";
            ac5.style.display = "none";
            countInterval = setInterval(() => {
                count += 1;
                counter.innerText = count;
            }, 10);
        }
    }

    if (name === "a1") {
        if (value === "1") {
            ha1 = 1;
            a1.style.display = "inline-block";
        }
    }

    if (name === "a2") {
        if (value === "1") {
            ha2 = 1;
            a2.style.display = "inline-block";
        }
    }

    if (name === "a3") {
        if (value === "1") {
            ha3 = 1;
            a3.style.display = "inline-block";
        }
    }

    if (name === "a4") {
        if (value === "1") {
            ha4 = 1;
            a4.style.display = "inline-block";
        }
    }

    if (name === "a5") {
        if (value === "1") {
            ha5 = 1;
            a5.style.display = "inline-block";
        }
    }

    if (name === "a6") {
        if (value === "1") {
            ha6 = 1;
            a6.style.display = "inline-block";
        }
    }

    if (name === "a7") {
        if (value === "1") {
            ha7 = 1;
            a7.style.display = "inline-block";
        }
    }

    if (name === "a8") {
        if (value === "1") {
            ha8 = 1;
            a8.style.display = "inline-block";
        }
    }

    if (name === "a9") {
        if (value === "1") {
            ha9 = 1;
            a9.style.display = "inline-block";
        }
    }

    if (name === "a10") {
        if (value === "1") {
            ha10 = 1;
            a10.style.display = "inline-block";
        }
    }

    if (name === "a11") {
        if (value === "1") {
            ha11 = 1;
            a11.style.display = "inline-block";
        }
    }

    if (name === "a12") {
        if (value === "1") {
            ha12 = 1;
            a12.style.display = "inline-block";
        }
    }

    if (name === "a13") {
        if (value === "1") {
            ha13 = 1;
            a13.style.display = "inline-block";
        }
    }

    if (name === "a14") {
        if (value === "1") {
            ha14 = 1;
            a14.style.display = "inline-block";
        }
    }

    if (name === "a15") {
        if (value === "1") {
            ha15 = 1;
            a15.style.display = "inline-block";
        }
    }

    if (name === "a16") {
        if (value === "1") {
            ha16 = 1;
            a16.style.display = "inline-block";
        }
    }

	if (name === "a20") {
        if (value === "1") {
            ha20 = 1;
            a20.style.display = "inline-block";
        }
    }

    if (name === "pg") {
        if (value === "1") {
            hpg = 1;
            a17.style.display = "inline-block";
            pg1.style.display = "none";
            pg2.style.display = "inline-block";
        } else if (value === "2") {
            hpg = 2;
            a17.style.display = "inline-block";
            a18.style.display = "inline-block";
            pg1.style.display = "none";
            pg2.style.display = "none";
            pg3.style.display = "inline-block";
        } else if (value === "3") {
            hpg = 3;
            a17.style.display = "inline-block";
            a18.style.display = "inline-block";
            a19.style.display = "inline-block";
            pg1.style.display = "none";
            pg3.style.display = "none";
            maxpg.style.display = "inline-block";
        }
    }
});

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

moreopt.onclick = function () {
    moremenu.style.display = "block";
    setTimeout(() => {
        moremenu.style.opacity = "1";
    }, 1);
}

closeopt.onclick = function () {
    moremenu.style.opacity = "0";
    setTimeout(() => {
        moremenu.style.display = "none";
    }, 333);
}

wipedata.onclick = function () {
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "";
    window.history.pushState({ path: newurl }, '', newurl);
    count -= count;
    counter.innerText = count;
    upgrades = 0;
    clearInterval(countInterval);
    acupgrades = 0;
    maxac.style.display = "none";
    maxupg.style.display = "none";
    upg1.style.display = "inline-block";
    ac1.style.display = "inline-block";
    a1.style.display = "none";
    a2.style.display = "none";
    a3.style.display = "none";
    a4.style.display = "none";
    a5.style.display = "none";
    a6.style.display = "none";
    a7.style.display = "none";
    a8.style.display = "none";
    a9.style.display = "none";
    a10.style.display = "none";
    a11.style.display = "none";
    ha1 = 0;
    ha2 = 0;
    ha3 = 0;
    ha4 = 0;
    ha5 = 0;
    ha6 = 0;
    ha7 = 0;
    ha8 = 0;
    ha9 = 0;
    ha10 = 0;
    ha11 = 0;
    window.location.reload();
}

copyprog.onclick = function () {
    var copySave = "?" + new URLSearchParams(window.location.search);
    navigator.clipboard.writeText(copySave);
}

pasteprog.onclick = function () {
    var insertSave = prompt("Paste Save Code Below");
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + insertSave;
    window.history.pushState({ path: newurl }, '', newurl);
    window.location.reload();
}

function beforeUnloadListener(e) {
    return e.returnValue = "UPWBL";
};

document.body.addEventListener("click", () => {
    window.addEventListener("beforeunload", beforeUnloadListener, { capture: true });
});

theLIE.onclick = function() {
	ha20 = "1";
	a20.style.display = "inline-block";
}
