function setAutoFilter(id){
    if(id=="add_cpu"){
        if(myMOTHERBOARD!=null){
            applyCpuFilter("brand",myMOTHERBOARD.platform,false);
        }else{
            applyCpuFilter("brand","",false);
        }
    }
}