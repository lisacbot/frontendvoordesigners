var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    var films = request.response;
    for (var i = 0; i < films.length; i++) {
        populateHeader(films[i]);
    }
}

function populateHeader(jsonObj) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myUl = document.createElement('ul');
    var myImg = document.createElement('img');

    myH2.textContent = jsonObj['title'];
    myImg.src = jsonObj['cover'];

    myArticle.appendChild(myH2);
    myArticle.appendChild(myImg);

    var directors = jsonObj['directors'];
    for (var i = 0; i < directors.length; i++) {
        var myList = document.createElement('li');

        myList.textContent = directors[i].name;
        myUl.appendChild(myList);
    }
    myArticle.appendChild(myUl);
    section.appendChild(myArticle);


}

var buttonEen = document.querySelector('button:nth-of-type(1)');
buttonEen.onclick = function () {
    filter('Horror');
    document.getElementsByTagName('BODY')[0].style.backgroundColor = "red";
}

var buttonTwee = document.querySelector('button:nth-of-type(2)');
buttonTwee.onclick = function () {
    filter('Crime');
    document.getElementsByTagName('BODY')[0].style.backgroundColor = "blue";
}

var buttonDrie = document.querySelector('button:nth-of-type(3)');
buttonDrie.onclick = function () {
    filter('Thriller');
    document.getElementsByTagName('BODY')[0].style.backgroundColor = "green";
}

var buttonVier = document.querySelector('button:nth-of-type(4)');
buttonVier.onclick = function () {
    filter('Drama');
    document.getElementsByTagName('BODY')[0].style.backgroundColor = "orange";
}

var buttonVijf = document.querySelector('button:nth-of-type(5)');
buttonVijf.onclick = function () {
    filter('Action');
    document.getElementsByTagName('BODY')[0].style.backgroundColor = "grey";
}

var buttonZes = document.querySelector('button:nth-of-type(6)');
buttonZes.onclick = function () {
    filter('Adventure');
    document.getElementsByTagName('BODY')[0].style.backgroundColor = "purple";
}

function filter(f) {
    //document.getElementsByTagName('BODY')[0].style.backgroundColor = "yellow";
    section.innerHTML = '';
    var films = request.response;
    for (var i = 0; i < films.length; i++) {
        console.log(films[i].genres);
        for (var j = 0; j < films[i].genres.length; j++) {
            if (films[i].genres[j] == f) {
                populateHeader(films[i]);
            }
        }
    }
}

document.addEventListener("keydown", function (event) {
    console.log(event.which);
})



document.onkeyup = function (e) {
    if (e.which == 72) {
        filter('Horror');
        document.getElementsByTagName('BODY')[0].style.backgroundColor = "red";
    } else if (e.which == 67) {
        filter('Crime');
        document.getElementsByTagName('BODY')[0].style.backgroundColor = "blue";
    } else if (e.which == 84) {
        filter('Thriller');
        document.getElementsByTagName('BODY')[0].style.backgroundColor = "green";
    } else if (e.which == 68) {
        filter('Drama');
        document.getElementsByTagName('BODY')[0].style.backgroundColor = "orange";
    } else if (e.which == 65) {
        filter('Action');
        document.getElementsByTagName('BODY')[0].style.backgroundColor = "grey";
    } else if (e.which == 86) {
        filter('Adventure');
        document.getElementsByTagName('BODY')[0].style.backgroundColor = "purple";
    }
}
