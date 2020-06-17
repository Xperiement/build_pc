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
        has_igpu: false,
        price:70000
    },
    {
        brand:"Intel",
        core:4,
        model:"Core i5-9400F",
        has_igpu: false,
        price:12000
    },
    {
        brand:"AMD",
        core:4,
        model:"Ryzen 5 3600X",
        has_igpu: false,
        price:21000
    }
];

var MOTHERBOARDDATA=[
    {
        brand:"Asus",
        model:"Z570",
        chipset:"H110",
        socket: "LGA1151",
        size:"micro-ATX",
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
        has_nvme_m_2_slot: false,
        has_sata_m_2_slot: false,
        no_of_m_2_slot: 0,
        cpu_overclocking: false, 
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
        capacity: 8,
        quantity: 1,
        type:"DDR4",
        speed:2666,
        eccMemory: false,
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
        baseClock:"None",
        turboClock:"None",
        tdp:120,
        vram:2,
        vram_type:"GDDR5",
        interface:"PCI-e 3.0",
        has_Vga:false,
        has_Dvi:false,
        has_Hdmi:true,
        has_displayPort:true,
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
        capacity: 1,
        interface:"SATA3",
        rpm:7200,
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
        capacity:128,
        interface:"M.2",
        type:"NVME",
        price:8453
    },
    {
        brand:"Corsair",
        model:"MP500",
        interface:"M.2",
        type:"SATA",
        price:9665
    },
    {
        brand:"Adata",
        model:"XPG S6000",
        interface:"M.2",
        type:"SATA",
        price:5500
    },
    {
        brand:"WD",
        model:"Black 203",
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