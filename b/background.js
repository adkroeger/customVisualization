function createBackground(svg, width, height, radius, step) {

   function _data(step, width, height) {
     const theta = Math.PI * (3 - Math.sqrt(5));
   
     return Array.from({ length: 2000 }, (_, i) => {
       const r = step * Math.sqrt((i += 0.5)),
         a = theta * i;
       return [width / 2 + r * Math.cos(a), height / 2 + r * Math.sin(a)];
     });
   }
 
   const data = _data(step, width, height);
 
   const g = svg.append("g");
 
   g.selectAll("circle")
     .data(data)
     .join("circle")
     .attr("cx", ([x]) => x)
     .attr("cy", ([, y]) => y)
     .attr("r", radius)
     .attr("fill", (d, i) => d3.interpolateGreys(i / 360));
 }