//Open the clear panel
async function openClearPanel(){
    document.getElementById("clearBtnPanel").style["height"]="100%";
    document.getElementById("clearBtnPanel").style["width"]="100%";
    document.getElementById("clearBtnPanel").style["border-radius"]=".5rem";


    document.getElementById("GuunerBtn").style["display"]="block";
    await sleep(200);
    document.getElementById("GuunerBtn").style["opacity"]="100%";
}
//Close the clear panel
async function closeClearPanel(){
    document.getElementById("clearBtnPanel").style["height"]="10px";
    document.getElementById("clearBtnPanel").style["width"]="100%";
    document.getElementById("clearBtnPanel").style["border-radius"]=".5rem";


    document.getElementById("GuunerBtn").style["opacity"]="0%";
    await sleep(200);
    document.getElementById("GuunerBtn").style["display"]="block";
}

//Filter Panel toggler
function OptionPanelOn(id1,id2,id3,id4){
    document.getElementById(id1).style["height"]="100%";
    document.getElementById(id2).style["opacity"]="0%";
    document.getElementById(id2).style["display"]="none";
    document.getElementById(id3).style["display"]="flex";
    document.getElementById(id4).style["display"]="block";
}
//Filter Panel toggler
function closeOptionPanel(id1,id2,id3,id4){
    document.getElementById(id1).style["height"]="2rem";
    document.getElementById(id2).style["opacity"]="100%";
    document.getElementById(id2).style["display"]="block";
    document.getElementById(id3).style["display"]="none";
    document.getElementById(id4).style["display"]="none";
}


//Rerender components after custom filtering
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

//Genarate list of items of selected components
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
//Helper function for genarateStats() [create separator between two list item]
function getSeparator(){
    var div=document.createElement("div");
    div.classList.add("separator");
    return div;
}
//Helper function for genarateStats() [Toggle handler for list item]
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
//Helper function for genarateStats() [Helps to create list items]
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





//Taggle handler for autoAi
function switchAutoAi(){
    if(autoAi){
        autoAi=false;
        document.getElementById('Auto_Ai').classList.remove('enabledAi');
    }else{
        autoAi=true;
        document.getElementById('Auto_Ai').classList.add('enabledAi');
    }
    resetFilter();
}

//Create Card for component list
async function createCard(arg,index,id){
    var brand=arg.brand;
    var name=arg.model;
    var price=arg.price;
    //document.getElementById(id).innerHTML="";
    document.getElementById(id).appendChild(createInfoPanel(id));
    await sleep(1);

    var fansan=getCollecter(arg,id);

    var card=document.createElement("div");
    card.classList.add("card1");

//<div id="myMotherboardImg" class="imageContainer" onclick="changePanel('dashboard','add_motherboard')"></div>
    var img=document.createElement("div");
    img.classList.add("imageContainerEx");
    img.setAttribute("onclick",fansan);
    //img.setAttribute("style","background-image:url('res/images/amd_one.svg'); background-size:'auto 100px';");
    img.style["backgroundImage"]="url('"+getImage(arg,id)+"')";

    //Size Of the image
    if(id=="ramList"||id=="ssdList"){
        x="auto 200px";
    }else if(id=="psuList"||id=="gpuList"){
        x="auto 160px";
    }else if(id=="hddList"){
        x="auto 120px";
    }else if(id=="caseList"){
        x="auto 180px";
    }else{
        x="auto 100px";
    }
    img.style["backgroundSize"]=x;

    var p=document.createElement("p");
    p.classList.add("type","mediumTitleEx");
    p.innerHTML=price;


    var p2=document.createElement("p");
    p2.classList.add("compoDetails","smallTitleEx","pointerCursor");
    p2.setAttribute("onclick",genarateSubInfo(id,index,"Info","InfoContainer"));
    p2.innerHTML=name;
    var p3=document.createElement("p");
    p3.classList.add("compoDetails","slighlySmallTitle");
    p3.innerHTML=getShortInfo(id,arg);



    /*var subdiv=document.createElement("div");
    subdiv.setAttribute("style","margin-top: .5rem;");


    var btn=document.createElement("button");
    btn.setAttribute("onclick",fansan);
    btn.classList.add("cardBtn");
    btn.innerHTML="Add";

    subdiv.appendChild(btn);
    card.appendChild(p);*/
    card.appendChild(img);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p);
    //card.appendChild(subdiv);
    document.getElementById(id).appendChild(card);

}

