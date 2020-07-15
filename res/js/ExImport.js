//Read the imported File
function readFile(event){
    var FILE= new FileReader();
    FILE.onload = function(){
        if(FILE.readyState == 2){
            try{
                var obj=JSON.parse(FILE.result);
            }catch(e){
                console.log(e);
                return;
            }
            verifyObj(obj);

            console.log("Executing");
        }
    }
    FILE.readAsText(event.target.files[0]);
}

function verifyObj(obj){
    var count=0;

    for(var i=0; i<obj.length;i++){
        if(obj[i].compoType=="cpu"){
            IMPORT[0]=obj[i];
            load("cpuList","Dummy","Dummy",IMPORT[0].brand,IMPORT[0].model,IMPORT[0].price,false);
            count++;
        }else if(obj[i].compoType=="motherboard"){
            IMPORT[1]=obj[i];
            load("motherboardList","Dummy","Dummy",IMPORT[1].brand,IMPORT[1].model,IMPORT[1].price,false);
            count++;
        }else if(obj[i].compoType=="ram"){
            IMPORT[2]=obj[i];
            load("ramList","Dummy","Dummy",IMPORT[2].brand,IMPORT[2].model,IMPORT[2].price,false);
            count++;
        }else if(obj[i].compoType=="gpu"){
            IMPORT[3]=obj[i];
            load("gpuList","Dummy","Dummy",IMPORT[3].brand,IMPORT[3].model,IMPORT[3].price,false);
            count++;
        }else if(obj[i].compoType=="hdd"){
            IMPORT[4]=obj[i];
            load("hddList","Dummy","Dummy",IMPORT[4].brand,IMPORT[4].model,IMPORT[4].price,false);
            count++;
        }else if(obj[i].compoType=="ssd"){
            IMPORT[5]=obj[i];
            load("ssdList","Dummy","Dummy",IMPORT[5].brand,IMPORT[5].model,IMPORT[5].price,false);
            count++;
        }else if(obj[i].compoType=="psu"){
            IMPORT[6]=obj[i];
            load("psuList","Dummy","Dummy",IMPORT[6].brand,IMPORT[6].model,IMPORT[6].price,false);
            count++;
        }else if(obj[i].compoType=="case"){
            IMPORT[7]=obj[i];
            load("caseList","Dummy","Dummy",IMPORT[7].brand,IMPORT[7].model,IMPORT[7].price,false);
            count++;
        }
    }
}

function getAll(){
    var x=JSON.stringify(myCPU)+','+JSON.stringify(myMOTHERBOARD)+','+JSON.stringify(myRAM)+','+JSON.stringify(myGPU)+','+JSON.stringify(myHDD)+','+JSON.stringify(mySSD)+','+JSON.stringify(myPSU)+','+JSON.stringify(myCASE);
    console.log(x);
}

function exportJson(){
    var x="data:text/json;charset=utf-8,"+JSON.stringify(IMPORT);
    document.getElementById("exportBtn").setAttribute("href",x);
}

function cleanCards(){
    clearData('cpu','cpu_clearBtnPanel');
    clearData('motherboard','motherboard_clearBtnPanel');
    clearData('ram','ram_clearBtnPanel');
    clearData('gpu','gpu_clearBtnPanel');
    clearData('hdd','hdd_clearBtnPanel');
    clearData('ssd','ssd_clearBtnPanel');
    clearData('psu','psu_clearBtnPanel');
    clearData('case','case_clearBtnPanel');
}