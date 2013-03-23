var seaBattleApp = angular.module('seaBattleApp', [])

seaBattleApp.factory('Field', function(){
	var makeCell = function(ship){
		return {state: 'clear', hasShip: ship};
	}

	return {rows:[[makeCell(false),makeCell(false),makeCell(false),makeCell(false)],
				  [makeCell(false),makeCell(false),makeCell(true),makeCell(false)],
				  [makeCell(false),makeCell(false),makeCell(true),makeCell(false)],
				  [makeCell(false),makeCell(false),makeCell(true),makeCell(false)]]};
})

function FieldCtrl($scope, Field){
	$scope.field = Field;

	$scope.toogleCell = function(cell){
		if (cell.state !== 'clear') return;

		if(cell.hasShip){
			cell.state = 'hit';
		}
		else{
			cell.state = 'miss';
		}
	}
}