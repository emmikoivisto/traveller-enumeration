const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};



Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journeys) => {
    return transport === journeys.transport;
  });
};


Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((totalDistance, journeys) => {
    return totalDistance + journeys.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function (transportMode, value) {
  return this.journeys.distinct((journey) => {
    return journey[transportMode] === value;
  });
};


module.exports = Traveller;
