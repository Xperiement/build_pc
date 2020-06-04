function createInfoPanel(id){
    var x=document.createElement("div");
    x.classList.add("infoPanel");
    x.setAttribute("id",id+"Info");
    var y=document.createElement("div");
    y.classList.add("mainHead");
    y.setAttribute("id",id+"InfoContainer");
    x.appendChild(y)
    return x;
}

//InfoHandler
function dashboardInfoHandler(x){
    document.getElementById("guun").innerHTML="";
    if(x=="cpuList"){
        document.getElementById("guun").appendChild(get_cpu_info_container(myCPU,'infoPanel'));
    }else if(x=="motherboardList"){
        document.getElementById("guun").appendChild(get_cpu_info_container(myMOTHERBOARD,'infoPanel'));
    }else if(x=="ramList"){
        document.getElementById("guun").appendChild(get_cpu_info_container(myRAM,'infoPanel'));
    }else if(x=="gpuList"){
        document.getElementById("guun").appendChild(get_cpu_info_container(myGPU,'infoPanel'));
    }else if(x=="hddList"){
        document.getElementById("guun").appendChild(get_cpu_info_container(myHDD,'infoPanel'));
    }else if(x=="ssdList"){
        document.getElementById("guun").appendChild(get_cpu_info_container(mySSD,'infoPanel'));
    }else if(x=="psuList"){
        document.getElementById("guun").appendChild(get_cpu_info_container(myPSU,'infoPanel'));
    }else if(x=="caseList"){
        document.getElementById("guun").appendChild(get_cpu_info_container(myCASE,'infoPanel'));
    }
    openOverlay('infoPanel');
}

function subInfoHandler(x,index,oOverlayId,containerId){
    document.getElementById(containerId).innerHTML="";
    if(x=="cpuList"){
        document.getElementById(containerId).appendChild(get_cpu2_info_container(CPUDATA,index,oOverlayId));
    }else if(x=="motherboardList"){
        document.getElementById(containerId).appendChild(get_cpu2_info_container(MOTHERBOARDDATA,index,oOverlayId));
    }else if(x=="ramList"){
        document.getElementById(containerId).appendChild(get_cpu2_info_container(RAMDATA,index,oOverlayId));
    }else if(x=="gpuList"){
        document.getElementById(containerId).appendChild(get_cpu2_info_container(GPUDATA,index,oOverlayId));
    }else if(x=="hddList"){
        document.getElementById(containerId).appendChild(get_cpu2_info_container(HDDDATA,index,oOverlayId));
    }else if(x=="ssdList"){
        document.getElementById(containerId).appendChild(get_cpu2_info_container(SSDDATA,index,oOverlayId));
    }else if(x=="psuList"){
        document.getElementById(containerId).appendChild(get_cpu2_info_container(PSUDATA,index,oOverlayId));
    }else if(x=="caseList"){
        document.getElementById(containerId).appendChild(get_cpu2_info_container(CASEDATA,index,oOverlayId));
    }
    openOverlay(oOverlayId);
}


function get_cpu_info_container(DATA,id){

    //Main Div
    var mainDiv=document.createElement("div");
    mainDiv.classList.add("mainDesc");

    //Heading 
    var p1=createParagraph(DATA.brand,["type","bigTitle"]);
    //Sub Heading
    var p2=createParagraph(DATA.model,["type","mediumTitle"]);

    //Infos
    var p3=createParagraph("<br>dkjasbdjasf ",["type","smallTitleEx"]);
    var p4=createParagraph("fgdfg",["type","smallTitleEx"]);

    //Close Button
    var closeBtn=document.createElement("img");
    closeBtn.classList.add("closeBtn");
    closeBtn.setAttribute("src","res/images/close.svg");
    closeBtn.setAttribute("onclick","closeOverlay('"+id+"')");


    //Adding into the div
    mainDiv.appendChild(p1);
    mainDiv.appendChild(p2);
    mainDiv.appendChild(p3);
    mainDiv.appendChild(p4);
    mainDiv.appendChild(closeBtn);
    return mainDiv;
}

function get_cpu2_info_container(DATA,index,id){

    //Main Div
    var mainDiv=document.createElement("div");
    mainDiv.classList.add("mainDesc");

    //Heading 
    var p1=createParagraph(DATA[index].brand,["type","bigTitle"]);
    //Sub Heading
    var p2=createParagraph(DATA[index].model,["type","mediumTitle"]);

    //Infos
    var p3=createParagraph("<br>Heelo 1 ",["type","smallTitleEx"]);
    var p4=createParagraph("Ghasdff",["type","smallTitleEx"]);

    //Close Button
    var closeBtn=document.createElement("img");
    closeBtn.classList.add("closeBtn");
    closeBtn.setAttribute("src","res/images/close.svg");
    closeBtn.setAttribute("onclick","closeOverlay('"+id+"')");


    //Adding into the div
    mainDiv.appendChild(p1);
    mainDiv.appendChild(p2);
    mainDiv.appendChild(p3);
    mainDiv.appendChild(p4);
    mainDiv.appendChild(closeBtn);
    return mainDiv;
}

function createParagraph(text,classes){
    var x=document.createElement("p");
    for(var i=0;i<classes.length;i++){
        x.classList.add(classes[i]);
    }
    x.innerHTML=text;
    return x;
}