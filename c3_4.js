///////////////////////////////////////////////////////
// Homework C3.4
// Open c3_4.html to test results in console log
//////////////////////////////////////////////////////

function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// метод, который определяет прибор как включенный в розетку
ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
};

// метод, который определяет прибор как выключеный из розетки
ElectricalAppliance.prototype.unplug = function() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
  };