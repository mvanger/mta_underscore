// Refactor your code with underscore
// Prompt the user CHECK
// Please choose a startLine CHECK
// Please chooose a startStation CHECK
// Please choose an endLine CHECK
// Please choose an endStation CHECK
// Find the intersection CHECK
// Display the number of stops CHECK
// Track the total journeys taken
// Calculate total cost of journeys taken at $2.50 per ride.

function Train(name, stations) {
  this.name = name;
  this.stations = stations;
}

Train.prototype.distance = function(board, exit) {
  board = this.stations.indexOf(board);
  exit = this.stations.indexOf(exit);
  return Math.abs(board - exit);
};

var lStations = [ "8th Ave", "6th", "Union Square", "3rd", "1st" ];
var nStations = [ "Times Square", "34th", "28th and Broadway", "23rd and Broadway", "Union Square", "8th St-NYU" ];
var sixStations = [ "Grand Central", "33rd", "28th and Park", "23rd and Park", "Union Square", "Astor Place" ];
var gStations = [ "Greenpoint", "Nassau", "Metropolitan", "Broadway" ];

var lTrain = new Train('The L Train', lStations);
var nTrain = new Train('The N Train', nStations);
var sixTrain = new Train('The Six Train', sixStations);
var gTrain = new Train('The G Train', gStations);

var trains = [lTrain, nTrain, sixTrain, gTrain,];

var msg = "Which train would you like to get on?\n" + displayLines();
var startTrain = prompt(msg);

var msg2 = "Which station would you like to get on?\n" + displayStartStations();
var startStation = prompt(msg2);

var msg4 = "Which train would you like to get off?\n" + displayLines();
var endTrain = prompt(msg4);

var msg3 = "Which station would you like to get off?\n" + displayEndStations();
var endStation = prompt(msg3);


var trains = [lTrain, nTrain, sixTrain, gTrain];

function displayLines() {
  var trainNames = "";
  for (var i = 0; i < trains.length; i++) {
    trainNames += trains[i].name + "\n";
  }

  _.forEach(trains, trainName);

  return trainNames.trim();
}


function trainName(train){
  return train.name + "\n"
}

function displayStartStations() {
  var train = null;
  for (var j = 0; j < trains.length; j++) {
    if (trains[j].name === startTrain) {
      train = trains[j];
    }
  }
  var trainStations = "";
  for (var k = 0; k < train.stations.length; k++) {
    trainStations += train.stations[k] + "\n";
  }
  return trainStations.trim();
}

function displayEndStations() {
  var train = null;
  for (var x = 0; x < trains.length; x++) {
    if (trains[x].name === endTrain) {
      train = trains[x];
    }
  }
  var trainStations = "";
  for (var y = 0; y < train.stations.length; y++) {
    trainStations += train.stations[y] + "\n";
  }
  return trainStations.trim();
}

var onTrain;

function onTheTrain() {
  var train = null;
  for (var b = 0; b < trains.length; b++) {
    if (trains[b].name === startTrain) {
      onTrain = trains[b];
    }
  }
  return onTrain;
}

var offTrain;

function offTheTrain() {
  var train = null;
  for (var c = 0; c < trains.length; c++) {
    if (trains[c].name === endTrain) {
      offTrain = trains[c];
    }
  }
  return offTrain;
}

var hub = _.intersection(onTheTrain().stations, offTheTrain().stations);

function firstDistance() {
  return onTheTrain().distance(startStation, _.first(hub));
}

function secondDistance() {
  return offTheTrain().distance(_.first(hub), endStation);
}

function distance() {
  if (onTheTrain() === offTheTrain()) {
    alert(onTheTrain().distance(startStation,endStation));
  } else if (_.first(hub) === undefined) {
    alert("You have to walk");
  } else {
    alert(firstDistance() + secondDistance());
  }
}

distance();