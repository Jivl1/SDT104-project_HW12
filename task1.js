try {
  const result = getCalculation("area")("circle", 10);
  console.log("Before definitions:", result);
} catch (error) {
  console.warn("Before definitions: getCalculation is not available yet.", error.message);
}

try {
  const area = calculateArea("circle", 10);
  console.log("calculateArea before definition:", area);
} catch (error) {
  console.warn("calculateArea before definition failed:", error.message);
}

function calculateArea(shape, value) {
  switch (shape) {
    case "circle":
      return Math.PI * value * value;
    case "square":
      return value * value;
    default:
      return null;
  }
}

const calculatePerimeter = function (shape, value) {
  switch (shape) {
    case "circle":
      return 2 * Math.PI * value;
    case "square":
      return 4 * value;
    default:
      return null;
  }
};

const getCalculation = function (type) {
  if (type === "area") {
    return calculateArea;
  }

  if (type === "perimeter") {
    return calculatePerimeter;
  }

  throw new Error(`Unknown calculation type: "${type}"`);
};

console.log("\n--- Task 1 ---");

const areaResult = getCalculation("area")("circle", 10);
const perimeterResult = getCalculation("perimeter")("square", 5);

console.log("Area of circle r=10:", areaResult.toFixed(4));
console.log("Perimeter of square side=5:", perimeterResult);

console.log("\n--- typeof ---");
console.log("calculateArea:", typeof calculateArea);
console.log("calculatePerimeter:", typeof calculatePerimeter);
console.log("getCalculation:", typeof getCalculation);

window._task1 = {
  calculateArea,
  calculatePerimeter,
  getCalculation,
  areaCircle: areaResult,
  perimeterSquare: perimeterResult,
};
