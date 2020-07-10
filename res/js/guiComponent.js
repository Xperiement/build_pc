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
    document.getElementById(id3).style["display"]="flex";
    document.getElementById(id4).style["display"]="block";
}


function closeOptionPanel(id1,id2,id3,id4){
    document.getElementById(id1).style["height"]="2rem";
    document.getElementById(id2).style["opacity"]="100%";
    document.getElementById(id2).style["display"]="block";
    document.getElementById(id3).style["display"]="none";
    document.getElementById(id4).style["display"]="none";
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
        document.getElementById('motherboardList').innerHTML="";
        sort("add_motherboard");
        for(var i=0;i<MOTHERBOARDDATA.length;i++){
            if(filter("motherboardList",MOTHERBOARDDATA[i])){
                createCard(MOTHERBOARDDATA[i],i,"motherboardList");
            }
        }
    }else if(y=="add_ram"){
        document.getElementById('panelTitle').innerHTML='Select Ram';
        document.getElementById('ramList').innerHTML="";
        sort("add_ram");
        for(var i=0;i<RAMDATA.length;i++){
            if(filter("ramList",RAMDATA[i])){
                createCard(RAMDATA[i],i,"ramList");
            }
        }
    }else if(y=="add_gpu"){
        document.getElementById('panelTitle').innerHTML='Select Graphics Card';
        document.getElementById('gpuList').innerHTML="";
        sort("add_gpu");
        for(var i=0;i<GPUDATA.length;i++){
            if(filter("gpuList",GPUDATA[i])){
                createCard(GPUDATA[i],i,"gpuList");
            }
        }
    }else if(y=="add_hdd"){
        document.getElementById('panelTitle').innerHTML='Select Hard Disk';
        document.getElementById('hddList').innerHTML="";
        sort("add_hdd");
        for(var i=0;i<HDDDATA.length;i++){
            if(filter("hddList",HDDDATA[i])){
                createCard(HDDDATA[i],i,"hddList");
            }
        }
    }else if(y=="add_ssd"){
        document.getElementById('panelTitle').innerHTML='Select SSD';
        document.getElementById('ssdList').innerHTML="";
        sort("add_ssd");
        for(var i=0;i<SSDDATA.length;i++){
            if(filter("ssdList",SSDDATA[i])){
                createCard(SSDDATA[i],i,"ssdList");
            }
        }
    }else if(y=="add_psu"){
        document.getElementById('panelTitle').innerHTML='Select Power Supply';
        document.getElementById('psuList').innerHTML="";
        sort("add_psu");
        for(var i=0;i<PSUDATA.length;i++){
            if(filter("psuList",PSUDATA[i])){
                createCard(PSUDATA[i],i,"psuList");
            }
        }
    }else if(y=="add_case"){
        document.getElementById('panelTitle').innerHTML='Select Case';
        document.getElementById('caseList').innerHTML="";
        sort("add_case");
        for(var i=0;i<CASEDATA.length;i++){
            if(filter("caseList",CASEDATA[i])){
                createCard(CASEDATA[i],i,"caseList");
            }
        }
    }
}


function genarateStats(){
    var x=document.getElementById('listContainer');
    x.innerHTML="";
    TOTALPRICE=0;
    if(myCPU!=null){
        x.appendChild(getElement("CpuStat",statCpu,myCPU.model,myCPU.price));
        x.appendChild(getSeparator());
    }
    if(myMOTHERBOARD!=null){
        x.appendChild(getElement("MotherboardStat",statMotherboard,myMOTHERBOARD.model,myMOTHERBOARD.price));
        x.appendChild(getSeparator());
    }
    if(myRAM!=null){
        x.appendChild(getElement("RamStat",statRam,myRAM.model,myRAM.price));
        x.appendChild(getSeparator());
    }
    if(myGPU!=null){
        x.appendChild(getElement("GpuStat",statGpu,myGPU.model,myGPU.price));
        x.appendChild(getSeparator());
    }
    if(myHDD!=null){
        x.appendChild(getElement("HddStat",statHdd,myHDD.model,myHDD.price));
        x.appendChild(getSeparator());
    }
    if(mySSD!=null){
        x.appendChild(getElement("SsdStat",statSsd,mySSD.model,mySSD.price));
        x.appendChild(getSeparator());
    }
    if(myPSU!=null){
        x.appendChild(getElement("PsuStat",statPsu,myPSU.model,myPSU.price));
        x.appendChild(getSeparator());
    }
    if(myCASE!=null){
        x.appendChild(getElement("CaseStat",statCase,myCASE.model,myCASE.price));
        x.appendChild(getSeparator());
    }
    document.getElementById('panelTitle').innerHTML='Total - '+TOTALPRICE;
}

function getSeparator(){
    var div=document.createElement("div");
    div.classList.add("separator");
    return div;
}

function toggleStat(id){
    if(id=="CpuStat"){
        statCpu ? statCpu=false : statCpu=true;
    }else if(id=="MotherboardStat"){
        statMotherboard ? statMotherboard=false : statMotherboard=true;
    }else if(id=="RamStat"){
        statRam ? statRam=false : statRam=true;
    }else if(id=="GpuStat"){
        statGpu ? statGpu=false : statGpu=true;
    }else if(id=="HddStat"){
        statHdd ? statHdd=false : statHdd=true;
    }else if(id=="SsdStat"){
        statSsd ? statSsd=false : statSsd=true;
    }else if(id=="PsuStat"){
        statPsu ? statPsu=false : statPsu=true;
    }else if(id=="CaseStat"){
        statCase ? statCase=false : statCase=true;
    }
    genarateStats();
}

function getElement(compoType,enabled,CompoName,price){
    var mainContainer=document.createElement("div");
    mainContainer.classList.add("row");
    //mainContainer.classList.add("border");
    mainContainer.setAttribute("id",compoType);
    mainContainer.setAttribute("onclick","toggleStat('"+compoType+"')");
    if(!enabled){
        mainContainer.classList.add("disable");
    }else{
        TOTALPRICE+=price;
    }

    var info=document.createElement("div");
    info.classList.add("col");
    var type=document.createElement("div");
    type.classList.add("element");
    type.classList.add("smallTitleEx");
    type.innerHTML=compoType.substring(0,compoType.indexOf("Stat"));

    var name=document.createElement("div");
    name.classList.add("element");
    name.classList.add("mediumTitleEx");
    name.innerHTML=CompoName;
    info.appendChild(type);
    info.appendChild(name);

    var priceCol=document.createElement("div");
    priceCol.classList.add("col");

    var priceP=document.createElement("div");
    priceP.classList.add("price");
    priceP.classList.add("mediumTitleEx");
    priceP.innerHTML=price;

    priceCol.appendChild(priceP);

    mainContainer.appendChild(info);
    mainContainer.appendChild(priceCol);
    return mainContainer;
}