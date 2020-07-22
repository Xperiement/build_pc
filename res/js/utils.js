//Sleep during excution to increase the control over multithreading
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

//Helper functions for overloy
async function openOverlay(x){
    document.getElementById(x).style['display']='flex';
    await sleep(100);
    document.getElementById(x).style['opacity']='100%';
}
async function closeOverlay(x){
    document.getElementById(x).style['opacity']='0%';
    await sleep(1080);
    document.getElementById(x).style['display']='none';
}

//Fetch Exact data from JSON ARRAY
function fetcher(DATA,brand,model,price){
    var i=0;
    for(var i=0;DATA.length-1;i++){
        if(DATA[i].brand==brand && DATA[i].model==model && DATA[i].price==price){
            return DATA[i];
        }
    }
}

//Universal Helper funcs()
//SHOW hide any components
function activateBtn(x,id){
    if(x){
        document.getElementById(id).classList.remove("rm");
    }else{
        document.getElementById(id).classList.add("rm");
    }
}
//Set onclick event of specific id
function setAction(action,id){
    document.getElementById(id).setAttribute("onclick",action);
}



//Doubt
function setValue(x){
    document.getElementById(x).innerHTML=cpuData.brand+" "+cpuData.model;
    document.getElementById(x).style['color']="rgb(20, 20, 20)";
}