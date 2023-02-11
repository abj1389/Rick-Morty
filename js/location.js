const printLocationDetails = (url) => {
    main.innerHTML = `
        <div class="main__header">
            <h3 class="main__title">LOCATION DETAILS</h3>
        </div>
        <div class="details">
        
        </div>
    `;
    getMoreLocationDetails(url).then(response => {
        printLocationCardDetails(response);
        getCharacterDetails([...document.getElementsByClassName("details__residents")], response.residents.map(element => element.urlChar));
    });
    
}

const getMoreLocationDetails = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    data = formatDataLocation(data);
    return data;
}

const formatDataLocation = (data) => {
    let dataFormated = {
        name: data.name,
        type: data.type,
        dimension: data.dimension,
        residents: data.residents.map(element => {
            return { 
                urlChar: element, 
                urlImg: element.replace("character/", "character/avatar/") + ".jpeg" 
           }    
        }),
        url: data.url
    }
    return dataFormated;
}

const printLocationCardDetails = (location) => {
    const mainLocation = document.getElementsByClassName("details")[0];
    mainLocation.innerHTML = `
        <h3 class="details__name">${location.name}</h3>
        <div class="details__container">
            <div class="details__data">
                <div class="details__species">
                    <p class="details__title">TYPE</p>
                    <p class="details__info">${location.type}</p>
                </div>
                <div class="details__origin">
                    <p class="details__title">DIMENSION</p>
                    <p class="details__info">${location.dimension}</p>
                </div>
            </div>
            <div class="details__episodes">
                <p class="details__title">RESIDENTS</p>
                <div class="details__numbers">
                    ${location.residents.map(element => `<img class="details__residents" src="${element.urlImg}" alt="image">`).join('')}
                </div>
            </div>
        </div>
    `;
}

const getCharacterDetails = (residents, url) => {
    residents.forEach((element,i) => {
        element.addEventListener("click", () => {
            printCharacterDetails(url[i]);
        });
    });
}