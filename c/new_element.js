function createNewElement(svg, width, height) {
   const ellipse = svg.append("ellipse")
      .attr("fill", "red")
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("rx", 50)
      .attr("ry", 30)
      .style("transform-origin", "50% 50%");

   return ellipse;
}