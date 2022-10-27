const carModel = {
  manufacturer: "VW",
  modell: "Golf",
};

const carModelExtended = {
  ...carModel,
  modell: "Polo",
  engine: "Elektro",
};

console.log(carModel);
console.log(carModelExtended);
