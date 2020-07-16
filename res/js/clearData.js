async function clearData(arg,id){
    var x='';
    var y='';
    if(arg=='cpu'){
        if(myCPU!=null){
            myCPU=null;
        }
        x='myCpuImg';
        y='cpuName';
        document.getElementById('cpuBrand').innerHTML='CPU';
    }else if(arg=='motherboard'){
        if(myMOTHERBOARD!=null){
            myMOTHERBOARD=null;
        }
        x='myMotherboardImg';
        y='motherboardName';
        document.getElementById('motherboardBrand').innerHTML='Motherboard';
    }else if(arg=='ram'){
        if(myRAM!=null){
            myRAM=null;
        }
        x='myRamImg';
        y='ramName';
        document.getElementById('ramBrand').innerHTML='RAM';
    }else if(arg=='gpu'){
        if(myGPU!=null){
            myGPU=null;
        }
        x='myGpuImg';
        y='gpuName';
        document.getElementById('gpuBrand').innerHTML='Graphics card';
    }else if(arg=='hdd'){
        if(myHDD!=null){
            myHDD=null;
        }
        x='myHddImg';
        y='hddName';
        document.getElementById('hddBrand').innerHTML='Hard Disk';
    }else if(arg=='ssd'){
        if(mySSD!=null){
            mySSD=null;
        }
        x='mySsdImg';
        y='ssdName';
        document.getElementById('ssdBrand').innerHTML='SSD';
    }else if(arg=='psu'){
        if(myPSU!=null){
            myPSU=null;
        }
        x='myPsuImg';
        y='psuName';
        document.getElementById('psuBrand').innerHTML='Power Supply';
    }else if(arg=='case'){
        if(myCASE!=null){
            myCASE=null;
        }
        x='myCaseImg';
        y='caseName';
        document.getElementById('caseBrand').innerHTML='Case';
    }
    document.getElementById(x).style['backgroundImage']="url('res/images/plus-circle-solid.svg')";
    document.getElementById(x).style['backgroundSize']="auto 100px";
    document.getElementById(y).innerHTML='Not selected';
    document.getElementById(y).classList.remove("pointerCursor");

    //Disable the panel
    document.getElementById(id).style['opacity']="0%";
    await sleep(200);
    document.getElementById(id).style['display']="none";
    document.getElementById(id).style['opacity']="100%";
}