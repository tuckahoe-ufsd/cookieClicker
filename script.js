let clicks = 0;

//cpc level, price, amount
let cookiesPerClick = 1;
let cpcLevel = 0;
let cpcPrice = [50, 100, 200, 500, 1000, 2500, 5000, 10000, 20000, 50000];
let cpcAmount = [1, 2, 5, 10, 25, 50, 100, 150, 250, 500];

//onevent cookie button clicked
const cookieBTN = document.querySelector("#cookieButton");
if(cookieBTN){
    cookieBTN.addEventListener("click",updateClicks);
}

//updating clicks display after clicked
function updateClicks(){
    clicks = clicks + cpcAmount[cpcLevel];
    document.getElementById("clicksCountDisplay").innerHTML = "Clicks: " + clicks;
}

//onevent pwrup btn click
const pwrUpBTNConst = document.querySelector("#pwrUpBTN");
if(pwrUpBTNConst){
    pwrUpBTNConst.addEventListener("click",updateCPC);
}

//updating cpc after pwrup btn click
function updateCPC(){
    if(clicks >= cpcPrice[cpcLevel]){
        clicks = clicks - cpcPrice[cpcLevel];
        document.getElementById("clicksCountDisplay").innerHTML = "Clicks: " + clicks;
        cpcLevel = cpcLevel + 1;
        updateCPCBTN();
    }
}

function updateCPCBTN(){
    document.getElementById("pwrUpBTN").innerHTML = "Upgrade Cookies Per Click: " + cpcPrice[cpcLevel];
}