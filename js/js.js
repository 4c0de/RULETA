  
(function()
{  
    //variables para la rotacion
    var aleatorio=900;
    var aleatorioBola=5000;
    //variable usada en cartas para modificar posicion top en cada iteracion del bucle for 
    var abajo=5;
    //variable contador para controlar el numero de cartas en la mesa.
    var contador=0;

    //boton play 
    document.querySelector('#lanzar').onclick = function() 
    {
        setTimeout(function(){musica()},1000); // 3000ms = 3s
        setTimeout(function(){play()},2000); // 3000ms = 3s
    }

    //click cartas
    document.querySelector('#pedir').onclick =function()
    {
      //controlar que haya 6 cartas maximo en la mesa
     
      if (contador<6)
      {
        //creamos la etiqueta imagen y le damos estilo
          contador++;
                var aleatorio=Math.floor((Math.random() * 6)+1);
                var el= document.createElement("img");
                el.setAttribute("src", "img/"+aleatorio+".png");
                el.setAttribute("width", "100%");
                el.setAttribute("class", "carta2");
                el.style.position='absolute';
                el.style.top =abajo+"px";
                el.style.left =200+"px";
                document.querySelector("#carta").appendChild(el);
                abajo+=60;
      }else if(contador==6){
              // var eliminar = document.getElementById("carta");
              // eliminar.parentNode.removeChild(eliminar);
              // contador=0;
      }

    }

    function musica(){
            var musica = document.querySelector("#sonido");
             musica.play();
    }


     function play(){
             //calcular numero aleatorio para rotacion
           	 /*var aleatorio=Math.floor((Math.random() * 1000)+800);*/
           	 /*var aleatorioBola=Math.floor((Math.random() * 9000) + 1000);*/

           	 //efectos rotacion y transicion
             document.querySelector("#contenedor").style.transform = "rotateZ("+aleatorio+"deg)";
             document.querySelector("#contenedor").style.transition = "all 15s";
             document.querySelector("#bola").style.transition = "all 11s";
             document.querySelector("#bola").style.transform = "rotateZ("+(-aleatorioBola)+"deg)";
             //uso para style.transform-->le sumamos el valor anterior para que rotacion sea +900 en cada interaccion
             aleatorio+=900;
             aleatorioBola+=5000;
         
    }	
})();    
        