const devmenu = document.getElementById("devmenu");

dragElement(devmenu);

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

const getc = document.getElementById("getc");
const getach = document.getElementById("getach");
const clearurl = document.getElementById("clearurl");
const rewaf = document.getElementById("rewaf");
const wipesavedev = document.getElementById("wipesavedev");

getc.onclick = function() {
    count += 292796;
    counter.innerText = count;
}

getach.onclick = function() {
    a1.style.display = "inline-block";
    ha1 = 1;
    a2.style.display = "inline-block";
    ha2 = 1;
    a3.style.display = "inline-block";
    ha3 = 1;
    a4.style.display = "inline-block";
    ha4 = 1;
    a5.style.display = "inline-block";
    ha5 = 1;
    a6.style.display = "inline-block";
    ha6 = 1;
    a7.style.display = "inline-block";
    ha7 = 1;
    a8.style.display = "inline-block";
    ha8 = 1;
    a9.style.display = "inline-block";
    ha9 = 1;
    a10.style.display = "inline-block";
    ha10 = 1;
    a11.style.display = "inline-block";
    ha11 = 1;
}

clearurl.onclick = function() {
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "";
    window.history.pushState({ path: newurl }, '', newurl);
    window.location.reload();
}

wipesavedev.onclick = function() {
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

rewaf.onclick = function() {
    document.querySelector("#waterMark").remove();
    devmenu.remove();
}
