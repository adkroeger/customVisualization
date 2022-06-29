function animateNewElement(elem) {
   elem.transition().style("fill","green").duration(5000);
}

function rotateAllEllipse() {
   d3.select("svg").selectAll("ellipse").transition()
      .duration(2000)
      .attr("transform", "rotate(90)");
}