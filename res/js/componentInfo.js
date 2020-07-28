//Create info panel
function createInfoPanel(id){
    var x=document.createElement("div");
    x.classList.add("infoPanel");
    x.classList.add("infoPanelEx");
    x.setAttribute("id",id+"Info");
    var y=document.createElement("div");
    y.classList.add("mainHeadEx");
    y.setAttribute("id",id+"InfoContainer");
    x.appendChild(y)
    return x;
}

//Handle the dashboard infoPanel of each component
function dashboardInfoHandler(x){
    document.getElementById("guun").innerHTML="";
    if(x=="cpuList"){
        document.getElementById("guun").appendChild(get_cpu_info_container(myCPU,'infoPanel'));
    }else if(x=="motherboardList"){
        document.getElementById("guun").appendChild(get_motherboard_info_container(myMOTHERBOARD,'infoPanel'));
    }else if(x=="ramList"){
        document.getElementById("guun").appendChild(get_ram_info_container(myRAM,'infoPanel'));
    }else if(x=="gpuList"){
        document.getElementById("guun").appendChild(get_gpu_info_container(myGPU,'infoPanel'));
    }else if(x=="hddList"){
        document.getElementById("guun").appendChild(get_hdd_info_container(myHDD,'infoPanel'));
    }else if(x=="ssdList"){
        document.getElementById("guun").appendChild(get_ssd_info_container(mySSD,'infoPanel'));
    }else if(x=="psuList"){
        document.getElementById("guun").appendChild(get_psu_info_container(myPSU,'infoPanel'));
    }else if(x=="caseList"){
        document.getElementById("guun").appendChild(get_case_info_container(myCASE,'infoPanel'));
    }
    openOverlay('infoPanel');
}

//Handle the compolist infoPanel of each component [each card]
function subInfoHandler(x,index,oOverlayId,containerId){
    document.getElementById(containerId).innerHTML="";
    if(x=="cpuList"){
        document.getElementById(containerId).appendChild(get_cpu_info_container(CPUDATA[index],oOverlayId));
    }else if(x=="motherboardList"){
        document.getElementById(containerId).appendChild(get_motherboard_info_container(MOTHERBOARDDATA[index],oOverlayId));
    }else if(x=="ramList"){
        document.getElementById(containerId).appendChild(get_ram_info_container(RAMDATA[index],oOverlayId));
    }else if(x=="gpuList"){
        document.getElementById(containerId).appendChild(get_gpu_info_container(GPUDATA[index],oOverlayId));
    }else if(x=="hddList"){
        document.getElementById(containerId).appendChild(get_hdd_info_container(HDDDATA[index],oOverlayId));
    }else if(x=="ssdList"){
        document.getElementById(containerId).appendChild(get_ssd_info_container(SSDDATA[index],oOverlayId));
    }else if(x=="psuList"){
        document.getElementById(containerId).appendChild(get_psu_info_container(PSUDATA[index],oOverlayId));
    }else if(x=="caseList"){
        document.getElementById(containerId).appendChild(get_case_info_container(CASEDATA[index],oOverlayId));
    }
    openOverlay(oOverlayId);
}



//Helper functions to create layouts of each component type
function get_cpu_info_container(DATA,id){
    //Vars
    var turbo="";

    //Main Div
    var mainDiv=document.createElement("div");
    mainDiv.classList.add("mainDescEx");

    //Heading 
    var p1=createParagraph(DATA.brand,["type","bigTitle"]);
    //Sub Heading
    var p2=createParagraph(DATA.model,["type","mediumTitle"]);

    //Infos
    var s1=createParagraph("<br>Specification ",["type","specsType"]);
    if(!(DATA.turboClock=="none"||DATA.turboClock=="None"||DATA.turboClock=="NONE")){
        turbo=", "+DATA.turboClock+" turbo clock";
    }
    var p3=createParagraph(DATA.baseClock+" base clock"+turbo,["type","specs"]);
    var p4=createParagraph(DATA.core+" cores, "+DATA.thread+" threads",["type","specs"]);
    var p5=createParagraph(DATA.l3cache+" cache",["type","specs"]);
    var p6=createParagraph(DATA.tdp+"W TDP",["type","specs"]);
    var p7;
    if(DATA.has_igpu){
        p7=createParagraph(DATA.igpu+" internal graphics",["type","specs"]);
    }else{
        p7=createParagraph("No integrated GPU available.",["type","specs"]);
    }
    var p8=createParagraph("Socket - "+DATA.socket,["type","specs"]);
    var p9;
    if(DATA.cpu_overclocking){
        p9=createParagraph("Overclocking supported",["type","specs"]);
    }else{
        p9=createParagraph("Overclocking not supported",["type","specs"]);
    }

    //Close Button
    var closeBtn=createCloseBtn(id);


    //Adding into the div
    mainDiv.appendChild(p1);
    mainDiv.appendChild(p2);
    mainDiv.appendChild(s1);
    mainDiv.appendChild(p3);
    mainDiv.appendChild(p4);
    mainDiv.appendChild(p5);
    mainDiv.appendChild(p6);
    mainDiv.appendChild(p7);
    mainDiv.appendChild(p8);
    mainDiv.appendChild(p9);
    mainDiv.appendChild(closeBtn);
    return mainDiv;
}

