function animateNewElement(elem) {
   elem.transition().style("fill","green").duration(5000);
}

function rotateAllEllipse() {
   d3.select("svg").selectAll("ellipse").transition()
      .style("transform", "rotate(" + _getRandomNumber(0, 360) + "deg)")
      .duration(2000);
}

function resetRotation() {
   d3.select("svg").selectAll("ellipse").transition()
      .style("transform", "rotate(0deg)");
}

function _getRandomNumber(min, max) {
   return Math.floor(Math.random()*(max-min+1)+min);
}