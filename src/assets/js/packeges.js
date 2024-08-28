document.getElementById('1').addEventListener("click", function(e){
    
    if(document.getElementById('detalle1').style.height=='auto'){
        document.getElementById('detalle1').style.height='54px';
        console.log('entre');
    }
    else{
        document.getElementById('detalle1').style.height='auto';
        console.log('no entr');
    }  
   
});
document.getElementById('2').addEventListener("click", function(e){
    if(document.getElementById('detalle2').style.height=='auto'){
        document.getElementById('detalle2').style.height='54px';
    }
    else{
        document.getElementById('detalle2').style.height='auto';
    }  
   
});