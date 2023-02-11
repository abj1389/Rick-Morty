const printEpisodes = () => {
    main.innerHTML = `
        <div class="main__header">
            <h3 class="main__title">LOCATION FINDER</h3>
        </div>
        <div class="main__cards">
        
        </div>
        <button class="main__button" type="submit">+ MORE</button>
    `;
    getEpisodes().then(response => {
       
        response.forEach(element => {
            printCardEpisodes(element);
        });


    let moreDetails = [...document.getElementsByClassName("card__button")];
        moreDetails.forEach((element, i) => {
            element.addEventListener('click', () => { 
                printPage("TEMPORADAS", element.name);
            });
        });
    });
}

const getEpisodes = async () => {
    let url = URL_BASE + "/episode";
    let response = await fetch(url);
    let data = await response.json();
    data = mapDataEpisode(data.results);
    return data;
}

const mapDataEpisode = (data) => {
    let dataMapped = data.map(episode => {
        let object = {
            name: episode.name,
            date: episode.air_date,
            season: episode.episode.splice(0,3),
            url: episode.url,
        }
        return object;
    });

    for (let i = 0; i < object.length; i++) {
        
        
    }

    return dataMapped;
}

const printCardEpisodes = (episode) => {
    let mainCards = document.getElementsByClassName("main__cards")[0];
    mainCards.innerHTML = mainCards.innerHTML + `
        <div class="card">
            <h3 class="card__name">${episode.season}</h3>
            <div class="card__box">
                <div class="card__info">
                    <div class="card__text">
                        <h3 class="card__title">DATE</h3>
                        <h4 class="card__subtitle">${episode.date}</h4>
                    </div>
                </div>
            </div>
            <button class="card__button" type="submit" name="${episode.url}">${episode.name}</button>
        </div>
    `;
}

