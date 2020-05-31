function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function changePanel(x,y){
    document.getElementById(x).style['opacity']='0%';
    await sleep(280);
    document.getElementById(x).style['display']='none';
    document.getElementById(y).style['display']='block';
    await sleep(280);
    document.getElementById(y).style['opacity']='100%';
    if(y=="add_cpu"){
        document.getElementById('panelTitle').innerHTML='Add Cpu';
    }
}




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

function setValue(x){
    document.getElementById(x).innerHTML=cpuData.brand+" "+cpuData.model;
    document.getElementById(x).style['color']="rgb(20, 20, 20)";
}