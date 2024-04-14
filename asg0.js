// Navya Gulati
// nagulati@ucsc.edu
function drawVector(v, color) {
  var canvas = document.getElementById("example");
  var ctx = canvas.getContext("2d");

  const originX = canvas.width / 2;
  const originY = canvas.height / 2;

  const modifiedX = originX + v.elements[0] * 20;
  const modifiedY = originY - v.elements[1] * 20;

  ctx.strokeStyle = color;

  ctx.beginPath();
  ctx.moveTo(originX, originY);
  ctx.lineTo(modifiedX, modifiedY);
  ctx.stroke();
}

function handleDrawEvent() {
  var canvas = document.getElementById("example");
  var ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let x = parseFloat(document.getElementById("x").value);
  let y = parseFloat(document.getElementById("y").value);

  let x2 = parseFloat(document.getElementById("x2").value);
  let y2 = parseFloat(document.getElementById("y2").value);

  const v1 = new Vector3([x, y, 0]);
  const v2 = new Vector3([x2, y2, 0]);

  drawVector(v1, "red");
  drawVector(v2, "blue");
}

function angleBetween(v1, v2) {
  const dotprod = Vector3.dot(v1, v2);
  const mag_v1 = v1.magnitude();
  const mag_v2 = v2.magnitude();

  const cos_ang = dotprod / (mag_v1 * mag_v2);
  const angle_radian = Math.acos(cos_ang);
  const angle_degree = angle_radian * (180 / Math.PI);

  return angle_degree;
}

function areaTriangle(v1, v2) {
  const cross_prod = Vector3.cross(v1, v2);
  const para_area = cross_prod.magnitude();

  const tri_area = para_area / 2;
  return tri_area;
}

function handleDrawOperationEvent() {
  var canvas = document.getElementById("example");
  var ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let x = parseFloat(document.getElementById("x").value);
  let y = parseFloat(document.getElementById("y").value);

  let x2 = parseFloat(document.getElementById("x2").value);
  let y2 = parseFloat(document.getElementById("y2").value);

  const v1 = new Vector3([x, y, 0]);
  const v2 = new Vector3([x2, y2, 0]);

  const operation = document.getElementById("op").value;

  drawVector(v1, "red");
  drawVector(v2, "blue");

  let v3;
  if (operation == "add") {
    v3 = v1.add(v2);
    drawVector(v3, "green");
  } else if (operation == "sub") {
    v3 = v1.sub(v2);
    drawVector(v3, "green");
  } else if (operation == "div") {
    var scalar = parseFloat(document.getElementById("scal").value);
    v3 = v1.div(scalar);
    drawVector(v3, "green");
    v3 = v2.div(scalar);
    drawVector(v3, "green");
  } else if (operation == "mul") {
    var scalar = parseFloat(document.getElementById("scal").value);
    v3 = v1.mul(scalar);
    drawVector(v3, "green");
    v3 = v2.mul(scalar);
    drawVector(v3, "green");
  } else if (operation == "mag") {
    console.log("Magnitude v1:", v1.magnitude());
    console.log("Magnitude v2:", v2.magnitude());
  } else if (operation == "norm") {
    v1.normalize();
    v2.normalize();
    drawVector(v1, "green");
    drawVector(v2, "green");
  } else if (operation == "ang") {
    const angle = angleBetween(v1, v2);
    console.log("Angle: ", angle);
  } else if (operation == "area") {
    const ar = areaTriangle(v1, v2);
    console.log("Area of Triangle: ", ar);
  }
}

// DrawRectangle.js
function main() {
  // Retrieve <canvas> element <- (1)
  var canvas = document.getElementById("example");
  if (!canvas) {
    console.log("Failed to retrieve the <canvas> element");
    return;
  }

  // Get the rendering context for 2DCG <- (2)
  var ctx = canvas.getContext("2d");

  // Draw a blue rectangle <- (3)
  ctx.fillStyle = "rgba(0, 0, 0, 1.0)"; // Set a blue color
  ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color
}
