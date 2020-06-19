var cloneCPUDATA=CPUDATA;
var cloneMOTHERBOARDDATA=MOTHERBOARDDATA;
var cloneRAMDATA=RAMDATA;
var cloneGPUDATA=GPUDATA;
var cloneHDDDATA=HDDDATA;
var cloneSSDDATA=SSDDATA;
var clonePSUDATA=PSUDATA;
var cloneCASEDATA=CASEDATA;

function reRenderSort(x,id){
    if(x){
        highToLow=true;
        lowToHigh=false;
    }else if(!x){
        highToLow=false;
        lowToHigh=true;
    }else{
        restoreOldData();
    }
    reRenderComponents(id);
}


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

//Filter_Variables
var filterEnabled=true;

function filter(id,DATA){
    var ret=true;
    if(filterEnabled){
        if(id=="cpuList"){
            return CPUFILTER(DATA);
        }
            
    }
    
    return true;
}
function restoreOldData(){
    CPUDATA=cloneCPUDATA;
    MOTHERBOARDDATA=cloneMOTHERBOARDDATA;
    RAMDATA=cloneRAMDATA;
    GPUDATA=cloneGPUDATA;
    HDDDATA=cloneHDDDATA;
    SSDDATA=cloneSSDDATA;
    PSUDATA=clonePSUDATA;
    CASEDATA=cloneCASEDATA;
}