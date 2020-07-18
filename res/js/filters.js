//Filter_Variables
var filterEnabled=true;

function filter(id,DATA){
    var ret=true;
    if(filterEnabled){
        if(id=="cpuList"){
            return CPUFILTER(DATA);
        }else if(id=="motherboardList"){
            return MOTHERBOARDFILTER(DATA);
        }else if(id=="ramList"){
            return RAMFILTER(DATA);
        }else if(id=="ssdList"){
            return SSDFILTER(DATA);
        }else if(id=="hddList"){
            return HDDFILTER(DATA);
        }else if(id=="gpuList"){
            return GPUFILTER(DATA);
        }else if(id=="psuList"){
            return PSUFILTER(DATA);
        }else{
            return CASEFILTER(DATA);
        }
            
    }
    
    return true;
}

//Gui Interface for appling filter
function applyCpuFilter(prop,value,arg=true){
    if(prop=="core"){
        cpuCore=value;
    }else if(prop=="igpu"){
        hasIgpu=value;
    }else if(prop=='brand'){
        cpuBrand=value;
    }else if(prop=='socket'){
        cpuSocket=value;
    }
    if(arg){
        reRenderComponents("add_cpu");
    }
}
function applyMotherboardFilter(prop,value,arg=true){
    if(prop=="platform"){
        motherboardPlatform=value;
    }else if(prop=="chipset"){
        motherboardChipset=value;
    }else if(prop=='formFactor'){
        motherboardSize=value;
    }else if(prop=='socket'){
        console.log("passing");
        motherboardSocket=value;
    }else if(prop=='nvme'){
        hasNvme_m2_SSD_Slot=value;
    }else if(prop=='sata_m_2'){
        hasSata_m2_SSD_Slot=value;
    }
    if(arg){
        reRenderComponents("add_motherboard");
    }
}
function applyGpuFilter(prop,value,arg=true){
    if(prop=="vram"){
        gpuVram=value;
    }else if(prop=="platform"){
        gpuPlatform=value;
    }else if(prop=="vramType"){
        gpuVramType=value;
    }else if(prop=='brand'){
        gpuBrand=value;
    }
    if(arg){
        reRenderComponents("add_gpu");
    }
}
function applyRamFilter(prop,value,arg=true){
    if(prop=="brand"){
        ramBrand=value;
    }else if(prop=="capacity"){
        ramCapacity=value;
    }else if(prop=="type"){
        ramType=value;
    }else if(prop=="quantity"){
        ramQuantity=value;
    }
    if(arg){
        reRenderComponents("add_ram");
    }
}
function applyHddFilter(prop,value,arg=true){
    if(prop=="brand"){
        hddBrand=value;
    }else if(prop=="capacity"){
        hddCapacity=value;
    }
    if(arg){
        reRenderComponents("add_hdd");
    }
}
function applySsdFilter(prop,value,arg=true){
    if(prop=="brand"){
        ssdBrand=value;
    }else if(prop=="capacity"){
        ssdCapacity=value;
    }else if(prop=="type"){
        ssdType=value;
    }
    if(arg){
        reRenderComponents("add_ssd");
    }
}
function applyPsuFilter(prop,value,arg=true){
    if(prop=="brand"){
        psuBrand=value;
    }else if(prop=="capacity"){
        psuCapacity=value;
    }else if(prop=="cartification"){
        has_80_cartification=value;
    }else if(prop=="type_80"){
        type_80_plus=value;
    }
    if(arg){
        reRenderComponents("add_psu");
    }
}
function applyCaseFilter(prop,value,arg=true){
    if(prop=="brand"){
        caseBrand=value;
    }else if(prop=="type"){
        caseType=value;
    }else if(prop=="formFactor"){
        caseMaxMotherboardSize=value;
    }
    if(arg){
        reRenderComponents("add_case");
    }
}

//CPU
var cpuBrand="";
var cpuCore=0;
var cache="";
var cpuSocket="";
var cpuOverclockable=null;
var hasIgpu=null;
function CPUFILTER(DATA){
    var ret=true;
    if(cpuBrand!=""){
        if(cpuBrand==DATA.brand){
            ret=true;
        }else{
            return false;
        }
    }
    if(cpuCore!=0){
        if(cpuCore==DATA.core){
            ret=true;
        }else{
            return false;
        }
    }

    if(cache!=""){
        if(cache==DATA.l3cache){
            ret=true;
        }else{
            return false;
        }
    }
    if(cpuSocket!=""){
        if(cpuSocket==DATA.socket){
            ret=true;
        }else{
            return false;
        }
    }
    if(cpuOverclockable!=null){
        if(cpuOverclockable==DATA.cpu_overclocking){
            ret=true;
        }else{
            return false;
        }
    }
    if(hasIgpu!=null){
        if(hasIgpu==DATA.has_igpu){
            ret=true;
        }else{
            
            return false;
        }
    }
    return ret;
}

