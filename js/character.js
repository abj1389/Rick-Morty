const printCharacterDetails = (url) => {
    main.innerHTML = `
        <div class="main__header">
            <h3 class="main__title">CHARACTER DETAILS</h3>
        </div>
        <div class="details">
        
        </div>
    `;
    getMoreDetails(url).then(response => {
        printCharacterCardDetails(response);
        getLocationDetails(document.getElementsByClassName("details__location-info")[0], response.locationUrl);
    });
}

const getMoreDetails = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    data = formatDataCharacter(data);
    return data;
}

const formatDataCharacter= (data) => {
    let dataFormated = {
        image: data.image,
        name: data.name.toUpperCase(),
        status: data.status,
        species: data.species,
        origin: data.origin.name,
        location: data.location.name,
        locationUrl: data.location.url,
        episode:  data.episode.map( element =>  element.replace("https://rickandmortyapi.com/api/episode/", '')),
        episodeUrl: data.episode
    }
    return dataFormated;
}

const printCharacterCardDetails = (char) => {
    const mainChar = document.getElementsByClassName("details")[0];
    mainChar.innerHTML = `
        <div class="details__header">
            <img class="details__img" src="${char.image}" alt="">
            <h2 class="details__name">${char.name.toUpperCase()}</h2>
        </div>
        <div class="details__container">
            <div class="details__status">
                <p class="details__title">STATUS</p>
                <div class="details__options">
                    ${typeOfStatus(char.status.toUpperCase())}
                </div>
            </div>
            <div class="details__data">
                <div class="details__species">
                    <p class="details__title">SPECIES</p>
                    <p class="details__info">${char.species}</p>
                </div>
                <div class="details__origin">
                    <p class="details__title">ORIGIN</p>
                    <p class="details__info">${char.origin}</p>
                </div>
                <div class="details__location">
                    <p class="details__title">LOCATION</p>
                    <p class="details__location-info">${char.location}</p>
                </div>
            </div>
            <div class="details__episodes">
                <p class="details__title">EPISODE</p>
                <div class="details__numbers">
                    ${char.episode.map(element => `<p class="details__number">${element}</p>`).join('')}
                </div>
            </div>
        </div>
    `;
}

const typeOfStatus = (status) => {
    switch (status){
        case "ALIVE":
            return `<p class="details__options details__options--alive">ALIVE</p>
                    <p class="details__options details__options--normal">DEAD</p>
                    <p class="details__options details__options--normal">UNKNOWN</p>`;
        case "DEAD":
            return `<p class="details__options details__options--normal">ALIVE</p>
                    <p class="details__options details__options--dead">DEAD</p>
                    <p class="details__options details__options--normal">UNKNOWN</p>`;
        case "UNKNOWN":
            return `<p class="details__options details__options--normal">ALIVE</p>
                    <p class="details__options details__options--normal">DEAD</p>
                    <p class="details__options details__options--unkown">UNKNOWN</p>`;
        default:
            return `<p class="details__options details__options--normal">ALIVE</p>
                    <p class="details__options details__options--normal">DEAD</p>
                    <p class="details__options details__options--normal">UNKNOWN</p>`;
    }
}

const getLocationDetails = (location, url) => {
    location.addEventListener("click", () => {
        printLocationDetails(url);
    });
}