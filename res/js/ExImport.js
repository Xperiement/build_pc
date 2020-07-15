//Read the imported File
function readFile(event){
    var FILE= new FileReader();
    FILE.onload = function(){
        if(FILE.readyState == 2){
            try{
                var obj=JSON.parse(FILE.result);
            }catch(e){
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
    if(obj.length<7){
        console.log("Wrong File");
    }else{
        for(var i=0; i<obj.length;i++){
            if(obj[i].compoType=="cpu"){
                IMPORT[0]=obj[i];
                count++;
            }else if(obj[i].compoType=="motherboard"){
                IMPORT[1]=obj[i];
                count++;
            }else if(obj[i].compoType=="ram"){
                IMPORT[2]=obj[i];
                count++;
            }else if(obj[i].compoType=="gpu"){
                IMPORT[3]=obj[i];
                count++;
            }else if(obj[i].compoType=="hdd"){
                IMPORT[4]=obj[i];
                count++;
            }else if(obj[i].compoType=="ssd"){
                IMPORT[5]=obj[i];
                count++;
            }else if(obj[i].compoType=="psu"){
                IMPORT[6]=obj[i];
                count++;
            }else if(obj[i].compoType=="case"){
                IMPORT[7]=obj[i];
                count++;
            }
        }
        console.log(IMPORT)
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