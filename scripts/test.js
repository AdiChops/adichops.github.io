let lastPos = document.documentElement.scrollTop;
document.addEventListener('scroll', ()=>{
    if(lastPos < document.documentElement.scrollTop){
        if(parseFloat(document.getElementById('myName').style.width.replace(/[^0-9\.]*/, '')) < 20)
            document.getElementById('myName').style.width = `${parseFloat(document.getElementById('myName').style.width.replace(/[^0-9\.]*/, '')) + 0.8}ch`;
    }
    else{
        if(parseFloat(document.getElementById('myName').style.width.replace(/[^0-9\.]*/, '')) > 2.7)
            document.getElementById('myName').style.width = `${parseFloat(document.getElementById('myName').style.width.replace(/[^0-9\.]*/, '')) - 0.8}ch`;
    }
    lastPos = document.documentElement.scrollTop; 
})