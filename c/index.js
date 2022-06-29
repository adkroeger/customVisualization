const radius = 6;
const height = 800;
const width = 800;
const step = radius * 2;

//Erstellen des SVG, welches als Container dient
const svg = d3.select("#placeholder").append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("viewBox", [0, 0, width, height]);

//Erstellen eines Hintergrundes in das SVG auf Basis der animierten Grafik aus Aufgabe a)
createBackground(svg, width, height, radius, step);

//Erstellen einer weiteren Ellipse auf dem zuvor erstellten Hintergrund und speichern dieses Elements in einer Konstante zur weiteren Verarbeitung
const elem = createNewElement(svg, width, height);

//Hinzufügen einer Animation zur zuvor erstellen Ellipse
animateNewElement(elem);