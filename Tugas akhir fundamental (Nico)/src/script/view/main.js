const searchButton = document.querySelector('#button-input');
const inputKeyword = document.querySelector('.input-keyword');

const main = () => {
    searchButton.addEventListener('click', () => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${inputKeyword.value.toLowerCase()}`) 
            .then(response => response.json())
            .then(response => {
                let result = document.querySelector('.result')

                result.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                                        <div class="row no-gutters">
                                            <div class="col-md-4">
                                                <img src="${response.sprites.front_default}" class="card-img" alt="pokemon_image">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title" style="text-transform: uppercase;">${response.name}</h5>
                                                    <span class="tag tag-teal">${response.types[0].type.name}</span>
                                                    <p class="card-text mt-3" style="text-transform: capitalize;">Ability : ${response.abilities[0].ability.name}</p>
                                                    <p class="card-text">Height  : ${response.height} Dm</p>
                                                    <p class="card-text">Weight  : ${response.weight} Hg</p>
                                                </div>
                                            </div>
                                       </div>
                                   </div>`
            })

        inputKeyword.value = null;
        
    })}

export default main;