$(document).ready(function(){
/*var reese = {
      height:"5 ft 10",
      hairColor:"Brown",
      eyeColor:"Brown",
      hobby:"Drinking",
      sayHello: function(){alert("Hello, Friends");}
    }
console.log(reese.height);

reese.animalMostSimilar = "Walrus";

reese.favMovies = ["Jaws", "The Sting", "Jurassic Park", "Singing In The Rain", "Casablanca", "Raiders of the Lost Ark"]
console.log(reese.favMovies[4]);

delete reese.eyeColor;
console.log(reese);

reese.sayBye = function(){alert("I'm afraid I can't let you do that, Reese");}

reese.sayHello();

reese.sayBye(); */
var random = Math.random() * 16 + 1;
random = Math.floor(random);

var url = "https://swapi.co/api/people/" + random + "/";
var movies = [];
$.get(url, function(data){
  console.log("Name: " + data.name);
  console.log("Status: Totally Wizard");
  for (i = 0; i < data.films.length; i++) {

          movieFinder(data.films[i]) }
      console.log(movies)



function movieFinder (url) {
  $.get(url, function(data){
      movies.push(data.title)

});


  };

});





});
