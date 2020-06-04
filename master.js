function include(file){//Kanged from geeks for geeks
    var script=document.createElement("script");
    script.src=file;
    script.type='text/javascript';
    script.defer=true;
    document.getElementsByTagName('head').item(0).appendChild(script);
}