const URL_BASE = "https://rickandmortyapi.com/api/";

window.onload = () => {
    printPage("HOME");
}

const printPage = (section) => {
    adaptHeader(section);
    switch (section) {
        case "HOME":
            printHome();
            break;
        case "PERSONAJES":
            console.log("He pulsado personajes");
            printCharacters();
            break;
        case "TEMPORADAS":
            console.log("He pulsado temporadas");
            printEpisodes();
            break;
        case "LOCALIZACIONES":
            printLocations();
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
