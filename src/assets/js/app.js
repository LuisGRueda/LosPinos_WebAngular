document.getElementById('btnicon').addEventListener("click", function(e){
    if(document.getElementById('paginas').style.transform=='translateX(0%)'){
        document.getElementById('paginas').style.transform='translateX(100%)';
        document.getElementById('barra').style.background='rgba(255, 255, 255, 0.521)';
        console.log('entre');
    }
    else{
        document.getElementById('paginas').style.transform='translateX(0%)';
        document.getElementById('barra').style.background='#ffff';
    }  
   
});






/*$(".iconF").hover(
    function (){
        $('.iconF').css('background','#39559E');
        $('.iconF').css('color','white');
    },
    function(){
        $('.iconF').css('background','#ccc');
        $('.iconF').css('color','#000');
    }
);   
$('.iconT').hover(
    
    function(){
        $('.iconT').css('background','#1B9FF1');
        $('.iconT').css('color','white');
    },function(){
        $('.iconT').css('background','#ccc');
        $('.iconT').css('color','#000');
    }
    
);

$('.iconI').hover(
    function(){
        $('.iconI').css('background',"linear-gradient(to top right, #FCDE30, #E9712A, #D2313B, #AE4198, #7540A1, #5443A8)");
        $('.iconI').css('color','white');
    },
    function(){
        $('.iconI').css('background','#ccc');
        $('.iconI').css('color','#000');
    }
);*/


