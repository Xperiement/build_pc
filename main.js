function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function changePanel(x,y){
    document.getElementById(x).style['opacity']='0%';
    await sleep(280);
    document.getElementById(x).style['display']='none';
    document.getElementById(y).style['display']='flex';
    await sleep(280);
    document.getElementById(y).style['opacity']='100%';
    if(y=="add_cpu"){
        document.getElementById('panelTitle').innerHTML='Select Cpu';
        for(var i=0;i<CPUDATA.length;i++){
            createCard(CPUDATA[i].brand,CPUDATA[i].model,CPUDATA[i].price,"cpuList");
        }
    }else if(y=="add_motherboard"){
        document.getElementById('panelTitle').innerHTML='Select Motherboard';
        for(var i=0;i<MOTHERBOARDDATA.length;i++){
            createCard(MOTHERBOARDDATA[i].brand,MOTHERBOARDDATA[i].model,MOTHERBOARDDATA[i].price,"motherboardList");
        }
    }else if(y=="add_ram"){
        document.getElementById('panelTitle').innerHTML='Select Ram';
        for(var i=0;i<RAMDATA.length;i++){
            createCard(RAMDATA[i].brand,RAMDATA[i].model,RAMDATA[i].price,"ramList");
        }
    }else if(y=="add_gpu"){
        document.getElementById('panelTitle').innerHTML='Select Graphics Card';
        for(var i=0;i<GPUDATA.length;i++){
            createCard(GPUDATA[i].brand,GPUDATA[i].model,GPUDATA[i].price,"gpuList");
        }
    }else if(y=="add_hdd"){
        document.getElementById('panelTitle').innerHTML='Select Hard Disk';
        for(var i=0;i<HDDDATA.length;i++){
            createCard(HDDDATA[i].brand,HDDDATA[i].model,HDDDATA[i].price,"hddList");
        }
    }else if(y=="add_ssd"){
        document.getElementById('panelTitle').innerHTML='Select SSD';
        for(var i=0;i<SSDDATA.length;i++){
            createCard(SSDDATA[i].brand,SSDDATA[i].model,SSDDATA[i].price,"ssdList");
        }
    }else if(y=="add_psu"){
        document.getElementById('panelTitle').innerHTML='Select Power Supply';
        for(var i=0;i<PSUDATA.length;i++){
            createCard(PSUDATA[i].brand,PSUDATA[i].model,PSUDATA[i].price,"psuList");
        }
    }else if(y=="add_case"){
        document.getElementById('panelTitle').innerHTML='Select Case';
        for(var i=0;i<CASEDATA.length;i++){
            createCard(CASEDATA[i].brand,CASEDATA[i].model,CASEDATA[i].price,"caseList");
        }
    }else{
        document.getElementById('panelTitle').innerHTML='Dashboard';
    }
}



function setValue(x){
    document.getElementById(x).innerHTML=cpuData.brand+" "+cpuData.model;
    document.getElementById(x).style['color']="rgb(20, 20, 20)";
}














function load(id,to,from,brand,model,price){
    if(id=="cpuList"){
        myCPU=fetcher(CPUDATA,brand,model,price);
        if(myCPU.brand=="intel"||myCPU.brand=="Intel"||myCPU.brand=="INTEL"){
            document.getElementById('myCpuImg').style['backgroundImage']="url('res/images/intel_model_one_i9.svg')";
        }else{
            document.getElementById('myCpuImg').style['backgroundImage']="url('res/images/amd_one.svg')";
        }
        document.getElementById('myCpuImg').style['backgroundSize']="auto 120px";


        document.getElementById("cpuBrand").innerHTML=myCPU.brand;
        document.getElementById("cpuName").innerHTML=myCPU.model;
    }else if(id=="motherboardList"){
        document.getElementById('myMotherboardImg').style['backgroundImage']="url('res/images/motherboard.svg')";
        document.getElementById('myMotherboardImg').style['backgroundSize']="auto 120px";

        myMOTHERBOARD=fetcher(MOTHERBOARDDATA,brand,model,price);
        document.getElementById("motherboardBrand").innerHTML=myMOTHERBOARD.brand;
        document.getElementById("motherboardName").innerHTML=myMOTHERBOARD.model;
    }else if(id=="ramList"){
        document.getElementById('myRamImg').style['backgroundImage']="url('res/images/ram.svg')";
        document.getElementById('myRamImg').style['backgroundSize']="auto 210px";

        myRAM=fetcher(RAMDATA,brand,model,price);
        document.getElementById("ramBrand").innerHTML=myRAM.brand;
        document.getElementById("ramName").innerHTML=myRAM.model;

    }else if(id=="gpuList"){
        document.getElementById('myGpuImg').style['backgroundImage']="url('res/images/gpu_amd.svg')";
        document.getElementById('myGpuImg').style['backgroundSize']="auto 160px";

        myGPU=fetcher(GPUDATA,brand,model,price);
        document.getElementById("gpuBrand").innerHTML=myGPU.brand;
        document.getElementById("gpuName").innerHTML=myGPU.model;

    }else if(id=="hddList"){
        document.getElementById('myHddImg').style['backgroundImage']="url('res/images/hdd.svg')";
        document.getElementById('myHddImg').style['backgroundSize']="auto 120px";

        myHDD=fetcher(HDDDATA,brand,model,price);
        document.getElementById("hddBrand").innerHTML=myHDD.brand;
        document.getElementById("hddName").innerHTML=myHDD.model;

    }else if(id=="ssdList"){
        document.getElementById('mySsdImg').style['backgroundImage']="url('res/images/sata_m_2.svg')";
        document.getElementById('mySsdImg').style['backgroundSize']="auto 200px";

        mySSD=fetcher(SSDDATA,brand,model,price);
        document.getElementById("ssdBrand").innerHTML=mySSD.brand;
        document.getElementById("ssdName").innerHTML=mySSD.model;

    }else if(id=="psuList"){
        document.getElementById('myPsuImg').style['backgroundImage']="url('res/images/psu.svg')";
        document.getElementById('myPsuImg').style['backgroundSize']="auto 160px";

        myPSU=fetcher(PSUDATA,brand,model,price);
        document.getElementById("psuBrand").innerHTML=myPSU.brand;
        document.getElementById("psuName").innerHTML=myPSU.model;

    }else if(id=="caseList"){
        
        myCASE=fetcher(CASEDATA,brand,model,price);
        document.getElementById("caseBrand").innerHTML=myCASE.brand;
        document.getElementById("caseName").innerHTML=myCASE.model;
    }

    changePanel(to,from);
}