//MotherBoard
var motherboardBrand="";
var motherboardPlatform="";
var motherboardChipset="";
var motherboardSocket="";
var motherboardSize="";
var motherboardOverclockable=null;
var hasNvme_m2_SSD_Slot=null;
var hasSata_m2_SSD_Slot=null;
function MOTHERBOARDFILTER(DATA){
    var ret=true;
    if(motherboardBrand!=""){
        if(motherboardBrand==DATA.brand){
            ret=true;
        }else{
            return false;
        }
    }

    if(motherboardPlatform!=""){
        if(motherboardPlatform==DATA.platform){
            ret=true;
        }else{
            return false;
        }
    }

    if(motherboardChipset!=""){
        if(motherboardChipset==DATA.chipset){
            ret=true;
        }else{
            return false;
        }
    }
    if(motherboardSocket!=""){
        if(motherboardSocket==DATA.socket){
            ret=true;
        }else{
            return false;
        }
    }
    if(motherboardSize!=""){
        if(motherboardSize==DATA.size){
            ret=true;
        }else{
            return false;
        }
    }
    if(motherboardOverclockable!=null){
        if(motherboardOverclockable==DATA.cpu_overclocking){
            ret=true;
        }else{
            return false;
        }
    }
    if(hasNvme_m2_SSD_Slot!=null){
        if(hasNvme_m2_SSD_Slot==DATA.has_nvme_m_2_slot){
            ret=true;
        }else{
            return false;
        }
    }
    if(hasSata_m2_SSD_Slot!=null){
        if(hasSata_m2_SSD_Slot==DATA.has_sata_m_2_slot){
            ret=true;
        }else{
            return false;
        }
    }
    return ret;
}

//GPU
var gpuBrand="";
var gpuPlatform="";
var gpuVram=0;
var gpuVramType="";
function GPUFILTER(DATA){
    var ret=true;
    if(gpuBrand!=""){
        if(gpuBrand==DATA.brand){
            ret=true;
        }else{
            return false;
        }
    }
    if(gpuPlatform!=""){
        if(gpuPlatform==DATA.platform){
            ret=true;
        }else{
            return false;
        }
    }
    if(gpuVram!=0){
        if(gpuVram==DATA.vram){
            ret=true;
        }else{
            return false;
        }
    }
    if(gpuVramType!=""){
        if(gpuVramType==DATA.vram_type){
            ret=true;
        }else{
            return false;
        }
    }
    return ret;
}

//RAM
var ramBrand="";
var ramCapacity=0;
var ramQuantity=0;
var ramType="";
function RAMFILTER(DATA){
    var ret=true;
    if(ramBrand!=""){
        if(ramBrand==DATA.brand){
            ret=true;
        }else{
            return false;
        }
    }
    if(ramCapacity!=0){
        if(ramCapacity==DATA.capacity){
            ret=true;
        }else{
            return false;
        }
    }
    if(ramQuantity!=0){
        if(ramQuantity==DATA.quantity){
            ret=true;
        }else{
            return false;
        }
    }
    if(ramType!=""){
        if(ramType==DATA.type){
            ret=true;
        }else{
            return false;
        }
    }
    return ret;
}

//HDD
var hddBrand="";
var hddCapacity=0;
function HDDFILTER(DATA){
    var ret=true;
    if(hddBrand!=""){
        if(hddBrand==DATA.brand){
            ret=true;
        }else{
            return false;
        }
    }
    if(hddCapacity!=0){
        if(hddCapacity==DATA.capacity){
            ret=true;
        }else{
            return false;
        }
    }
    return ret;
}

//HDD
var ssdBrand="";
var ssdCapacity=0;
var ssdType="";
function SSDFILTER(DATA){
    var ret=true;
    if(ssdBrand!=""){
        if(ssdBrand==DATA.brand){
            ret=true;
        }else{
            return false;
        }
    }
    if(ssdCapacity!=0){
        if(ssdCapacity==DATA.capacity){
            ret=true;
        }else{
            return false;
        }
    }
    if(ssdType!=0){
        if(ssdType==DATA.type){
            ret=true;
        }else{
            return false;
        }
    }
    return ret;
}

//PSU
var psuBrand="";
var psuCapacity=0;
var has_80_cartification=null;
var type_80_plus="";
function PSUFILTER(DATA){
    var ret=true;
    if(psuBrand!=""){
        if(psuBrand==DATA.brand){
            ret=true;
        }else{
            return false;
        }
    }
    if(psuCapacity!=0){
        if(psuCapacity==DATA.capacity){
            ret=true;
        }else{
            return false;
        }
    }
    if(has_80_cartification!=null){
        if(has_80_cartification==DATA.has_80_cartification){
            ret=true;
        }else{
            return false;
        }
    }
    if(type_80_plus!=""){
        if(type_80_plus==DATA.type_80_plus){
            ret=true;
        }else{
            return false;
        }
    }
    return ret;
}

//Case
var caseBrand="";
var caseType="";
var caseMaxMotherboardSize="";
function CASEFILTER(DATA){
    var ret=true;
    if(caseBrand!=""){
        if(caseBrand==DATA.brand){
            ret=true;
        }else{
            return false;
        }
    }
    if(caseType!=""){
        if(caseType==DATA.type){
            ret=true;
        }else{
            return false;
        }
    }
    if(caseMaxMotherboardSize!=""){
        if(caseMaxMotherboardSize==DATA.maxMotherboardSize){
            ret=true;
        }else{
            return false;
        }
    }
    return ret;
}

function resetFilter(id){
    if(id=="add_cpu"){
        cpuBrand="";
        cpuCore=0;
        cache="";
        cpuSocket="";
        cpuOverclockable=null;
        hasIgpu=null;
    }else if(id=="add_motherboard"){
        motherboardBrand="";
        motherboardPlatform="";
        motherboardChipset="";
        motherboardSocket="";
        motherboardSize="";
        motherboardOverclockable=null;
        hasNvme_m2_SSD_Slot=null;
        hasSata_m2_SSD_Slot=null;
    }else if(id=="add_ram"){
        ramBrand="";
        ramCapacity=0;
        ramQuantity=0;
        ramType="";
    }
}

