function setAutoFilter(id){
    resetFilter(id);
    if(id=="add_cpu"){
        if(myMOTHERBOARD!=null){
            applyCpuFilter("brand",myMOTHERBOARD.platform,false);
        }else{
            applyCpuFilter("brand","",false);
        }
    }else if(id=="add_motherboard"){
        if(myCPU!=null){
            applyMotherboardFilter("platform",myCPU.brand,false);
        }else{
            applyMotherboardFilter("platform","",false);
        }
    }else if(id=="add_ram"){
        if(myMOTHERBOARD!=null){
            applyRamFilter("type",myMOTHERBOARD.memoryType,false);
        }else{
            applyRamFilter("type","",false);
        }
    }
}

function isCompatibleMotherboard(chipset){
    var chipsetIndex;
    var status=false;
    if(myCPU==null){return true}
    var platform=myCPU.brand;
    var cpuGenaration=myCPU.genaration;
    if(platform=="AMD"){
        for(var i=0;i<AmdCpus.length;i++){
            if(AmdCpus[i].genaration==cpuGenaration){
                chipsetIndex=AmdCpus[i].chipsetIndex;
                break;
            }
        }
        if(chipsetIndex==null){return false;}
        for(var i=0;i<chipsetIndex.length;i++){
            if(AmdChipsets[chipsetIndex[i]-1].chipsetName==chipset){
                status=true;
                break;
            }
        }
        return status;
    }else{
        for(var i=0;i<IntelCpus.length;i++){
            if(IntelCpus[i].genaration==cpuGenaration){
                chipsetIndex=IntelCpus[i].chipsetIndex;
                break;
            }
        }
        if(chipsetIndex==null){return false;}
        for(var i=0;i<chipsetIndex.length;i++){
            if(IntelChipsets[chipsetIndex[i]-1].chipsetName==chipset){
                status=true;
                break;
            }
        }
        return status;
    }
}

function isCompatibleCpu(cpuGenaration){
    var cpuIndex;
    var status=false;
    if(myMOTHERBOARD==null){
        return true;
    }
    var platform=myMOTHERBOARD.platform;
    var chipset=myMOTHERBOARD.chipset;
    if(platform=="AMD"){
        for(var i=0;i<AmdChipsets.length;i++){
            if(AmdChipsets[i].chipsetName==chipset){
                cpuIndex=AmdChipsets[i].supportCpuIndex;
                break;
            }
        }
        if(cpuIndex==null){return false;}
        for(var i=0;i<cpuIndex.length;i++){
            if(AmdCpus[cpuIndex[i]-1].genaration==cpuGenaration){
                status=true;
                break;
            }
        }
        return status;
    }else{
        for(var i=0;i<IntelChipsets.length;i++){
            if(IntelChipsets[i].chipsetName==chipset){
                cpuIndex=IntelChipsets[i].supportCpuIndex;
                break;
            }
        }
        if(cpuIndex==null){return false;}
        for(var i=0;i<cpuIndex.length;i++){
            if(IntelCpus[cpuIndex[i]-1].genaration==cpuGenaration){
                status=true;
                break;
            }
        }
        return status;
    }
}