function fetcher(DATA,brand,model,price){
    for(var i=0;DATA.length;i++){
        if(DATA[i].brand==brand && DATA[i].model==model && DATA[i].price==price){
            return DATA[i];
        }
    }
}




async function createCard(brand,name,price,id){
    document.getElementById(id).innerHTML="";
    await sleep(1);

    var fansan=getCollecter(brand,name,price,id);

    var card=document.createElement("div");
    card.classList.add("card1");


    var p=document.createElement("p");
    p.classList.add("type","mediumTitle");
    p.innerHTML=price;


    var img=document.createElement("img");
    img.classList.add("addImg");
    img.setAttribute("src","res/images/plus-circle-solid.svg");
    img.setAttribute("alt",brand+" "+name);
    //img.setAttribute("onclick","changePanel('add_cpu','dashboard')");


    var p2=document.createElement("p");
    p2.classList.add("compoDetails","smallTitle");
    p2.innerHTML=brand+" "+name;


    var subdiv=document.createElement("div");
    subdiv.setAttribute("style","margin-top: .5rem;");


    var btn=document.createElement("button");
    btn.setAttribute("onclick",fansan);
    btn.classList.add("cardBtn");
    btn.innerHTML="Add";

    subdiv.appendChild(btn);
    //card.appendChild(p);
    card.appendChild(img);
    card.appendChild(p2);
    card.appendChild(p);
    card.appendChild(subdiv);
    document.getElementById(id).appendChild(card);

}


function getCollecter(brand,model,price,id){
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

    var args="'"+id+"','"+to+"','"+"dashboard"+"','"+brand+"','"+model+"','"+price+"'";

    return ("load("+args+")");

}


//Saved Final Components
var myCPU;
var myMOTHERBOARD;
var myRAM;
var myGPU;
var myHDD;
var mySSD;
var myPSU;
var myCASE;


var CPUDATA=[
    {
        brand:"Intel",
        model:"Core i3-6098p",
        price:7900
    },
    {
        brand:"Intel",
        model:"Core i9-9900KS",
        price:70000
    },
    {
        brand:"Intel",
        model:"Core i5-9400F",
        price:12000
    },
    {
        brand:"AMD",
        model:"Ryzen 5 3600X",
        price:21000
    }
];

var MOTHERBOARDDATA=[
    {
        brand:"Asus",
        model:"Z570",
        price:16000
    },
    {
        brand:"Asrock",
        model:"B450 Lightning",
        price:9500
    },
    {
        brand:"Gigabyte",
        model:"H110m-s2",
        price:3800
    },
    {
        brand:"MSI",
        model:"B450-Tomahawk",
        price:9000
    }
];

var RAMDATA=[
    {
        brand:"Corsair",
        model:"Value Select 8GB",
        price:3100
    },
    {
        brand:"Corsair",
        model:"Value Select 16GB",
        price:7100
    },
    {
        brand:"Kingstone",
        model:"HyperX Fury 8GB",
        price:4180
    },
    {
        brand:"Adata",
        model:"XPG 16GB",
        price:5100
    }
];

