$(document).ready(() => {


    var randm1 = parseInt(getRandomInt());
    var randm2 = parseInt(getRandomInt());

    var checkout = false;

    function getRandomInt() {
        return Math.floor(Math.random() * 100);

    }

    function compare(n1, n2) {
        var nuestrNumero = parseInt($("#resultado").val());
        var result;
        result = n1 + n2;
        if (result == nuestrNumero) {
            checkout = true;
            $('#correct').text('Correcto');
        } else {
            randm1 = getRandomInt();
            randm2 = getRandomInt();
            result = randm1 + randm2;
            $('#suma').text(randm1.toString() + "+" + randm2.toString());
            $('#correct').text('Erroneo');

        }
    }

    $(document).on('click', "#comprobar", () => {

        compare(randm1, randm2);

    })

    $('#suma').text(randm1.toString() + "+" + randm2.toString());

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