function get_motherboard_info_container(DATA,id){
    //Main Div
    var mainDiv=document.createElement("div");
    mainDiv.classList.add("mainDescEx");
    //Heading 
    var p1=createParagraph(DATA.brand,["type","bigTitle"]);
    //Sub Heading
    var p2=createParagraph(DATA.model,["type","mediumTitle"]);
    //Infos
    var s1=createParagraph("<br>Specification ",["type","specsType"]);

    var p3=createParagraph(DATA.chipset+" chipset",["type","specs"]);

    var p4=createParagraph(DATA.memorySlot+" x "+DATA.memoryType+" RAM slots",["type","specs"]);
    var p5=createParagraph("Max memory capacity - "+DATA.max_memory+" GB",["type","specs"]);
    var p6=createParagraph("Max memory speed - "+DATA.max_memory_speed+" MHZ",["type","specs"]);
    if(DATA.has_quadChannel){
        var p7=createParagraph("Quad channel supported",["type","specs"]);
    }else{
        if(DATA.has_dualChannel){
            var p7=createParagraph("Dual channel supported",["type","specs"]);
        }else{
            var p7=createParagraph("Dual channel not supported",["type","specs"]);
        }
    }
    var p8=createParagraph(DATA.no_of_pcie_full+" x PCIe full Slot, "+DATA.no_of_pcie_1x+" x PCIe 1x slot",["type","specs"]);
    var p9=createParagraph("Available PCI lanes - "+DATA.available_pci_lanes,["type","specs"]);
    var p10=createParagraph("No of SATA ports - "+DATA.no_of_sata_port,["type","specs"]);
    if(DATA.has_nvme_m_2_slot){
        var p11=createParagraph("NVME M.2 Supported",["type","specs"]);
    }else{
        if(DATA.has_sata_m_2_slot){
            var p11=createParagraph("SATA M.2 Supported",["type","specs"]);
        }else{
            var p11=createParagraph("M.2 not Supported",["type","specs"]);
        }
    }
    if(DATA.cpu_overclocking){
        var p12=createParagraph("CPU Overclocking supported",["type","specs"]);
    }else{
        var p12=createParagraph("CPU Overclocking not supported",["type","specs"]);
    }
    

    //Close Button
    var closeBtn=createCloseBtn(id);
    //Adding into the div
    mainDiv.appendChild(p1);
    mainDiv.appendChild(p2);
    mainDiv.appendChild(s1);
    mainDiv.appendChild(p3);
    mainDiv.appendChild(p4);
    mainDiv.appendChild(p5);
    mainDiv.appendChild(p6);
    mainDiv.appendChild(p7);
    mainDiv.appendChild(p8);
    mainDiv.appendChild(p9);
    mainDiv.appendChild(p10);
    mainDiv.appendChild(p11);
    mainDiv.appendChild(p12);
    
    mainDiv.appendChild(closeBtn);
    return mainDiv;
}

function get_ram_info_container(DATA,id){
    //Main Div
    var mainDiv=document.createElement("div");
    mainDiv.classList.add("mainDescEx");
    //Heading 
    var p1=createParagraph(DATA.brand,["type","bigTitle"]);
    //Sub Heading
    var p2=createParagraph(DATA.model,["type","mediumTitle"]);
    //Infos
    var s1=createParagraph("<br>Specification ",["type","specsType"]);
    
    if(DATA.quantity>1){
        var stick="sticks";
    }else{
        var stick="stick";
    }
    var p3=createParagraph(DATA.capacity+" GB x "+DATA.quantity+" "+DATA.type+" "+stick,["type","specs"]);
    var p4=createParagraph("Memory speed - "+DATA.speed+" MHZ",["type","specs"]);
    if(DATA.eccMemory){
        var p5=createParagraph("Ecc Memory",["type","specs"]);
    }else{
        var p5=createParagraph("NonEcc Memory",["type","specs"]);
    }
    

    //Close Button
    var closeBtn=createCloseBtn(id);
    //Adding into the div
    mainDiv.appendChild(p1);
    mainDiv.appendChild(p2);
    mainDiv.appendChild(s1);
    mainDiv.appendChild(p3);
    mainDiv.appendChild(p4);
    mainDiv.appendChild(p5);
    mainDiv.appendChild(closeBtn);
    return mainDiv;
}

