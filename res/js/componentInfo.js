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


function get_cpu_info_container(DATA,id){

    //Main Div
    var mainDiv=document.createElement("div");
    mainDiv.classList.add("mainDesc");

    //Heading 
    var p1=createParagraph(DATA.brand,["type","bigTitle"]);
    //Sub Heading
    var p2=createParagraph(DATA.model,["type","mediumTitle"]);

    //Infos
    var p3=createParagraph("<br>Babar bichi",["type","smallTitleEx"]);
    var p4=createParagraph("DadurBichi",["type","smallTitleEx"]);

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