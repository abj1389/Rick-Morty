const printCharacterDetails = (moreDetails) => {
    main.innerHTML = `
        <div class="main__header">
            <h3 class="main__title">CHARACTER DETAILS</h3>
        </div>
        <div class="main__cards">
        
        </div>
        <button class="main__button" type="submit">+ MORE</button>
    `;

    getMoreDetails(moreDetails);
}

const getMoreDetails = (moreDetails) => {
    moreDetails.forEach(element => {
        element.addEventListener("click", () => {
            console.log(element.getAttribute("name"));
        });
    });
}