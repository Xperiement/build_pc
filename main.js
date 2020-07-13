include("res/js/data.js");
include("res/js/componentInfo.js");
include("res/js/guiComponent.js");
include("res/js/otherOptions.js");
include("res/js/clearData.js");
include("res/js/filters.js");
include("res/js/filterAi.js");
include("res/js/sort.js");

var lowToHigh=false;
var highToLow=false;

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function openOverlay(x){
    document.getElementById(x).style['display']='flex';
    await sleep(100);
    document.getElementById(x).style['opacity']='100%';
}
async function closeOverlay(x){
    document.getElementById(x).style['opacity']='0%';
    await sleep(1080);
    document.getElementById(x).style['display']='none';
}

async function changePanel(x,y){
    document.getElementById(x).style['opacity']='0%';
    await sleep(280);
    document.getElementById(x).style['display']='none';
    document.getElementById(y).style['display']='flex';
    await sleep(280);
    document.getElementById(y).style['opacity']='100%';
    if(y=="add_cpu"){
        setAction("changePanel('"+y+"','"+x+"')","backBtn");
        document.getElementById('panelTitle').innerHTML='Select Cpu';
        sort("add_cpu");
        setAutoFilter(y);
        for(var i=0;i<CPUDATA.length;i++){
            if(filter("cpuList",CPUDATA[i])&&isCompatibleCpu(CPUDATA[i].genaration)){
                createCard(CPUDATA[i],i,"cpuList");
            }
        }
    }else if(y=="add_motherboard"){
        setAction("changePanel('"+y+"','"+x+"')","backBtn");
        document.getElementById('panelTitle').innerHTML='Select Motherboard';
        sort("add_motherboard");
        setAutoFilter(y);
        for(var i=0;i<MOTHERBOARDDATA.length;i++){
            if(filter("motherboardList",MOTHERBOARDDATA[i])&&isCompatibleMotherboard(MOTHERBOARDDATA[i].chipset)){
                createCard(MOTHERBOARDDATA[i],i,"motherboardList");
            }
        }
    }else if(y=="add_ram"){
        setAction("changePanel('"+y+"','"+x+"')","backBtn");
        document.getElementById('panelTitle').innerHTML='Select Ram';
        sort("add_ram");
        setAutoFilter(y);
        for(var i=0;i<RAMDATA.length;i++){
            if(filter("ramList",RAMDATA[i])){
                createCard(RAMDATA[i],i,"ramList");
            }
        }
    }else if(y=="add_gpu"){
        setAction("changePanel('"+y+"','"+x+"')","backBtn");
        document.getElementById('panelTitle').innerHTML='Select Graphics Card';
        sort("add_gpu");
        setAutoFilter(y);
        for(var i=0;i<GPUDATA.length;i++){
            if(filter("gpuList",GPUDATA[i])){
                createCard(GPUDATA[i],i,"gpuList");
            }
        }
    }else if(y=="add_hdd"){
        setAction("changePanel('"+y+"','"+x+"')","backBtn");
        document.getElementById('panelTitle').innerHTML='Select Hard Disk';
        sort("add_hdd");
        setAutoFilter(y);
        for(var i=0;i<HDDDATA.length;i++){
            if(filter("hddList",HDDDATA[i])){
                createCard(HDDDATA[i],i,"hddList");
            }
        }
    }else if(y=="add_ssd"){
        setAction("changePanel('"+y+"','"+x+"')","backBtn");
        document.getElementById('panelTitle').innerHTML='Select SSD';
        sort("add_ssd");
        setAutoFilter(y);
        for(var i=0;i<SSDDATA.length;i++){
            if(filter("ssdList",SSDDATA[i])){
                createCard(SSDDATA[i],i,"ssdList");
            }
        }
    }else if(y=="add_psu"){
        setAction("changePanel('"+y+"','"+x+"')","backBtn");
        document.getElementById('panelTitle').innerHTML='Select Power Supply';
        sort("add_psu");
        setAutoFilter(y);
        for(var i=0;i<PSUDATA.length;i++){
            if(filter("psuList",PSUDATA[i])){
                createCard(PSUDATA[i],i,"psuList");
            }
        }
    }else if(y=="add_case"){
        setAction("changePanel('"+y+"','"+x+"')","backBtn");
        document.getElementById('panelTitle').innerHTML='Select Case';
        sort("add_case");
        setAutoFilter(y);
        for(var i=0;i<CASEDATA.length;i++){
            if(filter("caseList",CASEDATA[i])){
                createCard(CASEDATA[i],i,"caseList");
            }
        }
    }else if(y=="stats"){
        setAction("changePanel('"+y+"','"+x+"')","backBtn");
        genarateStats();
    }else{
        document.getElementById('panelTitle').innerHTML='Dashboard';
    }
    if(x=="dashboard"){
        activateBtn(true,"backBtn");
    }else if(y=="dashboard"){
        activateBtn(false,"backBtn");
    }
}



