function createOptionsPanel(id){
    var x=document.createElement("div");
    x.classList.add("infoPanel");
    x.setAttribute("id",id+"Info");
    var y=document.createElement("div");
    y.classList.add("mainHead");
    y.setAttribute("id",id+"InfoContainer");
    x.appendChild(y)
    return x;
}

function OptionsHandler(oOverlayId,containerId){
    if(containerId=="cpuList"){
        document.getElementById(containerId).appendChild(get_cpu_Options_container(oOverlayId));
    }
    openOverlay(oOverlayId);
}