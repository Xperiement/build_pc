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
        document.getElementById("cpuName").innerHTML=myCPU.brand+" "+myCPU.model;
    }else if(id=="motherboardList"){
        myMOTHERBOARD=fetcher(MOTHERBOARDDATA,brand,model,price);
        document.getElementById("motherboardName").innerHTML=myMOTHERBOARD.brand+" "+myMOTHERBOARD.model;
    }else if(id=="ramList"){
        myRAM=fetcher(RAMDATA,brand,model,price);
        document.getElementById("ramName").innerHTML=myRAM.brand+" "+myRAM.model;

    }else if(id=="gpuList"){
        myGPU=fetcher(GPUDATA,brand,model,price);
        document.getElementById("gpuName").innerHTML=myGPU.brand+" "+myGPU.model;

    }else if(id=="hddList"){
        myHDD=fetcher(HDDDATA,brand,model,price);
        document.getElementById("hddName").innerHTML=myHDD.brand+" "+myHDD.model;

    }else if(id=="ssdList"){
        mySSD=fetcher(SSDDATA,brand,model,price);
        document.getElementById("ssdName").innerHTML=mySSD.brand+" "+mySSD.model;

    }else if(id=="psuList"){
        myPSU=fetcher(PSUDATA,brand,model,price);
        document.getElementById("psuName").innerHTML=myPSU.brand+" "+myPSU.model;

    }else if(id=="caseList"){
        myCASE=fetcher(CASEDATA,brand,model,price);
        document.getElementById("caseName").innerHTML=myCASE.brand+" "+myCASE.model;
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
        model:"Core i7-9700KS",
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
        brand:"Intel",
        model:"Core i3-6098p",
        price:7900
    },
    {
        brand:"Intel",
        model:"Core i7-9700KS",
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

var RAMDATA=[
    {
        brand:"Intel",
        model:"Core i3-6098p",
        price:7900
    },
    {
        brand:"Intel",
        model:"Core i7-9700KS",
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

var GPUDATA=[
    {
        brand:"Intel",
        model:"Core i3-6098p",
        price:7900
    },
    {
        brand:"Intel",
        model:"Core i7-9700KS",
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

var HDDDATA=[
    {
        brand:"Intel",
        model:"Core i3-6098p",
        price:7900
    },
    {
        brand:"Intel",
        model:"Core i7-9700KS",
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

var SSDDATA=[
    {
        brand:"Intel",
        model:"Core i3-6098p",
        price:7900
    },
    {
        brand:"Intel",
        model:"Core i7-9700KS",
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

var PSUDATA=[
    {
        brand:"Intel",
        model:"Core i3-6098p",
        price:7900
    },
    {
        brand:"Intel",
        model:"Core i7-9700KS",
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

var CASEDATA=[
    {
        brand:"Intel",
        model:"Core i3-6098p",
        price:7900
    },
    {
        brand:"Intel",
        model:"Core i7-9700KS",
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