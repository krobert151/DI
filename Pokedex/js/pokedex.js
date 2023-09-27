$(document).ready(() => {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0',
        type: 'GET'
    }).done(function (a) {
        var pokeLis = a.results;
        var i = 1;
        pokeLis.forEach(poke => {
            var modalId = `modal-${i}`; // Genera un ID único para cada modal
            var template = `
            <div class="col-12 col-md-3 col-xl-2 col-xxl-1 card btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" personajeid="${i}">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" class="card-img" alt="...">
                <div class="">
                    <h5 class="card-title text-center text-white">${i}</h5>
                </div>
            </div>
            `;
            $('#pokeList').append(template);
            i++;
        });
    });
    $(document).on('click', '.card', function() {
        var personajeid = $(this).attr('personajeid');
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/' + personajeid,
            type: 'GET'
        }).done(function(poke){    
            console.log('negros');
            $('#name').text(poke.species.name);
            
        });
    });
});