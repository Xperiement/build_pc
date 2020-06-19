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

function OptionPanelOn(id1,id2,id3,id4){
    document.getElementById(id1).style["height"]="100%";
    document.getElementById(id2).style["opacity"]="0%";
    document.getElementById(id2).style["display"]="none";
    document.getElementById(id3).style.transform="scale(100%)";
    document.getElementById(id4).style["display"]="block";
}


function closeOptionPanel(id1,id2,id3,id4){
    document.getElementById(id1).style["height"]="2rem";
    document.getElementById(id2).style["opacity"]="100%";
    document.getElementById(id2).style["display"]="block";
    document.getElementById(id3).style.transform="scale(0%)";
    document.getElementById(id4).style["display"]="none";
}






function applyCpuFilter(prop,value){
    if(prop=="core"){
        cpuCore=value;
    }else if(prop=="igpu"){
        hasIgpu=value;
    }else if(prop=='brand'){
        cpuBrand=value;
    }else if(prop=='socket'){
        cpuSocket=value;
    }
    reRenderComponents("add_cpu");
}



function reRenderComponents(y){
    if(y=="add_cpu"){
        document.getElementById('panelTitle').innerHTML='Select Cpu';
        document.getElementById('cpuList').innerHTML="";
        sort("add_cpu");
        for(var i=0;i<CPUDATA.length;i++){
            if(filter("cpuList",CPUDATA[i])){
                createCard(CPUDATA[i],i,"cpuList");
            }
        }
    }else if(y=="add_motherboard"){
        document.getElementById('panelTitle').innerHTML='Select Motherboard';
        sort("add_motherboard");
        for(var i=0;i<MOTHERBOARDDATA.length;i++){
            if(filter("motherboardList",MOTHERBOARDDATA[i])){
                createCard(MOTHERBOARDDATA[i],i,"motherboardList");
            }
        }
    }else if(y=="add_ram"){
        document.getElementById('panelTitle').innerHTML='Select Ram';
        sort("add_ram");
        for(var i=0;i<RAMDATA.length;i++){
            if(filter("ramList",RAMDATA[i])){
                createCard(RAMDATA[i],i,"ramList");
            }
        }
    }else if(y=="add_gpu"){
        document.getElementById('panelTitle').innerHTML='Select Graphics Card';
        sort("add_gpu");
        for(var i=0;i<GPUDATA.length;i++){
            if(filter("gpuList",GPUDATA[i])){
                createCard(GPUDATA[i],i,"gpuList");
            }
        }
    }else if(y=="add_hdd"){
        document.getElementById('panelTitle').innerHTML='Select Hard Disk';
        sort("add_hdd");
        for(var i=0;i<HDDDATA.length;i++){
            if(filter("hddList",HDDDATA[i])){
                createCard(HDDDATA[i],i,"hddList");
            }
        }
    }else if(y=="add_ssd"){
        document.getElementById('panelTitle').innerHTML='Select SSD';
        sort("add_ssd");
        for(var i=0;i<SSDDATA.length;i++){
            if(filter("ssdList",SSDDATA[i])){
                createCard(SSDDATA[i],i,"ssdList");
            }
        }
    }else if(y=="add_psu"){
        document.getElementById('panelTitle').innerHTML='Select Power Supply';
        sort("add_psu");
        for(var i=0;i<PSUDATA.length;i++){
            if(filter("psuList",PSUDATA[i])){
                createCard(PSUDATA[i],i,"psuList");
            }
        }
    }else if(y=="add_case"){
        document.getElementById('panelTitle').innerHTML='Select Case';
        sort("add_case");
        for(var i=0;i<CASEDATA.length;i++){
            if(filter("caseList",CASEDATA[i])){
                createCard(CASEDATA[i],i,"caseList");
            }
        }
    }
}