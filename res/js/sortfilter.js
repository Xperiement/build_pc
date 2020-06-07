function sort(){
    var tmp;
    for(var i=0;i<CPUDATA.length;i++){
        for(var j=0;j<CPUDATA.length-1;j++){
            if(highToLow){
                if(CPUDATA[j].price<CPUDATA[j+1].price){
                    tmp=CPUDATA[j];
                    CPUDATA[j]=CPUDATA[j+1];
                    CPUDATA[j+1]=tmp;
                }
            }else if(lowToHigh){
                if(CPUDATA[j].price>CPUDATA[j+1].price){
                    tmp=CPUDATA[j];
                    CPUDATA[j]=CPUDATA[j+1];
                    CPUDATA[j+1]=tmp;
                }
            }
        }
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
