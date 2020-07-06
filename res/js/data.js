//Saved Final Components
var myCPU;
var myMOTHERBOARD;
var myRAM;
var myGPU;
var myHDD;
var mySSD;
var myPSU;
var myCASE;

var AmdChipsets=[
    {
        chipsetName: "A320",//1
        supportCpuIndex: [
            1,2
        ]
    },
    {
        chipsetName: "B350",//2
        supportCpuIndex: [
            1,2
        ]
    },
    {
        chipsetName: "X370",//3
        supportCpuIndex: [
            1,2
        ]
    },
    {
        chipsetName: "B450",//4
        supportCpuIndex: [
            1,2,3
        ]
    },
    {
        chipsetName: "X470",//5
        supportCpuIndex: [
            1,2,3
        ]
    },
    {
        chipsetName: "B550",//6
        supportCpuIndex: [
            2,3,4
        ]
    },
    {
        chipsetName: "X570",//7
        supportCpuIndex: [
            2,3,4
        ]
    },  
];

var AmdCpus=[
    {
        genaration: 1,//1
        chipsetIndex: [
            1,2,3,4,5
        ]
    },
    {
        genaration: 2,//2
        chipsetIndex: [
            1,2,3,4,5,6,7
        ]
    },
    {
        genaration: 3,//3
        chipsetIndex: [
            4,5,6,7
        ]
    },
    {
        genaration: 4,//4
        chipsetIndex: [
            6,7
        ]
    },
];



var IntelChipsets=[
    {
        chipsetName: "H110",//1
        supportCpuIndex: [
            1
        ]
    },
    {
        chipsetName: "H310",//2
        supportCpuIndex: [
            2,3
        ]
    },
    {
        chipsetName: "B360",//3
        supportCpuIndex: [
            2,3
        ]
    },
    {
        chipsetName: "H370",//4
        supportCpuIndex: [
            2,3
        ]
    },
    {
        chipsetName: "B365",//5
        supportCpuIndex: [
            2,3
        ]
    },
    {
        chipsetName: "Z370",//6
        supportCpuIndex: [
            2,3
        ]
    },
    {
        chipsetName: "Z390",//7
        supportCpuIndex: [
            2,3
        ]
    },
    {
        chipsetName: "Z470",//8
        supportCpuIndex: [
            4
        ]
    },
    {
        chipsetName: "Z490",//9
        supportCpuIndex: [
            4
        ]
    },

];

var IntelCpus=[
    {
        genaration: 6,//1
        chipsetIndex: [
            1
        ]
    },
    {
        genaration: 8,//2
        chipsetIndex: [
            2,3,4,5,6,7
        ]
    },
    {
        genaration: 9,//3
        chipsetIndex: [
            2,3,4,5,6,7
        ]
    },
    {
        genaration: 10,//4
        chipsetIndex: [
            8,9
        ]
    },

];


var CPUDATA=[
    {
        brand:"Intel",
        model:"Core i3-6098p",
        genaration: 6,
        baseClock:"3.60 GHZ",
        turboClock:"None",
        tdp:54,
        core:2,
        thread:4,
        l1cache:"512KB",
        l2cache:"1MB",
        l3cache:"3MB",
        socket:"LGA1151",
        cpu_overclocking: false,
        pcilanes:"16",
        has_igpu: true,
        igpu:"HD510",
        price:7900
    },
    {
        brand:"Intel",
        core:8,
        model:"Core i9-9900KS",
        genaration: 9,
        socket:"LGA1151",
        has_igpu: false,
        price:70000
    },
    {
        brand:"Intel",
        core:4,
        model:"Core i5-9400F",
        genaration: 9,
        socket:"LGA1151",
        has_igpu: false,
        price:12000
    },
    {
        brand:"AMD",
        core:4,
        model:"Ryzen 5 3600X",
        genaration: 3,
        socket:"AM4+",
        has_igpu: false,
        price:21000
    }
];

var MOTHERBOARDDATA=[
    {
        brand:"Asus",
        platform: "Intel",
        model:"Z570",
        chipset:"Z570",
        socket: "LGA1151",
        size:"ATX",
        supportedCpu: "",
        memorySlot: 2,
        memoryType:"DDR4",
        has_dualChannel: true,
        has_quadChannel: false,
        max_memory: 32,
        max_memory_speed: 2133,
        no_of_pcie_full: 1,
        no_of_pcie_1x: 1,
        available_pci_lanes:16,
        no_of_sata_port: 4,
        has_dual_bios: false,
        has_nvme_m_2_slot: true,
        has_sata_m_2_slot: true,
        no_of_m_2_slot: 0,
        cpu_overclocking: false, 
        price:16000
    },
    {
        brand:"Asrock",
        platform: "AMD",
        model:"B450 Lightning",
        size:"Mini-ITX",
        chipset:"B450",
        socket: "AM4+",
        has_nvme_m_2_slot: false,
        has_sata_m_2_slot: true,
        price:9500
    },
    {
        brand:"Gigabyte",
        platform: "Intel",
        model:"H110m-s2",
        size:"Micro-ATX",
        chipset:"H110",
        socket: "LGA1151",
        has_nvme_m_2_slot: false,
        has_sata_m_2_slot: false,
        price:3800
    },
    {
        brand:"MSI",
        platform: "AMD",
        model:"B450-Tomahawk",
        size:"ATX",
        chipset:"B450",
        socket: "AM4+",
        has_nvme_m_2_slot: true,
        has_sata_m_2_slot: true,
        price:9000
    }
];

