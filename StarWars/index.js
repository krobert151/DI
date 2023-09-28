$(document).ready(function () {


    $.ajax({
        url: ' https://swapi.dev/api/people',
        type: 'GET'
    }).done(function (resp) {
        var listStarWars = resp.results;
        var i = 1;
        listStarWars.forEach(sw => {
            var template = `
            <div class="cardBox col-12 col-md-6 col-xl-4 col-xxl-3" id="${i - 1}" data-bs-toggle="modal" data-bs-target="#staticBackdrop"" personajeid="${i}">
                <div class="card droid">
                    <div class="front p-2 mb-3">
                        <img class="card-img-top mt-2"
                            src="https://starwars-visualguide.com/assets/img/characters/${i}.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title text-center">${sw.name}</h5>
                            <p class="card-text text-center"> </p>
                        </div>
                    </div>
                    <div class="back p-2 mb-3 ps-1">
                        <h5 class="card-title text-center mt-4">Details</h5>
                        <ul>
                            <li><span>Nombre: </span><a>${sw.name}</a></li>
                            <li><span>Genero: </span><a>${sw.gender}</a></li>
                            <li><span>Altura: </span><a>${sw.height}/a></li>
                            <li><span>Peso: </span><a>${sw.mass}</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            
            `
            $('#swcollect').append(template);
            i++;
        });

    })
    /*
        $(document).on('click', '.card', function () {
            var personajeid = $(this).attr('personajeid');
            $.ajax({
                url: 'https://swapi.dev/api/people/' + personajeid,
                type: 'GET'
            }).done(function (sw) {
                console.log('negros');
                $('#name').text(sw.name);
    
            });
        });
    */




});