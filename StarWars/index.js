$(document).ready(function () {


    $.ajax({
        url: ' https://swapi.dev/api/people',
        type: 'GET'
    }).done(function (resp) {
        var listStarWars = resp.results;
        var i = 1;
        listStarWars.forEach(sw => {
            var template = `
            <div class="cardBox col-12 col-md-6 col-xl-4 col-xxl-3" id="${i - 1}" data-bs-toggle="modal" data-bs-target="#staticBackdrop"">
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

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
            <aside class="col-2">
            </aside>
            <div class="col">
                
                <div class="row mt-5 tarjetita sith p-5">
                    <div class="col-12 col-xl-4 imagediv mb-3">
                        <img src="https://starwars-visualguide.com/assets/img/characters/${i}.jpg" alt="Darth Vader">
                    </div>
                    <div class="col-12 col-xl-6 characterInfo">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        <h2>${sw.name}</h2>
                        <div class="mt-3">
                            <p class="mt-1 ms-1">
                                <span>Año de nacimiento</span>
                                <a>${sw.birth_year}</a>
                                <br>
                            </p>
                            <p class="mt-1 ms-1">
                                <span>Especie</span>
                                <a>${sw.species}</a>
                                <br>
                            </p>
                            <p class="mt-1 ms-1">
                                <span>Altura</span>
                                <a>${sw.height}</a>
                                <br>
                            </p>
                            <p class="mt-1 ms-1">
                                <span>Peso</span>
                                <a>${sw.mass}</a>
                                <br>
                            </p>
                            <p class="mt-1 ms-1">                      
                                <span>Genero</span>
                                <a>${sw.gender}</a>
                                <br>
                            </p>
                            <p class="mt-1 ms-1">                      
                                <span>Color del pelo</span>
                                <a>${sw.hair_color}</a>
                                <br>
                            </p>
                            <p class="mt-1 ms-1">                      
                                <span>Color de piel</span>
                                <a>${sw.skin_color}</a>
                                <br>
                            </p>
                            <p class="mt-1 ms-1">                          
                                <span>Nació en </span>
                                <a>${sw.homeworld}</a>
                                <br>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row tarjetita mt-5">
                    <h4 class="text-center">Pelis en las que salió</h4>
                    <div class="row">
                        <div class="col-12 col-md-6 col-xl-4 col-xxl-3">
                            <div class="card">
                            <img src="https://starwars-visualguide.com/assets/img/films/1.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="swtitle">4</h5>
                            </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-4 col-xxl-3">
                            <div class="card">
                            <img src="https://starwars-visualguide.com/assets/img/films/2.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="swtitle">5</h5>
                            </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-4 col-xxl-3">
                            <div class="card">
                            <img src="https://starwars-visualguide.com/assets/img/films/3.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="swtitle">6</h5>
                            </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-4 col-xxl-3">
                            <div class="card">
                            <img src="https://starwars-visualguide.com/assets/img/films/6.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="swtitle">3</h5>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <aside class="col-2">
            </aside>
            </div>
            </div>
            `
            $('#swcollect').append(template);
            i++;
        });

    })

    $(document).on('click', '.cardBox', function () {
        var id = $(this).attr('id');
        alert(id);
        $.ajax({
            url: 'https://swapi.dev/api/people/' + pokemonId,
            type: 'GET'
        }).done(function (resp) {

            // Lo último es mostrar el modal
            $('#modal-detail').show();

        });
    });





});