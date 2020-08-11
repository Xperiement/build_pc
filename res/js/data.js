//Total price of selected components from the stat list
var TOTALPRICE=0;
//Stat
var statCpu=true;
var statMotherboard=true;
var statRam=true;
var statGpu=true;
var statHdd=true;
var statSsd=true;
var statPsu=true;
var statCase=true;


//AutoAi toggle variable
var autoAi=true;

//SORT Variable
var lowToHigh=false;
var highToLow=false;

//Saved Final Components
var myCPU;
var myMOTHERBOARD;
var myRAM;
var myGPU;
var myHDD;
var mySSD;
var myPSU;
var myCASE;

//Compatibility framework for AMD based system [Motherboard Chipset]
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
//Compatibility framework for AMD based system [Processor Genaration]
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


//Compatibility framework for Intel based system [Motherboard Chipset]
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
//Compatibility framework for Intel based system [Processor Genaration]
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

//Array of JSON Object of Pc components
var CPUDATA=[
    {
        compoType:"cpu",
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
        compoType:"cpu",
        brand:"Intel",
        model:"Core i3-10100",
        genaration: 10,
        baseClock:"3.60 GHZ",
        turboClock:"4.30 GHZ",
        tdp:65,
        core:4,
        thread:8,
        l1cache:"n/a",
        l2cache:"n/a",
        l3cache:"6MB",
        socket:"LGA1200",
        cpu_overclocking: false,
        pcilanes:"16",
        has_igpu: true,
        igpu:"UHD 630",
        price:0
    },
    {
        compoType:"cpu",
        brand:"Intel",
        model:"Core i3-10300",
        genaration: 10,
        baseClock:"3.70 GHZ",
        turboClock:"4.40 GHZ",
        tdp:65,
        core:4,
        thread:8,
        l1cache:"n/a",
        l2cache:"n/a",
        l3cache:"8MB",
        socket:"LGA1200",
        cpu_overclocking: false,
        pcilanes:"16",
        has_igpu: true,
        igpu:"UHD 630",
        price:0
    },
    {
        compoType:"cpu",
        brand:"Intel",
        model:"Core i3-10320",
        genaration: 10,
        baseClock:"3.80 GHZ",
        turboClock:"4.60 GHZ",
        tdp:65,
        core:4,
        thread:8,
        l1cache:"n/a",
        l2cache:"n/a",
        l3cache:"8MB",
        socket:"LGA1200",
        cpu_overclocking: false,
        pcilanes:"16",
        has_igpu: true,
        igpu:"UHD 630",
        price:0
    },
    {
        compoType:"cpu",
        brand:"Intel",
        model:"Core i3-9100F",
        genaration: 9,
        baseClock:"3.60 GHZ",
        turboClock:"4.20 GHZ",
        tdp:65,
        core:4,
        thread:4,
        l1cache:"n/a",
        l2cache:"n/a",
        l3cache:"6MB",
        socket:"LGA1151",
        cpu_overclocking: false,
        pcilanes:"16",
        has_igpu: false,
        igpu:"n/a",
        price:0
    },
    {
        compoType:"cpu",
        brand:"Intel",
        model:"Core i5-10500",
        genaration: 10,
        baseClock:"3.10 GHZ",
        turboClock:"4.50 GHZ",
        tdp:65,
        core:6,
        thread:12,
        l1cache:"n/a",
        l2cache:"n/a",
        l3cache:"12MB",
        socket:"LGA1200",
        cpu_overclocking: false,
        pcilanes:"16",
        has_igpu: true,
        igpu:"UHD 630",
        price:0
    },
    {
        compoType:"cpu",
        brand:"Intel",
        model:"Core i5-10600K",
        genaration: 10,
        baseClock:"4.10 GHZ",
        turboClock:"4.80 GHZ",
        tdp:125,
        core:6,
        thread:12,
        l1cache:"n/a",
        l2cache:"n/a",
        l3cache:"12MB",
        socket:"LGA1200",
        cpu_overclocking: true,
        pcilanes:"16",
        has_igpu: true,
        igpu:"UHD 630",
        price:0
    },
    {
        compoType:"cpu",
        brand:"Intel",
        model:"Core i5-9400F",
        genaration: 9,
        baseClock:"2.90 GHZ",
        turboClock:"4.10 GHZ",
        tdp:65,
        core:6,
        thread:6,
        l1cache:"n/a",
        l2cache:"n/a",
        l3cache:"9MB",
        socket:"LGA1151",
        cpu_overclocking: false,
        pcilanes:"16",
        has_igpu: false,
        igpu:"n/a",
        price:0
    },
    {
        compoType:"cpu",
        brand:"Intel",
        model:"Core i5-9600K",
        genaration: 9,
        baseClock:"3.70 GHZ",
        turboClock:"4.60 GHZ",
        tdp:95,
        core:6,
        thread:6,
        l1cache:"n/a",
        l2cache:"n/a",
        l3cache:"9MB",
        socket:"LGA1151",
        cpu_overclocking: true,
        pcilanes:"16",
        has_igpu: true,
        igpu:"UHD 630",
        price:0
    },
    {
        compoType:"cpu",
        brand:"Intel",
        model:"Core i7-10700K",
        genaration: 10,
        baseClock:"3.80 GHZ",
        turboClock:"5.10 GHZ",
        tdp:125,
        core:8,
        thread:16,
        l1cache:"n/a",
        l2cache:"n/a",
        l3cache:"16MB",
        socket:"LGA1200",
        cpu_overclocking: true,
        pcilanes:"16",
        has_igpu: true,
        igpu:"UHD 630",
        price:0
    },
    {
        compoType:"cpu",
        brand:"Intel",
        model:"Core i7-10700",
        genaration: 10,
        baseClock:"2.90 GHZ",
        turboClock:"4.80 GHZ",
        tdp:65,
        core:8,
        thread:16,
        l1cache:"n/a",
        l2cache:"n/a",
        l3cache:"16MB",
        socket:"LGA1200",
        cpu_overclocking: false,
        pcilanes:"16",
        has_igpu: true,
        igpu:"UHD 630",
        price:0
    },
    {
        compoType:"cpu",
        brand:"Intel",
        model:"Core i7-9700K",
        genaration: 9,
        baseClock:"3.60 GHZ",
        turboClock:"4.90 GHZ",
        tdp:95,
        core:8,
        thread:16,
        l1cache:"n/a",
        l2cache:"n/a",
        l3cache:"12MB",
        socket:"LGA1151",
        cpu_overclocking: true,
        pcilanes:"16",
        has_igpu: true,
        igpu:"UHD 630",
        price:0
    },
    {
        compoType:"cpu",
        brand:"Intel",
        model:"Core i7-9700",
        genaration: 9,
        baseClock:"3.00 GHZ",
        turboClock:"4.70 GHZ",
        tdp:65,
        core:8,
        thread:16,
        l1cache:"n/a",
        l2cache:"n/a",
        l3cache:"12MB",
        socket:"LGA1151",
        cpu_overclocking: false,
        pcilanes:"16",
        has_igpu: true,
        igpu:"UHD 630",
        price:0
    },
    {
        compoType:"cpu",
        brand:"Intel",
        model:"Core i9-10900K",
        genaration: 10,
        baseClock:"3.70 GHZ",
        turboClock:"5.30 GHZ",
        tdp:125,
        core:10,
        thread:20,
        l1cache:"n/a",
        l2cache:"n/a",
        l3cache:"20MB",
        socket:"LGA1200",
        cpu_overclocking: true,
        pcilanes:"16",
        has_igpu: true,
        igpu:"UHD 630",
        price:0
    },
    {
        compoType:"cpu",
        brand:"Intel",
        model:"Core i9-10900",
        genaration: 10,
        baseClock:"2.80 GHZ",
        turboClock:"5.20 GHZ",
        tdp:65,
        core:10,
        thread:20,
        l1cache:"n/a",
        l2cache:"n/a",
        l3cache:"20MB",
        socket:"LGA1200",
        cpu_overclocking: false,
        pcilanes:"16",
        has_igpu: true,
        igpu:"UHD 630",
        price:0
    },
    {
        compoType:"cpu",
        brand:"Intel",
        model:"Core i9-9900K",
        genaration: 9,
        baseClock:"3.60 GHZ",
        turboClock:"5.00 GHZ",
        tdp:95,
        core:8,
        thread:16,
        l1cache:"n/a",
        l2cache:"n/a",
        l3cache:"16MB",
        socket:"LGA1151",
        cpu_overclocking: true,
        pcilanes:"16",
        has_igpu: true,
        igpu:"UHD 630",
        price:0
    },
    {
        compoType:"cpu",
        brand:"Intel",
        model:"Core i9-9900KS",
        genaration: 9,
        baseClock:"4.00 GHZ",
        turboClock:"5.00 GHZ",
        tdp:127,
        core:8,
        thread:16,
        l1cache:"n/a",
        l2cache:"n/a",
        l3cache:"16MB",
        socket:"LGA1151",
        cpu_overclocking: true,
        pcilanes:"16",
        has_igpu: true,
        igpu:"UHD 630",
        price:0
    },
    {
        compoType:"cpu",
        brand:"Intel",
        core:4,
        model:"Core i5-9400F",
        genaration: 9,
        socket:"LGA1151",
        has_igpu: false,
        price:12000
    },
    {
        compoType:"cpu",
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
        compoType:"motherboard",
        brand:"Asus",
        platform: "Intel",
        model:"Z490",
        chipset:"Z490",
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
        compoType:"motherboard",
        brand:"Asrock",
        platform: "AMD",
        model:"B450 Lightning",
        size:"Mini-ITX",
        chipset:"B450",
        socket: "AM4+",
        memoryType:"DDR4",
        has_nvme_m_2_slot: false,
        has_sata_m_2_slot: true,
        price:9500
    },
    {
        compoType:"motherboard",
        brand:"Gigabyte",
        platform: "Intel",
        model:"H110m-s2",
        size:"Micro-ATX",
        chipset:"H110",
        socket: "LGA1151",
        memoryType:"DDR4",
        has_nvme_m_2_slot: false,
        has_sata_m_2_slot: false,
        price:3800
    },
    {
        compoType:"motherboard",
        brand:"MSI",
        platform: "AMD",
        model:"B450-Tomahawk",
        size:"ATX",
        chipset:"B450",
        socket: "AM4+",
        memoryType:"DDR4",
        has_nvme_m_2_slot: true,
        has_sata_m_2_slot: true,
        price:9000
    }
];

