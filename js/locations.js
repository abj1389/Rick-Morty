const printLocations = () => {
    main.innerHTML = `
        <div class="main__header">
            <h3 class="main__title">LOCATION FINDER</h3>
        </div>
        <div class="main__cards">
        
        </div>
        <button class="main__button" type="submit">+ MORE</button>
    `;
    getLocations().then(response => {
       
        response.forEach(element => {
            console.log(element);
            //printCardLocations(element);
        });


    let moreDetails = [...document.getElementsByClassName("card__button")];
    moreDetails.forEach((element, i) => {
        element.addEventListener('click', () => { 
            printPage("LOCALIZACIONES", element.name);
        })
    })
    });
}

const getLocations = async () => {
    let url = URL_BASE + "/location";
    let response = await fetch(url);
    let data = await response.json();
    data = mapDataLocation(data.results);
    return data;
}

const mapDataLocation = (data) => {
    let dataMapped = data.map(location => {
        let object = {
            name: location.name,
            type: location.type,
            dimension: location.dimension,
            url: location.url,
        }
        return object;
    });
    return dataMapped;
}

/*const printCardCharacters = (character) => {
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

}*/