function setValue(x){
    document.getElementById(x).innerHTML=cpuData.brand+" "+cpuData.model;
    document.getElementById(x).style['color']="rgb(20, 20, 20)";
}














function load(id,to,from,brand,model,price,index){
    if(id=="cpuList"){
        myCPU=fetcher(CPUDATA,brand,model,price);
        if(myCPU.brand=="intel"||myCPU.brand=="Intel"||myCPU.brand=="INTEL"){
            document.getElementById('myCpuImg').style['backgroundImage']="url('"+getImage(myCPU,id)+"')";
        }else{
            document.getElementById('myCpuImg').style['backgroundImage']="url('"+getImage(myCPU,id)+"')";
        }
        document.getElementById('myCpuImg').style['backgroundSize']="auto 120px";


        document.getElementById("cpuBrand").innerHTML=myCPU.brand;
        document.getElementById("cpuName").innerHTML=myCPU.model;
        document.getElementById("cpuName").setAttribute("onclick","dashboardInfoHandler('"+id+"')");
        document.getElementById("cpu_clearBtnPanel").style['display']="grid";
    }else if(id=="motherboardList"){
        myMOTHERBOARD=fetcher(MOTHERBOARDDATA,brand,model,price);
        document.getElementById("motherboardBrand").innerHTML=myMOTHERBOARD.brand;
        document.getElementById("motherboardName").innerHTML=myMOTHERBOARD.model;
        document.getElementById("motherboardName").setAttribute("onclick","dashboardInfoHandler('"+id+"')");

        document.getElementById('myMotherboardImg').style['backgroundImage']="url('"+getImage(myMOTHERBOARD,id)+"')";
        document.getElementById('myMotherboardImg').style['backgroundSize']="auto 120px";
        document.getElementById("motherboard_clearBtnPanel").style['display']="grid";
    }else if(id=="ramList"){
        myRAM=fetcher(RAMDATA,brand,model,price);
        document.getElementById("ramBrand").innerHTML=myRAM.brand;
        document.getElementById("ramName").innerHTML=myRAM.model;
        document.getElementById("ramName").setAttribute("onclick","dashboardInfoHandler('"+id+"')");

        document.getElementById('myRamImg').style['backgroundImage']="url('"+getImage(myRAM,id)+"')";
        document.getElementById('myRamImg').style['backgroundSize']="auto 210px";
        document.getElementById("ram_clearBtnPanel").style['display']="grid";


    }else if(id=="gpuList"){
        myGPU=fetcher(GPUDATA,brand,model,price);
        document.getElementById("gpuBrand").innerHTML=myGPU.brand;
        document.getElementById("gpuName").innerHTML=myGPU.model;
        document.getElementById("gpuName").setAttribute("onclick","dashboardInfoHandler('"+id+"')");

        document.getElementById('myGpuImg').style['backgroundImage']="url('"+getImage(myGPU,id)+"')";
        document.getElementById('myGpuImg').style['backgroundSize']="auto 160px";
        document.getElementById("gpu_clearBtnPanel").style['display']="grid";

    }else if(id=="hddList"){
        myHDD=fetcher(HDDDATA,brand,model,price);
        document.getElementById("hddBrand").innerHTML=myHDD.brand;
        document.getElementById("hddName").innerHTML=myHDD.model;
        document.getElementById("hddName").setAttribute("onclick","dashboardInfoHandler('"+id+"')");

        document.getElementById('myHddImg').style['backgroundImage']="url('"+getImage(myHDD,id)+"')";
        document.getElementById('myHddImg').style['backgroundSize']="auto 120px";
        document.getElementById("hdd_clearBtnPanel").style['display']="grid";
    }else if(id=="ssdList"){
        mySSD=fetcher(SSDDATA,brand,model,price);
        document.getElementById("ssdBrand").innerHTML=mySSD.brand;
        document.getElementById("ssdName").innerHTML=mySSD.model;
        document.getElementById("ssdName").setAttribute("onclick","dashboardInfoHandler('"+id+"')");

        document.getElementById('mySsdImg').style['backgroundImage']="url('"+getImage(mySSD,id)+"')";
        document.getElementById('mySsdImg').style['backgroundSize']="auto 200px";
        document.getElementById("ssd_clearBtnPanel").style['display']="grid";
    }else if(id=="psuList"){
        myPSU=fetcher(PSUDATA,brand,model,price);
        document.getElementById("psuBrand").innerHTML=myPSU.brand;
        document.getElementById("psuName").innerHTML=myPSU.model;
        document.getElementById("psuName").setAttribute("onclick","dashboardInfoHandler('"+id+"')");

        document.getElementById('myPsuImg').style['backgroundImage']="url('"+getImage(myPSU,id)+"')";
        document.getElementById('myPsuImg').style['backgroundSize']="auto 160px";
        document.getElementById("psu_clearBtnPanel").style['display']="grid";
    }else if(id=="caseList"){
        
        myCASE=fetcher(CASEDATA,brand,model,price);
        document.getElementById("caseBrand").innerHTML=myCASE.brand;
        document.getElementById("caseName").innerHTML=myCASE.model;
        document.getElementById("caseName").setAttribute("onclick","dashboardInfoHandler('"+id+"')");
        document.getElementById("case_clearBtnPanel").style['display']="grid";
    }

    changePanel(to,from);
}

