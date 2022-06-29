function _chart() {
  const radius = 6;
  const height = 500;
  const width = 500;
  const step = radius * 2;
  const data = _data(step, width, height);

  let currentTransform = [width / 2, height / 2, height];

  const svg = d3.create("svg").attr("width", width).attr("height", height).attr("viewBox", [0, 0, width, height]);

  const g = svg.append("g");

  g.selectAll("circle")
    .data(data)
    .join("circle")
    .attr("cx", ([x]) => x)
    .attr("cy", ([, y]) => y)
    .attr("r", radius)
    .attr("fill", (d, i) => d3.interpolateRainbow(i / 360));

  function transition() {
    const d = data[Math.floor(Math.random() * data.length)];
    const i = d3.interpolateZoom(currentTransform, [...d, radius * 2 + 1]);

    g.transition()
      .delay(250)
      .duration(i.duration)
      .attrTween("transform", () => (t) => transform((currentTransform = i(t))))
      .on("end", transition);
  }

  function transform([x, y, r]) {
    return `
         translate(${width / 2}, ${height / 2})
         scale(${height / r})
         translate(${-x}, ${-y})
       `;
  }

  return svg.call(transition).node();
}

function _data(step, width, height) {
  const theta = Math.PI * (3 - Math.sqrt(5));

  return Array.from({ length: 2000 }, (_, i) => {
    const r = step * Math.sqrt((i += 0.5)),
      a = theta * i;
    return [width / 2 + r * Math.cos(a), height / 2 + r * Math.sin(a)];
  });
}

document.body.append(_chart());