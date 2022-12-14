var contentBox = document.getElementById("ctxbox");
const observer = new MutationObserver(function (mutations_list) {
    mutations_list.forEach(function (mutation) {
        mutation.removedNodes.forEach(function (removed_node) {
            if (removed_node.id == "waterMark") {
                alert("Nice Try");
                count = undefined;
                delete count;
                clearInterval(countInterval);
                setInterval(() => {
                    var nicetry = document.createElement("button");
                    nicetry.innerText = "Made By Patrick Gledhill";
                    document.body.append(nicetry);
                    nicetry.style.background = "#ff0000";
                    nicetry.style.color = "#ffffff";
                    nicetry.style.zIndex = "99999999999999";
                    counter.style.color = "#ff0000";
                    counter.innerText = "ERROR";
                    counter.style.background = "#000000";
                    counter.style.boxShadow = "0px 0px 25px #ff0000";
                    btn.style.color = "#ff0000";
                    btn.innerText = "ERROR";
                    btn.style.background = "#000000";
                    btn.style.boxShadow = "0px 0px 25px #ff0000";
                    btn.style.fontSize = "50px";
                    setTimeout(() => {
                        nicetry.style.background = "#ff0000";
                    }, 250);
                    setTimeout(() => {
                        nicetry.style.background = "#800000";
                    }, 500);
                    setTimeout(() => {
                        nicetry.style.background = "#ff0000";
                    }, 750);
                    setTimeout(() => {
                        nicetry.style.background = "#80000";
                    }, 1000);
                    setTimeout(() => {
                        nicetry.style.background = "#ff0000";
                    }, 1250);
                    setTimeout(() => {
                        nicetry.style.background = "#800000";
                    }, 1500);
                    setTimeout(() => {
                        nicetry.style.background = "#ff0000";
                    }, 1750);
                    setTimeout(() => {
                        nicetry.style.background = "#800000";
                    }, 2000);

                    document.documentElement.style.setProperty("--accent-color", "#ff0000");
                    document.documentElement.style.setProperty("--background", "#800000");

                    btnred.innerText = "Nice Try";
                    btnred.style.color = "#ff0000";
                    btnred.style.background = "#800000";
                    btnred.style.boxShadow = "0px 0px 25px #ff0000";
                    btnred.style.borderColor = "#ff0000";

                    btngreen.innerText = "Nice Try";
                    btngreen.style.color = "#ff0000";
                    btngreen.style.background = "#800000";
                    btngreen.style.boxShadow = "0px 0px 25px #ff0000";
                    btngreen.style.borderColor = "#ff0000";

                    btnorange.innerText = "Nice Try";
                    btnorange.style.color = "#ff0000";
                    btnorange.style.background = "#800000";
                    btnorange.style.boxShadow = "0px 0px 25px #ff0000";
                    btnorange.style.borderColor = "#ff0000";

                    btnyellow.innerText = "Nice Try";
                    btnyellow.style.color = "#ff0000";
                    btnyellow.style.background = "#800000";
                    btnyellow.style.boxShadow = "0px 0px 25px #ff0000";
                    btnyellow.style.borderColor = "#ff0000";

                    btnblue.innerText = "Nice Try";
                    btnblue.style.color = "#ff0000";
                    btnblue.style.background = "#800000";
                    btnblue.style.boxShadow = "0px 0px 25px #ff0000";
                    btnblue.style.borderColor = "#ff0000";

                    btnpurple.innerText = "Nice Try";
                    btnpurple.style.color = "#ff0000";
                    btnpurple.style.background = "#800000";
                    btnpurple.style.boxShadow = "0px 0px 25px #ff0000";
                    btnpurple.style.borderColor = "#ff0000";

                    btnblank.innerText = "Nice Try";
                    btnblank.style.color = "#ff0000";
                    btnblank.style.background = "#800000";
                    btnblank.style.boxShadow = "0px 0px 25px #ff0000";
                    btnblank.style.borderColor = "#ff0000";

                    btnrgb.innerText = "Nice Try";
                    btnrgb.style.color = "#ff0000";
                    btnrgb.style.background = "#800000";
                    btnrgb.style.boxShadow = "0px 0px 25px #ff0000";
                    btnrgb.style.borderColor = "#ff0000";

                    openach.innerText = "Nice Try";
                    openach.style.color = "#ff0000";
                    openach.style.background = "#800000";
                    openach.style.boxShadow = "0px 0px 25px #ff0000";
                    openach.style.borderColor = "#ff0000";

                    closeach.innerText = "Nice Try";
                    closeach.style.color = "#ff0000";
                    closeach.style.background = "#800000";
                    closeach.style.boxShadow = "0px 0px 25px #ff0000";
                    closeach.style.borderColor = "#ff0000";

                    lighttheme.innerText = "Nice Try";
                    lighttheme.style.color = "#ff0000";
                    lighttheme.style.background = "#800000";
                    lighttheme.style.boxShadow = "0px 0px 25px #ff0000";
                    lighttheme.style.borderColor = "#ff0000";

                    darktheme.innerText = "Nice Try";
                    darktheme.style.color = "#ff0000";
                    darktheme.style.background = "#800000";
                    darktheme.style.boxShadow = "0px 0px 25px #ff0000";
                    darktheme.style.borderColor = "#ff0000";

                    moreopt.innerText = "Nice Try";
                    moreopt.style.color = "#ff0000";
                    moreopt.style.background = "#800000";
                    moreopt.style.boxShadow = "0px 0px 25px #ff0000";
                    moreopt.style.borderColor = "#ff0000";

                    upg1.style.display = "none";
                    upg2.style.display = "none";
                    upg3.style.display = "none";
                    upg4.style.display = "none";
                    upg5.style.display = "none";
                    upg6.style.display = "none";
                    upg7.style.display = "none";

                    ac1.style.display = "none";
                    ac2.style.display = "none";
                    ac3.style.display = "none";
                    ac4.style.display = "none";
                    ac5.style.display = "none";
                    noac.style.display = "inline-block";
                    noupg.style.display = "inline-block";
                    maxac.innerText = "ERROR:_removedNode2_C172_WTMARK2";
                    maxupg.innerText = "ERROR:_removedNode_C17_WTMARK";
                    maxac.style.color = "#ff0000";
                    maxac.style.borderColor = "#ff0000";
                    maxupg.style.color = "#ff0000";
                    maxupg.style.borderColor = "#ff0000";

                    clearInterval(rgbbtncolor);
                    clearInterval(rgbswitch);

                    var niceTryMP3 = new Audio("./assets/mixkit-city-alert-siren-loop-1008.wav");
                    niceTryMP3.play();
                }, 1);
                observer.disconnect();
            }
        });
    });
});

observer.observe(contentBox, { subtree: true, childList: true });
