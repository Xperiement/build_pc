//CPU
var cpuBrand="";
var cpuCore=0;
var cache="";
var cpuSocket=0;
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