var RAMDATA=[
    {
        compoType:"ram",
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
        compoType:"ram",
        brand:"Corsair",
        model:"Value Select 32GB",
        capacity: 16,
        quantity: 2,
        type:"DDR4",
        price:7100
    },
    {
        compoType:"ram",
        brand:"Kingstone",
        model:"HyperX Fury 16GB",
        capacity: 8,
        quantity: 2,
        type:"DDR4",
        price:4180
    },
    {
        compoType:"ram",
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
        compoType:"gpu",
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
        compoType:"gpu",
        brand:"Asus",
        platform:"Nvidia",
        model:"GTX 2070 Super",
        vram:8,
        vram_type:"GDDR5",
        price:45000
    },
    {
        compoType:"gpu",
        brand:"Galax",
        platform:"Nvidia",
        model:"GTX 2080Ti",
        vram:8,
        vram_type:"GDDR5",
        price:123000
    },
    {
        compoType:"gpu",
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
        compoType:"hdd",
        brand:"Seagate",
        model:"Baracuda 1TB",
        capacity: 1,
        interface:"SATA3",
        rpm:7200,
        price:4100
    },
    {
        compoType:"hdd",
        brand:"Seagate",
        model:"Baracuda 4TB",
        capacity: 4,
        price:9000
    },
    {
        compoType:"hdd",
        brand:"WD",
        model:"Blue 1TB",
        capacity: 1,
        price:4000
    },
    {
        compoType:"hdd",
        brand:"WD",
        model:"Black 1TB",
        capacity: 1,
        price:5500
    }
];

