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







function applyCpuCoreFilter(ids){
    var value;
    for(var i=0;i<ids.length;i++){
        if(document.getElementById(ids[i]).checked){
            value=document.getElementById(ids[i]).value;
        }
    }
    cpuCore=value;
    reRenderComponents("add_cpu");
}

function applyCpuIgpuFilter(ids){
    var value;
    for(var i=0;i<ids.length;i++){
        if(document.getElementById(ids[i]).checked){
            value=document.getElementById(ids[i]).value;
        }
    }
    if(value=='true'){
        hasIgpu=true;
    }else if(value=='false'){
        hasIgpu=false;
    }else{
        hasIgpu=null;
    }
    reRenderComponents("add_cpu");
}



function reRenderComponents(y){
    if(y=="add_cpu"){
        document.getElementById('panelTitle').innerHTML='Select Cpu';
        document.getElementById('cpuList').innerHTML="";
        //sort();
        for(var i=0;i<CPUDATA.length;i++){
            if(filter("cpuList",CPUDATA[i])){
                createCard(CPUDATA[i],i,"cpuList");
            }
        }
    }else if(y=="add_motherboard"){
        document.getElementById('panelTitle').innerHTML='Select Motherboard';
        //sort();
        for(var i=0;i<MOTHERBOARDDATA.length;i++){
            if(filter("motherboardList",MOTHERBOARDDATA[i])){
                createCard(MOTHERBOARDDATA[i],i,"motherboardList");
            }
        }
    }else if(y=="add_ram"){
        document.getElementById('panelTitle').innerHTML='Select Ram';
        //sort();
        for(var i=0;i<RAMDATA.length;i++){
            if(filter("ramList",RAMDATA[i])){
                createCard(RAMDATA[i],i,"ramList");
            }
        }
    }else if(y=="add_gpu"){
        document.getElementById('panelTitle').innerHTML='Select Graphics Card';
        //sort();
        for(var i=0;i<GPUDATA.length;i++){
            if(filter("gpuList",GPUDATA[i])){
                createCard(GPUDATA[i],i,"gpuList");
            }
        }
    }else if(y=="add_hdd"){
        document.getElementById('panelTitle').innerHTML='Select Hard Disk';
        //sort();
        for(var i=0;i<HDDDATA.length;i++){
            if(filter("hddList",HDDDATA[i])){
                createCard(HDDDATA[i],i,"hddList");
            }
        }
    }else if(y=="add_ssd"){
        document.getElementById('panelTitle').innerHTML='Select SSD';
        //sort();
        for(var i=0;i<SSDDATA.length;i++){
            if(filter("ssdList",SSDDATA[i])){
                createCard(SSDDATA[i],i,"ssdList");
            }
        }
    }else if(y=="add_psu"){
        document.getElementById('panelTitle').innerHTML='Select Power Supply';
        //sort();
        for(var i=0;i<PSUDATA.length;i++){
            if(filter("psuList",PSUDATA[i])){
                createCard(PSUDATA[i],i,"psuList");
            }
        }
    }else if(y=="add_case"){
        document.getElementById('panelTitle').innerHTML='Select Case';
        //sort();
        for(var i=0;i<CASEDATA.length;i++){
            if(filter("caseList",CASEDATA[i])){
                createCard(CASEDATA[i],i,"caseList");
            }
        }
    }
}