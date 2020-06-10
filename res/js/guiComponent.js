async function openClearPanel(){
    document.getElementById("clearBtnPanel").style["height"]="100%";
    document.getElementById("clearBtnPanel").style["width"]="100%";
    document.getElementById("clearBtnPanel").style["border-radius"]=".5rem";


    document.getElementById("GuunerBtn").style["display"]="block";
    await sleep(200);
    document.getElementById("GuunerBtn").style["opacity"]="100%";
}

async function closeClearPanel(){
    document.getElementById("clearBtnPanel").style["height"]="10px";
    document.getElementById("clearBtnPanel").style["width"]="100%";
    document.getElementById("clearBtnPanel").style["border-radius"]=".5rem";


    document.getElementById("GuunerBtn").style["opacity"]="0%";
    await sleep(200);
    document.getElementById("GuunerBtn").style["display"]="block";
}