var SSDDATA=[
    {
        compoType:"ssd",
        brand:"Samsung",
        model:"960 Evo",
        capacity:128,
        interface:"M.2",
        type:"NVME",
        price:8453
    },
    {
        compoType:"ssd",
        brand:"Corsair",
        model:"MP500",
        capacity: 512,
        interface:"M.2",
        type:"SATA",
        price:9665
    },
    {
        compoType:"ssd",
        brand:"Adata",
        model:"XPG S6000",
        capacity: 256,
        interface:"M.2",
        type:"SATA",
        price:5500
    },
    {
        compoType:"ssd",
        brand:"WD",
        model:"Black 203",
        capacity: 1,
        interface:"M.2",
        type:"NVME",
        price:8954
    },
    {
        compoType:"ssd",
        brand:"Kingstone",
        model:"Data now",
        capacity: 256,
        interface:"SATA",
        type:"SATAL",
        price:69
    }
];

var PSUDATA=[
    {
        compoType:"psu",
        brand:"Corsair",
        model:"VS550",
        capacity:450,
        has_80_cartification: true,
        type_80_plus:"Gold",
        price:4678
    },
    {
        compoType:"psu",
        brand:"Corsair",
        model:"VS450",
        capacity:450,
        price:2600
    },
    {
        compoType:"psu",
        brand:"Cooler Master",
        model:"MWE 750",
        capacity:750,
        price:6234
    },
    {
        compoType:"psu",
        brand:"Sliver Stone",
        model:"S450",
        capacity:450,
        price:3186
    }
];

var CASEDATA=[
    {
        compoType:"case",
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
        compoType:"case",
        brand:"Corsair",
        model:"Spec 03",
        type:"Mid Tower",
        maxMotherboardSize:"Micro-ATX",
        price:2457
    },
    {
        compoType:"case",
        brand:"Cooler Master",
        model:"M500",
        type:"Mini Tower",
        maxMotherboardSize:"Mini-ITX",
        price:5767
    },
    {
        compoType:"case",
        brand:"Aorus",
        model:"Gaming X",
        type:"Full Tower",
        maxMotherboardSize:"ATX",
        price:7576
    }
];


//Component Definations
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
};

var ramdata={
    compoType:"ram",
    brand:"Corsair",
    model:"Value Select 8GB",
    capacity: 8,
    quantity: 1,
    type:"DDR4",
    speed:2666,
    eccMemory: false,
    price:3100
};

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

//Import object which will be used in future for importing pc specs
var IMPORT=[
    /*{
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
    },
    {
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
    },
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
    },
    {
        brand:"WD",
        model:"Blue",
        capacity: 1,
        interface:"SATA3",
        rpm:7200,
        price:3199
    },
    {
        brand:"ADATA",
        model:"XPG S6000",
        capacity:128,
        interface:"M.2",
        type:"NVME",
        price:2990
    },
    {
        brand:"CoolerMaster",
        model:"MWE-450",
        capacity:450,
        has_80_cartification: true,
        type_80_plus:"Default",
        price:6500
    },
    {
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
    }*/

];