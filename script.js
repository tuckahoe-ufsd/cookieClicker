let clicks = 0;

function updateClicksCountDisplay(){
    document.getElementById("clicksCountDisplay").innerText = clicks;
}

function increaseClicks(){
    clicks = clicks++;
    updateClicksCountDisplay();
}
