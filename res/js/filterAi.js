function setAutoFilter(id){
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
    }
}