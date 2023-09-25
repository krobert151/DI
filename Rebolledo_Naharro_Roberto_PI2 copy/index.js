$(document).ready(() => {


    var animales = ['vaca','oveja','abeja','perro','gato','pez','pato','tortuga'];

    var cocina = ['tenedor','cuchara','cuchillo','olla','sartén','paellera','thermomix','vitro'];

    var trasnporte = ['coche','tren','avión','caballo','taxi','uber','globo','barco'];

    var colores = ['rojo','azul','amarillo','rosa','morado','verde'];

    var numlistazar = Math.floor(Math.random() * 3)+1;

    var colorazar = colores[Math.floor(Math.random() * colores.length )];


    function hacerChapta(arrobj,color){

        arr = arrobj.push(color);
        
        shuffle(arr);
        
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];

            $("#sec1")


            
        }



    }

    var checkout = false;

    switch(listazar){

        case 1:

        break;


    }
    


    function compare() {

    }


    $(document).on('click', "#urlgen", function () {
        var titulo = $('#titulo').val().toLowerCase().split(' ');
        titulo = titulo.join('-');
        var url = "https://noticias-de-aqui/hoy/".concat(titulo);

        $('#url').val(url);

    })

    $(document).on('click','#enviar',function(){

        if(checkout){
            alert('Se ha publicado tu noticia');
        }else{
            alert('A completar el checkout makina')
        }


    })



});