function fetcher(DATA,brand,model,price){
    var i=0;
    for(var i=0;DATA.length-1;i++){
        if(DATA[i].brand==brand && DATA[i].model==model && DATA[i].price==price){
            return DATA[i];
        }
    }
}




async function createCard(arg,index,id){
    var brand=arg.brand;
    var name=arg.model;
    var price=arg.price;
    document.getElementById(id).innerHTML="";
    document.getElementById(id).appendChild(createInfoPanel(id));
    await sleep(1);

    var fansan=getCollecter(arg,index,id);

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
    }else{
        x="auto  100px";
    }
    img.style["backgroundSize"]=x;
    //res/images/amd_one.svg


    var p=document.createElement("p");
    p.classList.add("type","mediumTitleEx");
    p.innerHTML=price;


    var p2=document.createElement("p");
    p2.classList.add("compoDetails","smallTitleEx");
    p2.setAttribute("onclick",balerFunction(id,index,"Info","InfoContainer"));
    p2.innerHTML=name;
    //console.log(balerFunction(id,index,"Info","InfoContainer"));
    var p3=document.createElement("p");
    p3.classList.add("compoDetails","slighlySmallTitle");
    p3.innerHTML="3.4GHZ, 2 cores 4 threads";



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

function balerFunction(id,index,x,y){
    var funName="subInfoHandler(";
    return funName+"'"+id+"',"+index+",'"+id+x+"','"+id+y+"')";
}

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
        if(arg.type=="NVME"||arg.type=="nvme"||arg.type=="Nvme"){
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
        y="psu";
    }

    return x+y+z;
}


function getCollecter(arg,index,id){
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

    var args="'"+id+"','"+to+"','"+"dashboard"+"','"+arg.brand+"','"+arg.model+"','"+arg.price+"','"+index+"'";

    return ("load("+args+")");

}

function readFile(event){
    var FILE= new FileReader();
    FILE.onload = function(){
        if(FILE.readyState == 2){
            var obj=JSON.parse(FILE.result);
        }
    }
    FILE.readAsText(event.target.files[0]);
}