var GPUDATA=[
    {
        brand:"Nvidia",
        model:"GTX 1650",
        price:12500
    },
    {
        brand:"Nvidia",
        model:"GTX 2070 Super",
        price:45000
    },
    {
        brand:"Nvidia",
        model:"GTX 2080Ti",
        price:123000
    },
    {
        brand:"AMD",
        model:"RX 5700XT",
        price:41900
    }
];

var HDDDATA=[
    {
        brand:"Seagate",
        model:"Baracuda 1TB",
        price:4100
    },
    {
        brand:"Seagate",
        model:"Baracuda 4TB",
        price:9000
    },
    {
        brand:"WD",
        model:"Blue 1TB",
        price:4000
    },
    {
        brand:"WD",
        model:"Black 1TB",
        price:5500
    }
];

var SSDDATA=[
    {
        brand:"Samsung",
        model:"960 Evo",
        price:8453
    },
    {
        brand:"Corsair",
        model:"MP500",
        price:9665
    },
    {
        brand:"Adata",
        model:"XPG S6000",
        price:5500
    },
    {
        brand:"WD",
        model:"Black 203",
        price:8954
    }
];

var PSUDATA=[
    {
        brand:"Corsair",
        model:"VS550",
        price:4678
    },
    {
        brand:"Corsair",
        model:"VS450",
        price:2600
    },
    {
        brand:"Cooler Master",
        model:"MWE 750",
        price:6234
    },
    {
        brand:"Sliver Stone",
        model:"S450",
        price:3186
    }
];

var CASEDATA=[
    {
        brand:"Corsair",
        model:"Carbide S1",
        price:5473
    },
    {
        brand:"Corsair",
        model:"Spec 03",
        price:2457
    },
    {
        brand:"Cooler Master",
        model:"M500",
        price:5767
    },
    {
        brand:"Aorus",
        model:"Gaming X",
        price:7576
    }
];



//Data
var cpuData={
    brand:"Intel",
    model:"Core i3-6098p",
    baseClock:"3.4 GHZ",
    turboClock:"None",
    tdp:54,
    core:2,
    thread:4,
    l1cache:"512KB",
    l2cache:"1MB",
    l3cache:"3MB",
    soket:"LGA1151",
    cpu_overclocking: false,
    pcilanes:"16",
    has_igpu: true,
    igpu:"HD 510",
    price:7900
};

var gpuData={
    brand:"Nvidia",
    model:"GTX 1050",
    baseClock:"None",
    turboClock:"None",
    tdp:120,
    vram:2,
    vram_type:"GDDR5",
    interface:"PCI-e 3.0",
    has_Vga:false,
    has_Dvi:false,
    has_Hdmi:true,
    has_displayPort:false,
    price:5500
};


var mbData={
    brand:"Gigabyte",
    model:"H110m-s2",
    chipset:"H110",
    socket: "LGA1151",
    size:"micro-ATX",
    supportedCpu: "",
    memorySlot: 2,
    has_dualChannel: true,
    has_quadChannel: false,
    max_memory: 32,
    max_memory_speed: 2133,
    no_of_pcie_full: 1,
    no_of_pcie_1x: 1,
    available_pci_lanes:16,
    no_of_sata_port: 4,
    has_dual_bios: false,
    has_nvme_m_2_slot: false,
    has_sata_m_2_slot: false,
    no_of_m_2_slot: 0,
    cpu_overclocking: false, 
    price:3999
}

var hddData={
    brand:"WD",
    model:"Blue",
    capacity: 1,
    interface:"SATA3",
    rpm:7200,
    price:3199
};

var ssdData={
    brand:"ADATA",
    model:"XPG S6000",
    capacity:128,
    interface:"M.2",
    type:"NVME",
    price:2990
};

var caseData={
    brand:"Corsair",
    model:"Spec 01",
    type:"Mid_tower",
    maxMotherboardSize:"ATX",
    has_rear_fan_space: true,
    has_top_fan_space: false,
    no_of__available_top_fan_space: 0,
    max_top_fan_type: 120,
    no_of__available_front_fan_space: 0,
    max_front_fan_type: 120,
    no_of__available_bottom_fan_space: 0,
    max_bottom_fan_type: 120,
    no_of_available_hdd_space: 2,
    no_of_available_ssd_space: 2,
    price:6000
};

var mouseData={
    brand:"Logitech",
    model:"M120",
    price:600
};

var keyboardData={
    brand:"Logitech",
    model:"K120",
    price:780
};

var monitorData={
    brand:"LG",
    model:"38m-sh",
    resolution:"1080p",
    aspect_ratio:"16:9",
    refresh_rate:60,
    has_vga:true,
    has_dvi:true,
    has_hdmi:false,
    has_displayPort:false,
    price:6500
};

var powerSupplyData={
    brand:"CoolerMaster",
    model:"MWE-450",
    capacity:450,
    has_80_cartification: true,
    type_80_plus:"Default",
    price:6500
};