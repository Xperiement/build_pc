//Sorting
function sort(id){
    var TEMPDATA;
    var tmp;
    if(id=="add_cpu"){
        TEMPDATA=CPUDATA;
    }else if(id=="add_motherboard"){
        TEMPDATA=MOTHERBOARDDATA;
    }else if(id=="add_ram"){
        TEMPDATA=RAMDATA;
    }else if(id=="add_gpu"){
        TEMPDATA=GPUDATA;
    }else if(id=="add_hdd"){
        TEMPDATA=HDDDATA;
    }else if(id=="add_ssd"){
        TEMPDATA=SSDDATA;
    }else if(id=="add_psu"){
        TEMPDATA=PSUDATA;
    }else if(id=="add_case"){
        TEMPDATA=CASEDATA;
    }
    for(var i=0;i<TEMPDATA.length;i++){
        for(var j=0;j<TEMPDATA.length-1;j++){
            if(highToLow){
                if(TEMPDATA[j].price<TEMPDATA[j+1].price){
                    tmp=TEMPDATA[j];
                    TEMPDATA[j]=TEMPDATA[j+1];
                    TEMPDATA[j+1]=tmp;
                }
            }else if(lowToHigh){
                if(TEMPDATA[j].price>TEMPDATA[j+1].price){
                    tmp=TEMPDATA[j];
                    TEMPDATA[j]=TEMPDATA[j+1];
                    TEMPDATA[j+1]=tmp;
                }
            }
        }
    }
    if(id=="add_cpu"){
        CPUDATA=TEMPDATA;
    }else if(id=="add_motherboard"){
        MOTHERBOARDDATA=TEMPDATA;
    }else if(id=="add_ram"){
        RAMDATA=TEMPDATA;
    }else if(id=="add_gpu"){
        GPUDATA=TEMPDATA;
    }else if(id=="add_hdd"){
        HDDDATA=TEMPDATA;
    }else if(id=="add_ssd"){
        SSDDATA=TEMPDATA;
    }else if(id=="add_psu"){
        PSUDATA=TEMPDATA;
    }else if(id=="add_case"){
        CASEDATA=TEMPDATA;
    }
}

function reRenderSort(x,id){
    if(x){
        highToLow=true;
        lowToHigh=false;
    }else if(x==false){
        highToLow=false;
        lowToHigh=true;
    }else if(x==null){
        highToLow=false;
        lowToHigh=false;
        restoreOldData();
    }
    reRenderComponents(id);
}

function restoreOldData(){
    //console.log("CHANGED DATA--------------");
    //console.log(MOTHERBOARDDATA);
    //console.log("CLONED DATA--------------");
    //console.log(cloneMOTHERBOARDDATA);
    CPUDATA=cloneCPUDATA.slice(0,cloneCPUDATA.length);
    MOTHERBOARDDATA=cloneMOTHERBOARDDATA.slice(0,cloneMOTHERBOARDDATA.length);
    RAMDATA=cloneRAMDATA.slice(0,cloneRAMDATA.length);
    GPUDATA=cloneGPUDATA.slice(0,cloneGPUDATA.length);
    HDDDATA=cloneHDDDATA.slice(0,cloneHDDDATA.length);
    SSDDATA=cloneSSDDATA.slice(0,cloneSSDDATA.length);
    PSUDATA=clonePSUDATA.slice(0,clonePSUDATA.length);
    CASEDATA=cloneCASEDATA.slice(0,cloneCASEDATA.length);
}