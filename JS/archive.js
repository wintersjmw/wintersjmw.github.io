var i = 0,
    anchors = document.querySelectorAll(".zoom"),
    background = document.getElementById("main");

function backgroundChange(event) {
    "use strict";

    window.console.log("hey");
    
    if (event.target.id === "4Mo3We2Days") {
        background.style.background = "url('../Images/movies/4Mo3We2Days.png')";

    } else if (event.target.id === "aMostViolentYear") {
        background.style.backgroundImage = "url('../Images/movies/AMostViolentYear.jpg')";

    } else if (event.target.id === "pigeon") {
        background.style.backgroundImage = "url('../Images/movies/pigeon.jpg')";

    } else if (event.target.id === "akira") {
        background.style.backgroundImage = "url('../Images/movies/akira.jpg')";

    } else if (event.target.id === "amadeus") {
        background.style.backgroundImage = "url('../Images/movies/amadeus.jpg')";

    } else if (event.target.id === "borgman") {
        background.style.backgroundImage = "url('../Images/movies/borgman.jpg')";

    } else if (event.target.id === "briefInterviews") {
        background.style.backgroundImage = "url('../Images/movies/briefInterviews.jpg')";

    } else if (event.target.id === "bronson") {
        background.style.backgroundImage = "url('../Images/movies/bronson.png')";

    } else if (event.target.id === "catchMeDaddy") {
        background.style.backgroundImage = "url('../Images/movies/catchMeDaddy.jpg')";

    } else if (event.target.id === "copCar") {
        background.style.backgroundImage = "url('../Images/movies/copCar.jpg')";

    } else if (event.target.id === "gangsOfNY") {
        background.style.backgroundImage = "url('../Images/movies/gangsOfNY.jpg')";

    } else if (event.target.id === "gattaca") {
        background.style.backgroundImage = "url('../Images/movies/gattaca.jpg')";

    } else if (event.target.id === "hailCeaser") {
        background.style.backgroundImage = "url('../Images/movies/hailCeaser.png')";

    } else if (event.target.id === "hidden") {
        background.style.backgroundImage = "url('../Images/movies/hidden.jpg')";

    } else if (event.target.id === "hudsucker") {
        background.style.backgroundImage = "url('../Images/movies/hudsucker.jpg')";

    } else if (event.target.id === "inBruges") {
        background.style.backgroundImage = "url('../Images/movies/inBruges.jpg')";

    } else if (event.target.id === "koyscatsi") {
        background.style.backgroundImage = "url('../Images/movies/koyscatsi.jpg')";

    } else if (event.target.id === "leviathan") {
        background.style.backgroundImage = "url('../Images/movies/leviathan.jpg')";

    } else if (event.target.id === "libre") {
        background.style.backgroundImage = "url('../Images/movies/libre.jpg')";

    } else if (event.target.id === "moon") {
        background.style.backgroundImage = "url('../Images/movies/moon.jpg')";

    } else if (event.target.id === "mustang") {
        background.style.backgroundImage = "url('../Images/movies/mustang.jpg')";

    } else if (event.target.id === "niceGuys") {
        background.style.backgroundImage = "url('../Images/movies/niceGuys.jpg')";

    } else if (event.target.id === "onlyGodForgives") {
        background.style.backgroundImage = "url('../Images/movies/onlyGodForgives.jpg')";

    } else if (event.target.id === "pansLab") {
        background.style.backgroundImage = "url('../Images/movies/pansLab.jpg')";

    } else if (event.target.id === "planesTrains") {
        background.style.backgroundImage = "url('../Images/movies/planesTrains.png')";

    } else if (event.target.id === "psycho") {
        background.style.backgroundImage = "url('../Images/movies/psycho.jpg')";

    } else if (event.target.id === "repoman") {
        background.style.backgroundImage = "url('../Images/movies/repoman.jpg')";

    } else if (event.target.id === "revenant") {
        background.style.backgroundImage = "url('../Images/movies/revenant.jpg')";

    } else if (event.target.id === "sevenPsycho") {
        background.style.backgroundImage = "url('../Images/movies/sevenPsycho.jpg')";

    } else if (event.target.id === "seven") {
        background.style.backgroundImage = "url('../Images/movies/seven.jpg')";

    } else if (event.target.id === "stillWalking") {
        background.style.backgroundImage = "url('../Images/movies/stillWalking.jpg')";

    } else if (event.target.id === "theFifthElement") {
        background.style.backgroundImage = "url('../Images/movies/theFifthElement.jpg')";

    } else if (event.target.id === "theIllusionist") {
        background.style.backgroundImage = "url('../Images/movies/theIllusionist.jpg')";

    } else if (event.target.id === "thePast") {
        background.style.backgroundImage = "url('../Images/movies/thePast.jpg')";

    } else if (event.target.id === "theSurvivalist") {
        background.style.backgroundImage = "url('../Images/movies/theSurvivalist.jpg')";

    } else if (event.target.id === "theUsualSuspects") {
        background.style.backgroundImage = "url('../Images/movies/theUsualSuspects.jpg')";

    } else if (event.target.id === "theyLive") {
        background.style.backgroundImage = "url('../Images/movies/theyLive.png')";

    } else if (event.target.id === "thisIsNotAFilm") {
        background.style.backgroundImage = "url('../Images/movies/thisIsNotAFilm.jpg')";

    } else if (event.target.id === "turboKid") {
        background.style.backgroundImage = "url('../Images/movies/turboKid.jpg')";

    } else if (event.target.id === "weirdScience") {
        background.style.backgroundImage = "url('../Images/movies/weirdScience.png')";

    } else if (event.target.id === "whatWeDoInTheShadows") {
        background.style.backgroundImage = "url('../Images/movies/whatWeDoInTheShadows.jpg')";

    } else if (event.target.id === "waltzWithB") {
        background.style.backgroundImage = "url('../Images/movies/waltzWithB.jpg')";

    } else if (event.target.id === "garp") {
        background.style.backgroundImage = "url('../Images/movies/garp.jpg')";

    } else if (event.target.id === "worldsGreatestDad") {
        background.style.backgroundImage = "url('../Images/movies/worldsGreatestDad.jpg')";
    }
    
    background.style.backgroundRepeat = "no-repeat";
    background.style.backgroundPosition = "center";

}

function backgroundRemove(event) {
    "use strict";
    
    background.style.backgroundImage = "none";
}

for (i = 0; i < anchors.length; i += 1) {
    anchors[i].addEventListener("mouseover", backgroundChange, false);
    anchors[i].addEventListener("mouseout", backgroundRemove, false);
    window.console.log("yo");
}