function get_gpu_info_container(DATA,id){
    //vars
    var availablePorts="";
    //Main Div
    var mainDiv=document.createElement("div");
    mainDiv.classList.add("mainDescEx");
    //Heading 
    var p1=createParagraph(DATA.brand,["type","bigTitle"]);
    //Sub Heading
    var p2=createParagraph(DATA.model,["type","mediumTitle"]);
    //Infos
    var s1=createParagraph("<br>Specification ",["type","specsType"]);
    
    var p3=createParagraph(DATA.vram+"GB "+DATA.vram_type+" memory",["type","specs"]);
    var p4=createParagraph(DATA.interface+" interface",["type","specs"]);
    if(DATA.has_Vga){
        availablePorts="VGA";
    }
    if(DATA.has_Dvi){
        if(availablePorts==""){
            availablePorts=availablePorts+"DVI";    
        }else{
            availablePorts=availablePorts+", DVI";
        }
    }
    if(DATA.has_Hdmi){
        if(availablePorts==""){
            availablePorts=availablePorts+"HDMI";    
        }else{
            availablePorts=availablePorts+", HDMI";
        }
    }
    if(DATA.has_displayPort){
        if(availablePorts==""){
            availablePorts=availablePorts+"DisplayPort";    
        }else{
            availablePorts=availablePorts+", DisplayPort";
        }
    }
    var p5=createParagraph("Available ports - "+availablePorts,["type","specs"]);
    var p6=createParagraph(DATA.tdp+"W TDP",["type","specs"]);

    //Close Button
    var closeBtn=createCloseBtn(id);
    //Adding into the div
    mainDiv.appendChild(p1);
    mainDiv.appendChild(p2);
    mainDiv.appendChild(s1);
    mainDiv.appendChild(p3);
    mainDiv.appendChild(p4);
    mainDiv.appendChild(p5);
    mainDiv.appendChild(p6);
    mainDiv.appendChild(closeBtn);
    return mainDiv;
}

function get_hdd_info_container(DATA,id){
    //Main Div
    var mainDiv=document.createElement("div");
    mainDiv.classList.add("mainDescEx");
    //Heading 
    var p1=createParagraph(DATA.brand,["type","bigTitle"]);
    //Sub Heading
    var p2=createParagraph(DATA.model,["type","mediumTitle"]);
    //Infos
    var s1=createParagraph("<br>Specification ",["type","specsType"]);
    if(DATA.capacity>120){
        var sizeType="GB";
    }else{
        var sizeType="TB";
    }
    var p3=createParagraph(DATA.capacity+sizeType+" Drive",["type","specs"]);
    var p4=createParagraph("Interface - "+DATA.interface,["type","specs"]);
    var p5=createParagraph("Speed - "+DATA.rpm+" RPM",["type","specs"]);
    

    //Close Button
    var closeBtn=createCloseBtn(id);
    //Adding into the div
    mainDiv.appendChild(p1);
    mainDiv.appendChild(p2);
    mainDiv.appendChild(s1);
    mainDiv.appendChild(p3);
    mainDiv.appendChild(p4);
    mainDiv.appendChild(p5);
    
    mainDiv.appendChild(closeBtn);
    return mainDiv;
}

function get_ssd_info_container(DATA,id){
    //Temp Variable
    var x='';
    var y='';
    //Main Div
    var mainDiv=document.createElement("div");
    mainDiv.classList.add("mainDescEx");
    //Heading 
    var p1=createParagraph(DATA.brand,["type","bigTitle"]);
    //Sub Heading
    var p2=createParagraph(DATA.model,["type","mediumTitle"]);
    //Infos
    var s1=createParagraph("<br>Specification ",["type","specsType"]);
    if(DATA.capacity>120){
        var sizeType="GB";
    }else{
        var sizeType="TB";
    }
    if(DATA.type=="SATAL"){
        x="2.5 inch";
        y="3";
    }else{
        y=x=DATA.type;
    }
    var p3=createParagraph(DATA.capacity+sizeType+" "+x+" SSD",["type","specs"]);
    var p4=createParagraph("Interface - "+DATA.interface+" "+y,["type","specs"]);
    

    //Close Button
    var closeBtn=createCloseBtn(id);
    //Adding into the div
    mainDiv.appendChild(p1);
    mainDiv.appendChild(p2);
    mainDiv.appendChild(s1);
    mainDiv.appendChild(p3);
    mainDiv.appendChild(p4);
    
    mainDiv.appendChild(closeBtn);
    return mainDiv;
}