function genarateSubInfo(id,index,x,y){
    var funName="subInfoHandler(";
    return funName+"'"+id+"',"+index+",'"+id+x+"','"+id+y+"')";
}
//Get proper image of  component
function getImage(arg,id){
    var x="res/images/";
    var z=".svg"
    var y;
    if(id=="cpuList"){
        if(arg.brand=="Intel"||arg.brand=="intel"||arg.brand=="INTEL"){
            if(arg.model.indexOf('i3')!=-1){
                y="intel_model_one_i3";
            }else if(arg.model.indexOf('i5')!=-1){
                y="intel_model_one_i5";
            }else if(arg.model.indexOf('i7')!=-1){
                y="intel_model_one_i7";
            }else if(arg.model.indexOf('i9')!=-1){
                y="intel_model_one_i9";
            }
        }else{
            return "res/images/amd_one.svg";
        }
    }else if(id=="motherboardList"){
        y="motherboard";
    }else if(id=="ramList"){
        y="ram";
    }else if(id=="ssdList"){
        if(arg.interface=="SATA"||arg.interface=="sata"){
            y="sata_ssd";
        }else if(arg.type=="NVME"||arg.type=="nvme"||arg.type=="Nvme"){
            y="nvme_m_2";
        }else{
            y="sata_m_2";
        }
    }else if(id=="hddList"){
        y="hdd";
    }else if(id=="gpuList"){
        if(arg.platform=="amd"||arg.platform=="Amd"||arg.platform=="AMD"){
            y="gpu_amd";
        }else{
            y="gpu_nvidia";
        }
    }else if(id=="psuList"){
        y="psu";
    }else{
        y="case";
    }

    return x+y+z;
}
//Get short info for cards
function getShortInfo(id,data){
    var x='';
    if(id=="cpuList"){//3.4GHZ, 2 cores 4 threads
        return data.baseClock+", "+data.core+" cores "+data.thread+" threads";
    }else if(id=="motherboardList"){
        return data.platform+" "+data.chipset+" chipset "+data.size+" motherboard";
    }else if(id=="ramList"){
        return data.capacity+"GB x "+data.quantity+", "+data.speed+" MHZ";
    }else if(id=="gpuList"){
        return data.vram+"GB "+data.vram_type;
    }else if(id=="hddList"){
        return data.capacity+"TB Hard drive";
    }else if(id=="ssdList"){
        x='';
        if(data.type=="SATAL"){
            x=data.interface+" 2.5' inch";
        }else{
            x=data.interface+" "+data.type;
        }
        if(data.capacity<120){
            return data.capacity+"TB "+x+" drive";
        }else{
            return data.capacity+"GB "+x+" drive";
        }
    }else if(id=="psuList"){
        x='';
        if(data.has_80_cartification && data.type_80_plus=="Default"){
            x="80+ Plus";
        }else if(data.has_80_cartification){
            x="80+ Plus "+data.type_80_plus;
        }else{
            x='PowerSupply';
        }
        return data.capacity+"W "+x;
    }else if(id=="caseList"){
        return data.type+" Case";
    }
}
//Helpes to create load()'s parameter of component cards
function getCollecter(arg,id){
    var to;
    if(id=="cpuList"){
        to="add_cpu";
    }else if(id=="motherboardList"){
        to="add_motherboard";

    }else if(id=="ramList"){
        to="add_ram";

    }else if(id=="gpuList"){
        to="add_gpu";

    }else if(id=="hddList"){
        to="add_hdd";

    }else if(id=="ssdList"){
        to="add_ssd";

    }else if(id=="psuList"){
        to="add_psu";

    }else if(id=="caseList"){
        to="add_case";
    }

    var args="'"+id+"','"+to+"','"+"dashboard"+"','"+arg.brand+"','"+arg.model+"','"+arg.price+"'";

    return ("load("+args+")");

}


//Clear Dashbaord Cards
async function cleanCards(){
    document.getElementById("desktopName").value='';
    clearData('cpu','cpu_clearBtnPanel');
    clearData('motherboard','motherboard_clearBtnPanel');
    clearData('ram','ram_clearBtnPanel');
    clearData('gpu','gpu_clearBtnPanel');
    clearData('hdd','hdd_clearBtnPanel');
    clearData('ssd','ssd_clearBtnPanel');
    clearData('psu','psu_clearBtnPanel');
    clearData('case','case_clearBtnPanel');
}