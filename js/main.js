const URL_BASE = "https://rickandmortyapi.com/api/";
const main = document.getElementsByClassName("main")[0];

window.onload = () => {
    printPage("HOME");
    backHome();
    // url de prueba detalles character: https://rickandmortyapi.com/api/character/1
}

const printPage = (section, url) => {
    adaptHeader(section);
    switch (section) {
        case "HOME":
            printHome();
            break;
        case "PERSONAJES":
            (url) ? printCharacterDetails(url) : printCharacters();
            break;
        case "TEMPORADAS":
            console.log("He pulsado temporadas");
            printEpisodes();
            break;
        case "LOCALIZACIONES":
            (url) ? printLocationDetails(url) : printLocations();
            console.log("He pulsado localizaciones");
            break;
        default:
            console.log("error 404");
            break;
    }
}

const adaptHeader = page => (page === "HOME") 
? document.getElementsByClassName("header")[0].classList.add("header--home") :
 document.getElementsByClassName("header")[0].classList.remove("header--home");

 const backHome = () => {
    const home = document.getElementsByClassName("header")[0];
    home.addEventListener("click", () => {
        printPage("HOME");
    });
 }
