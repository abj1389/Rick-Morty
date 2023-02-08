const printHome = () => {
    const main = document.getElementsByClassName("main")[0];
    main.innerHTML = `
        <div class="main__container">
            <p class="main__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation
            </p>
            <hr class="main__separator">
        </div>
        <div class="main__links">
            <a class="main__link" href="#">PERSONAJES</a>
            <a class="main__link" href="#">TEMPORADAS</a>
            <a class="main__link" href="#">LOCALIZACIONES</a>
        </div>
    `;

    getNav();
}

const getNav = () => {
    const nav = [...document.getElementsByClassName("main__link")];
    nav.forEach(element => {
        element.addEventListener("click", () => {
            printPage(element.textContent.toUpperCase());
        });
    });
}