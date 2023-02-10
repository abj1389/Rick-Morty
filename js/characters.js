const printCharacters = () => {
    main.innerHTML = `
        <div class="main__header">
            <h3 class="main__title">CHARACTERS FINDER</h3>
        </div>
        <div class="main__cards">
        
        </div>
        <button class="main__button" type="submit">+ MORE</button>
    `;
    getCharacters().then(response => {
       
        response.forEach(element => {
            printCardCharacters(element);
        });


    let moreDetails = [...document.getElementsByClassName("card__button")];
    console.log(moreDetails);
    moreDetails.forEach((element, i) => {
        element.addEventListener('click', () => { 
            printPage("PERSONAJES", element.name);
        })
    })
    });
}

const getCharacters = async () => {
    let url = URL_BASE + "/character";
    let response = await fetch(url);
    let data = await response.json();
    data = mapDataCharacter(data.results);
    return data;
}

const mapDataCharacter = (data) => {
    let dataMapped = data.map(character => {
        let object = {
            name: character.name,
            status: character.status,
            species: character.species,
            gender: character.gender,
            origin: character.origin,
            location: character.location,
            image: character.image,
            datails: character.url,
        }
        return object;
    });
    return dataMapped;
}

const printCardCharacters = (character) => {
    let mainCards = document.getElementsByClassName("main__cards")[0];
    mainCards.innerHTML = mainCards.innerHTML + `
        <div class="card">
            <div class="card__header">
                <h3 class="card__name">${character.name}</h3>
                <div class="card__status ${changeStatus(character.status)}">${character.status}</div>
            </div>
        <div class="card__box">
            <img class="card__img" src="${character.image}" alt="img">
            <div class="card__info">
                <div class="card__text">
                    <h3 class="card__title">SPECIES</h3>
                    <h4 class="card__subtitle">${character.species}</h4>
                </div>
                <div class="card__text">
                    <h3 class="card__title">GENDER</h3>
                    <h4 class="card__subtitle">${character.gender}</h4>
                </div>
                <div class="card__text">
                    <h3 class="card__title">ORIGIN</h3>
                    <h4 class="card__subtitle">${character.origin.name}</h4>
                </div>
                <div class="card__text">
                    <h3 class="card__title">LOCATION</h3>
                    <h4 class="card__subtitle">${character.location.name}</h4>
                </div>
            </div>
        </div>
        <button class="card__button" type="submit" name="${character.datails}">+ MORE DETAILS</button>
    `;

}

const changeStatus = (status) => {
    if  (status === "Alive"){
        return "card__status--alive";
    }else if (status === "Dead"){
        return "card__status--dead";
    }
    return "card__status--unknown";
}