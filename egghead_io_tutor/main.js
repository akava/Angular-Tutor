var myApp = angular.module('myApp', [])

myApp.directive("superman", function(){
	return {
		restrict: "E",
		template: "<div>Here I am to save the day</div>"
	}
})

myApp.factory('Data', function(){
	return {message: "I'm data from a service"};
})

myApp.factory('Avengers', function(){
	var avengers = {};
	avengers.cast = __avengers;

	return avengers;
})

myApp.filter('reverse', function(){
	return function(text) {
		return text.split("").reverse().join("");
	}
})


function FirstCtrl($scope, Data){
	$scope.data = Data;

	$scope.reversed = function(message){
		return message.split("").reverse().join("");
	}
}

function AvengersCtrl($scope, Avengers){
	$scope.avengers = Avengers;
}





__avengers = [ { "Character" : "Tony Stark / Iron Man",
    "Name" : "Robert Downey Jr."
  },
  { "Character" : "Steve Rogers / Captain America}",
    "Name" : "Chris Evans"
  },
  { "Character" : "Bruce Banner / The Hulk",
    "Name" : "Mark Ruffalo"
  },
  { "Character" : "Thor",
    "Name" : "Chris Hemsworth"
  },
  { "Character" : "Natasha Romanoff / Black Widow",
    "Name" : "Scarlett Johansson"
  },
  { "Character" : "Clint Barton / Hawkeye",
    "Name" : "Jeremy Renner"
  },
  { "Character" : "Loki",
    "Name" : "Tom Hiddleston"
  },
  { "Character" : "Agent Phil Coulson",
    "Name" : "Clark Gregg"
  },
  { "Character" : "Agent Maria Hill",
    "Name" : "Cobie Smulders"
  },
  { "Character" : "Selvig",
    "Name" : "Stellan Skarsgard"
  },
  { "Character" : "Nick Fury",
    "Name" : "Samuel L. Jackson"
  },
  { "Character" : "Pepper Potts",
    "Name" : "Gwyneth Paltrow"
  },
  { "Character" : "Jarvis (voice)",
    "Name" : "Paul Bettany"
  },
  { "Character" : "The Other",
    "Name" : "Alexis Denisof"
  },
  { "Character" : "NASA Scientist",
    "Name" : "Tina Benko"
  }
];