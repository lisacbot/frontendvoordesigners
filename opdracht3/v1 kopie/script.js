var section = document.querySelector('section'); //section om de html in te laden
var buttonHorror = document.getElementsByClassName('buttonHorror'); //button die het genre kiest

var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

function loaddata(requestURL) {
    section.textContent = "loading...";


    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        var films = request.response;
        console.log("request.response", films);

        section.innerHTML = films;
    }
}


buttonHorror.addEventListener("click", function (jsonObj)) {
    var myArticle = document.createElement('article');

    var myH2 = document.createElement('h2');

    var myImg = document.createElement('img');
    var myUl = document.createElement('ul');

    myH2.textContent = jsonObj['title'];
    myImg.src = jsonObj['cover'];

    myArticle.appendChild(myH2);
    myArticle.appendChild(myImg);

    var actors = jsonObj['actors'];
    for (var i = 0; i < actors.length; i++) {
        //console.log(actors[i].actor_name);

        var myList = document.createElement('li');

        myList.textContent = actors[i].actor_name;

        myUl.appendChild(myList);
    }
    myArticle.appendChild(myUl);
    section.appendChild(myArticle);


}



//
//function populateHeader(jsonObj) {
//    var myArticle = document.createElement('article');
//
//    var myH2 = document.createElement('h2');
//
//    var myImg = document.createElement('img');
//    var myUl = document.createElement('ul');
//
//    myH2.textContent = jsonObj['title'];
//    myImg.src = jsonObj['cover'];
//
//    myArticle.appendChild(myH2);
//    myArticle.appendChild(myImg);
//
//    var actors = jsonObj['actors'];
//    for (var i = 0; i < actors.length; i++) {
//        //console.log(actors[i].actor_name);
//
//        var myList = document.createElement('li');
//
//        myList.textContent = actors[i].actor_name;
//
//        myUl.appendChild(myList);
//    }
//    myArticle.appendChild(myUl);
//    section.appendChild(myArticle);
//
//
//}

//function buttonHorror() {
//    document.getElementsByTagName('BODY')[0].style.backgroundColor = "yellow";
//}

//
//var buttonHorror = document.getElementsByClassName("buttonHorror");
//
//buttonHorror.addEventListener("click", function (event)) {
//    var horror = jsonOjb['genres'];
//    var myH3 = document.createElement('h3');
//
//    myH3.textContent = jsonObj['genres'];
//
//    myArticle.appendChild(myH3);
//}
