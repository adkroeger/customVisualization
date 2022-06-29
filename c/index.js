const radius = 6;
const height = 800;
const width = 800;
const step = radius * 2;

//Erstellen des SVG, welches als Container dient
const svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("viewBox", [0, 0, width, height]);

//Erstellen eines Hintergrundes in das SVG auf Basis der animierten Grafik aus Aufgabe a)
createBackground(svg, width, height, radius, step);

//Erstellen eine
createNewElement(svg, width, height);