var RAMDATA=[
    {
        brand:"Corsair",
        model:"Value Select 8GB",
        capacity: 8,
        quantity: 1,
        type:"DDR4",
        speed:2666,
        eccMemory: false,
        price:3100
    },
    {
        brand:"Corsair",
        model:"Value Select 32GB",
        capacity: 16,
        quantity: 2,
        type:"DDR4",
        price:7100
    },
    {
        brand:"Kingstone",
        model:"HyperX Fury 16GB",
        capacity: 8,
        quantity: 2,
        type:"DDR4",
        price:4180
    },
    {
        brand:"Adata",
        model:"XPG 16GB",
        capacity: 4,
        quantity: 4,
        type:"DDR4",
        price:5100
    }
];

var GPUDATA=[
    {
        brand:"Aorus",
        platform:"Nvidia",
        model:"GTX 1650",
        baseClock:"None",
        turboClock:"None",
        tdp:120,
        vram:4,
        vram_type:"GDDR5",
        interface:"PCI-e 3.0",
        has_Vga:false,
        has_Dvi:false,
        has_Hdmi:true,
        has_displayPort:true,
        price:12500
    },
    {
        brand:"Asus",
        platform:"Nvidia",
        model:"GTX 2070 Super",
        vram:8,
        vram_type:"GDDR5",
        price:45000
    },
    {
        brand:"Galax",
        platform:"Nvidia",
        model:"GTX 2080Ti",
        vram:8,
        vram_type:"GDDR5",
        price:123000
    },
    {
        brand:"MSI",
        platform:"AMD",
        model:"RX 5700XT",
        vram:8,
        vram_type:"GDDR5",
        price:41900
    }
];

var HDDDATA=[
    {
        brand:"Seagate",
        model:"Baracuda 1TB",
        capacity: 1,
        interface:"SATA3",
        rpm:7200,
        price:4100
    },
    {
        brand:"Seagate",
        model:"Baracuda 4TB",
        capacity: 4,
        price:9000
    },
    {
        brand:"WD",
        model:"Blue 1TB",
        capacity: 1,
        price:4000
    },
    {
        brand:"WD",
        model:"Black 1TB",
        capacity: 1,
        price:5500
    }
];

var SSDDATA=[
    {
        brand:"Samsung",
        model:"960 Evo",
        capacity:128,
        interface:"M.2",
        type:"NVME",
        price:8453
    },
    {
        brand:"Corsair",
        model:"MP500",
        capacity: 512,
        interface:"M.2",
        type:"SATA",
        price:9665
    },
    {
        brand:"Adata",
        model:"XPG S6000",
        capacity: 256,
        interface:"M.2",
        type:"SATA",
        price:5500
    },
    {
        brand:"WD",
        model:"Black 203",
        capacity: 1,
        interface:"M.2",
        type:"NVME",
        price:8954
    }
];

var PSUDATA=[
    {
        brand:"Corsair",
        model:"VS550",
        capacity:450,
        has_80_cartification: true,
        type_80_plus:"Default",
        price:4678
    },
    {
        brand:"Corsair",
        model:"VS450",
        capacity:450,
        price:2600
    },
    {
        brand:"Cooler Master",
        model:"MWE 750",
        capacity:750,
        price:6234
    },
    {
        brand:"Sliver Stone",
        model:"S450",
        capacity:450,
        price:3186
    }
];

var CASEDATA=[
    {
        brand:"Corsair",
        model:"Carbide S1",
        type:"Mid Tower",
        maxMotherboardSize:"ATX",
        has_rear_fan_space: true,
        has_top_fan_space: false,
        has_bottom_fan_space: false,
        has_front_fan_space: false,
        no_of__available_rear_fan_space: 1,
        max_rear_fan_type: 120,
        no_of__available_top_fan_space: 0,
        max_top_fan_type: 120,
        no_of__available_front_fan_space: 0,
        max_front_fan_type: 120,
        no_of__available_bottom_fan_space: 0,
        max_bottom_fan_type: 120,
        no_of_available_hdd_space: 2,
        no_of_available_ssd_space: 2,
        price:5473
    },
    {
        brand:"Corsair",
        model:"Spec 03",
        type:"Mid Tower",
        maxMotherboardSize:"Micro-ATX",
        price:2457
    },
    {
        brand:"Cooler Master",
        model:"M500",
        type:"Mini Tower",
        maxMotherboardSize:"Mini-ITX",
        price:5767
    },
    {
        brand:"Aorus",
        model:"Gaming X",
        type:"Full Tower",
        maxMotherboardSize:"ATX",
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


//Cloned value
var cloneCPUDATA=CPUDATA.slice(0,CPUDATA.length);
var cloneMOTHERBOARDDATA=MOTHERBOARDDATA.slice(0,MOTHERBOARDDATA.length);
var cloneRAMDATA=RAMDATA.slice(0,RAMDATA.length);
var cloneGPUDATA=GPUDATA.slice(0,GPUDATA.length);
var cloneHDDDATA=HDDDATA.slice(0,HDDDATA.length);
var cloneSSDDATA=SSDDATA.slice(0,SSDDATA.length);
var clonePSUDATA=PSUDATA.slice(0,PSUDATA.length);
var cloneCASEDATA=CASEDATA.slice(0,CASEDATA.length);