function get_psu_info_container(DATA,id){
    //var
    var rating="";
    //Main Div
    var mainDiv=document.createElement("div");
    mainDiv.classList.add("mainDescEx");
    //Heading 
    var p1=createParagraph(DATA.brand,["type","bigTitle"]);
    //Sub Heading
    var p2=createParagraph(DATA.model,["type","mediumTitle"]);
    //Infos
    var s1=createParagraph("<br>Specification ",["type","specsType"]);
    if(DATA.has_80_cartification){
        rating="80 Plus ";
        if(DATA.type_80_plus=="Default"||DATA.type_80_plus=="default"||DATA.type_80_plus=="DEFAULT"){
            rating=rating+"Certified";
        }else{
            rating=rating+DATA.type_80_plus+" Certified";
        }
    }
    
    var p3=createParagraph(DATA.capacity+"W "+rating+" power supply",["type","specs"]);
    

    //Close Button
    var closeBtn=createCloseBtn(id);
    //Adding into the div
    mainDiv.appendChild(p1);
    mainDiv.appendChild(p2);
    mainDiv.appendChild(s1);
    mainDiv.appendChild(p3);
    
    mainDiv.appendChild(closeBtn);
    return mainDiv;
}

function get_case_info_container(DATA,id){
    //vars
    var top,bottom,rear,front,fanSpace;
    front=top=bottom=rear=fanSpace="";
    //Main Div
    var mainDiv=document.createElement("div");
    mainDiv.classList.add("mainDescEx");
    //Heading 
    var p1=createParagraph(DATA.brand,["type","bigTitle"]);
    //Sub Heading
    var p2=createParagraph(DATA.model,["type","mediumTitle"]);
    //Infos
    var s1=createParagraph("<br>Specification ",["type","specsType"]);
    
    var p3=createParagraph("Motherboard space - "+DATA.maxMotherboardSize,["type","specs"]);


    var p4=createParagraph(DATA.type+" Case",["type","specs"]);
    if(DATA.has_rear_fan_space){
        rear=DATA.no_of__available_rear_fan_space+" x "+DATA.max_rear_fan_type+"mm";
    }
    if(DATA.has_front_fan_space){
        front=DATA.no_of__available_front_fan_space+" x "+DATA.max_front_fan_type+"mm";
    }
    if(DATA.has_top_fan_space){
        top=DATA.no_of__available_top_fan_space+" x "+DATA.max_top_fan_type+"mm";
    }
    if(DATA.has_bottom_fan_space){
        bottom=DATA.no_of__available_bottom_fan_space+" x "+DATA.max_bottom_fan_type+"mm";
    }
    if(!front==""){
        console.log("visiing");
        fanSpace=fanSpace+front+" in front";
    }
    if(!rear==""){
        if(fanSpace==""){
            fanSpace=fanSpace+rear+" in rear";
        }else{
            fanSpace=fanSpace+", "+rear+" in rear";
        }
    }
    if(!top==""){
        if(fanSpace==""){
            fanSpace=fanSpace+top+" on top";
        }else{
            fanSpace=fanSpace+", "+top+" on top";
        }
    }
    if(!bottom==""){
        if(fanSpace==""){
            fanSpace=fanSpace+bottom+" at bottom";
        }else{
            fanSpace=fanSpace+", "+bottom+" at bottom";
        }
    }


    var p5=createParagraph("Available fan space - "+fanSpace,["type","specs"]);
    var p6=createParagraph("Available storage space - "+DATA.no_of_available_hdd_space+" x HDD, "+DATA.no_of_available_ssd_space+" x SSD",["type","specs"]);
    

    //Close Button
    var closeBtn=createCloseBtn(id);
    //Adding into the div
    mainDiv.appendChild(p1);
    mainDiv.appendChild(p2);
    mainDiv.appendChild(s1);
    mainDiv.appendChild(p3);
    mainDiv.appendChild(p4);
    mainDiv.appendChild(p5);
    mainDiv.appendChild(p6);
    mainDiv.appendChild(closeBtn);
    return mainDiv;
}
//Helper functions
function createParagraph(text,classes){
    var x=document.createElement("p");
    for(var i=0;i<classes.length;i++){
        x.classList.add(classes[i]);
    }
    x.innerHTML=text;
    return x;
}
function createCloseBtn(id){
    var Btn=document.createElement("img");
    Btn.classList.add("closeBtn");
    Btn.setAttribute("src","res/images/close.svg");
    Btn.setAttribute("onclick","closeOverlay('"+id+"')");
    return Btn;
}